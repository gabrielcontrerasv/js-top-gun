import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PetsForm = () => {
  const router = useRouter();
  const modalHandler = () => {
    console.log(router);
  };
  return (
    <div className="w-[40rem] h-[35rem] bg-white rounded-md ">
      <div className="w-full border-black border-b-[1px] py-5 pl-5 text-xl font-semibold text-dark-green">
        <h1> Create new pet - Nicolas Peña</h1>
      </div>
      <form className="grid grid-cols-2 p-5 gap-y-8 gap-x-5 mt-5">
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Name"
          // {...register("date", { required: true })}
        />
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="number"
          placeholder="Microchip"
          // {...register("date", { required: true })}
        />
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Species"
          // {...register("date", { required: true })}
        />
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Breed"
          // {...register("date", { required: true })}
        />
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="date"
          placeholder="Birthday"
          // {...register("date", { required: true })}
        />
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="number"
          placeholder="Weight (Kg)"
          // {...register("date", { required: true })}
        />
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Status"
          // {...register("date", { required: true })}
        />
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Gender"
          // {...register("date", { required: true })}
        />
        <Link href="/petRegister">
          <button
            className=" bg-dark-green text-white tracking-wider w-full col-span-2 h-[3rem] rounded-md duration-100 hover:bg-gradient-to-t from-dark-green to-[#147e7e] mt-7"
            onClick={modalHandler}
          >
            Add
          </button>
        </Link>
      </form>
    </div>
  );
};

export default PetsForm;
