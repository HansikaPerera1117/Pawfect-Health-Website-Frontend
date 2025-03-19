import "../styles/common/commonStyles.scss";
import { useNavigate } from "react-router-dom";
import { customToastMsg, handleError } from "../util/commonFunctions";
import { useState } from "react";
import { Col, Row } from "antd";
import NavBar from "../components/common/NavBar";
import { AppointmentCard } from "../components/common/cards/AppointmentCard";
import dogImg from "../assets/images/appointmentPageImg.png";

const ViewDoctorAppointmentsPage = () => {
  const history = useNavigate();

  const [appointmentList, setAppointmentList] = useState<[]>([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  return (
    <>
      <NavBar pageName="bgNavBar"/>
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
            <h1 className="font-size-1 mainText  font-weight-semi-bold text-center text-lg-start font-family-2">
              Appointments
            </h1>
            <Row className="my-5 d-flex justify-content-center">
              {appointmentList?.map((appointment) => {
                return (
                  <Col
                    xs={20}
                    sm={10}
                    md={8}
                    lg={6}
                    xl={5}
                    xxl={4}
                    className="mx-3 my-3"
                  >
                    <AppointmentCard />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <Row className="d-flex justify-content-start">
          <img
            src={dogImg}
            style={{
              width: "800px",
              maxWidth:"100vw",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Row>
      </div>
    </>
  );
};
export default ViewDoctorAppointmentsPage;
