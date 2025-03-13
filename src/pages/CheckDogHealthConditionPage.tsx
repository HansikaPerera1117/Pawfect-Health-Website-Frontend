import "../styles/common/commonStyles.scss";
import "../styles/dogHealthConditionPageStyles.scss";
import { useNavigate } from "react-router-dom";
import {
  countDescription,
  customToastMsg,
  handleError,
} from "../util/commonFunctions";
import dogImg from "../assets/images/healthPredictPageImg.png";
import { useState } from "react";
import {
  Button,
  Col,
  Form,
  GetProp,
  Input,
  Radio,
  Row,
  Select,
  UploadProps,
} from "antd";
import NavBar from "../components/common/NavBar";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const CheckDogHealthConditionPage = () => {
  const history = useNavigate();
  const [fileType, setFileType] = useState<string>("File");
  const [DNASequence, setDNASequence] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [contactNo, setContactNo] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [NICNumber, setNICNumber] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [gender, setGender] = useState<string>();

  const [form] = Form.useForm();

  return (
    <>
      <NavBar />
      <div
        className="position-relative"
        style={{
          backgroundColor: "white",
          height: "auto",
        }}
      >
        <div className="w-100 d-flex justify-content-center">
          <div className="mainTextDiv w-90" style={{ margin: "120px 0 0 0" }}>
            {" "}
            <h1 className="font-size-1 mainText font-weight-semi-bold   text-center text-lg-start font-family-2">
              Assess Your Dog’s Health in Minutes
            </h1>
            <p className="font-size-5  subText font-weight-light align-self-end  text-center text-lg-start">
              Answer a few simple questions and get instant insights into your
              dog’s well-being—because a healthy pup is a happy pup!
            </p>
            <Form
              form={form}
              layout="vertical"
              className="mt-5 d-flex flex-column align-items-center w-100"
            >
              <Row className="w-100">
                <Col xs={24} sm={24} md={12} className="pe-0 pe-md-3">
                  <Form.Item
                    name="fullName"
                    label={
                      <span className="font-size-4">Perpetrator Full Name</span>
                    }
                  >
                    <Input
                      size="large"
                      id="fullName"
                      name="fullName"
                      value={fullName}
                      placeholder="Enter perpetrator's full name"
                      className="rounded-4 p-3"
                      type="text"
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="ps-0 ps-md-3">
                  <Form.Item
                    name="contactNo"
                    label={<span className="font-size-4">Contact No</span>}
                  >
                    <Input
                      size="large"
                      id="contactNo"
                      name="contactNo"
                      value={contactNo}
                      placeholder="Enter perpetrator's contact no"
                      className="rounded-4 p-3"
                      type="text"
                      onChange={(e) => setContactNo(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="pe-0 pe-md-3">
                  <Form.Item
                    name="fullName"
                    label={
                      <span className="font-size-4">Perpetrator Full Name</span>
                    }
                  >
                    <Select
                      showSearch
                      placeholder="Select a person"
                      optionFilterProp="label"
                      style={{ height: 55 }}
                      // onChange={onChange}
                      // onSearch={onSearch}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "tom",
                          label: "Tom",
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="ps-0 ps-md-3">
                  <Form.Item
                    name="contactNo"
                    label={<span className="font-size-4">Contact No</span>}
                  >
                    <Select
                      showSearch
                      style={{ height: 55 }}
                      placeholder="Select a person"
                      optionFilterProp="label"
                      // onChange={onChange}
                      // onSearch={onSearch}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "tom",
                          label: "Tom",
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="pe-0 pe-md-3">
                  <Form.Item
                    name="age"
                    label={<span className="font-size-4">Age</span>}
                  >
                    <Input
                      size="large"
                      id="age"
                      name="age"
                      value={age}
                      placeholder="Enter perpetrator's age"
                      className="rounded-4 p-3"
                      type="text"
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="ps-0 ps-md-3">
                  <Form.Item
                    name="NICNumber"
                    label={<span className="font-size-4">NIC Number</span>}
                  >
                    <Input
                      size="large"
                      id="NICNumber"
                      name="NICNumber"
                      value={NICNumber}
                      placeholder="Enter perpetrator's nic number"
                      className="rounded-4 p-3"
                      type="text"
                      onChange={(e) => setNICNumber(e.target.value)}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} className="ps-0 ps-md-3">
                  <Form.Item
                    className="align-self-start w-100 ps-5 ps-lg-0"
                    name="gender"
                    label={<span className="font-size-4">Gender</span>}
                  >
                    <Radio.Group
                      name="gender"
                      value={gender}
                      onChange={(e) => {
                        setGender(e.target?.value);
                      }}
                    >
                      <Radio value="male" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Male
                        </span>
                      </Radio>

                      <Radio value="female" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          Female
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="ps-0 ps-md-3">
                  <Form.Item
                    name="contactNo"
                    label={<span className="font-size-4">Contact No</span>}
                  >
                    <Select
                      showSearch
                      style={{ height: 55 }}
                      placeholder="Select a person"
                      optionFilterProp="label"
                      // onChange={onChange}
                      // onSearch={onSearch}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "tom",
                          label: "Tom",
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="pe-0 pe-md-3">
                  <Form.Item
                    name="age"
                    label={<span className="font-size-4">Age</span>}
                  >
                    <Input
                      size="large"
                      id="age"
                      name="age"
                      value={age}
                      placeholder="Enter perpetrator's age"
                      className="rounded-4 p-3"
                      type="text"
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="ps-0 ps-md-3">
                  <Form.Item
                    name="NICNumber"
                    label={<span className="font-size-4">NIC Number</span>}
                  >
                    <Input
                      size="large"
                      id="NICNumber"
                      name="NICNumber"
                      value={NICNumber}
                      placeholder="Enter perpetrator's nic number"
                      className="rounded-4 p-3"
                      type="text"
                      onChange={(e) => setNICNumber(e.target.value)}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} className="ps-0 ps-md-3">
                  <Form.Item
                    className="align-self-start w-100 ps-5 ps-lg-0"
                    name="gender"
                    label={<span className="font-size-4">Gender</span>}
                  >
                    <Radio.Group
                      name="gender"
                      value={gender}
                      onChange={(e) => {
                        setGender(e.target?.value);
                      }}
                    >
                      <Radio value="male" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Male
                        </span>
                      </Radio>

                      <Radio value="female" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          Female
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <Row className="my-5 pb-5 d-flex justify-content-center justify-content-lg-start">
              <Col xs={20} sm={16} md={8}>
                <Button
                  className="px-4 py-4  font-size-4 w-100 rounded-4"
                  size="large"
                  type="default"
                  // onClick={handleStartListingClick}
                >
                  Check Dog Health
                </Button>
              </Col>
            </Row>
            <Row className="d-flex justify-content-end">
              <img
                src={dogImg}
                className="healthPredictionDogImg"
                style={{
                  width: "380px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckDogHealthConditionPage;
