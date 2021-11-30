import React,{useState, useEffect} from 'react'
import ForgotPassForm from "./ForgotPassForm";



const ForgotPassPage = (props) => {
  const {
    match,
    SendOTP,
    sendOTPResult,
    SavePassword,
    savePassResult
  } = props;

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
  const [count, setCount] = useState({
    minutes: 0,
    second: 0
  });

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
      setIsActive(true)
    }
    if(seconds === 210){
      setIsResendActive(true);
    }
    if(seconds === 300){
      setIsResendActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  
  const [resendCount, setResendCount] = useState({
    minutes: 0,
    second: 0
  });

  const [resendSeconds, setResendSeconds] = useState(0);

  useEffect(()=>{
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
    if(resendSeconds === 0){
      setIsResendActive(true);
    }

    return () => clearInterval(interval);

  },[isResendActive, resendSeconds])

  const handleInput = (e) => {
    var { name, value } = e.target;

    setSuccMsg("");
    setErrMsg("")
    setInputError({ ...inputError, [name]: false });
    
    if (name === "OTP") {
      if (value.length > 4) {
        value = value.slice(0, 4);
      }
      setInput({ ...input, [name]: value });
    } else {
      if (value.length > 16) {
        value = value.slice(0, 16);
      } else {
        setInput({ ...input, [name]: value });
      }
    } 
  };

  const handleBlur = (e) => {
    let { name, value } = e.target;

    if(name === "OTP"){
      if(value.length < 4){
        setInputError({ ...inputError, [name]: true });
      }
    } else if(name === "c_new_pwd"){
      if(!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{4,16}$/.test(value))){
        setInputError({ ...inputError, [name]: true });
      }
    }
  }

  const resendOTP = () => {
    setSeconds(0);
    setIsActive(true);
    setInput({ ...input, OTP: "" });
    setInputError({ ...inputError, OTP: false, c_new_pwd: false });
    SendOTP(input.c_mobile_no, "forgot");
  };

  const handleSubmit = () => {
    if (input.OTP === "" || inputError.OTP === true) {
      setInputError({ ...inputError, OTP: true });
    } else if (input.c_new_pwd === "" || inputError.c_new_pwd === true) {
      setInputError({ ...inputError, c_new_pwd: true });
    } else {
      SavePassword(input);
    }
  };

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
  }, [savePassResult]);
  
  useEffect(() => {
    if (sendOTPResult.error !== "") {
      setErrMsg(sendOTPResult.error);
    }else if(sendOTPResult.payload.message !== ""){
      setErrMsg("");
      setSuccMsg(sendOTPResult.payload.message)
      setSeconds(300);
      setIsActive(false);
      setResendSeconds(90);
      setIsResendActive(false);      
    }
  }, [sendOTPResult]);


  return (
    <div className="mob-auth-container">
      <h2 className="mob-title">Forgot Password ?</h2>
      <h3 className="mob-forgot-title">
        Just Verify Your Relationship or c_mobile_no Number Code to set new password
      </h3>
      <ForgotPassForm
        resendOTP={resendOTP}
        input={input}
        inputError={inputError}
        handleInput={handleInput}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        succMsg={succMsg}
        errMsg={errMsg}
        savePassResult={savePassResult}
        count={count}
        isActive={isActive}
        isResendActive={isResendActive}
        resendCount={resendCount}
      />
    </div>
  );
};

export default ForgotPassPage;
