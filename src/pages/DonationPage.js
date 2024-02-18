import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./DonationPage.css";

const DonationPage = () => {
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
      <div className="donation-page">
        <nav className="header8">
          <div className="nav8">
            <div className="logo8">
              <img className="logo-icon9" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name9">StrayHelp</p>
            </div>
            <div className="links8">
              <button className="home8" onClick={onHomeClick}>
                Home
              </button>
              <button className="about8" onClick={onAboutClick}>
                About
              </button>
              <button className="profile8" onClick={openProfile1}>
                Profile
              </button>
            </div>
          </div>
        </nav>
        <div className="donation-section">
          <div className="hero1">
            <img className="hero-child" alt="" src="/rectangle-38@2x.png" />
          </div>
          <div className="donation-para">
            <div className="help-features">
              <p className="why-to-donate">Why to Donate?</p>
            </div>
            <div className="donation-message">
              <p className="donation-motiive">
                Donations fuel our mission to care for stray animals. Your
                support provides shelter, medical care, and sustenance, giving
                these vulnerable beings a chance for a better life. Contribute
                today!
              </p>
            </div>
          </div>
          <div className="features">
            <div className="help-features">
              <p className="feature-text">
                Your Donations Helps For Animal’s -
              </p>
            </div>
            <div className="featues">
              <div className="food">
                <img className="food-child" alt="" src="/rectangle-35@2x.png" />
                <p className="why-to-donate">Food</p>
              </div>
              <div className="shelter">
                <img className="food-child" alt="" src="/rectangle-36@2x.png" />
                <p className="why-to-donate">Shelter</p>
              </div>
              <div className="health">
                <img
                  className="health-child"
                  alt=""
                  src="/rectangle-37@2x.png"
                />
                <p className="why-to-donate">Health</p>
              </div>
            </div>
          </div>
          <button className="donate-button1">
            <p className="donate3">Donate</p>
          </button>
          <div className="end-text">
            <p className="we-appreciate-your">We appreciate your help!</p>
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

export default DonationPage;
