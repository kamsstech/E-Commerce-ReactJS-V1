import React,{ useState, useEffect } from 'react'
import { Link, useHistory  } from "react-router-dom";
import LoginFrom from "./LoginForm";
import LoginResultModal from './LoginResultModal';



const LoginPage = (props) => {
  let history = useHistory();
  const {loginResult,validateREGISTERResult,validateREGISTER} = props;
  // console.log(validateREGISTERResult,"<<<< validateREGISTERResult")
  const [open, setOpen] = useState(false)
  
  const [status, setStatus] = useState("");
  const [errorMsgPop, setErrorMsgPop] = useState("");

  
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    username: false,
    password: false
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(false);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
   
    setErrorMsg("");
    setErrors({ ...errors, [name]: false });  

    if(name === "username"){
      if (value.length > 10) {
        value = value.slice(0, 10);
      } else {
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
  }


  const handleBlur = (e) => {
    let { name, value } = e.target;

    // if(name === "username"){
    //   if(value.length < 10){
    //     setErrors({ ...errors, [name]: true });
    //   }
    // }
    if(name === "username"){
      if(value.length <= 10){
        if(!(/^[6-9]\d{9}$/.test(value))){
          setErrors({ ...errors, [name]: true });
        }
      }
    } else if(name === "password"){
      if(!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{4,16}$/.test(value))){
        setErrors({ ...errors, [name]: true });
      }
    }
  }
  
  const login = () => {
    if (inputs.username === "" || errors.username === true ) {
      setErrors({ ...errors, username: true });
    } else if (inputs.password === "" || errors.password === true) {
      setErrors({ ...errors, password: true });
    } else {
      props.login(inputs);
    }
  };

  const forgot = () => {
    setErrors({ ...errors, password: false,  });
    setInputs({ ...inputs, password: ""})
    if (inputs.username === "") {
      setErrors({ ...errors, username: true,  });
    } else {
      
      // props.SendOTP(inputs.username, "login");
      let user_name=inputs.username;
      const body ={
        "c_mobile_no":user_name,
      }
      if(user_name.length == 10){
        if(!(/^[6-9]\d{9}$/.test(user_name)))
        {
          setErrors({ ...errors, username: true });
        }
        else
        {
          
          validateREGISTER(body)
        }
      }
      else
      {
        setErrors({ ...errors, username: true });
      }
    }
  };

  useEffect(() => {
    if(validateREGISTERResult.statuscode === 2){
      let user_name=inputs.username;
      const body ={
        "c_username":user_name,
        'page':'login'
      }
      props.SendOTP(body);
    }else if(validateREGISTERResult.statuscode === 5){
      setOpenDrawer(true);
        setStatus(validateREGISTERResult.statuscode);
        setErrorMsgPop(validateREGISTERResult.error);
    }
  }, [validateREGISTERResult])
  useEffect(() => {
    
    if(props.profileDetailsResult.message !== "" && props.profileDetailsResult.statuscode === 0){
       history.push('/home');
    } 
  }, [props.profileDetailsResult])

  // useEffect(() => {
  //   if(inputs.username !== ""){
  //     if (props.loginResult.error !== "") {
  //       setErrorMsg(props.loginResult.error);
  //     }else if((props.loginResult.message === "Logged Successfully!") && (props.loginResult.message !== undefined)){
  //       history.push(`/home`);
  //     }
  //   }
  // }, [props.loginResult]);

  

  useEffect(() => {
    if (inputs.username !== "") {
      // console.log(loginResult.message,"loginResult Message")

      if (props.loginResult.error !== "") {
        setErrorMsg(props.loginResult.error);
        setOpen(true);
        setOpenDrawer(true);
        setStatus(loginResult.statuscode);
        setErrorMsgPop(loginResult.error);
      } 


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
        } else if (loginResult.payload.c_lc_user_status === "1") {
          if (loginResult.payload.c_update_status === "0") {
            // if (loginResult.payload.cType === "B") {
            //   history.push("/register-details/buyer");
            // } else if (loginResult.payload.cType === "S") {
            //   history.push("/register-details/seller");
            // }
          } else if (loginResult.payload.c_update_status === "1") {
            history.push("/home");
          }
        }
      }



      // pendind status
      else if (
        loginResult.payload !== undefined &&
        loginResult.payload.c_lc_user_active_status === "P"
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
        } else if (loginResult.payload.c_lc_user_status === "1") {
          if (loginResult.payload.c_update_status === "0") {
            // if (loginResult.payload.cType === "B") {
            //   history.push("/register-details/buyer");
            // } else if (loginResult.payload.cType === "S") {
            //   history.push("/register-details/seller");
            // }
          } else if (loginResult.payload.c_update_status === "1") {
            history.push("/home");
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



  useEffect(() => {
    if(inputs.username !== ""){
      if (props.sendOTPResult.error !== "") {
        setErrorMsg(props.sendOTPResult.error);
      }else if(props.sendOTPResult.message !== ""){
        if(inputs.username !== ""){
          history.push(`/forgot-password/${inputs.username}`);
        }
        
      }
    }
  }, [props.sendOTPResult]);

  useEffect(() => {
    localStorage.clear();
    // localStorage.setItem("SECOND_TIME", "true");
  }, [])

  return (
    <>
      {/* {toHome ? <Redirect to="/home" /> : null} */}
      <div className="mob-auth-container">
        <h2 className="mob-title">Log in</h2>
        <h3 className="mob-auth-title">Welcome To 'Live Order'</h3>
        <h5 className="mob-auth-subtitle">
          India's Fastest B2B Pharma 'Eco System'
        </h5>
        <LoginFrom
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          login={login}
          forgot={forgot}
          inputs={inputs}
          errors={errors}
          errorMsg={errorMsg}
          loading={props.loginResult.loading}
        />
      </div>
      <LoginResultModal 
      openDrawer={openDrawer} 
      toggleDrawer={toggleDrawer} 
      status={status}
      errorMsgPop ={errorMsgPop}
      
      />
    </>
  );
};

export default LoginPage;
