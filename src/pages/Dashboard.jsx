import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import usersApi from "../api/users";
import AdminView from "../components/AdminView";
import UserView from "../components/UserView";
import ManagerView from "../components/ManagerView";

export default function Dashboard() {
  const location = useLocation();
  const data = location.state;
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getUser = async () => {
      const userFromServer = await fetchUser(data.id);
      setUserData(userFromServer);
    };

    getUser();
  }, []);

  const fetchUser = async (id) => {
    const res = await usersApi.fetchOneById(id);
    return res;
  };

  return (
    <div className='container dashboard'>
      {/* {userRole === "regular" && <UserView userData={userData} />}
      {userRole === "approver" && <ManagerView />}
      {userRole === "admin" && <AdminView userData={userData} />} */}
    </div>
  );
}
