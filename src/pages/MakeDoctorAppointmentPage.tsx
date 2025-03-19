import "../styles/common/commonStyles.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { customToastMsg, handleError } from "../util/commonFunctions";
import { useEffect, useState } from "react";
import NavBar from "../components/common/NavBar";
import {
  Button,
  Card,
  Col,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  Row,
  TimePicker,
  TimePickerProps,
} from "antd";
import doctorImg from "../assets/images/vets/vet01.png";
import dayjs from "dayjs";
import moment from "moment";
import * as constants from "../util/constants";
import { Cookies } from "typescript-cookie";

const MakeDoctorAppointmentPage = () => {
  const history = useNavigate();

  const [name, setName] = useState<string>("");
  const [contactNo, setContactNo] = useState<string>("");
  const [appointmentDate, setAppointmentDate] = useState<string>("");
  const [appointmentTime, setAppointmentTime] = useState<string>("");

  const [doctorId, setDoctorId] = useState<number>();

  const [form] = Form.useForm();

  const format = "HH:mm";

  useEffect(() => {
    const drId = parseInt(Cookies.get(constants.DOCTOR_ID) as string);
    console.log(drId, "doctor id from cookies");
    setDoctorId(drId);
  }, []);

  const onChangeAppointmentDate: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    const formatDate = moment(dateString).format("YYYY-MM-DD");
    console.log(formatDate);

    setAppointmentDate(formatDate);
  };

  const onChangeAppointmentTime: TimePickerProps["onChange"] = (
    time,
    timeString
  ) => {
    console.log(timeString);

    setAppointmentTime(timeString);
  };

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
                className="ps-0 ps-lg-5"
              >
                <h1 className="font-size-1 mainText font-weight-semi-bold   text-center text-md-start font-family-2 m-0">
                  Doctor name
                </h1>
                <h1 className="font-size-3 font-weight-semi-bold text-center text-md-start font-family-2 m-0">
                  Specialize
                </h1>

                <Row className="mt-2 text-center text-md-start">
                  <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name : {"productDetails?.categ ory"}{" "}
                    </h5>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name : {"productDetails?.ca tegory"}{" "}
                    </h5>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name : {"productDetails?.cat egory"}{" "}
                    </h5>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name : {"productDetails?.cate gory"}{" "}
                    </h5>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name : {"productDetails?.cat egory"}{" "}
                    </h5>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Full Name : {"productDetails?.c ategory"}{" "}
                    </h5>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Card
                className="text-center my-5 rounded-5"
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(180deg, rgba(107, 174, 214, 0.35) 67%, rgba(247, 220, 111, 0.23) 100%)",
                }}
              >
                <h5 className="font-size-2 font-weight-normal">
                  Pawfect Health predicted my dog has
                  <strong>{" Tick fever "}</strong>
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
            <Row>
              <h5 className="font-size-4 font-weight-medium mb-4">
                Appointment Details
              </h5>
              <Form
                form={form}
                layout="vertical"
                className="d-flex flex-column align-items-center w-100"
              >
                <Row className="w-100">
                  <Col xs={24} sm={24} md={24}>
                    <Form.Item
                      name="name"
                      label={<span className="font-size-4">Name</span>}
                    >
                      <Input
                        size="large"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Enter name"
                        className="rounded-4 p-3"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={8} className="pe-0 pe-md-3">
                    <Form.Item
                      name="contactNo"
                      label={<span className="font-size-4">Contact No</span>}
                    >
                      <Input
                        size="large"
                        id="contactNo"
                        name="contactNo"
                        value={contactNo}
                        placeholder="Enter contact no"
                        className="rounded-4 p-3"
                        type="text"
                        onChange={(e) => setContactNo(e.target.value)}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={8}>
                    <Form.Item
                      name="appointmentDate"
                      label={<span className="font-size-4">Date</span>}
                    >
                      <DatePicker
                        size="large"
                        id="appointmentDate"
                        name="appointmentDate"
                        value={appointmentDate}
                        placeholder="Select appointment date"
                        className="rounded-4 p-3 w-100"
                        onChange={onChangeAppointmentDate}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={8} className="ps-0 ps-md-3">
                    <Form.Item
                      name="appointmentTime"
                      label={<span className="font-size-4">Time</span>}
                    >
                      <TimePicker
                        format={format}
                        size="large"
                        id="appointmentTime"
                        name="appointmentTime"
                        value={appointmentTime}
                        className="rounded-4 p-3 w-100"
                        placeholder="Select appointment time"
                        onChange={onChangeAppointmentTime}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Row>
            <Row className="my-5 d-flex justify-content-center justify-content-md-end">
              <Col xs={24} sm={20} md={10} lg={8} xl={8} xxl={8}>
                <Button
                  className="px-4 py-4  font-size-4 w-100 rounded-4"
                  size="large"
                  type="default"
                  // onClick={handleStartListingClick}
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
export default MakeDoctorAppointmentPage;
