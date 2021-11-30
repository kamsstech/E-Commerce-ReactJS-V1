import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles, withStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import { StepIconProps } from '@material-ui/core/StepIcon';
import { ENV } from "../../../common/constant/env";
import axios from "axios";
//images
import ProfileInfoIcon from "../../../assets/mobImages/user-info-purple/user-info.png"
// import ContactInfoIcon from "../../../assets/mobImages/user-rights-purple/user-rights.png"
import ContactInfoIcon from "../../../assets/mobImages/user-rights-purple/shopping-list.png"

import UserInfo from "./UserInfo";
import UserRights from "./userRights";
import { AddUserInputEntity,BranchListEntity, RegisterEntity, GetUserInfoEntity,StateListEntity, StateListResultEntity, AddUserRoleEntity } from "../../../common/model";
import SwipeableViews from 'react-swipeable-views';
import { CircularProgress } from '@material-ui/core';
import './css/ProfileAddUserStyles.css';

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
    1: <img src={ProfileInfoIcon} alt="ProfileInfoIcon" />,
    2: <img src={ContactInfoIcon} alt="ProfileInfoIcon" />,
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
//       return <UserInfo />;
//     case 1:
//       return <UserRights />;
//   }
// }

// interface Props{
//   match:any;
//   getBranchListAction(): void;
//   branchListResult: BranchListEntity;
//   AddUserAction(inputs: AddUserInputEntity, isEdit?:boolean,isMobile?:boolean): void;
//   addUserResult: RegisterEntity;
//   GetUserInfoAction(userId: number): void;
//   userInfoResult: GetUserInfoEntity;
//   CityListAction(stateCode: string): void;
//   cityListResult: StateListEntity;
//   AreaListAction(cityCode: string): void;
//   areaListResult: StateListEntity;
//   clearAddUser(): void;
//   clearGetUserInfo(): void;
// }

