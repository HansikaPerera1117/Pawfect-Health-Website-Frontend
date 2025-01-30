import React from "react";
import MainLayout from "../layout/MainLayout";
import { Button, Card, Col, Row } from "antd";
import mainDogImage from "../assets/images/mainImage01.png";
import pawBgImage from "../assets/images/paw_bg.png";
import mapImage from "../assets/images/map.png";
import introImage from "../assets/images/introSecImg.png";
import vetImg01 from "../assets/images/vets/vet01.png";
import vetImg02 from "../assets/images/vets/vet02.png";
import vetImg03 from "../assets/images/vets/vet03.png";
import vetImg04 from "../assets/images/vets/vet04.png";
import vetImg05 from "../assets/images/vets/vet05.png";
import boneImg from "../assets/images/boneImg.png";
import pawImg from "../assets/images/pawImg.png";
import "../styles/homePageStyles.scss";
import "../styles/common/commonStyles.scss";

const HomePage = () => {
  const { Meta } = Card;

  return (
    <MainLayout>
      <div className="homepage-container">
        <Row
          className="position-relative"
          style={{
            backgroundColor: "white",
            height: "100%",
            padding: "2rem 1rem",
          }}
          justify="center"
          align="middle"
        >
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={14}
            xl={14}
            xxl={14}
            className="containerBox d-flex flex-column justify-content-center align-items-center align-items-lg-start"
          >
            <div className="mainTextDiv text-content">
              <p className="font-size-5 font-weight-light text-center text-lg-start m-0 me-0 me-lg-5 ">
                Empower your dog’s health with AI-driven tools for early illness
                detection, and emotional well-being insights plans—all in one
                seamless platform
              </p>
              <h1 className="mainText font-size-1 font-weight-semi-bold text-center text-lg-start font-family-2 my-4">
                Transforming Canine Care with Cutting-Edge AI Solutions
              </h1>
              <p className="subText font-size-3 font-weight-light text-center text-lg-start mt-4">
                At Pawfect Health, we believe every dog deserves the best care.
                Our innovative platform combines AI-powered diagnostics, and
                behavioral analysis to ensure your pet’s health and happiness.
                Whether it’s detecting early signs of illness, or understanding
                their emotional needs, we’ve got it covered. Join us in
                redefining pet healthcare—one wag at a time
              </p>
              <div className="button-container  my-4 d-flex justify-content-center justify-content-lg-start">
                <Button
                  className="secondary-button px-5"
                  size="large"
                  type="primary"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={10}
            xl={10}
            xxl={10}
            className="d-flex justify-content-center justify-content-lg-end"
          >
            <img
              src={mainDogImage}
              alt="Main Dog"
              className="mainDogImage"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Col>
        </Row>

        <div className="position-relative">
          <h1 className="containerBox  font-size-2 font-weight-semi-bold text-center text-lg-start font-family-2">
            Pawfect Health
          </h1>

          <h1 className="containerBox  font-size-4 font-weight-semi-bold text-center text-lg-start text-gray font-family-2">
            Care Tailored for Every Paw
          </h1>
          <img
            src={pawBgImage}
            alt="paw bg"
            className="position-absolute me-5"
            style={{ right: 0 }}
          />
          <Row className="containerBox text-center text-lg-start mx-3 mx-lg-0 flex-column-reverse flex-xl-row">
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={11}
              xxl={11}
              className="d-flex justify-content-center align-items-start"
            >
              <img
                src={introImage}
                alt="paw bg"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={13}
              xxl={13}
              className="ps-0 ps-lg-4"
            >
              <h1 className="font-size-3 font-weight-medium  mt-5 mt-lg-0">
                Who we are
              </h1>
              <p className="font-size-4">
                At Pawfect Health, we’re not just a platform—we’re your partner
                in ensuring your dog’s well-being. We understand that every pet
                is unique, and so are their health needs. By leveraging
                cutting-edge AI technology, we deliver personalized solutions
                that help pet owners make informed decisions about their furry
                friend's health. Whether it’s detecting potential illnesses
                early, we’re here to provide insights and support every step of
                the way.
              </p>
              <p className="font-size-4">
                Our platform bridges the gap between pet owners and advanced
                veterinary care. Traditional healthcare systems often rely on
                reactive measures, but Pawfect Health takes a proactive
                approach. With tools like predictive diagnostics, and emotion
                analysis, we empower you to stay ahead of your pet’s needs,
                ensuring a healthier and happier life for your dog.
              </p>
              <p className="font-size-4">
                We believe that technology should enhance, not complicate, your
                experience. That’s why Pawfect Health features an intuitive,
                user-friendly interface for pet owners and veterinarians.
                Whether you’re tracking your dog’s emotional well-being or
                consulting with a nearby vet, our platform simplifies the
                process, giving you more time to focus on what truly
                matters—your bond with your pet.
              </p>
              <p className="font-size-4">
                Pawfect Health isn’t just about technology—it’s about trust. Our
                team includes pet lovers, veterinary professionals, and AI
                experts who are dedicated to making the world a better place for
                pets. By combining our expertise with your love and care, we’re
                creating a new standard for pet healthcare. Join us on this
                journey to redefine how we care for our furry companions.
              </p>
            </Col>
          </Row>
          <Row className="containerBox text-center text-lg-start mx-3 mx-lg-0 flex-row-reverse">
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              xxl={24}
              className="my-5"
            >
              <h1 className="font-size-3 font-weight-medium text-center text-lg-start ">
                What Pawfect Health Offers
              </h1>

              <p className="font-size-4">
                Pawfect Health brings together innovative features to simplify
                and enhance your dog’s healthcare journey. Our platform offers
                everything you need to keep your pet happy and healthy—all
                powered by advanced AI technology
              </p>
              <ul className="font-size-4 text-start">
                <li>
                  <span className="fw-medium">Illness Detection: </span>
                  AI-powered diagnostics for early identification of health
                  issues.
                </li>
                <li>
                  <span className="fw-medium">Emotion Tracking: </span>
                  Behavioral insights to ensure your pet’s mental well-being.
                </li>
                <li>
                  <span className="fw-medium">Vet Connectivity: </span>Find
                  nearby veterinarians and consult via live chat.
                </li>
                <li>
                  <span className="fw-medium">User-Friendly Interface: </span>
                  Intuitive design for pet owners and detailed reports for vets.
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div>
          <h1 className="containerBox font-size-2 font-weight-semi-bold text-center text-lg-start font-family-2 mb-4">
            Instant Access to Trusted Veterinarians – Anytime, Anywhere!
          </h1>
          <img
            src={mapImage}
            alt="map"
            height={600}
            width="auto"
            className="w-100"
            style={{ right: 0, objectFit: "cover" }}
          />
          <div className="d-flex justify-content-center">
            <p className="font-size-4 text-center px-5 w-75">
              Need expert advice for your pet? Pawfect Health helps you find
              nearby veterinarians and connect via live chat for quick
              consultations. Whether it's a health concern or a routine
              check-up, get trusted guidance—anytime, anywhere!
            </p>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center w-100 textBar my-5">
          <div className="text-loop">
            <h1 className="iterableText d-flex align-items-center">
              <span className="secondary-color">Detect.</span>{" "}
              <span className="primary-color">Understand.</span>{" "}
              <span className="text-dark">Care.</span>
              <img
                alt="pawImg"
                src={pawImg}
                height={60}
                width="auto"
                className="mx-3"
              />
              <span className="secondary-color">
                Smarter Pet Care, Powered by AI.
              </span>
              <img alt="boneImg" src={boneImg} height={60} width="auto" />
            </h1>
          </div>
        </div>
        <div className="containerBox my-5 text-center text-lg-start">
          <h1 className=" font-size-2 font-weight-semi-bold  font-family-2 mb-4">
            Meet Our Trusted Veterinarians
          </h1>

          <p className="font-size-4 mb-5">
            At Pawfect Health, we connect you with experienced and compassionate
            veterinarians dedicated to providing the best care for your furry
            friend. Whether you need expert advice, a quick consultation, or a
            full health check-up, our vets are here to help—anytime, anywhere
          </p>
          <Row className="d-flex justify-content-center">
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              xl={6}
              xxl={4}
              className="px-4 py-2"
            >
              <Card
                hoverable
                style={{ width: "100%", borderBottom: "5px solid red" }}
                cover={
                  <img
                    alt="vetImage"
                    src={vetImg01}
                    height={260}
                    width="auto"
                    style={{ objectFit: "cover" }}
                  />
                }
              >
                <Meta
                  title={
                    <div>
                      <h5 className="font-size-4 font-weight-semi-bold m-0">
                        Dr. Emily Carter
                      </h5>
                      <h5 className="font-weight-medium font-size-5 text-dark m-0 text-wrap">
                        {" "}
                        Canine Internal Medicine Specialize
                      </h5>
                    </div>
                  }
                  description={
                    <div>
                      <h5 className="font-weight-normal font-size-5 m-0">
                        {" "}
                        <span className="font-weight-medium  ">
                          Location :
                        </span>{" "}
                        Colombo 05
                      </h5>
                      <h5 className="font-weight-normal font-size-5 m-0">
                        {" "}
                        <span className="font-weight-medium  ">
                          Experience :
                        </span>{" "}
                        10+ years
                      </h5>
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              xl={6}
              xxl={4}
              className="px-4 py-2"
            >
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={
                  <img
                    alt="vetImage"
                    src={vetImg02}
                    height={260}
                    width="auto"
                    style={{ objectFit: "cover" }}
                  />
                }
              >
                <Meta
                  title={
                    <div>
                      <h5 className="font-size-4 font-weight-semi-bold m-0">
                        Dr. Mark Robinson
                      </h5>
                      <h5 className="font-weight-medium font-size-5 text-dark m-0 text-wrap">
                        {" "}
                        Veterinary Dermatology Specialize
                      </h5>
                    </div>
                  }
                  description={
                    <div>
                      <h5 className="font-weight-normal font-size-5 m-0">
                        {" "}
                        <span className="font-weight-medium  ">
                          Location :
                        </span>{" "}
                        Gampaha
                      </h5>
                      <h5 className="font-weight-normal font-size-5 m-0">
                        {" "}
                        <span className="font-weight-medium  ">
                          Experience :
                        </span>{" "}
                        8+ years
                      </h5>
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              xl={6}
              xxl={4}
              className="px-4 py-2"
            >
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={
                  <img
                    alt="vetImage"
                    src={vetImg03}
                    height={260}
                    width="auto"
                    style={{ objectFit: "cover" }}
                  />
                }
              >
                <Meta
                  title={
                    <div>
                      <h5 className="font-size-4 font-weight-semi-bold m-0">
                        Dr. K.R. Chandrasiri
                      </h5>
                      <h5 className="font-weight-medium font-size-5 text-dark m-0 text-wrap">
                        {" "}
                        Emergency & Critical Care Specialize
                      </h5>
                    </div>
                  }
                  description={
                    <div>
                      <h5 className="font-weight-normal font-size-5 m-0">
                        {" "}
                        <span className="font-weight-medium  ">
                          Location :
                        </span>{" "}
                        Makola
                      </h5>
                      <h5 className="font-weight-normal font-size-5 m-0">
                        {" "}
                        <span className="font-weight-medium  ">
                          Experience :
                        </span>{" "}
                        11+ years
                      </h5>
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              xl={6}
              xxl={4}
              className="px-4 py-2"
            >
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={
                  <img
                    alt="vetImage"
                    src={vetImg04}
                    height={260}
                    width="auto"
                    style={{ objectFit: "cover" }}
                  />
                }
              >
                <Meta
                  title={
                    <div>
                      <h5 className="font-size-4 font-weight-semi-bold m-0">
                        Dr. Sarah Williams
                      </h5>
                      <h5 className="font-weight-medium font-size-5 text-dark m-0 text-wrap">
                        {" "}
                        Veterinary Dermatology Specialize
                      </h5>
                    </div>
                  }
                  description={
                    <div>
                      <h5 className="font-weight-normal font-size-5 m-0">
                        {" "}
                        <span className="font-weight-medium  ">
                          Location :
                        </span>{" "}
                        Maharagama
                      </h5>
                      <h5 className="font-weight-normal font-size-5 m-0">
                        {" "}
                        <span className="font-weight-medium  ">
                          Experience :
                        </span>{" "}
                        6+ years
                      </h5>
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              xl={6}
              xxl={4}
              className="px-4 py-2"
            >
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={
                  <img
                    alt="vetImage"
                    src={vetImg05}
                    height={260}
                    width="auto"
                    style={{ objectFit: "cover" }}
                  />
                }
              >
                <Meta
                  title={
                    <div>
                      <h5 className="font-size-4 font-weight-semi-bold m-0">
                        Dr. Rebeka Perera
                      </h5>
                      <h5 className="font-weight-medium font-size-5 text-dark m-0 text-wrap">
                        {" "}
                        Canine Internal Medicine Specialize
                      </h5>
                    </div>
                  }
                  description={
                    <div>
                      <h5 className="font-weight-normal font-size-5 m-0">
                        {" "}
                        <span className="font-weight-medium  ">
                          Location :
                        </span>{" "}
                        Nugegoda
                      </h5>
                      <h5 className="font-weight-normal font-size-5 m-0">
                        {" "}
                        <span className="font-weight-medium  ">
                          Experience :
                        </span>{" "}
                        13+ years
                      </h5>
                    </div>
                  }
                />
              </Card>
            </Col>
          </Row>
        </div>
        <div className="containerBox my-5 text-center text-lg-start">
          <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={10}>
              <h1 className=" font-size-2 font-weight-semi-bold  font-family-2 mb-4 ">
                Start Caring Smarter for Your Pet Today!
              </h1>
              <p className="font-size-4 mb-5">
                Give your furry friend the best care with Pawfect Health.
                Everything your pet needs from AI-powered illness detection to
                real-time vet consultations is just a click away. Join thousands
                of pet owners who trust Pawfect Health for smarter, stress-free
                pet care.
              </p>
              <Button className="py-4 px-4 rounded-3" type="default">
                Get Start With Pawfect Health
              </Button>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={14}></Col>
          </Row>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
