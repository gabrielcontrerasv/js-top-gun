import Image from "next/image";
import Link from "next/link";
import RecordForm from "./RecordForm";
import RegisterBg from "../../public/assets/images/RegisterBg.jpg";

const RecordsForm = () => {
  return (
    <section className="h-[100vh] w-[100vw] sm:overflow-hidden flex">
      <button className="absolute right-5 top-5 sm:top-10 sm:right-10 text-white z-50 cursor-pointer text-2xl border-b-[1px] pb-2 ">
        <Link href="/">
          <p className="tracking-wider">Go back</p>
        </Link>
      </button>
      <div className="z-10 relative w-[100%] md:w-[65%] h-full flex justify-center items-center min-h-[40rem]">
        {/* BgImage */}
        <div className="relative top-0 left-0 w-full h-full z-10 bg-[#00000035] "></div>
        <Image src={RegisterBg} layout="fill" objectFit="cover" />
        {/* Form Container */}
        <div className="w-full h-full absolute bg-[#00000047] backdrop-blur-sm flex flex-col justify-center px-1 z-50 pt-10 sm:w-[70%] sm:h-[60%] sm:rounded-md sm:px-[2rem] md:justify-start  ">
          <h1 className="text-4xl sm:text-4xl tracking-wider font-bold text-center text-white">
            Set Medical Record
          </h1>

          {<RecordForm />}
        </div>
      </div>

      {/* --- Login ---  */}

    </section>
  );
};

export default RecordsForm;
