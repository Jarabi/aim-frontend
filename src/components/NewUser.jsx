import { useState } from "react";
import usersApi from "../api/users";

export default function NewUser() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    roleId: "",
    departmentId: "",
    staffId: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await usersApi.createUser(formData);
    console.log(res);
  };

  return (
    <div className='container user-form'>
      <form className='rounded p-3' onSubmit={submitHandler}>
        <h5 className='form-header text-center'>New User</h5>
        <p className='fs-6'>Please provide user details</p>
        <hr className='my-3' />
        <div className='row'>
          <div className='mb-3 col-md-6'>
            <label htmlFor='firstName' className='form-label'>
              FIRST NAME
            </label>
            <input
              type='text'
              className='form-control'
              id='firstName'
              name='firstName'
              onChange={handleChange}
            />
            <div className='invalid-feedback'>Provide first name.</div>
          </div>

          <div className='mb-3 col-md-6'>
            <label htmlFor='lastName' className='form-label'>
              LAST NAME
            </label>
            <input
              type='text'
              className='form-control'
              id='lastName'
              name='lastName'
              onChange={handleChange}
            />
            <div className='invalid-feedback'>Provide last name.</div>
          </div>
        </div>
        <div className='row'>
          <div className='mb-3 col-md-6'>
            <label htmlFor='email' className='form-label'>
              EMAIL
            </label>
            <input
              type='text'
              className='form-control'
              id='email'
              name='email'
              onChange={handleChange}
            />
            <div className='invalid-feedback'>Provide email.</div>
          </div>

          <div className='mb-3 col-md-6'>
            <label htmlFor='staffId' className='form-label'>
              STAFF ID
            </label>
            <input
              type='text'
              className='form-control'
              id='staffId'
              name='staffId'
              onChange={handleChange}
            />
            <div className='invalid-feedback'>Enter staff ID.</div>
          </div>
        </div>
        <div className='row'>
          <div className='mb-3 col-md-6'>
            <label htmlFor='roleId' className='form-label'>
              ROLE
            </label>
            <select
              id='roleId'
              name='roleId'
              onChange={handleChange}
              className='form-select'
            >
              <option value=''>-- Select Role --</option>
            </select>
            <div className='invalid-feedback'>Select a department.</div>
          </div>

          <div className='mb-3 col-md-6'>
            <label htmlFor='departmentId' className='form-label'>
              DEPARTMENT
            </label>
            <select
              id='departmentId'
              name='departmentId'
              onChange={handleChange}
              className='form-select'
            >
              <option value=''>-- Select Department --</option>
            </select>
            <div className='invalid-feedback'>Please provide a title.</div>
          </div>
        </div>
        <hr className='my-3' />
        <div className='cta'>
          <button
            className='btn btn-secondary me-3'
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button className='btn btn-success' type='submit'>
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
}
