import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./AdoptDogPage.css";

const AdoptDogPage = () => {
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
    const anchor = document.querySelector("[data-scroll-to='dogButton']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onCatButtonClick = useCallback(() => {
    navigate("/adopt-cat-page");
  }, [navigate]);

  return (
    <>
      <div className="adopt-dog-page">
        <nav className="header3">
          <div className="nav3">
            <div className="logo3">
              <img className="logo-icon4" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name4">StrayHelp</p>
            </div>
            <div className="links3">
              <button className="home3" onClick={onHomeClick}>
                Home
              </button>
              <button className="about3" onClick={onAboutClick}>
                About
              </button>
              <button className="profile3" onClick={openProfile1}>
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
            <button
              className="dog-button"
              data-scroll-to="dogButton"
              onClick={onDogButtonClick}
            >
              <p className="dogs">Dogs</p>
            </button>
            <button className="cat-button" onClick={onCatButtonClick}>
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
                          <p className="max">MAX</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="male">Male</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">12 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="bangkok-thailand">
                              Bangkok, Thailand
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
                          <p className="owner-name">Sarah Johnson</p>
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
                        src="/pet-img1@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="max">LUNA</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="female">Female</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months1">4months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="new-york-usa">New York, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic1@2x.png"
                          />
                          <p className="owner-name1">David Smith</p>
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
                        src="/pet-img2@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="max">ROCKY</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="male">Male</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">16 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="owner-name">London, UK</p>
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
                          <p className="owner-name">Emily Davis</p>
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
                        src="/pet-img3@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="max">BAILEY</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="female">Female</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months3">4 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="owner-name">Paris, France</p>
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
                          <p className="owner-name">Thomas Miller</p>
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
                        src="/pet-img4@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="max">BELLA</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="female">Female</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">21 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="owner-name">Barcelona, Spain</p>
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
                          <p className="owner-name">Jessica Turner</p>
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
                        src="/pet-img5@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="max">CHARLIE</p>
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
                            <p className="owner-name">Tokyo, Japan</p>
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
                          <p className="owner-name">Michael Chen</p>
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
                        src="/pet-img6@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="max">DAISY</p>
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
                            <p className="owner-name">Berlin, German</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic1@2x.png"
                          />
                          <p className="owner-name">Sophia Wang</p>
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
                        src="/pet-img7@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="max">MILO</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="male">Male</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months7">22 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="owner-name">Toronto, Canada</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic1@2x.png"
                          />
                          <p className="owner-name">Daniel Rodriguez</p>
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
                          <p className="max">MAX</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="male">Male</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">12 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="bangkok-thailand">
                              Bangkok, Thailand
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
                          <p className="owner-name">Sarah Johnson</p>
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
                        src="/pet-img1@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="max">LUNA</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="female">Female</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months1">4months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="new-york-usa">New York, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic1@2x.png"
                          />
                          <p className="owner-name1">David Smith</p>
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
                        src="/pet-img2@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="max">ROCKY</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="male">Male</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">16 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="owner-name">London, UK</p>
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
                          <p className="owner-name">Emily Davis</p>
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
                        src="/pet-img3@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="max">BAILEY</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="female">Female</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months3">4 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="owner-name">Paris, France</p>
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
                          <p className="owner-name">Thomas Miller</p>
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
                        src="/pet-img4@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="max">BELLA</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="female">Female</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months">21 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="owner-name">Barcelona, Spain</p>
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
                          <p className="owner-name">Jessica Turner</p>
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
                        src="/pet-img5@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="max">CHARLIE</p>
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
                            <p className="owner-name">Tokyo, Japan</p>
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
                          <p className="owner-name">Michael Chen</p>
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
                        src="/pet-img6@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="max">DAISY</p>
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
                            <p className="owner-name">Berlin, German</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic1@2x.png"
                          />
                          <p className="owner-name">Sophia Wang</p>
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
                        src="/pet-img7@2x.png"
                      />
                    </div>
                    <div className="details">
                      <div className="pet-info-sec">
                        <div className="pet-name">
                          <p className="max">MILO</p>
                        </div>
                        <div className="pet-details">
                          <div className="pet-gender">
                            <p className="gender">Gender :</p>
                            <p className="male">Male</p>
                          </div>
                          <div className="pet-gender">
                            <p className="age">Age :</p>
                            <p className="months7">22 months</p>
                          </div>
                          <div className="pet-gender">
                            <p className="location">Location :</p>
                            <p className="owner-name">Toronto, Canada</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner">
                        <p className="owner1">OWNER</p>
                        <div className="owner-details">
                          <img
                            className="prof-pic-icon"
                            alt=""
                            src="/prof-pic1@2x.png"
                          />
                          <p className="owner-name">Daniel Rodriguez</p>
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

export default AdoptDogPage;
