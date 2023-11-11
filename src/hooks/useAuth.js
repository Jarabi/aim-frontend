import { useEffect, useState } from "react";
import { AUTH_TOKEN } from "../api/constants";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoggedInStatus = () => {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };
  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  return { isLoggedIn };
};
