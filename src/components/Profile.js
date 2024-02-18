import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onBecomeVolunteerClick = useCallback(() => {
    navigate("/volunteer-page");
  }, [navigate]);

  const onExploreServicesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFeedbackClick = useCallback(() => {
    navigate("/feedback-page");
  }, [navigate]);

  return (
    <div className="profile13" data-animate-on-scroll>
      <div className="user">
        <img className="user-profile-icon" alt="" src="/user-profile@2x.png" />
        <p className="user-name">Rakesh Sharma</p>
      </div>
      <div className="drawer-menu">
        <button className="become-volunteer" onClick={onBecomeVolunteerClick}>
          Become Volunteer
        </button>
        <button className="become-volunteer" onClick={onExploreServicesClick}>
          Explore Services
        </button>
        <button className="become-volunteer">Post For Adoption</button>
        <button className="become-volunteer" onClick={onFeedbackClick}>
          Feedback
        </button>
        <button className="become-volunteer">Need Help</button>
      </div>
      <button className="signout">
        <div className="sign-out">Sign Out</div>
        <div className="arrow-right4">
          <img className="vector-icon46" alt="" src="/vector9.svg" />
          <img className="vector-icon47" alt="" src="/vector10.svg" />
        </div>
      </button>
    </div>
  );
};

export default Profile;
