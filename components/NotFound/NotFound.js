import React from "react";
import Image from "next/image";
import Grumpy404 from "../../public/assets/images/Grumpy404.png";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="col-start-2 col-end-5 row-start-1 row-span-2 flex items-end ">
        <div className="h-[80%] flex justify-end">
          <Image src={Grumpy404} alt="404-logo" />
        </div>
      </div>

      <div className="col-start-5 col-end-9 row-start-1 row-span-2 flex flex-col items-center justify-evenly">
        <div>
          <p className="text-[15rem] text-center text-[#565656] font-semibold">
            404
          </p>
          <h1 className="text-4xl text-center font-bold text-[#565656]">
            Uh oh we have a problem{" "}
          </h1>
        </div>
        <Link href="/">
          <button className="bg-[#154D4D] text-white py-3 px-6 rounded-md tracking-widest w-[18rem] hover:bg-[#217a7a]">
            GO HOME
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
