import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import usersApi from "../api/users";

const RequisitionView = () => {
  const [user, setUser] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const {
    approvedAt,
    approvedBy,
    createdAt,
    fulfilledAt,
    fulfilledBy,
    justification,
    status,
    title,
  } = location.state;

  useEffect(() => {
    const user = usersApi.fetchLocalUser();
    setUser(user);
  }, []);

  return (
    <div className="container user-page">
      <h5 className="form-header text-center">View Requisition</h5>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">REQUESTER</th>
            <td>{`${user.firstName} ${user.lastName}`}</td>
          </tr>
          <tr>
            <th scope="row">DATE REQUESTED</th>
            <td>{createdAt}</td>
          </tr>
          <tr>
            <th scope="row">TITLE</th>
            <td>{title}</td>
          </tr>
          <tr>
            <th scope="row">JUSTIFICATION</th>
            <td>{justification}</td>
          </tr>
          <tr>
            <th scope="row">STATUS</th>
            <td>{status}</td>
          </tr>
          <tr>
            <th scope="row">APPROVER</th>
            <td>{approvedBy}</td>
          </tr>
          <tr>
            <th scope="row">DATE APPROVED</th>
            <td>{approvedAt}</td>
          </tr>
          <tr>
            <th scope="row">FULFILLED BY</th>
            <td>{fulfilledBy}</td>
          </tr>
          <tr>
            <th scope="row">DATE FULFILLED</th>
            <td>{fulfilledAt}</td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
};

export default RequisitionView;
