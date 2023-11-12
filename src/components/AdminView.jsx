import { Link } from "react-router-dom";
export default function AdminView({ userData }) {
  return (
    <div className='container'>
      <div
        className='offcanvas offcanvas-start show sidebar-nav bg-dark text-white'
        data-bs-scroll='true'
        data-bs-backdrop='false'
        tabIndex='-1'
        id='offcanvasScrolling'
        aria-labelledby='offcanvasScrollingLabel'
        style={{ width: "270px" }}
      >
        <div className='offcanvas-body p-0'>
          <nav className='navbar-dark mt-3'>
            <ul className='navbar-nav'>
              <li>
                <div className='nav-link px-3'>
                  <span className='me-2'>
                    <i className='bi bi-speedometer2'></i>
                  </span>
                  <span className='fs-6'>Dashboard</span>
                </div>
              </li>
              <li className='my-4'></li>
            </ul>
          </nav>
        </div>
      </div>
      <main className='mt-5 pt-3'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 fw-bold fs-3'>Dashboard</div>
            <div className='row'>
              <div className='col-md-3 mb-3'>
                <div className='card text-bg-primary h-100'>
                  <div className='card-header fw-bold'>USER REQUISITIONS</div>
                  <div className='card-body'>
                    <h5 className='card-title'>Requisitions Approvals</h5>
                    <p className='card-text'>
                      View and manage user requisitions.
                    </p>
                    <Link href='#' class='btn btn-primary'>
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
                    <Link href='#' class='btn btn-warning'>
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
                    <Link href='/viewUsers' class='btn btn-info'>
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
                    <Link href='#' class='btn btn-danger'>
                      Go to Reports
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <h5 className='user-form text-center mt-4'>Requisitions</h5>
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
                  <th scope='row'>FULFILLED BY</th>
                  <th scope='row'>DATE FULFILLED</th>
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
