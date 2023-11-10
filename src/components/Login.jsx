import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa6";
import headerLogo from "../images/logo.png";

const Login = ({ users, setUserData, loginState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const userData = users.find(
      (user) => user.email === emailInput.value.trim()
    );

    if (userData) {
      emailInput.parentElement.classList.remove("is-invalid");
      if (userData.password !== passwordInput.value) {
        passwordInput.parentElement.classList.add("is-invalid");
      } else {
        passwordInput.parentElement.classList.remove("is-invalid");
        loginState();
        setUserData({ ...userData });
      }
    } else {
      // Email does not exist
      emailInput.parentElement.classList.add("is-invalid");
    }
  };

  return (
    <div className='container'>
      <div className='login'>
        <div className='login-inner'>
          <div className='login-header d-flex align-items-center mb-1'>
            <img
              className='border rounded p-1'
              src={headerLogo}
              alt='Header Logo'
            />
            <h2>Login</h2>
          </div>
          <form className='border rounded p-3' onSubmit={handleLogin}>
            <div className='input-group has-validation mb-4'>
              <span className='input-group-text'>
                <FaUser />
              </span>
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
                <FaLock />
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
              <button className='btn btn-success' type='submit'>
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
