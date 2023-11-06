import { useState } from "react";
// import requests from "./data/requests.json";
// import NewRequest from "../components/NewRequest";

function ReqularUserView({ userData }) {
  const [showNewRequest, setShowNewRequest] = useState(false);

  // <table className='table table-hover fs-6'>
  //   <thead>
  //     <tr>
  //       <th scope='col'>REQUEST</th>
  //       <th scope='col'>JUSTIFICATION</th>
  //       <th scope='col'>CREATED</th>
  //       <th scope='col'>STATUS</th>
  //       <th scope='col'>APPROVER</th>
  //       <th scope='col'>ACTION</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     <tr>
  //       <td scope='row'>New laptop</td>
  //       <td>Replacement for faulty laptop</td>
  //       <td>25-Aug-2023</td>
  //       <td>Approved</td>
  //       <td>John Mwangi</td>
  //       <td>
  //         <a href='#'>View</a>
  //       </td>
  //     </tr>
  //   </tbody>
  // </table>

  const toggleRequestModal = () => {
    setShowNewRequest(!showNewRequest);
  };

  return (
    <>
      <div className='container'>
        <div className='top-section d-flex justify-content-between mb-3'>
          <button
            className='btn btn-outline-primary'
            type='button'
            id='new-request'
            onClick={toggleRequestModal}
          >
            <i className='bi bi-plus-square-dotted'></i> New Request
          </button>
          <div className='search d-flex align-items-end'>
            <div className='input-group search-box'>
              <input
                type='text'
                className='form-control'
                placeholder='Search'
                aria-label='search'
                aria-describedby='search'
              />
              <button
                className='btn btn-outline-secondary'
                type='button'
                id='search'
              >
                <i className='bi bi-search'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='details-view'>
          {/* {requests.length === 0 && (
            <h4 className='text-center pt-5'>You have no requests yet.</h4>
          )} */}
          <table className='table table-hover fs-6'>
            <thead>
              <tr>
                <th scope='col'>REQUEST</th>
                <th scope='col'>JUSTIFICATION</th>
                <th scope='col'>CREATED</th>
                <th scope='col'>STATUS</th>
                <th scope='col'>APPROVER</th>
                <th scope='col'>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Approved</td>
                <td>John Mwangi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Approved</td>
                <td>Irene Liyosi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Approved</td>
                <td>John Mwangi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Approved</td>
                <td>John Mwangi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Approved</td>
                <td>Irene Liyosi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Approved</td>
                <td>Irene Liyosi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Approved</td>
                <td>John Mwangi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Pending Approval</td>
                <td>-</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Pending Approval</td>
                <td>-</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Pending Approval</td>
                <td>-</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Pending Approval</td>
                <td>-</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Declined</td>
                <td>Irene Liyosi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Declined</td>
                <td>Irene Liyosi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Declined</td>
                <td>John Mwangi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Declined</td>
                <td>John Mwangi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Approved</td>
                <td>Irene Liyosi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Approved</td>
                <td>John Mwangi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Approved</td>
                <td>John Mwangi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Approved</td>
                <td>John Mwangi</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {showNewRequest && (
        <NewRequest toggleRequestModal={toggleRequestModal} user={user} />
      )}
    </>
  );
}

export default ReqularUserView;
