import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import assetsApi from "../api/assets";
import LoadingTable from "./LoadingTable";

export default function ViewAssets() {
  const [assets, setAssets] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssets = async () => {
      const assetList = await assetsApi.fetchAll();
      setAssets(assetList);
      setLoading(false);
    };
    fetchAssets();
  }, []);

  console.log(assets.data);

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
              <th scope='row' colSpan={2} className='text-center'>
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
                  <td className='text-end'>
                    <Link
                      to='/viewAsset'
                      state={asset}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      EDIT
                    </Link>
                  </td>
                  <td className='text-start'>
                    <Link
                      to='#'
                      state={asset}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      DELETE
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
