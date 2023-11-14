import { useState } from "react";
import { useNavigate } from "react-router-dom";
import assetsApi from "../api/assets";

export default function NewAsset() {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
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
    setSaving(true);
    const res = await assetsApi.createAsset(formData);

    if (res.status === 201) {
      setSaving(false);

      const setAlert = setInterval(() => {
        document
          .querySelector(".alert-info")
          .classList.remove("visually-hidden");

        clearInterval(setAlert);
        document.querySelector(".alert-info").classList.add("visually-hidden");
      }, 2000);
    }

    setFormData({
      serialNumber: "",
      name: "",
      description: "",
      condition: "",
    });
  };

  return (
    <>
      <div className='container user-form'>
        <form className='rounded p-2' onSubmit={submitHandler}>
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
                value={formData.serialNumber}
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
                value={formData.name}
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
                value={formData.condition}
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
                value={formData.description}
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
        className='container alert alert-dismissable alert-info text-center mt-3 visually-hidden'
        role='alert'
      >
        Record Saved
      </div>
    </>
  );
}
