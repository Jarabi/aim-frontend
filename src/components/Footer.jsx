import footerLogo from "../images/logo_dark.png";

const Footer = () => {
  return (
    <footer className='container-fluid fixed-bottom d-flex flex-column justify-content-center align-items-center p-2'>
      <div className='logo-title d-flex align-items-center mb-2'>
        <img
          className='border border-secondary rounded p-1'
          src={footerLogo}
          alt='logo'
          style={{ width: "30px", height: "30px" }}
        />
        <h5 className='mb-0 ms-1'>inventorypro</h5>
      </div>
      <small style={{ color: "gray" }}>
        Copyright &copy; 2023 &middot; inventorypro
      </small>
    </footer>
  );
};

export default Footer;
