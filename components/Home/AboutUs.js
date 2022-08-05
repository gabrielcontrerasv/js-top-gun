import React from "react";
import Image from "next/image";
import AboutUsImg from "../../public/assets/images/doctors-with-dog-in-lobby.webp";

const AboutUs = () => {
  return (
    <div className="col-start-1 col-end-13 row-start-3 row-end-5 grid px-2 md:col-start-2 md:col-end-12 md:row-start-3 md:row-end-5  md:grid-cols-10  md:grid-rows-2 2xl:pt-10">
      <div className="row-start-2 row-end-3 relative h-[20rem] md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-3 md:h-[30rem] flex items-end">
        <Image
          src={AboutUsImg}
          alt="About us image"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="row start-1 row-end-2 md:col-start-6 md:col-end-11 md:p-2 md:row-start-1 md:row-end-3">
        <h2 className="text-center text-primary-text text-2xl tracking-wider  font-bold border-b-[1px] border-b-secondary-text py-4 sm:text-4xl 2xl:text-[3.5rem] 2xl:pb-12 2xl:text-left">
          About us
        </h2>

        <p className="px-3 text-justify text-secondary-text mt-5 sm:text-lg xl:text-xl 2xl:text-2xl">
          We are a full-service animal hospital and welcomes both emergency
          treatment cases as well as pet patients in need of routine medical,
          surgical, and dental care.
        </p>

        <p className="px-3 text-justify text-secondary-text mt-5 sm:text-lg xl:text-xl 2xl:text-2xl">
          Beyond first-rate pet care, we make our clinic comfortable,
          kid-friendly, and calm, so your pet can relax in the waiting room and
          look forward to meeting our veterinarian.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
