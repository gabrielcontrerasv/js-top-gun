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
    <div className="w-full pb-[5rem] mt-[80px] sm:mt-0 col-start-1 col-end-3 flex  md:justify-center items-center row-start-1 row-end-3 bg-[#edf4f4] ">
      <div className="md:w-[100%] p-5 flex flex-col gap-y-6 sm:pl-[11rem] sm:pr-10 lg:mt-14">
        <h1 className="text-[2rem] text-[#1F6B6B] font-bold text-center">
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
                className="placeholder:text-mid-green block bg-transparent w-full
                border-2 border-mid-green rounded-md py-2 pl-2 sm:pl-4 pr-3
                focus:outline-none focus:border-mid-green focus:ring-mid-green
                focus:ring-1 max-h-[45px]"
                type="text"
                placeholder="Service"
                {...register("service", { required: true })}
              >
                <option>Medical Service</option>
                <option>Grooming Service</option>
              </select>
            </div>
            <div>
              <input
                className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
                type="date"
                placeholder="Date"
                {...register("date", { required: true })}
              />
            </div>
          </fieldset>

          <textarea
            className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-4 focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 mb-5"
            cols={10}
            rows={6}
            placeholder="Some description"
            {...register("textarea", { required: true })}
          ></textarea>

          {/* prettier-ignore */}
          <button type="submit" className="px-2 rounded-md h-[3rem] w-[8rem] bg-mid-green text-white tracking-wider">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
