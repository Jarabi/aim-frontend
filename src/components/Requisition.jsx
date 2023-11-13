/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Requisition = ({ requisition }) => {
  return (
    <tr>
      <td scope='row'>{requisition.title}</td>
      <td>{requisition.justification}</td>
      <td>{requisition.createdAt}</td>
      <td>{requisition.status}</td>
      <td>{requisition.approvedBy}</td>
      <td>
        <Link
          type='button'
          className='btn btn-outline-primary btn-sm'
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