const ProfileAddUserPage = (props) => {
  
  const {match, getBranchListAction, branchListResult, AddUserAction, addUserResult, GetUserInfoAction, userInfoResult,
    CityListAction, cityListResult, AreaListAction, areaListResult, clearAddUser, clearGetUserInfo } = props;
    
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const theme = useTheme();

  const [errorMsg, setErrorMsg] = useState("");
  const [cityList, setCityList] = useState([]);
  const [areaList, setAreaList] = useState([]);

  const [inputs, setInputs] = useState({
    c_address_1: "",
    c_address_2: "",
    c_state_name: "",
    c_area_name: "",
    c_city_name: "",
    c_state_code: "",
    c_area_code: "",
    c_city_code: "",
    c_email: "",
    c_mobile_no: "",
    c_name: "",
    c_pincode: "",
    j_role: [
      {
        n_firm_id: -1,
        n_granted_per: "day",
        n_max_value: 1,
        n_min_value: 0,
        n_place_order: "0",
        n_view_transaction: "1",
      }
    ]
  })

  const [errors, setErrors] = useState({
    c_mobile_no: false,
    c_name: false,
    c_email: false,
    c_address_1: false,
    c_address_2: false,
    c_area_name: false,
    c_city_name: false,
    c_state_name: false,
    c_pincode: false,
    j_role: [
      {
        n_firm_id: false,
        n_view_transaction: false,
        n_place_order: false,
        n_min_value: false,
        n_max_value: false,
        n_granted_per: false,
      }
    ]
  })

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

  const handleInputChange = (event, role, index) => {
    setErrorMsg("")
    let { name, value } = event.target;

    setErrors({...errors, [name]:false})

    if (role !== undefined && index !== undefined) {
      let temp = [...inputs.j_role];
      temp[index][name] = value;

      setInputs({...inputs, j_role: temp});

      let tempError = [...errors.j_role];
      tempError[index][name] = false;

      setErrors({...errors, j_role: tempError});
    } else {
      if(name === "c_mobile_no"){
        if (value.length > 10) {
          value = value.slice(0, 10);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
      } else if(name === "c_name"){
        if (value.length > 16) {
          value = value.slice(0, 16);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
      }else if(name === "c_address_1" || name === "c_address_2"){
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
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    }
  };

  const handleBlur = (e) => {
    let { name, value } = e.target;

    if(name === "c_mobile_no"){
      if(value.length < 10){
        setErrors({ ...errors, [name]: true });
      }
    } else if((name === "c_address_1" || name === "c_address_2") && value !== "" ){
      if(value.length < 4){
        setErrors({ ...errors, [name]: true });
      }
    }else if(name === "c_name" ){
      if(!(/^[A-Za-z\s]+$/.test(value)) || value.length < 4 ){
        setErrors({ ...errors, [name]: true });
      }
    } else if(name === "c_email"){
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))){
        setErrors({ ...errors, [name]: true });
      } 
    } else if(name === "c_pincode" && value !==""){
      if(value.length < 6){
        setErrors({ ...errors, [name]: true });
      }
    }
  }

  const handleCheckbox = (name, index) => (
    event
  ) => {
    setErrorMsg("")
    let checked = event.target.checked === true ? "1" : "0";
    let temp = [...inputs.j_role];

    if (name === "n_place_order" && event.target.checked === true) {
      temp[index]["n_min_value"] = 0;
      temp[index]["n_max_value"] = 100000;
    } else {
      temp[index]["n_min_value"] = 0;
      temp[index]["n_max_value"] = 1;
    }

    temp[index][name] = checked;

    setInputs({...inputs, j_role: temp});

    let tempError = [...errors.j_role];
    tempError[index]["n_place_order"] = false;
    setErrors({...errors, j_role: tempError});
  };

  const handleSliderChange = (event, newValue) => {
    setErrorMsg("")
    let index = event.target["ariaLabel"];
    let temp = [...inputs.j_role];

    if (index !== null) {
      temp[index]["n_min_value"] = newValue[0]*1000;
      temp[index]["n_max_value"] = newValue[1]*1000;

      setInputs({...inputs, j_role: temp});
    }
  };

  const handleAddStore = () => {
    // console.log(Array.isArray(branchListResult.payload) && branchListResult.payload.length, inputs.j_role.length)
    
    if(Array.isArray(branchListResult.payload) && branchListResult.payload.length > inputs.j_role.length){
    setErrorMsg("")
    const inputRow = {
      n_firm_id: -1,
      n_view_transaction: "1",
      n_place_order: "0",
      n_min_value: 0,
      n_max_value: 1,
      n_granted_per: "day",
    }

    let tempInput = [...inputs.j_role];
    tempInput = [...tempInput, inputRow]

    const errorRow = {
      n_firm_id: false,
      n_view_transaction: false,
      n_place_order: false,
      n_min_value: false,
      n_max_value: false,
      n_granted_per: false,
    }

    let tempError = [...errors.j_role];
    tempError = [...tempError, errorRow]

    setInputs({...inputs, j_role: tempInput});
    setErrors({...errors, j_role: tempError});
    }
  }

  const handleDeleteStore = (index) => {
    setErrorMsg("")
    let filterInputArray = inputs.j_role.filter((item, i) => i !== index);
    let filterErrorArray = errors.j_role.filter((item, i) => i !== index);

    setInputs({...inputs,j_role: filterInputArray});
    setErrors({...errors,j_role: filterErrorArray});
  }

  const handleSubmit = () => {
    // setErrorMsg("");
    const checkRoleError = () => {
      let result = false;
      let tempError = errors.j_role
      inputs.j_role.forEach((item, index) => {
        if(item.n_firm_id === -1){
          tempError[index]["n_firm_id"] = true
          setErrors({...errors, j_role:tempError})
          return false;
        } else if(item.n_view_transaction === "0") {//item.n_place_order === "0" && 
          tempError[index]["n_place_order"] = true
          setErrors({...errors, j_role:tempError})
          return false;
        } else {
          if(index === inputs.j_role.length -1){
            result = true
          }
        }
      })

      return result;
    }
    setActiveStep(0);
    if(errorMsg !== ""){

    } else if(inputs.c_mobile_no === "" || errors.c_mobile_no === true){
      setErrors({ ...errors, c_mobile_no: true });
    } else if(inputs.c_name === "" || errors.c_name === true){
      setErrors({ ...errors, c_name: true });
    } else if(inputs.c_email === "" || errors.c_email === true){
      setErrors({ ...errors, c_email: true });
    } else if( errors.c_address_1 === true){
      setErrors({ ...errors, c_address_1: true });
    } else if( errors.c_address_2 === true){
      setErrors({ ...errors, c_address_2: true });
    } else if( errors.c_pincode === true){
      setErrors({ ...errors, c_pincode: true });
    } else if(errors.c_state_name === true){
      setErrors({ ...errors, c_state_name: true });
    } else if( errors.c_city_name === true){
      setErrors({ ...errors, c_city_name: true });
    } else if( errors.c_area_name === true){
      setErrors({ ...errors, c_area_name: true });
    } else if(!checkRoleError()){
      setActiveStep(1);
    } else {
        let body = {};
  
        Object.entries(inputs).forEach(entry => {
          if(entry[1] === "-1"){
  
          } else if(entry[1] !== ""){
            body[entry[0]] = entry[1];
          }
        })
        if(match.params.userId){
          let temp = {...body, n_user_id: match.params.userId}
          AddUserAction(temp, true,true)
        } else {
          AddUserAction(body,false,true)
        }
        // console.log(body, "sdj")
    }
  }

  useEffect(() => {
    getBranchListAction()
    CityListAction("");
    AreaListAction("");
    
    return () => {
      clearAddUser();
      clearGetUserInfo();
    }
  }, [])

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
    if(addUserResult.error !== ""){
      setErrorMsg(addUserResult.error);
    }
  }, [addUserResult])
  
  useEffect(() => {
    if(match.params.userId){
      GetUserInfoAction(match.params.userId)
    }
  }, [match])
 
  useEffect(() => {
    if(match.params.userId){
      if(userInfoResult.error === ""){
        let temp = {...inputs}

        Object.entries(userInfoResult.payload).map(entry => {
          temp[entry[0]] = entry[1];
        })
        setInputs(temp)

        const errorRow = {
          n_firm_id: false,
          n_view_transaction: false,
          n_place_order: false,
          n_min_value: false,
          n_max_value: false,
          n_granted_per: false,
        }
        let tempError =  [...errors.j_role];
        // console.log(temp)
        temp.j_role.map((item, index) => {
          if(index>0){
            tempError = [...tempError, errorRow]
          }
        })
        setErrors({...errors, j_role: tempError});
      }
      else {
        setErrorMsg(userInfoResult.error)
      }
    }
  }, [userInfoResult])
  

  const handleNext = () => {

    if(inputs.c_mobile_no === ""){
      setErrors({...errors, c_mobile_no:true})
    setActiveStep(0);
      return;
    }
    if(inputs.c_name === ""){
      setErrors({...errors, c_name:true})
    setActiveStep(0);
      return;
    }
    if(inputs.c_email === ""){
      setErrors({...errors, c_email:true})
    setActiveStep(0);
      return;
    }
    if(activeStep < 1){
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }else{
      setActiveStep(0);

    }
  };


  return (
    <div className={classes.root}>
      <div className={classes.instructions}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleNext}
          enableMouseEvents
          disabled={((errors.c_name || inputs.c_name ==="")  || (errors.c_email || inputs.c_email ==="")  || (errors.c_mobile_no || inputs.c_mobile_no ==="") )?true:false}
        >
          <UserInfo 
            match={match}
            getBranchListAction={getBranchListAction}
            branchListResult={branchListResult}
            AddUserAction={AddUserAction}
            addUserResult={addUserResult}
            GetUserInfoAction={GetUserInfoAction}
            userInfoResult={userInfoResult}
            CityListAction={CityListAction}
            cityListResult={cityListResult}
            AreaListAction={AreaListAction}
            areaListResult={areaListResult}
            handleInputChange={handleInputChange}
            inputs={inputs}
            errors={errors}
            errMsg={errorMsg}
            handleSearchChange={handleSearchChange}
            handleSearchOnChange={handleSearchOnChange}
            handleBlur={handleBlur}
            cityList={cityList}
            areaList={areaList}></UserInfo>
          <UserRights 
          match={match}
          getBranchListAction={getBranchListAction}
          branchListResult={branchListResult}
          AddUserAction={AddUserAction}
          addUserResult={addUserResult}
          GetUserInfoAction={GetUserInfoAction}
          userInfoResult={userInfoResult}
          CityListAction={CityListAction}
          cityListResult={cityListResult}
          AreaListAction={AreaListAction}
          areaListResult={areaListResult}
          handleInputChange={handleInputChange}
          inputs={inputs}
          errors={errors}
          errMsg={errorMsg}
          handleCheckbox={handleCheckbox}
          handleSearchOnChange={handleSearchOnChange}
          handleBlur={handleBlur}
          cityList={cityList}
          areaList={areaList} 
          handleSliderChange={handleSliderChange}
          handleAddStore={handleAddStore}
          handleDeleteStore={handleDeleteStore}></UserRights>
        </SwipeableViews>
      </div>

      <div className="mob-stepper-height"></div>
      <div className="mob-profile-stepper-sec">
      <div className="mob-stepper-activeIndi">{activeStep + 1}</div>
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
          {addUserResult.loading ? <CircularProgress className="spining-icon" /> : null}{" "}
          {activeStep < 1 ? 'Next' : 'Save'}
        </Button>
       
      </div>
    </div>
  );
}

export default ProfileAddUserPage;