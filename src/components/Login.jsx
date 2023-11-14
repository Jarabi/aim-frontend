import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa6";
import headerLogo from "../images/logo.png";
import authApi from "../api/auth";
import { useNavigate } from "react-router-dom";
import { CURRENT_USER } from "../api/constants";

export default function Login({ checkLoggedInStatus }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCredentials((credentials) => ({ ...credentials, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await authApi.loginUser(credentials);

    if (response.status === 201) {
      localStorage.setItem(CURRENT_USER, JSON.stringify(response.data));
      checkLoggedInStatus();
      setLoading(false);
      navigate("/dashboard");
    }
  };

  return (
    <div className="container">
      <div className="login">
        <div className="login-inner">
          <div className="login-header d-flex align-items-center mb-1">
            <img
              className="border rounded p-1"
              src={headerLogo}
              alt="Header Logo"
            />
            <h2>Login</h2>
          </div>
          <form className="border rounded p-3" onSubmit={submitHandler}>
            <div className="input-group has-validation mb-4">
              <span className="input-group-text">
                <FaUser />
              </span>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={changeHandler}
                  autoFocus
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div id="emailFeedback" className="invalid-feedback">
                Invalid email.
              </div>
            </div>

            <div className="input-group has-validation mb-4">
              <span className="input-group-text" id="userIcon">
                <FaLock />
              </span>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={changeHandler}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div id="passwordFeedback" className="invalid-feedback">
                Invalid password.
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-success mr-2 " type="submit">
                {loading && (
                  <span
                    className="spinner-border spinner-border-sm d-inline-block mx-2"
                    aria-hidden="true"
                    role="status"
                  ></span>
                )}
                {loading && <span>Logging in ...</span>}
                {!loading && <span>LOGIN</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
