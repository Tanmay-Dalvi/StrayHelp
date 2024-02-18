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
        <nav className="header6">
          <div className="nav6">
            <div className="logo6">
              <img className="logo-icon7" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name7">StrayHelp</p>
            </div>
            <div className="links6">
              <button className="home6" onClick={onHomeClick}>
                Home
              </button>
              <button className="about6" onClick={onAboutClick}>
                About
              </button>
              <button className="profile6" onClick={openProfile1}>
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
            className="search-loc"
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
                  <p className="name2">Dr. Marcus Rodriguez</p>
                </div>
                <div className="doc-loc">
                  <div className="map-pin">
                    <img className="vector-icon" alt="" src="/vector2.svg" />
                    <img className="vector-icon1" alt="" src="/vector3.svg" />
                  </div>
                  <p className="doctor-loc">Sydney, Australia</p>
                </div>
                <button className="call-btn">
                  <div className="vector">
                    <img className="vector-icon2" alt="" src="/vector4.svg" />
                  </div>
                  <p className="contact">Contact</p>
                </button>
                <button className="mail-btn">
                  <div className="mail">
                    <img className="vector-icon3" alt="" src="/vector5.svg" />
                    <img className="vector-icon4" alt="" src="/vector6.svg" />
                  </div>
                  <p className="contact">Email</p>
                </button>
              </div>
              <div className="doctor-1">
                <div className="doc-img">
                  <img
                    className="doc-img-child"
                    alt=""
                    src="/rectangle-33@2x.png"
                  />
                </div>
                <div className="doc-name">
                  <p className="name2">Dr. Liam Chang</p>
                </div>
                <div className="doc-loc1">
                  <div className="map-pin">
                    <img className="vector-icon" alt="" src="/vector2.svg" />
                    <img className="vector-icon1" alt="" src="/vector3.svg" />
                  </div>
                  <p className="doctor-loc">Vancouver, Canada</p>
                </div>
                <button className="call-btn">
                  <div className="vector">
                    <img className="vector-icon2" alt="" src="/vector4.svg" />
                  </div>
                  <p className="contact">Contact</p>
                </button>
                <button className="mail-btn">
                  <div className="mail">
                    <img className="vector-icon3" alt="" src="/vector5.svg" />
                    <img className="vector-icon4" alt="" src="/vector6.svg" />
                  </div>
                  <p className="contact">Email</p>
                </button>
              </div>
            </div>
            <div className="doc-a">
              <div className="doctor-1">
                <div className="doc-img2">
                  <img
                    className="doc-img-child"
                    alt=""
                    src="/rectangle-331@2x.png"
                  />
                </div>
                <div className="doc-name">
                  <p className="name2">Dr. Oliver Kim</p>
                </div>
                <div className="doc-loc2">
                  <div className="map-pin">
                    <img className="vector-icon" alt="" src="/vector2.svg" />
                    <img className="vector-icon1" alt="" src="/vector3.svg" />
                  </div>
                  <p className="doctor-loc">Seoul, South Korea</p>
                </div>
                <button className="call-btn">
                  <div className="vector">
                    <img className="vector-icon2" alt="" src="/vector4.svg" />
                  </div>
                  <p className="contact">Contact</p>
                </button>
                <button className="mail-btn">
                  <div className="mail">
                    <img className="vector-icon3" alt="" src="/vector5.svg" />
                    <img className="vector-icon4" alt="" src="/vector6.svg" />
                  </div>
                  <p className="contact">Email</p>
                </button>
              </div>
              <div className="doctor-1">
                <div className="doc-img2">
                  <img
                    className="doc-img-child"
                    alt=""
                    src="/rectangle-332@2x.png"
                  />
                </div>
                <div className="doc-name">
                  <p className="name2">Dr. Zara Ibrahim</p>
                </div>
                <div className="doc-loc2">
                  <div className="map-pin">
                    <img className="vector-icon" alt="" src="/vector2.svg" />
                    <img className="vector-icon1" alt="" src="/vector3.svg" />
                  </div>
                  <p className="doctor-loc">Cape Town, South Africa</p>
                </div>
                <button className="call-btn">
                  <div className="vector">
                    <img className="vector-icon2" alt="" src="/vector4.svg" />
                  </div>
                  <p className="contact">Contact</p>
                </button>
                <button className="mail-btn">
                  <div className="mail">
                    <img className="vector-icon3" alt="" src="/vector5.svg" />
                    <img className="vector-icon4" alt="" src="/vector6.svg" />
                  </div>
                  <p className="contact">Email</p>
                </button>
              </div>
            </div>
            <div className="doc-a">
              <div className="doctor-1">
                <div className="doc-img2">
                  <img
                    className="doc-img-child"
                    alt=""
                    src="/rectangle-333@2x.png"
                  />
                </div>
                <div className="doc-name">
                  <p className="name6">Dr. Isabella Santos</p>
                </div>
                <div className="doc-loc2">
                  <div className="map-pin">
                    <img className="vector-icon" alt="" src="/vector2.svg" />
                    <img className="vector-icon1" alt="" src="/vector3.svg" />
                  </div>
                  <p className="doctor-loc">Rio de Janeiro, Brazil</p>
                </div>
                <button className="call-btn">
                  <div className="vector">
                    <img className="vector-icon2" alt="" src="/vector4.svg" />
                  </div>
                  <p className="contact">Contact</p>
                </button>
                <button className="mail-btn">
                  <div className="mail">
                    <img className="vector-icon3" alt="" src="/vector5.svg" />
                    <img className="vector-icon4" alt="" src="/vector6.svg" />
                  </div>
                  <p className="contact">Email</p>
                </button>
              </div>
              <div className="doctor-1">
                <div className="doc-img2">
                  <img
                    className="doc-img-child"
                    alt=""
                    src="/rectangle-334@2x.png"
                  />
                </div>
                <div className="doc-name">
                  <p className="name2">Dr. Maxwell O'Connor</p>
                </div>
                <div className="doc-loc2">
                  <div className="map-pin">
                    <img className="vector-icon" alt="" src="/vector2.svg" />
                    <img className="vector-icon1" alt="" src="/vector3.svg" />
                  </div>
                  <p className="doctor-loc">Dublin, Ireland</p>
                </div>
                <button className="call-btn">
                  <div className="vector">
                    <img className="vector-icon2" alt="" src="/vector4.svg" />
                  </div>
                  <p className="contact">Contact</p>
                </button>
                <button className="mail-btn">
                  <div className="mail">
                    <img className="vector-icon3" alt="" src="/vector5.svg" />
                    <img className="vector-icon4" alt="" src="/vector6.svg" />
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
