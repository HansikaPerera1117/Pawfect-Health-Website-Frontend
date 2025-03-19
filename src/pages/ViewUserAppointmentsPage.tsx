import "../styles/login/loginStyles.scss";
import "../styles/common/commonStyles.scss";
import { useNavigate } from "react-router-dom";
import { customToastMsg, handleError } from "../util/commonFunctions";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Empty,
  Form,
  message,
  Row,
  Table,
  Typography,
  Upload,
  UploadProps,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import NavBar from "../components/common/NavBar";
import dogPawImage from "../assets/images/map.png";
import { MyAppointmentsTableObj } from "../util/interfaces/uiNecessaryInterface";
import { AppointmentsTableColumns } from "../util/tableColumns/appointmentsTableColumns";

const ViewUserAppointmentsPage = () => {
  const history = useNavigate();

  const [appointmentList, setAppointmentList] = useState<
    MyAppointmentsTableObj[]
  >([]);

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
              My Doctor Appointments
            </h1>
            <Row className="d-flex justify-content-center my-4">
              {appointmentList.length > 0 ? (
                <Row className="w-100">
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Table<MyAppointmentsTableObj>
                      columns={AppointmentsTableColumns}
                      dataSource={appointmentList}
                      pagination={false}
                      scroll={{ x: true }}
                      className="responsive-table"
                    />
                  </Col>
                </Row>
              ) : (
                <Empty
                  description={
                    <Typography.Text>No Appointments</Typography.Text>
                  }
                />
              )}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewUserAppointmentsPage;
