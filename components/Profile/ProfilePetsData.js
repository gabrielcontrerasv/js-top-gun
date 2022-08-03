import { useContext } from "react";
import { PetsContext } from "../../contexts/PetsContext";

import PetCard from "./PetCard";

const ProfilePetsData = () => {
  const { userPets } = useContext(PetsContext);

  return (
    <>
      <div className="col-start-6 col-end-9 p-8 flex flex-col gap-5">
        {userPets &&
          userPets.map((pet) => {
            return (
              <div
                key={pet.id}
                className="border-[1px] border-dark-green p-5 rounded-md max-w-[15rem]"
              >
                <PetCard pet={pet} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProfilePetsData;
