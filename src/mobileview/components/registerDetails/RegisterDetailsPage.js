import * as React from "react";
import { useState, useEffect } from "react";

import { Redirect, Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import SwipeableViews from "react-swipeable-views";

import LegalIdentities from "./LegalIdentities";
import ContactInformation from "./ContactInfo";

import { CircularProgress } from "@material-ui/core";

import { REACT_APP_BASE_URL } from "../../../common/constant/env";
import axios from "axios";
import { Constants } from "../../../common/constant/localstorage";
import "./css/RegisterDetailsStyle.css";
import RegisterDetailsForm from "./RegisterDetailsForm";

export default function RegisterDetailsPage(props) {
  const {
    match,
    registerDetails,
    registerDetailsResult,
    stateListResult,
    StateListAction,
    AreaListAction,
    areaListResult,
    CityListAction,
    cityListResult,
    GSTListAction,
    gstListResult,
  } = props;

  const [state, setState] = useState("00000");
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");
  const [city, setCity] = useState("00000");
  const [cityCode, setCityCode] = useState("");
  const [cityName, setCityName] = useState("");
  const [area, setArea] = useState("00000");
  const [areaCode, setAreaCode] = useState("");
  const [areaName, setAreaName] = useState("");
  const [gstType, setGstType] = useState("00000");



  
  useEffect(() => {
    // const form = new FormData();
    // form.append("c_state_code",state)
    // CityListAction(form);
    let state_arr =[];
    state_arr=state.split(/[,]+/);
    // console.log(state,"state");
    setStateCode(state_arr[0]);
    setStateName(state_arr[1]);

    // console.log(state_arr[0],"ARRAY 1");
    // console.log(state_arr[1],"ARRAY 2");

    CityListAction(state_arr[0]);
  }, [state]);

  
  useEffect(() => {
    // const form = new FormData();
    // form.append("c_city_code",city)
    // AreaListAction(form);

    let city_arr =[];
    city_arr=city.split(/[,]+/);

    setCityCode(city_arr[0]);
    setCityName(city_arr[1]);

    AreaListAction(city_arr[0]);
  }, [city]);



  useEffect(() => {
    // const form = new FormData();
    // form.append("c_city_code",city)
    // AreaListAction(form);

    let area_arr =[];
    area_arr=area.split(/[,]+/);

    setAreaCode(area_arr[0]);
    setAreaName(area_arr[1]);

    // AreaListAction(city_arr[0]);
  }, [area]);

  const handleChanges = (event) => {
    let { name, value } = event.target;
    if (name === "c_state_name") {
      setState(event.target.value);
    } else if (name === "c_city_name") {
      setCity(event.target.value);
    } else if (name === "c_area_name") {
      setArea(event.target.value);
    } else if (name === "c_gst_type") {
      setGstType(event.target.value);
    }
  };

  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [areaList, setAreaList] = useState([]);

  const [inputs, setInputs] = useState({
    c_mobile_no: localStorage.getItem(Constants.MOBILE_NO),
    c_name: localStorage.getItem(Constants.NAME),
    c_seller: match.params.type === "seller" ? "Y" : "N",
    c_buyer: match.params.type === "buyer" ? "Y" : "N",
    c_email: "",
    c_firm_contact_person: "",
    c_firm_address1: "",
    c_firm_address2: "",
    c_state_name: "",
    c_city_name: "",
    c_area_name: "",
    c_state_code: "",
    c_city_code: "",
    c_area_code: "",
    c_pincode: "",
    c_landmark: "",
    c_druglicense_no1: "",
    c_druglicense_no2: "",
    c_druglicense_expiry_date: "",
    c_gst_type: -1,
    c_gst_no: "",
    c_narcotic_no: "",
    c_narcotic_no_img: "",
    c_druglicense_no1_img: "",
    c_druglicense_no2_img: "",
    c_druglicense_no1_img_name: "",
    c_druglicense_no2_img_name: "",
    c_narcotic_no_img_name: "",
  });

  const [errors, setErrors] = useState({
    c_mobile_no: false,
    c_name: false,
    c_email: false,
    c_firm_contact_person: false,
    c_firm_address1: false,
    c_firm_address2: false,
    c_state_name: false,
    c_city_name: false,
    c_area_name: false,
    c_pincode: false,
    c_card_holder_name: false,
    c_card_no: false,
    d_card_exp: false,
    c_card_ifsc: false,
    c_druglicense_no1: false,
    c_druglicense_no2: false,
    c_druglicense_expiry_date: false,
    c_gst_type: false,
    c_gst_no: false,
    c_narcotic_no: false,
  });

  const [errMsg, setErrMsg] = useState("");

  const [value, setValue] = React.useState(0);

  const [drugExpiryDate, setDrugExpiryDate] = useState(null);
  function handleDrugExpiryDate(date) {
    let selDate = "";
    setErrors({ ...errors, c_druglicense_expiry_date: false });
    if (date !== null) {
      selDate = `${date?.getFullYear()}-${
        date.getMonth() + 1
      }-${date?.getDate()}`;
    }

    setInputs({ ...inputs, c_druglicense_expiry_date: selDate });
    setDrugExpiryDate(date);
  }

  const handleInputs = (e) => {
    let { name, value } = e.target;

    setErrMsg("");
    setErrors({ ...errors, [name]: false });

    if (name === "c_firm_contact_person") {
      if (value.length > 16) {
        value = value.slice(0, 16);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if (name === "c_firm_address1" || name === "c_firm_address2") {
      if (value.length > 20) {
        value = value.slice(0, 20);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if (
      name === "c_druglicense_no1" ||
      name === "c_druglicense_no2" ||
      name === "c_gst_no"
    ) {
      if (value.length > 15) {
        value = value.slice(0, 15);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if (name === "c_pincode") {
      if (value.length > 6) {
        value = value.slice(0, 6);
      } else {
        setInputs({ ...inputs, [name]: value, c_state_name: "" });
      }
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };
  const handleBlur = (e) => {
    let { name, value } = e.target;

    if (name === "c_firm_contact_person") {
      if (!/^[A-Za-z\s]+$/.test(value) || value.length < 4) {
        setErrors({ ...errors, [name]: true });
      }
    } else if (name === "c_email") {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        setErrors({ ...errors, [name]: true });
      }
    } else if (name === "c_firm_address1" && value.length < 4) {
      setErrors({ ...errors, [name]: true });
    } else if (name === "c_firm_address2" && value.length < 4) {
      setErrors({ ...errors, [name]: true });
    } else if (name === "c_gst_no") {
      // if(!(/^[0-9a-zA-Z]+$/.test(value)) || value.length < 15){
      if (
        !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value)
      ) {
        setErrors({ ...errors, [name]: true });
      }
    } else if (name === "c_pincode") {
      if (value.length < 6) {
        setErrors({ ...errors, [name]: true });
      }
    } else if (name === "c_druglicense_no1") {
      if (value.length < 13) {
        setErrors({ ...errors, [name]: true });
      }
      // if(value === "" && inputs.c_druglicense_no1_img_name !== ""){
      //   setErrors({ ...errors, [name]: true });
      // }
      // if(value !== "" && inputs.c_druglicense_no1_img_name === ""){
      //   setErrors({ ...errors, [name]: true });
      // }
    } else if (name === "c_druglicense_no2" && value !== "") {
      if (value.length < 13) {
        setErrors({ ...errors, [name]: true });
      }
      // if(value === "" && inputs.c_druglicense_no2_img_name !== ""){
      //   setErrors({ ...errors, [name]: true });
      // }
      // if(value !== "" && inputs.c_druglicense_no2_img_name === ""){
      //   setErrors({ ...errors, [name]: true });
      // }
    } else if (name === "c_narcotic_no") {
      // if(value === "" && inputs.c_narcotic_no_img_name !== ""){
      //   setErrors({ ...errors, [name]: true });
      // }
      // if(value !== "" && inputs.c_narcotic_no_img_name === ""){
      //   setErrors({ ...errors, [name]: true });
      // }
    }
  };

  const handleUpload = (event, url) => {
    const { name, id } = event.target;
    setErrors({ ...errors, [id]: false });

    var file = event.target.files[0];
    var reader = new FileReader();

    var filename = event.target.files[0].name;

    reader.onloadend = function () {
      // const headers = {
      //   "Content-Type": "application/json",
      //   "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
      //   "x-csquare-firm-id": localStorage.getItem(Constants.FIRM_ID),
      // };
      const headers = {
        "Content-Type": "application/json",
        "X-csquare-api-token": localStorage.getItem(Constants.TOKEN),
        "X-csquare-api-key": localStorage.getItem(Constants.KEY),
      };
      const body = {
        docName: filename,
        docData: reader.result,
        firmId: localStorage.getItem(Constants.FIRM_ID),
      };

      axios
        .post(`${REACT_APP_BASE_URL}/firm/image/${url}`, body, { headers })
        .then((response) => {
          if (response.data.appStatusCode === 0) {
            if (response.data.payloadJson !== null) {
              setInputs({
                ...inputs,
                [`${name}_name`]: filename,
                [name]: response.data.payloadJson.URI,
              });
            }
          } else {
            setErrMsg(response.data.messages[0]);
          }
        })
        .catch((error) => {
          setErrMsg("Something went wrong, Please try again later!");
        });
    };
    const temp = inputs;
    if (temp[id] === "") {
      setErrors({ ...errors, [id]: true });
    }

    reader.readAsDataURL(file);
  };

  const handleSearchChange = (event, value, name) => {
    setErrors({ ...errors, [name]: false });
    setInputs({ ...inputs, [name]: value });
  };

  const handleSearchOnChange = (event, value, name) => {
    if (value !== null) {
      setInputs({ ...inputs, [name]: value.c_code });
    } else {
      setInputs({ ...inputs, [name]: "" });
    }
  };

  const handleSubmit = () => {
    if (errMsg !== "") {
    } else if (
      inputs.c_firm_contact_person === "" ||
      errors.c_firm_contact_person === true
    ) {
      setErrors({ ...errors, c_firm_contact_person: true });
      setValue(0);
      setActiveStep(0);
    } else if (inputs.c_email === "" || errors.c_email === true) {
      setErrors({ ...errors, c_email: true });
      setValue(0);
      setActiveStep(0);
    } else if (
      inputs.c_firm_address1 === "" ||
      errors.c_firm_address1 === true
    ) {
      setErrors({ ...errors, c_firm_address1: true });
      setValue(0);
      setActiveStep(0);
    } else if (
      inputs.c_firm_address2 === "" ||
      errors.c_firm_address2 === true
    ) {
      setErrors({ ...errors, c_firm_address2: true });
      setValue(0);
      setActiveStep(0);
    } else if (inputs.c_pincode === "" || errors.c_pincode === true) {
      setErrors({ ...errors, c_pincode: true });
      setValue(0);
      setActiveStep(0);
    } else if (inputs.c_state_name === "" || errors.c_state_name === true) {
      setErrors({ ...errors, c_state_name: true });
      setValue(0);
      setActiveStep(0);
    } else if (inputs.c_city_name === "" || errors.c_city_name === true) {
      setErrors({ ...errors, c_city_name: true });
      setValue(0);
      setActiveStep(0);
    } else if (inputs.c_area_name === "" || errors.c_area_name === true) {
      setErrors({ ...errors, c_area_name: true });
      setValue(0);
      setActiveStep(0);
    } else if (
      (match.params.type === "seller" && inputs.c_druglicense_no1 === "") ||
      (match.params.type === "seller" && errors.c_druglicense_no1 === true)
    ) {
      setErrors({ ...errors, c_druglicense_no1: true });
    } else if (
      match.params.type === "seller" &&
      errors.c_druglicense_no2 === true
    ) {
      setErrors({ ...errors, c_druglicense_no2: true });
    } else if (
      (match.params.type === "seller" &&
        inputs.c_druglicense_expiry_date === "") ||
      (match.params.type === "seller" &&
        errors.c_druglicense_expiry_date === true)
    ) {
      setErrors({ ...errors, c_druglicense_expiry_date: true });
    } else if (
      (match.params.type === "seller" && inputs.c_gst_type === -1) ||
      (match.params.type === "seller" && errors.c_gst_type === true)
    ) {
      setErrors({ ...errors, c_gst_type: true });
    } else if (
      (match.params.type === "seller" && inputs.c_gst_no === "") ||
      (match.params.type === "seller" && errors.c_gst_no === true)
    ) {
      setErrors({ ...errors, c_gst_no: true });
    } else if (
      match.params.type === "seller" &&
      errors.c_narcotic_no === true
    ) {
      setErrors({ ...errors, c_narcotic_no: true });
    } else {
      // let body = {};

      // Object.entries(inputs).forEach((entry) => {
      //   if (
      //     entry[0] === "c_druglicense_no1_img_name" ||
      //     entry[0] === "c_druglicense_no2_img_name" ||
      //     entry[0] === "c_narcotic_no_img_name"
      //   ) {
      //   } else if (entry[1] !== "" && entry[1] !== -1) {
      //     body[entry[0]] = entry[1];
      //   }
      // });

      // registerDetails(body);



      const body={
        "c_type":match.params.type,
        "c_email":inputs.c_email,
        "c_firm_address1":inputs.c_firm_address1,
        "c_firm_address2":inputs.c_firm_address2,
        "c_firm_contact_person":inputs.c_firm_contact_person,
        "c_pincode":inputs.c_pincode,
        "c_state_name":stateName,
        "c_state_code":stateCode,
        "c_city_name":cityName,
        "c_city_code":cityCode,
        "c_area_name":areaName,
        "c_area_code":areaCode
      }
      registerDetails(body)
    }
  };

  useEffect(() => {
    GSTListAction();
    StateListAction();
    CityListAction("");
    AreaListAction("");
  }, []);

  // useEffect(() => {
  //   if (inputs.c_pincode !== undefined && inputs.c_pincode.length === 6) {
  //     axios
  //       .get(`${ENV.MASTER_BASE_URL}/mst/pin/${inputs.c_pincode}`)
  //       .then((response) => {
  //         if (response.data.appStatusCode === 0) {
  //           if (response.data.payloadJson !== null) {
  //             if (response.data.payloadJson.list[0] !== undefined) {
  //               setInputs({
  //                 ...inputs,
  //                 c_state_code: response.data.payloadJson.list[0].c_state_code,
  //                 c_state_name:
  //                   response.data.payloadJson.list[0].c_state_name.toLowerCase(),
  //               });
  //             } else {
  //               setErrMsg("No state is associated with the entered pin code.");
  //             }
  //           }
  //         }
  //       });
  //   }
  // }, [inputs.c_pincode]);

  useEffect(() => {
    setStateList(stateListResult.payload);
  }, [stateListResult]);

  useEffect(() => {
    setCityList(cityListResult.payload);
  }, [cityListResult]);

  useEffect(() => {
    setAreaList(areaListResult.payload);
  }, [areaListResult]);

  useEffect(() => {
    if (registerDetailsResult.error !== "") {
      setErrMsg(registerDetailsResult.error);
    }
  }, [registerDetailsResult]);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleStepChange = (newValue, oldValue) => {
    setActiveStep(newValue);
  };

  if (activeStep === 2) return <Redirect to="/home" />;

  return (
    <div className="registration mt-36">
      <h2 className="registration-title ">
        Sign Up {activeStep < 1 ? <Link to="/home">Skip</Link> : null}
      </h2>
      <p className="registration-subtitle">
        Please fill Business Information for next step.
      </p>
      <RegisterDetailsForm
        type={match.params.type}
        inputs={inputs}
        errors={errors}
        errMsg={errMsg}
        handleInputs={handleInputs}
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
        loading={registerDetailsResult.loading}
        drugExpiryDate={drugExpiryDate}
        handleDrugExpiryDate={handleDrugExpiryDate}
        stateList={stateList}
        cityList={cityList}
        areaList={areaList}
        handleUpload={handleUpload}
        value={value}
        handleStepChange={handleStepChange}
        handleNext={handleNext}
        gstListResult={gstListResult}
        handleSearchChange={handleSearchChange}
        handleSearchOnChange={handleSearchOnChange}
        handleChanges={handleChanges}
        activeStep={activeStep}
        state={state}
        city={city}
        area={area}
        gstType={gstType}
      ></RegisterDetailsForm>
      {/* <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        <ContactInformation />
        <LegalIdentities />
      
      </SwipeableViews>
      <div className="registration-bothgt"></div>
      <AppBar
        position="fixed"
        color="primary"
        className="registration-bottombar"
      >
        {match.params.type === "seller" ? 

        <MobileStepper
          variant="dots"
          steps={2}
          position="static"
          activeStep={activeStep}
          className="registrationSteps"
          nextButton={
            <Fab color="default" size="small" className="active-indi">
              {activeStep + 1}
            </Fab>
          }
          backButton={
            <Button size="small" onClick={handleNext}>
              {activeStep < 1 ? <>next</> : <>finish</>}
            </Button>
          }
        />
        :
        <Button
              variant="contained"
              color="primary"
              className="registrationStepsBtn"
              onClick={handleSubmit}
              disabled={registerDetailsResult.loading}
            >
              {registerDetailsResult.loading ? <CircularProgress className="spining-icon" /> : null}{" "}
              Done
            </Button> 
        
      }
      </AppBar> */}
    </div>
  );
}
