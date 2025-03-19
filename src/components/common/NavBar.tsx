import { useEffect, useState } from "react";
import "../../styles/common/NavBar/navBarStyles.scss";
import logoImg from "../../assets/images/Logo/Logo.png";
import hamberg from "../../assets/images/icons/menu_icon.svg";
import close from "../../assets/images/icons/close_icon.svg";
import { useNavigate } from "react-router-dom";
import * as constants from "../../util/constants.ts";
import { Cookies } from "typescript-cookie";
import { getDecryptedCookie, logOut } from "../../util/commonFunctions.tsx";
import { Button, Popover } from "antd";
import userIcon from "../../assets/images/icons/solar_user-bold.png";

import { LogoutOutlined } from "@ant-design/icons";
import { User } from "react-feather";

interface Props {
  pageName?: string;
}

const NavBar = ({ pageName }: Props) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDoctorLoggedIn, setIsDoctorLoggedIn] = useState(false);

  useEffect(() => {
    const authUserString = JSON.parse(Cookies.get("authUser") as string);

    // setIsDoctorLoggedIn(authUserString?.user === "doctor" ? true : false);

    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const content = (
    <div>
      <p
        style={{ color: "#6BAED6" }}
        className="mb-1 mx-2 hover-effect cursor-setUp"
        onClick={() => logOut()}
      >
        <LogoutOutlined style={{ marginRight: "12px" }} />
        Log Out
      </p>
      <p
        style={{ color: "#6BAED6" }}
        className="mb-1 mx-2 hover-effect cursor-setUp"
        onClick={() => navigate("/my-profile")}
      >
        <User size={18} className="m-0 me-2" />
        My Profile
      </p>
    </div>
  );

  return (
    <nav
      style={{
        height: 100,
        background: scrolled
          ? "rgba(255, 255, 255, 0.77)"
          : pageName === "bgNavBar"
          ? "rgba(255, 255, 255, 0.18)"
          : "transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(255, 255, 255, 0.1)" : "none",
        backdropFilter: scrolled
          ? "blur(8.2px)"
          : pageName === "bgNavBar"
          ? "blur(17.8px)"
          : "none",
        WebkitBackdropFilter: scrolled
          ? "blur(8.2px)"
          : pageName === "bgNavBar"
          ? "blur(17.8px)"
          : "none",
        transition: "all 0.3s ease",
      }}
      className={`w-100 d-flex justify-content-center containerPadding align-items-center`}
    >
      <div className="containerPadding_inner  ">
        <div>
          <img
            style={{ cursor: "pointer" }}
            width="auto"
            height="80px"
            onClick={() => navigate("/")}
            src={logoImg}
            alt="logo"
          />
        </div>
        <div className="desktop-nav">
          <div className="d-flex align-items-center">
            {Cookies.get("authUser") ? (
              <ul className="list-inline nav_itemList">
                {!isDoctorLoggedIn && (
                  <li
                    className="list-inline-item"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Home
                  </li>
                )}
                {!isDoctorLoggedIn && (
                  <li
                    className="list-inline-item"
                    onClick={() => {
                      navigate("/nearest-doctor");
                    }}
                  >
                    Nearest Doctor
                  </li>
                )}
                {!isDoctorLoggedIn && (
                  <li
                    className="list-inline-item"
                    onClick={() => {
                      navigate("/my-appointments");
                    }}
                  >
                    Appointments
                  </li>
                )}
                {isDoctorLoggedIn && (
                  <li
                    className="list-inline-item"
                    onClick={() => {
                      navigate("/appointments");
                    }}
                  >
                    View Appointments
                  </li>
                )}
                {isDoctorLoggedIn && (
                  <li
                    className="list-inline-item"
                    onClick={() => {
                      navigate("/chat");
                    }}
                  >
                    Chats
                  </li>
                )}
              </ul>
            ) : (
              ""
            )}

            {Cookies.get("authUser")
              ? !isDoctorLoggedIn && (
                  <Button
                    className="start_Listing_button me-3"
                    type="default"
                    onClick={() => {
                      navigate("/health-prediction");
                    }}
                  >
                    Check Health Issues
                  </Button>
                )
              : ""}
            {Cookies.get("authUser")
              ? !isDoctorLoggedIn && (
                  <Button
                    className="start_Listing_button"
                    type="default"
                    onClick={() => {
                      navigate("/emotion-prediction");
                    }}
                  >
                    Check Emotions
                  </Button>
                )
              : ""}

            {!Cookies.get("authUser") ? (
              <div>
                <Button
                  type="primary"
                  size="large"
                  className="start_Listing_button px-4 mx-2 text-white"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
                <Button
                  type="primary"
                  size="large"
                  className="start_Listing_button px-3 mx-2 text-white"
                  onClick={() => {
                    navigate("/sign-up");
                  }}
                >
                  Signup
                </Button>
              </div>
            ) : (
              <Popover
                placement="bottomRight"
                trigger="click"
                content={content}
              >
                <Button className="user-icon-area">
                  <img src={userIcon} alt="user-icon" />
                </Button>
              </Popover>
            )}
          </div>
        </div>
      </div>

      {isSidebarOpen === false ? (
        <button className="menu-toggle-btn" onClick={handleSidebarToggle}>
          <img width={30} src={hamberg} alt="hamberger" />
        </button>
      ) : (
        <button className="menu-toggle-btn" onClick={handleSidebarToggle}>
          <img width={30} src={close} alt="close" />
        </button>
      )}

      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`} style={{height:"100vh"}}>
        <ul>
          {Cookies.get("authUser") ? (
            <ul className="list-inline nav_itemList">
              {!isDoctorLoggedIn && (
                <li
                  className="list-inline-item"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </li>
              )}
              {!isDoctorLoggedIn && (
                <li
                  className="list-inline-item"
                  onClick={() => {
                    navigate("/nearest-doctor");
                  }}
                >
                  Find Nearest Doctor
                </li>
              )}
              {!isDoctorLoggedIn && (
                <li
                  className="list-inline-item"
                  onClick={() => {
                    navigate("/my-appointments");
                  }}
                >
                  Appointments
                </li>
              )}
              {isDoctorLoggedIn && (
                <li
                  className="list-inline-item"
                  onClick={() => {
                    navigate("/appointments");
                  }}
                >
                  View Appointments
                </li>
              )}
              {isDoctorLoggedIn && (
                <li
                  className="list-inline-item"
                  onClick={() => {
                    navigate("/chat");
                  }}
                >
                  Chat
                </li>
              )}
              {!isDoctorLoggedIn && (
                <li>
                  <Button
                    className="start_Listing_button"
                    onClick={() => {
                      navigate("/health-prediction");
                    }}
                  >
                    Check Health Issues
                  </Button>
                </li>
              )}
              {!isDoctorLoggedIn && (
                <li>
                  <Button
                    className="start_Listing_button"
                    onClick={() => {
                      navigate("/emotion-prediction");
                    }}
                  >
                    Check Emotions
                  </Button>
                </li>
              )}
            </ul>
          ) : (
            ""
          )}
          <li>
            {!Cookies.get("authUser") ? (
              <div className="">
                <button
                  style={{
                    backgroundColor: "#6BAED6",
                    color: "white",
                    padding: "10px",
                  }}
                  className="login-extra start_Listing_button px-4 mx-2"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
                <button
                  style={{
                    backgroundColor: "#6BAED6",
                    color: "white",
                    padding: "10px",
                  }}
                  className="start_Listing_button px-3 mx-2"
                  onClick={() => {
                    navigate("/sign-up");
                  }}
                >
                  Signup
                </button>
              </div>
            ) : (
              <Popover
                placement="bottomRight"
                trigger="click"
                content={content}
              >
                <Button className="user-icon-area border border-0">
                  <img src={userIcon} alt="user-icon" />
                </Button>
              </Popover>
            )}
          </li>
        </ul>
      </aside>
    </nav>
  );
};
export default NavBar;
