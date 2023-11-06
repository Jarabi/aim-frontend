import { useState } from "react";
import "../src/styles/App.css";
import "../src/styles/Popup.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Views from "./pages/Views";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const loginState = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <Navbar
        userData={userData}
        isLoggedIn={isLoggedIn}
        loginState={loginState}
      />
      {isLoggedIn ? (
        <Views userData={userData} />
      ) : (
        <LandingPage userInfo={setUserData} loginState={loginState} />
      )}
      <Footer />
    </>
  );
}

export default App;
