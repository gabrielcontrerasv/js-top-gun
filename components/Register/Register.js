import React from "react";
import Link from "next/link";
import Image from "next/image";
import RegisterBg from "../../public/assets/images/RegisterBg.jpg";

const Register = () => {
  return (
    <>
      <div className="col-start-1 col-end-6 row-span-2 flex justify-start items-center">
        <div className="h-full absolute -z-10 ">
          <div className="fixed top-0 left-0 w-full h-full z-10 bg-[#0000001e] "></div>
          <Image src={RegisterBg} />
        </div>
        <div className="w-[88%] h-[80%] flex flex-col justify-center pl-[10rem]">
          <div className=" rounded-md bg-[#00000047] p-10 backdrop-blur-sm ">
            <div className="mb-[2.5rem] flex flex-col items-center justify-between ">
              <h1 className="text-4xl font-bold text-center text-white">
                Create Your Account
              </h1>
            </div>
            <form className="w-full h-full ">
              <div className="grid grid-cols-2 gap-x-6 px-5 ">
                <input
                  className="placeholder:text-gray-600 block bg-gray-200 w-full rounded-md py-2 pl-4 focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 mb-5"
                  id="grid-first-name"
                  type="text"
                  placeholder="Name"
                  // {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
                <input
                  className="placeholder:text-gray-600 block bg-gray-200 w-full rounded-md py-2 pl-4 focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 mb-5"
                  id="grid-first-name"
                  type="text"
                  placeholder="Last Name"
                  // {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
                <input
                  className="placeholder:text-gray-600 block bg-gray-200 w-full rounded-md py-2 pl-4 focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 mb-5"
                  id="grid-first-name"
                  type="number"
                  placeholder="Document"
                  // {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
                <input
                  className="placeholder:text-gray-600 block bg-gray-200 w-full rounded-md py-2 pl-4 focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 mb-5"
                  id="grid-first-name"
                  type="text"
                  placeholder="Gender"
                  // {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
                <input
                  className="placeholder:text-gray-600 block bg-gray-200 w-full rounded-md py-2 pl-4 focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 mb-5"
                  id="grid-first-name"
                  type="number"
                  placeholder="Phone"
                  // {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
                <input
                  className="placeholder:text-gray-600 block bg-gray-200 w-full rounded-md py-2 pl-4 focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 mb-5"
                  id="grid-first-name"
                  type="email"
                  placeholder="E-mail"
                  // {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
                <input
                  className="placeholder:text-gray-600 block bg-gray-200 w-full rounded-md py-2 pl-4 focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 mb-5 "
                  id="grid-first-name"
                  type="number"
                  placeholder="Age"
                  // {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
                <input
                  className="placeholder:text-gray-600 block bg-gray-200 w-full rounded-md py-2 pl-4 focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 mb-5"
                  id="grid-first-name"
                  type="text"
                  placeholder="Address"
                  // {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
                <input
                  className="placeholder:text-gray-600 block bg-gray-200 w-full rounded-md py-2 pl-4 focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 mb-5"
                  id="grid-first-name"
                  type="password"
                  placeholder="Password"
                  // {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
                <input
                  className="placeholder:text-gray-600 block bg-gray-200 w-full rounded-md py-2 pl-4 focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 mb-5"
                  id="grid-first-name"
                  type="password"
                  placeholder="Confirm Password"
                  // {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
              </div>
              <div className="flex flex-col justify-between items-center h-[30%] ">
                <button className="bg-[#166060e4] text-white tracking-widest w-[16rem] h-[3rem] rounded-md hover:bg-[#2b9d9d] hover:w-[18rem] duration-100 mt-5 text-sm">
                  SIGN UP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* --- Login ---  */}
      <div className="col-start-6 col-end-9 row-span-2 bg-gradient-to-t from-dark-green to-mid-green flex  justify-center items-center">
        <div className="w-[70%] h-[55%] flex flex-col justify-between items-center">
          <h1 className="text-5xl text-white font-bold text-center">
            ¡ Hello !
          </h1>
          <p className="text-white tracking-widest text-center leading-8 text-lg">
            To access our site, you must first register and create an account
            with us.
          </p>
          <p className="text-white tracking-widest font-light text-center leading-8 text-lg">
            If you already have a registered account, <br /> go to the access
            page.
          </p>
          <Link href="/login">
            <button className="text-sm tracking-[2px] bg-transparent text-white w-[16rem] h-[3rem] rounded-md border-[1px] duration-200 hover:bg-[#2b9d9d] hover:w-[18rem] hover:border-none">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
