const NewRequisition = () => {
  return (
    <div className='container user-page'>
      <form className='border rounded p-3'>
        <h5 className='requisitions-view text-center'>New Requisition</h5>

        <div className='col-md-6'>
          <label for='req-title' className='form-label'>
            Title
          </label>
          <input type='text' className='form-control' id='req-title' />
          <div className='invalid-feedback'>Please provide a title.</div>
        </div>

        <div class='col-md-6'>
          <label for='approver' class='form-label'>
            State
          </label>
          <select
            class='form-select'
            id='approver'
            aria-describedby='approver'
            required
          >
            <option selected disabled value=''>
              Choose...
            </option>
            <option>...</option>
          </select>
          <div id='validationServer04Feedback' class='invalid-feedback'>
            Please select a valid state.
          </div>
        </div>

        <div className='input-group has-validation mb-4'>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='email'
              value=''
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <label htmlFor='email'>Email address</label>
          </div>
          <div id='emailFeedback' className='invalid-feedback'>
            Invalid email.
          </div>
        </div>

        <div className='input-group has-validation mb-4'>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control form-control-sm'
              id='password'
              value=''
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor='password'>Password</label>
          </div>
          <div id='passwordFeedback' className='invalid-feedback'>
            Invalid password.
          </div>
        </div>
        <div className='modal-footer'>
          <button className='btn btn-success' type='submit'>
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

// "id": "1",
//       "title": "New laptop",
//       "justification": "Current laptop is worn out",
//       "status": "Approved",
//       "approvedAt": "2023-11-08T07:33:00.000Z",
//       "createdAt": "2023-11-08T07:29:44.000Z",
//       "fulfilledAt": "2023-11-08T07:39:43.000Z",
//       "approvedBy": "John Mwangi",
//       "fulfilledBy": "7859b91a-2c73-49a9-8b5e-162e6d378347",
//       "userId": "1"

export default NewRequisition;
