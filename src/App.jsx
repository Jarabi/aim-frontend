import { useEffect, useState } from "react";
import "../src/styles/App.css";
import "../src/styles/Popup.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Views from "./pages/Views";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    };

    getUsers();
  }, []);

  // Fetch users
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();

    return data;
  };

  const loginState = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <Navbar users={users} isLoggedIn={isLoggedIn} loginState={loginState} />
      {isLoggedIn ? (
        <Views users={users} />
      ) : (
        <LandingPage users={users} loginState={loginState} />
      )}
      <Footer />
    </>
  );
}

export default App;
