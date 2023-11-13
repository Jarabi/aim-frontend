import client from "./client";
import { CURRENT_USER } from "./constants";

/**
 *
 * @param {
    {
      firstName: string,
      lastName: string,
      email: string, 
      roleId: string, 
      departmentId: string, 
      staffId: string
    }
  } userData
 */
const createUser = async (userData) => {
  try {
    const response = await client.post("/users", userData);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response.status,
      data: error.response.data,
    };
  }
};

const fetchAll = async () => {
  try {
    const response = await client.get("/users");
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response.status,
      data: error.response.data,
    };
  }
};

/**
 *
 * @param {string} id
 */
const fetchOneById = async (id) => {
  try {
    const response = await client.get(`/users/${id}`);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response.status,
      data: error.response.data,
    };
  }
};

const fetchLocalUser = () => {
  const user = JSON.parse(localStorage.getItem(CURRENT_USER));
  return user;
};

const usersApi = {
  createUser,
  fetchAll,
  fetchOneById,
  fetchLocalUser,
};

export default usersApi;
