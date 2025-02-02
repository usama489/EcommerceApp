import { useContext, useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useParams } from "react-router-dom";
import { LoadingContext } from "../../context/MyContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import BuyNowModal from "../../components/buyNowModal/BuyNowModal";
// useDispatchispatch

const productInfo = () => {
  const context = useContext(LoadingContext);
  const { loading, setLoading, getAllProduct } = context;
  const [product, setProduct] = useState('');
  const { id } = useParams();

  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    console.log(item);
    const serializableItem = {
      ...item,
    time:item.time ? new Date(item.time?.seconds * 1000).toISOString() : undefined
  }
    dispatch(addToCart(serializableItem));
    toast.success("Added to Cart");
  }
  const deleteCart = (item) => {
    const serializableItem = {
      ...item,
    time:item.time ? new Date(item.time?.seconds * 1000).toISOString() : undefined}
    dispatch(deleteFromCart(serializableItem));
    toast.success("Deleted From Cart");
  }
  useEffect(() => {
    const serializableCartItems = cartItems.map((item)=>(
      {
        ...cartItems,time:item.time?.seconds ? new Date(item.time.seconds * 1000).toISOString : undefined

      }
    ))
    localStorage.setItem('cart', JSON.stringify(serializableCartItems))
  }, [cartItems])

  // we will fetch product info from firebase firestore database in the basis of product id
  const getProductData = async () => {
    setLoading(true);
    //fireDB--->firestore database instance which initialized earlier
    // products---> collection of firestore database where document or entry stored.
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      setProduct(productTemp.data());
      setLoading(false);

    }
    catch (error) {
      console.log(error)
      setLoading(false);
    }
  }
  //to extecute this function at the initial component rendering for the first and one time
  useEffect(() => {
    getProductData();
  }, [])

  const { title, price, description, productImageUrl } = product

  return (

    <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">

      {
        loading ? (<div className="absolute left-[50%] bottom-[50%]">
          {loading && <Loader />}
        </div>)
          :
          (
            <>
              {/* container */}
              <div className="container max-w-6xl px-4 mx-auto">
                {/* main */}
                <div className="main flex flex-wrap mb-24 -mx-4">
                  {/* 1 */}
                  <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                    <div className="">
                      <div className="">
                        <img
                          className=" w-full lg:h-[39em] rounded-lg"
                          src={productImageUrl}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>


                  {/* 2 */}
                  <div className="w-full px-4 md:w-1/2">
                    {/* 2 container */}
                    <div className="lg:pl-20">
                      {/* 2 :1 */}
                      <div className="mb-6 ">
                        <h2 className="max-w-xl mb-6 pm:text-2xl sm:text-2xl text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                          {title}
                        </h2>
                        <div className="flex flex-wrap items-center mb-6">
                          <div className="flex mb-4 mr-2 lg:mb-0 pm:text-xl sm:text-xl">
                            ⭐⭐⭐⭐
                          </div>
                        </div>
                        <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                          <span>Rs.{price}</span>
                        </p>
                      </div>
                      {/* 2:2 */}
                      <div className="description mb-6">
                        <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400"></h2>
                        <p>
                          {description}
                        </p>
                      </div>
                      {/* 2:3 */}
                      <div className="mb-6 " />
                      {/* 2:4 */}
                      <div className="flex flex-wrap items-center mb-6">
                        {
                          cartItems.some((p) => p.id === product.id) ?

                            <button onClick={() => deleteCart(product)} className="w-full px-4 pm:text-xl sm:text-xl py-3 pm:w-36 sm:w-36 pm:mx-auto sm:mx-auto sm:w-30 text-center text-pink-600 bg-pink-100 border border-pink-600  hover:bg-pink-600 hover:text-gray-100 rounded-xl">
                              Delete From Cart
                            </button> :
                            <button onClick={() => addCart(product)} className="w-full px-4 pm:text-xl sm:text-xl py-3 pm:w-36 sm:w-36 pm:mx-auto sm:mx-auto sm:w-30 text-center text-pink-600 bg-pink-100 border border-pink-600  hover:bg-pink-600 hover:text-gray-100 rounded-xl">
                              Add to Cart
                            </button>

                        }

                      </div>
                      <div className="flex gap-4 mb-6">
                        {/* <button
                          className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
                        >
                          Buy now
                        </button> */}
                        <BuyNowModal />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </>
          )




      }

    </section>

  );
};

export default productInfo;
