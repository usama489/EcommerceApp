import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import {createContext,useState,useEffect} from "react";
import {fireDB} from "../firebase/FirebaseConfig";

//create Context
export const LoadingContext = createContext();

// Provider component
export const LoadingProvider = ({children})=>{
    const [loading,setLoading] = useState(false);
    //---------------------------------------------------------------------------------------------
    const [getAllProduct,setGetAllProduct] = useState([]);
    // The function getAllProductFunction is defined to fetch all products from a Firestore database.
    
    const getAllProductFunction = async ()=>{
        setLoading(true);  //indicating that the data is being fetched
        try{
            //define a query
            /*1. collection(fireDB,"products"): Fetches the products collection from the Firestore database
              2. orderBy('time') : Orders the documents in the products collection by theier time field
            (eg. newest to oldest or vice cersa)
            query : Combines the above two to create a "query object" taht specifies what data to fetch
            and how to organize it.
            
            
            
            */
            
            const q = query(collection(fireDB,"products"),
                                        orderBy('time'));

            /*
            onSnapshot(q,callback) : attaches a listener to the products collection on the query q
                                      The listener listens for real time updates in Firestore(eg. when a product is added,
                                       updated, or deleted)
                                      Whenever data changes, it triggers the callback function (the second argument of onSnapshot).
            
            */

            /* Q */
            //This sets up a real-time listener using the onSnapshot function from a library like Firebase Firestore.
            //  It listens to changes in the query q. When changes occur, it calls the provided callback function with
            //  QuerySnapshot as the argument.

            const data = onSnapshot(q,(QuerySnapshot)=>{
                //this array will be used to store the products retrieved from the QuerySnapshot.
                let productArray = [];
                //This iterates over each document (doc) in the QuerySnapshot. The forEach method executes the provided function once for each document
                QuerySnapshot.forEach((doc)=>{
                    //This line adds a new object to the productArray. The object contains all the data from the document (doc.data()) 
                    // and adds an id property with the document's ID (doc.id). 
                    // The spread operator (...) is used to include all fields from doc.data().
                    productArray.push({...doc.data(),id:doc.id});
                });
                setGetAllProduct(productArray);
                setLoading(false);

            });
            /* This returns a cleanup function that will unsubscribe from the onSnapshot listener when the component unmounts or 
             the effect is cleaned up.
             This is important to prevent memory leaks and unnecessary updates. */
            return ()=>data;
        }catch(error){
            console.log(error)
            setLoading(false);
        }

    }
   

    //order state
    const [getAllOrder, setGetAllOrder] = useState([[]])
    const getAllOrderFunction  = async ()=>{
        setLoading(true);
        try{
            //defining a query and i query using collection method to get
            //  the order collection from the firestore database in which all the information of the order is stored.
            //  The orderBy method is used to order the documents in the order collection by their time field(oldest to newwest and vice versa)
            // onS
            
            const q =  query(collection(fireDB,"order"),orderBy("time"));
            //onSnapshot is used to listen to the changes in the order collection and whenever there is a change in the order collection
            // it triggers the callback function with QuerySnapshot as the argument.
            const data = onSnapshot(q,(QuerySnapshot)=>{
                let orderArray = [];
                //This iterates over each document (doc) in the QuerySnapshot. The forEach method executes the provided function once for each document
                QuerySnapshot.forEach((doc)=>{
                    //This line adds a new object to the orderArray. The object contains all the data from the document (doc.data())
                    // and adds an id property with the document's ID (doc.id). and spread operator is used to include all fields from doc.data().
                    orderArray.push({...doc.data(),id:doc.id});
                });
                //setGetAllOrder is used to set the orderArray in the getAllOrder state.
                setGetAllOrder(orderArray);
                setLoading(false);
            });
            return ()=>data;

        }catch(error){
            console.log(error);;
            setLoading(false);
        }
    }
    //useEffect is used to run the getAllProductFunction and getAllOrderFunction when the component is mounted once and 
    // the component is updated because of the empty array as the second argument.
    useEffect(()=>{
    
        getAllProductFunction();
        getAllOrderFunction();
    },[])
   
    return(
        <LoadingContext.Provider value={{loading,setLoading,getAllProduct,getAllProductFunction}}>
            {children}
        </LoadingContext.Provider>

    )
}

// we should create context and provider component at same place