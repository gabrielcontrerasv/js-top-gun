import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Assets
import LandingDog from "../../public/assets/images/LandingDog.png";
import HomeBgSmall from "../../public/assets/images/HomeBg600.jpg";

const getWindowSize = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const HomeComponent = () => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const bgSizeHandler = () => {
      const { width, height } = getWindowSize();
      setWidth(width);
      setHeight(height);
    };

    window.addEventListener("resize", bgSizeHandler);
    return () => window.removeEventListener("resize", bgSizeHandler);
  }, []);

  return (
    <section className="col-start-1 col-end-3 row-start-1 row-span-2 sm:pl-16 md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-3 ">
      {/* Bg Image */}
      <div className="w-full h-full relative ">
        <div className="fixed top-0 left-0 w-full h-full z-10 bg-[#0000001e]"></div>
        <div className="hidden md:block">
          <Image src={LandingDog} layout="fill" objectFit="cover" />
        </div>
        <div className="md:hidden">
          <Image src={HomeBgSmall} layout="fill" objectFit="cover" />
        </div>
      </div>

      <div className="mt-[80px] h-full sm:relative sm:mt-0 sm:top-[-42rem] md:flex md:justify-center md:gap-5 z-20  ">
        <div className=" h-[full] mt-[3rem] sm:mt-[4rem] top-16 row-start-1 row-end-3 md:w-[75%] sm:pl-[8rem] md:pl-5 sm:pr-10 absolute">
          <h1 className="text-[2rem] text-white text-center font-extrabold sm:text-left sm:text-4xl lg:text-6xl sm:relative md:py-5">
            Welcome to Teams
            <br />
            Veterinary Clinic
          </h1>
          {/* </div> */}
          <div className="sm:w-[90%] md:w-[70%] lg:w-[60%] px-4 sm:px-0 text-justify backdrop-blur-sm ">
            <p className="font-semibold text-[#fbfbfb] tracking-wide mt-5 md:mt-[2rem] lg:text-lg ">
              Teams Veterinary Clinic is a full-service animal hospital and
              welcomes both emergency treatment cases as well as pet patients in
              need of routine medical, surgical, and dental care.
            </p>
            <p className="font-semibold text-white tracking-wide mt-[1rem] lg:text-lg ">
              Beyond first-rate pet care, we make our clinic comfortable,
              kid-friendly, and calm, so your pet can relax in the waiting room
              and look forward to meeting our veterinarian.
            </p>
          </div>
          <div className="flex gap-5 pl-4 sm:pl-0 mt-5 sm:justify-start sm:mt-[10rem] md:mt-8  ">
            <Link href="/register">
              <button className=" bg-dark-green text-white tracking-wider w-[8rem] h-[3rem] rounded-md hover:scale-110 duration-300">
                Sign in
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-white text-dark-green font-medium tracking-wider w-[8rem] h-[3rem] rounded-md hover:scale-110 duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
