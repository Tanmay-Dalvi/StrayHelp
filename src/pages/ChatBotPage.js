import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./ChatBotPage.css";

const ChatbotPage = () => {
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
      <div className="chatbot-page">
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
        <div className="chatbot-heading">
          <p className="woofie1">Woofie</p>
          <p className="the-chatbot-buddy">The chatbot buddy</p>
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

export default ChatbotPage;
