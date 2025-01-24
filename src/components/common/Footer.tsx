import { Facebook, Linkedin } from "react-feather";
import "../../styles/common/Footer/footer.scss";
import "../../styles/common/commonStyles.scss";
// import fb from "../assets/images/Facebook Icon.png";
// import twitter from "../assets/images/Twitter Icon.png";
// import linkdin from "../assets/images/Linkedin Icon.png";
// import lightLogo from "../assets/images/logo/Logo Blue background 3.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const history = useNavigate();
  return (
    <>
      <footer className="footerMain">
        <div className="footer-inner container-fluid align-items-center">
          <div className="up-section d-flex justify-content-center align-items-center">
            <h2 className="font-size-1 text-center text-white">
              Experience Comfort <br /> in Every Stay
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
                <li
                  onClick={() => {
                    history("/coming-soon");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  What We Do{" "}
                </li>
                <li
                  onClick={() => {
                    history("/coming-soon");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  To The Power of 10
                </li>
                <li
                  onClick={() => {
                    history("/coming-soon");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Donate
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 footer-item">
              <ul>
                <li className="text-uppercase first-li">What We Do</li>
                <li>Encouraging Testing</li>
                <li>Strengthening Advocacy</li>
                <li>Sharing Information</li>
                <li>Building Leadership</li>
                <li>Engaging With Global Fund</li>
                <li>Shining a Light</li>
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
                <li className="text-uppercase first-li">TALK TO US</li>
                <li>support@ercom.com</li>
                <li>+66 2399 1145</li>
                <li>Contact Us</li>
                <li>
                  <a
                    href="https://www.facebook.com/ServicedApartmentsLK/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.linkedin.com/company/seyka-holdings/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="#"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-down-section mt-4 d-flex justify-content-center align-items-center w-100">
            <p className="mt-2 mb-2 all-right-reserved">
              {new Date().getFullYear()} © Serviced Apartments.All rights
              Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
