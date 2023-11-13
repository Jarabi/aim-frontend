import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import requisitionsApi from "../api/requisitions";
import usersApi from "../api/users";

function NewRequisition() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    justification: "",
    userId: "",
  });

  // useEffect(() => {
  //   const { id } = usersApi.fetchLocalUser();
  //   setFormData({
  //     ...formData,
  //     userId: id,
  //   });
  // }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { id } = await usersApi.fetchLocalUser();

    setFormData({
      ...formData,
      userId: id,
    });

    const res = await requisitionsApi.createRequisition(formData);
    console.log(res);
  };

  return (
    <div className='container user-form'>
      <form className='border rounded p-3' onSubmit={submitHandler}>
        <h5 className='form-header text-center'>New Requisition</h5>
        <p className='fs-6'>Provide requsition details</p>
        <hr className='my-3' />
        <div className='mb-3'>
          <label htmlFor='req-title' className='form-label'>
            TITLE
          </label>
          <input
            type='text'
            className='form-control form-control-sm'
            id='title'
            name='title'
            onChange={handleChange}
          />
          <div className='invalid-feedback'>Please provide a title.</div>
        </div>

        <div className='mb-3'>
          <label htmlFor='justification' className='form-label'>
            JUSTIFICATION
          </label>
          <textarea
            className='form-control'
            id='justification'
            name='justification'
            rows='3'
            onChange={handleChange}
          ></textarea>
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

export default NewRequisition;
