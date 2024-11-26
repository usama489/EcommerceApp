/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import {checkValidData} from "../../utils/validate";

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState([]);
    const name = useRef(null)
    const password = useRef(null)
    const email = useRef(null);
    const handleSignIn = ()=>{
      setIsSignInForm(!isSignInForm);
    }
    const handleSignInButtonClick = ()=>{
        const message = checkValidData(email.current.value,password.current.value)
        if(message){
            // console.log(errorMessage[0])
            setErrorMessage(message);
            return;
          
        }
        if(!isSignInForm){
            //false SignUp logic
        }
    }
    return (
        <div className='flex justify-center h-[60vh]   pm:flex min-w-screen  pm:w-10/12 pm:justify-center  overflow-x-hidden mx-10 my-10  items-center'>
            {/* Login Form  */}
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