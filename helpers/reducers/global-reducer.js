const defaultGlobalState = {
  users: [],
  user: [],
  pets: [],
  pet: [],
};

const globalActionType = {
  getAllUsers: "GET_ALL_USERS",
  getAllPets: "GET_ALL_PETS",
  getUserById: "GET_USER_BY_ID",
  getPetById: "GET_PET_BY_ID",
  createUser: "CREATE_USER",
  createPet: "CREATE_PET",
  updateUserData: "UPDATE_USER",
  updatePetData: "UPDATE_PET_DATA",
  removePet: "REMOVE_PET",
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case globalActionType.getAllUsers:
      return { ...state, users: action.payload };
    case globalActionType.getUserById:
      return { ...state, user: action.payload };
    case globalActionType.createUser:
      return { ...state, users: [{ ...action.payload }] };
    case globalActionType.updateUserData:
      return { ...state, user: { ...action.payload } };
    case globalActionType.getAllPets:
      return { ...state, pets: action.payload };
    case globalActionType.getPetById:
      return { ...state, pet: action.payload };
    case globalActionType.createPet:
      return { ...state, pets: [...state.pets, { ...action.payload }] };
    case globalActionType.updatePetData:
      return { ...state, pet: { ...action.payload } };
    case globalActionType.removePet:
      const newList = state.pets.filter((pets) => pets.id !== action.payload);
      return { ...state, pets: newList };
    default:
      return defaultUsersState;
  }
};

export { defaultGlobalState, globalActionType };
export default globalReducer;
