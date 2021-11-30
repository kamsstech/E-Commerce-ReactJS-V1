import * as React from "react";
import { useState, useEffect } from "react";
import { Constants } from "../../../common/constant/localstorage";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

//images
import BackArrow from "../../../assets/images/left_arrow.svg";
import OtpIllustration from "../../../assets/images/otp_illus.svg";
// import VerifyOtpFrom from "./verifyOtpForm";

import OtpInput from "react-otp-input";
import { CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
  console.log(verifyOTPResult, "<<<verifyOTPResult")
  const [backLink, setBackLink] = useState("/register/" + match.params.type);
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
    // console.log(e);
    setErrorMsg("");
    setErrOTP(false);

    setOTP(e);

    if (e.length == 4) {
      handleValidate(e);
    }
  };

  const handleBlur = (e) => {
    let { name, value } = e.target;

    if (value.length < 4) {
      setErrOTP(true);
    }
  };

  const handleValidate = (e) => {
    // e.preventDefault();
    if (otp === "") {
      setErrOTP(true);
    } else {
      // console.log(e, "<<<<OTP")
      validateOTP(e, match.params.type);
    }
  };

  const resendOTP = () => {
    setOTP("");
    setErrOTP(false);

    const num = localStorage.getItem(Constants.MOBILE_NO);
    // SendOTP(num, "forgot");
    ReSendOTP(num, "signup");
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
    if (otp !== "") {
      if (verifyOTPResult.error !== "") {
        setErrorMsg(verifyOTPResult.error);
        setErrOTP(true);
      }
    }else{
      
      // history.push(`/register-details/${match.params.type}`)
    }
  }, [verifyOTPResult]);

  return (
    <div className="verify-otp">
      <Link to={backLink} className="verify-otp-back">
        <IconButton>
          <img src={BackArrow} alt="Back_arrow" />
        </IconButton>
      </Link>
      

      <div className="center center-space">
        <img src={OtpIllustration} alt="OtpIllustration"></img>
        <h2 className="verify-title">Verifying OTP</h2>
        <h3 className="verify-subtitle">
          Please wait 5 second we are verifying OTP automatically that we have
          sent to your mobile number<span>{localStorage.getItem("MOBILE_NO")}</span>.
        </h3>
        {errOTP ? (
          <p className="login-error-msg mob-oneem">{errorMsg}</p>
        ) : null}

        <div className="otp-form">
          <div style={{display:'flex',justifyContent: 'space-evenly'}}>
          <OtpInput
            onChange={(e) => handleOTP(e)}
            onBlur={(e) => handleBlur(e)}
            inputStyle={errOTP ? "otp-input-err" : "otp-input"}
            value={otp}
            isDisabled={false}
            numInputs={4}
            separator={<span>&nbsp;&nbsp;&nbsp;</span>}
            isInputNum={true}
          />
          </div>
          
        </div>
        <div className="timer">
          {/* <span className="grey">Code expires in: <span className="red">{count.minutes}:{count.second}</span></span><br></br><br></br> */}
          {/* {!isActive ? (
            <span className="grey">
              Code expires in:{" "}
              <span className="red">
                {count.minutes}:{count.second}
              </span>
            </span>
          ) : null} */}
        </div>
      </div>

      <div className="resend-sec">
        <p className="resend-otp-text">Didn’t Receive the OTP?</p>
        {!isResendActive ? (
          <>
            <span className="grey">
              Resend OTP in:{" "}
              <span className="red">
                {resendCount.minutes}:{resendCount.second}
              </span>
            </span>
            <br />
          </>
        ) : (
          <Button
            variant="text"
            className="resend-link"
            onClick={resendOTP}
            disabled={!isResendActive}
            // disabled={false}
          >
            {sendOTPResult.loading ? (
              <CircularProgress className="spining-icon" />
            ) : null}{" "}
            {seconds !== 0 ? "Resend Code" : "Generate Code"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default VerifyOtpPage;
