import { BiSearchAlt2 } from "react-icons/bi";

const PetsFinder = ({ petsData, setPets }) => {
  const filteredPets = (value) =>
    petsData.filter((pet) =>
      pet.name.toLowerCase().includes(value.toLowerCase())
    );

  const searchPetHandler = (value) => {
    setPets(filteredPets(value));
  };

  return (
    <div className=" h-[3rem] px-5 mt-[20px] sm:-mt-10">
      <div className="relative h-[3rem] w-full  ">
        <BiSearchAlt2
          size={30}
          className="relative top-[3.8rem] left-[-0.1rem] text-dark-green border-r-1 border-r-[1px] border-dark-green w-[5rem]"
        />
      </div>
      <input
        className="w-full pt-4 pb-2 rounded-xl border-[1px] border-dark-green pl-[6rem] focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 placeholder:text-xl"
        type="search"
        name="search-form"
        id="search-form"
        placeholder="Search . . ."
        onChange={(e) => searchPetHandler(e.target.value)}
      />
    </div>
  );
};

export default PetsFinder;
