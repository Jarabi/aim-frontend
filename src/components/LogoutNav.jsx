import { Link, useNavigate } from "react-router-dom";
import authApi from "../api/auth";
import { FaUser } from "react-icons/fa";

const LogoutNav = ({ userInfo }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    authApi.logUserOut();
    navigate("/");
  };

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
                  <Link className='dropdown-item' to='#' state={userInfo}>
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link
                    className='btn dropdown-item'
                    href='#'
                    onClick={logoutHandler}
                  >
                    Logout
                  </Link>
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
