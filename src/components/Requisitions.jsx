import { useEffect, useState } from 'react';
import Requisition from "./Requisition";
import requisitionsApi from '../api/requisitions';

const Requisitions = () => {
  const [ requisitions, setRequisitions ] = useState([] );

  useEffect( () => {
    const loadAllRequisitions = async () => {
      const response = await requisitionsApi.fetchAll();

      if ( response.status === 200 ) {
        setRequisitions( response.data );
      }
    }

    loadAllRequisitions();
  },[])

  return (
    <div className='container user-form'>
      <h5 className="form-header text-center">All Requisitions</h5>
      <table className="table table-sm table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">Request</th>
            <th scope="col">Justification</th>
            <th scope="col">Date Created</th>
            <th scope="col">Status</th>
            <th scope="col">Approver</th>
            <th scope="col">ACTION</th>
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
    </div>
  );
};

export default Requisitions;
