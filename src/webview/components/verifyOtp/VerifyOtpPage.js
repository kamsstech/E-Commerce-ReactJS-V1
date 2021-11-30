import * as React from "react";
import { useState, useEffect } from "react";
import { Constants } from "../../../common/constant/localstorage";
import AuthIllustration from "../../../assets/images/login-Illustration.svg";
// import Illustration from "../../../assets/animation/Illustration.json";
import LottiAnimations from "../../../common/lottieAnimation";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import VerifyOtpFrom from "./VerifyOtpForm";

const VerifyOtpPage = (props) => {
  let history = useHistory();
  const {
    match,
    validateOTP,
    verifyOTPResult,
    SendOTP,
    sendOTPResult,
    ReSendOTP,
  } = props;
  

  const [otp, setOTP] = useState("");
  const [errOTP, setErrOTP] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [isResendActive, setIsResendActive] = useState(false);
  const [count, setCount] = useState({
    minutes: 0,
    second: 0,
  });

  const [resendCount, setResendCount] = useState({
    minutes: 0,
    second: 0,
  });
  const [resendSeconds, setResendSeconds] = useState(0);

  useEffect(() => {
    let interval = null;

    if (!isActive) {
      let min = Math.floor(seconds / 60);
      let sec = seconds - min * 60;
      setCount({
        minutes: min,
        second: sec,
      });
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }
    if (seconds === 0) {
      setIsActive(true);
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
        second: reSec,
      });
      interval = setInterval(() => {
        setResendSeconds((resendSecondsOld) => resendSecondsOld - 1);
      }, 1000);
    }
    if (resendSeconds === 0) {
      setIsResendActive(true);
    }

    return () => clearInterval(interval);
  }, [isResendActive, resendSeconds]);

  const handleOTP = (e) => {
    let { name, value } = e.target;

    setErrorMsg("");
    setErrOTP(false);

    if (value.length > 4) {
      value = value.slice(0, 4);
    } else {
      setOTP(value);
    }
  };
  const handleFocus = (e) => {
    let { name } = e.target;
    setErrOTP(false);
  };
  const handleBlur = (e) => {
    let { name, value } = e.target;

    if (value.length < 4) {
      setErrOTP(true);
    }
  };

  const handleValidate = (e) => {
    e.preventDefault();

    if (otp === "") {
      setErrOTP(true);
    } else {
      if (otp.length >= 4) {
        const num = localStorage.getItem(Constants.MOBILE_NO);
        const body = {
          c_mobile_no: num,
          OTP: otp,
          type: match.params.type,
          n_login:1
        };
        validateOTP(body);
      } else {
        setErrOTP(true);
      }
    }
  };

  const resendOTP = () => {
    setOTP("");
    setErrOTP(false);
    setErrorMsg("");
    const num = localStorage.getItem(Constants.MOBILE_NO);
    const body = {
      username: num,
      page: "signup",
    };
    ReSendOTP(body);
  };

  useEffect(() => {
    if (sendOTPResult.error !== "") {
      setErrorMsg(sendOTPResult.error);
      setErrOTP(true);
      // setSeconds(300);
      // setIsActive(false);
      // setResendSeconds(90);
      // setIsResendActive(false);
    }
    if (sendOTPResult.payload.message !== "") {
      // setSuccMsg(sendOTPResult.payload.message)
      setSeconds(300);
      setIsActive(false);
      setResendSeconds(90);
      setIsResendActive(false);
    }
  }, [sendOTPResult]);

  useEffect(() => {
    if (props.registerResult.error !== "") {
      setSeconds(300);
      setIsActive(false);
      setResendSeconds(90);
      setIsResendActive(false);
      setErrorMsg("");
      setErrOTP(false);
    }
  }, [props.registerResult]);

  useEffect(() => {
    console.log("verifyOTPResult>>>>>>>", verifyOTPResult)
    if (verifyOTPResult.statuscode === 0) {
      let lc_user_status = localStorage.getItem(Constants.LC1_USER_STATUS);
      console.log(lc_user_status, "<<< lc_user_status");
      if (lc_user_status) {
        console.log(verifyOTPResult, "<<< Check verifyOTPResult");
        history.push(`/combine-store-name`);
        localStorage.setItem(Constants.LC1_USER_STATUS, false)
      }
    }else if(otp !== "" && verifyOTPResult.statuscode === 11){
      setErrorMsg(verifyOTPResult.error);
      // alert(verifyOTPResult.error)
      setErrOTP(false);
    }

    // if( otp !== ""){
    //   if (verifyOTPResult.error !== "") {
    //     setErrorMsg(verifyOTPResult.error);
    //     setErrOTP(false);
    //   }

    //   history.push(`/register-details/${match.params.type}`);
    //   console.log("verifyOTPResult", verifyOTPResult)
    // }
  }, [verifyOTPResult]);

  useEffect(() => {
    if (props.registerResult.statuscode === 0) {
      history.push(`/register-details/${match.params.type}`);
    } else if (props.registerResult.statuscode === 2) {
      // alert("Already Register This Number")
    } else if (props.registerResult.statuscode === 11) {
      // alert("OTP Already Used");
    }

    console.log("registerResult", props.registerResult);
  }, [props.registerResult]);

  return (
    <div className="auth-container">
      <div className="auth-left-container">
        <div className="space-3">
          <img src={AuthIllustration} alt="AuthIllustration" />
          {/* <LottiAnimations Illustration={Illustration} height="850" width="650" /> */}
        </div>
      </div>
      <div className="auth-right-container">
        <div className="auth-links">
          <span className="auth-text">Already have an account?</span>
          <Link to="/login">
            <Button variant="outlined" className="top-btn default-btn">
              SIGN IN
            </Button>
          </Link>
        </div>
        <div className="auth-form">
          <VerifyOtpFrom
            otp={otp}
            errOTP={errOTP}
            errorMsg={errorMsg}
            handleOTP={handleOTP}
            handleBlur={handleBlur}
            handleValidate={handleValidate}
            loading={verifyOTPResult.loading}
            resendOTP={resendOTP}
            count={count}
            isActive={isActive}
            isResendActive={isResendActive}
            resendCount={resendCount}
            mobile={localStorage.MOBILE_NO}
            handleFocus={handleFocus}
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
