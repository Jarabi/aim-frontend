import { Link } from "react-router-dom";
import HeroImg from "../images/hero.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container text-center d-flex flex-row justify-content-center align-items-center ">
        <div>
          <h2>Manage assets end-to-end with IT Asset Management Software</h2>
          <p>Build a single source of truth for your IT Assets</p>
          <Link to="/login" className="btn btn-success btn-lg mt-2 px-5">
            Get Started
          </Link>
        </div>
        <div>
          <h3>Project Demo</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Mdd2lXmmoPk?si=x5mPMR2yRNN_SW-o&amp&rel=0&controls=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
