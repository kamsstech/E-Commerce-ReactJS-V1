import React, {useState, useEffect} from 'react';
import { ENV } from "../../../common/constant/env";
import axios from "axios";
import { Constants } from "../../../common/constant/localstorage";


import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import { StepIconProps } from '@material-ui/core/StepIcon';

import StoreInfo from "./StoreInfo";
import BranchDetails from "./BranchDetails";
import AddBranchBottomSheet from "./AddBranchBottomSheet";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";

//images
import StoreInfoIcon from "../../../assets/mobImages/store-info-purple/store-info.png"
import BranchDetailsIcon from "../../../assets/mobImages/store-info-purple/store-info.png"
import { useHistory } from 'react-router-dom';

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

  const icons = {
    1: <img src={StoreInfoIcon} alt="StoreInfoIcon" />,
    2: <img src={BranchDetailsIcon} alt="BranchDetailsIcon" />,
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
  return ['Select campaign settings', 'Create an ad group'];
}

// function getStepContent(step: number) {
//   switch (step) {
//     case 0:
//       return <StoreInfo />;
//     case 1:
//       return <BranchDetails />;
//   }
// }

// type Anchor = 'top' | 'left' | 'bottom' | 'right';

// interface Props{
//   match:any;
//   AddBranchAction(inputs: AddBranchInputEntity, isEdit?: boolean): void;
//   addBranchResult: AddBranchEntity;
//   getBranchInfo(branchId:number, isEdit?: boolean): void;
//   branchInfoResult: GetBranchInfoEntity;
//   CityListAction(key: string): void;
//   cityListResult: StateListEntity;
//   AreaListAction(key: string): void;
//   areaListResult: StateListEntity;
//   GSTListAction(): void;
//   gstListResult: GSTListResultEntity;
//   clearGetBranchInfo(): void;
//   clearAddBranchInfo(): void;
// }

