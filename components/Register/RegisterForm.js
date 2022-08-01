import { useForm } from "react-hook-form";
import ErrorFormMsg from "../ErrorFormMsg/ErrorFormMsg";

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (values) => {
    console.log(values);
  };

  const addMarginTop =
    Object.keys(errors).length > 0 && errors.constructor === Object
      ? "mt-2"
      : "mt-16";

  const addGap =
    Object.keys(errors).length === 0 && errors.constructor === Object
      ? "gap-4 sm:gap-7"
      : "gap-3 sm:gap-5";

  return (
    <form
      className="sm:h-[25rem] sm:mt-5 flex flex-col"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className={`grid grid-cols-2 ${addGap}`}>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
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
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 "
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
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
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
          className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          autoComplete="off"
          type="text"
          {...register("gender")}
        >
          <option>Male</option>
          <option>Female</option>
        </select>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
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
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
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
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 "
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
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
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
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
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
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
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
      <div className="flex flex-col justify-between items-center  ">
        <button
          className={`bg-[#166060e4] text-white tracking-widest w-[10rem] sm:w-[16rem] h-[3rem] rounded-md hover:bg-[#2b9d9d] sm:hover:w-[18rem] hover:w-[12rem] ${addMarginTop} h-[2.2rem] text-sm sm:h-[3rem] mb-8 sm:mb-0`}
          type="submit"
        >
          SIGN UP
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
