import React from "react";
import Link from "next/link";
import Image from "next/image";
import LoginBg from "../../public/assets/images/LoginBg.jpg";

const Login = () => {
  return (
    <>
      <div className="col-start-1 col-end-6 row-span-2 flex justify-start items-center">
        <div className="h-full absolute -z-10 ">
          <div className="fixed top-0 left-0 w-full h-full z-10 bg-[#00000051] "></div>
          <Image src={LoginBg} />
        </div>
      </div>

      {/* --- Login ---  */}
      <div className="col-start-6 col-end-9 row-span-2 bg-gradient-to-t from-dark-green to-[#0d5c5c] flex justify-center items-center">
        <div className="w-[90%] h-[80%] flex justify-center ">
          <div className="p-10 h-full w-[80%] mt-12">
            <div className="mb-[2.5rem] flex flex-col items-center justify-between h-[7rem] ">
              <h1 className="text-4xl font-bold text-center text-white">
                ¡Welcome Back!
              </h1>
              <p className="text-white tracking-widest self-start leading-8 text-lg">
                Login into your account:
              </p>
            </div>
            <form className="w-full h-[50%] flex flex-col justify-around ">
              <div className="grid gap-x-6 ">
                <input
                  className="placeholder:text-white block bg-transparent border-b-[1px] w-full py-2 pl-4 focus:outline-none focus:border-b-mid-green text-white mb-5"
                  id="grid-first-name"
                  type="text"
                  placeholder="Name"
                  // {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
                <input
                  className="placeholder:text-white block bg-transparent border-b-[1px] w-full py-2 pl-4 focus:outline-none focus:border-b-mid-green text-white mb-5"
                  id="grid-first-name"
                  type="password"
                  placeholder="Password"
                  // {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
              </div>
              <p className="text-white tracking-widest text-left leading-8 text-md cursor-pointer">
                Forget your password?
              </p>
              <Link href="/register">
                <p className="text-white tracking-widest text-left leading-8 text-md cursor-pointer">
                  Create new account
                </p>
              </Link>
              <div className="flex flex-col justify-between items-center h-[30%] ">
                <button className="bg-[#166060e4] text-white tracking-widest w-full h-[3rem] rounded-md hover:bg-[#2b9d9d] duration-100 mt-5 text-sm">
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
