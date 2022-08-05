import React from "react";
import Image from "next/image";
import Link from "next/link";
import LandingDog from "../../public/assets/images/LandingDog.webp";
import HomeBgSmall from "../../public/assets/images/HomeBg600.jpg";

const HeroSection = () => {
  return (
    <div className="col-start-1 col-end-13 row-start-1 row-end-3 flex justify-center">
      <div className="hidden md:block">
        <Image src={LandingDog} layout="fill" objectFit="cover" />
      </div>

      <div className="md:hidden">
        <Image src={HomeBgSmall} layout="fill" objectFit="cover" />
      </div>

      {/* Banner_Container */}
      <div className="absolute mt-5 w-[80%] h-[15rem] md:h-[20rem] xl:h-[25rem] flex flex-col justify-evenly  items-center md:items-start md:mt-[8rem] 2xl:h-[35rem] 2xl:mt-[10rem] ">
        <h1 className="text-center md:text-left w-[90%] text-white text-2xl font-bold sm:text-4xl md:tracking-wider xl:text-5xl 2xl:text-[4.5rem] ">
          WELCOME TO TEAMS <br />
          <span className="block md:mt-2"> VETERINARY CLINIC </span>
        </h1>
        {/* Paragraph_Container */}
        <div className="text-center md:text-left text-white 2xl:mt-10">
          <p className="w-[15em] md:w-[25rem] xl:w-[35rem] sm:text-lg md:text-xl xl:text-2xl md:font-light 2xl:text-4xl 2xl:w-[50rem]">
            Because they are also part of the family, we take care of them
          </p>
        </div>
        <div className="flex gap-5 2xl:mt-10">
          <Link href="/register">
            <button className=" bg-dark-green text-white tracking-wider w-[6rem] h-[2rem] rounded-md hover:scale-110 duration-300 text-xs sm:w-[7rem] sm:h-[2.5rem] xl:w-[10rem] xl:h-[3rem] xl:text-lg 2xl:w-[14rem] 2xl:h-[3.9rem] 2xl:text-2xl ">
              Sign in
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-white text-dark-green font-medium tracking-wider w-[6rem] h-[2rem] rounded-md hover:scale-110 duration-300 text-xs sm:w-[7rem] sm:h-[2.5rem]  xl:w-[10rem] xl:h-[3rem] xl:text-lg  2xl:w-[14rem] 2xl:h-[3.9rem] 2xl:text-2xl ">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
