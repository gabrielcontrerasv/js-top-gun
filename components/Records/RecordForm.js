import { useForm } from "react-hook-form";
import ErrorFormMsg from "../ErrorFormMsg/ErrorFormMsg";

const RecordForm = () => {
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
            placeholder="Appointment"
            autoComplete="off"
            {...register("appointment", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.appointment && (
            <ErrorFormMsg errorMessage={errors.appointment?.message} />
          )}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4  "
            autoComplete="off"
            type="text"
            placeholder="Diagnostic"
            {...register("diagnostic", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.diagnostic && (
            <ErrorFormMsg errorMessage={errors.diagnostic?.message} />
          )}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            autoComplete="off"
            type="text"
            placeholder="Treatment"
            {...register("treatment", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.treatment && (
            <ErrorFormMsg errorMessage={errors.treatment?.message} />
          )}
        </div>

        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            autoComplete="off"
            type="date"
            placeholder="Date"
            {...register("date", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.date && <ErrorFormMsg errorMessage={errors.date?.message} />}
        </div>
      </div>

      <div className="flex flex-col justify-between items-center">
        <button
          className="bg-[#166060] text-white tracking-widest w-full h-[3rem] text-sm sm:h-[3rem] absolute bottom-0 2xl:h-[3.5rem] 2xl:text-xl 2xl:tracking-[0.2rem] hover:bg-[#2b9d9d]"
          type="submit"
        >
          SEND
        </button>
      </div>
    </form>
  );
};

export default RecordForm;
