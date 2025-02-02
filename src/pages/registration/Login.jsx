/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { useState,useRef,useContext } from "react";
import {checkValidData} from "../../utils/validate";
import { LoadingContext } from "../../context/MyContext";
import {Timestamp,addDoc,collection, onSnapshot,query,where} from "firebase/firestore";
import {auth,fireDB} from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../../components/loader/Loader";
import { signInWithEmailAndPassword } from "firebase/auth";

/*
react-hot-toast: A library for displaying notifications (e.g., success or error messages).
auth & fireDB: Firebase instances for authentication and Firestore database.
--------------------
Firestore methods:
------------------
collection: Specifies the collection to query from the Firestore database.
onSnapshot: A listener that watches Firestore for real-time updates.
query: Builds a query for filtering data.
where: Adds conditions to the query.




*/


const Login = () => {

    
    //-----------------------------------------------------------------------------------------
    
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState([]);
    const name = useRef(null)
    const password = useRef(null)
    const email = useRef(null);
    const context = useContext(LoadingContext)
    const {loading,setLoading} = context;
    const navigate = useNavigate();
    //user Signup State
    const [userSignup,setUserSignup] = useState(
        {
            name:name?.current?.value,
            email:email?.current?.value,
            password:password?.current?.value,
            role:"user"}
    
    )
    const handleSignIn = ()=>{
      setIsSignInForm(!isSignInForm);
    }

    // when signin or signup button click this function get execute
    const handleSignInButtonClick = async ()=>{
       
       
        if(!isSignInForm){
            //-----------------------false ---> SignUp logic  <-----  ----------------------- 
            //validation 
            const message = checkValidData(email.current.value,password.current.value,name.current.value);
            if(message){
                // console.log(errorMessage[0])
                console.log(message);
                setErrorMessage(message);
                return;
              
            }
            setLoading(true);

            //Actual code of signup
            try{
                const users = await createUserWithEmailAndPassword(auth,email.current.value,password.current.value);
                //create user object
                let user = {
                    name:name.current.value,
                    email:email.current.value,
                    password:password.current.value,
                    uid:users.user.uid,
                    role:userSignup.role,
                    time:Timestamp.now(),
                    date:new Date().toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})

                }
               
               //TO STORE OUR USER IN FIREBASE DATABASE WE NEED TO CREATE A REFERENCE
               const userReference = collection(fireDB,"user");               // collection is a firestore method from firebase
               //to store user object we'll invoke to addDoc method or add user detail
               addDoc(userReference,user);   //it take two argument 1. reference of user created using collection() and 2. user-->user obj want to store
               //set user signup
               setUserSignup({
                name:"",
                email:"",
                password:"",
               })
               toast.success("Signup Successfully")
               setLoading(false);
               navigate('/')
               
            }
            catch(error){
                console.log(error)
                setLoading(false)

            }
           
        }else{
            //Login
            //validation for Login
            const message = checkValidData(email.current.value,password.current.value);
            if(message){
                // console.log(errorMessage[0])
                console.log(message);
                setErrorMessage(message);
                return;
              
            }
            setLoading(true);
            //Actual Code for Login user
            try{
               
                let user= {
                    role:userSignup?.role
                }
                // console.log(role)
                // attempt to login using firebase signInWithEmailAndPassword method.if successful, users
                // contains the authenticated user's information
                const users = await signInWithEmailAndPassword(auth,email.current.value,password.current.value)

                //Builds a Firestore query: collection(fireDB,"user")---->refers to the user collection.
                // where("uid","==",users?.user?.uid)------->FIlters users by uid matching the logges-in-user
                const q = query(collection(fireDB,"user"),
                                where('uid','==',users?.user?.uid))
                
                // onSnapshot(q,callback):listens for real-time updates to the query results
                //iterate through the results with forEach to extract data.
                // Stores user data in localStorage for later use.
                //JSON.stringify(user) : converts the user object to a string
                const data = onSnapshot(q,(QuerySnapshot)=>{
                    let user = null;
                    QuerySnapshot.forEach((doc)=>(user = doc.data()));
                    if(!user){
                        toast.error("User data not found in Firestore");
                        setLoading(false);
                        return;
                    }
                    localStorage.setItem("users",JSON.stringify(user))
                    email.current.value = "";
                    password.current.value = "";
                    toast.success("Login Successfully")
                    setLoading(false);
                    if(user && user.role){
                    if(user.role==="user"){
                        navigate("/user-dashboard");
                    }else{
                        navigate("/admin-dashboard")
                    }
                }else{
                    toast.error("user role is undefined");
                    setLoading(false);
                }
                });
                /* clean up the subscription created by onSnapshot
                --------------------------------------------------
                onSnapshot sets up a real time listener for changes in firestore database.
                it listens for updates to the firestore query and calls the provided callback (QuerySnapshot=>{})
                whenever theere are changes.
                Why use cleanup:
                when you setup a real time listener like onSnapshot, it needs to be unsubscribed to avoid memory
                leaks or unwanted listeners when the component unmounts or the listeneer is no longer needed.
                return ()=> data;
                ---------------
                onSnapshot returns a function that can be used to unsubscribe the listener.
                By writing return ()=> data, you:
                 1. Define a cleanup function (()=>data) that will unsubscribe the listener when the component
                    unmounts or the effect is cleaned up.
                2. Ensure there are no unnecessary listeners hanging around in memory.
                Without cleanup:
                ---------------
                the listener will remain acive even when it is no longer needed causing unnecessary memory usage.
                potential bugs where the listener is triggered for outdated components or states.
                
                
                */
                return ()=>data;

                

                
                                         
            
            
               

            }
            catch(error){
                console.log(error)
                setLoading(false);
                toast.error("Login Failed")
            }
            

        }
    }
    //-------------------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------
    

  
    
    return (
        <div className='flex justify-center h-[60vh] pm:flex min-w-screen  pm:w-10/12 pm:justify-center  overflow-x-hidden mx-10 my-10  items-center'>
            {/* Login Form  */}
           
            {loading && <Loader/>} {/* if loading is true so load Loader component */}
            <div className="login_Form bg-pink-50 sg:w-[28rem]  h-[23rem] px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center pm:text-xl sg:text-3xl text-2xl font-bold text-pink-500 '>
                        {isSignInForm ? "Login" : "SignUp"}
                    </h2>
                </div>

                {/* Input One  */}
               { !isSignInForm && ( <div className="mb-3 sg:flex sg:justify-center pm:flex pm:justify-center">
                    <input
                        type="text"
                        ref={name}
                        placeholder='Full Name'
                        className='bg-pink-50 border sg:text-xl sg:w-[17rem] pm:w-[15rem] border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>)
                }

                {/* Input Two  */}
                <div className="mb-3 pm:flex pm:justify-center">
                    <input
                        type="email"
                        ref={email}
                        placeholder='Email Address'
                        className='bg-pink-50 sg:text-xl border pm:w-[15rem] sg:w-[17rem] border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5 pm:flex pm:justify-center">
                    <input
                        type="password"
                        ref={password}
                        placeholder='Password'
                        className='bg-pink-50 sg:text-xl border pm:w-[15rem] sg:w-[17rem] border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5 pm:flex sg:w-full  sg:flex sg:justify-center pm:justify-center">
                    <button
                        type='button'
                        onClick={handleSignInButtonClick}
                        className='bg-pink-500 hover:bg-pink-600 w-full sg:w-[8rem] pm:w-[6rem] sg:text-xl text-white text-center py-2 font-bold rounded-md '
                    >
                       {isSignInForm ? "Login" : "SignUp"}
                    </button>
                </div>

                <div>
                    <h3 className="text-red-400 px-2">{`${errorMessage.join()}`}</h3>
                    <h2 className='text-black  sg:text-xl px-2'>{isSignInForm ? "Dont have an account" : "Have an account"} <Link className=' text-pink-500 sg:text-2xl font-bold' onClick={handleSignIn}>{isSignInForm ? "SignUp" : "Login"}</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Login;