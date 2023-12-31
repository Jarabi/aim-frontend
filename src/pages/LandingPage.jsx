import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";

export default function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <Hero />
        <Features />
        <About />
      </div>
    </>
  );
}
