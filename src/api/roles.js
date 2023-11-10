import client from "./client";

const fetchAll = async () => {
  try {
    const response = await client.get("/roles");
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      status: error.response.status,
      data: error.response.data
    };
  }
};

/**
 *
 * @param {string} id
 */
const fetchRoleById = async (id) => {
  try {
    const response = await client.get(`/roles/${id}`);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      status: error.response.status,
      data: error.response.data
    };
  }
};

const rolesApi = {
  fetchAll,
  fetchRoleById
};

export default rolesApi;
