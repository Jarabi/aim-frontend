import { useNavigate } from "react-router-dom";
import authApi from "../api/auth";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { CURRENT_USER } from "../api/constants";

const LogoutNav = ({checkLoggedInStatus}) => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const logoutHandler = () => {
    authApi.logUserOut();
    checkLoggedInStatus();
    navigate("/login");
  };

  useEffect(() => {
    const user = localStorage.getItem(CURRENT_USER);
    setUserInfo(JSON.parse(user));
  }, []);

  return (
    <nav className='navbar navbar-expand-lg bg-body-light'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <span className='badge text-bg-primary'>{userInfo.email}</span>

                <FaUser className='ms-3' />
              </a>
              <ul className='dropdown-menu dropdown-menu-end'>
                <li>
                  <div className='btn dropdown-item' onClick={logoutHandler}>
                    Logout
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LogoutNav;
