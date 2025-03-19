import { useEffect, useState } from "react";
import { Avatar, Button, Col, Input, Row } from "antd";
import { CaretLeftOutlined, SendOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import userImg from "../assets/images/userImg-2.jpg";
import chantBg from "../assets/images/chantBG.png";
import "../styles/chatPageStyles.scss";
import { ArrowLeft } from "react-feather";
import * as constants from "../util/constants";
import { Cookies } from "typescript-cookie";

const UserChatPage = () => {
  const history = useNavigate();

  const [doctorId, setDoctorId] = useState<number>();
  const [dogOwnerId, setDogOwnerId] = useState<number>();
  const [messages, setMessages] = useState([
    { id: 1, sender: "doctor", text: "HI", time: "20:22" },
    {
      id: 2,
      sender: "doctor",
      text: "Tell me about your dog's behaviour",
      time: "20:25",
    },
    {
      id: 3,
      sender: "user",
      text: "My Dog has some health issues",
      time: "20:24",
    },
  ]);
  const [message, setMessage] = useState("");
  const [isDoctorLoggedIn, setIsDoctorLoggedIn] = useState(false);

  useEffect(() => {
    const drId = Cookies.get(constants.DOCTOR_ID)
      ? parseInt(Cookies.get(constants.DOCTOR_ID) as string)
      : undefined;
    console.log(drId, "doctor id from cookies");
    setDoctorId(drId);

    const ownerId = Cookies.get(constants.DOG_OWNER_ID)
      ? parseInt(Cookies.get(constants.DOG_OWNER_ID) as string)
      : undefined;
    console.log(ownerId, "owner id from cookies");
    setDogOwnerId(ownerId);

    const authUserString = JSON.parse(Cookies.get("authUser") as string);

    // setIsDoctorLoggedIn(authUserString?.user === "doctor" ? true : false);

    if (authUserString?.user === "doctor") {
      // api call to get doctorge chat tika
    } else {
      // api call to get ownerge chat tika
    }

    Cookies.remove(constants.HEALTH_ISSUE);
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "user",
          text: message,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setMessage("");
    }
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", backgroundColor: "#f0f5ff" }}
    >
      {/* Left Section - Chat */}
      <div
        style={{
          flex: 3,
          display: "flex",
          flexDirection: "column",
          background: "#fff",
        }}
      >
        {/* Header */}
        <div
          className="py-3 px-3 d-flex align-items-center"
          style={{
            background: "#fff7db",
            borderBottom: "1px solid #ddd",
          }}
        >
          <ArrowLeft
            size={30}
            className="me-3"
            onClick={() => {
              isDoctorLoggedIn
                ? history(`/`)
                : history(`/doctor-profile/${doctorId}`);
            }}
          />
          {(dogOwnerId || doctorId) && (
            <div className="d-flex">
              <Avatar src={userImg} size={50} className="border border-dark" />
              <div className="ms-3">
                <h3 className="font-size-3 m-0">Dr Jhonne Doily</h3>
                <span className="font-size-5 text-gray">
                  Specialist of abcd efgh
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Chat Messages */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            background: `url(${chantBg}) repeat`,
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: "flex",
                justifyContent:
                  msg.sender === "user" ? "flex-end" : "flex-start",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  padding: "10px 15px",
                  borderRadius: "15px",
                  background: msg.sender === "user" ? "#d6e4ff" : "#fff3cd",
                  maxWidth: "70%",
                  position: "relative",
                }}
              >
                <span style={{ fontSize: "14px" }}>{msg.text}</span>
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    bottom: "-18px",
                    right: "5px",
                    color: "#666",
                  }}
                >
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderTop: "1px solid #ddd",
          }}
        >
          <Input
            placeholder="Write something..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onPressEnter={sendMessage}
            style={{ flex: 1, borderRadius: "20px", padding: "10px" }}
          />
          <Button
            type="primary"
            shape="circle"
            icon={<SendOutlined />}
            onClick={sendMessage}
            style={{ marginLeft: "10px" }}
          />
        </div>
      </div>

      {/* Right Section - Doctor List */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#e3f2fd",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!isDoctorLoggedIn && (
          <Button
            className=" rounded-4 w-100 mb-4"
            type="default"
            onClick={() => {
              history("/nearest-doctor");
            }}
          >
            Find Nearby Doctor To Start New Chat
          </Button>
        )}

        <Input
          placeholder="Search..."
          style={{
            marginBottom: "15px",
            borderRadius: "20px",
            padding: "10px",
          }}
        />

        {/* Doctor List */}
        {Array(3)
          .fill("")
          .map((_, index) => (
            <div
              className="chatListCard"
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                borderRadius: "10px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <img
                src={userImg}
                height={40}
                width={40}
                className="border border-dark rounded-circle"
              />
              <div style={{ marginLeft: "10px", flex: 1 }}>
                <h4 style={{ margin: 0, fontSize: "14px" }}>chat name</h4>
                <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
                  text
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserChatPage;
