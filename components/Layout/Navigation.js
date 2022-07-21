import { useState } from "react";
import Image from "next/image";
// 3rd party libraries
import { IconContext } from "react-icons";
import { FaHome } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdMedicalServices } from "react-icons/md";
import Logo from "../../public/assets/Logo_NoBg.png";
// Components
import PathCategory from "./PathCategory";

// --------------------------------------------------------------- //

function Navigation() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const width = open ? "w-72" : "w-24";

  return (
    <div
      className={`${width} bg-[#1f6b6bdb] text-white h-screen duration-300 pt-8`}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
    >
      {/* Logo Header */}
      <div className="flex gap-x-4 items-center py-4 px-3 absolute ">
        <div className="box-content ">
          <Image src={Logo} alt="Logo" width={60} height={60} />
        </div>

        <h1
          className={`text-2xl font-medium origin-left duration-200  ${
            !open && "scale-0"
          }`}
        >
          Vet Teams
        </h1>
      </div>

      {/* Sidebar Items  */}
      <div className={`mt-[8rem] w-[20.5%] absolute `}>
        <IconContext.Provider value={{ size: 30 }}>
          <PathCategory path="/">
            <FaHome />
            <h2
              className={`text-lg origin-left duration-200 ${
                !open && "scale-0"
              }`}
            >
              Home
            </h2>
          </PathCategory>
          <PathCategory path="/appointments">
            <AiOutlineSchedule />
            <h2
              className={`text-lg origin-left duration-200 ${
                !open && "scale-0"
              }`}
            >
              Appointments
            </h2>
          </PathCategory>
          <PathCategory path="/services">
            <MdMedicalServices />
            <h2
              className={`text-lg origin-left duration-200 ${
                !open && "scale-0"
              }`}
            >
              Services
            </h2>
          </PathCategory>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Navigation;
