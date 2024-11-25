import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div>
            {/* footer  */}
            <footer className="text-gray-600 body-font bg-pink-600">
                {/* main  */}
                <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                    {/* logo  */}
                    <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <span className="text-xl font-bold">E-bharat</span>
                    </Link>
                    {/* para  */}
                    <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2024 ebharat —
                        <Link
                        to={'/'}
                            className="text-gray-100 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            @ebharat
                        </Link>
                    </p>
                    
                    {/* media icon  */}
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        {/* facebook  */}
                        <Link className="text-gray-100 cursor-pointer">
                            {/* <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24" >*/}
                              
                                {/* <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> */}
                            {/* </svg> */}
                              <FacebookIcon/>
                            
                        </Link>

                        {/* twitter  */}
                        <Link className="ml-3 text-gray-100 cursor-pointer">
                            <TwitterIcon/>
                        </Link>

                        {/* instagram  */}
                        <Link className="ml-3 text-gray-100 cursor-pointer">
                           <InstagramIcon/>
                        </Link>

                        {/* linkedIn  */}
                        <Link to="/" className="ml-3 text-gray-100 cursor-pointer">
                            <LinkedInIcon/>
                        </Link>
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;