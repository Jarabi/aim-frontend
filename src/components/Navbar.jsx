import React from "react";

export default function Navbar(props) {
  return (
    <div className='navbar border border-bottom-1 border-dark-subtle py-4 mb-4'>
      <nav className='container'>
        <h2 className='border border-black p-1'>Company Logo</h2>
        <h2>{props.heading}</h2>
        <div className='search'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search'
              aria-label="Recipient's username"
              aria-describedby='search'
            />
            <button
              className='btn btn-outline-secondary'
              type='button'
              id='search'
            >
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
