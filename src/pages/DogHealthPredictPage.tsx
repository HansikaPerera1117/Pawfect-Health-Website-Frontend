import "../styles/login/loginStyles.scss";
import "../styles/common/commonStyles.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "antd";
import NavBar from "../components/common/NavBar";
import * as constants from "../util/constants";
import { Cookies } from "typescript-cookie";
const DogHealthPredictPage = () => {
  const history = useNavigate();

  const [healthPredictionObj, setHealthPredictionObj] = useState<{
    Description: string;
    "Predicted Sickness": string;
  }>();

  useEffect(() => {
    const storedHealthIssue = Cookies.get(constants.HEALTH_ISSUE) as string;

    if (storedHealthIssue) {
      const healthIssueObj = JSON.parse(storedHealthIssue);
      setHealthPredictionObj(healthIssueObj);
      console.log(healthIssueObj);
    }
  }, []);

  return (
    <>
      {" "}
      <NavBar pageName="bgNavBar" />
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
                  Your dog has{" "}
                  <strong>{healthPredictionObj?.["Predicted Sickness"]}</strong>
                </h5>
                <p className="mt-4 font-size-4">
                  {healthPredictionObj?.Description}
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
