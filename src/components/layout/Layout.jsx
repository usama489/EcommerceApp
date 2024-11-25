import React from 'react';
import Navbar from "../navbar/Navbar";
import Footer from '../footer/Footer';

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className='main-container min-h-screen'>
            {/* dynamic as per user clicked like about, contact us */}
            {children} 
        </div>
        <Footer/>
      
    </div>
  )
}

export default Layout
