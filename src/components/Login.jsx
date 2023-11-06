import { useState } from "react";
// import users from "./data/users.json";

export default function Login({ userInfo, loginState, toggleModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Retrieve user in database
    const userData = users.find(
      (user) => user.email === emailInput.value.trim()
    );

    if (userData) {
      emailInput.parentElement.classList.remove("is-invalid");
      if (userData.password !== passwordInput.value) {
        passwordInput.parentElement.classList.add("is-invalid");
      } else {
        passwordInput.parentElement.classList.remove("is-invalid");
        toggleModal();
        loginState();
        userInfo({ ...userData });
      }
    } else {
      // Email does not exist
      emailInput.parentElement.classList.add("is-invalid");
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
            <span className='input-group-text'>@</span>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='email'
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <label htmlFor='email'>Email address</label>
            </div>
            <div id='emailFeedback' className='invalid-feedback'>
              Invalid email.
            </div>
          </div>

          <div className='input-group has-validation mb-4'>
            <span className='input-group-text' id='userIcon'>
              <i className='fa-solid fa-key'></i>
            </span>
            <div className='form-floating'>
              <input
                type='password'
                className='form-control form-control-sm'
                id='password'
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor='password'>Password</label>
            </div>
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
