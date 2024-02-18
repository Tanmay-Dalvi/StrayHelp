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
            <button className="dog-button1" onClick={onDogButtonClick}>
              <p className="dogs1">Dogs</p>
            </button>
            <button
              className="cat-button1"
              data-scroll-to="catButton"
              onClick={onCatButtonClick}
            >
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
                        src="/pet-img8@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">OLIVER</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="male8">Male</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">14 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="los-angelas-usa">Los Angelas, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic1@2x.png"
                          />
                          <p className="owner-name16">Olivia Harris</p>
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
                        src="/pet-img9@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">CHLOE</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="female8">Female</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">16 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="vancouver-canada">
                              Vancouver, Canada
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
                          <p className="months16">Ethan Lee</p>
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
                        src="/pet-img10@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">SIMBA</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="male8">Male</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months18">9 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="rome-italy">Rome, Italy</p>
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
                          <p className="owner-name18">Ava Martinez</p>
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
                        src="/pet-img11@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">LUNA</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="female8">Female</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">13 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="paris-france2">Paris, France</p>
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
                          <p className="paris-france2">Liam Garcia</p>
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
                        src="/pet-img12@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">TIGER</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="female8">Female</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months18">7 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="mumbai-india">Mumbai, India</p>
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
                          <p className="owner-name20">Isabella patel</p>
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
                        src="/pet-img13@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">CLEO</p>
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
                            <p className="los-angelas-usa">Cape Town, Africa</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic1@2x.png"
                          />
                          <p className="owner-name21">Noah Mbeki</p>
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
                        src="/pet-img14@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">GIZMO</p>
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
                            <p className="moscow-russia">Moscow, Russia</p>
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
                          <p className="owner-name22">Sophia Ivanova</p>
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
                        src="/pet-img15@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">MOCHA</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="male8">Male</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">15 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="mumbai-india">Beijing, China</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic1@2x.png"
                          />
                          <p className="owner-name23">Lucas Wang</p>
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
                        src="/pet-img8@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">OLIVER</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="male8">Male</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">14 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="los-angelas-usa">Los Angelas, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic1@2x.png"
                          />
                          <p className="owner-name16">Olivia Harris</p>
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
                        src="/pet-img9@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">CHLOE</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="female8">Female</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">16 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="vancouver-canada">
                              Vancouver, Canada
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
                          <p className="months16">Ethan Lee</p>
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
                        src="/pet-img10@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">SIMBA</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="male8">Male</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months18">9 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="rome-italy">Rome, Italy</p>
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
                          <p className="owner-name18">Ava Martinez</p>
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
                        src="/pet-img11@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">LUNA</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="female8">Female</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">13 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="paris-france2">Paris, France</p>
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
                          <p className="paris-france2">Liam Garcia</p>
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
                        src="/pet-img12@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">TIGER</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="female8">Female</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months18">7 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="mumbai-india">Mumbai, India</p>
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
                          <p className="owner-name20">Isabella patel</p>
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
                        src="/pet-img13@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">CLEO</p>
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
                            <p className="los-angelas-usa">Cape Town, Africa</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic1@2x.png"
                          />
                          <p className="owner-name21">Noah Mbeki</p>
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
                        src="/pet-img14@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">GIZMO</p>
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
                            <p className="moscow-russia">Moscow, Russia</p>
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
                          <p className="owner-name22">Sophia Ivanova</p>
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
                        src="/pet-img15@2x.png"
                      />
                    </div>
                    <div className="details16">
                      <div className="pet-info-sec16">
                        <div className="pet-name16">
                          <p className="oliver">MOCHA</p>
                        </div>
                        <div className="pet-details16">
                          <div className="pet-gender16">
                            <p className="gender16">Gender :</p>
                            <p className="male8">Male</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="age16">Age :</p>
                            <p className="months16">15 months</p>
                          </div>
                          <div className="pet-gender16">
                            <p className="location16">Location :</p>
                            <p className="mumbai-india">Beijing, China</p>
                          </div>
                        </div>
                      </div>
                      <div className="owner32">
                        <p className="owner33">OWNER</p>
                        <div className="owner-details16">
                          <img
                            className="prof-pic-icon16"
                            alt=""
                            src="/prof-pic1@2x.png"
                          />
                          <p className="owner-name23">Lucas Wang</p>
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

export default AdoptCatPage;
