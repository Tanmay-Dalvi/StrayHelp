import { useState, useCallback } from "react";
import { Radio, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./VolunteerPage.css";

const VolunteerPage = () => {
  const navigate = useNavigate();
  const [isProfile1Open, setProfile1Open] = useState(false);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutClick = useCallback(() => {
    navigate("/about-us-page");
  }, [navigate]);

  const openProfile1 = useCallback(() => {
    setProfile1Open(true);
  }, []);

  const closeProfile1 = useCallback(() => {
    setProfile1Open(false);
  }, []);

  return (
    <>
      <div className="volunteer-page">
        <nav className="header5">
          <div className="nav5">
            <div className="logo5">
              <img className="logo-icon6" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name6">StrayHelp</p>
            </div>
            <div className="links5">
              <button className="home5" onClick={onHomeClick}>
                Home
              </button>
              <button className="about5" onClick={onAboutClick}>
                About
              </button>
              <button className="profile5" onClick={openProfile1}>
                Profile
              </button>
            </div>
          </div>
        </nav>
        <div className="volunteer-main">
          <div className="volunteer-text">
            <div className="volunteer-heading">
              <h1 className="vol-head">Volunteer</h1>
            </div>
            <div className="volunteer-para">
              <p className="vol-description">
                Welcome to a community of compassion! Volunteering with us means
                becoming an integral part of a dedicated team committed to
                making a positive impact on the lives of stray animals. Join us
                in providing shelter, care, and love to those who need it most.
                As a volunteer, you'll have the opportunity to make a real
                difference while gaining valuable experiences and forming
                lasting connections. Together, we can create a world where every
                animal receives the support they deserve. Ready to be a force
                for good? Join us on this rewarding journey!
              </p>
            </div>
          </div>
          <div className="volunteer-form">
            <div className="form-heading">
              <p className="your-name">JOIN US!</p>
            </div>
            <div className="name-section">
              <div className="email">
                <p className="your-name">Your Name</p>
              </div>
              <div className="email-input">
                <input className="name-input-child" type="text" />
              </div>
            </div>
            <div className="email-section">
              <div className="email">
                <p className="your-name">Your Email</p>
              </div>
              <div className="email-input">
                <input className="name-input-child" type="email" />
              </div>
            </div>
            <div className="email-section">
              <div className="email">
                <p className="your-name">Phone Number</p>
              </div>
              <div className="ph-no-input">
                <input className="ph-no-input-child" type="tel" />
              </div>
            </div>
            <div className="animal-lover-section">
              <div className="question">
                <p className="your-name">Are you Animal Lover?</p>
              </div>
              <div className="answers">
                <div className="yes-option">
                  <FormControlLabel
                    className="yes-option-child"
                    label=""
                    control={<Radio color="primary" />}
                  />
                  <p className="yes">Yes</p>
                </div>
                <div className="no-option">
                  <FormControlLabel
                    className="yes-option-child"
                    label=""
                    control={<Radio color="primary" />}
                  />
                  <p className="yes">No</p>
                </div>
              </div>
            </div>
            <div className="name-section">
              <div className="email">
                <p className="your-name">
                  <span className="your-interest">{`Your Interest   `}</span>
                  <span className="how-can-you">(How can you help us)</span>
                </p>
              </div>
              <div className="email-input">
                <input className="name-input-child" type="text" />
              </div>
            </div>
            <div className="name-section">
              <div className="email">
                <p className="your-name">
                  <span className="your-interest">{`Area  `}</span>
                  <span className="where-you-want">
                    (Where you want to work)
                  </span>
                </p>
              </div>
              <div className="area-input">
                <input className="name-input-child" type="text" />
              </div>
            </div>
            <div className="time-section">
              <div className="email">
                <p className="your-name">
                  <span>Hours per Week</span>
                  <span className="where-you-want">
                    {" "}
                    (How many hours per week you can work)
                  </span>
                </p>
              </div>
              <div className="area-input">
                <input className="name-input-child" type="text" />
              </div>
            </div>
            <div className="name-section">
              <div className="email">
                <p className="your-name">
                  <span>Previous Experience</span>
                  <span className="if-any"> (If any)</span>
                </p>
              </div>
              <div className="email-input">
                <input className="name-input-child" type="text" />
              </div>
            </div>
            <button className="submit-button">
              <div className="submit">SUBMIT</div>
            </button>
          </div>
        </div>
      </div>
      {isProfile1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeProfile1}
        >
          <Profile onClose={closeProfile1} />
        </PortalDrawer>
      )}
    </>
  );
};

export default VolunteerPage;
