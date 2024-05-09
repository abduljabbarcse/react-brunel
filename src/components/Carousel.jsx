import { useState, useEffect } from "react";
import carousel from "../assets/img/carousel.png";
import rocket from "../assets/img/rocket.png";
import arrow from "../assets/img/arrow.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { useNavigate } from "react-router-dom";

export default function Carousel() {
  const navigate = useNavigate();
  const navigateToRegisterPage = () => {
    navigate("/register");
  };
  const slides = [
    {
      content:
        "Enhance fortune 50 company’s insights teams research capabilities",
    },
    {
      content:
        " Achieved reduction in project execution time by optimising team availability",
    },
    {
      content:
        "Reduced client expenses by saving on hiring and employee costs.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    AOS.init({});
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="carouselSection" className="carousel--section">
      <div className="carousel--section-right">
        <img
          src={carousel}
          alt="Carousel"
          className="carousel--section-right--img"
        />
        <div
          className="card card1"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <h1>40%</h1>
          <p>
            Achieved reduction in project execution time by optimising team
            availability
          </p>
        </div>
        <div
          className="card card2"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src={rocket} alt="Rocket" />
          <div>
            <h2>10 DAYS</h2>
            <p>Staff Deployment</p>
          </div>
        </div>
        <div
          className="card card3"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <h1>0.5</h1>
          <span>MILLION</span>
          <p>Reduced client expenses by saving on hiring and employee costs.</p>
        </div>
      </div>
      <div
        className="carousel--section-left"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <div className="carousel">
          <div className="carousel-container">
            {slides.map((slide, index) => (
              <h3
                key={index}
                className="carousel-item"
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                  display: index === currentIndex ? "block" : "none",
                }}
              >
                {slide.content}
              </h3>
            ))}
          </div>
          <div className="dot-indicators">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
        <div
          className="btn btn-outline-primary"
          style={{ position: "relative", padding: "20px 40px" }}
          onClick={navigateToRegisterPage}
        >
          Explore
          <img src={arrow} className="arrow" />
        </div>
      </div>
    </section>
  );
}
