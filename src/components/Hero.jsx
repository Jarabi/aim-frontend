import HeroImg from "../images/hero.png";

const Hero = () => {
  return (
    <section
      id='hero'
      className='d-flex justify-content-center align-items-center'
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className='container text-center'>
        <h2>Manage assets end-to-end with IT Asset Management Software</h2>
        <p>Build a single source of truth for your IT Assets</p>
        <button className='btn btn-success btn-lg mt-2 px-5'>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
