import { useEffect, useContext } from "react";
import { PetsContext } from "../../contexts/PetsContext";
import { useForm } from "react-hook-form";
import ErrorPetsMsg from "../ErrorFormMsg/ErrorPetsMsg";

const UpdatePetForm = ({ toUpdatePet, toggleModal }) => {
  const { updatePet } = useContext(PetsContext);
  const id = toUpdatePet.id;
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("name", toUpdatePet.name);
    setValue("microchip", toUpdatePet.microchip);
    setValue("species", toUpdatePet.species);
    setValue("breed", toUpdatePet.breed);
    setValue("birthday", toUpdatePet.birthday);
    setValue("weight", toUpdatePet.weight);
    setValue("status", toUpdatePet.status);
    setValue("gender", toUpdatePet.gender);
  }, []);

  const onSubmitHandler = async (values) => {
    updatePet({ ...values, id });
  };

  return (
    <form
      className="grid grid-cols-2 p-5 gap-y-2 gap-x-2 mt-5"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          autoComplete="off"
          type="text"
          placeholder="Name"
          {...register("name", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.name && <ErrorPetsMsg errorMessage={errors.name?.message} />}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 max-h-11"
          type="number"
          placeholder="Microchip"
          {...register("microchip", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.microchip && (
          <ErrorPetsMsg errorMessage={errors.microchip?.message} />
        )}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Species"
          {...register("species", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.species && (
          <ErrorPetsMsg errorMessage={errors.species?.message} />
        )}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Breed"
          {...register("breed", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.breed && <ErrorPetsMsg errorMessage={errors.breed?.message} />}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="date"
          placeholder="Birthday"
          {...register("birthday", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.birthday && (
          <ErrorPetsMsg errorMessage={errors.birthday?.message} />
        )}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="number"
          placeholder="Weight (Kg)"
          {...register("weight", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.weight && (
          <ErrorPetsMsg errorMessage={errors.weight?.message} />
        )}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Status"
          {...register("status", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.status && (
          <ErrorPetsMsg errorMessage={errors.status?.message} />
        )}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Gender"
          {...register("gender", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.gender && (
          <ErrorPetsMsg errorMessage={errors.gender?.message} />
        )}
      </div>
      <button
        type="submit"
        className=" bg-dark-green text-white tracking-wider w-full col-span-2 h-[3rem] rounded-md duration-100 hover:bg-gradient-to-t from-dark-green to-[#147e7e] mt-7"
        onClick={toggleModal}
      >
        Update
      </button>
    </form>
  );
};

export default UpdatePetForm;
