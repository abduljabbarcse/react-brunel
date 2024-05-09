import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };
  const navigateToRegisterPage = () => {
    navigate("/register");
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src={logo} alt="Logoipsum" height={30} />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <button
              onClick={() => {
                closeMenu();
                navigateToRegisterPage();
              }}
              className="btn btn-primary"
            >
              Get Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                closeMenu();
                navigateToRegisterPage();
              }}
              className="btn btn-outline-primary"
            >
              Onboard Talent
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
