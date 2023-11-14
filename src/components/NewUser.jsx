import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usersApi from "../api/users";
import departmentsApi from "../api/departments";
import rolesApi from "../api/roles";

export default function NewUser() {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    roleId: "",
    departmentId: "",
    staffId: "",
  });

  const populateSelect = (dataArray, selecId) => {
    const select = document.getElementById(selecId);
    select.length = 1; // Clear the select for re-render

    dataArray.map((item) => {
      const option = document.createElement("option");
      const text = document.createTextNode(`${item.name.toUpperCase()}`);
      option.appendChild(text);
      option.setAttribute("value", `${item.id}`);
      select.appendChild(option);
    });
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      const departmentsList = await departmentsApi.fetchAll();
      populateSelect(departmentsList.data, "departmentId");
    };

    const fetchRoles = async () => {
      const rolesList = await rolesApi.fetchAll();
      populateSelect(rolesList.data, "roleId");
    };

    fetchDepartments();
    fetchRoles();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSaving(true);
    const res = await usersApi.createUser(formData);

    if (res.status === 201) {
      setSaving(false);
      document.querySelector(".alert-info").classList.remove("invisible");

      setInterval(() => {
        document.querySelector(".alert-info").classList.add("invisible");
      }, 2000);
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      roleId: "",
      departmentId: "",
      staffId: "",
    });
  };
  return (
    <>
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
                value={formData.firstName}
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
                value={formData.lastName}
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
                value={formData.email}
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
                value={formData.staffId}
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
                value={formData.roleId}
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
                value={formData.departmentId}
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
            <button className='btn btn-success' type='submit' disabled={saving}>
              {saving ? (
                <>
                  <span
                    className='spinner-border spinner-border-sm'
                    aria-hidden='true'
                  ></span>
                  <span role='status'>SAVING...</span>
                </>
              ) : (
                "SAVE"
              )}
            </button>
          </div>
        </form>
      </div>
      <div
        className='container alert alert-info text-center mt-3 invisible'
        role='alert'
      >
        Record Saved
      </div>
    </>
  );
}
