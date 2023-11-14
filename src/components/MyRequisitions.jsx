import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersApi from "../api/users";
import LoadingTable from "./LoadingTable";

function MyRequisitions() {
  const navigate = useNavigate();
  const [requisitions, setRequisitions] = useState([]);
  const [approvers, setApprovers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadUserRequisitions = async () => {
      setLoading(true);
      const user = usersApi.fetchLocalUser();
      const response = await usersApi.fetchOneById(user.id);

      if (response.status === 200) {
        setRequisitions(response.data.requisitions);
        setLoading(false);
      } else {
        setRequisitions(user.requisitions);
        setLoading(false);
      }
    };

    const fetchApprovers = async () => {
      const response = await usersApi.fetchAll();
      if (response.status === 200) {
        setApprovers(
          response.data.filter(
            (user) =>
              user.role.name === "admin" || user.role.name === "approver"
          )
        );
      }
    };

    loadUserRequisitions();
    fetchApprovers();
  }, []);
  console.log(requisitions);

  return (
    <div className="container user-page">
      <div className="top-section d-flex justify-content-end mb-3">
        <Link
          className="btn btn-outline-primary btn-sm"
          to="/newRequisition"
          // state={userData}
        >
          New Requisition
        </Link>
        {/* <div className="search d-flex align-items-end ms-3">
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
        </div> */}
      </div>
      <h5 className="form-header text-center">My Requisitions</h5>

      {loading ? (
        <LoadingTable />
      ) : requisitions.length > 0 ? (
        <table className="table table-sm table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">TITLE</th>
              <th scope="col">JUSTIFICATION</th>
              <th scope="col">DATE CREATED</th>
              <th scope="col">STATUS</th>
              <th scope="col">APPROVER</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {requisitions.map((requisition) => {
              const approver = approvers.find(
                (user) => user.id === requisition.approvedBy
              );
              return (
                <tr key={requisition.id}>
                  <td>{requisition.title}</td>
                  <td>{requisition.justification}</td>
                  <td>{requisition.createdAt}</td>
                  <td>{requisition.status}</td>
                  {loading ? (
                    <td>Loading...</td>
                  ) : (
                    <td>
                      {approver && `${approver.firstName} ${approver.lastName}`}
                    </td>
                  )}
                  <td>
                    <Link
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                      id="requisitionView"
                      to="/requisitionView"
                      state={requisition}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-info text-center" role="alert">
          No Requisitions Yet.
        </div>
      )}
      <hr className="my-3" />
      <div className="cta">
        <button className="btn btn-secondary me-3" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
}

export default MyRequisitions;
