import React from "react";
import Image from "next/image";
// Assets
import Yorky from "../../public/assets/Yorkshire-Terrier-PNG-Image.png";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmergency } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
// Components
import ContactItem from "./ContactItem";
import Form from "./Form";

const AppointmentForm = () => {
  // const submitErrorHandler = (error) => {
  //   console.log(error);
  // };

  return (
    <section className="w-full grid grid-cols-3 overflow-hidden">
      {/* QUICK CONTACT  */}
      <div className="h-screen bg-[#1F6B6B] col-start-1 col-end-2 flex flex-col justify-evenly items-center py-10">
        <div className="w-[80%] flex flex-col items-center">
          <h1 className="text-white text-3xl font-semibold mb-5">
            Quick Contact
          </h1>
          <ul className="text-white">
            <ContactItem>
              <BsTelephone size={20} />
              <p>+57 (000) 000-000</p>
            </ContactItem>
            <ContactItem>
              <MdOutlineEmergency size={22} />
              <p>Contact Vet-Teams</p>
            </ContactItem>
            <ContactItem>
              <Ri24HoursFill size={22} />
              <p>Open 24/7</p>
            </ContactItem>
            <ContactItem>
              <TiLocation size={25} />
              <p>Some address - 123</p>
            </ContactItem>
          </ul>
        </div>
        <div>
          <Image src={Yorky} />
        </div>
      </div>

      {/* FORM */}
      <Form />
    </section>
  );
};

export default AppointmentForm;
