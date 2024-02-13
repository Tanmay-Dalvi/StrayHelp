import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./DoctorsPage.css";

const DoctorsPage = () => {
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
      <div className="doctors-page">
        <nav className="header7">
          <div className="nav7">
            <div className="logo7">
              <img className="logo-icon8" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name8">StrayHelp</p>
            </div>
            <div className="links7">
              <button className="home7" onClick={onHomeClick}>
                Home
              </button>
              <button className="about7" onClick={onAboutClick}>
                About
              </button>
              <button className="profile7" onClick={openProfile1}>
                Profile
              </button>
            </div>
          </div>
        </nav>
        <div className="doctors-section">
          <div className="doctor-text">
            <h1 className="strayhelp-doctors">StrayHelp Doctors</h1>
            <p className="our-team-includes">
              Our team includes seasoned veterinarians with years of experience
              in providing comprehensive care for pets. Their commitment to the
              well-being of animals is reflected in their compassionate approach
              to veterinary medicine. Whether it's routine check-ups, surgeries,
              or emergency care, our veterinarians are dedicated to ensuring the
              health and happiness of your beloved pets.
            </p>
          </div>
          <input
            className="search-loc1"
            placeholder="Enter Location"
            type="text"
          />
          <div className="nearby-doctors">
            <p className="nearby-doctors1">Nearby Doctors</p>
          </div>
          <div className="doctors1">
            <div className="doc-a">
              <div className="doctor-1">
                <div className="doc-img">
                  <img
                    className="doc-img-child"
                    alt=""
                    src="/rectangle-32@2x.png"
                  />
                </div>
                <div className="doc-name">
                  <p className="name1">Dr. Marcus Rodriguez</p>
                </div>
                <div className="doc-loc">
                  <div className="map-pin">
                    <img className="vector-icon8" alt="" src="/vector.svg" />
                    <img className="vector-icon9" alt="" src="/vector.svg" />
                  </div>
                  <p className="doctor-loc">Sydney, Australia</p>
                </div>
                <button className="call-btn">
                  <div className="vector8">
                    <img className="vector-icon10" alt="" src="/vector.svg" />
                  </div>
                  <p className="contact">Contact</p>
                </button>
                <button className="mail-btn">
                  <div className="mail">
                    <img className="vector-icon11" alt="" src="/vector.svg" />
                    <img className="vector-icon12" alt="" src="/vector.svg" />
                  </div>
                  <p className="contact">Email</p>
                </button>
              </div>
              <div className="doctor-2">
                <div className="doc-img">
                  <img
                    className="doc-img-child"
                    alt=""
                    src="/rectangle-33@2x.png"
                  />
                </div>
                <div className="doc-name">
                  <p className="name1">Dr. Liam Chang</p>
                </div>
                <div className="doc-loc1">
                  <div className="map-pin">
                    <img className="vector-icon8" alt="" src="/vector.svg" />
                    <img className="vector-icon9" alt="" src="/vector.svg" />
                  </div>
                  <p className="doctor-loc">Vancouver, Canada</p>
                </div>
                <button className="call-btn">
                  <div className="vector8">
                    <img className="vector-icon10" alt="" src="/vector.svg" />
                  </div>
                  <p className="contact">Contact</p>
                </button>
                <button className="mail-btn">
                  <div className="mail">
                    <img className="vector-icon11" alt="" src="/vector.svg" />
                    <img className="vector-icon12" alt="" src="/vector.svg" />
                  </div>
                  <p className="contact">Email</p>
                </button>
              </div>
            </div>
            <div className="doc-b">
              <div className="doctor-1">
                <div className="doc-img2">
                  <img
                    className="doc-img-child"
                    alt=""
                    src="/rectangle-33@2x.png"
                  />
                </div>
                <div className="doc-name">
                  <p className="name1">Dr. Oliver Kim</p>
                </div>
                <div className="doc-loc2">
                  <div className="map-pin">
                    <img className="vector-icon8" alt="" src="/vector.svg" />
                    <img className="vector-icon9" alt="" src="/vector.svg" />
                  </div>
                  <p className="doctor-loc">Seoul, South Korea</p>
                </div>
                <button className="call-btn">
                  <div className="vector8">
                    <img className="vector-icon10" alt="" src="/vector.svg" />
                  </div>
                  <p className="contact">Contact</p>
                </button>
                <button className="mail-btn">
                  <div className="mail">
                    <img className="vector-icon11" alt="" src="/vector.svg" />
                    <img className="vector-icon12" alt="" src="/vector.svg" />
                  </div>
                  <p className="contact">Email</p>
                </button>
              </div>
              <div className="doctor-1">
                <div className="doc-img2">
                  <img
                    className="doc-img-child"
                    alt=""
                    src="/rectangle-33@2x.png"
                  />
                </div>
                <div className="doc-name">
                  <p className="name1">Dr. Zara Ibrahim</p>
                </div>
                <div className="doc-loc2">
                  <div className="map-pin">
                    <img className="vector-icon8" alt="" src="/vector.svg" />
                    <img className="vector-icon9" alt="" src="/vector.svg" />
                  </div>
                  <p className="doctor-loc">Cape Town, South Africa</p>
                </div>
                <button className="call-btn">
                  <div className="vector8">
                    <img className="vector-icon10" alt="" src="/vector.svg" />
                  </div>
                  <p className="contact">Contact</p>
                </button>
                <button className="mail-btn">
                  <div className="mail">
                    <img className="vector-icon11" alt="" src="/vector.svg" />
                    <img className="vector-icon12" alt="" src="/vector.svg" />
                  </div>
                  <p className="contact">Email</p>
                </button>
              </div>
            </div>
            <div className="doc-b">
              <div className="doctor-1">
                <div className="doc-img2">
                  <img
                    className="doc-img-child"
                    alt=""
                    src="/rectangle-33@2x.png"
                  />
                </div>
                <div className="doc-name">
                  <p className="name5">Dr. Isabella Santos</p>
                </div>
                <div className="doc-loc2">
                  <div className="map-pin">
                    <img className="vector-icon8" alt="" src="/vector.svg" />
                    <img className="vector-icon9" alt="" src="/vector.svg" />
                  </div>
                  <p className="doctor-loc">Rio de Janeiro, Brazil</p>
                </div>
                <button className="call-btn">
                  <div className="vector8">
                    <img className="vector-icon10" alt="" src="/vector.svg" />
                  </div>
                  <p className="contact">Contact</p>
                </button>
                <button className="mail-btn">
                  <div className="mail">
                    <img className="vector-icon11" alt="" src="/vector.svg" />
                    <img className="vector-icon12" alt="" src="/vector.svg" />
                  </div>
                  <p className="contact">Email</p>
                </button>
              </div>
              <div className="doctor-1">
                <div className="doc-img2">
                  <img
                    className="doc-img-child"
                    alt=""
                    src="/rectangle-33@2x.png"
                  />
                </div>
                <div className="doc-name">
                  <p className="doctor-loc">Dr. Maxwell O'Connor</p>
                </div>
                <div className="doc-loc2">
                  <div className="map-pin">
                    <img className="vector-icon8" alt="" src="/vector.svg" />
                    <img className="vector-icon9" alt="" src="/vector.svg" />
                  </div>
                  <p className="doctor-loc">Dublin, Ireland</p>
                </div>
                <button className="call-btn">
                  <div className="vector8">
                    <img className="vector-icon10" alt="" src="/vector.svg" />
                  </div>
                  <p className="contact">Contact</p>
                </button>
                <button className="mail-btn">
                  <div className="mail">
                    <img className="vector-icon11" alt="" src="/vector.svg" />
                    <img className="vector-icon12" alt="" src="/vector.svg" />
                  </div>
                  <p className="contact">Email</p>
                </button>
              </div>
            </div>
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

export default DoctorsPage;
