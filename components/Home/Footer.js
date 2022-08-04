import React from "react";
import { IconContext } from "react-icons";
//prettier-ignore
import { BsFillTelephoneFill, BsFillClockFill,  BsShieldFillCheck} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoPawSharp, IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <IconContext.Provider value={{ size: 15 }}>
        <div className="bg-mid-green col-start-1 col-end-13 grid grid-cols-11 text-white p-8">
          <div className="col-start-2 col-end-5 px-5">
            <h3 className="text-xl font-semibold tracking-wider mb-3">
              Contact & Location
            </h3>
            <div className="flex items-center gap-5 ">
              <BsFillTelephoneFill />
              <p>321-275-6540</p>
            </div>
            <div className="flex items-center gap-5 ">
              <MdEmail />
              <p>info@vetTeams.com</p>
            </div>
            <div className="flex items-center gap-4 ">
              <IoLocationSharp size={18} />
              <p>Street Avenue 123</p>
            </div>
          </div>
          <div className="col-start-5 col-end-8  px-5">
            <h3 className="text-xl font-semibold tracking-wider mb-3">
              Schedule
            </h3>
            <div className="flex items-center gap-5 ">
              <BsFillClockFill />
              <p>Mon - Sun 24 hrs</p>
            </div>
            <div className="flex items-center gap-5 ">
              <BsShieldFillCheck />
              <p>Open on Holidays</p>
            </div>
          </div>
          <div className="col-start-8 col-end-11  px-5">
            <h3 className="text-xl font-semibold tracking-wider mb-3">
              Services
            </h3>
            <div className="flex items-center gap-5 ">
              <IoPawSharp />
              <p>General consultation</p>
            </div>
            <div className="flex items-center gap-5 ">
              <IoPawSharp />
              <p>Specialized consultation</p>
            </div>
            <div className="flex items-center gap-5 ">
              <IoPawSharp />
              <p>Ultrasound</p>
            </div>
            <div className="flex items-center gap-5 ">
              <IoPawSharp />
              <p>X-ray</p>
            </div>
            <div className="flex items-center gap-5 ">
              <IoPawSharp />
              <p>Laboratory</p>
            </div>
            <div className="flex items-center gap-5 ">
              <IoPawSharp />
              <p>Surgery</p>
            </div>
          </div>
        </div>
        <div className="bg-dark-green h-[3rem] flex justify-center items-center text-white tracking-wider">
          <p>All rights reserved, 2022</p>
        </div>
      </IconContext.Provider>
    </footer>
  );
};

export default Footer;
