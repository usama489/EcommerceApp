import {useEffect} from "react";
import {useLocation} from "react-router-dom";


const ScrollTop = () => {
    //Returns the current location object which represents the current URL in web browsers.
    const {pathname} = useLocation();
    useEffect(()=>{
        setTimeout(()=>{
            // TOP- 0  BEHAVIOUR : 'SMOOTH'
            window.scrollTo(0,0)
        },0)

    },[pathname])
  return null
}

export default ScrollTop
