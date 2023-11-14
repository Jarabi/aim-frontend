import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requisitionsApi from "../api/requisitions";
import usersApi from "../api/users";
import LoadingTable from "./LoadingTable";

function ManagerView() {
  const [requisitions, setRequisitions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApprovedRequisitions = async () => {
      const response = await requisitionsApi.fetchAll();
      if (response.status === 200) {
        setRequisitions(
          response.data.filter((item) => item.status === "created")
        );
        setLoading(false);
      }
    };
    loadApprovedRequisitions();
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
              <Link className='btn btn-light ms-3' to='/newRequisition'>
                New Requisition
              </Link>
            </div>
          </div>
          <hr />

          <h5 className='form-header text-center mt-4'>Pending Requisitions</h5>
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
                  <th scope='row'>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {requisitions.map((item) => {
                  const requester = `${item.user.firstName} ${item.user.lastName}`;
                  return (
                    <tr key={item.id}>
                      <td>{requester}</td>
                      <td>{item.createdAt}</td>
                      <td>{item.title}</td>
                      <td>{item.justification}</td>
                      <td>{item.status === "created" && "Pending approval"}</td>
                      <td>
                        <Link
                          type='button'
                          className='btn btn-outline-success btn-sm'
                          id='approveRequisition'
                          to='/approveRequisition'
                          state={item}
                        >
                          Approve
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className='alert alert-info text-center' role='alert'>
              No Pending Requisitions.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default ManagerView;
