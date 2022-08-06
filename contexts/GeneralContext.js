import { useState, useEffect, createContext } from "react";
import api from "../axiosApi/api";

export const GeneralContext = createContext();

const fetchPets = async () => {
  const response = await api.get("/myPets");
  return response.data;
};

const fetchUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

const GeneralContextProvider = (props) => {
  const [userPets, setUserPets] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchUsers();
        if (users) setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const searchHandler = (term) => {
    setSearchValue(term);
    if (term !== "") {
      const user = users.filter((user) => {
        return Object.values(user)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase());
      });
      setSearchResults(user);
    } else {
      setSearchResults(users);
    }
  };

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
    <GeneralContext.Provider
      value={{
        users,
        setUsers,
        searchValue,
        searchHandler,
        setSearchValue,
        searchResults,
        addNewPet,
        deletePet,
        updatePet,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
