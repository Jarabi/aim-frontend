import client from "./client";

/**
 * 
 * @param {
  {
    serialNumber: "string",
    name: "string",
    description: "string",
    condition: "string"
  }
 } asset 
 */
const createAsset = async (asset) => {
  try {
    const response = await client.post("/assets", asset);
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
    const response = await client.get("/assets");
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
    const response = await client.get(`/assets/${id}`);
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
const deleteAsset = async (id) => {
  try {
    const response = await client.delete(`/users/${id}`);
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
 * @param {
  {
    assetId: "string",
    userId: "string",
    issuerId: "string",
    requisitionId: "string"
  }
 } assignAssetDto 
 */
const assignAsset = async (assignAssetDto) => {
  try {
    const response = await client.patch("/assets/assign", assignAssetDto);
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

const assetsApi = {
  createAsset,
  fetchAll,
  fetchOneById,
  deleteAsset,
  assignAsset,
};

export default assetsApi;
