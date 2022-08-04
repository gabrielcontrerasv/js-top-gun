import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Consultation from "../../public/assets/images/Consultation.jpg";
import SpConsultation from "../../public/assets/images/SpConsultation.jpg";
import Ultrasound from "../../public/assets/images/Ultrasound.jpg";
import Rx from "../../public/assets/images/Radiology.jpg";
import Surgery from "../../public/assets/images/Surgery.jpg";
import Laboratory from "../../public/assets/images/Laboratory.jpg";

const images = [
  {
    title: "Consultation",
    image: Consultation,
  },
  {
    title: "Specialized Consultation",
    image: SpConsultation,
  },
  {
    title: "Ultrasound",
    image: Ultrasound,
  },
  {
    title: "Radiography",
    image: Rx,
  },
  {
    title: "Surgery",
    image: Surgery,
  },
  {
    title: "Laboratory",
    image: Laboratory,
  },
];
const HomeServices = () => {
  return (
    <div className="col-start-2 col-end-12 row-start-3 row-end-5 row-span-2 grid grid-cols-10  py-20">
      <div className="col-start-2 col-end-6 p-8">
        <h2 className="text-4xl font-bold text-primary-text py-3  border-b-[1px] border-b-secondary-text">
          Services
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
      <div className=" col-start-6 col-end-10 p-8 ">
        <Splide
          options={{
            speed: 500,
            rewind: true,
            rewindSpeed: 2000,
            focus: "center",
          }}
          aria-label="My Favorite Images"
        >
          {images.map((image, i) => {
            return (
              <SplideSlide key={i}>
                <div className="w-full h-[25rem] relative bg-[#00000049] z-10 flex justify-center items-end pb-8 ">
                  <h2 className="text-4xl text-white font-semibold tracking-wider">
                    {image.title}
                  </h2>
                </div>
                <Image
                  src={image.image}
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default HomeServices;
