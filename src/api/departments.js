import client from "./client";

const fetchAll = async () => {
  try {
    const response = await client.get("/departments");
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
const fetchOneById = async (id) => {
  try {
    const response = await client.get(`/departments/${id}`);
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

const departmentsApi = {
  fetchAll,
  fetchOneById
};

export default departmentsApi;
