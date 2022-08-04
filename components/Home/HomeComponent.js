import Image from "next/image";
import Link from "next/link";
import AboutUs from "./AboutUs";
import HomeServices from "./HomeServices";
import Footer from "./Footer";

// Assets
import LandingDog from "../../public/assets/images/LandingDog.webp";
import HomeBgSmall from "../../public/assets/images/HomeBg600.jpg";

// Carrousel Images

const HomeComponent = () => {
  return (
    <section className="col-start-1 col-end-3 row-start-1 row-span-2 md:col-start-1 md:col-end-13 md:row-start-1 md:row-end-3">
      {/* Bg_Image */}
      <div className="w-full h-full relative ">
        <div className="hidden md:block">
          <Image src={LandingDog} layout="fill" objectFit="cover" />
        </div>
        <div className="md:hidden">
          <Image src={HomeBgSmall} layout="fill" objectFit="cover" />
        </div>
      </div>

      {/* Home_Page_Container */}
      <div className="flex justify-start z-20">
        {/* Banner_Container */}
        <div className=" mt-[3rem] sm:mt-[6rem] top-16 row-start-1 row-end-3 md:w-[75%] sm:pl-[8rem] sm:pr-10 absolute">
          <h1 className="text-[2rem] text-white text-center font-bold sm:text-left sm:text-4xl xl:text-6xl lg:text-[2.8rem] tracking-wider sm:relative leading-[20rem]">
            WELCOME TO TEAMS <br />{" "}
            <span className="block mt-3"> VETERINARY CLINIC </span>
          </h1>
          {/* Paragraph_Container */}
          <div className="sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] px-4 sm:px-0 text-justify mt-10 ">
            <p className="text-[#fbfbfb] tracking-wide mt-5 md:mt-[1rem] lg:text-xl  2xl:text-2xl ">
              Because they are also part of the family, we take care of them
            </p>
          </div>
          <div className="flex gap-5 pl-4 sm:pl-0 mt-5 sm:justify-start sm:mt-[5rem] md:mt-10  ">
            <Link href="/register">
              <button className=" bg-dark-green text-white tracking-wider w-[9.5rem] h-[2.8rem] rounded-md hover:scale-110 duration-300 ">
                Sign in
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-white text-dark-green font-medium tracking-wider w-[9.5rem] h-[2.8rem] rounded-md hover:scale-110 duration-300 ">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About_Us_Section */}
      <AboutUs />

      {/* Services_Section */}
      <HomeServices />

      <Footer />
    </section>
  );
};

export default HomeComponent;
