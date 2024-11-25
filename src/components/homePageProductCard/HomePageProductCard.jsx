import React from "react";
import { useNavigate } from "react-router-dom";

const HomePageProductCard = () => {
  const navigate = useNavigate();
  const productData = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
      title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
      desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
      price: 150,
      trendingProductName: "Featured",
      quantity: 1,
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
      title: "Kaushalam kalash Copper Pot",
      desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
      price: 120,
      trendingProductName: "Featured",
      quantity: 1,
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
      title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
      desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
      price: 130,
      trendingProductName: "Featured",
      quantity: 1,
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
      title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
      desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
      price: 120,
      trendingProductName: "Featured",
      quantity: 1,
    },
    {
      id: 1,
      image:
        "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
      title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
      desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
      price: 150,
      trendingProductName: "Featured",
      quantity: 1,
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
      title: "Kaushalam kalash Copper Pot",
      desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
      price: 120,
      trendingProductName: "Featured",
      quantity: 1,
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
      title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
      desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
      price: 130,
      trendingProductName: "Featured",
      quantity: 1,
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
      title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
      desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
      price: 120,
      trendingProductName: "Featured",
      quantity: 1,
    },
  ];
  return (
    <div className="container pm:flex flex-col mx-auto  min-h-screen  p-2">
      <div className="heading flex justify-center text-2xl font-bold text-center mx-auto">
        Bestselling Products
      </div>

      <div className="flex flex-wrap justify-center">
        {productData.map((item) => {
          const { image, id, price, title, desc } = item;
          return (
            <>
              <div className="bg-gray-200 flex justify-center m-2 min-h-fit w-72 outline">
                <div className="image p-1">
                  <img onClick = {()=>navigate('/productinfo')} className="w-[280px] h-[373.2px] cursor-pointer" src={image} />
                  <div className="title">{title.substring(0,25)}</div>
                  <div className="font-bold text-lg">₹{price}</div>
                  <div className="mx-auto flex justify-center bg-pink-400 h-10 rounded-lg hover:cursor-pointer"><button>Add to Cart</button></div>
                
                
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageProductCard;
