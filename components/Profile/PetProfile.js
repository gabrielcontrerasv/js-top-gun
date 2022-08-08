import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import BgPetCard from "../../public/assets/images/BgPetCard.webp";
import api from "../../axiosApi/api";
import Navigation from "../Layout/Navigation";
import PetTable from "./PetTable";

const fetchPet = async (petId) => {
  try {
    const response = await api.get(`myPets/${petId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const PetProfile = () => {
  const [pet, setPet] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getPet = async () => {
      const pet = await fetchPet(router.query.index);
      if (pet) {
        setPet(pet);
      }
    };
    getPet();
  }, []);

  console.log(pet);

  return (
    <div>
      <Navigation />
      <section className="grid grid-cols-12 grid-rows-[repeat(10,_minmax(10vh,_10vh))] ">
        <div className="col-start-3 col-end-12 row-start-2 row-end-10 ">
          {/* USER DETAILS CONTAINER */}
          <div className="w-full h-[50%]  flex gap-5">
            {/* USER IMAGE */}
            <div className="w-[30%] h-full bg-slate-200"></div>
            {/* USER DETAILS */}
            <div className="w-[70%]  flex flex-col gap-5 ">
              <h1 className="font-bold text-4xl text-primary-text">
                {pet.name}
              </h1>
              <div className="w-full h-[70%] flex flex-col gap-1 justify-between text-2xl text-primary-text tracking-wide ">
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Code number:</p>
                  <p>{pet.microchip}</p>
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">species: </p>
                  <p>{pet.species}</p>
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Weight:</p>
                  <p>{pet.weight}</p>
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Age:</p>
                  <p>{pet.birthday} years</p>
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Status:</p>
                  <p>{pet.status}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* RECORDS */}
            <PetTable />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PetProfile;
