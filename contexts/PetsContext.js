import { useState, useEffect, createContext } from "react";
import api from "../axiosApi/api";

export const PetsContext = createContext();

const fetchPets = async () => {
  const response = await api.get("/myPets");
  return response.data;
};

const PetsContextProvider = (props) => {
  const [userPets, setUserPets] = useState([]);

  useEffect(() => {
    const getPets = async () => {
      const pets = await fetchPets();
      if (pets) setUserPets(pets);
    };
    getPets();
  }, []);

  const addNewPet = (newPetData) => {
    setUserPets([...userPets, newPetData]);
  };

  const deletePet = async (id) => {
    await api.delete(`/myPets/${id}`);
    const newPetsList = userPets.filter((pets) => pets.id !== id);
    setUserPets(newPetsList);
  };

  const updatePet = async (updatedPet) => {
    const response = await api.put(`/myPets/${updatedPet.id}`, updatedPet);

    setUserPets(
      userPets.map((pet) => {
        return pet.id === updatedPet.id ? { ...response.data } : pet;
      })
    );
  };

  return (
    <PetsContext.Provider value={{ userPets, addNewPet, deletePet, updatePet }}>
      {props.children}
    </PetsContext.Provider>
  );
};

export default PetsContextProvider;
