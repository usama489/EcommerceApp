import React, { useState } from "react";

const SearchBar = () => {
  // Search Data
  const searchData = [
    {
      name: "Fashion",
      image:
        "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    },
    {
      name: "Shirt",
      image:
        "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
    },
    {
      name: "Jacket",
      image:
        "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
    },
    {
      name: "Mobile",
      image:
        "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
    },
    {
      name: "Laptop",
      image:
        "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    },
    {
      name: "Home",
      image:
        "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
    },
    {
      name: "book",
      image:
        "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
    },
  ];
  const [search, setSearch] = useState("");
  //filter search data

  const filterSearchData = searchData
    .filter((obj) => obj.name.toLowerCase().includes(search)).slice(0,8)


  return (
    <div className="flex justify-center py-0">
      {/* Input Box */}
      <div className="input flex justify-center  items-center">
        <input
          type="text"
          placeholder="search here"
          className="text-black bg-gray-200 mmd:placeholder:text-xl mmd:text-xl placeholder-gray-400 rounded-lg h-10 px-2 mmd:h-[2.5rem] mmd:w-[25rem] sg:w-[18rem] w-96 lg:w-96 md:w-96 pm:w-72 outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Search Drop Down Menu */}
      <div className="flex justify-center">
       {search && <div className="absolute block bg-gray-200 w-96 md:w-96 lg:w-96 z-50 rounded-lg px-2 py-2">
         
         {filterSearchData?.length > 0 ?
         <> 
         {filterSearchData.map((item, index) => {
            return (
              <div key={index} className="py-2 px-2">
                <div className="flex items-center gap-2 text-black">
                  <img className="w-10" src={item.image} alt="" />
                  {item.name}
                </div>
              </div>
            );
          })}</>:
          <>
          <div className="flex justify-center">
            <img
              className="w-20"
              src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
              alt="img"
            />
          </div>
          </>

        
        
        
        
        }
       
         
        
        </div>
}
      </div>
    </div>
  );
};

export default SearchBar;