import React from "react";
import LoginForm from "./LoginForm";
import Image from "next/image";
import LoginBg from "../../public/assets/images/LoginBg.jpg";

const Login = () => {
  return (
    <>
      <div className="hidden  col-start-1 col-end-6 row-span-2 sm:flex justify-start items-center">
        <div className="h-full">
          <div className="fixed top-0 left-0 w-full h-full z-10 bg-[#00000051] "></div>
          <Image src={LoginBg} layout="fill" objectFit="cover" />
        </div>
      </div>

      {/* --- Login ---  */}
      <div className=" col-start-1 col-end-3 sm:col-start-6 sm:col-end-9 row-span-2 bg-gradient-to-t from-dark-green to-[#0d5c5c] flex justify-center items-center z-20">
        <div className=" h-[80%] flex justify-center ">
          <div className="p-10 h-full mt-12 relative">
            <div className="mb-[2.5rem] flex flex-col items-center justify-between h-[7rem] ">
              <h1 className="text-4xl font-bold text-center text-white">
                ¡Welcome Back!
              </h1>
              <p className="text-white mt-5 tracking-widest self-start leading-8 text-lg">
                Login into your account:
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
