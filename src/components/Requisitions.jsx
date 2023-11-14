import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Requisition from "./Requisition";
import requisitionsApi from "../api/requisitions";
import LoadingTable from "./LoadingTable";

const Requisitions = () => {
  const navigate = useNavigate();
  const [requisitions, setRequisitions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAllRequisitions = async () => {
      const response = await requisitionsApi.fetchAll();

      if (response.status === 200) {
        setRequisitions(response.data);
        setLoading(false);
      }
    };

    loadAllRequisitions();
  }, []);

  return (
    <div className='container user-form'>
      <h5 className='form-header text-center'>All Requisitions</h5>
      {loading ? (
        <LoadingTable />
      ) : (
        <table className='table table-sm table-striped table-hover table-bordered'>
          <thead>
            <tr>
              <th scope='row'>REQUESTER</th>
              <th scope='col'>TITLE</th>
              <th scope='col'>JUSTIFICATION</th>
              <th scope='col'>DATE CREATED</th>
              <th scope='col'>STATUS</th>
              <th scope='col'>APPROVER</th>
              <th scope='col'>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {requisitions.map((requisition) => {
              return (
                <Requisition key={requisition.id} requisition={requisition} />
              );
            })}
          </tbody>
        </table>
      )}
      <hr className='my-3' />
      <div className='cta'>
        <button className='btn btn-secondary me-3' onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Requisitions;
