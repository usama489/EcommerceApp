import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import Layout from '../layout/Layout';

const navbar = () => {
  const navList = (
    <ul className='flex space-x-3  font-medium text-md px-5'>
      <li><Link to="/"> Home</Link></li>
      <li><Link to="/allproduct"> All Product</Link></li>
      <li><Link to="/signup"> Signup</Link></li>
      {/* User */}
      <li><Link to="/user-dashboard"> Kamal</Link></li>
      <li><Link to="/admin-dashboard"> Admin</Link></li>
      {/* <li>logout</li> */}
      <li><Link to="/cart"> Cart(0)</Link></li>
      
    </ul>
  )
  return (
  
    <div className='bg-black sticky md:h-56  text-white top-0 h-44 lg:h-32 py-0'>

     {/* main */}
     <div className='lg:flex lg:justify-between items-center py-3 lg:px-3'>
      {/* left */}
      <div className='left flex justify-center items-center py-3 lg:py-0'>
        <Link to="/">
        <img className='h-10 mmd:h-20' src="../../src/assets/image/logo2.png"/>
        {/* <h2 className='text-center'>E Bharat</h2> */}
        </Link>

      </div>



      {/* center*/}
      <div className='right flex justify-center mmd:text-2xl text-gray-200 mb-4 lg:mb-0'>
        {navList}
      </div>

    

      {/* right */}
      
      <SearchBar/>
     
     



     </div>
    </div>
   
  )
}

export default navbar
