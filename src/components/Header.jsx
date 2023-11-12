import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import LogoutNav from "./LogoutNav";
import headerLogo from "../images/logo.png";

export default function Header({ userInfo }) {
  const location = useLocation();

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

        {location.pathname === "/" ? (
          <Nav />
        ) : location.pathname === "/login" ? (
          ""
        ) : (
          <LogoutNav userInfo={userInfo} />
        )}
      </div>
    </header>
  );
}
