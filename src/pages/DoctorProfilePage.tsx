import "../styles/common/commonStyles.scss";
import { useNavigate } from "react-router-dom";
import { customToastMsg, handleError } from "../util/commonFunctions";
import { useState } from "react";
import NavBar from "../components/common/NavBar";
import { Avatar, Button, Col, Row } from "antd";
import doctorImg from "../assets/images/vets/vet01.png";

const DoctorProfilePage = () => {
  const history = useNavigate();

  return (
    <>
      {" "}
      <NavBar />
      <div
        className="position-relative"
        style={{
          backgroundColor: "white",
          height: "auto",
        }}
      >
        <div className="w-100 d-flex justify-content-center w-100">
          <div className="mainTextDiv w-90" style={{ margin: "120px 0 0 0" }}>
            {" "}
            <Row>
              <Col
                xs={24}
                sm={24}
                md={10}
                lg={6}
                xl={5}
                xxl={4}
                className="d-flex justify-content-center justify-content-md-start"
              >
                <img
                  src={doctorImg}
                  height={260}
                  width={260}
                  className="rounded-circle border border-dark"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={14}
                lg={18}
                xl={19}
                xxl={20}
                className=" ps-0 ps-lg-5"
              >
                <h1 className="font-size-1 mainText font-weight-semi-bold   text-center text-md-start font-family-2 m-0">
                  Doctor name
                </h1>
                <h1 className="font-size-3 font-weight-semi-bold text-center text-md-start font-family-2 m-0">
                  Specialize
                </h1>
                <p className="font-size-4 subText font-weight-light align-self-end  text-center text-md-start mt-5">
                  Upload your dog's bark and uncover their mood
                  instantly—because every bark tells a story! This keeps it
                  engaging and aligns with the AI-powered emotion detection
                  concept.
                </p>
                <Row className="mt-2 text-center text-md-start">
                  <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name :{" "}
                      {"productDetails?.cate gory?.categoryHierarchy"}{" "}
                    </h5>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name :{" "}
                      {"productDetails?.cate gory?.categoryHierarchy"}{" "}
                    </h5>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name :{" "}
                      {"productDetails?.cat egory?.categoryHierarchy"}{" "}
                    </h5>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name :{" "}
                      {"productDetails?.cate gory?.categoryHierarchy"}{" "}
                    </h5>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name :{" "}
                      {"productDetails?.cat egory?.categoryHierarchy"}{" "}
                    </h5>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name :{" "}
                      {"productDetails?.ca tegory?.categoryHierarchy"}{" "}
                    </h5>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <p className="font-size-4 subText font-weight-light align-self-end  text-center text-lg-start mt-5">
                  Upload your dog's bark and uncover their mood
                  instantly—because every bark tells a story! This keeps it
                  engaging and aligns with the AI-powered emotion detection
                  concept.Upload your dog's bark and uncover their mood
                  instantly—because every bark tells a story! This keeps it
                  engaging and aligns with the AI-powered emotion detection
                  concept.Upload your dog's bark and uncover their mood
                  instantly—because every bark tells a story! This keeps it
                  engaging and aligns with the AI-powered emotion detection
                  concept.
                </p>
              </Col>
            </Row>
            <Row className="mb-5 d-flex justify-content-center">
              <Col
                xs={24}
                sm={20}
                md={12}
                lg={12}
                xl={10}
                xxl={8}
                className="px-0 px-md-2 px-lg-5 mt-5"
              >
                <Button
                  className="px-4 py-4  font-size-4 w-100 rounded-4"
                  size="large"
                  type="default"
                  // onClick={handleStartListingClick}
                >
                  Start Chat with {"Dr name"}
                </Button>
              </Col>
              <Col
                xs={24}
                sm={20}
                md={12}
                lg={12}
                xl={10}
                xxl={8}
                className="px-0 px-md-2 px-lg-5 mt-5"
              >
                <Button
                  className="px-4 py-4  font-size-4 w-100 rounded-4"
                  size="large"
                  type="default"
                  onClick={() => {
                    history("/make-appointment/1");
                  }}
                >
                  Make Appointment to {"Dr name "}
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default DoctorProfilePage;
