import React from "react";

export default function Navbar(props) {
  const { heading, user, logout } = props;
  return (
    <div className='navbar py-3 mb-3'>
      <nav className='container'>
        <h2 className='border border-black p-1'>Company Logo</h2>
        <h2>{heading}</h2>
        <div className='userAction d-flex justify-content-around'>
          <div className='userIdentity d-flex flex-column align-items-center'>
            <i className='bi bi-person-circle h4'></i>
            <small>{user}</small>
          </div>
          <div className='logout d-flex align-items-center justify-center'>
            <button
              type='button'
              onClick={logout}
              className='btn btn-outline-danger'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              data-bs-title='Logout'
            >
              <i className='fa-solid fa-right-from-bracket'></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
