import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/sea-green";
import Consultation from "../../public/assets/images/Consultation.jpg";
import SpConsultation from "../../public/assets/images/SpConsultation.jpg";
import Ultrasound from "../../public/assets/images/Ultrasound.jpg";
import Rx from "../../public/assets/images/Radiology.jpg";
import Surgery from "../../public/assets/images/Surgery.jpg";
import Laboratory from "../../public/assets/images/Laboratory.jpg";

const services = [
  {
    title: "Consultation",
    image: Consultation,
    primDescription:
      "We offer general services of vaccination, deworming and advice for the care of your pet.",
    secDescription:
      "The general physical assessment is performed by veterinarians trained in identifying and guiding an appropriate clinical approach during a period of illness or for the practice of preventive medicine.",
  },
  {
    title: "Specialized Consultation",
    image: SpConsultation,
    primDescription:
      "We have veterinary doctors specialized in the following areas:",
    secDescription:
      "Internal Medicine, Cardiology, Pneumology, Neurology, Gastroenterology, Nephrology, Endocrinology, Dermatology and Ophthalmology.",
  },
  {
    title: "Ultrasound",
    image: Ultrasound,
    primDescription:
      "The ultrasonography service is performed by a specialist together with high-end equipment that offers a high resolution and quality image.",
    secDescription:
      "We have coverage for ultrasound examination of the abdominal cavity and doppler echocardiography.",
  },
  {
    title: "Radiography",
    image: Rx,
    primDescription:
      "The digital radiography service focuses on offering the best positioning and the best radiographic technique to obtain objective diagnostic approaches.",
    secDescription:
      "A preliminary radiographic report is delivered immediately after the study is completed, then the final report will be delivered within 24 hours.",
  },
  {
    title: "Surgery",
    image: Surgery,
    primDescription:
      "We have a medical team made up of two specialists in anesthesiology and 3 surgeons capable of performing surgical interventions in soft tissue surgery, orthopedics and neurosurgery.",
    secDescription:
      "We also offer minimally invasive surgery performed through endoscopy.",
  },
  {
    title: "Laboratory",
    image: Laboratory,
    primDescription:
      "The clinical laboratory is integrated to the veterinary service which speeds up and optimizes the delivery time of results. We have high quality equipment and sample processing and analysis capacity.",
    secDescription:
      "A preliminary report is delivered immediately after the samples are processed, later we deliver a final report within 2 hours.",
  },
];

const HomeServices = () => {
  return (
    <div className="col-start-2 col-end-12 row-start-3 row-end-5 row-span-2 grid grid-cols-10 py-20 mr-2">
      <div className=" col-start-2 col-end-10  flex ">
        <Splide
          options={{
            speed: 500,
            rewind: true,
            rewindSpeed: 2000,
            focus: "center",

            paginationKeyboard: true,
          }}
          aria-label="My Favorite services"
        >
          {services.map((service, i) => {
            return (
              <SplideSlide key={i} className="grid grid-cols-2 pl-5 ">
                <div className="pr-[2rem]">
                  <h2 className="text-4xl font-bold text-primary-text py-3  border-b-[1px] border-b-secondary-text">
                    Services: {service.title}
                  </h2>
                  <p className="mt-6 text-justify text-secondary-text text-xl">
                    {service.primDescription}
                  </p>
                  <p className="mt-6 text-justify text-secondary-text text-xl">
                    {service.secDescription}
                  </p>
                </div>
                <div className="relative">
                  <div className="w-full h-[25rem] relative bg-[#00000049] z-10 flex justify-center items-end pb-8 "></div>
                  <Image
                    src={service.image}
                    alt="Image 1"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default HomeServices;
