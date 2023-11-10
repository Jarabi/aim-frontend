import client from "./client";

/**
 * 
 * @param {
  {
   title: "string",
   justification: "string",
   userId: "string"
  }
 } requisition 
 * @returns 
 */
const createRequisition = async (requisition) => {
  try {
    const response = await client.post("/requisitions", requisition);
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

const fetchAll = async () => {
  try {
    const response = await client.get("/requisitions");
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
    const response = await client.get(`/requisitions/${id}`);
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
 * @param {
  {
    requisitionId: "string",
    approverId: "string"
  }
 } requisition 
 * @returns 
 */
const approveRequisition = async (requisition) => {
  try {
    const response = await client.post("/requisitions/approve", requisition);
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

const requisitionsApi = {
  createRequisition,
  fetchAll,
  fetchOneById,
  approveRequisition
};

export default requisitionsApi;
