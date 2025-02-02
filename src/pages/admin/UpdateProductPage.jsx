import { useNavigate, useParams } from "react-router-dom";
import { LoadingContext } from "../../context/MyContext";
import { useContext, useEffect, useState, } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

//ProductDetail--->UpdateProductPage

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

const UpdateProductPage = () => {
  const context = useContext(LoadingContext);
  const { loading, setLoading, addProductFunction,getAllProductFunction } = context

  //navigate
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id)

  //on the basis of id set product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  })
  //get Single Product Function--->when updateproduct page loads after clicking on edit of product detail 
  //so title and  other details should be filled by default so we can knowe which product we waana edit
  const getSingleProductFunction = async () => {
    setLoading(true);
    try {
      /*fireDB: The Firestore instance you initialized earlier.
        "products": The name of the Firestore collection where all product documents are stored.
         id: The unique identifier of the specific product you want to fetch. 
         getDoc() ---> function fetches the document data from Firestore
         */
      const productTemp = await getDoc(doc(fireDB, "products", id));
      const product = productTemp.data();
      setProduct({
        title: product?.title,
        price: product?.price,
        productImageUrl: product?.productImageUrl,
        category: product?.category,
        description: product?.description,
        quantity: product?.quantity,
        time: product?.time,
        date: product?.date
      })
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  }
  /*      await setDoc(doc(fireDB, 'products', id), product)
          Breaking this down:

          doc(fireDB, 'products', id)
          Creates a reference to the document in the products collection with the specified id.
          Example: If id = "12345", this points to the document products/12345 in Firestore.
          setDoc(docRef, product)
          Writes (or overwrites) the product object into the specified document.
          If the document already exists, it will replace the entire document with the product object.
          If the document doesn’t exist, Firestore will create it. */
  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, 'products', id), product)
      toast.success("product updated successfully")
      getAllProductFunction();
      setLoading(false);
      navigate('/admin-dashboard')
    }
    catch (error) {
      console.log(error);
      setLoading(false)

    }
  }
  /*useEffect() hook is used for a specific purpose:
  to run the getSingleProductFunction when the component first loads.  */
  useEffect(() => {
    getSingleProductFunction();
  }, [])
  return (
    <div>
      <div className='flex justify-center items-center h-screen '>
        {loading && <Loader />}
        {/* Login Form  */}
        <div className="login_Form bg-pink-50 outline px-8 py-6 sg:w-80 ipmin:w-[36rem] pm:w-80 border border-pink-100 rounded-xl shadow-md">

          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className='text-center text-2xl ipmin:text-4xl font-bold text-pink-500 '>
              Update Product
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={(e) => {
                setProduct({ ...product, title: e.target.value })

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
              onChange={(e) => {
                setProduct({ ...product, price: e.target.value })
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
              onChange={(e) => {
                setProduct({ ...product, productImageUrl: e.target.value })
              }}

              placeholder='Product Image Url'
              className='bg-pink-50 text-pink-300 border border-pink-200 ipmin:text-2xl px-2 py-2 ipmin:w-full pm:w-64  sg:w-64  rounded-md outline-none placeholder-pink-300'
            />
          </div>

          {/* Input Four  */}
          <div className="mb-3">
            <select value={product.category} onChange={(e) => { setProduct({ ...product, category: e.target.value }) }} className="w-full px-1 py-2 text-pink-300 bg-pink-50 border ipmin:text-2xl border-pink-200 rounded-md outline-none  ">
              {/* <option disabled>Select Product Category</option>
              {categoryList.map((value,index)=>{
                const {name} = value;
                return( <option className="first-letter:uppercase" key={index} value={name}>{name}</option>)
               
              })} */}
              {categoryList.map((value, index) => {
                const { name } = value
                return (
                  <option className=" first-letter:uppercase" value={name}

                    key={index}>{name}</option>
                )
              })}
            </select>
          </div>

          {/* Input Five  */}
          <div className="mb-3">
            <textarea name="description" value={product.description} onChange={(e) => { setProduct({ ...product, description: e.target.value }) }}
              placeholder="Product Description" rows="5" className=" w-full ipmin:text-2xl px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300 ">

            </textarea>
          </div>

          {/* Add Product Button  */}
          <div className="mb-3">
            <button
              type='button'
              onClick={updateProduct}
              className='bg-pink-500 hover:bg-pink-600 w-full ipmin:text-2xl text-white text-center py-2 font-bold rounded-md '
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProductPage;