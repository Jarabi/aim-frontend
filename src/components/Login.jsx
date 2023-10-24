import { useState } from "react";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toggleModal } = props;

  const database = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
  ];

  //   const errors = {
  //     INVALID_USER: "Invalid username",
  //     INVALID_PASSWORD: "Invalid password",
  //   };

  //   const renderErrorMessage = (name) => {
  //     name === errorMessages.name && (
  //       <div className='error'>{errorMessages.message}</div>
  //     );
  //   };

  const handleLogin = (e) => {
    e.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Retrieve user in database
    const userData = database.find(
      (user) => user.username === usernameInput.value.trim()
    );

    if (userData) {
      usernameInput.classList.remove("is-invalid");
      if (userData.password !== passwordInput.value) {
        passwordInput.classList.add("is-invalid");
      } else {
        passwordInput.classList.remove("is-invalid");
        setIsSubmitted(true);
        toggleModal();
      }
    } else {
      // User does not exist
      usernameInput.classList.add("is-invalid");
      //   setErrorMessages({
      //     name: "INVALID_USER",
      //     message: errors["INVALID_USER"],
      //   });
    }
  };

  return (
    <div className='popup'>
      <div className='popup-inner'>
        <div className='modal-header mb-4 border-bottom'>
          <h2>Login</h2>
          <button
            type='button'
            className='btn-close'
            onClick={toggleModal}
          ></button>
        </div>
        <form onSubmit={handleLogin}>
          <div className='input-group has-validation mb-4'>
            <span className='input-group-text' id='userIcon'>
              <i className='fa-regular fa-user' />
            </span>
            <input
              type='text'
              className='form-control'
              id='username'
              value={username}
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
            />
            <div id='usernameFeedback' className='invalid-feedback'>
              Invalid username.
            </div>
          </div>

          <div className='input-group has-validation mb-4'>
            <span className='input-group-text' id='userIcon'>
              <i className='fa-solid fa-key'></i>
            </span>
            <input
              type='password'
              className='form-control'
              id='password'
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <div id='passwordFeedback' className='invalid-feedback'>
              Invalid password.
            </div>
          </div>
          <div className='modal-footer'>
            <button className='btn btn-success btn-lg mx-4' type='submit'>
              Login
            </button>
            <button
              className='btn btn-secondary btn-lg'
              type='button'
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
