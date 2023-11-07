const Requisition = () => {
  return (
    <div>
      <table className='table table-hover fs-6'>
        <thead>
          <tr>
            <th scope='col'>REQUEST</th>
            <th scope='col'>JUSTIFICATION</th>
            <th scope='col'>CREATED</th>
            <th scope='col'>STATUS</th>
            <th scope='col'>APPROVER</th>
            <th scope='col'>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>New laptop</td>
            <td>Replacement for faulty laptop</td>
            <td>25-Aug-2023</td>
            <td>Approved</td>
            <td>John Mwangi</td>
            <td>
              <a href='#'>View</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Requisition;
