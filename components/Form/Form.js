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
    <div className="col-start-2 col-end-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-[#1F6B6B] font-semibold text-center">
        Make an appointment
      </h1>

      <form
        className="w-[80%] text-center py-8 relative "
        onSubmit={handleSubmit(submitHandler)}
      >
        <fieldset className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <input
              className="placeholder:text-[#1F6B6B] block bg-white w-full border-2 border-[#1F6B6B] rounded-2xl py-2 pl-9 pr-3 focus:outline-none focus:border-[#1F6B6B] focus:ring-[#1F6B6B] focus:ring-1 max-h-[45px]"
              type="text"
              placeholder="Patient's name"
              {...register("patient", { required: true })}
            />
          </div>
          <div>
            <select
              className="placeholder:text-[#1F6B6B] block bg-white w-full border-2 border-[#1F6B6B] rounded-2xl py-2 pl-9 pr-3  focus:outline-none focus:border-[#1F6B6B] focus:ring-[#1F6B6B] focus:ring-1 max-h-[45px]"
              type="text"
              placeholder="Species"
              {...register("species", { required: true })}
            >
              <option>Canine</option>
              <option>Feline</option>
            </select>
          </div>
          <div>
            <input
              className="placeholder:text-[#1F6B6B] block bg-white w-full border-2 border-[#1F6B6B] rounded-2xl py-2 pl-9 pr-3  focus:outline-none focus:border-[#1F6B6B] focus:ring-[#1F6B6B] focus:ring-1 max-h-[45px]"
              type="number"
              placeholder={errors.age ? "*Age field is required" : "Age"}
              {...register("age", { required: true })}
            />
          </div>
          <div>
            <select
              className="placeholder:text-[#1F6B6B] block bg-white w-full border-2 border-[#1F6B6B] rounded-2xl py-2 pl-9 pr-3  focus:outline-none focus:border-[#1F6B6B] focus:ring-[#1F6B6B] focus:ring-1 max-h-[45px]"
              type="text"
              placeholder="Patient gender"
              {...register("gender", { required: true })}
            >
              <option className="text-[#1F6B6B]">Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <input
              className="placeholder:text-[#1F6B6B] block bg-white w-full border-2 border-[#1F6B6B] rounded-2xl py-2 pl-9 pr-3  focus:outline-none focus:border-[#1F6B6B] focus:ring-[#1F6B6B] focus:ring-1 max-h-[45px]"
              type="text"
              placeholder="Tutor's name"
              {...register("tutor", { required: true })}
            />
          </div>
          <div>
            <input
              className="placeholder:text-[#1F6B6B] block bg-white w-full border-2 border-[#1F6B6B] rounded-2xl py-2 pl-9 pr-3  focus:outline-none focus:border-[#1F6B6B] focus:ring-[#1F6B6B] focus:ring-1 max-h-[45px]"
              type="text"
              placeholder="Specialist"
              {...register("specialist", { required: true })}
            />
          </div>
          <div>
            <input
              className="placeholder:text-[#1F6B6B] block bg-white w-full border-2 border-[#1F6B6B] rounded-2xl py-2 pl-9 pr-3  focus:outline-none focus:border-[#1F6B6B] focus:ring-[#1F6B6B] focus:ring-1 max-h-[45px]"
              type="date"
              placeholder="Date"
              {...register("date", { required: true })}
            />
          </div>
          <div>
            <input
              className="placeholder:text-[#1F6B6B] block bg-white w-full border-2 border-[#1F6B6B] rounded-2xl py-2 pl-9 pr-3  focus:outline-none focus:border-[#1F6B6B] focus:ring-[#1F6B6B] focus:ring-1 max-h-[45px]"
              type="number"
              placeholder="Phone"
              {...register("phone", { required: true })}
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
  );
};

export default Form;
