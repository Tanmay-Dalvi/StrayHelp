import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./ContactVolPage.css";

const ContactVolPage = () => {
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

  const onGoogleMapClick = useCallback(() => {
    window.location.href =
      "https://www.google.com/maps/d/u/0/viewer?mid=1corTOhpZ9jh_SY1XMAyd2MWljCLlkr4&ll=12.039062548277203%2C75.54085465&z=3";
  }, []);

  return (
    <>
      <div className="contact-vol-page">
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
        <div className="call-volunteer-page">
          <div className="rescue-head">
            <h1 className="rescue2">Rescue</h1>
            <p className="rescue-quote">
              Be a hero to a furry friend in need! Click to support our rescue
              efforts, giving stray animals a chance at a better life and a
              loving home.
            </p>
          </div>
          <div className="search-for-vlntr">
            <p className="search-for-nearby">Search For Nearby Volunteers</p>
          </div>
          <input
            className="search-loc"
            placeholder="Enter Location"
            type="text"
          />
          <iframe
            className="google-map"
            src={`https://www.google.com/maps/d/u/0/embed?mid=1corTOhpZ9jh_SY1XMAyd2MWljCLlkr4&ehbc=2E312F&noprof=1`}
            onClick={onGoogleMapClick}
          />
          <div className="volunteers">
            <div className="volunteer-info">
              <div className="volunteer2">
                <img
                  className="vlntr-img-icon"
                  alt=""
                  src="/vlntr-img@2x.png"
                />
                <p className="vlntr-name">Mr. Oliver Jenkins</p>
              </div>
              <div className="vlntr-loc">
                <p className="vlntr-address">Sydney, Australia</p>
              </div>
              <button className="call-vlntr">
                <div className="vector">
                  <img className="vector-icon" alt="" src="/vector.svg" />
                </div>
                <p className="call">Call</p>
              </button>
            </div>
            <div className="volunteer-info1">
              <div className="volunteer3">
                <img
                  className="vlntr-img-icon1"
                  alt=""
                  src="/vlntr-img@2x.png"
                />
                <p className="vlntr-name1">Mr. David Rodrigez</p>
              </div>
              <div className="vlntr-loc1">
                <p className="vlntr-name1">Mumbai, India</p>
              </div>
              <button className="call-vlntr">
                <div className="vector">
                  <img className="vector-icon" alt="" src="/vector.svg" />
                </div>
                <p className="call">Call</p>
              </button>
            </div>
            <div className="volunteer-info1">
              <div className="volunteer4">
                <img
                  className="vlntr-img-icon1"
                  alt=""
                  src="/vlntr-img@2x.png"
                />
                <p className="vlntr-name2">Ms. Elena Petrov</p>
              </div>
              <div className="vlntr-loc1">
                <p className="vlntr-name1">London, UK</p>
              </div>
              <button className="call-vlntr">
                <div className="vector">
                  <img className="vector-icon" alt="" src="/vector.svg" />
                </div>
                <p className="call">Call</p>
              </button>
            </div>
            <div className="volunteer-info1">
              <div className="volunteer5">
                <img
                  className="vlntr-img-icon1"
                  alt=""
                  src="/vlntr-img@2x.png"
                />
                <p className="vlntr-name1">Mr. Mac Thompson</p>
              </div>
              <div className="vlntr-loc1">
                <p className="vlntr-name1">Tokyo, Japan</p>
              </div>
              <button className="call-vlntr">
                <div className="vector">
                  <img className="vector-icon" alt="" src="/vector.svg" />
                </div>
                <p className="call">Call</p>
              </button>
            </div>
          </div>
          <div className="mob-vol">
            <div className="volunteers1">
              <div className="volunteer-info4">
                <div className="volunteer6">
                  <img
                    className="vlntr-img-icon4"
                    alt=""
                    src="/vlntr-img@2x.png"
                  />
                  <p className="vlntr-name4">Mr. Oliver Jenkins</p>
                </div>
                <div className="volunteer-loc">
                  <p className="vlntr-address4">Barcelona, Spain</p>
                </div>
                <button className="call-vlntr4">
                  <div className="vector4">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </div>
                  <p className="call4">Call</p>
                </button>
              </div>
              <div className="volunteer-info4">
                <div className="volunteer6">
                  <img
                    className="vlntr-img-icon4"
                    alt=""
                    src="/vlntr-img@2x.png"
                  />
                  <p className="vlntr-name4">Ms. Elena Petrov</p>
                </div>
                <div className="volunteer-loc1">
                  <p className="vlntr-address5">Moscow, Russia</p>
                </div>
                <button className="call-vlntr4">
                  <div className="vector4">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </div>
                  <p className="call4">Call</p>
                </button>
              </div>
              <div className="volunteer-info4">
                <div className="volunteer6">
                  <img
                    className="vlntr-img-icon4"
                    alt=""
                    src="/vlntr-img@2x.png"
                  />
                  <p className="vlntr-name4">Mr. Raj More</p>
                </div>
                <div className="volunteer-loc1">
                  <p className="vlntr-address5">Pune, India</p>
                </div>
                <button className="call-vlntr4">
                  <div className="vector4">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </div>
                  <p className="call4">Call</p>
                </button>
              </div>
              <div className="volunteer-info4">
                <div className="volunteer6">
                  <img
                    className="vlntr-img-icon4"
                    alt=""
                    src="/vlntr-img@2x.png"
                  />
                  <p className="vlntr-name4">Mr. David Rodrigez</p>
                </div>
                <div className="volunteer-loc1">
                  <p className="vlntr-address5">Sydney, Australia</p>
                </div>
                <button className="call-vlntr4">
                  <div className="vector4">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </div>
                  <p className="call4">Call</p>
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

export default ContactVolPage;
