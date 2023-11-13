import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import usersApi from "../api/users";
import MyRequisitions from './MyRequisitions';

const UserView = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = usersApi.fetchLocalUser();
      setUserData(user);
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="container">
      <div className="top-section d-flex justify-content-end mb-3">
        <Link
          className="btn btn-outline-primary btn-sm"
          id="new-request"
          to="/newRequisition"
          state={userData}
        >
          New Requisition
        </Link>
        <div className="search d-flex align-items-end ms-3">
          <div className="input-group input-group-sm search-box">
            <input
              type="text"
              id="search"
              name="search"
              className="form-control search-requisition"
              placeholder="Search"
              aria-label="search"
              aria-describedby="search"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="search"
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
      <h5 className="form-header text-center">User Requisitions</h5>
        <MyRequisitions />
    </div>
  );
};

export default UserView;
