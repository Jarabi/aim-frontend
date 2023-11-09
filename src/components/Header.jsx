import headerLogo from "../images/logo.png";

export default function Header({ userData, isLoggedIn, loginState }) {
  window.onscroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.querySelector("header").style.padding = "0.25rem";
    } else {
      document.querySelector("header").style.padding = "0.5rem";
    }
  };

  return (
    <header>
      <div className='container'>
        <div className='header-logo d-flex flex-row align-items-center'>
          <img src={headerLogo} alt='Header Logo' />
          <h2 className='ms-2'>inventorypro</h2>
        </div>

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
