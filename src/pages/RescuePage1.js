import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./RescuePage1.css";

const RescuePage1 = () => {
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

  const onProceedButtonClick = useCallback(() => {
    navigate("/rescue-page-2");
  }, [navigate]);

  return (
    <>
      <div className="rescue-page-1">
        <nav className="header9">
          <div className="nav9">
            <div className="logo10">
              <img className="logo-icon11" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name11">StrayHelp</p>
            </div>
            <div className="links9">
              <button className="home9" onClick={onHomeClick}>
                Home
              </button>
              <button className="about9" onClick={onAboutClick}>
                About
              </button>
              <button className="profile9" onClick={openProfile1}>
                Profile
              </button>
            </div>
          </div>
        </nav>
        <div className="rescue-1">
          <div className="rescue-head2">
            <h1 className="rescue4">Rescue</h1>
            <p className="rescue-quote2">
              Be a hero to a furry friend in need! Click to support our rescue
              efforts, giving stray animals a chance at a better life and a
              loving home.
            </p>
          </div>
          <div className="rescue-images1">
            <img className="img-1-icon1" alt="" src="/img-1@2x.png" />
            <img className="img-1-icon1" alt="" src="/img-2@2x.png" />
            <img className="img-1-icon1" alt="" src="/img-3@2x.png" />
            <img className="img-4-icon1" alt="" src="/img-4@2x.png" />
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
          <footer className="logo11">
            <img className="logo-icon12" alt="" src="/logo-icon@2x.png" />
            <p className="logo-name12">StrayHelp</p>
          </footer>
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
