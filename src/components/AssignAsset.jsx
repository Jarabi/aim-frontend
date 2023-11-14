import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingTable from "./LoadingTable";
import assetsApi from "../api/assets";
import usersApi from "../api/users";

export default function AssignAsset() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const data = location.state || {};
  const [assets, setAssets] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState("");
  const [issuerId, setIssuerId] = useState("");
  const [complete, setComplete] = useState(false);

  const assignAsset = async (e) => {
    e.preventDefault();
    console.log("CHOSEN _ASSET ====> ", selectedAsset);
    const requestObj = {
      assetId: selectedAsset,
      userId: data.user.id,
      issuerId,
      requisitionId: data.id,
    };

    const response = await assetsApi.assignAsset(requestObj);

    if (response.status === 200) {
      setComplete(true);
      navigate(-1);
    }
  };

  useEffect(() => {
    const fetchAssets = async () => {
      const response = await assetsApi.fetchAll();
      if (response.status === 200) {
        setAssets(response.data.filter((asset) => asset.user === null));
      }
      setLoading(false);
    };

    const fetchIssuerId = () => {
      const { id } = usersApi.fetchLocalUser();
      setIssuerId(id);
    };

    fetchIssuerId();
    fetchAssets();
  }, []);

  return (
    <div className="container user-form">
      <h5 className="form-header text-center">Assign Asset</h5>
      {loading ? (
        <LoadingTable />
      ) : (
        <>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">REQUESTER</th>
                <td>{`${data.user.firstName} ${data.user.lastName}`}</td>
              </tr>
              <tr>
                <th scope="row">DATE REQUESTED</th>
                <td>{data.createdAt ?? "--"}</td>
              </tr>
              <tr>
                <th scope="row">TITLE</th>
                <td>{data.title ?? "--"}</td>
              </tr>
              <tr>
                <th scope="row">JUSTIFICATION</th>
                <td>{data.justification ?? "--"}</td>
              </tr>
              <tr>
                <th scope="row">STATUS</th>
                <td>{data.status ?? "--"}</td>
              </tr>
              <tr>
                <th scope="row">APPROVER</th>
                <td>{data.approvedBy ?? "Pending"}</td>
              </tr>
              <tr>
                <th scope="row">DATE APPROVED</th>
                <td>{data.approvedAt ?? "--"}</td>
              </tr>
              <tr>
                <th scope="row">FULFILLED BY</th>
                <td>{data.fulfilledBy ?? "--"}</td>
              </tr>
              <tr>
                <th scope="row">DATE FULFILLED</th>
                <td>{data.fulfilledAt ?? "--"}</td>
              </tr>
            </tbody>
          </table>
          <hr className="my-3" />
          <select
            className="form-select form-select-sm me-3"
            id="approval"
            name="approval"
            value={selectedAsset}
            onChange={(e) => setSelectedAsset(e.target.value)}
          >
            <option value="">-- Select Asset To Assign --</option>
            {assets.map((asset) => (
              <option value={asset.id} key={asset.id}>
                {`${asset.name} - ${asset.serialNumber}`}
              </option>
            ))}
          </select>
          <hr className="my-3" />
          <div className="cta">
            <button
              className="btn btn-secondary me-3"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            <button
              className="btn btn-primary me-3"
              onClick={assignAsset}
              disabled={complete}
            >
              Assign Asset
            </button>
          </div>
        </>
      )}
    </div>
  );
}
