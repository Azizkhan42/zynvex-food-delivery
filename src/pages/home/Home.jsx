import Hero from "../../components/sections/Hero";
import Categories from "../../components/sections/Categories";
import FeaturedRestaurants from "../../components/sections/FeaturedRestaurants";
import PopularFoods from "../../components/sections/PopularFoods";
import OfferBanner from "../../components/sections/OfferBanner";
import AppSection from "../../components/sections/AppSection";
import Testimonials from "../../components/sections/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedRestaurants />
      <OfferBanner />
      <PopularFoods />
      <AppSection />
      <Testimonials />
    </>
  );
};

export default Home;