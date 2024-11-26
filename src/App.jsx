import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage"
import ProductInfo from "./pages/productInfo/productInfo";
import ScrollTop from "./components/scrollTop/scrollTop";
import CartPage from "./pages/cart/cartPage";
import Layout from "./components/layout/Layout";
import AllProduct from "./pages/allProduct/AllProduct";
import Login from "./pages/registration/Login";
// import Signup from "./pages/registration/Signup";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";


const App = ()=>{
  return(
    <Router>
      <Layout>
      <ScrollTop/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NoPage/>}/>
        <Route path="/allproduct" element={<AllProduct/>}/>
        <Route path="/productinfo" element={<ProductInfo/>}/>
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="signup" element={<Signup/>}></Route> */}
        <Route path="/user-dashboard" element={<UserDashboard/>}></Route>
        <Route path="admin-dashboard" element={<AdminDashboard/>}></Route>

      </Routes>
      </Layout>
    </Router>

  )
}
export default App;