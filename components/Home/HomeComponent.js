import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import HomeServices from "./HomeServices";
import Footer from "./Footer";

// Assets

// Carrousel Images

const HomeComponent = () => {
  return (
    <section className="col-start-1 col-end-3 row-start-1 row-end-19 md:col-start-1 md:col-end-13 md:row-start-1 md:row-end-3 grid grid-cols-12 grid-rows-[repeat(9,_50vh_minmax(50vh,_1fr))]">
      {/* Home_Page_Container */}
      <HeroSection />
      {/* About_Us_Section */}
      <AboutUs />

      {/* Services_Section */}
      {/* <HomeServices /> */}

      {/* <Footer /> */}
    </section>
  );
};

export default HomeComponent;
