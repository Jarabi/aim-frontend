import { useState } from "react";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let { updateUserData, loginState, toggleModal } = props;

  const database = [
    { username: "user1", password: "pass1", category: "user" },
    { username: "user2", password: "pass2", category: "manager" },
    { username: "user3", password: "pass3", category: "admin" },
  ];

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
        toggleModal();
        loginState();
        updateUserData({
          username: userData.username,
          category: userData.category,
        });
      }
    } else {
      // User does not exist
      usernameInput.classList.add("is-invalid");
    }
  };

  return (
    <div className='popup'>
      <div className='popup-inner'>
        <div className='modal-header mb-4 border-bottom'>
          <h3>Login</h3>
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
              className='form-control form-control-sm'
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
              className='form-control form-control-sm'
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
            <button className='btn btn-success mx-4' type='submit'>
              LOGIN
            </button>
            <button
              className='btn btn-secondary'
              type='button'
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
