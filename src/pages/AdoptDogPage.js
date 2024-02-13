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
        <nav className="header5">
          <div className="nav5">
            <div className="logo5">
              <img className="logo-icon6" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name6">StrayHelp</p>
            </div>
            <div className="links5">
              <button className="home5" onClick={onHomeClick}>
                Home
              </button>
              <button className="about5" onClick={onAboutClick}>
                About
              </button>
              <button className="profile5" onClick={openProfile1}>
                Profile
              </button>
            </div>
          </div>
        </nav>
        <div className="adoption-page1">
          <div className="adoption-head1">
            <h1 className="adoption-heading1">Adoption</h1>
            <p className="adoption-text1">
              "Experience the joy of companionship with StrayHelp's Adopt a
              Stray feature! Connect with your future furry family member and
              make a difference in a stray animal's life. Transforming both
              their world and yours, join us in creating a compassionate world
              where every wag of a tail is a testament to the enduring bond
              between humans and animals. Adopt today and spread love without
              boundaries!"
            </p>
          </div>
          <div className="buttons1">
            <button
              className="dog-button1"
              data-scroll-to="dogButton"
              onClick={onDogButtonClick}
            >
              <p className="dogs1">Dogs</p>
            </button>
            <button className="cat-button1" onClick={onCatButtonClick}>
              <p className="dogs1">Cats</p>
            </button>
          </div>
          <div className="pet-list2">
            <div className="pet-group4">
              <div className="pet-set8">
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">MAX</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="male8">Male</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">12 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="bangkok-thailand">
                              Bangkok, Thailand
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="london-uk">Sarah Johnson</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">LUNA</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="female8">Female</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months17">4months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="new-york-usa">New York, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="owner-name17">David Smith</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pet-set9">
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">ROCKY</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="male8">Male</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">16 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="london-uk">London, UK</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="london-uk">Emily Davis</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">BAILEY</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="female8">Female</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months19">4 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="london-uk">Paris, France</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="london-uk">Thomas Miller</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pet-group5">
              <div className="pet-set9">
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">BELLA</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="female8">Female</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">21 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="london-uk">Barcelona, Spain</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="london-uk">Jessica Turner</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">CHARLIE</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="male8">Male</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">18 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="london-uk">Tokyo, Japan</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="london-uk">Michael Chen</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pet-set9">
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">DAISY</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="female8">Female</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">14 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location22">Location :</p>
                            <p className="london-uk">Berlin, German</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="london-uk">Sophia Wang</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">MILO</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="male8">Male</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months23">22 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="london-uk">Toronto, Canada</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="london-uk">Daniel Rodriguez</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pet-list3">
            <div className="pet-group4">
              <div className="pet-set12">
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">MAX</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="male8">Male</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">12 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="bangkok-thailand">
                              Bangkok, Thailand
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="london-uk">Sarah Johnson</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">LUNA</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="female8">Female</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months17">4months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="new-york-usa">New York, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="owner-name17">David Smith</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pet-group4">
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">ROCKY</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="male8">Male</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">16 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="london-uk">London, UK</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="london-uk">Emily Davis</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">BAILEY</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="female8">Female</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months19">4 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="london-uk">Paris, France</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="london-uk">Thomas Miller</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pet-group5">
              <div className="pet-group4">
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">BELLA</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="female8">Female</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">21 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="london-uk">Barcelona, Spain</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="london-uk">Jessica Turner</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">CHARLIE</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="male8">Male</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">18 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="london-uk">Tokyo, Japan</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="london-uk">Michael Chen</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pet-group4">
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">DAISY</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="female8">Female</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">14 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location22">Location :</p>
                            <p className="london-uk">Berlin, German</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="london-uk">Sophia Wang</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pet-data16">
                  <div className="pet16">
                    <div className="pet-image16">
                      <img
                        className="pet-img-icon16"
                        alt=""
                        src="/pet-img@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="max">MILO</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="male8">Male</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months23">22 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="london-uk">Toronto, Canada</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic@2x.png"
                          />
                          <p className="london-uk">Daniel Rodriguez</p>
                        </div>
                        <div className="contact-button16">
                          <button className="contact-now16">CONTACT NOW</button>
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
