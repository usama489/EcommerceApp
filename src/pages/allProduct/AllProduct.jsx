import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/MyContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";






const AllProduct = () => {
    const navigate = useNavigate();
    const context = useContext(LoadingContext)
    const { getAllProduct } = context;
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    const addCart = (item) => {
        console.log(item);
        const serializableItem = { ...item, time: item.time ? new Date(item.time?.seconds * 1000).toISOString() : undefined, }
        console.log("Item being added to cart:", serializableItem);
        dispatch(addToCart(serializableItem))
        toast.success("Added to Cart")

    }
    const deleteCart = (item) => {
        console.log(item);
        const serializableItem = {
            ...item,
            time: item.time ? new Date(item.time?.seconds * 1000).toISOString() : undefined,
        }
        dispatch(deleteFromCart(serializableItem))
        toast.success("Deleted From Cart")
    }
    useEffect(() => {
        const serializableCart = cartItems.map((item) => ({
            ...item,
            time: item.time.seconds ? new Date(item.time?.seconds * 1000).toISOString() : undefined

        }));
        localStorage.setItem("cart", JSON.stringify(serializableCart))
    }, [cartItems])
    return (

        <div className="container py-8 px-8">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">All Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font" >
                <div className="container px-5 lg:px-0 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.map((item, index) => {
                            const { id, productImageUrl, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="lg:h-80  h-96 w-full"
                                            src={productImageUrl}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                E-bharat
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            {/* <div className="mx-auto flex justify-center">
                                                {cartItems.some((p) =>p.id === item.id ? (
                                                    <button
                                                        onClick={() => deleteCart(item)}
                                                        className="bg-red-700 hover:bg-pink-600 w-full text-white rounded-lg font-bold"
                                                    >
                                                        Delete From Cart
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => addCart(item)}
                                                        className="bg-pink-500 hover:bg-pink-600 w-full text-white rounded-lg font-bold"
                                                    >
                                                        Add To Cart
                                                    </button>
                                                ))}
                                            </div> */}

                                            <div className="mx-auto flex justify-center">
                                                {cartItems.some((p) => p.id === item.id) ? (
                                                    <button
                                                        onClick={() => deleteCart(item)}
                                                        className="bg-red-700 hover:bg-pink-600 w-full text-white rounded-lg font-bold"
                                                    >
                                                        Delete From Cart
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => addCart(item)}
                                                        className="bg-pink-500 hover:bg-pink-600 w-full text-white rounded-lg font-bold"
                                                    >
                                                        Add To Cart
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>

    );
}

export default AllProduct;