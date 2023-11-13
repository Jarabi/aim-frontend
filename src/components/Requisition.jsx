/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Requisition = ({ requisition, approvers }) => {
  const approver = approvers.find((user) => user.id === requisition.approvedBy);
  return (
    <tr>
      <td scope='row'>{requisition.title}</td>
      <td>{requisition.justification}</td>
      <td>{requisition.createdAt}</td>
      <td>{requisition.status}</td>
      <td>{approver && `${approver.firstName} ${approver.lastName}`}</td>
      <td>
        <Link
          type='button'
          className='btn btn-outline-primary btn-sm'
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
