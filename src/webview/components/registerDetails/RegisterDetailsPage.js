import React, { useState, useEffect } from "react";
import { ENV } from "../../../common/constant/env";
import axios from "axios";
import { Constants } from "../../../common/constant/localstorage";

import AuthIllustration from "../../../assets/images/login-Illustration.svg";
import { Link, Redirect, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import RegisterDetailsForm from "./RegisterDetailsForm";

// import Illustration from "../../../assets/animation/Illustration.json";
// import LottiAnimations from "../../../common/lottieAnimation";
// import Alert from "@material-ui/lab/Alert";
// import CloseIcon from "@material-ui/icons/Close";
// import IconButton from "@material-ui/core/IconButton";
// import Collapse from "@material-ui/core/Collapse";
// import SucessRegisterNumPassPop from "../register/Popup/SuccessRegisterPopup";
import PincodePopup from "./popup/PincodePopup";


const RegisterDetailsPage = (props) => {
  let history = useHistory();
  const {
    match,
    registerDetails,
    registerDetailsResult,
    profileDetails,
    profileDetailsResult,
    imageupload,
    imageUploadResult,
    imageDeleteResult,
    imagedelete,
    GetStateCityArea,
    getStateCityAreaResult,
    GSTListAction,
    gstListResult,
  } = props;

console.log(profileDetailsResult,"################### profileDetailsResult")
  const [openModal1, setOpenModal1] = React.useState(false);
  const [value1, setValue1] = React.useState({
    c_area_name:""
  });

  // console.log(imageUploadResult.payload, "<<<<<<imageUploadResult");
  // console.log(imageDeleteResult, "<<<<<<imageUplimageDeleteResultoadResult");

  // const [state, setState] = useState("00000");
  // const [stateCode, setStateCode] = useState("");
  // const [stateName, setStateName] = useState("");
  // const [city, setCity] = useState("00000");
  // const [cityCode, setCityCode] = useState("");
  // const [cityName, setCityName] = useState("");
  // const [area, setArea] = useState("00000");
  // const [areaCode, setAreaCode] = useState("");
  // const [areaName, setAreaName] = useState("");
  // const [gstType, setGstType] = useState("00000");

  // useEffect(() => {
  //   let state_arr = [];
  //   state_arr = state.split(/[,]+/);
  //   setStateCode(state_arr[0]);
  //   setStateName(state_arr[1]);
  //   CityListAction(state_arr[0]);
  // }, [state]);

  // useEffect(() => {
  //   let city_arr = [];
  //   city_arr = city.split(/[,]+/);

  //   setCityCode(city_arr[0]);
  //   setCityName(city_arr[1]);

  //   AreaListAction(city_arr[0]);
  // }, [city]);

  // useEffect(() => {

  //   let area_arr = [];
  //   area_arr = area.split(/[,]+/);

  //   setAreaCode(area_arr[0]);
  //   setAreaName(area_arr[1]);

  // }, [area]);

  // const handleChanges = (event) => {
  //   let { name, value } = event.target;
  //   if (name === "c_state_name") {
  //     setState(event.target.value);
  //   } else if (name === "c_city_name") {
  //     setCity(event.target.value);
  //   } else if (name === "c_area_name") {
  //     setArea(event.target.value);
  //   } else if (name === "c_gst_type") {
  //     setGstType(event.target.value);
  //   }
  // };

  // const [stateList, setStateList] = useState([]);
  // const [cityList, setCityList] = useState([]);
  // const [areaList, setAreaList] = useState([]);

  const [inputs, setInputs] = useState({
    c_mobile_no: localStorage.getItem(Constants.MOBILE_NO),
    c_name: localStorage.getItem(Constants.NAME),
    c_seller: match.params.type === "seller" ? "Y" : "N",
    c_buyer: match.params.type === "buyer" ? "Y" : "N",
    c_email: "",
    c_firm_name: localStorage.getItem(Constants.NAME),
    c_firm_contact_person: "",
    c_firm_address1: "",
    c_firm_address2: "",
    c_state_name: "",
    c_state_code: "",
    c_city_name: "",
    c_city_code: "",
    // c_area_name: "",
    c_area_code: "",
    c_pincode: localStorage.getItem(Constants.PIN_CODE),
    c_landmark: "",
    c_druglicense_no1: "",
    c_druglicense_no2: "",
    c_druglicense_expiry_date: "",
    c_gst_type: "",
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
    c_firm_name:false,
    c_firm_contact_person: false,
    c_firm_address1: false,
    c_firm_address2: false,
    c_state_name: false,
    c_state_code: false,
    c_city_name: false,
    c_city_code: false,
    c_area_name: false,
    c_area_code: false,
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
  const [succMsg, setSuccMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const [drugExpiryDate, setDrugExpiryDate] = useState(null);

  // console.log(drugExpiryDate,"<<< drugExpiryDate")
  console.log(
    inputs.c_druglicense_expiry_date,
    "<<< c_druglicense_expiry_date"
  );

  function handleDrugExpiryDate(date) {
    let selDate = "";
    setErrors({ ...errors, c_druglicense_expiry_date: false });

    // console.log(date,"<<<<<date")
    if (date !== null) {
      let year1 = date?.getFullYear();
      let month1 = (date.getMonth() + 1).toString().padStart(2, "0");
      let date1 = date?.getDate().toString().padStart(2, "0");

      selDate = `${year1}-${month1}-${date1}`;
    }
    setInputs({ ...inputs, c_druglicense_expiry_date: selDate });

    setDrugExpiryDate(date);
  }

  const handleInputs = (e) => {
    let { name, value } = e.target;
    setSuccMsg("");
    setErrMsg("");
    setErrors({ ...errors, [name]: false });

    if (name === "c_firm_contact_person") {
      if (value.length > 64) {
        value = value.slice(0, 64);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if (name === "c_firm_address1" || name === "c_firm_address2") {
      if (value.length > 20) {
        value = value.slice(0, 20);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if (name === "c_druglicense_no1" || name === "c_druglicense_no2") {
      if (value.length > 15) {
        value = value.slice(0, 15);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if (name === "c_gst_no") {
      if (value.length > 15) {
        value = value.slice(0, 15);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    }
    // else if(name === "c_state_name"){
    //   if (value.length > 15) {
    //     value = value.slice(0, 15);
    //   } else {
    //     setInputs({ ...inputs, [name]: value });
    //   }
    // }
    // else if(name === "c_city_name"){
    //   if (value.length > 15) {
    //     value = value.slice(0, 15);
    //   } else {
    //     setInputs({ ...inputs, [name]: value });
    //   }
    // }
    // else if(name === "c_area_name"){
    //   if (value.length > 15) {
    //     value = value.slice(0, 15);
    //   } else {
    //     setInputs({ ...inputs, [name]: value });
    //   }
    // }
    else if (name === "c_pincode") {
      if (value.length > 6) {
        value = value.slice(0, 6);
      } else {
        setInputs({
          ...inputs,
          [name]: value,
          c_state_name: "",
          c_city_name: "",
          // c_area_name: "",
        });
        setValue1({
          c_area_name:""
        })
        // setInputs({ ...inputs, [name]: value });
      }
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };

  const handleBlur = (e) => {
    let { name, value } = e.target;

    if (name === "c_firm_contact_person") {
      let str = value;
      let firstLetter = str.charAt(0);
      if (firstLetter === " ") {
        setErrors({ ...errors, [name]: true });
      } else if (!/^(?=.*[a-zA-Z]).{4,64}$/.test(value)) {
        setErrors({ ...errors, [name]: true });
      }

      // if(!(/^[A-Za-z\s]+$/.test(value)) || value.length < 4){
      //   setErrors({ ...errors, [name]: true });
      // }
      //   if(!(/^(?=.*[a-zA-Z]).{4,16}$/.test(value))){
      //     setErrors({ ...errors, [name]: true });
      // }
    } else if (name === "c_email") {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        setErrors({ ...errors, [name]: true });
      }
    } else if (name === "c_firm_address1") {
      if (!/^(?=.*[a-zA-Z]).{4,250}$/.test(value)) {
        setErrors({ ...errors, [name]: true });
      }
    } else if (name === "c_state_name") {
      setErrors({ ...errors, [name]: true });
    }else if (name === "c_city_name") {
      setErrors({ ...errors, [name]: true });
    }
    // else if (name === "c_area_name") {
    //   setErrors({ ...errors, [name]: true });
    // }

    else if (name === "c_firm_address2") {
      if (!/^(?=.*[a-zA-Z]).{4,250}$/.test(value)) {
        setErrors({ ...errors, [name]: true });
      }
    } else if (name === "c_gst_no") {
      // if(!(/^[0-9a-zA-Z]+$/.test(value)) || value.length < 15){
      if (
        !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value)
      ) {
        setErrors({ ...errors, [name]: true });
      }
    } else if (name === "c_pincode") {
      if (value.length <= 6) {
        if (!/^[1-9]\d{5}$/.test(value)) {
          setErrors({ ...errors, [name]: true });
        }
      }
    }

    // else if(name === "c_druglicense_no1"){
    //   if(value.length < 13){
    //     setErrors({ ...errors, [name]: true });
    //   }
    //   if(value === "" && inputs.c_druglicense_no1_img_name !== ""){
    //     setErrors({ ...errors, [name]: true });
    //   }
    //   if(value !== "" && inputs.c_druglicense_no1_img_name === ""){
    //     setErrors({ ...errors, [name]: true });
    //   }
    // }
    // else if(name === "c_druglicense_no2" && value !== "" ){
    //   if(value.length < 13){
    //     setErrors({ ...errors, [name]: true });
    //   }
    // if(value === "" && inputs.c_druglicense_no2_img_name !== ""){
    //   setErrors({ ...errors, [name]: true });
    // }
    // if(value !== "" && inputs.c_druglicense_no2_img_name === ""){
    //   setErrors({ ...errors, [name]: true });
    // }
    // }
    // else if(name === "c_narcotic_no"){
    //   if(value === "" && inputs.c_narcotic_no_img_name !== ""){
    //     setErrors({ ...errors, [name]: true });
    //   }
    //   if(value !== "" && inputs.c_narcotic_no_img_name === ""){
    //     setErrors({ ...errors, [name]: true });
    //   }
    // }
  };





  const handleUpload2 = (e) => {
    const { name, value } = e.target;
    if (name === "c_druglicense_no1_img") {
      setInputs({ ...inputs, [name]: value });
    }
  };

  const handleUpload1 = (event, url) => {
    const { name, id } = event.target;
    setErrors({ ...errors, [id]: false });

    var file = event.target.files[0];
    var reader = new FileReader();

    var filename = event.target.files[0].name;

    reader.onloadend = function () {
      // const headers = {
      //   "Content-Type": "application/json",
      //   "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
      //   "x-csquare-firm-id": localStorage.getItem(Constants.FIRM_ID)
      // };
      // const body = {
      //   docName: filename,
      //   docData: reader.result,
      //   firmId:localStorage.getItem(Constants.FIRM_ID)
      // }
      // axios.post(`${ENV.BASE_URL}/firm/image/${url}`, body, { headers })
      //   .then(response => {
      //     if(response.data.appStatusCode === 0){
      //       if(response.data.payloadJson !== null){
      //         setInputs({...inputs, [`${name}_name`]: filename, [name]: response.data.payloadJson.URI})
      //       }
      //     }
      //     else {
      //       setErrMsg(response.data.messages[0])
      //     }
      //   })
      //   .catch(error => {
      //     setErrMsg("Something went wrong, Please try again later!")
      //   });
    };
    const temp = inputs;
    if (temp[id] === "") {
      setErrors({ ...errors, [id]: true });
    }

    reader.readAsDataURL(file);
  };

  const handleUpload = (event) => {
    const { name, id } = event.target;

    setErrors({ ...errors, [id]: false });

    let file = event.target.files[0];
    let reader = new FileReader();

    let filename = event.target.files[0].name;
    let idxDot = filename.lastIndexOf(".") + 1;
    let extFile = filename.substr(idxDot, filename.length).toLowerCase();

    if (
      extFile == "jpg" ||
      extFile == "jpeg" ||
      extFile == "png" ||
      extFile == "svg" ||
      extFile == "gif"
    ) {
      reader.onloadend = function () {
        // const inputs = {
        //   filename: filename,
        //   reader_result: reader.result,
        // };

        // console.log(inputs, "<<inputs");

        const form = new FormData();
        form.append("img", file);
        imageupload(form);
      };

      if (name === "c_druglicense_no1_img") {
        // setInputs({
        //   ...inputs,
        //   [`${name}_name`]: filename,
        //   [name]: filename,
        // });

        setInputs({
          ...inputs,
          [`${name}_name`]: imageUploadResult.payload.path,
          [name]: imageUploadResult.payload.path,
        });
      }

      const temp = inputs;
      if (temp[id] === "") {
        setErrors({ ...errors, [id]: true });
      }

      reader.readAsDataURL(file);
    } else {
      // alert("Please Select Valid Image")
      setErrMsg("Please Select Valid Image");
    }
  };

  const clickHandleCancel = (event) => {
    if (event === "c_dl1_img") {
      setInputs({ ...inputs, c_druglicense_no1_img: "" });

      const body = {
        path: imageUploadResult.payload.path,
      };
      imagedelete(body);
    }
  };

  // const handleSearchChange = (event, value, name) => {
  //   setErrors({ ...errors, [name]: false });
  //   setInputs({ ...inputs, [name]: value });
  // };

  // const handleSearchOnChange = (event, value, name) => {
  //   if (value !== null) {
  //     setInputs({ ...inputs, [name]: value.c_code });
  //     AreaListAction(value.c_code);
  //   } else {
  //     setInputs({ ...inputs, [name]: "" });
  //   }
  // };

  const handleSubmit = () => {
    // if (errMsg !== "") {
    // }
    // else

    if (
      inputs.c_firm_contact_person === "" ||
      errors.c_firm_contact_person === true
    ) {
      setErrors({ ...errors, c_firm_contact_person: true });
      setValue(0);
    } else if (inputs.c_email === "" || errors.c_email === true) {
      setErrors({ ...errors, c_email: true });
      setValue(0);
    } else if (
      inputs.c_firm_address1 === "" ||
      errors.c_firm_address1 === true
    ) {
      setErrors({ ...errors, c_firm_address1: true });
      setValue(0);
    } else if (
      inputs.c_firm_address2 === "" ||
      errors.c_firm_address2 === true
    ) {
      setErrors({ ...errors, c_firm_address2: true });
      setValue(0);
    } else if (inputs.c_pincode === "" || errors.c_pincode === true) {
      setErrors({ ...errors, c_pincode: true });
      setValue(0);
    }

    else if(inputs.c_state_name === "" || errors.c_state_name === true){
      setErrors({ ...errors, c_state_name: true });
    }
    else if(inputs.c_city_name === "" || errors.c_city_name === true){
      setErrors({ ...errors, c_city_name: true });
    }
    else if(inputs.c_area_name === "" || errors.c_area_name === true){
      setErrors({ ...errors, c_area_name: true });
    }
    // else if((match.params.type === "seller" && inputs.c_druglicense_no1 === "") ||
    //   (match.params.type === "seller" && errors.c_druglicense_no1 === true)){

    //     setErrors({ ...errors, c_druglicense_no1: true });
    // }
    // else if((match.params.type === "seller" && errors.c_druglicense_no2 === true)){
    //     setErrors({ ...errors, c_druglicense_no2: true });
    // }

    // else if (
    //   (match.params.type === "seller" &&
    //     inputs.c_druglicense_expiry_date === "") ||
    //   (match.params.type === "seller" &&
    //     errors.c_druglicense_expiry_date === true)
    // ) {
    //   setErrors({ ...errors, c_druglicense_expiry_date: true });
    // }
    else if (
      (match.params.type === "seller" && inputs.c_gst_type === -1) ||
      (match.params.type === "seller" && errors.c_gst_type === true)
    ) {
      setErrors({ ...errors, c_gst_type: true });
    } else if (
      (match.params.type === "seller" && inputs.c_gst_no === "") ||
      (match.params.type === "seller" && errors.c_gst_no === true)
    ) {
      setErrors({ ...errors, c_gst_no: true });
    }
    // else if (
    //   match.params.type === "seller" &&
    //   errors.c_narcotic_no === true
    // ) {
    //   setErrors({ ...errors, c_narcotic_no: true });
    // }
    else {
      // let body = {};

      // Object.entries(inputs).map(entry => {
      //   if(entry[0] === "c_druglicense_no1_img_name" || entry[0] === "c_druglicense_no2_img_name" || entry[0] === "c_narcotic_no_img_name"){

      //   } else if(entry[1] !== "" && entry[1] !== -1){
      //     body[entry[0]] = entry[1];
      //   }
      // })

      // const form = new FormData();

      // form.append("c_type",match.params.type);
      // if(match.params.type === "buyer"){
      //   form.append("c_buyer","Y");
      //   form.append("c_seller","N");
      // }else if(match.params.type === "seller"){
      //   form.append("c_buyer","N");
      //   form.append("c_seller","Y");
      // }
      // form.append("c_name",inputs.c_firm_contact_person)
      // form.append("c_firm_address",inputs.c_firm_address1)
      // form.append("c_firm_address1",inputs.c_firm_address2)
      // form.append("c_pincode",inputs.c_pincode)
      // form.append("c_state_code",state);
      // form.append("c_city_code",city);
      // form.append("c_area_code",area);

      // if(match.params.type === "seller"){
      // form.append("c_druglicense_no1",inputs.c_druglicense_no1);
      // form.append("c_druglicense_no1_img",inputs.c_druglicense_no1_img);
      // form.append("c_druglicense_expiry_date",inputs.c_druglicense_expiry_date);
      // form.append("c_gst_no",inputs.c_gst_no);
      // form.append("c_gst_type",gstType);
      // }

      // registerDetails(form)

      // console.log("cType",match.params.type);
      // console.log("c_name",inputs.c_firm_contact_person);
      // console.log("email",inputs.c_email);
      // console.log("c_firm_address",inputs.c_firm_address1);
      // console.log("c_firm_address1",inputs.c_firm_address2);
      // console.log("c_pincode",inputs.c_pincode);
      // console.log("c_state_code",stateCode);
      // console.log("c_state_name",stateName);
      // console.log("c_city_code",cityCode);
      // console.log("c_city_name",cityName);
      // console.log("c_area_code",areaCode);
      // console.log("c_area_name",areaName);

      const body = {
        c_firm_name: inputs.c_firm_name,
        c_br_code: "",
        c_mobile_no: inputs.c_mobile_no,
        c_pincode: inputs.c_pincode,
        c_firm_img: "",
        c_email: inputs.c_email,
        c_drug_license_no1: inputs.c_druglicense_no1,
        c_drug_license_no1_img: inputs.c_druglicense_no1_img_name,
        c_drug_license_no1_expiry_date: inputs.c_druglicense_expiry_date,
        c_drug_license_no2: "",
        c_drug_license_no2_img: "",
        c_drug_license_no2_expiry_date: "",
        c_drug_license_no3: "",
        c_drug_license_no3_img: "",
        c_drug_license_no3_expiry_date: "",
        c_gst_type: inputs.c_gst_type,
        c_gst_number: inputs.c_gst_no,
        c_narcotic_no: "",
        c_narcotic_no_img: "",
        c_tan_no: "",
        c_tan_no_img: "",
        c_pan_no: "",
        c_pan_no_img: "",
        c_it_pan_no: "",
        c_it_pan_no_img: "",
        c_electricity_bill: "",
        c_electricity_bill_img: "",
        c_rent_agreement: "",
        c_rent_agreement_img: "",
        c_partnership_deed: "",
        c_partnership_deed_img: "",
        c_bank_statement: "",
        c_bank_statement_img: "",
        c_authority_letter: "",
        c_authority_letter_img: "",
        c_contact_person_name: inputs.c_firm_contact_person,
        c_address_no1: inputs.c_firm_address1,
        c_address_no2: inputs.c_firm_address2,
        c_state_code: inputs.c_state_code,
        c_state_name: inputs.c_state_name,
        c_city_code: inputs.c_city_code,
        c_city_name: inputs.c_city_name,
        c_area_code: value1.c_area_code,
        c_area_name: value1.c_area_name,
        c_landmark: "",
        c_type: match.params.type,
      };

      console.log(body, "<<REGISTER DETAILS BODY");
      // console.log(inputs.c_druglicense_expiry_date,"<<inputs.c_druglicense_expiry_date");

      registerDetails(body);
    }
  };

  const handleNext = () => {
    // if(errMsg !== ""){

    // } else if (match.params.type === "seller" &&inputs.c_firm_contact_person === "" ||
    // match.params.type === "seller" && errors.c_firm_contact_person === true ) {
    //   setErrors({ ...errors, c_firm_contact_person: true });
    //   setValue(0);
    // } else if(inputs.c_email === "" || errors.c_email === true){
    //   setErrors({ ...errors, c_email: true });
    //   setValue(0);
    // } else if(inputs.c_firm_address1 === "" || errors.c_firm_address1 === true){
    //   setErrors({ ...errors, c_firm_address1: true });
    //   setValue(0);
    // } else if(inputs.c_firm_address2 === "" || errors.c_firm_address2 === true){
    //   setErrors({ ...errors, c_firm_address2: true });
    //   setValue(0);
    // } else if(inputs.c_pincode === "" || errors.c_pincode === true){
    //   setErrors({ ...errors, c_pincode: true });
    //   setValue(0);
    // }

    // else if((match.params.type === "seller" && inputs.c_druglicense_no1 === "") ||
    //   (match.params.type === "seller" && errors.c_druglicense_no1 === true)){

    //     setErrors({ ...errors, c_druglicense_no1: true });
    // }
    // else if((match.params.type === "seller" && errors.c_druglicense_no2 === true)){
    //     setErrors({ ...errors, c_druglicense_no2: true });
    // } else if((match.params.type === "seller" && inputs.c_druglicense_expiry_date === "") ||
    //   (match.params.type === "seller" && errors.c_druglicense_expiry_date === true)){
    //     setErrors({ ...errors, c_druglicense_expiry_date: true });
    // } else if((match.params.type === "seller" && (inputs.c_gst_type === -1)) ||
    //   (match.params.type === "seller" && errors.c_gst_type === true)){
    //     setErrors({ ...errors, c_gst_type: true });
    // } else if(( match.params.type === "seller" && inputs.c_gst_no === "") ||
    //   (match.params.type === "seller" && errors.c_gst_no === true)){
    //     setErrors({ ...errors, c_gst_no: true });
    // } else if(match.params.type === "seller" && errors.c_narcotic_no === true){
    //   setErrors({ ...errors, c_narcotic_no: true });
    // } else {

    //   setValue(1);

    // }

    if (
      (match.params.type === "seller" && inputs.c_firm_contact_person === "") ||
      (match.params.type === "seller" && errors.c_firm_contact_person === true)
    ) {
      setErrors({ ...errors, c_firm_contact_person: true });
      setValue(0);
    } else if (
      (match.params.type === "seller" && inputs.c_email === "") ||
      (match.params.type === "seller" && errors.c_email === true)
    ) {
      setErrors({ ...errors, c_email: true });
      setValue(0);
    } else if (
      (match.params.type === "seller" && inputs.c_firm_address1 === "") ||
      (match.params.type === "seller" && errors.c_firm_address1 === true)
    ) {
      setErrors({ ...errors, c_firm_address1: true });
      setValue(0);
    } else if (
      (match.params.type === "seller" && inputs.c_firm_address2 === "") ||
      (match.params.type === "seller" && errors.c_firm_address2 === true)
    ) {
      setErrors({ ...errors, c_firm_address2: true });
      setValue(0);
    } else if (
      (match.params.type === "seller" && inputs.c_pincode === "") ||
      (match.params.type === "seller" && errors.c_pincode === true)
    ) {
      setErrors({ ...errors, c_pincode: true });
      setValue(0);
    }

    // else if (match.params.type === "seller" &&inputs.c_state_name == "" ||
    // match.params.type === "seller" && errors.c_state_name === true ) {
    //   setErrors({ ...errors, c_state_name: true });
    //   setValue(0);
    // }
    else {
      setValue(1);
    }
  };

  // useEffect(() => {
  //   GSTListAction();
  // }, []);

  // useEffect(() => {
  //   if(inputs.c_pincode !== undefined && inputs.c_pincode.length === 6){

  //     axios
  //     .get(`${ENV.AUTH_BASE_URL}/mst/state`)
  //     .then(response => {

  //       if(response.data.appStatusCode === 0){
  //         if(response.data.payloadJson !== null){
  //           if(response.data.payloadJson.data[0] !== undefined){

  //             setInputs({
  //               ...inputs,
  //               c_state_code: response.data.payloadJson[0].c_state_code,
  //               c_state_name: response.data.payloadJson[0].c_state_name.toLowerCase()
  //             })

  //             const form = new FormData();
  //             form.append("c_state_code",response.data.payloadJson[0].c_state_code)

  //             CityListAction(form);
  //           } else {
  //             setErrMsg("No state is associated with the entered pin code.")
  //           }
  //         }
  //       }
  //     })
  //   }
  // }, [inputs.c_pincode])

  // useEffect(() => {
  //   setStateList(stateListResult.payload);
  // }, [stateListResult]);
  // useEffect(() => {
  //   setCityList(cityListResult.payload);
  // }, [cityListResult]);

  // useEffect(() => {
  //   setAreaList(areaListResult.payload);
  // }, [areaListResult]);

  useEffect(() => {
    

      

      if(registerDetailsResult.statuscode === 0){
        profileDetails();
        
      }
      // else{
      //   if (registerDetailsResult.error !== "") {
      //     setErrMsg(registerDetailsResult.error);
      //   } else if (registerDetailsResult.message !== "") {
      //     setSuccMsg(registerDetailsResult.message);
      //   }
      // }

    
  }, [registerDetailsResult]);
  useEffect(() => {
    if(profileDetailsResult.statuscode === 0){
      if (match.params.type === "buyer") {
        // alert("Home page moved")
        history.push("/home");
        // <Redirect to="/home" />
        window.location.reload();

      } else if (match.params.type === "seller") {
        alert("Successfully Registerd Seller Details!!!");
      }
    }
  }, [profileDetailsResult])

  // useEffect(() => {
  //   StateListAction();
  // }, []);


  useEffect(() => {
    console.log(inputs.c_pincode ,"<<<<< inputs.c_pincode")
    if (inputs.c_pincode !== undefined && inputs.c_pincode.length === 6) {
      const body = {
        c_pincode: inputs.c_pincode,
      };
      GetStateCityArea(body);
    } else if (inputs.c_pincode.length <= 6) {
      setOpenModal1(false);
    }
  }, [inputs.c_pincode]);
  useEffect(() => {
    if (getStateCityAreaResult.statuscode === 5) {
      setOpenModal1(true);
    } else if (
      getStateCityAreaResult.statuscode === 0 ||
      getStateCityAreaResult.statuscode === ""
    ) {
      setOpenModal1(false);
    }
    setInputs({
      ...inputs,
      c_state_name: getStateCityAreaResult.payload.c_state_name,
      c_state_code: getStateCityAreaResult.payload.c_state_code,
      c_city_name: getStateCityAreaResult.payload.c_city_name,
      c_city_code: getStateCityAreaResult.payload.c_city_code,
      // c_area_name: getStateCityAreaResult.payload.c_area_name,
      // c_area_code: getStateCityAreaResult.payload.c_area_code,
    });

  }, [getStateCityAreaResult]);

  const handleClose =()=>{
    setOpenModal1(false);
  }


  // console.log(value1.c_area_name, "<<<< VALUE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  

  // useEffect(() => {
  //   
  // 	if(value1.c_area_name){
  // 			 setInputs({
  // 				c_area_name:value1.c_area_name
  // 	 })
  // 	}
  //  }, [value1 !== null])
  

  return (

    <>

    <PincodePopup
    open={openModal1}
    handleClose={handleClose}
    savePassResult={getStateCityAreaResult}

    />


    <div className="auth-container">
      <div className="auth-left-container">
        <div className="space-3">
          <img src={AuthIllustration} alt="AuthIllustration" />
          {/* <LottiAnimations Illustration={Illustration} height="850" width="650" /> */}
        </div>
      </div>

      {/* <div>

      </div> */}





      <div className="auth-right-container">

        {/* <div>
        <Collapse in={openModal1}>
        <Alert
          severity={"error"}
          icon={false}
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setOpenModal1(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <span className="font-weight-bold">
            {" "}
            {getStateCityAreaResult.error !== "" &&
              getStateCityAreaResult.error}{" "}
            Please Enter Valid Pincode
          </span>
        </Alert>
      </Collapse>
        </div> */}

        <div className="auth-links">
          <span className="auth-text">Already have an account?</span>
          <Link to="/login">
            <Button variant="outlined" className="default-btn">
              SIGN IN
            </Button>
          </Link>
        </div>

        <div className="auth-form">
          <RegisterDetailsForm
            type={match.params.type}
            inputs={inputs}
            errors={errors}
            succMsg={succMsg}
            errMsg={errMsg}
            handleInputs={handleInputs}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            loading={registerDetailsResult.loading}
            drugExpiryDate={drugExpiryDate}
            handleDrugExpiryDate={handleDrugExpiryDate}
            handleUpload={handleUpload}
            value={value}
            handleTabChange={handleTabChange}
            handleNext={handleNext}
            gstListResult={gstListResult}
            getStateCityAreaResult={getStateCityAreaResult}
            // handleSearchChange={handleSearchChange}
            // handleSearchOnChange={handleSearchOnChange}
            clickHandleCancel={clickHandleCancel}
            getStateCityAreaResult={getStateCityAreaResult}
            // setInputs={setInputs}
            setValue1={setValue1}
            value1={value1}
          />
        </div>
      </div>
    </div>

    </>





  );
};

export default RegisterDetailsPage;
