/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import usersApi from "../api/users";

const Requisition = ({ requisition }) => {
  const [approvers, setApprovers] = useState([]);
  const [loading, setLoading] = useState(true);
  const approver = approvers.find((user) => user.id === requisition.approvedBy);

  useEffect(() => {
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
    fetchApprovers();
    setLoading(false);
  }, []);

  return (
    <tr>
      <td>{`${requisition.user.firstName} ${requisition.user.firstName}`}</td>
      <td>{requisition.title}</td>
      <td>{requisition.justification}</td>
      <td>{requisition.createdAt}</td>
      <td>{requisition.status}</td>
      {loading ? (
        <td>
          <div className='spinner-border spinner-border-sm' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </td>
      ) : (
        <td>{approver && `${approver.firstName} ${approver.lastName}`}</td>
      )}
      <td>
        <Link
          type='button'
          className='btn btn-outline-secondary btn-sm'
          id='requisitionView'
          to='/requisitionView'
          state={requisition}
        >
          View
        </Link>
      </td>
    </tr>
  );
};

export default Requisition;
