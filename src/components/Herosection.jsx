import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      // Customize AOS initialization options here if needed
    });
  }, []);

  return (
    <section id="heroSection" className="hero--section">
      <div
        className="hero--section--content--box"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <div className="hero--section--content">
          <h5 className="hero--section--title">Success stories</h5>
          <p className="hero--section-description font-responsive">
            Every success journey
            <br /> we’ve encountered.
          </p>
        </div>
      </div>
    </section>
  );
}
