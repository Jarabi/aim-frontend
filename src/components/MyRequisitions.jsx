import { useEffect, useState } from "react";
import Requisition from "./Requisition";
import usersApi from "../api/users";
import LoadingTable from "./LoadingTable";

function MyRequisitions() {
  const [requisitions, setRequisitions] = useState([]);
  const [approvers, setApprovers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { id } = usersApi.fetchLocalUser();

    const loadUserRequisitions = async () => {
      const response = await usersApi.fetchOneById(id);

      if (response.status === 200) {
        setRequisitions(response.data.requisitions);
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

  return (
    <>
      {loading ? (
        <LoadingTable />
      ) : requisitions.length > 0 ? (
        <table className='table table-sm table-striped table-hover table-bordered'>
          <thead>
            <tr>
              <th scope='col'>Request</th>
              <th scope='col'>Justification</th>
              <th scope='col'>Date Created</th>
              <th scope='col'>Status</th>
              <th scope='col'>Approver</th>
              <th scope='col'>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {requisitions.map((requisition) => {
              return (
                <Requisition
                  key={requisition.id}
                  requisition={requisition}
                  approvers={approvers}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className='alert alert-info text-center' role='alert'>
          No Requisitions Yet.
        </div>
      )}
    </>
  );
}

export default MyRequisitions;
