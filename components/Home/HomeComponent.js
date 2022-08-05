import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import HomeServices from "./HomeServices";
import Footer from "./Footer";

// Assets

// Carrousel Images

const HomeComponent = () => {
  return (
    <section className="col-start-1 col-end-3 md:col-start-1 md:col-end-13 md:row-start-1 grid grid-cols-12 grid-rows-mobile md:grid-rows-desktop 2xl:gap-y-[5rem]">
      {/* Home_Page_Container */}
      <HeroSection />
      {/* About_Us_Section */}
      <AboutUs />

      {/* Services_Section */}
      <HomeServices />

      <Footer />
    </section>
  );
};

export default HomeComponent;
