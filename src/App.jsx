import "../src/styles/App.css";
import "../src/styles/Popup.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AdminView from "./pages/AdminView";
import ManagerView from "./pages/ManagerView";
import UserView from "./pages/UserView";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    username: "none",
    category: "none",
  });

  const loginState = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const heading =
    userData.category === "user"
      ? "My Requests"
      : userData.category === "manager"
      ? "User Requests"
      : userData.category === "admin"
      ? "Asset Requisitions"
      : "";

  return (
    <div>
      <Navbar heading={heading} user={userData.username} logout={loginState} />
      {isLoggedIn ? (
        userData.category === "user" ? (
          <UserView />
        ) : userData.category === "manager" ? (
          <ManagerView user={userData.username} />
        ) : (
          <AdminView user={userData.username} />
        )
      ) : (
        <LandingPage updateUserData={setUserData} loginState={loginState} />
      )}
    </div>
  );
}

export default App;
