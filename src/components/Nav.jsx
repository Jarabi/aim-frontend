const Nav = () => {
  return (
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
            <li className='nav-item'>
              <a className='nav-link' href='/login'>
                <strong>Login</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
