import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthIllustration from "../../../assets/images/login-Illustration.svg";
import Button from "@material-ui/core/Button";

import LoginForm from "./LoginForm";
import SelectDefaultBranchModal from "./SelectDefaultBranchModel";
import RegisterRequestPopup from "./popup/RegisterRequestPopup";
import SiteLoader from "../landing1/SiteLoader/SiteLoader";
import { Constants } from "../../../common/constant/localstorage";
// const Illustration1 = lazy(() => import('../../../assets/images/new_illustration.json'));
// const AuthIllustration = lazy(() => import('../../../assets/images/login-Illustration.svg'));
const LoginPage = (props) => {
  const {
    loginResult,
    sendOTPResult,
    profileDetailsResult,
    validateREGISTERResult,
    validateREGISTER,
  } = props;
  console.log(validateREGISTERResult,"<<<< validateREGISTERResult")
  let history = useHistory();
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    if (history.location.pathname === "/login" && history.location.hash === "") {
      setTimeout(() => {
        setShowLoader(true);
      }, 5000);
    } else {
      setShowLoader(true);
    }
  }, [history.location.pathname]);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [errMsgPop, setErrorMsgPop] = useState("");
  const [sucMsgPop, setSucMsgPop] = useState("");
  const [status, setStatus] = useState("");
  const [action, setAction] = useState(false)
  const [searchCount, setSearchCount] = useState(0)

  // console.log(loginResult, "$$$$$$$$loginResult");

  // useEffect(() => {
  //   if(loginResult.error !== ""){
  //     console.log(loginResult, "loginResult");
  //   }
  // }, [loginResult.error !== ""])

  const handleChange = (e) => {
    let { name, value } = e.target;

    setErrorMsg("");
    setErrors({ ...errors, [name]: false });

    if (name === "username") {
      if (value.length > 10) {
        value = value.slice(0, 10);
      } else {
       
        if(value.length === 10){
          const body={
            c_mobile_no: value
          }
          validateREGISTER(body)
        }
        setInputs({ ...inputs, [name]: value });
      }
    } else {
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
  };
  const handleBlur = (e) => {
    let { name, value } = e.target;

    if (name === "username") {
      if (value.length <= 10) {
        if (!/^[6-9]\d{9}$/.test(value)) {
          setErrors({ ...errors, [name]: true });
        }
        // setErrors({ ...errors, [name]: true });
      }
    } else if (name === "password") {
      if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{4,16}$/.test(value)) {
        setErrors({ ...errors, [name]: true });
      }
    }
  };

  const login = (event) => {
    event.preventDefault();
    if (inputs.username === "" || errors.username === true) {
      setErrors({ ...errors, username: true });
    } else if (inputs.password === "" || errors.password === true) {
      setErrors({ ...errors, password: true });
    } else {
      props.login(inputs);
    }
  };

  const forgot = (event) => {
    
    setAction(event)
    setErrors({ ...errors, password: false });
    setInputs({ ...inputs, password: "" });
    if (inputs.username === "") {
      setErrors({ ...errors, username: true });
    } else {
      let user_name = inputs.username;
      const body = {
        c_username: user_name,
        page: "login",
      };

      if (user_name.length == 10) {
        if (!/^[6-9]\d{9}$/.test(user_name)) {
          setErrors({ ...errors, username: true });
        } else {
          const body = {
            c_mobile_no: inputs.username,
          };
          validateREGISTER(body);
          // props.SendOTP(body);
        }
      } else {
        setErrors({ ...errors, username: true });
      }
    }
  };

  // useEffect(() => {

  //   if(props.profileDetailsResult.message !== ""){
  //      history.push('/home');
  //   }
  // }, [props.profileDetailsResult])

  useEffect(() => {
    const vall=localStorage.getItem(Constants.PRE_LOGIN_SEARCH_COUNT)
    const initiate=localStorage.getItem("WEB_LOAD_INITIATE")
    setSearchCount(vall)
    localStorage.clear();
    if(initiate === "INITIATED"){
      localStorage.setItem(Constants.PRE_LOGIN_SEARCH_COUNT,vall);
    }else{
      localStorage.setItem(Constants.PRE_LOGIN_SEARCH_COUNT,0);
    }
    
    localStorage.setItem("WEB_LOAD_INITIATE","INITIATED");
  }, []);

  const handleClickOpen = () => {
    // setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(validateREGISTERResult, "<<validateREGISTERResult");
    if (validateREGISTERResult.statuscode === 2) {
      const body = {
        c_username: inputs.username,
        page: "login",
      };
      props.SendOTP(body);
      if (inputs.username !== "") {
        if(validateREGISTERResult.message === "Already registered!"){
          if(action === true){
            history.push(`/forgot-password/${inputs.username}`);
          }
        }else if(validateREGISTERResult.message === "Mobile Number exist in LC1"){
          
            localStorage.setItem(Constants.LC1_USER_STATUS,true)
          // history.push(`/combine-store-name`);
           history.push(`/verify-otp/buyer`);
        }
        
      }
    } else if (validateREGISTERResult.statuscode === 4) {
      setOpen(true);
      setStatus(validateREGISTERResult.statuscode);
      setErrorMsgPop(validateREGISTERResult.error);
    } else if (validateREGISTERResult.statuscode === 5) {
      setOpen(true);
      setStatus(validateREGISTERResult.statuscode);
      setErrorMsgPop(validateREGISTERResult.error);
    }
  }, [validateREGISTERResult]);

  useEffect(() => {
    if (inputs.username !== "") {
      // console.log(loginResult.message,"loginResult Message")

      if (props.loginResult.error !== "") {
        setErrorMsg(props.loginResult.error);
        setOpen(true);
        setStatus(loginResult.statuscode);
        setErrorMsgPop(loginResult.error);
      } 



      // else if (
      //   loginResult.message === "Logged Successfully!" &&
      //   loginResult.message !== undefined
      // ) {
      //   history.push("/home");
      // }




      // active status
      else if (
        loginResult.payload !== undefined &&
        loginResult.payload.c_lc_user_active_status === "A"
      ) {


        if (loginResult.payload.c_lc_user_status === "0") {
          if (loginResult.payload.c_update_status === "0") {
            if (loginResult.payload.cType === "B") {
              history.push("/register-details/buyer");
            } else if (loginResult.payload.cType === "S") {
              history.push("/register-details/seller");
            }
          } else if (loginResult.payload.c_update_status === "1") {
            history.push("/home");
          }

        } 
        
        else if (loginResult.payload.c_lc_user_status === "1") {
          if (loginResult.payload.c_update_status === "0") {
            // history.push("/combine-store-name");  
            if (loginResult.payload.cType === "B") {
              history.push("/register-details/buyer");
            } else if (loginResult.payload.cType === "S") {
              history.push("/register-details/seller");
            }
          } else if (loginResult.payload.c_update_status === "1") {
            // history.push("/home");
            history.push("/combine-store-name");  
          }
        }
      }





      //  Blocked Status
      else if (
        loginResult.payload !== undefined &&
        loginResult.payload.c_lc_user_active_status === "P"
      ) {
        if (loginResult.payload.c_lc_user_status === "0") {
          if (loginResult.payload.c_update_status === "0") {
          } else if (loginResult.payload.c_update_status === "1") {
          }
        } else if (loginResult.payload.c_lc_user_status === "1") {
          if (loginResult.payload.c_update_status === "0") {
            if (loginResult.payload.cType === "B") {
              history.push("/register-details/buyer");
            } else if (loginResult.payload.cType === "S") {
              history.push("/register-details/seller");
            }
          } else if (loginResult.payload.c_update_status === "1") {
            history.push("/home");
          }
        }
      }
    }
  }, [loginResult]);


  return (
    <>
     

      <RegisterRequestPopup
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        status={status}
        errormsg={errMsgPop}
        successMsg={sucMsgPop}
      />


<div className="auth-container">
        <div className="auth-left-container">
          <div className="space-3">
           {/* <Suspense fallback={<div>loading</div>}>  */}
            {/* <LottiAnimations
              Illustration={Illustration1}
              
              height="850"
              width="650"
            /> */}
            <img src={AuthIllustration} alt="AuthIllustration" />
          {/* </Suspense> */}
            
          </div>
        </div>
        <div className="auth-right-container">
          <div className="auth-links">
            <span className="auth-text">Don't have an account?</span>
            <Link to="/register/buyer">
              <Button
                variant="outlined"
                className="top-btn default-btn default-width fixed-space"
              >
                Get Started
              </Button>
            </Link>
          </div>
          <div className="auth-form">
            <LoginForm
              handleChange={handleChange}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
              login={login}
              forgot={forgot}
              inputs={inputs}
              errors={errors}
              errorMsg={errorMsg}
              loading={props.loginResult.loading}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
