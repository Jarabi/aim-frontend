import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import UserView from "./components/UserView";
import Footer from "./components/Footer";
import RequisitionView from "./components/RequisitionView";
import { AUTH_TOKEN } from "./api/constants";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [requisitions, setRequisitions] = useState([]);
  const [userData, setUserData] = useState([]);

  const checkLoggedInStatus = async () => {
    const token = await localStorage.getItem(AUTH_TOKEN);
    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };
  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<>{!isLoggedIn && <LandingPage />}</>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user"
          element={<UserView userData={userData} requisitions={requisitions} />}
        />
        <Route path="/requisitionView" element={<RequisitionView />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
