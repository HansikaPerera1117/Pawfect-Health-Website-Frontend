import "../styles/login/loginStyles.scss";
import "../styles/common/commonStyles.scss";
import bgImage from "../assets/images/loginBg.jpg";
import * as constants from "../util/constants";
import pinkImage from "../assets/images/pink.png";
// import { loginService } from "../service/auth";
import { Cookies } from "typescript-cookie";
import { useNavigate } from "react-router-dom";
import { customToastMsg, handleError } from "../util/commonFunctions";
import { useState } from "react";
import openImage from "../assets/images/line-md--watch.svg";
import blueLogo from "../assets/images/logo/Logo.png";
import svgTwo from "../assets/images/line-md--watch-off (1).svg";
import { Button } from "antd";

const LoginPage = () => {
  const history = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");
  const [error, setErrors] = useState<string>("");
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  // const LoginFunction = () => {
  //   console.log("email:", email);
  //   console.log("password:", password);

  //   const data = {
  //     email: email.trim(),
  //     password: password.trim(),
  //   };

  //   //setErrors("");
  //   loginService(data)
  //     .then((response) => {
  //       Cookies.set(constants.ACCESS_TOKEN, response?.data?.access_token);
  //       Cookies.set(constants.REFRESH_TOKEN, response?.data?.refresh_token);
  //       // Cookies.set(constants.Expire_time, response?.tokenExpires);
  //       Cookies.set("authUser", JSON.stringify(response?.data?.user));
  //       // customToastMsg("login successfully", 1);
  //       history(`/`);
  //     })
  //     .catch((error) => {
  //       if (error.message) {
  //         customToastMsg(error.message, 0);
  //       }
  //       error.message.email
  //         ? customToastMsg(error.message.email, 0)
  //         : error.message.password && customToastMsg(error.message.password, 0);
  //     });
  // };

  const eyeOnAction = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <main className="main_login w-100 d-flex justify-content-center align-items-center">
        <div className="login-container  ">
          <div className="login-image left-area">
            <img className="lft-img" src={bgImage} alt="Illustration" />
          </div>

          <div className=" position-relative d-flex right-area justify-content-center align-items-center flex-column">
            <div className="login-form">
              <img
                width={110}
                className="logo-imagepng"
                src={blueLogo}
                alt="logo"
              />
              <h3 className="text-start mb-0 mt-3">Welcome back!</h3>
              <p className="text-start text-muted mb-4">
                Please enter your details.
              </p>
              <form
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // Prevent default form submission
                    // LoginFunction();
                  }
                }}
              >
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="form-label font-weight-medium font-size-4 text-gray-secondary"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label font-weight-medium text-gray-secondary">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword === false ? "password" : "text"}
                      className="form-control custom-input"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                    <span className="input-group-text" onClick={eyeOnAction}>
                      {showPassword === false ? (
                        <img
                          style={{ color: "#6baed6" }}
                          src={svgTwo}
                          alt="eye-off"
                        />
                      ) : (
                        <img
                          style={{ color: "#6baed6" }}
                          src={openImage}
                          alt="eye-on"
                        />
                      )}
                    </span>
                  </div>
                </div>

                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input custom-checkbox"
                    id="rememberMe"
                  />
                  <label className="form-check-label text-gray-secondary font-size-5">
                    Remember me
                  </label>
                  {/* <a href="#" className="float-end text-decoration-none">
                    Forgot password?
                  </a> */}
                </div>

                <Button
                  // onClick={LoginFunction}
                  type="primary"
                  size="large"
                  className="w-100 mb-3 mb-3"
                >
                  Sign In
                </Button>
                {/* <button type="button" className="btn btn-google w-100 mb-3">
                  <i className="bi bi-google me-2"></i> Log in with Google
                </button> */}
              </form>

              <p className="text-start text-muted signup-link">
                Don't have an account?{" "}
                <a
                  href="/sign-up"
                  className="text-decoration-none primary-color"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default LoginPage;
