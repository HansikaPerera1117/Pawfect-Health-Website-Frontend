import "../styles/common/commonStyles.scss";
import "../styles/dogHealthConditionPageStyles.scss";
import { useNavigate } from "react-router-dom";
import {
  countDescription,
  customToastMsg,
  handleError,
} from "../util/commonFunctions";
import dogImg from "../assets/images/healthPredictPageImg.png";
import { useEffect, useState } from "react";
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
import { DogBreedsBySize, DogBreedsEnum } from "../util/enums/dogBreedsEnum";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const CheckDogHealthConditionPage = () => {
  const history = useNavigate();

  const [dogName, setDogName] = useState<string>("");
  const [selectedDogBreed, setSelectedDogBreed] = useState<string>("");
  const [dogBreedList, setDogBreedList] = useState<
    {
      label: JSX.Element;
      title: string;
      options: {
        label: JSX.Element;
        value: DogBreedsEnum;
      }[];
    }[]
  >([]);
  const [age, setAge] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [spayedOrNeutered, setSpayedOrNeutered] = useState<string>("");
  const [vaccinationStatus, setVaccinationStatus] = useState<string>("");

  const [feverStatus, setFeverStatus] = useState<string>("");
  const [eatingStatus, setEatingStatus] = useState<string>("");
  const [weaknessStatus, setWeaknessStatus] = useState<string>("");
  const [vomitingStatus, setVomitingStatus] = useState<string>("");
  const [sneezingStatus, setSneezingStatus] = useState<string>("");
  const [breathingStatus, setBreathingStatus] = useState<string>("");

  const [swellingStatus, setSwellingStatus] = useState<string>("");
  const [woundsStatus, setWoundsStatus] = useState<string>("");
  const [patchesStatus, setPatchesStatus] = useState<string>("");
  const [scratchItselfStatus, setScratchItselfStatus] = useState<string>("");

  const [eyesWateryStatus, setEyesWateryStatus] = useState<string>("");
  const [eyesDischargeStatus, setEyesDischargeStatus] = useState<string>("");
  const [earOdorStatus, setEarOdorStatus] = useState<string>("");
  const [headShakeStatus, setHeadShakeStatus] = useState<string>("");

  const [lessEatingStatus, setLessEatingStatus] = useState<string>("");
  const [drinkStatus, setDrinkStatus] = useState<string>("");
  const [abnormalStoolsStatus, setAbnormalStoolsStatus] = useState<string>("");

  const [aggressiveStatus, setAggressiveStatus] = useState<string>("");
  const [interactionStatus, setInteractionStatus] = useState<string>("");
  const [paceOrWhineStatus, setPaceOrWhineStatus] = useState<string>("");
  const [painStatus, setPainStatus] = useState<string>("");

  const [foodChangeStatus, setFoodChangeStatus] = useState<string>("");
  const [exposureToSickDogesStatus, setExposureToSickDogesStatus] =
    useState<string>("");

  const [form] = Form.useForm();

  useEffect(() => {
    const dogBreedList = Object.entries(DogBreedsBySize).map(
      ([size, breeds]) => ({
        label: size + " Breeds",
        title: size,
        options: breeds.map((breed) => ({
          label: breed,
          value: breed,
        })),
      })
    );
    setDogBreedList(dogBreedList);
  }, []);

  const getHealthPrediction = () => {
    let isValidate: boolean = false;

    dogName === ""
      ? customToastMsg("Please enter your dog's name", 2)
      : selectedDogBreed === ""
      ? customToastMsg("Select your dog's breed", 2)
      : age === ""
      ? customToastMsg("Please enter your dog's age", 2)
      : weight === ""
      ? customToastMsg("Please enter your dog's weight", 2)
      : gender === ""
      ? customToastMsg("Select your dog's gender", 2)
      : spayedOrNeutered === ""
      ? customToastMsg("Select your dog's spaying/neutering status", 2)
      : vaccinationStatus === ""
      ? customToastMsg("Select your dog's vaccination status", 2)
      : feverStatus === ""
      ? customToastMsg(
          "Select answer to 1st question in general symptoms section",
          2
        )
      : eatingStatus === ""
      ? customToastMsg(
          "Select answer to 2nd question in general symptoms section",
          2
        )
      : weaknessStatus === ""
      ? customToastMsg(
          "Select answer to 3rd question in general symptoms section",
          2
        )
      : vomitingStatus === ""
      ? customToastMsg(
          "Select answer to 4th question in general symptoms section",
          2
        )
      : sneezingStatus === ""
      ? customToastMsg(
          "Select answer to 5th question in general symptoms section",
          2
        )
      : breathingStatus === ""
      ? customToastMsg(
          "Select answer to 6th question in general symptoms section",
          2
        )
      : swellingStatus === ""
      ? customToastMsg(
          "Select answer to 1st question in skin and coat issues section",
          2
        )
      : woundsStatus === ""
      ? customToastMsg(
          "Select answer to 2nd question in skin and coat issues section",
          2
        )
      : patchesStatus === ""
      ? customToastMsg(
          "Select answer to 3rd question in skin and coat issues section",
          2
        )
      : scratchItselfStatus === ""
      ? customToastMsg(
          "Select answer to 4th question in skin and coat issues section",
          2
        )
      : eyesWateryStatus === ""
      ? customToastMsg(
          "Select answer to 1st question in eye & ear issues section",
          2
        )
      : eyesDischargeStatus === ""
      ? customToastMsg(
          "Select answer to 2nd question in eye & ear issues section",
          2
        )
      : earOdorStatus === ""
      ? customToastMsg(
          "Select answer to 3rd question in eye & ear issues section",
          2
        )
      : headShakeStatus === ""
      ? customToastMsg(
          "Select answer to 4th question in eye & ear issues section",
          2
        )
      : lessEatingStatus === ""
      ? customToastMsg(
          "Select answer to 1st question in digestive & eating problems section",
          2
        )
      : drinkStatus === ""
      ? customToastMsg(
          "Select answer to 2nd question in digestive & eating problems section",
          2
        )
      : abnormalStoolsStatus === ""
      ? customToastMsg(
          "Select answer to 3rd question in digestive & eating problems section",
          2
        )
      : aggressiveStatus === ""
      ? customToastMsg(
          "Select answer to 1st question in behavioral changes section",
          2
        )
      : interactionStatus === ""
      ? customToastMsg(
          "Select answer to 2nd question in behavioral changes section",
          2
        )
      : paceOrWhineStatus === ""
      ? customToastMsg(
          "Select answer to 3rd question in behavioral changes section",
          2
        )
      : painStatus === ""
      ? customToastMsg(
          "Select answer to 4th question in behavioral changes section",
          2
        )
      : foodChangeStatus === ""
      ? customToastMsg(
          "Select answer to 1st question in additional information section",
          2
        )
      : exposureToSickDogesStatus === ""
      ? customToastMsg(
          "Select answer to 2nd question in additional information section",
          2
        )
      : (isValidate = true);

    if (isValidate) {
      const payload = {
        Breed: selectedDogBreed,
        "Age (years)": age,
        "Weight (kg)": weight,
        Gender: gender,
        "Spayed/Neutered": spayedOrNeutered,
        "Vaccination Status": vaccinationStatus,
        Fever: feverStatus,
        "Eating Normally": eatingStatus,
        Lethargy: weaknessStatus,
        Vomiting: vomitingStatus,
        "Coughing/Sneezing": sneezingStatus,
        "Breathing Issue": breathingStatus,
        "Rash/Swelling": swellingStatus,
        "Wounds/Cuts": woundsStatus,
        "Hair Loss": patchesStatus,
        "Excessive Scratching": scratchItselfStatus,
        "Red/Watery Eyes": eyesWateryStatus,
        "Eye Discharge": eyesDischargeStatus,
        "Ear Odor": earOdorStatus,
        "Shakes Head": headShakeStatus,
        "Eating Less": lessEatingStatus,
        "Excessive Drinking": drinkStatus,
        "Abnormal Stools": abnormalStoolsStatus,
        "Aggressive/Irritable": aggressiveStatus,
        "Avoiding Interaction": interactionStatus,
        "Pacing/Whining": paceOrWhineStatus,
        "Pain Symptoms": painStatus,
        "Food Changes": foodChangeStatus,
        "Exposure to Sick Dogs": exposureToSickDogesStatus,
      };

      console.log(payload);

      history("/health-prediction-result");
    }
  };

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
              <h5 className="align-self-start mb-4">General Dog Information</h5>
              <Row className="w-100 ps-5">
                <Col xs={24} sm={24} md={12} className="pe-0 pe-md-3">
                  <Form.Item
                    name="dogName"
                    label={<span className="font-size-4">Dog's Name</span>}
                  >
                    <Input
                      size="large"
                      id="dogName"
                      name="dogName"
                      value={dogName}
                      placeholder="Enter your dog's name"
                      className="rounded-4 p-3"
                      type="text"
                      onChange={(e) => setDogName(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="ps-0 ps-md-3">
                  <Form.Item
                    name="selectedDogBreed"
                    label={<span className="font-size-4">Dog Breed</span>}
                  >
                    <Select
                      showSearch
                      placeholder="Select your dog breed"
                      optionFilterProp="label"
                      style={{ height: 55 }}
                      value={selectedDogBreed}
                      onChange={(e) => {
                        console.log(e);
                        setSelectedDogBreed(e ? e : "");
                      }}
                      options={dogBreedList}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="pe-0 pe-md-3">
                  <Form.Item
                    name="age"
                    label={
                      <span className="font-size-4">Dog's Age (in years)</span>
                    }
                  >
                    <Input
                      size="large"
                      id="age"
                      name="age"
                      max={30}
                      value={age}
                      placeholder="Enter your dog's age"
                      className="rounded-4 p-3"
                      type="number"
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="ps-0 ps-md-3">
                  <Form.Item
                    name="weight"
                    label={
                      <span className="font-size-4">Dog's Weight (in kg)</span>
                    }
                  >
                    <Input
                      size="large"
                      id="weight"
                      name="weight"
                      value={weight}
                      placeholder="Enter your dog's weight"
                      className="rounded-4 p-3"
                      type="number"
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100"
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
                      <Radio value="Male" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Male
                        </span>
                      </Radio>

                      <Radio value="Female" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          Female
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100"
                    name="spayedOrNeutered"
                    label={
                      <span className="font-size-4">Spayed / Neutered</span>
                    }
                  >
                    <Radio.Group
                      name="spayedOrNeutered"
                      value={spayedOrNeutered}
                      onChange={(e) => {
                        setSpayedOrNeutered(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100"
                    name="vaccinationStatus"
                    label={
                      <span className="font-size-4">Vaccination Status</span>
                    }
                  >
                    <Radio.Group
                      name="vaccinationStatus"
                      value={vaccinationStatus}
                      onChange={(e) => {
                        setVaccinationStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Up to date" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Up to date
                        </span>
                      </Radio>

                      <Radio value="Not up to date" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          Not up to date
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>

              <h5 className="align-self-start mt-5 mb-4">General Symptoms</h5>
              <Row className="w-100 ps-5">
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="feverStatus"
                    label={
                      <span className="font-size-4">
                        1. Does your dog have fever?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="feverStatus"
                      value={feverStatus}
                      onChange={(e) => {
                        setFeverStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                      <Radio value="NotShure" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          Not Shure
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="eatingStatus"
                    label={
                      <span className="font-size-4">
                        2. Is your dog eating normally?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="eatingStatus"
                      value={eatingStatus}
                      onChange={(e) => {
                        setEatingStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="weaknessStatus"
                    label={
                      <span className="font-size-4">
                        3. Does your dog show signs of lethargy or weakness?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="weaknessStatus"
                      value={weaknessStatus}
                      onChange={(e) => {
                        setWeaknessStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="vomitingStatus"
                    label={
                      <span className="font-size-4">
                        4. Is your dog vomiting?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="vomitingStatus"
                      value={vomitingStatus}
                      onChange={(e) => {
                        setVomitingStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="sneezingStatus"
                    label={
                      <span className="font-size-4">
                        5. Is your dog coughing or sneezing?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="sneezingStatus"
                      value={sneezingStatus}
                      onChange={(e) => {
                        setSneezingStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="breathingStatus"
                    label={
                      <span className="font-size-4">
                        6. Does your dog have difficulty breathing?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="breathingStatus"
                      value={breathingStatus}
                      onChange={(e) => {
                        setBreathingStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>

              <h5 className="align-self-start mt-5 mb-4">
                Skin and Coat Issues
              </h5>
              <Row className="w-100 ps-5">
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="swellingStatus"
                    label={
                      <span className="font-size-4">
                        1. Any visible rash, redness, or swelling?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="swellingStatus"
                      value={swellingStatus}
                      onChange={(e) => {
                        setSwellingStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="woundsStatus"
                    label={
                      <span className="font-size-4">
                        2. Any wounds or cuts on the body?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="woundsStatus"
                      value={woundsStatus}
                      onChange={(e) => {
                        setWoundsStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="patchesStatus"
                    label={
                      <span className="font-size-4">
                        3. Any hair loss or bald patches?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="patchesStatus"
                      value={patchesStatus}
                      onChange={(e) => {
                        setPatchesStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="scratchItselfStatus"
                    label={
                      <span className="font-size-4">
                        4. Does the dog scratch itself excessively?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="scratchItselfStatus"
                      value={scratchItselfStatus}
                      onChange={(e) => {
                        setScratchItselfStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>

              <h5 className="align-self-start mt-5 mb-4">Eye & Ear Issues</h5>
              <Row className="w-100 ps-5">
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="eyesWateryStatus"
                    label={
                      <span className="font-size-4">
                        1. Are the eyes red or watery?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="eyesWateryStatus"
                      value={eyesWateryStatus}
                      onChange={(e) => {
                        setEyesWateryStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="eyesDischargeStatus"
                    label={
                      <span className="font-size-4">
                        2. Any yellow or green discharge from the eyes?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="eyesDischargeStatus"
                      value={eyesDischargeStatus}
                      onChange={(e) => {
                        setEyesDischargeStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="earOdorStatus"
                    label={
                      <span className="font-size-4">
                        3. Any ear discharge or odor?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="earOdorStatus"
                      value={earOdorStatus}
                      onChange={(e) => {
                        setEarOdorStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="headShakeStatus"
                    label={
                      <span className="font-size-4">
                        4. Does the dog shake its head frequently?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="headShakeStatus"
                      value={headShakeStatus}
                      onChange={(e) => {
                        setHeadShakeStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>

              <h5 className="align-self-start mt-5 mb-4">
                Digestive & Eating Problems
              </h5>
              <Row className="w-100 ps-5">
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="lessEatingStatus"
                    label={
                      <span className="font-size-4">
                        1. Is your dog eating less than usual?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="lessEatingStatus"
                      value={lessEatingStatus}
                      onChange={(e) => {
                        setLessEatingStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="drinkStatus"
                    label={
                      <span className="font-size-4">
                        2. Does your dog drink excessive water?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="drinkStatus"
                      value={drinkStatus}
                      onChange={(e) => {
                        setDrinkStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="abnormalStoolsStatus"
                    label={
                      <span className="font-size-4">
                        3. Are there abnormal stools?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="abnormalStoolsStatus"
                      value={abnormalStoolsStatus}
                      onChange={(e) => {
                        setAbnormalStoolsStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Color" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Color
                        </span>
                      </Radio>
                      <Radio value="Texture" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Texture
                        </span>
                      </Radio>
                      <Radio value="Blood" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Blood
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>

              <h5 className="align-self-start mt-5 mb-4">Behavioral Changes</h5>
              <Row className="w-100 ps-5">
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="aggressiveStatus"
                    label={
                      <span className="font-size-4">
                        1. Is your dog acting more aggressive or irritable?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="aggressiveStatus"
                      value={aggressiveStatus}
                      onChange={(e) => {
                        setAggressiveStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="interactionStatus"
                    label={
                      <span className="font-size-4">
                        2. Is your dog hiding or avoiding interaction?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="interactionStatus"
                      value={interactionStatus}
                      onChange={(e) => {
                        setInteractionStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="paceOrWhineStatus"
                    label={
                      <span className="font-size-4">
                        3. Does your dog pace or whine excessively?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="paceOrWhineStatus"
                      value={paceOrWhineStatus}
                      onChange={(e) => {
                        setPaceOrWhineStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="painStatus"
                    label={
                      <span className="font-size-4">
                        4. Does your dog appear to be in pain?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="painStatus"
                      value={painStatus}
                      onChange={(e) => {
                        setPainStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Whining" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Whining
                        </span>
                      </Radio>

                      <Radio value="Limping" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Limping
                        </span>
                      </Radio>
                      <Radio
                        value="Difficulty Moving"
                        className="font-size-4 me-5"
                      >
                        <span className="font-size-4 font-weight-normal">
                          Difficulty Moving
                        </span>
                      </Radio>
                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>

              <h5 className="align-self-start mt-5 mb-4">
                Additional Information
              </h5>
              <Row className="w-100 ps-5">
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="foodChangeStatus"
                    label={
                      <span className="font-size-4">
                        1. Recent food changes?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="foodChangeStatus"
                      value={foodChangeStatus}
                      onChange={(e) => {
                        setFoodChangeStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  className="pe-0 pe-md-3"
                >
                  <Form.Item
                    className="align-self-start w-100 "
                    name="exposureToSickDogesStatus"
                    label={
                      <span className="font-size-4">
                        2. Any recent exposure to other sick dogs?
                      </span>
                    }
                  >
                    <Radio.Group
                      name="exposureToSickDogesStatus"
                      value={exposureToSickDogesStatus}
                      onChange={(e) => {
                        setExposureToSickDogesStatus(e.target?.value);
                      }}
                    >
                      <Radio value="Yes" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Yes
                        </span>
                      </Radio>

                      <Radio value="No" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          No
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <Row className="my-5 pb-5 d-flex justify-content-center justify-content-lg-start">
              <Col xs={20} sm={16} md={12} lg={12} xl={8}>
                <Button
                  className="px-4 py-4  font-size-4 w-100 rounded-4"
                  size="large"
                  type="default"
                  onClick={() => {
                    getHealthPrediction();
                  }}
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
