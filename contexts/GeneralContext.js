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
  const [users, setUsers] = useState([]);
  const [userPets, setUserPets] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // GET REQUEST
  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchUsers();
        if (users) setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };

    const getPets = async () => {
      try {
        const pets = await fetchPets();
        if (pets) setUserPets(pets);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
    getPets();
  }, []);

  // SEARCH FUNCTIONALITY
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

  // POST REQUEST
  const addNewPet = (newPetData) => {
    setUserPets([...userPets, newPetData]);
  };

  // DELETE REQUEST
  const deletePet = async (id) => {
    await api.delete(`/myPets/${id}`);
    const newPetsList = userPets.filter((pets) => pets.id !== id);
    setUserPets(newPetsList);
  };

  // PUT REQUEST
  const updatePet = async (updatedPet) => {
    const response = await api.put(`/myPets/${updatedPet.id}`, updatedPet);

    setUserPets(
      userPets.map((pet) => {
        return pet.id === updatedPet.id ? { ...response.data } : pet;
      })
    );
  };

  const updateUser = async (updatedUser) => {
    console.log(updatedUser);
    const response = await api.put(`/users/${updatedUser.id}`, updatedUser);

    setUsers(
      users.map((user) => {
        return user.id === updatedUser.id ? { ...response.data } : user;
      })
    );
  };

  return (
    <GeneralContext.Provider
      value={{
        users,
        setUsers,
        userPets,
        searchValue,
        searchHandler,
        setSearchValue,
        searchResults,
        addNewPet,
        deletePet,
        updatePet,
        updateUser,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
