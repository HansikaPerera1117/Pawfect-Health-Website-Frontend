import "../styles/login/loginStyles.scss";
import "../styles/common/commonStyles.scss";
import { useNavigate } from "react-router-dom";
import { customToastMsg, handleError } from "../util/commonFunctions";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  message,
  Row,
  Upload,
  UploadProps,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import NavBar from "../components/common/NavBar";
import dogPawImage from "../assets/images/map.png";

const DogHealthPredictPage = () => {
  const history = useNavigate();

  const [form] = Form.useForm();

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
          <div className="mainTextDiv w-90 " style={{ margin: "120px 0 0 0" }}>
            {" "}
            <h1 className="font-size-1 mainText font-weight-semi-bold   text-center text-lg-start font-family-2 mt-5 mt-lg-0">
              Understand Your Dog’s Health Instantly
            </h1>
            <p className="font-size-5 subText font-weight-light align-self-end  text-center text-lg-start">
              Detect potential health issues early and take action—because your
              furry friend deserves the best care!
            </p>
            <Row className="d-flex justify-content-center">
              <Card
                className="text-center my-5 rounded-5"
                style={{
                  width: "80%",
                  background:
                    "linear-gradient(180deg, rgba(107, 174, 214, 0.35) 67%, rgba(247, 220, 111, 0.23) 100%)",
                }}
              >
                <h5 className="font-size-2 font-weight-normal">
                  Your dog has<strong>{" Tick fever "}</strong>
                </h5>
                <p className="mt-4">
                  Tick fever in dogs, also known as canine Rocky Mountain
                  spotted fever (RMSF), is a serious, potentially fatal disease
                  transmitted by infected ticks, and can be treated with
                  antibiotics and supportive care. What is Tick Fever? Cause:
                  Tick fever is caused by bacteria (like Rickettsia rickettsii)
                  or protozoa (like Babesia or Ehrlichia) that are transmitted
                  to dogs through the bite of infected ticks. Types: Two common
                  types of tick fever in dogs are Rocky Mountain spotted fever
                  and ehrlichiosis. Transmission: Dogs can become infected when
                  bitten by an infected tick, which can pick up the infection
                  from other animals. Severity: Tick fever can be
                  life-threatening if not treated promptly. 
                </p>
              </Card>
            </Row>
            <Row className="mb-5 mt-3 pb-5 d-flex justify-content-center justify-content-lg-end">
              <Col xs={20} sm={16} md={8}>
                <Button
                  className="px-4 py-4  font-size-4 w-100 rounded-4"
                  size="large"
                  type="default"
                  onClick={() => {
                    history("/nearest-doctor");
                  }}
                >
                  View Near By Doctor{" "}
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default DogHealthPredictPage;
