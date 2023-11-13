import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import usersApi from "../api/users";

const RequisitionView = (props) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};

  useEffect(() => {
    const user = usersApi.fetchLocalUser();
    setUser(user);
  }, []);

  console.log(location);

  return (
    <div className='container user-page'>
      <h5 className='form-header text-center'>View Requisition</h5>
      <table className='table'>
        <tbody>
          <tr>
            <th scope='row'>REQUESTER</th>
            <td>{`${user.firstName} ${user.lastName}`}</td>
          </tr>
          <tr>
            <th scope='row'>DATE REQUESTED</th>
            <td>{data.createdAt ?? "--"}</td>
          </tr>
          <tr>
            <th scope='row'>TITLE</th>
            <td>{data.title ?? "--"}</td>
          </tr>
          <tr>
            <th scope='row'>JUSTIFICATION</th>
            <td>{data.justification ?? "--"}</td>
          </tr>
          <tr>
            <th scope='row'>STATUS</th>
            <td>{data.status ?? "--"}</td>
          </tr>
          <tr>
            <th scope='row'>APPROVER</th>
            <td>{data.approvedBy ?? "Pending"}</td>
          </tr>
          <tr>
            <th scope='row'>DATE APPROVED</th>
            <td>{data.approvedAt ?? "--"}</td>
          </tr>
          <tr>
            <th scope='row'>FULFILLED BY</th>
            <td>{data.fulfilledBy ?? "--"}</td>
          </tr>
          <tr>
            <th scope='row'>DATE FULFILLED</th>
            <td>{data.fulfilledAt ?? "--"}</td>
          </tr>
        </tbody>
      </table>
      <button
        type='button'
        className='btn btn-secondary'
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
};

export default RequisitionView;
