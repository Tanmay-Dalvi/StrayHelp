import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./ChatBotPage.css";

const ChatbotPage = () => {
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
        <div className="chat-box">
          <div className="chat-box-header">
            <div className="box-head">
              <div className="chat-bubble">
                <img
                  className="chat-bubble-typing-oval-messa-icon"
                  alt=""
                  src="/chatbubble.svg"
                />
              </div>
              <div className="chat-with-woofie">
                <img
                  className="woofie-img-icon"
                  alt=""
                  src="/woofieimg.webp"
                />
                <p className="woofie-txt">Chat with WOOFIE..</p>
              </div>
            </div>
          </div>
          <div className="chat-box-footer">
            <input className="chat-input" type="text" />
            <button className="send-chat">
              <img
                className="mail-send-email-message-send-icon"
                alt=""
                src="/sendchat.svg"
              />
            </button>
          </div>
          <div className="woofie-chat">
            <p className="hey-there-how">Hey there! How can I help you?</p>
          </div>
          <div className="user-chat">
            <p className="hey-there-how">Hi!</p>
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

export default ChatbotPage;
