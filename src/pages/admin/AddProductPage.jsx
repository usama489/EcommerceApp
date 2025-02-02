<<<<<<< HEAD
import { useContext, useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { LoadingContext } from "../../context/MyContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const categoryList = [
  {
    name: 'fashion'
  },
  {
    name: 'shirt'
  },
  {
    name: 'jacket'
  },
  {
    name: 'mobile'
  },
  {
    name: 'laptop'
  },
  {
    name: 'shoes'
  },
  {
    name: 'home'
  },
  {
    name: 'books'
  }
]
const AddProductPage = () => {

  const context = useContext(LoadingContext);
  const { loading, setLoading } = context;
  //navigate
  const navigate = useNavigate();
  //product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-us",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )



  });
  const addProductFunction = async () => {
    if (product.title === "" || product.price === "" || product.productImageUrl === "" || product.category === "" || product.description === "") {
      return toast.error("all fields are mandatory");
    }
    setLoading(true);
   
    /*
    2. const productRef = collection(fireDB, 'products')
      What is it?
      collection() is a function from Firebase's Firestore library.
      fireDB ===> represents your Firebase Firestore database instance.
      'products' ===> is the name of the collection in Firestore where you store product data.
      Purpose: Creates a reference (productRef) to the 'products' collection in your Firestore database so you can perform actions like adding or querying data.
      3. await addDoc(productRef, product)
      What is it?
      addDoc() is a Firestore function used to add a new document (entry) to a collection.
      productRef tells Firebase which collection to add the data to ('products').
      product is the data (object) you want to save (e.g., product name, price, etc.).
      await:
      Makes the code "wait" until the addDoc function completes before moving to the next line.
      Required because adding data to the database is an asynchronous task.
      Purpose: Saves a new product to your Firestore database.
    */
    try {
      const productRef = collection(fireDB, 'products')
      await addDoc(productRef, product);
      toast.success("Add product successfully")
      navigate('/admin-dashboard');
      setLoading(false);

    }
    catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Add product failed")
    }
  }
  
  return (
    <div>
      <div className='flex justify-center items-center h-screen '>
        {loading && <Loader/>}
        {/* Login Form  */}
        <div className="login_Form bg-pink-50 outline px-8 py-6 sg:w-80 ipmin:w-[36rem] pm:w-80 border border-pink-100 rounded-xl shadow-md">

          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className='text-center text-2xl ipmin:text-4xl font-bold text-pink-500 '>
              Add Product
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.title}
              onChange = {(e)=>{
                setProduct({...product,title:e.target.value})

              }}
             
              placeholder='Product Title'
              className='bg-pink-50 text-pink-300  border border-pink-200 ipmin:text-2xl ipmin:w-full px-2 py-2 w-96 sg:w-64 pm:w-64 rounded-md placeholder-pink-300'
            />
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="number"
              name="price"
              value={product.price}
               onChange={(e)=>{
                setProduct({...product,price:e.target.value})
               }}
              placeholder='Product Price'
              className='bg-pink-50 text-pink-300 border border-pink-200 px-2  ipmin:text-2xl ipmin:w-full py-2 w-96 pm:w-64 sg:w-64  rounded-md outline-none placeholder-pink-300'
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl"
              value={product.productImageUrl}
               onChange={(e)=>{
                setProduct({...product,productImageUrl:e.target.value})
               }}
              
              placeholder='Product Image Url'
              className='bg-pink-50 text-pink-300 border border-pink-200 ipmin:text-2xl px-2 py-2 ipmin:w-full pm:w-64  sg:w-64  rounded-md outline-none placeholder-pink-300'
            />
          </div>

          {/* Input Four  */}
          <div className="mb-3">
            <select value={product.category} onChange={(e)=>{setProduct({...product,category:e.target.value})}} className="w-full px-1 py-2 text-pink-300 bg-pink-50 border ipmin:text-2xl border-pink-200 rounded-md outline-none  ">
              {/* <option disabled>Select Product Category</option>
              {categoryList.map((value,index)=>{
                const {name} = value;
                return( <option className="first-letter:uppercase" key={index} value={name}>{name}</option>)
               
              })} */}
              {categoryList.map((value, index) => {
                const { name } = value
                return (
                  <option className=" first-letter:uppercase"  value={name}
                  
                   key={index}>{name}</option>
                )
              })}
            </select>
          </div>

          {/* Input Five  */}
          <div className="mb-3">
            <textarea name="description" value={product.description} onChange={(e)=>{setProduct({...product,description:e.target.value})}}
             placeholder="Product Description" rows="5" className=" w-full ipmin:text-2xl px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300 ">

            </textarea>
          </div>

          {/* Add Product Button  */}
          <div className="mb-3">
            <button
              type='button'
              onClick={()=>addProductFunction()}
              className='bg-pink-500 hover:bg-pink-600 w-full ipmin:text-2xl text-white text-center py-2 font-bold rounded-md '
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage;
=======
import React from 'react'

const AddProductPage = () => {
  return (
    <div>
        Add product Page
      
    </div>
  )
}

export default AddProductPage
>>>>>>> 618db75bc572f824d9fdd08d6cd473c8eb99fe00
