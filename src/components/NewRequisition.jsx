import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import requisitionsApi from "../api/requisitions";
import usersApi from "../api/users";

function NewRequisition() {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [justification, setJustification] = useState("");

  useEffect(() => {
    const fetchId = async () => {
      const { id } = await usersApi.fetchLocalUser();
      setUserId(id);
    };

    fetchId();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setSaving(true);

    const formData = { title, justification, userId };
    const res = await requisitionsApi.createRequisition(formData);

    console.log("NEW REQUISITION RESPONSE ", res);

    if (res.status === 201) {
      setSaving(false);
    }

    setTitle("");
    setJustification("");
  };

  return (
    <div className="container user-form">
      <form className="border rounded p-3" onSubmit={submitHandler}>
        <h5 className="form-header text-center">New Requisition</h5>
        <p className="fs-6">Provide requsition details</p>
        <hr className="my-3" />
        <div className="mb-3">
          <label htmlFor="req-title" className="form-label">
            TITLE
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="invalid-feedback">Please provide a title.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="justification" className="form-label">
            JUSTIFICATION
          </label>
          <textarea
            className="form-control"
            id="justification"
            name="justification"
            rows="3"
            value={justification}
            onChange={(e) => setJustification(e.target.value)}
          ></textarea>
        </div>
        <hr className="my-3" />
        <div className="cta">
          <button
            className="btn btn-secondary me-3"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button className="btn btn-success" type="submit" disabled={saving}>
            {saving ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
                <span role="status">SAVING...</span>
              </>
            ) : (
              "SAVE"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewRequisition;
