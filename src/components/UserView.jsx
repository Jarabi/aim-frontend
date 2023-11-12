import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import requisitionsApi from "../api/requisitions";
import Requisitions from "./Requisitions";
// import NewRequest from "../components/NewRequest";

const UserView = ({ userData }) => {
  const [showNewRequest, setShowNewRequest] = useState(false);
  const [requisitions, setRequisitions] = useState([]);

  useEffect(() => {
    const getRequisitions = async () => {
      const reqData = await fetchRequisitions();
      setRequisitions(reqData);
    };

    getRequisitions();
  }, []);

  const fetchRequisitions = async () => {
    const response = await requisitionsApi.fetchAll();

    return response;
  };

  return (
    <div className='container'>
      <div className='top-section d-flex justify-content-end mb-3'>
        <Link
          className='btn btn-outline-primary btn-sm'
          id='new-request'
          to='/newRequisition'
          state={userData}
        >
          New Requisition
        </Link>
        <div className='search d-flex align-items-end ms-3'>
          <div className='input-group input-group-sm search-box'>
            <input
              type='text'
              id='search'
              name='search'
              className='form-control search-requisition'
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
      <h5 className='requisitions-view text-center'>User Requisitions</h5>
      {requisitions.data && requisitions.data.length > 0 ? (
        <Requisitions userData={userData} requisitions={requisitions.data} />
      ) : (
        <div className='alert alert-info text-center' role='alert'>
          No Requisitions Yet.
        </div>
      )}
    </div>
  );
};

export default UserView;
