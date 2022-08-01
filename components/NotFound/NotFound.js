import React from "react";
import Image from "next/image";
import Grumpy404 from "../../public/assets/images/Grumpy404.png";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="col-start-1 col-end-3 flex justify-center items-center row-span-2 w-full  relative">
      <Image src={Grumpy404} layout="fill" objectFit="cover" />

      <div className="flex flex-col justify-between items-center h-[90%] mt-10 z-10 ">
        <div>
          <p className="text-[7em] sm:text-[15rem] text-center text-[#565656] font-semibold">
            404
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-3xl  md:text-4xl text-center font-bold text-[#565656]">
            Uh oh we have a problem{" "}
          </h1>
          <Link href="/">
            <button className="bg-[#154D4D] text-white py-3 px-6 rounded-md tracking-widest hover:bg-[#217a7a] w-[16rem] ">
              GO HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
