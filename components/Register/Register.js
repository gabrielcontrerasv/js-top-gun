import Link from "next/link";
import Image from "next/image";
import RegisterForm from "./RegisterForm";
import RegisterBg from "../../public/assets/images/RegisterBg.jpg";

const Register = () => {
  return (
    <>
      <div className="col-start-1 col-end-3 md:col-start-1 md:col-end-6 row-span-2 flex justify-center items-center mt-16 sm:my-5 sm:mt-5 sm:pl-[9rem]">
        {/* BgImage */}
        <div className="fixed top-0 left-0 w-full h-full z-10 bg-[#0000001e] "></div>
        <Image src={RegisterBg} layout="fill" objectFit="cover" />

        {/* Form Container */}
        <div className="z-20 w-[35rem] sm:mr-5">
          <div className="rounded-md bg-[#00000047] backdrop-blur-sm px-5 sm:p-12 flex flex-col ">
            <div className="mb-5 flex flex-col items-center justify-between">
              <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mt-8 sm:mt-0">
                Create Your Account
              </h1>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>

      {/* --- Login ---  */}
      <div className="hidden col-start-6 col-end-9 row-span-2 bg-gradient-to-t from-dark-green to-mid-green md:flex  justify-center items-center z-30">
        <div className="w-[70%] h-[55%] flex flex-col justify-between items-center gap-5">
          <h1 className="text-4xl lg:text-5xl text-white font-bold text-center">
            ¡ Hello !
          </h1>
          <p className="text-white tracking-widest text-center leading-8 lg:text-lg">
            To access our site, you must first register and create an account
            with us.
          </p>
          <p className="text-white tracking-widest font-light text-center leading-8 lg:text-lg">
            If you already have a registered account, <br /> go to the access
            page.
          </p>
          <Link href="/login">
            <button className="text-sm tracking-[2px] bg-transparent text-white  w-[10rem] lg:w-[16rem] h-[3rem] rounded-md border-[1px] duration-200 hover:bg-[#2b9d9d] hover:w-[18rem] hover:border-none py-3">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
