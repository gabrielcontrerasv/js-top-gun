import React from "react";
//prettier-ignore
import { BsFillTelephoneFill, BsFillClockFill,  BsShieldFillCheck} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoPawSharp, IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="relative bottom-[-6rem] col-start-1 col-end-13  md:mt-[15rem] lg:mt-10 row-start-7 row.end.9">
      <div className="bg-mid-green flex flex-wrap md:grid md:grid-cols-11 text-white px-2 py-[3rem] gap-5 ">
        <div className="col-start-2 col-end-5 px-5 mt-2 ">
          <h3 className="text-xl font-semibold tracking-wider mb-3 2xl:text-4xl 2xl:my-10">
            Contact & Location
          </h3>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5 font-light tracking-wider text-lg 2xl:text-2xl 2xl:font-light">
              <BsFillTelephoneFill />
              <p>321-275-6540</p>
            </div>
            <div className="flex items-center gap-5 font-light tracking-wider text-lg xl:text-xl 2xl:text-2xl 2xl:font-light ">
              <MdEmail />
              <p>info@vetTeams.com</p>
            </div>
            <div className="flex items-center gap-4 font-light tracking-wider text-lg xl:text-xl 2xl:text-2xl 2xl:font-light ">
              <IoLocationSharp />
              <p>Street Avenue 123</p>
            </div>
          </div>
        </div>
        <div className="col-start-5 col-end-8  px-5 mt-2">
          <h3 className="text-xl font-semibold tracking-wider mb-3 2xl:text-4xl 2xl:my-10">
            Schedule
          </h3>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5 font-light tracking-wider text-lg xl:text-xl 2xl:text-2xl 2xl:font-light ">
              <BsFillClockFill />
              <p>Mon - Sun 24 hrs</p>
            </div>
            <div className="flex items-center gap-5 font-light tracking-wider text-lg xl:text-xl 2xl:text-2xl 2xl:font-light ">
              <BsShieldFillCheck />
              <p>Open on Holidays</p>
            </div>
          </div>
        </div>
        <div className="col-start-8 col-end-11  px-5 mt-2">
          <h3 className="text-xl font-semibold tracking-wider mb-3 2xl:text-4xl 2xl:my-10">
            Services
          </h3>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5 font-light tracking-wider text-lg xl:text-xl 2xl:text-2xl 2xl:font-light ">
              <IoPawSharp />
              <p>General consultation</p>
            </div>
            <div className="flex items-center gap-5 font-light tracking-wider text-lg xl:text-xl 2xl:text-2xl 2xl:font-light ">
              <IoPawSharp />
              <p>Specialized consultation</p>
            </div>
            <div className="flex items-center gap-5 font-light tracking-wider text-lg xl:text-xl 2xl:text-2xl 2xl:font-light ">
              <IoPawSharp />
              <p>Ultrasound</p>
            </div>
            <div className="flex items-center gap-5 font-light tracking-wider text-lg xl:text-xl 2xl:text-2xl 2xl:font-light ">
              <IoPawSharp />
              <p>X-ray</p>
            </div>
            <div className="flex items-center gap-5 font-light tracking-wider text-lg xl:text-xl 2xl:text-2xl 2xl:font-light ">
              <IoPawSharp />
              <p>Laboratory</p>
            </div>
            <div className="flex items-center gap-5 font-light tracking-wider text-lg xl:text-xl 2xl:text-2xl 2xl:font-light ">
              <IoPawSharp />
              <p>Surgery</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-green h-[4.5rem] flex justify-center items-center text-white tracking-wider text-sm 2xl:text-xl font-light">
        <p>© 2022, Top Gun Lab project, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
