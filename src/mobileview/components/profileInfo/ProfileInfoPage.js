import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles, withStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import { StepIconProps } from '@material-ui/core/StepIcon';
import axios from 'axios';

//images
import ProfileInfoIcon from "../../../assets/mobImages/profile-info-purple/profile-info.png"
import ContactInfoIcon from "../../../assets/mobImages/contact-info-purple/contact-info.png"
import CardDetailsIcon from "../../../assets/mobImages/card-details-purple/card-details.png"

import ProfileInfo from "./ProfileInfo";
import ContactInfo from "./ContactInfo";
import CardDetails from "./CardDetails";
import { Constants } from '../../../common/constant/localstorage';
import { ENV } from '../../../common/constant/env';
import SwipeableViews from 'react-swipeable-views';
import { CircularProgress } from '@material-ui/core';
import { Redirect } from 'react-router-dom';


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 16,
  },
  active: {
    '& $line': {
      backgroundColor: "rgb(195 205 228)"
    },
  },
  completed: {
    '& $line': {
      backgroundColor: "rgb(195 205 228)"
    },
  },
  line: {
    height: 2,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    zIndex: 1,
    color: 'rgb(103 76 243)',
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: .3
  },
  active: {
    opacity: 1
  },
  completed: {
    opacity: 1
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons={
    1: <img src={ProfileInfoIcon} alt="ProfileInfoIcon" />,
    2: <img src={ContactInfoIcon} alt="ProfileInfoIcon" />,
    3: <img src={CardDetailsIcon} alt="ProfileInfoIcon" />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  // return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  return ['Select campaign settings', 'Create an ad group'];
}


const ProfileInfoPage = (props) => {
  const {getProfileInfo, saveProfileInfo, saveProfileInfoResult, getProfileInfoResult,
    CityListAction, cityListResult, AreaListAction, areaListResult,
    GSTListAction,gstListResult} = props;
  
  const theme = useTheme();
  const [errMsg, setErrMsg] = useState("");
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  const [cityList, setCityList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  // const [isEdit, setIsEdit] = useState(false)
 
  useEffect(() =>{
    setCityList(cityListResult.payload);
  }, [cityListResult])

  useEffect(() =>{
    setAreaList(areaListResult.payload);
  }, [areaListResult])

  const handleNext = () => {
    if(activeStep < 1){
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }else{
      setActiveStep(0);
    }
  };
  // For the first load get profile info and state list
  useEffect(() => {
    getProfileInfo();
    GSTListAction();
    CityListAction("");
    AreaListAction("");
  }, [])


  const [inputs, setInputs] = useState({
    c_mobile_no: "",
    c_name: "",
    c_seller: "",
    c_buyer: "",
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
    c_card_holder_name: "",
    c_card_no: "",
    d_card_exp: "",
    c_card_ifsc: "",
    c_druglicense_no1: "",
    c_druglicense_no2: "",
    c_druglicense_expiry_date: "",
    c_gst_type: -1,
    c_gst_no: "",
    c_narcotic_no: "",
    c_status: "",
    c_image_url: "",
    c_druglicense_no1_img: "",
    c_druglicense_no2_img: "",
    c_narcotic_no_img: "",
    c_druglicense_no1_img_name: "",
    c_druglicense_no2_img_name: "",
    c_narcotic_no_img_name: "",
  })

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
  })  

  
  const handleInputChange = (e) => {
    setErrMsg("");
    
    let { name, value } = e.target;
    
    setErrors({ ...errors, [name]: false });

    if(name === "c_gst_no" || name === "c_druglicense_no1" || name === "c_druglicense_no2"){
      if (value.length > 15) {
        value = value.slice(0, 15);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if(name === "c_firm_contact_person"){
      if (value.length > 16) {
        value = value.slice(0, 16);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if(name === "c_firm_address1" || name === "c_firm_address2"){
      if (value.length > 20) {
        value = value.slice(0, 20);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    }else if(name === "c_pincode"){
      if (value.length > 6) {
        value = value.slice(0, 6);
      } else {
        setInputs({ ...inputs, [name]: value, c_state_name: "" });
      }
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  }

  const handleUpload = (event, url) => {
    const {name, id} = event.target;
    setErrors({ ...errors, [id]: false });

    var file = event.target.files[0];
    var reader = new FileReader();
    
    var filename = event.target.files[0].name;

    reader.onloadend = function() {
      const headers = {
        "Content-Type": "application/json",
        "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
        "x-csquare-firm-id": localStorage.getItem(Constants.FIRM_ID)
      };
      const body = {
        docName: filename,
        docData: reader.result,
        firmId:localStorage.getItem(Constants.FIRM_ID)
      }

      axios
        .post(`${ENV.CUST_BASE_URL}/firm/image/${url}`, body, { headers })
        .then(response => {
          if(response.data.appStatusCode === 0){
            if(response.data.payloadJson !== null){
              setInputs({...inputs, [`${name}_name`]: filename, [name]: response.data.payloadJson.URI})
            }
          } 
          else {
            setErrMsg(response.data.messages[0])
          }
        })
        .catch(error => {
          setErrMsg("Something went wrong, Please try again later!")
        });
    }
    const temp = inputs;
    if(temp[id] === "" ){
      setErrors({...errors, [id]: true})
    }
    
    reader.readAsDataURL(file);

  };

  const handleSearchChange = (event, value, name) => {
    setErrors({...errors, [name]: false})
    setInputs({...inputs, [name]: value})
  }

  const handleSearchOnChange = (event, value, name) => {
    if(value !== null){
      setInputs({...inputs, [name]: value.c_code})
    } else {
      setInputs({...inputs, [name]: ""})
    }
  }
  const handleBlur = (e) =>{
    let { name, value } = e.target;

    if(name === "c_email"){
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))){
        setErrors({ ...errors, [name]: true });
      } 
    } else if(name === "c_druglicense_no1"){
      console.log('drug license 1',value)
      if(value.length < 13){
        setErrors({ ...errors, [name]: true });
      }
      // if(value === "" && inputs.c_druglicense_no1_img_name !== ""){
      //   setErrors({ ...errors, [name]: true });
      // } 
      // if(value !== "" && inputs.c_druglicense_no1_img_name === ""){
      //   setErrors({ ...errors, [name]: true });
      // } 
    } else if(name === "c_druglicense_no2" && value !== ""){
      if(value.length < 13){
        setErrors({ ...errors, [name]: true });
      }
    }  else if(name === "c_firm_address1" && value.length < 4 ){
      setErrors({ ...errors, [name]: true });
    } else if(name === "c_firm_address2" && value.length < 4 ){
      setErrors({ ...errors, [name]: true });
    } else if(name === "c_gst_no" ){
      // if(!(/^[0-9a-zA-Z]+$/.test(value)) || value.length < 15){
      if(!(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value))){
        setErrors({ ...errors, [name]: true });
      }
    } else if(name === "c_firm_contact_person" ){
      if(!(/^[A-Za-z\s]+$/.test(value)) || value.length < 4 ){
        setErrors({ ...errors, [name]: true });
      }
    } else if(name === "c_pincode"){
      if(value.length < 6){
        setErrors({ ...errors, [name]: true });
      }
    }
    
  }
  const [drugExpiryDate, setDrugExpiryDate] = useState(null);
  function handleDrugExpiryDate(date) {
    let selDate = "";
    setErrors({...errors, c_druglicense_expiry_date: false})
    if(date !== null){
      selDate = `${date?.getFullYear()}-${date.getMonth()+1}-${date?.getDate()}`
    }
    
    setInputs({ ...inputs, c_druglicense_expiry_date: selDate });
    setDrugExpiryDate(date);
  }

  // Map the profile info with inputs object
  useEffect(() => {
    if(getProfileInfoResult.error === ""){
      let temp = {...inputs}

      Object.entries(getProfileInfoResult.payload).forEach(entry => {
        if(entry[0] === "c_druglicense_no1_img"){
          temp[entry[0]] = entry[1];
          temp["c_druglicense_no1_img_name"] = entry[1].substring(entry[1].lastIndexOf("/") + 1, entry[1].length);
        } else if(entry[0] === "c_druglicense_no2_img"){
          temp[entry[0]] = entry[1];
          temp["c_druglicense_no2_img_name"] = entry[1].substring(entry[1].lastIndexOf("/") + 1, entry[1].length);
        } else if(entry[0] === "c_narcotic_no_img"){
          temp[entry[0]] = entry[1];
          temp["c_narcotic_no_img_name"] = entry[1].substring(entry[1].lastIndexOf("/") + 1, entry[1].length);
        } else if(entry[0] === "c_druglicense_expiry_date"){
          const date = new Date(entry[1]);
          const selDate = `${date?.getFullYear()}-${date.getMonth()+1}-${date?.getDate()}`
          temp[entry[0]] = selDate;
          if(entry[1] !== ""){
            setDrugExpiryDate(entry[1])
          }
        } else {
          temp[entry[0]] = entry[1];
        }
        
      })
      setInputs(temp)
      setErrMsg("")

    } else {
      setErrMsg(getProfileInfoResult.error)
    }
  }, [getProfileInfoResult])

  // To show the error
  useEffect(() => {
    if(saveProfileInfoResult.error !== ""){
      // setIsEdit(true);
      setErrMsg(saveProfileInfoResult.error)
    } else {
      // setIsEdit(false);
      getProfileInfo();
    }
  }, [saveProfileInfoResult])

  useEffect(() => {
    if(inputs.c_pincode !== undefined && inputs.c_pincode.length === 6){
      axios
      .get(`${ENV.MASTER_BASE_URL}/mst/pin/${inputs.c_pincode}`)
      .then(response => {
        if(response.data.appStatusCode === 0){
          if(response.data.payloadJson !== null){
            if(response.data.payloadJson.list[0] !== undefined){
              setInputs({
                ...inputs,
                c_state_code: response.data.payloadJson.list[0].c_state_code,
                c_state_name: response.data.payloadJson.list[0].c_state_name.toLowerCase()
              })
            } else {
              setErrMsg("No state is associated with the entered pin code.")
            }
          }
        }
      })
    } 
  }, [inputs.c_pincode])

  // const getStepContent = (step: number) => {
  //   switch (step) {
  //     case 0:
  //       return (
  //       <ProfileInfo
  //         inputs={inputs}
  //         errors={errors}
  //         handleInputChange={handleInputChange}
  //         handleBlur={handleBlur}
  //         drugExpiryDate={drugExpiryDate}
  //         handleDrugExpiryDate={handleDrugExpiryDate}
  //         handleUpload={handleUpload}
  //         gstListResult={gstListResult}
  //       ></ProfileInfo>) ;
  //     case 1:
  //       return (
  //       <ContactInfo  
  //       inputs={inputs}
  //       errors={errors}
  //       handleInputChange={handleInputChange}
  //       handleBlur={handleBlur}
  //       cityListResult={cityListResult}
  //       areaListResult={areaListResult}
  //       handleSearchChange={handleSearchChange}
  //       handleSearchOnChange={handleSearchOnChange}
  //       cityList={cityList}
  //       areaList={areaList}></ContactInfo>);
  //     // case 2:
  //     //   return <CardDetails />;
  //   }
  // }
  const handleSubmit = ()  => {
    setActiveStep(0);
    if(inputs.c_email === "" || errors.c_email === true){
      setErrors({ ...errors, c_email: true });
    } else if(inputs.c_druglicense_no1 === "" || errors.c_druglicense_no1 === true){
      setErrors({ ...errors, c_druglicense_no1: true });
    } else if( errors.c_druglicense_no2 === true){
        setErrors({ ...errors, c_druglicense_no2: true });
    } else if( inputs.c_druglicense_expiry_date === "" || errors.c_druglicense_expiry_date === true){
        setErrors({ ...errors, c_druglicense_expiry_date: true });
    } else if((inputs.c_gst_type === -1) || errors.c_gst_type === true){
        setErrors({ ...errors, c_gst_type: true });
    } else if(inputs.c_gst_no === "" || errors.c_gst_no === true){
        setErrors({ ...errors, c_gst_no: true });
    } else if (inputs.c_firm_contact_person === "" || errors.c_firm_contact_person === true ) {
      setErrors({ ...errors, c_firm_contact_person: true });
    } else if((inputs.c_firm_address1 === "" ) || errors.c_firm_address1 === true){
      setErrors({ ...errors, c_firm_address1: true });
    } else if((inputs.c_firm_address2 === "" ) || errors.c_firm_address2 === true){
      setErrors({ ...errors, c_firm_address2: true });
    } else if(inputs.c_pincode === "" || errors.c_pincode === true){
      setErrors({ ...errors, c_pincode: true });
    } else if(inputs.c_state_name === "" || errors.c_state_name === true){
      setErrors({ ...errors, c_state_name: true });
    } else if(inputs.c_city_name === "" || errors.c_city_name === true){
      setErrors({ ...errors, c_city_name: true });
    } else if(inputs.c_area_name === "" || errors.c_area_name === true){
      setErrors({ ...errors, c_area_name: true });
    } else if(errors.c_narcotic_no === true){
      setErrors({ ...errors, c_narcotic_no: true });
    } else {
      setActiveStep(1);

      let body = {};

      Object.entries(inputs).forEach(entry => {
        // if(entry[0] === "c_druglicense_no1_img_name" || entry[0] === "c_druglicense_no2_img_name" || entry[0] === "c_narcotic_no_img_name"){

        // } else if(entry[1] !== ""){
        //   body[entry[0]] = entry[1];
        // }
        if(entry[1] !== ""){
          body[entry[0]] = entry[1];
        }
      })
      saveProfileInfo(body,true);
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.instructions}> 
        <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleNext}
        enableMouseEvents
        >
        <ProfileInfo 
          inputs={inputs}
          errors={errors}
          handleInputChange={handleInputChange}
          handleBlur={handleBlur}
          drugExpiryDate={drugExpiryDate}
          handleDrugExpiryDate={handleDrugExpiryDate}
          handleUpload={handleUpload}
          gstListResult={gstListResult}
          errMsg={errMsg}></ProfileInfo>
        
        <ContactInfo  
          inputs={inputs}
          errors={errors}
          handleInputChange={handleInputChange}
          handleBlur={handleBlur}
          handleSearchChange={handleSearchChange}
          handleSearchOnChange={handleSearchOnChange}
          cityList={cityList}
          areaList={areaList}
          errMsg={errMsg}></ContactInfo>
            

        </SwipeableViews>
      </div>
      <div className="mob-stepper-height"></div>
      <div className="mob-profile-stepper-sec">
      <div className="mob-stepper-activeIndi">{activeStep+1}</div>
        <Stepper className="mob-profile-stepper" alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <Button
          variant="contained"
          color="primary"
          onClick={activeStep < 1 ? handleNext:handleSubmit}
          className="mob-stepper-next-btn"
        >
          {saveProfileInfoResult.loading ? <CircularProgress className="spining-icon" /> : null}{" "}
          {activeStep < 1 ? 'Next' : 'Save'}
        </Button>
      </div>
    </div>
  );
}

export default ProfileInfoPage