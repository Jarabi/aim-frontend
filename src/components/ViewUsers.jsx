import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usersApi from "../api/users";
import LoadingTable from "./LoadingTable";

export default function ViewUsers() {
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

  return (
    <div className="container user-form">
      <h5 className="form-header text-center">Users</h5>
      {loading ? (
        <LoadingTable />
      ) : (
        <table className="table table-hover user-list">
          <thead>
            <tr>
              <th scope="row">FIRST NAME</th>
              <th scope="row">LAST NAME</th>
              <th scope="row">EMAIL</th>
              <th scope="row">STAFF ID</th>
              <th scope="row">ROLE</th>
              <th scope="row">DEPARTMENT</th>
              <th scope="row" colSpan={2} className="text-center">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.staffId}</td>
                  <td>{user.role.name}</td>
                  <td>{user.department.name}</td>
                  <td className="text-end">
                    <Link
                      to="/viewUser"
                      state={user}
                      style={{
                        textDecoration: "none"
                      }}
                    >
                      EDIT
                    </Link>
                  </td>
                  <td className="text-start">
                    <Link
                      to="#"
                      state={user}
                      style={{
                        textDecoration: "none"
                      }}
                    >
                      DELETE
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
