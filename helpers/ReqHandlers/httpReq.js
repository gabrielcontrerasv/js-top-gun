import api from "../../axiosApi/api";
import axios from "axios";

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getHeaders(token) {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie(token)}`,
    },
  };
}

export const fetchAll = async (data) => {
  try {
    const response = await api.get(data, {}, getHeaders(getCookie("token")));
    return response.data;
  } catch (error) {
    console.error("An error occur during GET /users request", error);
  }
};

export const fetchById = async (path, id) => {
  try {
    const response = await api.get(
      `${path}/${id}`,
      {},
      getHeaders(getCookie("token"))
    );
    return response.data;
  } catch (error) {}
};

export const createData = async (path, newData) => {
  const response = await api.post(
    `${path}`,
    newData,
    getHeaders(getCookie("token"))
  );
  return response.data;
};

export const updateData = async (path, newData) => {
  const response = await api.put(
    `${path}/${newData.id}`,
    newData,
    getHeaders(getCookie("token"))
  );
  return response.data;
};

export const deleteDataById = async (path, id) => {
  const response = api.delete(
    `${path}/${id}`,
    {},
    getHeaders(getCookie("token"))
  );
  return response.data;
};
