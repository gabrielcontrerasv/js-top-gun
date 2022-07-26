import React from "react";
// 3rd PArty Library
import { useForm } from "react-hook-form";
// Component
// import InputForm from "./InputForm";
// -------------------------------------------------- //

const Form = () => {
  //prettier-ignore
  const { handleSubmit, register, formState: { errors } } = useForm();

  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <div className="w-full col-span-2 mb-[5rem] mt-[100px] md:col-start-1 md:col-end-3 flex justify-center items-center row-start-1 row-end-3">
      <div className="w-[70%] flex flex-col gap-y-6 ">
        <h1 className="text-4xl text-[#1F6B6B] font-semibold text-center">
          Make an appointment
        </h1>

        <p className="text-justify">
          In this section you can request an appointment for a general medical
          consultation, specialized medical consultation, vaccinations and
          administrative procedures.
          <br />
          <br />
          It is not possible to request appointments online for some activities
          (diagnostic tests, minor surgery, etc.) that require a prior
          indication from a professional or special preparation conditions.
        </p>

        <form
          className="text-center relative "
          onSubmit={handleSubmit(submitHandler)}
        >
          <fieldset className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
              <select
                className="placeholder:text-[#1F6B6B] block bg-white w-full
                border-2 border-[#1F6B6B] rounded-2xl py-2 pl-2 sm:pl-4 pr-3
                focus:outline-none focus:border-[#1F6B6B] focus:ring-[#1F6B6B]
                focus:ring-1 max-h-[45px]"
                type="number"
                placeholder="Phone"
                {...register("phone", { required: true })}
              >
                <option>Medical Service</option>
                <option>Grooming Service</option>
              </select>
            </div>
            <div>
              <input
                className="placeholder:text-[#1F6B6B] block bg-white w-full border-2 border-[#1F6B6B] rounded-2xl py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-[#1F6B6B] focus:ring-[#1F6B6B] focus:ring-1"
                type="date"
                placeholder="Date"
                {...register("date", { required: true })}
              />
            </div>
          </fieldset>

          <textarea
            className="placeholder:text-[#1F6B6B] block bg-white w-full border-2 border-[#1F6B6B] rounded-2xl py-2 pl-9 pr-3  focus:outline-none focus:border-[#1F6B6B] focus:ring-[#1F6B6B] focus:ring-1 mb-5"
            cols={10}
            rows={6}
            placeholder="Some description"
            {...register("text-area", { required: true })}
          ></textarea>

          {/* prettier-ignore */}
          <button type="submit" className="px-2 rounded-3xl h-[3rem] w-[8rem] bg-[#1F6B6B] text-white right-3 absolute tracking-wider">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
