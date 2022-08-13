// Next Feature
import { router } from "next/router";
// React Features
import { useState, useReducer, createContext } from "react";
// Third Party Library
import Cookie from "js-cookie";
import api from "../axiosApi/api";
// HTTP Req
import {
  fetchAll,
  fetchById,
  createData,
  updateData,
  deleteDataById,
} from "../helpers/ReqHandlers/httpReq";
// Global Reducer
import globalReducer, {
  defaultGlobalState,
  globalActionType,
} from "../helpers/reducers/users-reducer";
// ----------------------------------------------------------

export const GeneralContext = createContext();

const getWindowSize = () => {
  const { innerWidth: width } = window;
  return { width };
};

const GeneralContextProvider = (props) => {
  const [globalState, dispatchGlobalAction] = useReducer(
    globalReducer,
    defaultGlobalState
  );

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [width, setWidth] = useState();

  const getWidthHandler = () => {
    const { width } = getWindowSize();
    setWidth(width);
  };

  // Users Functions Handlers
  const getAllUsersHandler = async () => {
    const response = await fetchAll("/users");
    dispatchGlobalAction({
      type: globalActionType.getAllUsers,
      payload: response,
    });
  };

  const getUserHandler = async (userId) => {
    try {
      const response = await fetchById("/users", userId);
      dispatchGlobalAction({
        type: globalActionType.getUserById,
        payload: response,
      });
    } catch (error) {
      console.log("Error getting user", error);
    }
  };

  const addUserHandler = async (newUserData) => {
    const response = await createData("/users", newUserData);
    dispatchGlobalAction({
      type: globalActionType.createUser,
      payload: response,
    });
  };

  const updateUserHandler = async (newData) => {
    const response = await updateData("/users", newData);
    dispatchGlobalAction({
      type: globalActionType.updateUserData,
      payload: response,
    });
  };

  const usersCtx = {
    users: globalState.users,
    user: globalState.user,
    getAllUsersHandler,
    getUserHandler,
    addUserHandler,
    updateUserHandler,
  };

  // Pets Functions Handlers
  const getAllPetsHandler = async () => {
    try {
      const response = await fetchAll("/pets");
      dispatchGlobalAction({
        type: globalActionType.getAllPets,
        payload: response,
      });
    } catch (error) {
      console.error("An error occur during GET /pets", error);
    }
  };

  const getPetHandler = async (petId) => {
    try {
      const response = await fetchById("/pets", petId);
      dispatchGlobalAction({
        type: globalActionType.getPetById,
        payload: response,
      });
    } catch (error) {
      console.error("Error occur during /GET pet");
    }
  };

  const addPetHandler = async (newPetData) => {
    const response = await createData("/pets", newPetData);
    dispatchGlobalAction({
      type: globalActionType.createPet,
      payload: response,
    });
  };

  const deletePetHandler = async (id) => {
    await deleteDataById("/pets", id);
    dispatchGlobalAction({
      type: globalActionType.removePet,
    });
  };

  const updatePetHandler = async (newPetData) => {
    try {
      const response = await updateData("pets", newPetData);
      dispatchGlobalAction({
        type: globalActionType.updatePetData,
        payload: response,
      });
    } catch (error) {
      console.error("Error occur during pet update", error);
    }
  };

  const petsCtx = {
    pets: globalState.pets,
    pet: globalState.pet,
    getAllPetsHandler,
    getPetHandler,
    addPetHandler,
    updatePetHandler,
    deletePetHandler,
  };

  const searchHandler = (term) => {
    setSearchValue(term);
    if (term !== "") {
      const user = globalState.users.filter((user) => {
        return Object.values(user)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase());
      });
      setSearchResults(user);
    } else {
      setSearchResults(globalState);
    }
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

  return (
    <GeneralContext.Provider
      value={{
        usersCtx,
        petsCtx,
        searchValue,
        searchHandler,
        setSearchValue,
        searchResults,
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
