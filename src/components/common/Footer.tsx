import "../../styles/common/Footer/footer.scss";
import "../../styles/common/commonStyles.scss";
import linkdin from "../../assets/images/icons/linkedin_icon.png";
import lightLogo from "../../assets/images/Logo/Logo.png";
import { useNavigate } from "react-router-dom";
import { Instagram } from "react-feather";

const Footer = () => {
  const history = useNavigate();
  return (
    <>
      <footer className="footerMain">
        <div className="footer-inner container-fluid align-items-center">
          <div className="up-section d-flex justify-content-center align-items-center">
            <h2 className="font-size-2 text-center text-white">
              Experience Smart Care in Every Wag <br /> Pawfect Health
            </h2>
          </div>

          {/* up section */}
          <div className="row mt-5 down-section-footer-last d-flex w-100 justify-content-between ">
            <div className="col-lg-6 col-md-12 col-sm-12 footer-item">
              <ul>
                <li className="text-uppercase first-li">Navigation</li>
                <li
                  onClick={() => {
                    history("/");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Home{" "}
                </li>
                <li
                  onClick={() => {
                    history("/coming-soon");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  About Us{" "}
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 footer-item">
              <ul>
                <li className="text-uppercase first-li">What We Do</li>
                <li>Enhancing Pet Healthcare </li>
                <li>Empowering Pet Owners </li>
                <li>Connecting You with Experts </li>
                <li>Innovating with AI</li>
                <li>Building a Pet-Friendly Future </li>
                <li>Ensuring Safety & Wellness </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 footer-item">
              <ul>
                <li className="text-uppercase first-li">LEGAL</li>
                <li>General Info</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 footer-item">
              <ul>
                <li className="text-uppercase first-li">CONTACT US</li>
                <li>hansikaperera59@gmail.com</li>
                <li>+94 75 5646280</li>

                <li>
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/hansika-perera-277791244/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <img
                      width={35}
                      src={linkdin}
                      alt="linkdin"
                      className="me-3"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/hansi__iiii__/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Instagram strokeWidth={1} className="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-down-section mt-4 d-flex justify-content-center align-items-center w-100">
            <p className="mt-2 mb-2 all-right-reserved">
              {new Date().getFullYear()} © Pawfect Health. All rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
