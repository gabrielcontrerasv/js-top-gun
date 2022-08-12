import api from "../../axiosApi/api";

export const fetchAllUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("An error occur during GET /users request", error);
  }
};

export const fetchUser = async (userId) => {
  try {
    const user = await api.get(`users/${userId}`);
    return user.data;
  } catch (error) {}
};

export const createNewUser = async (newUserData) => {
  const newUser = await api.post("/users", newUserData);
  return newUser.data;
};

export const updateUserData = async (newData) => {
  const newUserData = await api.put(`/users/${newData.id}`, newData);
  return newUserData.data;
};
