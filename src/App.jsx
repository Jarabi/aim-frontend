import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import UserView from "./components/UserView";
import Footer from "./components/Footer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [requisitions, setRequisitions] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchResources("users");
      setUsers(usersFromServer);
    };

    const getRequisitions = async () => {
      const requisitions = await fetchResources("requisitions");
      setUsers(requisitions);
    };

    getUsers();
    getRequisitions();
  }, []);

  // Fetch resources
  const fetchResources = async (resource) => {
    const res = await fetch(`http://localhost:3000/${resource}`);
    const data = await res.json();

    return data;
  };

  const loginState = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <Header users={users} isLoggedIn={isLoggedIn} loginState={loginState} />
      <Routes>
        <Route
          path='/'
          element={
            <>
              {!isLoggedIn && (
                <LandingPage
                  users={users}
                  loginState={loginState}
                  setUserData={setUserData}
                />
              )}
              {isLoggedIn && userData.role_id === 10 && (
                <UserView userData={userData} requisitions={requisitions} />
              )}
            </>
          }
        />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
