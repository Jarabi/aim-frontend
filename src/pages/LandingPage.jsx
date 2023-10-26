import { useState } from "react";
import Login from "../components/Login";

export default function LandingPage(props) {
  const [showModal, setShowModal] = useState(false);
  const { updateUserData, loginState } = props;

  function toggleModal() {
    setShowModal(!showModal);
  }
  return (
    <>
      <div className='container'>
        <div className='landing border border-black'>
          <h1>ASSET INVENTORY MANAGEMENT</h1>
          <h4>Manage your asset inventory in one place.</h4>
          <button className='btn btn-success btn-lg mt-4' onClick={toggleModal}>
            LOG IN
          </button>
        </div>
      </div>
      {showModal ? (
        <Login
          updateUserData={updateUserData}
          loginState={loginState}
          toggleModal={toggleModal}
        />
      ) : null}
    </>
  );
}
