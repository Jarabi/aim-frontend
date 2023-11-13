import { Link } from "react-router-dom";
import Nav from "./Nav";
import LogoutNav from "./LogoutNav";
import headerLogo from "../images/logo.png";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
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

  const { isLoggedIn } = useAuth();
  return (
    <header className="d-flex">
      <div className="container d-flex justify-content-between">
        {/* <Link
          className='navbarToggler d-flex align-items-center me-2'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasScrolling'
          aria-controls='offcanvasScrolling'
          style={{ color: "#2f2d2e" }}
        >
          <i
            className='bi bi-list'
            style={{
              width: "25px",
              height: "25px",
              border: "1px solid grey",
              borderRadius: "5px",
            }}
          ></i>
        </Link> */}
        <div className="header-logo d-flex me-auto">
          <Link
            className="d-flex flex-row align-items-center"
            to="/"
            style={{ color: "#2f2d2e", textDecoration: "none" }}
          >
            <img
              className="header-img border rounded p-1"
              src={headerLogo}
              alt="Header Logo"
              style={{ width: "57px" }}
            />
            <h2 className="header-title mb-0 ps-1">inventorypro</h2>
          </Link>
        </div>

        {isLoggedIn() ? <LogoutNav /> : <Nav />}
      </div>
    </header>
  );
}
