// Next Feature
import { router } from "next/router";
// React Features
import { useState, createContext } from "react";
// Third Party Library
import Cookie from "js-cookie";
import api from "../axiosApi/api";
// ----------------------------------------------------------

export const GeneralContext = createContext();

// GET REQUEST ( )
const fetchPets = async () => {
  try {
    const response = await api.get("/pets");
    return response.data;
  } catch (error) {
    console.error("An error occur during GET /pets request", error);
  }
};

const fetchUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("An error occur during GET /users request", error);
  }
};

// const fetchPet = async (petId) => {
//   try {
//     const response = ;
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const getWindowSize = () => {
  const { innerWidth: width } = window;
  return { width };
};

const GeneralContextProvider = (props) => {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [pet, setPet] = useState([]);
  const [userPets, setUserPets] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [width, setWidth] = useState();

  const getWidthHandler = () => {
    const { width } = getWindowSize();
    setWidth(width);
  };

  const getUsers = async () => {
    try {
      const users = await fetchUsers();
      if (users) setUsers(users);
    } catch (error) {
      console.error("An error occur during GET /users", error);
    }
  };

  const getPets = async () => {
    try {
      const pets = await fetchPets();
      if (pets) setUserPets(pets);
    } catch (error) {
      console.error("An error occur during GET /pets", error);
    }
  };

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

  const getPet = async (petId) => {
    try {
      const pet = await api.get(`pets/${petId}`);
      if (pet) {
        setPet(pet.data);
      }
    } catch (error) {
      console.error("Error occur during /GET pet");
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
    const options = {
      headers: {
        accept: " */*",
        "Content-Type": "application/json",
      },
    };
    
    try {
      const response = await api.post("/auth/login", loginData, options);
      const { token } = response.data;

      if (token) {
        Cookie.set("token", token);

        api.defaults.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Login Error", error.message);
    }
  };

  const logout = async () => {
    try {
      const response = await api.post("/logout");
      if (response) router.push("/");
    } catch (error) {
      console.log("Logout Error", error);
    }
  };

  // DELETE REQUEST ( DELETE PET )
  const deletePet = async (id) => {
    await api.delete(`/pets/${id}`);
    const newPetsList = userPets.filter((pets) => pets.id !== id);
    setUserPets(newPetsList);
  };

  // PUT REQUEST ( UPDATE USER & PET DATA)
  const updatePet = async (updatedPet) => {
    const response = await api.put(`/pets/${updatedPet.id}`, updatedPet);

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
        pet,
        users,
        setUsers,
        userPets,
        getUser,
        getUsers,
        getPet,
        getPets,
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
        logout,
        width,
        getWidthHandler,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
