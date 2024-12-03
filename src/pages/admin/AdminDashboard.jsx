import {Tabs, Tab, TabList, TabPanel} from "react-tabs";
import ProductDetail from "../../components/admin/ProductDetail";
import OrderDetail from "../../components/admin/OrderDetail";
import UserDetail from "../../components/admin/UserDetail";

const AdminDashboard = () => {
  return (
    <>
    <div className="container w-screen h-fit  mx-auto">
      {/* Heading Admin Dashboard Box */}
      <div
        className="admin-dashboard-heading h-20 my-2  min-w-screen text-2xl text-pink-400 font-semibold
        bg-pink-50 border-2 border-pink-100 flex justify-center items-center rounded-lg"
      >
        Admin Dashboard
      </div>

      {/* UpperBoxContainer */}
      <div className="upperBoxContainer  h-56 px-10 mx-auto border-2 border-pink-100 rounded-lg bg-pink-50">
        <img
          className=" mx-auto py-2 pm:h-32 sm:h-32"
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
        />

        <h3 className="name text-center text-pink-400 llg:text-2xl">
          <span className="font-semibold text-pink-400">Name : </span> Usama
          Khan Mehboob Ahmad
        </h3>
        <h3 className="email text-center text-pink-400 llg:text-2xl">
          <span className="font-semibold llg:text-2xl">Email : </span>usamakhan@gmail.com
        </h3>
      </div>
    </div>
    
     <div>
      <Tabs>
      {/* iconContainer */}
      <TabList className=" flex justify-evenly h-56  my-4   ipmin:flex-row sg:flex-col sg:h-[50%] lg:flex-row llg:flex-row pm:flex-col pm:h-[50%]  mx-24 min-w-screen">

        {/* Total Order */}
        
        <Tab className="p-4 bg-pink-50  my-6 mx-auto w-44 cursor-pointer border-2 border-pink-100 rounded-lg ">
          <img className="text-pink-400 h-12 w-full" src="../../src/assets/image/shopping-basket.svg"/>
          <h2 className="title-font font-medium  text-center text-3xl text-pink-400 fonts1">
            10
          </h2>
          <p className=" text-pink-500 text-center font-bold llg:text-2xl">Total Products</p>
        </Tab>


        <Tab className="p-4 bg-pink-50  my-6 mx-auto w-44 cursor-pointer border-2 border-pink-100 rounded-lg ">
          <img className="text-pink-400 h-12  w-full" src="../../src/assets/image/list-ordered.svg"/>
          <h2 className="title-font font-medium text-center text-3xl text-pink-400 fonts1">
            10
          </h2>
          <p className=" text-pink-500 text-center font-bold llg:text-2xl">Total Order</p>
        </Tab>



        <Tab className="p-4 bg-pink-50 my-6 mx-auto w-44 hover:bg-pink-100 cursor-pointer border-2 border-pink-100 rounded-lg">
          <img className="text-pink-400 h-12 w-full" src="../../src/assets/image/user.svg"/>
          <h2 className="title-font font-medium text-center text-3xl text-pink-400 fonts1">
            10
          </h2>
          <p className=" text-pink-500 text-center font-bold llg:text-2xl">Total User</p>
        </Tab>

      </TabList>
      <TabPanel> <ProductDetail></ProductDetail>
     
      </TabPanel>
      <TabPanel>
       <OrderDetail></OrderDetail>
      </TabPanel>
      <TabPanel>
        <UserDetail></UserDetail>
      </TabPanel>
      </Tabs>
      </div>
      </>
  );
};

export default AdminDashboard;



// Explanation of Components:
// <Tabs>: The container for the tab system.
// <TabList>: A list that contains individual tabs.
// <Tab>: Represents an individual tab.
// <TabPanel>: Represents the content displayed when the corresponding tab is active.