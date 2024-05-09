import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Vector from "../../assets/img/Vector.png";
import congrats from "../../assets/img/congrats.png";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ email: "", name: "" });
  const [formErrors, setFormErrors] = useState({ email: "", name: "" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setTimeout(() => {
        setSubmitted(true);
        setTimeout(() => {
          navigate("/home");
        }, 5000);
      }, 1000);
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      valid = false;
    }
    if (!formData.name) {
      errors.name = "Please enter your name";
      valid = false;
    }
    setFormErrors(errors);
    return valid;
  };

  return (
    <div className="register-page">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="close-button">
        <Link to="/home">
          <button className="close-button-icon">&times;</button>
        </Link>
      </div>

      <div className="register-form">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div
              className="hero--section--content"
              style={{ margin: "50px 0px" }}
            >
              <h5 className="hero--section--title">Registration Form</h5>
              <p className="hero--section-description font-responsive">
                Start your success Journey here!
              </p>
            </div>
            <div className="form-grp">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="input"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <div className="error">{formErrors.email}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Username"
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && (
                  <div className="error">
                    <img src={Vector} />
                    {formErrors.name}
                  </div>
                )}
              </div>
              <button className="btn btn-outline-primary wid" type="submit">
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="success-message">
            <div
              className="hero--section--content"
              style={{ margin: "50px 0px" }}
            >
              <img src={congrats} />
              <h5 className="hero--section--title">Success Submitted</h5>
              <p className="hero--section-description font-responsive">
                Congratulations!
              </p>
            </div>
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </div>
        )}
      </div>
      {submitted && (
        <div>
          <div className="success-message">
            Redirecting you to Homepage in{" "}
            <span style={{ fontWeight: "bold" }}>5 Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
