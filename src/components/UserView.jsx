import { useState } from "react";
import Requisitions from "./Requisitions";
// import NewRequest from "../components/NewRequest";

const UserView = ({ userData, requisitions }) => {
  const [showNewRequest, setShowNewRequest] = useState(false);

  const toggleRequestModal = () => {
    setShowNewRequest(!showNewRequest);
  };

  return (
    <>
      <div className='container-fluid'>
        <div className='top-section d-flex justify-content-end mb-3'>
          <button
            className='btn btn-outline-primary'
            type='button'
            id='new-request'
            onClick={toggleRequestModal}
          >
            <i className='bi bi-plus-square-dotted'></i> New Requisition
          </button>
          <div className='search d-flex align-items-end ms-3'>
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
        {requisitions.length > 0 ? (
          <Requisitions userData={userData} requisitions={requisitions} />
        ) : (
          <div className='alert alert-info text-center' role='alert'>
            No Requisitions Yet.
          </div>
        )}
      </div>
      {showNewRequest && (
        <NewRequest toggleRequestModal={toggleRequestModal} user={user} />
      )}
    </>
  );
};

export default UserView;
