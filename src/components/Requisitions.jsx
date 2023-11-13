import Requisition from "./Requisition";

const Requisitions = ({ requisitions }) => {
  return (
    <>
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
    </>
  );
};

export default Requisitions;
