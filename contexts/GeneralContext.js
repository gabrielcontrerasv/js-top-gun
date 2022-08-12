// Next Feature
import { router } from "next/router";
// React Features
import { useState, useReducer, createContext } from "react";
// Third Party Library
import Cookie from "js-cookie";
import api from "../axiosApi/api";
// HTTP Req
import {
  fetchAllUsers,
  fetchUser,
  createNewUser,
  updateUserData,
} from "../helpers/ReqHandlers/index";
// Users Reducer
import usersReducer, {
  defaultUsersState,
  usersActionsTypes,
} from "../helpers/reducers/users-reducer";
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
  const [pet, setPet] = useState([]);
  const [userPets, setUserPets] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [width, setWidth] = useState();

  const getWidthHandler = () => {
    const { width } = getWindowSize();
    setWidth(width);
  };

  const [allUsersState, dispatchUsersAction] = useReducer(
    usersReducer,
    defaultUsersState
  );

  // Handlers
  const getAllUsersHandler = async () => {
    await fetchAllUsers().then((response) => {
      dispatchUsersAction({
        type: usersActionsTypes.getAllUsers,
        payload: response,
      });
    });
  };

  const getUserHandler = async (userId) => {
    try {
      await fetchUser(userId).then((response) => {
        dispatchUsersAction({
          type: usersActionsTypes.getUserById,
          payload: response,
        });
      });
    } catch (error) {
      console.log("Error getting user", error);
    }
  };

  const addUserHandler = async (newUserData) => {
    await createNewUser(newUserData).then((response) => {
      dispatchUsersAction({
        type: usersActionsTypes.createUser,
        payload: response,
      });
    });
  };

  const updateUserHandler = async (newData) => {
    await updateUserData(newData).then((response) => {
      dispatchUsersAction({
        type: usersActionsTypes.updateUserData,
        payload: response,
      });
    });
  };

  const getPets = async () => {
    try {
      const pets = await fetchPets();
      if (pets) setUserPets(pets);
    } catch (error) {
      console.error("An error occur during GET /pets", error);
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
      const user = allUsersState.users.filter((user) => {
        return Object.values(user)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase());
      });
      setSearchResults(user);
    } else {
      setSearchResults(allUsersState);
    }
  };

  // POST REQUEST ( USER & PET REGISTER - USER LOGIN )

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
    try {
      const response = await api.put(`/pets/${updatedPet.id}`, updatedPet);

      setUserPets(
        userPets.map((pet) => {
          return pet.id === updatedPet.id ? { ...response.data } : pet;
        })
      );
    } catch (error) {
      console.error("Error occur during pet update", error);
    }
  };

  return (
    <GeneralContext.Provider
      value={{
        allUsersState,
        pet,
        userPets,
        userPets,
        getUserHandler,
        getAllUsersHandler,
        addUserHandler,
        updateUserHandler,
        getPet,
        getPets,
        searchValue,
        searchHandler,
        setSearchValue,
        searchResults,
        addNewPet,
        deletePet,
        updatePet,
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