const ProfileAddBranchPage = (props) => {
  let history = useHistory();
  const { match, AddBranchAction, addBranchResult, getBranchInfo, branchInfoResult,
    CityListAction, cityListResult, AreaListAction, areaListResult,
    GSTListAction, gstListResult, clearGetBranchInfo, clearAddBranchInfo } = props;

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const steps = getSteps();

  const handleNext = () => {
    if(activeStep < 1){
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
    else{
      setActiveStep(0)
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const toggleDrawer = (open) => (
    event,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }
    
    setOpenDrawer(open);
    if(!open){
      history.push("/profile/branch")
    }
  };

  const [errorMsg, setErrorMsg] = useState("");
  const [drugExpiryDate, setDrugExpiryDate] = useState(null);
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  const [cityList, setCityList] = useState([]);
  const [areaList, setAreaList] = useState([]);

  // input 
  const [inputs, setInputs] = useState({
    c_mobile_no: "",
    c_name: "",
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
    c_landmark: "",
    c_pincode: "",
    c_druglicense_no1: "",
    c_druglicense_no1_img:"",
    c_druglicense_no1_img_name: "",
    c_druglicense_no2: "",
    c_druglicense_no2_img:"",
    c_druglicense_no2_img_name: "",
    c_druglicense_expiry_date: "",
    c_gst_type: -1,
    c_gst_no: "",
    c_narcotic_no: "",
    c_narcotic_no_img: "",
    c_narcotic_no_img_name: "",
    c_status: ""
  })

  //error
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
    let { name, value } = e.target;
    setErrorMsg("");

    setErrors({...errors, [name]:false})
    if(name === "c_firm_contact_person" ){
      if (value.length > 16) {
        value = value.slice(0, 16);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    }else if(name === "c_firm_address1" || name === "c_firm_address2"){
      if (value.length > 20) {
        value = value.slice(0, 20);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if(name === "c_pincode"){
      if (value.length > 6) {
        value = value.slice(0, 6);
      } else {
        setInputs({ ...inputs, [name]: value, c_state_name: "" });
      }
    } else if(name === "c_druglicense_no1" || name === "c_druglicense_no2"){
      if (value.length > 15) {
        value = value.slice(0, 15);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if(name === "c_gst_no"){
      if (value.length > 15) {
        value = value.slice(0, 15);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if(name === "c_mobile_no"){
      if (value.length > 10) {
        value = value.slice(0, 10);
      } else {
        setInputs({ ...inputs, [name]: value });
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
            setErrorMsg(response.data.messages[0])
          }
        })
        .catch(error => {
          setErrorMsg("Something went wrong, Please try again later!")
        });

    }
    const temp = inputs;
    if(temp[id] === "" ){
      setErrors({...errors, [id]: true})
    }
    
    reader.readAsDataURL(file);
  };

  const handleBlur = (e) => {
    let { name, value } = e.target;

    if(name === "c_name" ){
      if(value.length < 4 ){
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
    } else if(name === "c_druglicense_no1"){
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
      // if(value === "" && inputs.c_druglicense_no2_img_name !== ""){
      //   setErrors({ ...errors, [name]: true });
      // } 
      // if(value !== "" && inputs.c_druglicense_no2_img_name === ""){
      //   setErrors({ ...errors, [name]: true });
      // } 
    } else if(name === "c_narcotic_no"){
      // if(value === "" && inputs.c_narcotic_no_img_name !== ""){
      //   setErrors({ ...errors, [name]: true });
      // } 
      // if(value !== "" && inputs.c_narcotic_no_img_name === ""){
      //   setErrors({ ...errors, [name]: true });
      // } 
    } else if(name === "c_gst_no" ){
      // if(!(/^[0-9a-zA-Z]+$/.test(value)) || value.length < 15){
      if(!(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value))){
        setErrors({ ...errors, [name]: true });
      }
    }  else if(name === "c_firm_address1" && value.length < 4 ){
      setErrors({ ...errors, [name]: true });
    } else if(name === "c_firm_address2" && value.length < 4){
      setErrors({ ...errors, [name]: true });
    }else if(name === "c_mobile_no"){
      if(value.length < 10){
        setErrors({ ...errors, [name]: true });
      }
    } else if(name === "c_email"){
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))){
        setErrors({ ...errors, [name]: true });
      } 
    }
  }

  function handleDrugExpiryDate(date) {
    let selDate = "";
    setErrors({...errors, c_druglicense_expiry_date: false})
    if(date !== null){
      selDate = `${date?.getFullYear()}-${date.getMonth()+1}-${date?.getDate()}`
    }
    
    setInputs({ ...inputs, c_druglicense_expiry_date: selDate });

    setDrugExpiryDate(date);
  }

  const handleSubmit = () => {
    if(errorMsg !== ""){

    } else if(inputs.c_name === "" || errors.c_name === true){
      setErrors({ ...errors, c_name: true });
      setActiveStep(0)
    } else if(inputs.c_pincode === "" || errors.c_pincode === true){
      setErrors({ ...errors, c_pincode: true });
      setActiveStep(0)
    } else if(inputs.c_state_name === "" || errors.c_state_name === true){
      setErrors({ ...errors, c_state_name: true });
      setActiveStep(0)
    } else if(inputs.c_city_name === "" || errors.c_city_name === true){
      setErrors({ ...errors, c_city_name: true });
      setActiveStep(0)
    } else if(inputs.c_area_name === "" || errors.c_area_name === true){
      setErrors({ ...errors, c_area_name: true });
      setActiveStep(0)
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
    } else if(errors.c_narcotic_no === true){
      setErrors({ ...errors, c_narcotic_no: true });
    } else if (inputs.c_firm_contact_person === "" || errors.c_firm_contact_person === true ) {
      setErrors({ ...errors, c_firm_contact_person: true });
    } else if((inputs.c_firm_address1 === "") || errors.c_firm_address1 === true){
      setErrors({ ...errors, c_firm_address1: true });
    } else if((inputs.c_firm_address2 === "" ) || errors.c_firm_address2 === true){
      setErrors({ ...errors, c_firm_address2: true });
    } else if(inputs.c_mobile_no === "" || errors.c_mobile_no === true){
      setErrors({ ...errors, c_mobile_no: true });
    } else if(inputs.c_email === "" || errors.c_email === true){
      setErrors({ ...errors, c_email: true });
    } else {
      setIsSaveClicked(true)
      let body = {};

      Object.entries(inputs).map(entry => {
        if(entry[0] === "c_druglicense_no1_img_name" || entry[0] === "c_druglicense_no2_img_name" || entry[0] === "c_narcotic_no_img_name"){

        } else if(entry[1] !== ""){
          body[entry[0]] = entry[1];
        }
      })
      
      // console.log(body, "fxdhk")
      if(match.params.branchId){
        let temp = {...body, n_firm_id: match.params.branchId}
        AddBranchAction(temp, true)
      } else {
        AddBranchAction(body)
      }
    }
  }

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

  useEffect(() => {
    if(match.params.branchId){
      
      getBranchInfo(match.params.branchId)
    }
  }, [match])

  useEffect(() => {
    GSTListAction();
    CityListAction("");
    AreaListAction("");
    return () => {
      clearGetBranchInfo();
      clearAddBranchInfo();
    }
  }, [])

  useEffect(() => {
    if(inputs.c_pincode.length === 6){
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
              setErrorMsg("No state is associated with the entered pin code.")
            }
          }
        }
      })
    } 
  }, [inputs.c_pincode])

  useEffect(() =>{
    setCityList(cityListResult.payload);
  }, [cityListResult])

  useEffect(() =>{
    setAreaList(areaListResult.payload);
  }, [areaListResult])

  useEffect(() => {
    if(match.params.branchId){
      if(branchInfoResult.error === ""){
        let temp = {...inputs}

        Object.entries(branchInfoResult.payload).map(entry => {
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
            setDrugExpiryDate(entry[1])
          } else {
            temp[entry[0]] = entry[1];
          }
        })
        setInputs(temp)
      } 
    } else {
      setErrorMsg(branchInfoResult.error)
    }
  }, [branchInfoResult])

  useEffect(() => {
    if(addBranchResult.error !== ""){
      setErrorMsg(addBranchResult.error);
    } 
    else if(addBranchResult.message !== null && isSaveClicked){
      // console.log(addBranchResult.message,  "mesg")
      // setAddBranchModal(true)
      setOpenDrawer(true)
    }
  }, [addBranchResult])

  // console.log(inputs, "inputs")
  return (
    <div className={classes.root}>
      <AddBranchBottomSheet 
        branchName={inputs.c_name}
        branchArea={inputs.c_area_name}
        toggleDrawer={toggleDrawer} 
        openDrawer={openDrawer} 
        branchId={addBranchResult.message}
      />
      <div>
        <div className={classes.instructions}>
        <p className="login-error-msg min-height-none mb-10">{errorMsg}</p>
        <SwipeableViews
          index={activeStep}
          onChangeIndex={handleNext}
          enableMouseEvents
        >
          <StoreInfo 
              inputs={inputs}
              errors={errors}
              handleInputChange={handleInputChange}
              handleBlur={handleBlur}
              cityList={cityList}
              areaList={areaList}
              handleSearchChange={handleSearchChange}
              handleSearchOnChange={handleSearchOnChange}
            />
            <BranchDetails 
              inputs={inputs}
              errors={errors}
              handleInputChange={handleInputChange}
              handleUpload={handleUpload}
              handleBlur={handleBlur}
              drugExpiryDate={drugExpiryDate}
              handleDrugExpiryDate={handleDrugExpiryDate}
              gstListResult={gstListResult}
            />
        </SwipeableViews>

          {/* {activeStep === 0 && 
            <StoreInfo 
              inputs={inputs}
              errors={errors}
              handleInputChange={handleInputChange}
              handleBlur={handleBlur}
              cityList={cityList}
              areaList={areaList}
              handleSearchChange={handleSearchChange}
              handleSearchOnChange={handleSearchOnChange}
            />
          }
          {activeStep === 1 && 
            <BranchDetails 
              inputs={inputs}
              errors={errors}
              handleInputChange={handleInputChange}
              handleUpload={handleUpload}
              handleBlur={handleBlur}
              drugExpiryDate={drugExpiryDate}
              handleDrugExpiryDate={handleDrugExpiryDate}
              gstListResult={gstListResult}
            />
          } */}
        </div>
      </div>
      <div className="mob-stepper-height"></div>
      <div className="mob-profile-stepper-sec">
        <Button
          variant="contained"
          color="primary"
          onClick={ activeStep < 1 ? handleNext:handleSubmit }
          className="mob-stepper-next-btn"
        >
          {activeStep === steps.length - 1 ? 'Save' : 'Next'}
        </Button>
        {/* {activeStep === steps.length - 1 ?
        <Button
          variant="contained"
          color="primary"
          onClick={ handleSubmit }
          className="mob-stepper-next-btn"
        >
          Save
        </Button> :
        <Button
          variant="contained"
          color="primary"
          onClick={ handleNext }
          className="mob-stepper-next-btn"
        >   
          Next
        </Button> } */}
        <Stepper className="mob-profile-stepper" alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="mob-stepper-activeIndi">{activeStep+1}</div>
      </div>
    </div>
  );
}

export default ProfileAddBranchPage;