import React from "react";
import MainLayout from "../layout/MainLayout";
import { Button, Col, Row } from "antd";
import mainDogImage from "../assets/images/mainImage01.png";
import "../styles/homePageStyles.scss";
import "../styles/common/commonStyles.scss";

const HomePage = () => {
  return (
    <div>
      <MainLayout>
        <div>
          <Row
            className="position-relative"
            style={{
              backgroundColor: "white",
              height: "auto",
            }}
          >
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={14}
              xl={14}
              xxl={14}
              className="containerBox d-flex  align-items-end"
            >
              <div className="mainTextDiv mb-5 pb-5" style={{ zIndex: 1 }}>
                {" "}
                <p className="subText font-size-5 font-weight-light align-self-end text-center text-lg-start m-0">
                  Unleashing the Power of Artificial Intelligence to Detect
                  Criminals and Solve Cases Faster, Smarter, and More Accurately
                </p>
                <h1 className="mainText font-size-1 font-weight-semi-bold  text-center text-lg-start font-family-2 mb-5 pb-5 mt-0">
                  Revolutionizing Justice with AI-Powered DNA Analysis
                </h1>
                <p className="font-size-3 font-weight-light w-100 text-center text-lg-start mt-5 pt-5">
                  From DNA to detailed profiles, Crime Genix empowers law
                  enforcement with cutting-edge forensic solutions
                </p>
                <Button
                  className="secondary-button w-50 align-self-center align-self-lg-end"
                  size="large"
                  type="primary"
                  // onClick={handleStartListingClick}
                >
                  Get Started
                </Button>
              </div>{" "}
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={10}
              xl={10}
              xxl={10}
              className="d-flex justify-content-end"
            >
              <img
                src={mainDogImage}
                className="pe-4 mainDogImage"
                height={"auto"}
                width="100%"
              />
            </Col>
          </Row>
        </div>
      </MainLayout>
    </div>
  );
};

export default HomePage;
