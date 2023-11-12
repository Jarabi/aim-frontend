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
  const [userRole, setUserRole] = useState();

  const fetchData = async () => {
    const res = await usersApi.fetchOneById(data.id);
    setUserData((userData) => ({ ...userData, res }));
    setUserRole(res.data.role.name);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container dashboard'>
      {userRole === "regular" && <UserView userData={userData} />}
      {userRole === "approver" && <ManagerView />}
      {userRole === "admin" && <AdminView />}
    </div>
  );
}
