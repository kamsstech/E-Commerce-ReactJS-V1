import * as React from "react";
import { useState, useEffect } from "react";
import SucessRegisterNumPassPop from "../../../webview/components/register/Popup/SuccessRegisterPopup";
import RegisterForm from "./RegisterForm";
import {  useHistory } from "react-router-dom";
import FilterDrawer from "./FilterDrawer";
import FilterImg from "../../../assets/images/filter.svg";
import IconButton from "@material-ui/core/IconButton";


const RegisterPage = (props) => {
  let history = useHistory();



  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event,) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };



  const {match,sendOTP, sendOTPResult, register, registerResult, validateREGISTER, validateREGISTERResult, savePassResult} = props;
  console.log(sendOTPResult, "<<<<sendOTPResult")
  const [openRight, setOpenRight] = useState(false);
  const [openWrong, setOpenWrong] = useState(false);
  
  const [inputs, setInputs] = useState({
    c_mobile_no: "",
    c_pincode: "",
    c_name: "",
    c_pwd: "",
    c_buyer: match.params.type=="buyer" ? "Y" : "N",
    c_seller: match.params.type=="seller" ? "Y" : "N"
  });

  const [errors, setErrors] = useState({
    
    c_mobile_no: false,
    c_pincode: false,
    c_name: false,
    c_pwd: false
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    // setOpen(true);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    setErrorMsg("");
    // setErrors({ c_mobile_no: false, c_name: false, c_pwd: false });
    setErrors({...errors, [name]: false})
    
    if (name === "c_name") {
      // if (value.length > 16) {
      //   value = value.slice(0, 16);
      // } else {
        setInputs({ ...inputs, [name]: value });
      // }
    }else if (name === "c_pincode") {
      if (value.length > 6) {
        value = value.slice(0, 6);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    }else if (name === "c_mobile_no") {
      if (value.length > 10) {
        value = value.slice(0, 10);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if(name === "c_pwd"){
      if (value.length > 16) {
        value = value.slice(0, 16);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    }
  };
  const handleFocus = (e) => {
    let { name } = e.target;
    setErrors({ ...errors, [name]: false });
  }
  const handleBlur = (e) => {
    let { name, value } = e.target;

    if(name === "c_name"){
      if(value.length < 4){
        setErrors({ ...errors, [name]: true });
      }
    } else if(name === "c_pincode"){
      // if(value.length < 6){
      //   setErrors({ ...errors, [name]: true });
      // }
      if(value.length <= 6){
        if(!(/^[1-9]\d{5}$/.test(value))){
          setErrors({ ...errors, [name]: true });
        }
      }
    }else if(name === "c_mobile_no"){
      // if(value.length < 10){
      //   setErrors({ ...errors, [name]: true });
      // }
      if(value.length <= 10){

        if(!(/^[6-9]\d{9}$/.test(value))){
          setErrors({ ...errors, [name]: true });
        }
        else if(value.length === 10){
          let type='';
          if (inputs.c_buyer === "Y") {
             type="B";
          } else if (inputs.c_seller === "Y") {
             type="S";
          }
          const body={
            "c_mobile_no":inputs.c_mobile_no,
            "c_type":type
          }
          validateREGISTER(body);
        }
      }
    } else if(name === "c_pwd"){
      if(!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{4,16}$/.test(value))){
        setErrors({ ...errors, [name]: true });
      }
    }
  }

  const handleRegister = () => {
    if (inputs.c_name === "" || errors.c_name === true) {
      setErrors({ ...errors, c_name: true });
    }else if(inputs.c_pincode === "" || errors.c_pincode === true){
      setErrors({ ...errors, c_pincode: true });
    } else if(inputs.c_mobile_no === "" || errors.c_mobile_no === true){
      setErrors({ ...errors, c_mobile_no: true });
    } else if (inputs.c_pwd === "" || errors.c_pwd) {
      setErrors({ ...errors, c_pwd: true });
    } else {
        // register(inputs);
        let type='';
      if (inputs.c_buyer === "Y") {
        type="B";
      } else if (inputs.c_seller === "Y") {
        type="S";
      }

      const body={
        c_cname:inputs.c_name,
        c_mobile_no:inputs.c_mobile_no,
        c_pincode:inputs.c_pincode,
        c_pwd:inputs.c_pwd,
        c_type:type,
        c_buyer:inputs.c_buyer,
        c_seller:inputs.c_seller,
        page:"register"
      };
        sendOTP(body)
    }
  }

  
  useEffect(() => {

    if(sendOTPResult.statuscode === 0){
      if(inputs.c_buyer == "Y" && inputs.c_mobile_no !== ""){
        history.push("/verify-otp/buyer")
      }else if(inputs.c_seller == "Y" && inputs.c_mobile_no !== ""){
        history.push("/verify-otp/seller")
      }
    }
    
  }, [sendOTPResult.payload.message !== ""])

  useEffect(() => {
    // console.log(validateREGISTERResult,"validateREGISTERResult")
    if(validateREGISTERResult.payload.message ==="Already registered!" || validateREGISTERResult.payload.message ==="Mobile Number exist in LC1" ){
      setOpen(true);
      setOpenWrong(true);
      setErrors({ ...errors, c_mobile_no: true });
      setInputs({
      c_mobile_no: "",
      c_pincode: inputs.c_pincode,
      c_name:inputs.c_name,
      c_pwd: inputs.c_pwd,
      c_buyer: match.params.type=="buyer" ? "Y" : "N", 
      c_seller: match.params.type=="seller" ? "Y" : "N"
    })
    }else if(validateREGISTERResult.payload.message ==="User does not exist!"){
      setOpenRight(true);
      setInputs({
        c_mobile_no: inputs.c_mobile_no,
        c_pincode: inputs.c_pincode,
        c_name:inputs.c_name,
        c_pwd: inputs.c_pwd,
        c_buyer: match.params.type=="buyer" ? "Y" : "N", 
        c_seller: match.params.type=="seller" ? "Y" : "N"
      })
    }
  }, [validateREGISTERResult.payload.message !==""])


  useEffect(() => {
    setOpen(false)
   }, []);


  useEffect(() => {
    if(inputs.c_mobile_no !== ""){
      if (props.registerResult.error !== "") {
        setErrorMsg(props.registerResult.error);
      }
    }
  }, [props.registerResult]);

  useEffect(() => {
    setErrorMsg("");
    setInputs({
      
      c_mobile_no: "",
      c_pincode: "",
      c_name: "",
      c_pwd: "",
      c_buyer: match.params.type=="buyer" ? "Y" : "N", 
      c_seller: match.params.type=="seller" ? "Y" : "N"
    })
    setErrors({
      c_mobile_no: false,
      c_pincode: false,
      c_name: false,
      c_pwd: false
    });
  },[match.params.type])

  return (
    <>
    <SucessRegisterNumPassPop
    handleClickOpen ={handleClickOpen}
    handleClose={handleClose}
    open={open}
    savePassResult={savePassResult}
  // sucmsg = {sucmsg}
  />
    <div className="mob-auth-container">
      <h2 className="mob-title">Sign Up</h2>
      <h3 className="mob-auth-title">Welcome To 'Live Order'</h3>
      <h5 className="mob-auth-subtitle">
        India's Fastest B2B Pharma 'Eco System'
      </h5>
       <RegisterForm 
          inputs={inputs}
          errors={errors}
          right={openRight}
          wrong={openWrong}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleRegister={handleRegister}
          loading={registerResult.loading}
          errorMsg={errorMsg}
        />
    </div>
    {/* <IconButton className="search-btn" onClick={toggleDrawer(true)}>
              <img src={FilterImg} alt="Back_arrow"  />
            </IconButton> */}
    {/* <FilterDrawer toggleDrawer={toggleDrawer} openDrawer={openDrawer} /> */}
    <FilterDrawer toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
    </>
    
    




  );
};
export default RegisterPage;
