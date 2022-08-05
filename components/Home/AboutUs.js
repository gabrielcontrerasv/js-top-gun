import React from "react";
import Image from "next/image";
import AboutUsImg from "../../public/assets/images/doctors-with-dog-in-lobby.webp";

const AboutUs = () => {
  return (
    <div className="col-start-2 col-end-12 row-start-3 row-end-5 row-span-2 grid grid-cols-10 py-20">
      <div className=" col-start-2 col-end-6 relative">
        <Image
          src={AboutUsImg}
          alt="About us image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="col-start-6 col-end-10 p-8">
        <h2 className="text-4xl font-bold text-primary-text py-3  border-b-[1px] border-b-secondary-text">
          About us
        </h2>
        <p className="mt-6 text-justify text-secondary-text text-xl">
          We are a full-service animal hospital and welcomes both emergency
          treatment cases as well as pet patients in need of routine medical,
          surgical, and dental care.
        </p>
        <p className="mt-6 text-justify text-secondary-text text-xl">
          Beyond first-rate pet care, we make our clinic comfortable,
          kid-friendly, and calm, so your pet can relax in the waiting room and
          look forward to meeting our veterinarian.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
