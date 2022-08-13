const defaultUsersState = {
  users: [],
  user: {},
  pets: [],
  pet: {},
};

const usersActionsTypes = {
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

const usersReducer = (state, action) => {
  switch (action.type) {
    case usersActionsTypes.getAllUsers:
      return { ...state, users: action.payload };
    case usersActionsTypes.getUserById:
      return { ...state, user: action.payload };
    case usersActionsTypes.createUser:
      return { ...state, users: { ...action.payload } };
    case usersActionsTypes.updateUserData:
      return { ...state, user: { ...action.payload } };
    case usersActionsTypes.getAllPets:
      return;
    case usersActionsTypes.createPet:
      return;
    case usersActionsTypes.updatePetData:
      return;
    case usersActionsTypes.removePet:
      return;
    default:
      return defaultUsersState;
  }
};

export { defaultUsersState, usersActionsTypes };
export default usersReducer;
