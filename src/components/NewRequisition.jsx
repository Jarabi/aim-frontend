import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import requisitionsApi from "../api/requisitions";

const NewRequisition = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state;
  const userId = userData.res.data.id;

  const [title, setTitle] = useState("");
  const [justification, setJustification] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    // const res = await requisitionsApi.createRequisition()
  };

  return (
    <div className='container user-page'>
      <form className='border rounded p-3' onSubmit={submitHandler}>
        <h5 className='form-header text-center'>New Requisition</h5>

        <div className='mb-3'>
          <label htmlFor='req-title' className='form-label'>
            Title
          </label>
          <input
            type='text'
            className='form-control form-control-sm'
            id='title'
            name='title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div className='invalid-feedback'>Please provide a title.</div>
        </div>

        <div className='mb-3'>
          <label htmlFor='justification' className='form-label'>
            Provide Justification for Requisition
          </label>
          <textarea
            className='form-control'
            id='justification'
            rows='3'
            value={justification}
            onChange={(e) => {
              setJustification(e.target.value);
            }}
          ></textarea>
        </div>
        <button className='btn btn-secondary me-3' onClick={() => navigate(-1)}>
          Cancel
        </button>
        <button className='btn btn-success' type='submit'>
          SAVE
        </button>
      </form>
    </div>
  );
};

export default NewRequisition;
