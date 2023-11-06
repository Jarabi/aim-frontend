import { useState } from "react";

export default function NewRequest(props) {
  let { toggleRequestModal, user } = props;

  const managerList = [
    { value: "", text: "--SELECT MANAGER--" },
    { value: "John Mwangi", text: "John Mwangi" },
    { value: "Michael Musundi", text: "Michael Musundi" },
    { value: "Irene Mumbua", text: "Irene Mumbua" },
  ];

  const [requestTitle, setRequestTitle] = useState("");
  const [requestApprover, setRequestApprover] = useState(managerList[0].value);

  const handleRequestSubmit = (e) => {
    e.preventDefault();

    const requestTitleInput = document.getElementById("requestTitle");
    const requestApproverInput = document.getElementById("requestApprover");

    if (userData) {
      usernameInput.classList.remove("is-invalid");
      if (userData.password !== passwordInput.value) {
        passwordInput.classList.add("is-invalid");
      } else {
        passwordInput.classList.remove("is-invalid");
        toggleModal();
        loginState();
        updateUserData({
          username: userData.username,
          category: userData.category,
        });
      }
    } else {
      // User does not exist
      usernameInput.classList.add("is-invalid");
    }
  };

  return (
    <div className='popup'>
      <div className='popup-inner'>
        <div className='modal-header mb-4 border-bottom'>
          <h3>New Request</h3>
          <button
            type='button'
            className='btn-close'
            onClick={toggleRequestModal}
          ></button>
        </div>
        <form onSubmit={handleRequestSubmit}>
          <div className='form-floating mb-4'>
            <input
              type='text'
              className='form-control'
              id='requestTitle'
              value={requestTitle}
              placeholder='Request Title'
              onChange={(e) => setRequestTitle(e.target.value)}
              autoFocus
            />
            <label htmlFor='requestTitle'>Request Title</label>
            <div id='requestTitleFeedback' className='invalid-feedback'>
              Enter request title.
            </div>
          </div>

          <div className='form-floating mb-4'>
            <select
              className='form-select'
              id='requestApprover'
              value={requestApprover}
              onChange={(e) => setRequestApprover(e.target.value)}
            >
              {managerList.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            <div id='requestApproverFeedback' className='invalid-feedback'>
              Select approver.
            </div>
          </div>
          <div className='form-floating mb-4'>
            <textarea
              className='form-control'
              placeholder='Justification'
              id='justification'
              style={{ height: "100px" }}
            />
            <label htmlFor='justification'>Justification</label>
            <div id='justificationFeedback' className='invalid-feedback'>
              Provide justification.
            </div>
          </div>
          <div className='modal-footer'>
            <button className='btn btn-success mx-4' type='submit'>
              SEND REQUEST
            </button>
            <button
              className='btn btn-secondary'
              type='button'
              onClick={toggleRequestModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
