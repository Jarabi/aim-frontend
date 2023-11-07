import { useState } from "react";
import Login from "../components/Login";
import { MdOutlineInventory } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { RiQuestionAnswerLine } from "react-icons/ri";

export default function LandingPage({ users, loginState, setUserData }) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <div className='container-fluid'>
        <div className='landing'>
          <h2>Manage assets end-to-end with IT Asset Management Software</h2>
          <p>Build a single source of truth for your IT Assets</p>
          <button className='btn btn-success btn-lg mt-2' onClick={toggleModal}>
            Get Started
          </button>
          <div className='product-features mt-4'>
            <h3 className='text-center'>Product Features</h3>
            <div className='features row row-cols-1 row-cols-md-3 g-3 px-3'>
              <div className='col'>
                <div className='card h-75'>
                  <div className='card-image d-flex justify-content-center align-items-center m-3 p-2'>
                    <MdOutlineInventory style={{ fontSize: "1.5rem" }} />
                  </div>
                  <div className='card-body overflow-hidden'>
                    <h6 className='card-title'>Asset Inventory</h6>
                    <small className='card-text'>
                      The Asset Inventory feature of our system empowers you to
                      effortlessly track, manage, and catalog all your
                      organization's assets in one centralized repository.
                      Whether it's IT equipment, or mobile devices, this feature
                      enables you to maintain a comprehensive and up-to-date
                      inventory. You can add, edit, and categorize assets,
                      attach crucial information, such as purchase details and
                      maintenance records, and even set depreciation schedules.
                      With a quick search and reporting tools, you'll always
                      have real-time visibility into your assets, ensuring
                      better control and decision-making.
                    </small>
                  </div>
                  <div className='card-footer'>
                    <small className='text-body-secondary'>MORE</small>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card h-75'>
                  <div className='card-image d-flex justify-content-center align-items-center m-3 p-2'>
                    <FaUsersGear style={{ fontSize: "1.5rem" }} />
                  </div>
                  <div className='card-body overflow-hidden'>
                    <h6 className='card-title'>User Management</h6>
                    <small className='card-text'>
                      User Management is a core component of our asset inventory
                      system, designed to streamline the management of user
                      access and permissions. With this feature, you can create,
                      modify, and delete user profiles, assigning roles and
                      permissions tailored to their responsibilities. Ensure
                      that only authorized personnel can make changes or access
                      sensitive asset information, enhancing security and
                      accountability. User Management simplifies collaboration
                      among team members while maintaining data integrity and
                      confidentiality.
                    </small>
                  </div>
                  <div className='card-footer'>
                    <small className='text-body-secondary'>MORE</small>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card h-75'>
                  <div className='card-image d-flex justify-content-center align-items-center m-3 p-2'>
                    <RiQuestionAnswerLine style={{ fontSize: "1.5rem" }} />
                  </div>
                  <div className='card-body overflow-hidden'>
                    <h6 className='card-title'>Asset Requisitions</h6>
                    <small className='card-text'>
                      Our Asset Requisitions feature simplifies and formalizes
                      the process of requesting and allocating assets within
                      your organization. Employees can submit requests for
                      specific assets through the system, and designated
                      approvers can review, approve, or deny these requests.
                      This feature not only helps in managing asset allocation
                      efficiently but also tracks the history of requisitions,
                      making it easy to analyze asset demand trends and optimize
                      asset allocation. By automating the requisition workflow,
                      you can reduce paperwork, ensure proper approvals, and
                      maintain a transparent and auditable process.
                    </small>
                  </div>
                  <div className='card-footer'>
                    <small className='text-body-secondary'>MORE</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Login
          users={users}
          setUserData={setUserData}
          loginState={loginState}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
}
