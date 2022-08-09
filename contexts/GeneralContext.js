// React Features
import { useState, useEffect, createContext } from "react";
// Third Party Library
import api from "../axiosApi/api";
// ----------------------------------------------------------

export const GeneralContext = createContext();

// GET REQUEST ( )
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
  const [user, setUser] = useState([]);
  const [userPets, setUserPets] = useState([]);
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

  const getUser = async (userId) => {
    try {
      const user = await api.get(`users/${userId}`);
      if (user) {
        setUser(user.data);
      }
    } catch (error) {
      console.log("Error getting user", error);
    }
  };

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

  // POST REQUEST ( USER & PET REGISTER - USER LOGIN )
  const addNewUser = async (newUserData) => {
    try {
      const updatedUser = await api.post("/users", newUserData);

      setUsers([...users, updatedUser.data]);
    } catch (error) {
      console.error("Error Creating User", error);
    }
  };

  const addNewPet = (newPetData) => {
    setUserPets([newPetData, ...userPets]);
  };

  const logUser = async (loginData) => {
    try {
      const user = await api.post("/login", loginData);
      console.log("User logged");
    } catch (error) {
      console.log("Login Error", error);
    }
  };

  // DELETE REQUEST ( DELETE PET )
  const deletePet = async (id) => {
    await api.delete(`/myPets/${id}`);
    const newPetsList = userPets.filter((pets) => pets.id !== id);
    setUserPets(newPetsList);
  };

  // PUT REQUEST ( UPDATE USER & PET DATA)
  const updatePet = async (updatedPet) => {
    const response = await api.put(`/myPets/${updatedPet.id}`, updatedPet);

    setUserPets(
      userPets.map((pet) => {
        return pet.id === updatedPet.id ? { ...response.data } : pet;
      })
    );
  };

  const updateUser = async (updatedUser) => {
    const response = await api.put(`/users/${updatedUser.id}`, updatedUser);

    setUsers(
      users.map((user) => {
        return user.id === response.data.id ? { ...response.data } : user;
      })
    );
  };

  return (
    <GeneralContext.Provider
      value={{
        user,
        getUser,
        users,
        setUsers,
        userPets,
        searchValue,
        searchHandler,
        setSearchValue,
        searchResults,
        addNewPet,
        addNewUser,
        deletePet,
        updatePet,
        updateUser,
        logUser,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
