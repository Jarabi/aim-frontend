import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import usersApi from "../api/users";
import requisitionsApi from "../api/requisitions";
import LoadingTable from "./LoadingTable";

function ApproveRequisition() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [approval, setApproval] = useState("");
  const data = location.state;

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await usersApi.fetchLocalUser();
      setUser(userInfo);
      setLoading(false);
    };

    fetchUser();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = { requisitionId: data.id, approverId: user.id };

    if (approval === "approved") {
      setSaving(true);
      const res = await requisitionsApi.approveRequisition(formData);

      if (res.status === 201) {
        // Implement an alert
        document.querySelector(".alert-info").classList.remove("invisible");

        setInterval(() => {
          document.querySelector(".alert-info").classList.add("invisible");
        }, 2000);
      }
      setApproval("");
      setSaving(false);
    }
  };

  return (
    <>
      <div className='container user-form'>
        <h5 className='form-header text-center'>Approve Requisition</h5>
        {loading ? (
          <LoadingTable />
        ) : (
          <>
            <table className='table'>
              <tbody>
                <tr>
                  <th scope='row'>REQUESTER</th>
                  <th scope='row'>TITLE</th>
                  <th scope='row'>JUSTIFICATION</th>
                  <th scope='row'>STATUS</th>
                  <th scope='row'>DATE REQUESTED</th>
                </tr>
                <tr>
                  <td>{`${user.firstName} ${user.lastName}`}</td>
                  <td>{data.title}</td>
                  <td>{data.justification}</td>
                  <td>{data.status === "created" && "Pending approval"}</td>
                  <td>{data.createdAt}</td>
                </tr>
              </tbody>
            </table>
            <form onSubmit={submitHandler}>
              <select
                className='form-select form-select-sm'
                id='approval'
                name='approval'
                value={approval}
                onChange={(e) => setApproval(e.target.value)}
              >
                <option value=''>-- Approval --</option>
                <option value='approved'>APPROVED</option>
                <option value='declined'>DECLINED</option>
              </select>
              <hr className='my-3' />
              <div className='cta'>
                <button
                  className='btn btn-secondary me-3'
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
                <button
                  className='btn btn-success'
                  type='submit'
                  disabled={saving}
                >
                  {saving ? (
                    <>
                      <span
                        className='spinner-border spinner-border-sm'
                        aria-hidden='true'
                      ></span>
                      <span role='status'>SAVING...</span>
                    </>
                  ) : (
                    "SAVE"
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
      <div
        className='container alert alert-info text-center mt-3 invisible'
        role='alert'
      >
        Record Saved
      </div>
    </>
  );
}

export default ApproveRequisition;
