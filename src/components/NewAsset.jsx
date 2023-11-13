import { useState } from "react";
import assetsApi from "../api/assets";

export default function NewAsset() {
  const [formData, setFormData] = useState({
    serialNumber: "",
    name: "",
    description: "",
    condition: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await assetsApi.createAsset(formData);
    console.log(res);
    setFormData({
      ...formData,
      serialNumber: "",
      name: "",
      description: "",
      condition: "",
    });
  };

  return (
    <div className='container user-form'>
      <form className='rounded p-3' onSubmit={submitHandler}>
        <h5 className='form-header text-center'>New Asset</h5>
        <p className='fs-6'>Please provide asset details</p>
        <hr className='my-3' />
        <div className='row'>
          <div className='mb-3 col-md-4'>
            <label htmlFor='serialNumber' className='form-label'>
              SERIAL NUMBER
            </label>
            <input
              type='text'
              className='form-control'
              id='serialNumber'
              name='serialNumber'
              onChange={handleChange}
            />
            <div className='invalid-feedback'>Provide serial number.</div>
          </div>
          <div className='mb-3 col-md-4'>
            <label htmlFor='name' className='form-label'>
              NAME
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              onChange={handleChange}
            />
            <div className='invalid-feedback'>Provide asset name.</div>
          </div>

          <div className='mb-3 col-md-4'>
            <label htmlFor='condition' className='form-label'>
              CONDITION
            </label>
            <input
              type='text'
              className='form-control'
              id='condition'
              name='condition'
              onChange={handleChange}
            />
            <div className='invalid-feedback'>Enter condition.</div>
          </div>
        </div>
        <div className='row'>
          <div className='mb-3 col-md-12'>
            <label htmlFor='description' className='form-label'>
              DESCRIPTION
            </label>
            <textarea
              className='form-control'
              id='description'
              name='description'
              onChange={handleChange}
              rows='3'
            ></textarea>
            <div className='invalid-feedback'>Provide description.</div>
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
