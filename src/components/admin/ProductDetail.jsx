<<<<<<< HEAD
import {Link , useNavigate} from "react-router-dom";
import {useContext} from "react";
import { LoadingContext } from "../../context/MyContext";
import Loader from "../loader/Loader";
import { deleteDoc,doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";


const ProductDetail = () => {
    const context = useContext(LoadingContext)
    const {loading, setLoading, getAllProduct,getAllProductFunction} = context;
    const navigate = useNavigate();

    const deleteProduct = async (id)=>{
        setLoading(true);
        try{
        //fireDB instances of firebase firestore database
        //products--->collection where product data is stored
        // id--->specific id of the product reference to that product
        await deleteDoc(doc(fireDB,'products',id))
        toast.success('Product Deleted Successfully')
        getAllProductFunction();
        setLoading(false);
        }catch(error){
            console.log(error);
            setLoading(false)
        }

    }

=======
import {Link} from "react-router-dom";
const ProductDetail = () => {
>>>>>>> 618db75bc572f824d9fdd08d6cd473c8eb99fe00
  return (
      <div className="h-screen">
          <div className="py-5 px-2 flex justify-between items-center">
              {/* text  */}
              <h1 className=" text-xl  text-pink-300 font-bold">All Product</h1>
              {/* Add Product Button  */}
             <Link to={"/addproduct"}><button className="px-5 py-2 bg-pink-50 border border-pink-100 rounded-lg">Add Product</button></Link> 
          </div>

<<<<<<< HEAD
          {/* loading */}
          <div className="flex justify-center relative top-20">
            {loading && <Loader/>}
          </div>

=======
>>>>>>> 618db75bc572f824d9fdd08d6cd473c8eb99fe00
          {/* table  */}
          <div className="w-full px-2 overflow-x-auto">
              <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400" >
                  <tbody>
                      <tr>
                          <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
<<<<<<< HEAD
                          <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Image</th>
                          <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Title</th>
                          <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Price</th>
                          <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Category</th>
                          <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Date</th>
                          <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Action</th>
                          <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Action</th>
                      </tr>
                      {getAllProduct.map((item,index)=>{
                        const {id,title,price,category,date,productImageUrl} = item;
                        return(
                            <tr key={index} className="text-pink-300">
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                                {index+1}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                <img className="h-20 mx-auto" src={productImageUrl} alt=""/>
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500  cursor-pointer ">
                                {title}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 cursor-pointer ">
                                ₹{price}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-slate-500 cursor-pointer ">
                                {category}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-slate-500 cursor-pointer ">
                                {date}
                            </td>
                            
                           <td onClick={()=>navigate(`/updateproduct/${id}`)} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
                            
                                Edit
                            
                            </td>
                           
                            <td onClick={()=>deleteProduct(id)} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red-400 cursor-pointer ">
                                Delete
                            </td>
                        </tr>

                        )
                      })}
                     
=======
                          <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Location Name</th>
                          <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Action</th>
                          <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Action</th>
                      </tr>
                      <tr className="text-pink-300">
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                              1.
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                              {'name'}
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
                              Edit
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
                              Delete
                          </td>
                      </tr>
>>>>>>> 618db75bc572f824d9fdd08d6cd473c8eb99fe00
                  </tbody>
              </table>
          </div>
      </div>
  );
}

export default ProductDetail;