import "../src/styles/App.css";
import "../src/styles/Popup.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(true);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <Navbar />
      <LandingPage toggleModal={toggleModal} />
      {showModal ? <Login toggleModal={toggleModal} /> : null}
    </div>
  );
}

export default App;
