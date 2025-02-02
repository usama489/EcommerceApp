import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/MyContext";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

/*
The error you encounter occurs because the item object includes a non-serializable property like 
time (likely a Firebase Timestamp or similar object) when you click the Add to Cart or Delete from Cart 
button. Redux strictly requires all values in actions and the state to be serializable.
Check for Non-Serializable Fields
Look for fields like time that might contain non-serializable values, such as:

javascript
Copy code
_Timestamp {
  seconds: 1734198241,
  nanoseconds: 136000000,
}
If such fields exist, they need to be transformed or removed before dispatching.

1. Transform Non-Serializable Fields
Transform the item object to ensure it is serializable. For example, if the time field is a Firebase Timestamp, convert it to a serializable value like an ISO string.

Update the addCart and deleteCart functions:

javascript
Copy code
const addCart = (item) => {
  // Transform the item to ensure it's serializable
  const serializableItem = {
    ...item,
    time: item.time ? new Date(item.time.seconds * 1000).toISOString() : undefined,
  };

  dispatch(addToCart(serializableItem));
  toast.success("Added to cart");
};

const deleteCart = (item) => {
  const serializableItem = {
    ...item,
    time: item.time ? new Date(item.time.seconds * 1000).toISOString() : undefined,
  };

  dispatch(deleteFromCart(serializableItem));
  toast.success("Deleted from cart");
};




*/

const HomePageProductCard = () => {
  const navigate = useNavigate();
  const context = useContext(LoadingContext);
  const { getAllProduct, loading } = context;
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    //
    const serializableItem = {
      ...item,
      time: item.time ? new Date(item.time?.seconds * 1000).toISOString() : undefined,
    };
    console.log("Item being added to cart:", serializableItem);
    dispatch(addToCart(serializableItem));
    toast.success("Added to cart");
  };

  const deleteCart = (item) => {
    const serializableItem = {
      ...item,
      time: item.time ? new Date(item.time?.seconds * 1000).toISOString() : undefined,
    };
    console.log("Item being removed from cart:", serializableItem);
    dispatch(deleteFromCart(serializableItem));
    toast.success("Deleted from cart");
  };

  useEffect(() => {
    const serializableCart = cartItems.map((item) => ({
      ...item,
      time: item.time?.seconds
        ? new Date(item.time?.seconds * 1000).toISOString()
        : undefined, // Default to undefined if time is invalid
    }));

    localStorage.setItem("cart", JSON.stringify(serializableCart));
  }, [cartItems]);


  return (
    <div className="container pm:flex flex-col mx-auto  min-h-screen  p-2">
      <div className="flex justify-center relative top-20">{loading && <Loader />}</div>

      <div className="heading flex justify-center text-2xl font-bold text-center mx-auto">
        Bestselling Products
      </div>

      <div className="flex flex-wrap justify-center">
        {getAllProduct.slice(0, 8).map((item, index) => {
          const { id, productImageUrl, price, title } = item;
          return (
            <div key={index} className="bg-gray-200 flex justify-center m-2 min-h-fit w-72 outline">
              <div className="image p-1">
                <img
                  onClick={() => navigate(`/productinfo/${id}`)}
                  className="w-[280px] h-[373.2px] cursor-pointer"
                  src={productImageUrl}
                  alt={title}
                />
                <div className="title">{title.substring(0, 25)}</div>
                <div className="font-bold text-lg">₹{price}</div>

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

          );
        })}
      </div>
    </div>
  );
};

export default HomePageProductCard;

/*

What is "Serializable" vs "Non-Serializable"?
Serializable:

A serializable value is any data that can be easily converted into a format that can be stored or transferred (e.g., JSON, localStorage, APIs).

Examples of serializable data:

Numbers (123)
Strings ("hello")
Boolean (true, false)
Arrays ([1, 2, 3])
Plain objects ({ name: "John" })
Serializable values can be converted to JSON using JSON.stringify() and back using JSON.parse().

Non-Serializable:

A non-serializable value is any complex object that cannot be directly converted into JSON.

Examples:

Functions (function() {} are not supported in JSON)
Special objects like Date or Firebase Timestamp
Custom classes or circular references
These types need to be transformed into simple, serializable data types to be stored or transferred.

Why Redux Needs Serializable Data
Redux State Rules:

Redux uses JSON.stringify() internally (e.g., during development, debugging).
It expects all data in actions and the state to be serializable to ensure it can work efficiently.
If non-serializable data is passed (like a Date or Firebase Timestamp), Redux throws an error.
Example of a Problem:

A Firebase Timestamp object looks like this:
javascript
Copy code
{
  seconds: 1734198241,
  nanoseconds: 136000000
}
It’s non-serializable because JSON does not understand custom objects like this.
What is time.seconds?
In Firebase, time is usually a Timestamp object that includes:

seconds: The number of seconds since January 1, 1970 (UNIX epoch time).
nanoseconds: Additional precision for fractions of a second.
time.seconds is a simple number and is serializable, whereas the entire Timestamp object is not.

Why Multiply time.seconds by 1000?
The Date object in JavaScript expects time in milliseconds, not seconds.

time.seconds gives seconds since the UNIX epoch.
To convert it to milliseconds, multiply by 1000.
Example:

javascript
Copy code
time.seconds = 1734198241; // Seconds since epoch
timeInMilliseconds = time.seconds * 1000; // Convert to milliseconds
Why Use toISOString()?
toISOString() converts a Date object into a human-readable and serializable string in ISO 8601 format.
Example:

javascript
Copy code
const date = new Date(1734198241000); // Time in milliseconds
console.log(date.toISOString()); // Output: "2024-12-17T09:30:41.000Z"
Benefits of ISO Strings:
Easy to store in databases or JSON.
Human-readable and easy to parse.
Fully serializable (perfect for Redux and JSON).
Summary of What We Did
Problem:

The time property in item was a Firebase Timestamp, which is non-serializable.
Solution:

Extract time.seconds, which is a number and serializable.
Multiply by 1000 to convert to milliseconds (as required by JavaScript Date).
Use toISOString() to convert the Date object into a simple string that can be stored or used anywhere.
Final Example Code:

javascript
Copy code
const serializableItem = {
  ...item,
  time: item.time?.seconds
    ? new Date(item.time.seconds * 1000).toISOString()
    : undefined, // Use undefined if time is invalid
};
Why is This Beginner-Friendly?
Serializable Data: Easy to transfer and store (e.g., JSON). Non-serializable data causes issues with tools like Redux.
Firebase Timestamps: These are non-serializable, but time.seconds is a simple number that we can work with.
Transforming to ISO Strings: Makes the data both human-readable and Redux-compatible.
Multiplying by 1000: A necessary step because JavaScript Date uses milliseconds.

 */