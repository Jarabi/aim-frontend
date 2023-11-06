import RegularUserView from "../components/ReqularUserView";
import ManagerView from "../components/ManagerView";
import AdminView from "../components/AdminView";

export default function Views({ userData }) {
  return (
    <>
      {userData.role_id == 10 ? (
        <RegularUserView userData={userData} />
      ) : userData.role_id === 20 ? (
        <ManagerView />
      ) : (
        <AdminView />
      )}
    </>
  );
}
