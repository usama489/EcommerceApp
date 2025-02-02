import { useDispatch, useSelector } from "react-redux";
import { Trash } from 'lucide-react'
import { decrementQuantity, deleteFromCart, incrementQuantity } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import BuyNowModal from "../../components/buyNowModal/BuyNowModal";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";


const CartPage = () =>{
     //fetching cart items from redux store
     const cartItems = useSelector((state) => state.cart);
   
     //dispatch action to delete, incremenet, decrement  item etc in cart
     const dispatch = useDispatch();
     console.log(cartItems);
 
     //delete cart item
     const deleteCart = (item) => {
         dispatch(deleteFromCart(item));
         toast.success("Delete cart")
     };
 
     //increment quantity of cart item
     const handleIncrement = (id) => {
         dispatch(incrementQuantity(id));
     };
 
     //decrement quantity of cart item
     const handleDecrement = (id) => {
         dispatch(decrementQuantity(id));
     };
 
     // const cartQuantity = cartItems.length;
 
     // const cartItemTotal = cartItems.map(item => item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
 
     // const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
 
     //cartItems is an array where each item represnts a product in the cart
     //for eg:- cartItems = [
     //             { id: 1, title: "Product A", quantity: 2 },
     //             { id: 2, title: "Product B", quantity: 3 }  ];
   
    // quantities = [2, 3]
 
     const cartQuantity = cartItems.length;
 
     //cart
 
     // cartItemTotal contain item quantity total
     // [2,3,4,5]
     const cartItemTotal = cartItems.map((item)=>item.quantity).reduce((prevVal,currVal)=>prevVal + currVal,0);
     //₹200 * 3 = ₹600.reduce()====> Total amount of all cartItem
     const cartTotal = cartItems.map(item=>item.price * item.quantity).reduce((prevVal,currVal)=>prevVal + currVal,0)
 
 
     useEffect(() => {
         localStorage.setItem('cart', JSON.stringify(cartItems));
     }, [cartItems])
 
     //user (getItem)  this method returns the value  as a string.
     //JSON.parse() method is used to convert the string into a JavaScript object.
     //localStorage is built in feature of web brwosers that allows you to store
     //key-value-pairs in a web application.The data persists even after the browser closed
     //and reopened making it useful for saving user preferences, session data, or other information that needs to be retained between sessions.
 
     const user = JSON.parse(localStorage.getItem('users'));
    
     const [addressInfo, setAddressInfo] = useState({
         name:"",
         address:"",
         pincode:"",
         mobileNumber:"",
         time:Timestamp.now(),
         date:new Date().toLocaleString(
             "en-US",
             {
                 month:"short",
                 day:"2-digit",
                 year:"numeric",
             }
         )
     });
    
     //Buy Now Function
 
     const buyNowFunction = () =>{
         //validation
         console.log("buy now fubction")
         console.log(addressInfo.name)
            console.log(addressInfo.address)
            console.log(addressInfo.pincode)
            console.log(addressInfo.mobileNumber)
            console.log(addressInfo.time)
            console.log(addressInfo.date)

         if(addressInfo.name === ""  || addressInfo.address === "" || addressInfo.pincode === "" || addressInfo.mobileNumber === "")
         {
             return toast.error("Please fill all the fields");
         }
         //order Info --- cart Information object
         const orderInfo = {
             cartItems, //cartItems--->cartItems array(akk the items of cart when we click on add to cart it get add to cart)
             addressInfo,  //who is ordering means who is buying item
             email:user.email,
             userId:user.uid,
             status:"confirmed",
             time:Timestamp.now(),
             date:new Date().toLocaleString(
                 "en-US",
                 {
                     month:"short",
                     day:"2-digit",
                     year:"numeric",
 
             })
 
         }
         //store orderInfo in firestore database
         // and orderInfo state variable also contains addressInfo(state variable-->buyers info like name, address,tine,date) and cartItems
 
         try{
             //fireDB--->firestore database instance which initialized earlier
            
             //A collection in Firestore is a group of documents that can be accessed and managed together.
             //order will be a collection in firestore database and order data will be stored in this collection which is orderInfo
             const orderRef = collection(fireDB,"order");
              //addDoc()--->add document to the collection
             addDoc(orderRef,orderInfo);
             /*
              Reset Form: After successfully adding the order to the database, 
              it resets the addressInfo state to its initial state with empty strings. 
              This clears the form fields for the next order
              */
             setAddressInfo({
                 name:"",
                 address:"",
                 pincode:"",
                 mobileNumber:"",
 
             })
             toast.success("order placed successfully")
 
         }
         catch(error)
         {
         console.log(error)
         }
    }
    //end of buyNowFunction
     return (
        
             <div className="container mx-auto px-4 max-w-7xl lg:px-0">
                 
                 <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                     <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                         Shopping Cart
                     </h1>
                     <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                         <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
                             <h2 id="cart-heading" className="sr-only">
                                 Items in your shopping cart
                             </h2>
                             <ul role="list" className="divide-y divide-gray-200">
                                 {cartItems.length > 0 ?
 
                                     <>
                                         {cartItems.map((item, index) => {
                                             const { id, title, price, productImageUrl, quantity, category } = item
                                             return (
                                                 <div key={index} className="">
                                                     <li className="flex py-6 sm:py-6 z-1  ">
                                                         <div className="flex-shrink-0">
                                                             <img
                                                                 src={productImageUrl}
                                                                 alt="img"
                                                                 className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                                                             />
                                                         </div>
 
                                                         <div className="overlapping z-1 ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                             <div className=" pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                                 <div>
                                                                     <div className="flex justify-between">
                                                                         <h3 className="text-sm">
                                                                             <div className="font-semibold text-black">
                                                                                 {title}
                                                                             </div>
                                                                         </h3>
                                                                     </div>
                                                                     <div className="mt-1 flex text-sm">
                                                                         <p className="text-sm text-gray-500">{category}</p>
                                                                     </div>
                                                                     <div className="mt-1 flex items-end">
                                                                         <p className="text-sm font-medium text-gray-900">
                                                                             ₹{price}
                                                                         </p>
                                                                     </div>
                                                                 </div>
                                                             </div>
                                                         </div>
                                                     </li>
                                                     <div className="mb-2 flex">
                                                         <div className="min-w-24 flex">
                                                             <button onClick={() => handleDecrement(id)} type="button" className="h-7 w-7" >
                                                                 -
                                                             </button>
                                                             <input
                                                                 type="text"
                                                                 className="mx-1 h-7 w-9 rounded-md border text-center"
                                                                 value={quantity}
                                                             />
                                                             <button onClick={() => handleIncrement(id)} type="button" className="flex h-7 w-7 items-center justify-center">
                                                                 +
                                                             </button>
                                                         </div>
                                                         <div className="ml-6 flex text-sm">
                                                             <button onClick={() => deleteCart(item)} type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                                                                 <Trash size={12} className="text-red-500" />
                                                                 <span className="text-xs font-medium text-red-500">Remove</span>
                                                             </button>
                                                         </div>
                                                     </div>
                                                 </div>
                                             )
                                         })}
                                     </>
                                     :
 
                                     <h1>Not Found</h1>}
                             </ul>
                         </section>
                         {/* Order summary */}
                         <section
                             aria-labelledby="summary-heading"
                             className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
                         >
                             <h2
                                 id="summary-heading"
                                 className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                             >
                                 Price Details
                             </h2>
                             <div>
                                 <dl className=" space-y-1 px-2 py-4">
                                     <div className="flex items-center justify-between">
                                         <dt className="text-sm text-gray-800">Price ({cartItemTotal} item)</dt>
                                         <dd className="text-sm font-medium text-gray-900">₹ {cartTotal}</dd>
                                     </div>
                                     <div className="flex items-center justify-between py-4">
                                         <dt className="flex text-sm text-gray-800">
                                             <span>Delivery Charges</span>
                                         </dt>
                                         <dd className="text-sm font-medium text-green-700">Free</dd>
                                     </div>
                                     <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                         <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                         <dd className="text-base font-medium text-gray-900">₹ {cartTotal}</dd>
                                     </div>
                                 </dl>
                                 <div className="px-2 pb-4 font-medium text-green-700">
                                    {/* passing props to BuyNowModal */}
                                     <div className="flex gap-4 mb-6">
                                        {/*when we click to Buy Now button btn of  cart page it will redirect to login page if user is not logged in otherwise it will open BuyNowModal */}
                                        {user ? <BuyNowModal addressInfo={addressInfo} setAddressInfo={setAddressInfo} buyNowFunction={buyNowFunction}/>
                                        : <Navigate to={'/login'}/>} 
                                     </div>
                                 </div>
                             </div>
                         </section>
                     </form>
                 </div>
             </div>
        
     );
}

export default CartPage;