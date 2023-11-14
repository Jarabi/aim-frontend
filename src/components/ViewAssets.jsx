import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import assetsApi from "../api/assets";
import LoadingTable from "./LoadingTable";

export default function ViewAssets() {
  const navigate = useNavigate();
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssets = async () => {
      const assetList = await assetsApi.fetchAll();
      setAssets(assetList);
      setLoading(false);
    };
    fetchAssets();
  }, []);

  const deleteHandler = async (e) => {
    setLoading(true);
    const res = await assetsApi.deleteAsset(e.target.id);

    if (res.status === 200) {
      // Refresh UI
    }
    setLoading(false);
  };

  return (
    <div className='container user-form'>
      <h5 className='form-header text-center'>Assets</h5>
      {loading ? (
        <LoadingTable />
      ) : (
        <table className='table table-hover asset-list'>
          <thead>
            <tr>
              <th scope='row'>SERIAL NUMBER</th>
              <th scope='row'>ASSET NAME</th>
              <th scope='row'>DESCRIPTION</th>
              <th scope='row'>CONDITION</th>
              <th scope='row'>DATE ENTERED</th>
              <th scope='row'>LAST ISSUED</th>
              <th scope='row'>ASSIGNED USER</th>
              <th scope='row'>ISSUER</th>
              <th scope='row' className='text-center'>
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {assets.data.map((asset) => {
              return (
                <tr key={asset.id}>
                  <td>{asset.serialNumber}</td>
                  <td>{asset.name}</td>
                  <td>{asset.description}</td>
                  <td>{asset.condition}</td>
                  <td>{asset.createdAt}</td>
                  <td>{asset.lastIssued}</td>
                  <td>
                    {asset.user === null
                      ? "Not Assigned"
                      : `${asset.user.firstName} ${asset.user.lastName}`}
                  </td>
                  <td>{asset.issuedBy}</td>
                  <td className='text-center'>
                    <div
                      className='btn-group btn-group-sm'
                      role='group'
                      aria-label='Small button group'
                    >
                      <Link
                        to='/viewAsset'
                        type='button'
                        data-btn-state='delete'
                        className='btn btn-outline-secondary'
                      >
                        Edit
                      </Link>
                      <Link
                        type='button'
                        id={asset.id}
                        className='btn btn-outline-danger'
                        onClick={deleteHandler}
                      >
                        Delete
                      </Link>
                    </div>
                  </td>
                </tr>
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
}
