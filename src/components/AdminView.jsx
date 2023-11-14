import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requisitionsApi from "../api/requisitions";
import usersApi from "../api/users";
import LoadingTable from "./LoadingTable";

export default function AdminView() {
  //TODO: populate approved requisitions table using the below requisitions variable
  const [requisitions, setRequisitions] = useState([]);
  const [approvers, setApprovers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApprovedRequisitions = async () => {
      const response = await requisitionsApi.fetchAll();
      if (response.status === 200) {
        setRequisitions(
          response.data.filter((item) => item.status === "approved")
        );
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

    loadApprovedRequisitions();
    fetchApprovers();
  }, []);

  return (
    <div className='container'>
      <main className='mt-5 pt-3'>
        <div className='container-fluid'>
          <div className='top-bar d-flex justify-content-between'>
            <div className='fw-bold fs-3'>Dashboard</div>
            <div className='call-to-action'>
              <Link className='btn btn-light' to='/myRequisitions'>
                My Requisitions
              </Link>
              <Link className='btn btn-light ms-3' to='/newUser'>
                New User
              </Link>
              <Link className='btn btn-light ms-3' to='/newAsset'>
                New Asset
              </Link>
            </div>
          </div>
          <hr />
          <div className='row'>
            <div className='col-md-3 mb-3'>
              <div className='card text-bg-primary h-100'>
                <div className='card-header fw-bold'>USER REQUISITIONS</div>
                <div className='card-body'>
                  <h5 className='card-title'>Requisitions Approvals</h5>
                  <p className='card-text'>
                    View and manage user requisitions.
                  </p>
                  <Link to='/requisitions' className='btn btn-primary'>
                    Go to User Requisitions
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-md-3 mb-3'>
              <div className='card text-bg-warning h-100'>
                <div className='card-header fw-bold'>ASSETS</div>
                <div className='card-body'>
                  <h5 className='card-title'>Asset Issuance</h5>
                  <p className='card-text'>Manage and track assets.</p>
                  <Link to='/viewAssets' className='btn btn-warning'>
                    Go to Assets
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-3 mb-3'>
              <div className='card text-bg-info h-100'>
                <div className='card-header fw-bold'>USERS</div>
                <div className='card-body'>
                  <h5 className='card-title'>User Management</h5>
                  <p className='card-text'>View and manager user accounts.</p>
                  <Link to='/viewUsers' className='btn btn-info'>
                    Go to Users
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-3 mb-3'>
              <div className='card text-bg-danger h-100'>
                <div className='card-header fw-bold'>REPORTS</div>
                <div className='card-body'>
                  <h5 className='card-title'>Detailed Reports</h5>
                  <p className='card-text'>Generate and view reports</p>
                  <Link to='#' className='btn btn-danger'>
                    Go to Reports
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <h5 className='form-header text-center mt-4'>
            Approved Requisitions
          </h5>
          {loading ? (
            <LoadingTable />
          ) : requisitions.length > 0 ? (
            <table className='table'>
              <thead>
                <tr>
                  <th scope='row'>REQUESTER</th>
                  <th scope='row'>DATE REQUESTED</th>
                  <th scope='row'>TITLE</th>
                  <th scope='row'>JUSTIFICATION</th>
                  <th scope='row'>STATUS</th>
                  <th scope='row'>APPROVER</th>
                  <th scope='row'>DATE APPROVED</th>
                  <th scope='row'>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {requisitions.map((item) => {
                  const requester = `${item.user.firstName} ${item.user.lastName}`;
                  const approver = approvers.find(
                    (approver) => approver.id === item.approvedBy
                  );
                  return (
                    <tr key={item.id}>
                      <td>{requester}</td>
                      <td>{item.createdAt}</td>
                      <td>{item.title}</td>
                      <td>{item.justification}</td>
                      <td>{item.status}</td>
                      <td>
                        {approver &&
                          `${approver.firstName} ${approver.lastName}`}
                      </td>
                      <td>{item.approvedAt}</td>
                      <td>
                        <Link
                          type='button'
                          className='btn btn-outline-success btn-sm'
                          id='reviewRequisition'
                          to='/reviewRequisition'
                          state={item}
                        >
                          Review
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className='alert alert-info text-center' role='alert'>
              ALL CLEAR!
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
