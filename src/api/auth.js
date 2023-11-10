import client from "./client";
import { AUTH_TOKEN } from "./constants";

/**
 *
 * @param { {email: string, password: string} } credentials
 */
const loginUser = async (credentials) => {
  try {
    const response = await client.post("/auth/login", credentials);
    if (response.status === 201) {
      localStorage.setItem(AUTH_TOKEN, response.data.accessToken);
    }
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

const authApi = {
  loginUser
};

export default authApi;
