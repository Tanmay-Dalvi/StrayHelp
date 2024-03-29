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
        <nav className="header14">
          <div className="nav14">
            <div className="logo14">
              <img className="logo-icon15" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name15">StrayHelp</p>
            </div>
            <div className="links14">
              <button className="home14" onClick={onHomeClick}>
                Home
              </button>
              <button className="about14" onClick={onAboutClick}>
                About
              </button>
              <button className="profile14" onClick={openProfile1}>
                Profile
              </button>
            </div>
          </div>
        </nav>
        <div className="feedback-form">
          <div className="feedback-wrapper">
            <h1 className="feedback">Feedback</h1>
          </div>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeCbXBMK3-gEVwOHGHpznd6_-F3s3AxWc7cTL2M2P3y7YPx8A/viewform?embedded=true" width="640" height="1178" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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
