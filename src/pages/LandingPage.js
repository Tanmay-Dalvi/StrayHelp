import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isProfile1Open, setProfile1Open] = useState(false);

  const onHomeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='home']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutClick = useCallback(() => {
    navigate("/about-us-page");
  }, [navigate]);

  const openProfile1 = useCallback(() => {
    setProfile1Open(true);
  }, []);

  const closeProfile1 = useCallback(() => {
    setProfile1Open(false);
  }, []);

  const onJoinUsBtnClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  const onRescueBtnClick = useCallback(() => {
    navigate("/rescue-page-1");
  }, [navigate]);

  const onAdoptBtnClick = useCallback(() => {
    navigate("/adopt-dog-page");
  }, [navigate]);

  const onDonateBtnClick = useCallback(() => {
    navigate("/donation-page");
  }, [navigate]);

  const onVolunteerBtnClick = useCallback(() => {
    navigate("/volunteer-page");
  }, [navigate]);

  const onContactDrBtnClick = useCallback(() => {
    navigate("/doctors-page");
  }, [navigate]);

  const onReviewButtonClick = useCallback(() => {
    navigate("/feedback-page");
  }, [navigate]);

  const onQRBtnClick = useCallback(() => {
    navigate("/qr-page");
  }, [navigate]);

  const onChatBotClick = useCallback(() => {
    navigate("/chatbot-page");
  }, [navigate]);

  return (
    <>
      <div className="landing-page">
        <nav className="header">
          <div className="nav">
            <div className="logo">
              <img className="logo-icon" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name">StrayHelp</p>
            </div>
            <div className="links">
              <button
                className="home"
                data-scroll-to="home"
                onClick={onHomeClick}
              >
                Home
              </button>
              <button className="about" onClick={onAboutClick}>
                About
              </button>
              <button className="profile" onClick={openProfile1}>
                Profile
              </button>
            </div>
          </div>
        </nav>
        <div className="hero">
          <img className="hero-img-icon" alt="" src="/hero-img@2x.png" />
          <div className="hero-text">
            <h1 className="heading-1">
              Join us in rewriting the tales of resilience for every injured
              soul
            </h1>
            <p className="text-1">
              Stray animals' lives matter for compassion, biodiversity, and
              community well-being. Protecting and caring for them contributes
              to a more humane and harmonious society.
            </p>
          </div>
          <button className="join-us-btn" onClick={onJoinUsBtnClick}>
            <div className="join-us">Join Us</div>
          </button>
        </div>
        <div className="our-motive">
          <div className="motive-text">
            <h1 className="heading-2">Our Motive</h1>
            <p className="text-2">
              At StrayHelp, we are dedicated to rescuing and rehabilitating
              stray animals in need. Our team of passionate animal lovers works
              tirelessly to provide a safe haven for abandoned and mistreated
              animals. We believe that every animal deserves love, care, and a
              second chance at life. Join us in our mission to make the world a
              better place for our furry friends! Together, we can create a
              world where no animal is left behind.
            </p>
          </div>
          <div className="motive-images">
            <img
              className="motive-img1-icon"
              alt=""
              src="/motive-img1@2x.png"
            />
            <img
              className="motive-img1-icon"
              alt=""
              src="/motive-img2@2x.png"
            />
            <img
              className="motive-img1-icon"
              alt=""
              src="/motive-img3@2x.png"
            />
          </div>
        </div>
        <div className="our-services">
          <h1 className="heading-3">Our Services</h1>
          <div className="rescue">
            <button className="rescue-btn" onClick={onRescueBtnClick}>
              <div className="rescue1">Rescue</div>
            </button>
            <p className="rescue-txt">
              Be a hero to a furry friend in need! Click to support our rescue
              efforts, giving stray animals a chance at a better life and a
              loving home.
            </p>
            <img className="rescue-img-icon" alt="" src="/rescue-img@2x.png" />
          </div>
          <div className="rescue">
            <button className="adopt-btn" onClick={onAdoptBtnClick}>
              <div className="rescue1">Adopt</div>
            </button>
            <p className="adopt-txt">
              Make a difference with a click! Contribute to our mission by
              donating to reputable NGOs dedicated to improving the lives of
              stray animals. Every donation counts!
            </p>
            <img className="adopt-img-icon" alt="" src="/adopt-img@2x.png" />
          </div>
          <div className="donate">
            <button className="donate-btn" onClick={onDonateBtnClick}>
              <p className="donate1">Donate</p>
            </button>
            <p className="donate-txt">
              Find your perfect companion! Explore our adoption platform to
              provide a forever home for a stray animal, bringing joy and
              companionship into your life.
            </p>
            <img className="adopt-img-icon" alt="" src="/donate-img@2x.png" />
          </div>
          <div className="donate">
            <button className="donate-btn" onClick={onVolunteerBtnClick}>
              <div className="rescue1">Volunteer</div>
            </button>
            <p className="donate-txt">
              Join the StrayHelp team and make a direct impact! Volunteer your
              time, skills, and passion to help rescue, care for, and find homes
              for stray animals. Your commitment matters.
            </p>
            <img
              className="adopt-img-icon"
              alt=""
              src="/volunteer-img@2x.png"
            />
          </div>
        </div>
        <div className="doctors">
          <div className="doctor-frame">
            <h1 className="heading-4">Doctors</h1>
            <div className="doctor-section">
              <div className="doc-1">
                <img className="dr-1-img" alt="" src="/dr-1-img@2x.png" />
                <p className="dr-name-1">Dr. Jan Pol</p>
              </div>
              <div className="doc-1">
                <img className="dr-1-img" alt="" src="/ellipse-9@2x.png" />
                <p className="dr-name-1">Dr. Evan Antin</p>
              </div>
              <div className="doc-1">
                <img className="dr-1-img" alt="" src="/dr-3-img@2x.png" />
                <p className="dr-name-1">Dr. Lisa Lippman</p>
              </div>
            </div>
            <button className="contact-dr-btn" onClick={onContactDrBtnClick}>
              <div className="contact-doctors">Contact Doctors</div>
            </button>
          </div>
        </div>
        <div className="our-impact">
          <div className="impact-text">
            <h1 className="heading-5">Our Impact</h1>
            <p className="text">
              <span className="since-our-inception">
                Since our inception, StrayHelp has rescued and rehomed over 500
                animals, providing them with the love and care they deserve. We
                continue to advocate for animal rights and educate the community
                on responsible pet ownership. Our dedicated team works
                tirelessly to empower and celebrate the lives of animals,
                ensuring that no furry friend is left behind. Join us in our
                mission to create a world where every animal is valued and
                cherished!
              </span>
              <span className="since-our-inception">
                Together, we can make a difference and create a brighter future
                for all creatures, great and small.
              </span>
            </p>
          </div>
          <button className="review-button" onClick={onReviewButtonClick}>
            <div className="review-website">Review Website</div>
          </button>
        </div>
        <div className="new-btns">
          <button className="qr-btn" onClick={onQRBtnClick}>
            <button className="qr-square">
              <img
                className="qr-code-codes-tags-code-qr-icon"
                alt=""
                src="/qrlogo.svg"
              />
            </button>
            <p className="scan-qr">Scan QR</p>
          </button>
          <button className="qr-btn" onClick={onChatBotClick}>
            <button className="qr-square">
              <img
                className="qr-code-codes-tags-code-qr-icon"
                alt=""
                src="/chatbotlogo.svg"
              />
            </button>
            <p className="woofie">Woofie</p>
          </button>
        </div>
        <footer className="footer">
          <div className="footer-logo">
            <img className="logo-icon1" alt="" src="/logo-icon1@2x.png" />
            <p className="logo-name1">StrayHelp</p>
          </div>
          <div className="footer-links">
            <button className="facebook" />
            <button className="instagram" />
            <button className="twitter" />
            <button className="whatsapp" />
          </div>
        </footer>
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

export default LandingPage;
