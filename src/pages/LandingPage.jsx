import { useState } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Login from "../components/Login";

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
