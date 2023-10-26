export default function UserView(props) {
  const { user, logout } = props;
  return (
    <>
      <div className='container'>
        <div className='d-flex justify-content-end'>
          <h6>
            <span className='badge text-bg-primary'>{user}</span>
          </h6>
          &nbsp;&middot;&nbsp;
          <div className='logout'>
            <i onClick={logout} className='fa-solid fa-right-from-bracket'></i>
          </div>
        </div>
        <div className='border'>
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
              <tr>
                <td scope='row'>New laptop</td>
                <td>Replacement for faulty laptop</td>
                <td>25-Aug-2023</td>
                <td>Pending approval</td>
                <td>-</td>
                <td>
                  <a href='#'>View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
