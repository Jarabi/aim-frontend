import { Link } from "react-router-dom";
import AboutImg from "../images/about.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <section
      id='about'
      style={{
        backgroundImage: `url(${AboutImg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className='container lh-lg'>
        <h3 className='about-title text-center pt-5 mb-5'>
          Welcome to our Asset Inventory Management System
        </h3>
        <p>
          Our system is designed to simplify asset management, inspired by some
          challenges identified by <em>Alex Jarabi</em> at his previous place of
          work:
        </p>
        <ul>
          <li>
            <strong>Asset Records:</strong> There was no digital record to show
            available assets in the store. There were no records to show when
            assets were procured, asset aging or which assets are under
            maintenance.
          </li>
          <li>
            <strong>Asset Issuance:</strong> Asset issuances to and returns from
            users was recorded in a book. This was quite risky if for example
            the book got lost or destroyed.
          </li>
          <li>
            <strong>Asset Audit:</strong> Asset audits were quite challenging
            because it was difficult to track asset issuance history
          </li>
          <li>
            <strong>Approval Workflow:</strong> Asset requisition was conducted
            using paper. A user would have to print and fill the approval form,
            walk to the line manager for approval, then to the IT head for
            issuance (if request was approved). This process was quite tedious.
          </li>
          <li>
            <strong>Asset Approval History:</strong> Further to the previous
            point, the physical approval forms would always get lost, making it
            difficult to track approvals for assets.
          </li>
        </ul>
        <p>
          This is the final project of Software Engineering Foundations at{" "}
          <Link
            to='https://www.alxafrica.com/'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: "white" }}
          >
            ALX Africa
          </Link>
          . It is a collaborative effort between Chris Ndung'u and Alex Jarabi.
        </p>

        <p className='call-to-action'>
          Ready to streamline your asset management and boost productivity?{" "}
          <Link to='/login' style={{ color: "white" }}>
            Get started now!
          </Link>
        </p>

        <h4 className='project-repository mt-4'>Project Repository</h4>
        <p>
          At the moment, this project is divided into two repositories for the{" "}
          <strong>
            <Link
              to='https://github.com/Jarabi/aim-frontend'
              target='_blank'
              style={{ color: "white" }}
              rel='noopener noreferrer'
            >
              Frontend
            </Link>
          </strong>{" "}
          and the{" "}
          <strong>
            <Link
              to='https://github.com/devKiratu/aim-backend'
              target='_blank'
              style={{ color: "white" }}
              rel='noopener noreferrer'
            >
              Backend
            </Link>
          </strong>
          .
        </p>

        <h4 className='text-center mt-5'>Meet The Contributors</h4>
        <div className='contributors d-flex justify-content-evenly'>
          <div className='contact'>
            <h5 className='name'>Chris Ndung'u</h5>
            <div className='socials d-flex justify-content-around'>
              <div className='linkedIn'>
                <Link
                  to='https://www.linkedin.com/'
                  target='_blank'
                  style={{ color: "white" }}
                  rel='noopener noreferrer'
                >
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className='github'>
                <Link
                  to='https://github.com/devKiratu'
                  target='_blank'
                  style={{ color: "white" }}
                  rel='noopener noreferrer'
                >
                  <FaGithub />
                </Link>
              </div>
              <div className='twitter'>
                <Link
                  to='https://twitter.com/home'
                  target='_blank'
                  style={{ color: "white" }}
                  rel='noopener noreferrer'
                >
                  <FaXTwitter />
                </Link>
              </div>
            </div>
          </div>
          <div className='contact'>
            <h5 className='name'>Alex Jarabi</h5>
            <div className='socials d-flex justify-content-around'>
              <div className='linkedIn'>
                <Link
                  to='https://www.linkedin.com/in/jarabialex'
                  target='_blank'
                  style={{ color: "white" }}
                  rel='noopener noreferrer'
                >
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className='github'>
                <Link
                  to='https://github.com/Jarabi'
                  target='_blank'
                  style={{ color: "white" }}
                  rel='noopener noreferrer'
                >
                  <FaGithub />
                </Link>
              </div>
              <div className='twitter'>
                <Link
                  to='https://twitter.com/jarabialex'
                  target='_blank'
                  style={{ color: "white" }}
                  rel='noopener noreferrer'
                >
                  <FaXTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
