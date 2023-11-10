import { Link } from "react-router-dom";
import headerLogo from "../images/logo.png";

export default function Header({ userData, isLoggedIn, loginState }) {
  window.onscroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.querySelector("header").style.height = "55px";
      document.querySelector("header").style.fontSize = "0.9rem";
      document.querySelector(".header-title").style.fontSize = "1.5rem";
      document.querySelector(".header-img").style.width = "35px";
    } else {
      document.querySelector("header").style.height = "70px";
      document.querySelector("header").style.fontSize = "1rem";
      document.querySelector(".header-title").style.fontSize = "2rem";
      document.querySelector(".header-img").style.width = "57px";
    }
  };

  return (
    <header className='d-flex'>
      <div className='container d-flex justify-content-between'>
        <div className='header-logo d-flex'>
          <Link
            className='d-flex flex-row align-items-center'
            to='/'
            style={{ color: "#2f2d2e", textDecoration: "none" }}
          >
            <img
              className='header-img border rounded p-1'
              src={headerLogo}
              alt='Header Logo'
              style={{ width: "57px" }}
            />
            <h2 className='header-title mb-0 ps-1'>inventorypro</h2>
          </Link>
        </div>

        <nav className='navbar navbar-expand-lg bg-body-light'>
          <div className='container-fluid'>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul
                className='navbar-nav'
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <li className='nav-item'>
                  <a className='nav-link' href='/#hero'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#features'>
                    Features
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#about'>
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* {isLoggedIn && (
          <>
            <h2>
              {userData.role_id === 10
                ? "My Requests"
                : userData.role_id === 20
                ? "User Requests"
                : "Asset Management"}
            </h2>
            <div className='userAction d-flex justify-content-around'>
              <div className='userIdentity d-flex align-items-center px-1'>
                <span
                  className={`badge text-bg-${
                    userData.role_id === 10
                      ? "primary"
                      : userData.role_id === 20
                      ? "success"
                      : "warning"
                  } py-2`}
                >
                  {userData.email}
                </span>
              </div>
              <div className='logout d-flex align-items-center justify-center'>
                <button
                  type='button'
                  onClick={loginState}
                  className='btn btn-outline-danger btn-sm'
                >
                  <i className='fa-solid fa-right-from-bracket'></i>
                </button>
              </div>
            </div>
          </>
        )} */}
      </div>
    </header>
  );
}
