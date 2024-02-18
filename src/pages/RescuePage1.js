import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./RescuePage1.css";

const RescuePage1 = () => {
  const navigate = useNavigate();
  const [isProfile1Open, setProfile1Open] = useState(false);

  const onHomeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='home']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutClick = useCallback(() => {
    navigate("/about-us-page");
  }, [navigate]);

  const openProfile1 = useCallback(() => {
    setProfile1Open(true);
  }, []);

  const closeProfile1 = useCallback(() => {
    setProfile1Open(false);
  }, []);

  const onProceedButtonClick = useCallback(() => {
    navigate("/rescue-page-2");
  }, [navigate]);

  return (
    <>
      <div className="rescue-page-1">
        <nav className="header10">
          <div className="nav10">
            <div className="logo10">
              <img className="logo-icon11" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name11">StrayHelp</p>
            </div>
            <div className="links10">
              <button className="home10" onClick={onHomeClick}>
                Home
              </button>
              <button className="about10" onClick={onAboutClick}>
                About
              </button>
              <button className="profile10" onClick={openProfile1}>
                Profile
              </button>
            </div>
          </div>
        </nav>
        <div className="rescue-1">
          <div className="rescue-head">
            <h1 className="rescue3">Rescue</h1>
            <p className="rescue-quote">
              Be a hero to a furry friend in need! Click to support our rescue
              efforts, giving stray animals a chance at a better life and a
              loving home.
            </p>
          </div>
          <div className="rescue-images">
            <img className="img-1-icon" alt="" src="/img-11@2x.png" />
            <img className="img-1-icon" alt="" src="/img-21@2x.png" />
            <img className="img-1-icon" alt="" src="/img-31@2x.png" />
            <img className="img-4-icon" alt="" src="/img-41@2x.png" />
          </div>
          <div className="detail-form">
            <div className="rescue-form-info">
              <div className="fill-details">
                <h2 className="fill-details1">Fill Details</h2>
              </div>
              <div className="rescue-form">
                <div className="name-section1">
                  <div className="issue">
                    <h2 className="describe-issue">Your Name</h2>
                  </div>
                  <div className="name-box">
                    <input className="issue-input" type="text" />
                  </div>
                </div>
                <div className="issue-section">
                  <div className="issue">
                    <h2 className="describe-issue">Email</h2>
                  </div>
                  <div className="email-box">
                    <input className="issue-input" type="email" />
                  </div>
                </div>
                <div className="issue-section">
                  <div className="issue">
                    <h3 className="describe-issue">Describe Issue</h3>
                  </div>
                  <div className="email-box">
                    <input className="issue-input" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <button className="proceed-button" onClick={onProceedButtonClick}>
              <div className="proceed">Proceed</div>
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

export default RescuePage1;
