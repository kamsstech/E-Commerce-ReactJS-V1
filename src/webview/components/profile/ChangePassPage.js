import React from "react";
import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import ProfileSidebar from "./ProfileSidebar";
import ChangePassword from "./ChangePass";
import ForgotPopUp from "./Popup/ForgotPopup";
import { Constants } from "../../../common/constant/localstorage";

export const ChangePassPage = (props) => {
  const {
    SendOTP,
    sendOTPResult,
    ChangePasswordAction,
    changePasswordResult,
    SavePassword,
    savePassResult,
    ValidateOTP,
    validateOTPResult,
  } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 



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
    c_new_pwd: "",
  });

  const forgotPaasword = () => {
    setOpen(true);
    setInput({
      c_mobile_no:localStorage.getItem(Constants.MOBILE_NO)
    })
  };






  const [inputError, setInputError] = useState({
    c_mobile_no: false,
    OTP: false,
    c_new_pwd: false,
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
      setResendSeconds(0);
      setIsResendActive(false);
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
      setResendSeconds(90);
      setIsResendActive(true);
    }

    return () => clearInterval(interval);
  }, [isResendActive, resendSeconds]);

  const handleInput = (e) => {
    var { name, value } = e.target;

    setSuccMsg("");
    setErrMsg("");
    setInputError({ ...inputError, [name]: false });

    if (name === "OTP") {
      if (value.length === 4) {
        const body = {
          c_mobile_no: input.c_mobile_no,
          OTP: value,
          n_login:1
        };
        props.ValidateOTP(body);
      }

      if (value.length > 4) {
        value = value.slice(0, 4);
      } else {
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
  };
  const handleBlur = (e) => {
    let { name, value } = e.target;

    if (name === "OTP") {
      if (value.length <= 4) {
        if (value.length < 4) {
          setInputError({ ...inputError, [name]: true });
        }
      }
    } else if (name === "c_new_pwd") {
      if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{4,16}$/.test(value)) {
        setInputError({ ...inputError, [name]: true });
      }
    }
  };

  const resendOTP = () => {
    // console.log(e.target.value,"fsdgsdsd")
    setErrMsg("");
    setInput({ ...input, OTP: "" });
    setInputError({ ...inputError, OTP: false, c_new_pwd: false });
    const body = {
      c_username: input.c_mobile_no,
      page: "forgot",
    };
    props.SendOTP(body);
  };

  const handleSubmit = () => {
    if (input.OTP === "" || inputError.OTP === true) {
      setInputError({ ...inputError, OTP: true });
    } else if (input.c_new_pwd === "" || inputError.c_new_pwd === true) {
      setInputError({ ...inputError, c_new_pwd: true });
    } else {
      const body = {
        c_mobile_no: input.c_mobile_no,
        c_new_pwd: input.c_new_pwd,
        c_type: "B",
        OTP: input.OTP,
      };

      console.log(body, "<<<< body");
      SavePassword(body);
    }
  };

  useEffect(() => {
    if (savePassResult.error !== "") {
      setErrMsg(savePassResult.error);
    } else if (
      savePassResult.success !== undefined &&
      Array.isArray(savePassResult.success) &&
      savePassResult.success.length > 0
    ) {
      setOpen(true);
      setSucMsg(savePassResult.success);
    } else if (savePassResult.statuscode === 0) {
      setOpen(true);
      setSucMsg(savePassResult.success);
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
    if (props.validateOTPResult.payload.message !== "") {
      setSeconds(0);
      setIsActive(true);
      setResendSeconds(0);
      setIsResendActive(true);
      setEnableMessage(false);
      setDisableMessage(true);
    } else {
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
  }, []);
  return (
    <div className="body-spacing dSprofile">
      <Container fixed>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <ProfileSidebar page="change-password" />
          </Grid>
          <Grid item xs={9}>
            <div className="myprofile-box non-strip border-botttom-none">
              <ChangePassword
                forgotPaasword={forgotPaasword}
                SendOTP={SendOTP}
                sendOTPResult={sendOTPResult}
                ChangePasswordAction={ChangePasswordAction}
                changePasswordResult={changePasswordResult}
                savePassResult={savePassResult}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      <ForgotPopUp
        openModal={open}
        closeModal={handleClose}
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
  );
};

export default ChangePassPage;
