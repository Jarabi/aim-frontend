import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import usersApi from "../api/users";
import LoadingTable from "./LoadingTable";

const RequisitionView = (props) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const data = location.state || {};

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await usersApi.fetchLocalUser();
      setUser(userInfo);
      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <div className='container user-page'>
      <h5 className='form-header text-center'>View Requisition</h5>
      {loading ? (
        <LoadingTable />
      ) : (
        <>
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
          {user.role.name === "admin" && (
            <>
              <hr className='my-3' />
              <div className='cta'>
                <button
                  className='btn btn-secondary me-3'
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default RequisitionView;
