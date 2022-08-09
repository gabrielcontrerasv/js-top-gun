import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
// Next Feature
import Link from "next/link";
import Image from "next/image";
// Third Party Library
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { RiFolderOpenFill } from "react-icons/ri";
// Assets
import BgPetCard from "../../public/assets/images/BgPetCard.webp";
// ------------------------------------------------------------------

const PetCard = ({ pet }) => {
  const { deletePet } = useContext(GeneralContext);
  return (
    <ul className="border bg-gradient-to-t from-white p-5 drop-shadow-2xl cursor-pointer w-[16rem] h-[13.5rem] lg:w-[17rem] lg:h-[16.5rem] border-dark-green rounded-md relative overflow-hidden px-5 py-2 hover:translate-y-[-10px] duration-300 ">
      <Image
        src={BgPetCard}
        layout="fill"
        objectFit="contain"
        objectPosition="top"
      />

      <div className="z-50 relative flex flex-col gap-8 ">
        <div className="flex justify-between items-center mt-1 ">
          <h1 className="text-xl sm:text-2xl xl:text-3xl text-white tracking-wide  font-semibold">
            {pet.name}
          </h1>
          <div className="flex gap-2">
            <AiFillDelete
              className="cursor-pointer text-white sm:text-[1.2rem]"
              onClick={() => deletePet(pet.id)}
            />
            <Link href={`/myPets/${pet.id}`}>
              <RiFolderOpenFill className="cursor-pointer text-white sm:text-[1.2rem]" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-2 ">
          <div className="text-sm sm:text-md lg:text-lg text-primary-green flex justify-between ">
            <p className="font-semibold">Species:</p>
            <p>{pet.species}</p>
          </div>
          <div className="text-sm sm:text-md lg:text-lg text-primary-green flex justify-between ">
            <p className="font-semibold">Gender:</p>
            <p>{pet.gender}</p>
          </div>
          <div className="text-sm sm:text-md lg:text-lg text-primary-green flex justify-between ">
            <p className="font-semibold">Weight:</p>
            <p>{pet.species}</p>
          </div>
          <div className="text-sm sm:text-md lg:text-lg text-primary-green flex justify-between ">
            <p className="font-semibold">Breed:</p>
            <p>{pet.breed}</p>
          </div>
          <div className="text-sm sm:text-md lg:text-lg text-primary-green flex justify-between ">
            <p className="font-semibold">Birthday:</p>
            <p>{pet.birthday}</p>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default PetCard;
