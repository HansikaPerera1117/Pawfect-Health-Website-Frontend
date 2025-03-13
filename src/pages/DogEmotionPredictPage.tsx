import "../styles/common/commonStyles.scss";
import "../styles/dogEmotionPredictionPageStyles.scss";
import { useNavigate } from "react-router-dom";
import { customToastMsg, handleError } from "../util/commonFunctions";
import { useState } from "react";
import { Card, Form, message, Upload, UploadProps } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import NavBar from "../components/common/NavBar";
import dogImg01 from "../assets/images/emotionPredictPageImg01.png";
import dogImg02 from "../assets/images/emotionPredictPageImg02.png";

const DogEmotionPredictPage = () => {
  const history = useNavigate();
  const [fileType, setFileType] = useState<string>("File");
  const [DNASequence, setDNASequence] = useState<string>("");

  const [form] = Form.useForm();

  const { Dragger } = Upload;

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
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
            <h1 className="font-size-1 mainText font-weight-semi-bold   text-center text-lg-start font-family-2 mt-5 mt-lg-0">
              Decode Your Dog’s Emotions with AI
            </h1>
            <p className="font-size-5 subText font-weight-light align-self-end  text-center text-lg-start">
              Upload your dog's bark and uncover their mood instantly—because
              every bark tells a story! This keeps it engaging and aligns with
              the AI-powered emotion detection concept.
            </p>
            <Form
              form={form}
              layout="vertical"
              className="mt-5 d-flex flex-column align-items-center w-100"
            >
              <Form.Item name="DNASequence" className="w-75 mt-5 bg-white">
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Upload your dogs voice <strong>Audio file</strong>
                  </p>
                  <p className="ant-upload-hint my-0">
                    Drag and drop your file here or click to browse.
                  </p>
                  <p className="ant-upload-hint mt-0">
                    Supported file formats: .mp3.
                  </p>
                </Dragger>
              </Form.Item>
              <Card
                className="text-center my-5 rounded-5 emotionPredictionCard"
                style={{
                  width: "60%",
                  background:
                    "linear-gradient(180deg, rgba(107, 174, 214, 0.35) 67%, rgba(247, 220, 111, 0.23) 100%)",
                }}
              >
                <h5 className="font-size-2 font-weight-normal cardHeading">
                  Your dog is in <strong>{"Prediction"}</strong> mood
                </h5>
                <p>
                  Faster, Smarter, and More Accurately Unleashing the Power of
                  Artificial Intelligence to Detect healthcare issues and Solve
                  Cases Faster, Smarter, and More Accurately Unleashing the
                  Power of Artificial Intelligence to Detect healthcare issues
                  and Solve Cases Faster, Smarter, and More
                  Accurately.Unleashing the Power of Artificial Intelligence to
                </p>
              </Card>
              <img
                src={dogImg01}
                className="emotionPredictionDogImages"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "5%", // Adjust position for responsiveness
                  width: "20vw", // Use viewport width for responsiveness
                  maxWidth: "400px", // Set a max width to prevent too large images
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              <img
                src={dogImg02}
                className="emotionPredictionDogImages"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: "5%", // Adjust position for responsiveness
                  width: "20vw",
                  maxWidth: "400px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default DogEmotionPredictPage;
