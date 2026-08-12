import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedRestaurants from "../components/FeaturedRestaurants";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedRestaurants />
      <Footer />
    </>
  );
}

export default Home;