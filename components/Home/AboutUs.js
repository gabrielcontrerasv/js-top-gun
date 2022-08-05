import React from "react";
import Image from "next/image";
import AboutUsImg from "../../public/assets/images/doctors-with-dog-in-lobby.webp";

const AboutUs = () => {
  return (
    <div className="px-8 col-start-1 col-end-13 row-start-3 row-end-5 2xl:row-end-4 grid  lg:col-start-2 lg:col-end-12 lg:grid-cols-10 lg:grid-rows-2 2xl:pt-10  items-center ">
      <div className="row-start-2 row-end-3 relative h-[15rem] md:h-[35rem] lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-3">
        <Image
          src={AboutUsImg}
          alt="About us image"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="row start-1 row-end-2 lg:col-start-6 lg:col-end-11 lg:p-2 lg:row-start-1 lg:row-end-3">
        <h2 className="text-center text-primary-text text-2xl tracking-wider  font-bold border-b-[1px] border-b-secondary-text py-4 sm:text-4xl 2xl:text-[3.5rem] 2xl:pb-12 2xl:text-left">
          About us
        </h2>

        <p className="px-3  text-justify text-primary-text mt-5 sm:text-lg lg:p-0 xl:text-xl 2xl:text-3xl  2xl:font-light">
          We are a full-service animal hospital and welcomes both emergency
          treatment cases as well as pet patients in need of routine medical,
          surgical, and dental care.
        </p>

        <p className="px-3 text-justify text-primary-text mt-5 sm:text-lg lg:p-0 xl:text-xl 2xl:text-3xl  2xl:font-light">
          Beyond first-rate pet care, we make our clinic comfortable,
          kid-friendly, and calm, so your pet can relax in the waiting room and
          look forward to meeting our veterinarian.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
