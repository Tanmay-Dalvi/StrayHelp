import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./FeedbackPage.css";

const FeedbackPage = () => {
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
      <div className="feedback-page">
        <nav className="header1">
          <div className="nav1">
            <div className="logo1">
              <img className="logo-icon2" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name2">StrayHelp</p>
            </div>
            <div className="links1">
              <button className="home1" onClick={onHomeClick}>
                Home
              </button>
              <button className="about1" onClick={onAboutClick}>
                About
              </button>
              <button className="profile1" onClick={openProfile1}>
                Profile
              </button>
            </div>
          </div>
        </nav>
        <div className="feedback-form">
          <div className="feedback-wrapper">
            <h1 className="feedback">Feedback</h1>
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

export default FeedbackPage;
