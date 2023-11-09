import { MdOutlineInventory } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { RiQuestionAnswerLine } from "react-icons/ri";
import inventorySvg from "../images/inventory_1.svg";
import userMgtSvg from "../images/user-mgt.svg";
import requisitionsSvg from "../images/requisitions.svg";
import FeatureImg from "../images/blue-gradient.png";

const Features = () => {
  return (
    <section
      id='features'
      style={{
        backgroundImage: `url(${FeatureImg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className='container'>
        <h3 className='features-title text-center pt-5'>Product Features</h3>
        <div className='row row-cols-2 mt-5'>
          <div className='col'>
            <div className='feature-icon'>
              <MdOutlineInventory style={{ fontSize: "1.5rem" }} />
            </div>
            <h6 className='feature-name'>Asset Inventory</h6>
            <small>
              The Asset Inventory feature of our system empowers you to
              effortlessly track, manage, and catalog all your organization's
              assets in one centralized repository. Whether it's IT equipment,
              or mobile devices, this feature enables you to maintain a
              comprehensive and up-to-date inventory. You can add, edit, and
              categorize assets, attach crucial information, such as purchase
              details and maintenance records, and even set depreciation
              schedules. With a quick search and reporting tools, you'll always
              have real-time visibility into your assets, ensuring better
              control and decision-making.
            </small>
          </div>
          <div className='col feature-illustration'>
            <img
              src={inventorySvg}
              alt='Inventory management'
              style={{ width: "12rem" }}
            />
          </div>
          <div className='col feature-illustration'>
            <img
              src={userMgtSvg}
              alt='User management'
              style={{ width: "25rem" }}
            />
          </div>
          <div className='col mt-3'>
            <div className='feature-icon'>
              <FaUsersGear style={{ fontSize: "1.5rem" }} />
            </div>
            <h6 className='feature-name'>User Management</h6>
            <small>
              User Management is a core component of our asset inventory system,
              designed to streamline the management of user access and
              permissions. With this feature, you can create, modify, and delete
              user profiles, assigning roles and permissions tailored to their
              responsibilities. Ensure that only authorized personnel can make
              changes or access sensitive asset information, enhancing security
              and accountability. User Management simplifies collaboration among
              team members while maintaining data integrity and confidentiality.
            </small>
          </div>
          <div className='col'>
            <div className='feature-icon'>
              <RiQuestionAnswerLine style={{ fontSize: "1.5rem" }} />
            </div>
            <h6 className='feature-name'>Asset Requisitions</h6>
            <small>
              Our Asset Requisitions feature simplifies and formalizes the
              process of requesting and allocating assets within your
              organization. Employees can submit requests for specific assets
              through the system, and designated approvers can review, approve,
              or deny these requests. This feature not only helps in managing
              asset allocation efficiently but also tracks the history of
              requisitions, making it easy to analyze asset demand trends and
              optimize asset allocation. By automating the requisition workflow,
              you can reduce paperwork, ensure proper approvals, and maintain a
              transparent and auditable process.
            </small>
          </div>
          <div className='col feature-illustration'>
            <img
              src={requisitionsSvg}
              alt='Asset requisitions'
              style={{ width: "12rem" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
