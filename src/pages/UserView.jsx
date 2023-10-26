export default function UserView(props) {
  const { user, logout } = props;
  return (
    <>
      <div className='container'>
        <table className='search-and-filter mb-3'>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div className='search d-flex align-items-end'>
                <div className='input-group search-box'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Search'
                    aria-label='search'
                    aria-describedby='search'
                  />
                  <button
                    className='btn btn-outline-secondary'
                    type='button'
                    id='search'
                  >
                    <i className='bi bi-search'></i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </table>

        <div className='details-view'>
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
