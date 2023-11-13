import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import requisitionsApi from '../api/requisitions';


export default function AdminView () {
  //TODO: populate approved requisitions table using the below requisitions variable
  const [ requisitions, setRequisitions ] = useState( [] );
  
  useEffect( () => {
    const loadApprovedRequisitions = async () => {
      const response = await requisitionsApi.fetchAll();
      if ( response.status === 200 ) {
        setRequisitions( response.data.filter( ( item => item.status === 'approved' ) ) );
      }
    }
    loadApprovedRequisitions()
  }, [])
  return (
    <div className="container">
      <main className="mt-5 pt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 fw-bold fs-3">Dashboard</div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <div className="card text-bg-primary h-100">
                  <div className="card-header fw-bold">USER REQUISITIONS</div>
                  <div className="card-body">
                    <h5 className="card-title">Requisitions Approvals</h5>
                    <p className="card-text">
                      View and manage user requisitions.
                    </p>
                    <Link to="/requisitions" class="btn btn-primary">
                      Go to User Requisitions
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <div className="card text-bg-warning h-100">
                  <div className="card-header fw-bold">ASSETS</div>
                  <div className="card-body">
                    <h5 className="card-title">Asset Issuance</h5>
                    <p className="card-text">Manage and track assets.</p>
                    <Link to="/viewAssets" class="btn btn-warning">
                      Go to Assets
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card text-bg-info h-100">
                  <div className="card-header fw-bold">USERS</div>
                  <div className="card-body">
                    <h5 className="card-title">User Management</h5>
                    <p className="card-text">View and manager user accounts.</p>
                    <Link to="/viewUsers" class="btn btn-info">
                      Go to Users
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card text-bg-danger h-100">
                  <div className="card-header fw-bold">REPORTS</div>
                  <div className="card-body">
                    <h5 className="card-title">Detailed Reports</h5>
                    <p className="card-text">Generate and view reports</p>
                    <Link to="#" class="btn btn-danger">
                      Go to Reports
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <h5 className="user-form text-center mt-4">Requisitions</h5>
            <table className="table">
              <thead>
                <tr>
                  <th scope="row">REQUESTER</th>
                  <th scope="row">DATE REQUESTED</th>
                  <th scope="row">TITLE</th>
                  <th scope="row">JUSTIFICATION</th>
                  <th scope="row">STATUS</th>
                  <th scope="row">APPROVER</th>
                  <th scope="row">DATE APPROVED</th>
                  <th scope="row">FULFILLED BY</th>
                  <th scope="row">DATE FULFILLED</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Last</td>
                  <td>25.07.22</td>
                  <td>Requisition Title</td>
                  <td>Justification</td>
                  <td>Status</td>
                  <td>Approver</td>
                  <td>Date Approved</td>
                  <td>Fulfilled By</td>
                  <td>Date Fulfilled</td>
                </tr>
                <tr>
                  <td>First Last</td>
                  <td>25.07.22</td>
                  <td>Requisition Title</td>
                  <td>Justification</td>
                  <td>Status</td>
                  <td>Approver</td>
                  <td>Date Approved</td>
                  <td>Fulfilled By</td>
                  <td>Date Fulfilled</td>
                </tr>
                <tr>
                  <td>First Last</td>
                  <td>25.07.22</td>
                  <td>Requisition Title</td>
                  <td>Justification</td>
                  <td>Status</td>
                  <td>Approver</td>
                  <td>Date Approved</td>
                  <td>Fulfilled By</td>
                  <td>Date Fulfilled</td>
                </tr>
                <tr>
                  <td>First Last</td>
                  <td>25.07.22</td>
                  <td>Requisition Title</td>
                  <td>Justification</td>
                  <td>Status</td>
                  <td>Approver</td>
                  <td>Date Approved</td>
                  <td>Fulfilled By</td>
                  <td>Date Fulfilled</td>
                </tr>
                <tr>
                  <td>First Last</td>
                  <td>25.07.22</td>
                  <td>Requisition Title</td>
                  <td>Justification</td>
                  <td>Status</td>
                  <td>Approver</td>
                  <td>Date Approved</td>
                  <td>Fulfilled By</td>
                  <td>Date Fulfilled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
