import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./AboutUsPage.css";

const AboutUsPage = () => {
  const navigate = useNavigate();
  const [isProfile1Open, setProfile1Open] = useState(false);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='about']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const openProfile1 = useCallback(() => {
    setProfile1Open(true);
  }, []);

  const closeProfile1 = useCallback(() => {
    setProfile1Open(false);
  }, []);

  const onRescueButtonClick = useCallback(() => {
    navigate("/rescue-page-1");
  }, [navigate]);

  const onAdoptButtonClick = useCallback(() => {
    navigate("/adopt-dog-page");
  }, [navigate]);

  const onDonateButtonClick = useCallback(() => {
    navigate("/donation-page");
  }, [navigate]);

  const onVolunteerButtonClick = useCallback(() => {
    navigate("/volunteer-page");
  }, [navigate]);

  return (
    <>
      <div className="about-us-page">
        <nav className="header12">
          <div className="nav12">
            <div className="logo14">
              <img className="logo-icon15" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name15">StrayHelp</p>
            </div>
            <div className="links12">
              <button className="home12" onClick={onHomeClick}>
                Home
              </button>
              <button
                className="about12"
                data-scroll-to="about"
                onClick={onAboutClick}
              >
                About
              </button>
              <button className="profile12" onClick={openProfile1}>
                Profile
              </button>
            </div>
          </div>
        </nav>
        <div className="about-us">
          <div className="head">
            <h1 className="about-strayhelp">About StrayHelp</h1>
          </div>
          <div className="main-text">
            <p className="welcome-to-strayhelp-container">
              <span>
                <span className="welcome-to-strayhelp">
                  Welcome to StrayHelp, a sanctuary of compassion dedicated to
                  the protection, rescue, and advocacy for stray animals. In a
                  world where the plight of these vulnerable beings often goes
                  unnoticed, we stand united with a simple yet profound mission:
                  to be their voice and ensure their well-being. StrayHelp
                  serves as a lifeline, actively engaging in the rescue and care
                  of injured and helpless animals, offering a glimmer of hope to
                  those who have been left behind.
                </span>
                <span className="welcome-to-strayhelp">&nbsp;</span>
                <span className="welcome-to-strayhelp">
                  At the heart of our platform is the belief that every stray
                  animal deserves more than mere survival—they deserve a chance
                  to thrive in a world that recognizes their intrinsic value.
                  Beyond our dedicated rescue efforts, StrayHelp invites you to
                  be a part of a transformative journey through adoption.
                  Families are encouraged to open their hearts and homes to
                  these deserving animals, creating lasting connections that
                  transcend species and redefine the meaning of companionship.
                </span>
                <span className="welcome-to-strayhelp">&nbsp;</span>
                <span className="welcome-to-strayhelp">
                  For those who seek to make a tangible impact, StrayHelp
                  provides an avenue for generosity through donations. By
                  contributing food and supplies, you play a crucial role in
                  ensuring that no stray animal goes to bed hungry. This
                  community-driven approach fosters a sense of collective
                  responsibility, emphasizing that change begins with small acts
                  of kindness.
                </span>
                <span className="welcome-to-strayhelp">&nbsp;</span>
                <span className="welcome-to-strayhelp">
                  StrayHelp is not just a platform; it's a community—a gathering
                  of like-minded individuals driven by a shared love for
                  animals. We extend an invitation for you to become a
                  volunteer, an active participant in our rescue missions,
                  outreach programs, and community-building initiatives.
                  Together, we amplify our impact and create a ripple effect of
                  compassion that reaches far beyond the digital realm.
                </span>
                <span className="welcome-to-strayhelp">&nbsp;</span>
                <span className="welcome-to-strayhelp">
                  In essence, StrayHelp is a movement, an opportunity for
                  everyone to contribute to reshaping the narrative for stray
                  animals. Every life deserves care, compassion, and a chance to
                  thrive. Join us in uniting hearts, one paw at a time, and be a
                  part of the StrayHelp family where empathy transforms into
                  meaningful action.
                </span>
              </span>
            </p>
          </div>
          <div className="bottom-btn">
            <h2 className="explore-services">Explore Services</h2>
            <div className="buttons3">
              <button className="rescue-button" onClick={onRescueButtonClick}>
                <p className="rescue5">Rescue</p>
                <div className="arrow-right">
                  <img className="vector-icon38" alt="" src="/vector7.svg" />
                  <img className="vector-icon39" alt="" src="/vector8.svg" />
                </div>
              </button>
              <button className="adopt-button" onClick={onAdoptButtonClick}>
                <p className="rescue5">Adopt</p>
                <div className="arrow-right">
                  <img className="vector-icon38" alt="" src="/vector7.svg" />
                  <img className="vector-icon39" alt="" src="/vector8.svg" />
                </div>
              </button>
              <button className="donate-button1" onClick={onDonateButtonClick}>
                <p className="rescue5">Donate</p>
                <div className="arrow-right">
                  <img className="vector-icon38" alt="" src="/vector7.svg" />
                  <img className="vector-icon39" alt="" src="/vector8.svg" />
                </div>
              </button>
              <button
                className="volunteer-button"
                onClick={onVolunteerButtonClick}
              >
                <p className="rescue5">Volunteer</p>
                <div className="arrow-right">
                  <img className="vector-icon38" alt="" src="/vector7.svg" />
                  <img className="vector-icon39" alt="" src="/vector8.svg" />
                </div>
              </button>
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

export default AboutUsPage;
