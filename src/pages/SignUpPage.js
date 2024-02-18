import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [isProfile1Open, setProfile1Open] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

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

  const onRegisterButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignupBtnClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <>
      <div className="sign-up-page">
        <nav className="header2">
          <div className="nav2">
            <div className="logo2">
              <img className="logo-icon3" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name3">StrayHelp</p>
            </div>
            <div className="links2">
              <button className="home2" onClick={onHomeClick}>
                Home
              </button>
              <button className="about2" onClick={onAboutClick}>
                About
              </button>
              <button className="profile2" onClick={openProfile1}>
                Profile
              </button>
            </div>
          </div>
        </nav>
        <div className="register-page">
          <div className="signup-box">
            <div className="signup-text">
              <h1 className="signup">SignUp</h1>
            </div>
            <div className="signup-section">
              <div className="email-pass-section">
                <div className="namesection">
                  <div className="name-head">
                    <p className="name">Name</p>
                  </div>
                  <div className="name-space">
                    <TextField
                      className="name-input"
                      color="primary"
                      required={true}
                      variant="outlined"
                      type="email"
                      sx={{ "& .MuiInputBase-root": { height: "31px" } }}
                    />
                  </div>
                </div>
                <div className="namesection">
                  <div className="name-head">
                    <p className="name">Enter Email</p>
                  </div>
                  <div className="name-space">
                    <TextField
                      className="name-input"
                      color="primary"
                      required={true}
                      variant="outlined"
                      type="text"
                      sx={{ "& .MuiInputBase-root": { height: "31px" } }}
                    />
                  </div>
                </div>
                <div className="create-password-section">
                  <div className="name-head">
                    <p className="create-password">Create Password</p>
                  </div>
                  <div className="name-space">
                    <TextField
                      className="name-input"
                      color="primary"
                      required={true}
                      variant="outlined"
                      type={showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleShowPasswordClick}
                              aria-label="toggle password visibility"
                            >
                              <Icon>
                                {showPassword ? "visibility_off" : "visibility"}
                              </Icon>
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{ "& .MuiInputBase-root": { height: "31px" } }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="register-btn">
              <button
                className="register-button"
                onClick={onRegisterButtonClick}
              >
                <p className="register">Register</p>
              </button>
            </div>
            <div className="or-text">
              <p className="or-login-with">or login with</p>
            </div>
            <div className="google">
              <button className="google-button">
                <img
                  className="clip-path-group"
                  alt=""
                  src="/clip-path-group.svg"
                />
              </button>
            </div>
            <div className="no-acc-signup">
              <div className="no-acc-txt">
                <p className="already-have-an">{`Already Have an account?   `}</p>
              </div>
              <div className="signup-btn" onClick={onSignupBtnClick}>
                <button className="signup-here-btn">Login here</button>
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

export default SignUpPage;
