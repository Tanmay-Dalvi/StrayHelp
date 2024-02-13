import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./AdoptCatPage.css";

const AdoptCatPage = () => {
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

  const onDogButtonClick = useCallback(() => {
    navigate("/adopt-dog-page");
  }, [navigate]);

  const onCatButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='catButton']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <>
      <div className="adopt-cat-page">
        <nav className="header4">
          <div className="nav4">
            <div className="logo4">
              <img className="logo-icon5" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name5">StrayHelp</p>
            </div>
            <div className="links4">
              <button className="home4" onClick={onHomeClick}>
                Home
              </button>
              <button className="about4" onClick={onAboutClick}>
                About
              </button>
              <button className="profile4" onClick={openProfile1}>
                Profile
              </button>
            </div>
          </div>
        </nav>
        <div className="adoption-page">
          <div className="adoption-head">
            <h1 className="adoption-heading">Adoption</h1>
            <p className="adoption-text">
              "Experience the joy of companionship with StrayHelp's Adopt a
              Stray feature! Connect with your future furry family member and
              make a difference in a stray animal's life. Transforming both
              their world and yours, join us in creating a compassionate world
              where every wag of a tail is a testament to the enduring bond
              between humans and animals. Adopt today and spread love without
              boundaries!"
            </p>
          </div>
          <div className="buttons">
            <button className="dog-button" onClick={onDogButtonClick}>
              <p className="dogs">Dogs</p>
            </button>
            <button
              className="cat-button"
              data-scroll-to="catButton"
              onClick={onCatButtonClick}
            >
              <p className="dogs">Cats</p>
            </button>
          </div>
          <div className="pet-list">
            <div className="pet-group">
              <div className="pet-set">
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">OLIVER</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="male">Male</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">14 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="los-angelas-usa">Los Angelas, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="owner-name">Olivia Harris</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">CHLOE</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="female">Female</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">16 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="vancouver-canada">
                              Vancouver, Canada
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="months">Ethan Lee</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pet-set1">
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">SIMBA</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="male">Male</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months2">9 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="rome-italy">Rome, Italy</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="owner-name2">Ava Martinez</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">LUNA</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="female">Female</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">13 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="paris-france">Paris, France</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="paris-france">Liam Garcia</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pet-group1">
              <div className="pet-set1">
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">TIGER</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="female">Female</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months2">7 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="mumbai-india">Mumbai, India</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="owner-name4">Isabella patel</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">CLEO</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="male">Male</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">18 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="los-angelas-usa">Cape Town, Africa</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="owner-name5">Noah Mbeki</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pet-set1">
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">GIZMO</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="female">Female</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">14 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location6">Location :</p>
                            <p className="moscow-russia">Moscow, Russia</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="owner-name6">Sophia Ivanova</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">MOCHA</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="male">Male</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">15 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="mumbai-india">Beijing, China</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="owner-name7">Lucas Wang</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pet-list1">
            <div className="pet-group">
              <div className="pet-set4">
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">OLIVER</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="male">Male</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">14 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="los-angelas-usa">Los Angelas, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="owner-name">Olivia Harris</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">CHLOE</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="female">Female</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">16 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="vancouver-canada">
                              Vancouver, Canada
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="months">Ethan Lee</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pet-group">
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">SIMBA</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="male">Male</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months2">9 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="rome-italy">Rome, Italy</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="owner-name2">Ava Martinez</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">LUNA</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="female">Female</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">13 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="paris-france">Paris, France</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="paris-france">Liam Garcia</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pet-group1">
              <div className="pet-group">
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">TIGER</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="female">Female</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months2">7 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="mumbai-india">Mumbai, India</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="owner-name4">Isabella patel</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">CLEO</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="male">Male</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">18 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="los-angelas-usa">Cape Town, Africa</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="owner-name5">Noah Mbeki</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pet-group">
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">GIZMO</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="female">Female</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">14 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location6">Location :</p>
                            <p className="moscow-russia">Moscow, Russia</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="owner-name6">Sophia Ivanova</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data">
                  <div className="pet">
                    <div className="pet-image">
                      <img
                        className="pet-img-icon"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="oliver">MOCHA</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="male">Male</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">15 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="mumbai-india">Beijing, China</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="owner-name7">Lucas Wang</p>
                        </div>
                        <div className="contact-button">
                          <button className="contact-now">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default AdoptCatPage;
