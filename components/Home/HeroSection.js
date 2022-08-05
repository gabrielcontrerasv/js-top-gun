import React from "react";
import Image from "next/image";
import Link from "next/link";
import LandingDog from "../../public/assets/images/LandingDog.webp";
import HomeBgSmall from "../../public/assets/images/HomeBg600.jpg";

const HeroSection = () => {
  return (
    <div className="col-start-1 col-end-13 row-start-1 row-end-3 flex justify-center relative">
      <div className="hidden md:block">
        <div className="fixed "></div>
        <Image
          src={LandingDog}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="md:hidden">
        <Image src={HomeBgSmall} layout="fill" objectFit="cover" />
      </div>

      {/* Banner_Container */}
      <div className="absolute mt-5 w-[80%] h-[15rem] md:h-[20rem] xl:h-[25rem] xl:mt-5 flex flex-col justify-evenly items-center md:items-start md:mt-[8rem] 2xl:mt-[5rem] ">
        <h1 className="text-2xl text-white font-bold text-center sm:text-4xl md:text-left w-[90%] md:tracking-wider xl:text-5xl 2xl:text-[3.5rem] ">
          WELCOME TO TEAMS <br />
          <span className="block md:mt-2"> VETERINARY CLINIC </span>
        </h1>
        {/* Paragraph_Container */}
        <div className="text-center md:text-left text-white 2xl:mt-10">
          <p className="w-[15em] md:w-[25rem] xl:w-[35rem] sm:text-lg md:text-xl  md:font-light xl:text-2xl 2xl:text-4xl 2xl:w-[45rem]">
            Because they are also part of the family, we take care of them
          </p>
        </div>
        <div className="flex gap-5 2xl:mt-10">
          <Link href="/register">
            <button className=" bg-dark-green text-white tracking-wider w-[6rem] h-[2rem] rounded-md hover:scale-110 duration-300 text-xs sm:w-[7rem] sm:h-[2.5rem] xl:w-[10rem] xl:h-[3rem] xl:text-lg 2xl:w-[13rem] 2xl:h-[3.4rem] 2xl:text-xl ">
              Sign in
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-white text-dark-green font-medium tracking-wider w-[6rem] h-[2rem] rounded-md hover:scale-110 duration-300 text-xs sm:w-[7rem] sm:h-[2.5rem]  xl:w-[10rem] xl:h-[3rem] xl:text-lg  2xl:w-[13rem] 2xl:h-[3.4rem] 2xl:text-xl ">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
