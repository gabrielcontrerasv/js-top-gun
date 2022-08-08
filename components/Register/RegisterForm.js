// Next Feature
import Link from "next/link";
// Third Party Library ( Hook Form )
import { useForm } from "react-hook-form";
// Components
import ErrorFormMsg from "../ErrorFormMsg/ErrorFormMsg";
// ----------------------------------------

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <form
      className=" flex flex-col h-[80%] justify-center md:justify-center 2xl:justify-center"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="grid grid-cols-2 gap-5 2xl:gap-y-[1.5rem] 2xl:mt-10  ">
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            type="text"
            placeholder="Name"
            autoComplete="off"
            {...register("name", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.name && <ErrorFormMsg errorMessage={errors.name?.message} />}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4  "
            autoComplete="off"
            type="text"
            placeholder="Last Name"
            {...register("lastName", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.lastName && (
            <ErrorFormMsg errorMessage={errors.lastName?.message} />
          )}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            autoComplete="off"
            type="number"
            placeholder="ID"
            {...register("ID", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.ID && <ErrorFormMsg errorMessage={errors.ID?.message} />}
        </div>

        <select
          className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
          type="text"
          placeholder="Male"
          {...register("gender", {
            required: { value: true, message: "*Required field" },
          })}
        >
          <option>Male</option>
          <option>Female</option>
        </select>
        {errors.gender && (
          <ErrorFormMsg errorMessage={errors.gender?.message} />
        )}
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            autoComplete="off"
            type="number"
            placeholder="Phone"
            {...register("number", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.number && (
            <ErrorFormMsg errorMessage={errors.number?.message} />
          )}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            autoComplete="off"
            type="email"
            placeholder="E-mail"
            {...register("email", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.email && (
            <ErrorFormMsg errorMessage={errors.email?.message} />
          )}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4  "
            autoComplete="off"
            type="number"
            placeholder="Age"
            {...register("age", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.age && <ErrorFormMsg errorMessage={errors.age?.message} />}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            autoComplete="off"
            type="text"
            placeholder="Address"
            {...register("address", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.address && (
            <ErrorFormMsg errorMessage={errors.address?.message} />
          )}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            autoComplete="off"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.password && (
            <ErrorFormMsg errorMessage={errors.password?.message} />
          )}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            autoComplete="off"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.confirmPassword && (
            <ErrorFormMsg errorMessage={errors.confirmPassword?.message} />
          )}
        </div>
      </div>
      {/* Action__Button__Container */}
      <div className="flex flex-col justify-between items-center   ">
        <button
          className="bg-[#166060] text-white tracking-widest w-full h-[3rem]    text-sm sm:h-[3rem] absolute bottom-0 2xl:h-[3.5rem] 2xl:text-xl 2xl:tracking-[0.2rem] hover:bg-[#2b9d9d]"
          type="submit"
        >
          SIGN UP
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
