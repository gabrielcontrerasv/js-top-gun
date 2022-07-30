import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// 3rd party libraries
import { IconContext } from "react-icons";
import { FaHome, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { AiFillSchedule, AiOutlinePoweroff } from "react-icons/ai";
import { MdMedicalServices, MdPets } from "react-icons/md";
import { IoMdArrowDroprightCircle } from "react-icons/io";
// Components
import PathCategory from "./PathCategory";

// --------------------------------------------------------------- //

function Navigation() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMobileIcon, setShowMobileIcon] = useState(false);

  const showSidebarHandler = () => setShowSidebar(!showSidebar);
  const showMobileMenuHandler = () => setShowMobileIcon(!showMobileIcon);

  const width = showSidebar ? "sm:w-40" : "sm:w-16";

  return (
    <div
      className={`w-full fixed flex justify-between items-center h-[80px] bg-dark-green text-white sm:block sm:flex-none sm:h-full ${width} sm:h-screen sm:pt-8  duration-500 z-50`}
    >
      {/* Logo Header */}
      <IconContext.Provider value={{ size: 28 }}>
        <div className="sm:block sm:relative sm:py-4 px-3">
          <IoMdArrowDroprightCircle
            size={40}
            className={`hidden md:block border-2 border-dark-green rounded-full cursor-pointer absolute right-[-1.2rem] top-[1rem] z-50 bg-mid-green ${
              showSidebar && "rotate-180 duration-1000"
            }`}
            onClick={showSidebarHandler}
          />
        </div>

        {/* Desktop Sidebar Items  */}
        <div className={`mt-[5rem] hidden sm:block`}>
          <PathCategory path="/">
            <FaHome className="relative mt-1 ml-[-0.5rem]" />

            <h2
              className={`text-xl left-[2.5rem] top-[-1.8rem] relative origin-left duration-500 ${
                !showSidebar && "scale-0"
              } `}
            >
              Home
            </h2>
          </PathCategory>

          <PathCategory path="/profile">
            <FaUser className="relative mt-1 ml-[-0.5rem]" />
            <h2
              className={`text-xl left-[2.5rem] top-[-1.8rem] relative origin-left duration-500 ${
                !showSidebar && "scale-0"
              } `}
            >
              Profile
            </h2>
          </PathCategory>

          <PathCategory path="/pets">
            <MdPets className="relative mt-1 ml-[-0.5rem]" />
            <h2
              className={`text-xl left-[2.5rem] top-[-1.8rem] relative origin-left duration-500 ${
                !showSidebar && "scale-0"
              } `}
            >
              Pets
            </h2>
          </PathCategory>

          <PathCategory path="/appointments">
            <AiFillSchedule className="relative mt-1 ml-[-0.5rem]" />

            <h2
              className={`text-xl left-[2.5rem] top-[-1.8rem] relative origin-left duration-500 ${
                !showSidebar && "scale-0"
              } `}
            >
              Schedule
            </h2>
          </PathCategory>

          <PathCategory path="/services">
            <MdMedicalServices className="relative mt-1 ml-[-0.5rem]" />

            <h2
              className={`text-xl left-[2.5rem] top-[-1.8rem] relative origin-left duration-500 ${
                !showSidebar && "scale-0"
              } `}
            >
              Services
            </h2>
          </PathCategory>
          <PathCategory path="/logout">
            <AiOutlinePoweroff className="relative mt-1 ml-[-0.5rem]" />
            <h2
              className={`text-xl left-[2.5rem] top-[-1.8rem] relative origin-left duration-500 ${
                !showSidebar && "scale-0"
              } `}
            >
              Logout
            </h2>
          </PathCategory>
        </div>

        {/* Mobile Hamburger */}
        <div
          onClick={showMobileMenuHandler}
          className="relative mt-2 right-5 sm:hidden z-50 flex items-center"
        >
          <h1
            className={`text-3xl sm:text-4xl sm:left-[6rem] sm:top-[-3.5rem]`}
          >
            Vet Teams
          </h1>
          {!showMobileIcon ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            !showMobileIcon
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-dark-green  "
          }
        >
          {/* Mobile Header */}
          <div className="flex justify-center items-center w-full p-5">
            <h1
              className={`text-3xl sm:text-4xl sm:left-[6rem] sm:top-[-3.5rem] relative left-[1rem]`}
            >
              Vet Teams
            </h1>
          </div>

          {/* Mobile Items */}
          <div className="flex flex-col items-center justify-center mt-28">
            <div
              className="w-full  text-center pt-4 hover:bg-hover-green cursor-pointer duration-500 h-[4rem]"
              onClick={showMobileMenuHandler}
            >
              <Link href="/">
                <h2 className="mx-auto text-2xl">Profile</h2>
              </Link>
            </div>
            <div
              className="w-full  text-center pt-4 hover:bg-hover-green cursor-pointer duration-500 h-[4rem]"
              onClick={showMobileMenuHandler}
            >
              <Link href="/">
                <h2 className="text-2xl">Home</h2>
              </Link>
            </div>
            <div
              className="w-full  text-center pt-4 hover:bg-hover-green cursor-pointer duration-500 h-[4rem]"
              onClick={showMobileMenuHandler}
            >
              <Link href="/appointments">
                <h2 className="text-2xl">Appointments</h2>
              </Link>
            </div>
            <div
              className="w-full  text-center pt-4 hover:bg-hover-green cursor-pointer duration-500 h-[4rem]"
              onClick={showMobileMenuHandler}
            >
              <Link href="/">
                <h2 className="text-2xl">Services</h2>
              </Link>
            </div>
            <div
              className="w-full  text-center pt-4 hover:bg-hover-green cursor-pointer duration-500 h-[4rem]"
              onClick={showMobileMenuHandler}
            >
              <Link href="/">
                <h2 className="text-2xl">Logout</h2>
              </Link>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Navigation;
