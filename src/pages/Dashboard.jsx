import { useEffect, useState } from "react";
import AdminView from "../components/AdminView";
import UserView from "../components/UserView";
import ManagerView from "../components/ManagerView";
import LoadingTable from "../components/LoadingTable";
import { CURRENT_USER } from "../api/constants";

export default function Dashboard() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const user = JSON.parse(localStorage.getItem(CURRENT_USER));
      setUserData(user);
      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <div className="container dashboard">
      {loading ? (
        <LoadingTable />
      ) : (
        <>
          {userData && userData.role.name === "regular" && (
            <UserView userData={userData} />
          )}
          {userData && userData.role.name === "approver" && (
            <ManagerView userData={userData} />
          )}
          {userData && userData.role.name === "admin" && (
            <AdminView userData={userData} />
          )}
        </>
      )}
    </div>
  );
}
