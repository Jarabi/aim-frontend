import { Link } from "react-router-dom";
import footerLogo from "../images/logo_dark.png";

const Footer = () => {
  return (
    <footer className='container-fluid d-flex justify-content-center align-items-center p-4'>
      <p className='mb-0'>Copyright &copy; 2023</p>
      &nbsp; &middot; &nbsp;
      <Link to='/about'>Learn more</Link>
    </footer>
  );
};

export default Footer;
