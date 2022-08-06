import { useForm } from "react-hook-form";
import Link from "next/link";

import ErrorFormMsg from "../ErrorFormMsg/ErrorFormMsg";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (values) => {
    console.log(values);
  };

  return (
    // { required: true, pattern: /^[A-Za-z]+$/i }
    <form
      className="w-full h-[75%] flex flex-col justify-around"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <div className="flex flex-col justify-between  gap-5">
        <div>
          <input
            className="placeholder:text-white block bg-transparent border-b-[1px] w-full py-2 pl-4 focus:outline-none focus:border-b-2 text-white autofill:bg-inherit mb-2"
            id="username"
            type="text"
            placeholder="Username"
            autoComplete="off"
            {...register("username", {
              required: { value: true, message: "* Required field" },
              minLength: {
                value: 6,
                message: "* This field required min 6 characters",
              },
            })}
          />
          {<ErrorFormMsg errorMessage={errors.username?.message} />}
        </div>
        <div>
          <input
            className="placeholder:text-white block bg-transparent border-b-[1px] w-full py-2 pl-4 focus:outline-none focus:border-b-2 text-white mb-2"
            id="password"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "* Required field" },
              minLength: {
                value: 6,
                message: "* This field required min 6 characters",
              },
            })}
          />
          {<ErrorFormMsg errorMessage={errors.password?.message} />}
        </div>
      </div>
      <div className="mt-6">
        <p className="text-white tracking-widest text-left leading-8 text-md cursor-pointer">
          Forget your password?
        </p>
        <Link href="/register">
          <p className="text-white tracking-widest text-left leading-8 text-md cursor-pointer">
            Create new account
          </p>
        </Link>
      </div>
      <div className="flex flex-col justify-between items-center h-[30%] ">
        <button
          className="bg-[#166060e4] text-white tracking-widest w-full h-[3rem] rounded-md hover:bg-[#2b9d9d] duration-100 mt-5 text-sm"
          type="submit"
        >
          LOGIN
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
