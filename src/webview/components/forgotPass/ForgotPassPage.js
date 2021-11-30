import * as React from "react";
import { useState, useEffect } from "react";
import AuthIllustration from "../../../assets/images/login-Illustration.svg";
import Illustration1 from "../../../assets/images/new_illustration.json";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";
import Illustration from '../../../assets/animation/Illustration.json';
import LottiAnimations from '../../../common/lottieAnimation';
import ForgotPassForm from "./ForgotPassForm";
import SucessForgotPassPop from "./Popup/SuccessPopup";


const ForgotPassPage = (props) => {
  const {
    match,
    SendOTP,
    sendOTPResult,
    ValidateOTP,
    validateOTPResult,
    SavePassword,
    savePassResult,
    loginResult
  } = props;


  console.log(loginResult,"<<<<<<loginResult");
  // console.log(savePassResult,"<<<<<<savePassResult");



  const [sucmsg, setSucMsg] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const [input, setInput] = useState({
    c_mobile_no: "",
    OTP: "",
    c_new_pwd: ""
  });

  const [inputError, setInputError] = useState({
    c_mobile_no: false,
    OTP: false,
    c_new_pwd: false
  });

  const [succMsg, setSuccMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [isResendActive, setIsResendActive] = useState(false);
  const [enableMessage, setEnableMessage] = useState(false);
  const [disableMessage, setDisableMessage] = useState(true);

  
  const [count, setCount] = useState({
    minutes: 0,
    second: 0
  });

  const [resendCount, setResendCount] = useState({
    minutes: 0,
    second: 0
  });
  const [resendSeconds, setResendSeconds] = useState(0);

  useEffect(() => {
    let interval = null;

    if (!isActive) {
      let min = Math.floor(seconds / 60);
      let sec = seconds - min * 60;
      setCount({
        minutes: min,
        second: sec
      });
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    }
    if (seconds === 0) {
      setResendSeconds(0);
      setIsResendActive(false);
      setIsActive(true)
    }
    if (seconds === 210) {

      setIsResendActive(true);
    }
    if (seconds === 300) {
      setIsResendActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    let interval = null;
    if (!isResendActive) {
      let reMin = Math.floor(resendSeconds / 60);
      let reSec = resendSeconds - reMin * 60;
      setResendCount({
        minutes: reMin,
        second: reSec
      });
      interval = setInterval(() => {
        setResendSeconds(resendSecondsOld => resendSecondsOld - 1);
      }, 1000);
    }
    if (resendSeconds === 0) {
      setResendSeconds(90);
      setIsResendActive(true);
    }

    return () => clearInterval(interval);

  }, [isResendActive, resendSeconds])

  const handleInput = (e) => {
    var { name, value } = e.target;

    setSuccMsg("");
    setErrMsg("");
    setInputError({ ...inputError, [name]: false });

    if (name === "OTP") {

       if(value.length === 4){
        const body={
          "c_mobile_no": input.c_mobile_no,
          "OTP": value,
          "n_login":1
        }
        props.ValidateOTP(body);
      }
       
       if (value.length > 4) {
        value = value.slice(0, 4);
      }
      else{
        setInput({ ...input, [name]: value });
      }
    } else {
      if (value.length > 16) {
        value = value.slice(0, 16);
      } else {
        setInput({ ...input, [name]: value });
      }
    }
  };
  const handleFocus = (e) => {
    let { name } = e.target;
    setInputError({ ...inputError, [name]: false });
  }
  const handleBlur = (e) => {
    let { name, value } = e.target;

    if (name === "OTP") {
      if (value.length <= 4) {

        if(value.length < 4){
          setInputError({ ...inputError, [name]: true });
        }
      }
    } else if (name === "c_new_pwd") {
      if (!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{4,16}$/.test(value))) {
        setInputError({ ...inputError, [name]: true });
      }
    }
  }


  const resendOTP = () => {
    // console.log(e.target.value,"fsdgsdsd")
    setErrMsg("");
    setInput({ ...input, OTP: "" });
    setInputError({ ...inputError, OTP: false, c_new_pwd: false });
      const body={
        "c_username":input.c_mobile_no,
        "page":"forgot"
      };
      props.SendOTP(body);
  };

  const handleSubmit = () => {
    if (input.OTP === "" || inputError.OTP === true) {
      setInputError({ ...inputError, OTP: true });
    } else if (input.c_new_pwd === "" || inputError.c_new_pwd === true) {
      setInputError({ ...inputError, c_new_pwd: true });
    } else {
      const body={
        "c_mobile_no":input.c_mobile_no,
        "c_new_pwd":input.c_new_pwd,
        "c_type":"B",
        "OTP":input.OTP
      };

      console.log(body,"<<<< body");
      SavePassword(body);
    }
  };
  useEffect(() => {
    if(loginResult.statuscode === 0){

      console.log("dummy")
      setOpen(false);
      
      <Redirect to="/home" />
      
      window.location.href = window.location.href
    }
  },[loginResult])



  useEffect(() => {
    setInput({
      ...input,
      c_mobile_no: match.params.username
    });
  }, [match.params.username]);


  useEffect(() => {
    if (savePassResult.error !== "") {
      setErrMsg(savePassResult.error);
    }
    else if (savePassResult.success !== undefined && Array.isArray(savePassResult.success) && savePassResult.success.length > 0) {
      setOpen(true)
      setSucMsg(savePassResult.success)
    }
    else if(savePassResult.statuscode === 0){
      setOpen(true)
      setSucMsg(savePassResult.success)


    }
  }, [savePassResult]);



  useEffect(() => {
    if (sendOTPResult.error !== "") {
      setErrMsg(sendOTPResult.error);
    } else if (sendOTPResult.payload.message !== "") {
      setErrMsg("");
      setEnableMessage(true); 
      setDisableMessage(false); 
      setSuccMsg(sendOTPResult.payload.message);
      // setSeconds(300);
      setIsActive(false);
      setResendSeconds(90);
      setIsResendActive(false);
    }
  }, [sendOTPResult]);

  useEffect(() => {
    
    if (props.validateOTPResult.error !== "") {
        setErrMsg(props.validateOTPResult.error);
      }
      if(props.validateOTPResult.payload.message !=="")
      {
         setSeconds(0);
         setIsActive(true);
         setResendSeconds(0);
         setIsResendActive(true);
         setEnableMessage(false); 
         setDisableMessage(true); 
      }
      else
      {
         setEnableMessage(true); 
         setDisableMessage(false);  
      }
  }, [validateOTPResult]);
  useEffect(() => {
    setErrMsg("");
      setEnableMessage(true); 
      setDisableMessage(false); 
      setSuccMsg(sendOTPResult.payload.message);
      setSeconds(300);
      setIsActive(false);
      setResendSeconds(90);
      setIsResendActive(false);
  }, [])




  
  return (
    <>
      <div className="auth-container">
        <div className="auth-left-container">
          <div className="space-3">
            { <img src={AuthIllustration} alt="AuthIllustration" /> }
            {/*<LottiAnimations Illustration={Illustration1} height="850" width="650" />*/}
          </div>
        </div>
        <div className="auth-right-container">
          <div className="auth-links">
            <span className="auth-text">Don't have an account?</span>
            <Link to="/register/buyer">
              <Button variant="outlined" className="default-btn default-width fixed-space">
              Get Started
              </Button>
            </Link>
          </div>
          <div className="auth-form">
            <ForgotPassForm
              resendOTP={resendOTP}
              input={input}
              inputError={inputError}
              handleInput={handleInput}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              succMsg={succMsg}
              errMsg={errMsg}
              savePassResult={savePassResult}
              count={count}
              isActive={isActive}
              isResendActive={isResendActive}
              resendCount={resendCount}
              enableMessage={enableMessage}
              disableMessage={disableMessage}
            />
          </div>
        </div>
      </div>

      <SucessForgotPassPop open={open}  handleClose={handleClose}/>
    </>
  );
};

export default ForgotPassPage;

