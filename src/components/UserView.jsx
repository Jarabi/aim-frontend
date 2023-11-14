import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import usersApi from "../api/users";
import MyRequisitions from "./MyRequisitions";

const UserView = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = usersApi.fetchLocalUser();
      setUserData(user);
    };

    fetchUserDetails();
  }, []);

  return <MyRequisitions />;
};

export default UserView;
