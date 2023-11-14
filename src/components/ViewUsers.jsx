import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersApi from "../api/users";
import LoadingTable from "./LoadingTable";

export default function ViewUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await usersApi.fetchAll();
      setUsers(userList);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const deleteHandler = async (e) => {
    setLoading(true);
    const res = await usersApi.deleteUser(e.target.id);

    if (res.status === 200) {
      // Refresh UI

      // Activate alert
      const setAlert = setInterval(() => {
        document
          .querySelector(".alert-info")
          .classList.remove("visually-hidden");

        clearInterval(setAlert);
        document.querySelector(".alert-info").classList.add("visually-hidden");
      }, 2000);
    }
    setLoading(false);
  };

  return (
    <>
      <div className='container user-form'>
        <div className='call-to-action py-2 d-flex justify-content-end'>
          <Link className='btn btn-success btn-sm' to='/newUser'>
            New User
          </Link>
        </div>
        <h5 className='form-header text-center'>Users</h5>
        {loading ? (
          <LoadingTable />
        ) : (
          <table className='table table-hover user-list'>
            <thead>
              <tr>
                <th scope='row'>FIRST NAME</th>
                <th scope='row'>LAST NAME</th>
                <th scope='row'>EMAIL</th>
                <th scope='row'>STAFF ID</th>
                <th scope='row'>ROLE</th>
                <th scope='row'>DEPARTMENT</th>
                <th scope='row' className='text-center'>
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {users.data.map((user) => {
                return (
                  <tr key={user.id} className='item-row'>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.staffId}</td>
                    <td>{user.role.name}</td>
                    <td>{user.department.name}</td>
                    <td className='text-center'>
                      <div
                        className='btn-group btn-group-sm'
                        role='group'
                        aria-label='Small button group'
                      >
                        <Link
                          to='/editUser'
                          type='button'
                          data-btn-state='delete'
                          className='btn btn-outline-secondary'
                        >
                          Edit
                        </Link>
                        <Link
                          type='button'
                          id={user.id}
                          className='btn btn-outline-danger'
                          onClick={deleteHandler}
                        >
                          Delete
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <hr className='my-3' />
        <div className='cta'>
          <button
            className='btn btn-secondary me-3'
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
      <div
        className='container alert alert-info text-center mt-3 visually-hidden'
        role='alert'
      >
        Record Deleted
      </div>
    </>
  );
}
