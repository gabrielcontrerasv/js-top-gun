import React from "react";
import { useForm } from "react-hook-form";
import { FaUserAlt, FaLock, FaRegEye, FaCity } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import classes from './signinForm.module.css';

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-1/4 px-2 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="Enter your name"
              {...register('name', {required: true, pattern: /^[A-Za-z]+$/i})}
            />
            {errors.name?.type === 'required' && <p className="text-red-500 text-xs italic">
              Name is required.
            </p>}
            {errors.name?.type === 'pattern' && <p className="text-red-500 text-xs italic">
              Name is not valid.
            </p>}
          </div>
          <div className="w-full md:w-1/4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter your lastname"
              {...register('lastname', {required: true, pattern: /^[A-Za-z]+$/i})}
            />
            {errors.lastname?.type === 'required' && <p className="text-red-500 text-xs italic">
              Lastname is required.
            </p>}
            {errors.lastname?.type === 'pattern' && <p className="text-red-500 text-xs italic">
              Lastname is not valid.
            </p>}
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Document
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="Type your ID document"
              {...register('document', {required: true, pattern: /^[0-9]+$/i})}
            />
            {errors.document?.type === 'required' && <p className="text-red-500 text-xs italic">
              Document is required.
            </p>}
            {errors.lastname?.type === 'pattern' && <p className="text-red-500 text-xs italic">
              Document is not valid.
            </p>}
          </div>
          <div className="w-full md:w-1/4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Gender
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                placeholder="Choose your gender"
                {...register('gender', {required: true})}
              >
                <option>Choose your gender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
              {errors.gender?.type === 'required' && <p className="text-red-500 text-xs italic">
              Gender is required.
            </p>}
            </div>
          </div>          
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
        
          <div className="w-full md:w-1/4 px-3 mb-4 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Phone number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="Enter your phone number"
              {...register('phoneNumber', {required: true})}
            />
            {errors.phoneNumber?.type === 'required' && <p className="text-red-500 text-xs italic">
              Phone number is required.
            </p>}
          </div>
          <div className="w-full md:w-1/4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter your email"
              {...register('email', {required: true})}
            />
            {errors.email?.type === 'required' && <p className="text-red-500 text-xs italic">
              Email is required.
            </p>}
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Enter your city"
              {...register('city', {required: true})}
            />
            {errors.city?.type === 'required' && <p className="text-red-500 text-xs italic">
              City is required.
            </p>}
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="Enter your address"
              {...register('address', {required: true})}
            />
            {errors.address?.type === 'required' && <p className="text-red-500 text-xs italic">
              Address is required.
            </p>}
          </div> 
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="password"
              placeholder="Enter your new password"
              {...register('password', {required: true})}
            />
            {errors.password?.type === 'required' && <p className="text-red-500 text-xs italic">
              Password is required.
            </p>}
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Confirm password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="password"
              placeholder="Confirm your password"
              {...register('passwordConfirmed', {required: true})}
            />
            {errors.passwordConfirmed?.type === 'required' && <p className="text-red-500 text-xs italic">
              Password confirmation is required.
            </p>}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <p className="text-1xl text-center m-auto color text-[#154D4D]">*All your data is protected by us and will not be shared to anyone</p>
        </div>
        <div className="mb-2 m-auto w-72">          
          <button className="bg-[#154D4D] hover:bg-[#FEDB54] text-white hover:text-black font-bold py-2 px-24 rounded-full my-4" type="submit">Sign In</button>
        </div>
      </form>      
  );
}
