import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import PortalDrawer from "../components/PortalDrawer";
import "./SignInPage.css";

const SignInPage = () => {
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

  const onLoginButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignUpHereBtnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const onLoginButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignUpHereClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <>
      <div className="sign-in-page">
        <nav className="header9">
          <div className="nav9">
            <div className="logo9">
              <img className="logo-icon10" alt="" src="/logo-icon@2x.png" />
              <p className="logo-name10">StrayHelp</p>
            </div>
            <div className="links9">
              <button className="home9" onClick={onHomeClick}>
                Home
              </button>
              <button className="about9" onClick={onAboutClick}>
                About
              </button>
              <button className="profile9" onClick={openProfile1}>
                Profile
              </button>
            </div>
          </div>
        </nav>
        <div className="login-page">
          <div className="login-box">
            <div className="login-text">
              <h1 className="login">LogIn</h1>
            </div>
            <div className="login-section">
              <div className="email-pass-section1">
                <div className="email-section1">
                  <div className="password-head">
                    <p className="password">Email</p>
                  </div>
                  <div className="password-space">
                    <TextField
                      className="email-input1"
                      color="primary"
                      required={true}
                      variant="outlined"
                      type="email"
                      sx={{ "& .MuiInputBase-root": { height: "31px" } }}
                    />
                  </div>
                </div>
                <div className="password-section">
                  <div className="password-head">
                    <p className="password">Password</p>
                  </div>
                  <div className="password-space">
                    <TextField
                      className="email-input1"
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
              <div className="forget-pass-btn">
                <button className="forget-password-btn">
                  Forget Password?
                </button>
              </div>
            </div>
            <div className="login-btn">
              <button className="login-button" onClick={onLoginButtonClick}>
                <div className="login1">Login</div>
              </button>
            </div>
            <div className="or-text1">
              <p className="or-login-with1">or login with</p>
            </div>
            <div className="google1">
              <button className="google-button1">
                <img
                  className="clip-path-group1"
                  alt=""
                  src="/clip-path-group.svg"
                />
              </button>
            </div>
            <div className="no-acc-signup1">
              <div className="no-acc-txt1">
                <p className="dont-have-an">Don’t have an account?</p>
              </div>
              <div className="signup-btn1">
                <button
                  className="signup-here-btn1"
                  onClick={onSignUpHereBtnClick}
                >
                  SignUp here
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="small-login-box">
          <div className="login-heading">
            <div className="login2">Login</div>
          </div>
          <div className="email-pass-section2">
            <div className="email-section2">
              <div className="email-head2">
                <p className="email8">Email</p>
              </div>
              <div className="input-box">
                <TextField
                  className="input-box-child"
                  color="primary"
                  required={true}
                  variant="outlined"
                  type="email"
                  sx={{
                    "& .MuiInputBase-root": { height: "25px" },
                    width: "220px",
                  }}
                />
              </div>
            </div>
            <div className="pass-section">
              <div className="pass-head">
                <p className="email8">Password</p>
              </div>
              <div className="input-box">
                <TextField
                  className="input-box-child"
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
                  sx={{
                    "& .MuiInputBase-root": { height: "25px" },
                    width: "220px",
                  }}
                />
              </div>
            </div>
          </div>
          <button className="forget-pass-btn1">
            <p className="forget-password">Forget Password?</p>
          </button>
          <button className="login-button1" onClick={onLoginButton1Click}>
            <p className="login3">Login</p>
          </button>
          <div className="or-section">
            <div className="or-text2">
              <p className="password">or login with</p>
            </div>
            <div className="google-btn">
              <button className="google-button2">
                <img
                  className="clip-path-group2"
                  alt=""
                  src="/clip-path-group1.svg"
                />
              </button>
            </div>
          </div>
          <div className="sign-up-section">
            <button className="signup-here" onClick={onSignUpHereClick}>
              SignUp Here
            </button>
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

export default SignInPage;
