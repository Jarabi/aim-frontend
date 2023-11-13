import client from "./client";
import { AUTH_TOKEN, CURRENT_USER } from "./constants";

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

const logUserOut = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(CURRENT_USER);
};

const authApi = {
  loginUser,
  logUserOut
};

export default authApi;
