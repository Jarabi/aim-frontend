import { useEffect, useState } from 'react';
import Requisition from "./Requisition";
import usersApi from '../api/users';

const MyRequisitions = () => {
  const [ requisitions, setRequisitions ] = useState([] );

  useEffect( () => {
    const {id} = usersApi.fetchLocalUser()
    const loadUserRequisitions = async () => {
      const response = await usersApi.fetchOneById(id);

      if ( response.status === 200 ) {
        setRequisitions( response.data.requisitions );
      }
    }

    loadUserRequisitions();
  },[])

  return (
    requisitions.length > 0? (<>
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
    </>):(   <div className="alert alert-info text-center" role="alert">
          No Requisitions Yet.
        </div>)
    
  );
};

export default MyRequisitions;
