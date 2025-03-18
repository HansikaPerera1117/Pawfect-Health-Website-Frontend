import "../styles/common/commonStyles.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { customToastMsg, handleError } from "../util/commonFunctions";
import { useEffect, useState } from "react";
import NavBar from "../components/common/NavBar";
import { Avatar, Button, Card, Col, Row } from "antd";
import UserImg from "../assets/images/userImg.png";
import DoctorMap from "../components/DoctorMap";

const MyProfilePage = () => {
  const history = useNavigate();

  const [isDogOwner, setIsDogOwner] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>({
    lat: 7.004632399999999,
    lng: 79.954155,
  });

  useEffect(() => {
    setIsDogOwner(true);
  }, []);

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
                  src={UserImg}
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
                  user name
                </h1>
                <h1 className="font-size-3 font-weight-semi-bold text-center text-md-start font-family-2 m-0">
                  doctor/dog owner
                </h1>

                <Row className="mt-2 text-center text-md-start">
                  <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name : {"productDetails?.cate gory?"}{" "}
                    </h5>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name : {"productDetails?.cate gory?"}{" "}
                    </h5>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name : {"productDetails?.cat egory?"}{" "}
                    </h5>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name : {"productDetails?.cate gory?"}{" "}
                    </h5>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name : {"productDetails?.cat egory?"}{" "}
                    </h5>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name : {"productDetails?.ca tegory?"}{" "}
                    </h5>
                  </Col>
                </Row>
              </Col>
              {isDogOwner && (
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                  xxl={24}
                  className="my-5"
                >
                  <DoctorMap doctors={[]} userLocation={userLocation} />
                </Col>
              )}
            </Row>
            {isDogOwner && (
              <div>
                <h5 className=" font-size-3 font-weight-medium mt-3">
                  My Dogs
                </h5>
                <Row className="mb-5 d-flex justify-content-center">
                  <Col
                    xs={24}
                    sm={20}
                    md={12}
                    lg={12}
                    xl={10}
                    xxl={8}
                    className="px-0 px-md-2 px-lg-5"
                  >
                    <Card
                      className=" my-5 rounded-5"
                      style={{
                        width: "100%",
                        background:
                          "linear-gradient(180deg, rgba(107, 174, 214, 0.35) 67%, rgba(247, 220, 111, 0.23) 100%)",
                      }}
                    >
                      <h5 className="font-size-2 font-weight-normal text-center mb-4">
                        <strong>{" Dog Name "}</strong>
                      </h5>
                      <h5 className="font-size-4 font-weight-normal">
                        Gender :{" "}
                      </h5>
                      <h5 className="font-size-4 font-weight-normal">
                        Breed :{" "}
                      </h5>
                      <h5 className="font-size-4 font-weight-normal">Age : </h5>
                      <p className="font-size-4 my-4">
                        Tick fever in dogs, also known as canine Rocky Mountain
                        spotted fever (RMSF), is a serious, potentially fatal
                        disease transmitted by infected ticks, and can be
                        treated
                      </p>
                      <div>
                        <h5 className="font-size-4 font-weight-medium">
                          Sickness History
                        </h5>

                        <div className="my-3">
                          <h5 className="font-size-4 font-weight-normal m-0">
                            Date :{" "}
                          </h5>
                          <h5 className="font-size-4 font-weight-normal m-0">
                            Sickness :{" "}
                          </h5>
                        </div>
                        <div className="my-3">
                          <h5 className="font-size-4 font-weight-normal m-0">
                            Date :{" "}
                          </h5>
                          <h5 className="font-size-4 font-weight-normal m-0">
                            Sickness :{" "}
                          </h5>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col
                    xs={24}
                    sm={20}
                    md={12}
                    lg={12}
                    xl={10}
                    xxl={8}
                    className="px-0 px-md-2 px-lg-5"
                  >
                    <Card
                      className=" my-5 rounded-5"
                      style={{
                        width: "100%",
                        background:
                          "linear-gradient(180deg, rgba(107, 174, 214, 0.35) 67%, rgba(247, 220, 111, 0.23) 100%)",
                      }}
                    >
                      <h5 className="font-size-2 font-weight-normal text-center mb-4">
                        <strong>{" Dog Name "}</strong>
                      </h5>
                      <h5 className="font-size-4 font-weight-normal">
                        Gender :{" "}
                      </h5>
                      <h5 className="font-size-4 font-weight-normal">
                        Breed :{" "}
                      </h5>
                      <h5 className="font-size-4 font-weight-normal">Age : </h5>
                      <p className="font-size-4 my-4">
                        Tick fever in dogs, also known as canine Rocky Mountain
                        spotted fever (RMSF), is a serious, potentially fatal
                        disease transmitted by infected ticks, and can be
                        treated
                      </p>
                      <div>
                        <h5 className="font-size-4 font-weight-medium">
                          Sickness History
                        </h5>

                        <div className="my-3">
                          <h5 className="font-size-4 font-weight-normal m-0">
                            Date :{" "}
                          </h5>
                          <h5 className="font-size-4 font-weight-normal m-0">
                            Sickness :{" "}
                          </h5>
                        </div>
                        <div className="my-3">
                          <h5 className="font-size-4 font-weight-normal m-0">
                            Date :{" "}
                          </h5>
                          <h5 className="font-size-4 font-weight-normal m-0">
                            Sickness :{" "}
                          </h5>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default MyProfilePage;
