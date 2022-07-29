import { BiSearchAlt2 } from "react-icons/bi";

const PetsFinder = ({ details, setPets }) => {
  const filteredPets = (value) =>
    details.filter((pet) =>
      pet.pet.toLowerCase().includes(value.toLowerCase())
    );

  function searchPetHandler(value) {
    setPets(filteredPets(value));
  }

  return (
    <div>
      <div className="absolute w-[10rem] h-[3rem]">
        <BiSearchAlt2
          size={30}
          className="relative top-[0.8rem] left-[-0.1rem] text-dark-green border-r-1 border-r-[1px] border-dark-green mr-10 w-[5rem]"
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
