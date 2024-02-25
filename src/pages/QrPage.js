import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./QrPage.css";

const QrPage = () => {
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
      <div className="qr-page">
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
        <div className="scan-qr-parent">
          <p className="scan-qr1">Scan QR</p>
          <p className="get-info-of">Get Info of a Pet</p>
        </div>
        <div className="qr-sec-mobl">
          <div className="qr-camera" />
          <p className="or">or</p>
          <button className="upld-img-btn">
            <div className="landscape-2-photos-photo-land">
              <img
                className="landscape-2-photos-photo-land-icon"
                alt=""
                src="/galleryicon.svg"
              />
            </div>
            <p className="upload-image">Upload Image</p>
          </button>
        </div>
        <div className="qr-section">
          <button className="upld-btn">
            <div className="landscape-2-photos-photo-land1">
              <img
                className="landscape-2-photos-photo-land-icon1"
                alt=""
                src="/galleryicon.svg"
              />
            </div>
            <p className="upload-image1">Upload Image</p>
          </button>
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

export default QrPage;
