import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./RescuePage.css";

const RescuePage = () => {
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

  const onContactDrClick = useCallback(() => {
    navigate("/our-doctors");
  }, [navigate]);

  const onHelpBtnClick = useCallback(() => {
    navigate("/contact-vol-page");
  }, [navigate]);

  return (
    <>
      <div className="rescue-page-2">
        <nav className="header11">
          <div className="nav11">
            <div className="logo11">
              <img className="logo-icon12" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name12">StrayHelp</p>
            </div>
            <div className="links11">
              <button className="home11" onClick={onHomeClick}>
                Home
              </button>
              <button className="about11" onClick={onAboutClick}>
                About
              </button>
              <button className="profile11" onClick={openProfile1}>
                Profile
              </button>
            </div>
          </div>
        </nav>
        <div className="rescue-2">
          <div className="rescue-head1">
            <h1 className="rescue4">Rescue</h1>
            <p className="rescue-quote1">
              Be a hero to a furry friend in need! Click to support our rescue
              efforts, giving stray animals a chance at a better life and a
              loving home.
            </p>
          </div>
          <div className="rescue-images1">
            <img className="img-1-icon1" alt="" src="/img-1@2x.png" />
            <img className="img-1-icon1" alt="" src="/img-2@2x.png" />
            <img className="img-1-icon1" alt="" src="/img-3@2x.png" />
            <img className="img-1-icon1" alt="" src="/img-4@2x.png" />
          </div>
          <div className="select">
            <h2 className="select1">Select</h2>
          </div>
          <div className="buttons3">
            <button className="contact-dr" onClick={onContactDrClick}>
              <div className="contact-doctor">Contact Doctor</div>
            </button>
            <button className="contact-dr" onClick={onHelpBtnClick}>
              <div className="call-help">Call for Help</div>
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

export default RescuePage;
