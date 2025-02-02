import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage"
import ProductInfo from "./pages/productInfo/productInfo";
import ScrollTop from "./components/scrollTop/scrollTop";
import CartPage from "./pages/cart/CartPage";
import Layout from "./components/layout/Layout";
import AllProduct from "./pages/allProduct/AllProduct";
import Login from "./pages/registration/Login";
// import Signup from "./pages/registration/Signup";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import {LoadingProvider} from "./context/MyContext"
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/category/CategoryPage";






const App = ()=>{
  return(
    <LoadingProvider>
    <Router>
      <Layout>
      <ScrollTop/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NoPage/>}/>
        <Route path="/allproduct" element={<AllProduct/>}/>
        <Route path="/productinfo/:id" element={<ProductInfo/>}/>
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        
        {/* Protected Route and dynamic id*/}
        
        <Route path="/user-dashboard" element={<ProtectedRouteForUser><UserDashboard/></ProtectedRouteForUser>}></Route>       
        <Route path="admin-dashboard" element={<ProtectedRouteForAdmin><AdminDashboard/></ProtectedRouteForAdmin>}></Route>
        <Route path="/addproduct" element={<ProtectedRouteForAdmin><AddProductPage/></ProtectedRouteForAdmin>}></Route>
        <Route path="/updateproduct/:id" element={<ProtectedRouteForAdmin><UpdateProductPage/></ProtectedRouteForAdmin>}/>
        <Route path="categorypage/:categoryname" element={<CategoryPage/>}/>
      

      </Routes>
      <Toaster/>
      </Layout>
    </Router>
    </LoadingProvider>

  )
}
export default App;