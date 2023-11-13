import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import usersApi from "../api/users";
import AdminView from "../components/AdminView";
import UserView from "../components/UserView";
import ManagerView from "../components/ManagerView";
import LoadingTable from "../components/LoadingTable";

export default function Dashboard() {
  const location = useLocation();
  const data = location.state;
  // const userId = data.userId.id;

  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await usersApi.fetchOneById(userId);
      setUserData(response);
      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <div className='container dashboard'>
      {/* {loading ? (
        <LoadingTable />
      ) : (
        <>
          {userData.data.role.name === "regular" && (
            <UserView userData={userData} />
          )}
          {userData.data.role.name === "approver" && (
            <ManagerView userData={userData} />
          )}
          {userData.data.role.name === "admin" && (
            <AdminView userData={userData} />
          )}
        </>
      )} */}
    </div>
  );
}
