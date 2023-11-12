import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AUTH_TOKEN } from "./api/constants";
import "../src/styles/App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import Footer from "./components/Footer";
import RequisitionView from "./components/RequisitionView";
import NewRequisition from "./components/NewRequisition";
import ViewUser from "./components/ViewUser";
import ViewUsers from "./components/ViewUsers";
import NewUser from "./components/NewUser";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const checkLoggedInStatus = async () => {
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

  return (
    <>
      <Header userInfo={userInfo} />
      <Routes>
        <Route path='/' element={<>{!isLoggedIn && <LandingPage />}</>} />
        <Route path='/login' element={<Login setUserInfo={setUserInfo} />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/requisitionView' element={<RequisitionView />} />
        <Route path='/newRequisition' element={<NewRequisition />} />
        <Route path='/viewUsers' element={<ViewUsers />} />
        <Route path='/viewUser' element={<ViewUser />} />
        <Route path='/newUser' element={<NewUser />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
