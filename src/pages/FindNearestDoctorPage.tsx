import "../styles/login/loginStyles.scss";
import "../styles/common/commonStyles.scss";
import { useNavigate } from "react-router-dom";
import { customToastMsg, handleError } from "../util/commonFunctions";
import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "antd";
import NavBar from "../components/common/NavBar";
import DoctorMap from "../components/DoctorMap";
import axios from "axios";

const FindNearestDoctorPage = () => {
  const history = useNavigate();

  const [doctors, setDoctors] = useState<
    {
      id: number;
      latitude: number;
      longitude: number;
      name: string;
      specialty: string;
    }[]
  >([
    {
      id: 1,
      latitude: 7.0029699,
      longitude: 79.9628176,
      name: "Colombo City Center",
      specialty: "Shopping Mall",
    },
    {
      id: 2,
      latitude: 7.005156700000001,
      longitude: 79.9546461,
      name: "Kandy Lake",
      specialty: "Historical Site",
    },
    {
      id: 3,
      latitude: 7.0003062,
      longitude: 79.9607331,
      name: "Galle Face Green",
      specialty: "Beachfront Park",
    },
    {
      id: 4,
      latitude: 7.012108400000001,
      longitude: 79.96631339999999,
      name: "Sigiriya Rock Fortress",
      specialty: "Ancient Ruins",
    },
    {
      id: 5,
      latitude: 7.0072154,
      longitude: 79.9641213,
      name: "Bentota Beach",
      specialty: "Beach Resort",
    },
  ]);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>({
    lat: 7.004632399999999,
    lng: 79.954155,
  });

  return (
    <>
      {" "}
      <NavBar pageName="bgNavBar"/>
      <div
        className="position-relative"
        style={{
          backgroundColor: "white",
          height: "auto",
        }}
      >
        <div className="w-100 d-flex justify-content-center w-100">
          <div className="mainTextDiv w-90 " style={{ margin: "100px 0 0 0" }}>
            {" "}
            <h1 className="font-size-1 mainText font-weight-semi-bold   text-center text-lg-start font-family-2 mt-5 mt-lg-0">
              Find the Nearest Vet
            </h1>
            <p className="font-size-5 subText font-weight-light align-self-end  text-center text-lg-start">
              Locate trusted veterinary clinics near you with ease. Quick,
              reliable, and just a tap away!"
            </p>
            {/* <Row className="d-flex justify-content-center"></Row> */}
            <DoctorMap doctors={doctors} userLocation={userLocation} />
          </div>
        </div>
      </div>
    </>
  );
};
export default FindNearestDoctorPage;
