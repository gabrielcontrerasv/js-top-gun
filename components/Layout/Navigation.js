import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// 3rd party libraries
import { IconContext } from "react-icons";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineSchedule, AiOutlinePoweroff } from "react-icons/ai";
import { MdMedicalServices } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import Logo from "../../public/assets/Logo_NoBg.png";
// Components
import PathCategory from "./PathCategory";

// --------------------------------------------------------------- //

function Navigation() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMobileIcon, setShowMobileIcon] = useState(false);

  const showSidebarHandler = () => setShowSidebar(!showSidebar);
  const showMobileMenuHandler = () => setShowMobileIcon(!showMobileIcon);

  const width = showSidebar ? "sm:w-72" : "sm:w-20";

  return (
    <div
      className={`fixed flex justify-between h-[80px] items-center w-full top-0 bg-[#123f3fdb] text-white sm:block sm:flex-none sm:h-full ${width}  sm:h-screen sm:pt-8 z-50 sm:overflow-hidden duration-300`}
      onMouseEnter={showSidebarHandler}
      onMouseLeave={showSidebarHandler}
    >
      <IconContext.Provider value={{ size: 30 }}>
        {/* Logo Header */}
        <div className="flex items-center sm:block sm:relative sm:py-4 px-3">
          <div>
            <Image src={Logo} alt="Logo" width={60} height={60} />
          </div>

          <h1
            className={`text-3xl sm:text-4xl sm:left-[5rem] sm:top-[-3.5rem] relative left-[13%]`}
          >
            Vet Teams
          </h1>
        </div>

        {/* Desktop Sidebar Items  */}
        <div className={`mt-[1rem] hidden sm:block`}>
          <PathCategory path="/profile">
            <VscAccount className="relative mt-1 ml-[0.1rem]" />
            <h2 className={`text-2xl left-[4rem] top-[-2rem] relative`}>
              Profile
            </h2>
          </PathCategory>
          <PathCategory path="/">
            <FaHome className="relative mt-1" />
            <h2 className={`text-2xl left-[4rem] top-[-2rem] relative`}>
              Home
            </h2>
          </PathCategory>
          <PathCategory path="/appointments">
            <AiOutlineSchedule className="relative mt-1" />
            <h2 className={`text-2xl left-[4rem] top-[-2rem] relative`}>
              Appointments
            </h2>
          </PathCategory>

          <PathCategory path="/services">
            <MdMedicalServices className="relative mt-1" />
            <h2 className={`text-2xl left-[4rem] top-[-2rem] relative`}>
              Services
            </h2>
          </PathCategory>
          <PathCategory path="/logout" className="mt-[5rem]">
            <AiOutlinePoweroff className="relative mt-1" />
            <h2 className={`text-2xl left-[4rem] top-[-2rem] relative`}>
              Logout
            </h2>
          </PathCategory>
        </div>

        {/* Mobile Hamburger */}
        <div
          onClick={showMobileMenuHandler}
          className="relative mt-2 right-5 sm:hidden z-50"
        >
          {!showMobileIcon ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            !showMobileIcon
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#123f3f]  "
          }
        >
          {/* Mobile Header */}
          <div className="flex justify-center items-center w-full p-5">
            <div>
              <Image src={Logo} alt="Logo" width={60} height={60} />
            </div>

            <h1
              className={`text-3xl sm:text-4xl sm:left-[6rem] sm:top-[-3.5rem] relative left-[1rem]`}
            >
              Vet Teams
            </h1>
          </div>

          {/* Mobile Items */}
          <div className="flex flex-col items-center justify-center mt-28">
            <div
              className="w-full  text-center pt-4 hover:bg-[#7bdbdb9c] cursor-pointer duration-500 h-[4rem]"
              onClick={showMobileMenuHandler}
            >
              <Link href="/">
                <h2 className="mx-auto text-2xl">Profile</h2>
              </Link>
            </div>
            <div
              className="w-full  text-center pt-4 hover:bg-[#7bdbdb9c] cursor-pointer duration-500 h-[4rem]"
              onClick={showMobileMenuHandler}
            >
              <Link href="/">
                <h2 className="text-2xl">Home</h2>
              </Link>
            </div>
            <div
              className="w-full  text-center pt-4 hover:bg-[#7bdbdb9c] cursor-pointer duration-500 h-[4rem]"
              onClick={showMobileMenuHandler}
            >
              <Link href="/appointments">
                <h2 className="text-2xl">Appointments</h2>
              </Link>
            </div>
            <div
              className="w-full  text-center pt-4 hover:bg-[#7bdbdb9c] cursor-pointer duration-500 h-[4rem]"
              onClick={showMobileMenuHandler}
            >
              <Link href="/">
                <h2 className="text-2xl">Services</h2>
              </Link>
            </div>
            <div
              className="w-full  text-center pt-4 hover:bg-[#7bdbdb9c] cursor-pointer duration-500 h-[4rem]"
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
