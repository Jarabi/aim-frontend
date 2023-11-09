import { useState } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Login from "../components/Login";
import About from "../components/About";

export default function LandingPage({ users, loginState, setUserData }) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <div className='landing-page'>
        <Hero />
        <Features />
        <About />
      </div>
      {showModal && (
        <Login
          users={users}
          setUserData={setUserData}
          loginState={loginState}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
}
