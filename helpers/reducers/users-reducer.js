import { fetchAllUsers } from "../ReqHandlers";

const defaultUsersState = {
  users: [],
  user: {},
};

const usersActionsTypes = {
  getAllUsers: "GET_ALL_USERS",
  getUserById: "GET_USER_BY_ID",
  createUser: "CREATE_USER",
  updateUserData: "UPDATE_USER",
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
    default:
      return defaultUsersState;
  }
};

export { defaultUsersState, usersActionsTypes };
export default usersReducer;
