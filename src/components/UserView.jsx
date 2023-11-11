import { Link } from "react-router-dom";
import Requisitions from "./Requisitions";
// import NewRequest from "../components/NewRequest";

const UserView = () => {
  const requisitions = [];
  return (
    <div className="container user-page">
      <div className="top-section d-flex justify-content-end mb-3">
        <Link
          className="btn btn-outline-primary"
          type="button"
          id="new-request"
          to="/new-requisition"
        >
          <i className="bi bi-plus-square-dotted"></i> New Requisition
        </Link>
        <div className="search d-flex align-items-end ms-3">
          <div className="input-group search-box">
            <input
              type="text"
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
      <h5 className="requisitions-view text-center">User Requisitions</h5>
      {requisitions.length > 0 ? (
        <Requisitions requisitions={requisitions} />
      ) : (
        <div className="alert alert-info text-center" role="alert">
          No Requisitions Yet.
        </div>
      )}
    </div>
  );
};

export default UserView;
