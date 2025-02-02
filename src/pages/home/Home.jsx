import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import HomePageProductCard from "../../components/homePageProductCard/homePageProductCard";
import Track from "../../components/track/Track";
import Testimonal from "../../components/testimonal/Testimonal";

const Home = () => {
 
  return (
    <div>
     
      
        <Hero />
        <Category />
        <HomePageProductCard />
        <Track/>
        <Testimonal/>
        {/* <Loader/> */}
        
    
      
    </div>
  );
};

export default Home;
