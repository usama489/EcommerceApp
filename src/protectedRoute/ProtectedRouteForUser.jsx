/* A protected route in React is a route that restricts access based on certain conditions,
 such as user authentication. If a user meets the specified conditions (e.g., is logged in),
 they can access the route. Otherwise, they are redirected to another page, such as a login page.
 Why Use Protected Routes?
Protected routes are commonly used in applications where certain pages or features are only 
accessible to authenticated users, such as dashboards or user profiles

 */
import {Navigate} from "react-router" 
export const ProtectedRouteForUser = ({children})=>{
    const user = JSON.parse(localStorage.getItem("users"));
    if(user?.role === "user"){
        return children
    }
    else{
        return <Navigate to={"/login"}/>
    }
}