import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import { useSelector } from 'react-redux';


const Navbar = () => {
  //get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));


  /*    localStorage is a feature provided by web browsers that allows you to store key-value pairs in the browser.
      The data stored in localStorage persists even if the user refreshes the page or closes and reopens the browser.
      It’s useful for saving data like user preferences, session information, or other lightweight data that needs to persist across page reloads.
      getItem("users") retrieves the value associated with the key "users" from localStorage.
      If no data is found for the key "users", it will return null.
      Now, localStorage.getItem("users") will return the string:
       Why Use JSON.parse()?
      Data stored in localStorage is always saved as a string, even if you save an object.
      To use the stored data as an object in JavaScript, you need to convert it back from a string to an object.
      JSON.parse() takes a JSON string and converts it into a JavaScript object.
  
  
  */
    

  //navigate
  const navigate = useNavigate();

  //logout function
  const logout = ()=>{
    localStorage.clear("users")
    navigate("/login")
  }
  
  //cartItems
  const cartItems = useSelector((state)=>state.cart);
  
 
  const navList = (
    <ul className='flex space-x-3  outline   justify-center font-medium text-md px-5'>
      <li><Link to="/"> Home</Link></li>
      <li><Link to="/allproduct"> All Product</Link></li>
      {!user ? <li><Link to="/login"> Signup</Link></li> : ""}
      {!user ? <li>
                <Link to={'/login'}>Login</Link>
            </li> : ""}
      {/* User */}
      {user?.role === "user" && <li><Link to="/user-dashboard">{user?.name}</Link></li>}
      {user?.role !== "user" && <li><Link to="/admin-dashboard"> {user?.name}</Link></li>}
      {user && <li className='cursor-pointer' onClick={logout}>logout</li>}
      <li><Link to="/cart"> Cart({cartItems.length})</Link></li>
      
    </ul>
  )
  return (
  
    <div className='bg-black border-2 z-1000  w-auto border-red-400 sg:h-fit sticky md:h-56  sg:text-sm  flex  text-white top-0 h-44 lg:h-32 py-0 '>

     {/* main */}
     <div className='lg:flex llg:flex pm:mx-auto sm:mx-auto  sg:mx-auto ixr:mx-auto ipmin:mx-auto llg:justify-between   lg:justify-between  py-3 lg:px-3 llg:w-[100vw]'>
      {/* left */}
      <div className='left mmd:flex mmd:justify-center border-2 border-green-400 flex justify-center  items-center  py-3 lg:py-0   '>
        <Link to="/">
        <img className='h-10 ipmin:h-20 mmd:h-20 llg:h-12' src="../../src/assets/image/logo2.png"/>
        {/* <h2 className='text-center'>E Bharat</h2> */}
        </Link>

      </div>



      {/* center*/}
      <div className='right flex  llg:w-full mmd:w-fit ixr:flex ixr:text-sm ixr:justify-center llg:text-xl llg:flex llg:items-center ipmin:text-3xl justify-center mmd:text-2xl pm:text-[0.9rem] text-gray-200 mb-4 lg:mb-0'>
        {navList}
      </div>

    

      {/* right */}
      
      <SearchBar/>
     
     



      </div>
    </div>
   
  )
}

export default Navbar
