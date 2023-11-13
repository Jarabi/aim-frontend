import { AUTH_TOKEN } from "../api/constants";

export const useAuth = () => {
  const checkLoggedInStatus = () => {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (!token) {
      return false;
    } else {
      return true;
    }
  };

  return { isLoggedIn: checkLoggedInStatus };
};
