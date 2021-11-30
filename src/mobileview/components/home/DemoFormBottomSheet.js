import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";

import CrossImg from "../../../assets/images/cross-grey.svg";
import User from "../../../assets/images/user.svg";
import Srore from "../../../assets/images/store.svg";
import Email from "../../../assets/images/email.svg";
import Phone from "../../../assets/images/phone.svg";
import City from "../../../assets/images/city.svg";
import Shape from "../../../assets/images/shape.svg";
import { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { StateListResultEntity, StateListEntity, DemoRequestEntity,DemoRequestErrorEntity,DemoRequestInputEntity } from "../../../common/model";
import { makeStyles, MenuItem, SwipeableDrawer, CircularProgress } from "@material-ui/core";


const DemoForm = (props) => {
  const { open, handleClose, demoFor, CityListAction, cityListResult, productValue,toggleDrawer,submitDemoRequestAction,demoRequestResult } = props;
  const [optValue, setOptValue] = useState(""+productValue);
  
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(()=>{
    setOptValue(productValue);
    setErrMsg("");
    setSuccessMsg("");
    setInputs({ ...inputs, 'c_product_name': productValue });
  },[productValue]);
  

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [cityList, setCityList] = useState([]);

  const handleSelect = (event) => {
    setOptValue(event.target.value);
    setInputs({ ...inputs, 'c_product_name': event.target.value });

  };

  const [inputs, setInputs] = useState({
    c_name: "",
    c_company: "",
    c_mobile_no: "",
    c_email: "",
    c_city_name: "",
    c_product_name: ""
  });

  
  useEffect(() =>{
    setCityList(cityListResult.payload);
  }, [cityListResult]);
  
  const [errors, setErrors] = useState({
    c_name: false,
    c_mobile_no: false,
    c_email: false,
    c_city_name: false,
    c_company:false,
    c_product_name: false
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setErrMsg("");
    setErrors({...errors, [name]: false})
    switch(name){
      case "c_name":
        if (value.length > 16) {
          value = value.slice(0, 16);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_mobile_no":
        if (value.length > 10) {
          value = value.slice(0, 10);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      default:
        setInputs({ ...inputs, [name]: value });
          break;
    }
  };

  const handleBlur = (e) => {
    let { name, value } = e.target;
    switch(name){
      case "c_name":
        if((value !== "" && (value.length < 4 || /[^A-Za-z ]/.test(value)))){
          setErrors({ ...errors, [name]: true });
        }
        break;
      case "c_company":
        if (value !== "" && value.length < 4) {
          setErrors({ ...errors, [name]: true });
        }
        break;
      case "c_mobile_no":
        if (value.length < 10) {
          value = value.slice(0, 10);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_email":
        if(value !== "" && !re.test(String(value).toLowerCase())){
          setErrors({ ...errors, [name]: true });
        }
        break;
      default:
        setInputs({ ...inputs, [name]: value });
        break;
    }
    // if(name === "c_name"){
    //   if(value.length < 4){
    //     setErrors({ ...errors, [name]: true });
    //   }
    // } else if(name === "c_mobile_no"){
    //   if(value.length < 10){
    //     setErrors({ ...errors, [name]: true });
    //   }
    // } else if(name === "c_pwd"){
    //   if(!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{4,16}$/.test(value))){
    //     setErrors({ ...errors, [name]: true });
    //   }
    // }
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
  const handleSubmit = async () => {
    if (inputs.c_name === "" || errors.c_name === true) {
      setErrors({ ...errors, c_name: true });
    } else if(inputs.c_mobile_no === "" || errors.c_mobile_no === true){
      setErrors({ ...errors, c_mobile_no: true });
    } else if (inputs.c_email === "" || errors.c_email) {
      setErrors({ ...errors, c_email: true });
    } else if (inputs.c_company === "" || errors.c_company) {
      setErrors({ ...errors, c_company: true });
    } else if (inputs.c_product_name === "" || errors.c_product_name) {
      setErrors({ ...errors, c_product_name: true });
    } else if (inputs.c_city_name === "" || errors.c_city_name) {
      setErrors({ ...errors, c_city_name: true });
    } else {
     submitDemoRequestAction(inputs);
    }
  }

  
  useEffect(() => {    
    if (demoRequestResult.error !== "") {
      setSuccessMsg("");
      setErrMsg(demoRequestResult.error);
    }
    if (demoRequestResult.payload !== "" ) {
      setSuccessMsg("Thank you for the information. We will be shortly getting in touch with you.");
      setErrMsg("");
    }
  }, [demoRequestResult]);

  useEffect(() => {
    CityListAction("");
  }, []);

  return (
    <div>
      <SwipeableDrawer
          anchor="bottom"
          open={open}
          className="drawerRadius"
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
      >
      
        <div  className="mob-profile-sec-space distributor-sec-height">
        <h4 className="mob-demoform-drawer-title">Demo request {demoFor}</h4>
            {/* <p className="mob-addbranch-drawer-subtitle">Do You Want To add any user to Maruti medical, Jayanagar Branch.</p> */}
            {errMsg !=="" ? <p className="login-error-msg mob-oneem">{errMsg}</p>:''}
            {successMsg !== "" ? <p className="success-msg mob-oneem">{successMsg}</p>:''}
            <form>
            {/* <Grid container spacing={0}>
              <Grid item xs={12}>
                <div className="mr-16"> */}
                  <TextField
                    name="c_name"
                    margin="normal"
                    variant="outlined"
                    placeholder="Name *"
                    className="auth-input mob-input"
                    value={inputs.c_name}
                    error={errors.c_name}
                    onChange={e => handleChange(e)}
                    onBlur={e => handleBlur(e)}
                    helperText={errors.c_name && "Not a valid name"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={User} alt="User" />
                        </InputAdornment>
                      )
                    }}
                  />
                {/* </div>
              </Grid> */}
              
              {/* <Grid item xs={12}>
                <div className="mr-16"> */}
                  <TextField
                    name="c_email"
                    margin="normal"
                    variant="outlined"
                    placeholder="Email Address *"
                    className="auth-input mob-input"                    
                    value={inputs.c_email}
                    error={errors.c_email}
                    onChange={e => handleChange(e)}
                    onBlur={e => handleBlur(e)}
                    helperText={errors.c_email && "Not a valid email"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={Email} alt="Email" />
                        </InputAdornment>
                      )
                    }}
                  />
                {/* </div>
              </Grid> */}
              {/* <Grid item xs={6}>
                <div className="mr-16">
                  <TextField
                    name="lastName"
                    margin="normal"
                    variant="outlined"
                    placeholder="Last Name"
                    className="auth-input mob-input"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={User} alt="User" />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
              </Grid> */}
              
              {/* <Grid item xs={12}>
                <div className="mr-16"> */}
                  <TextField
                    name="c_mobile_no"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    placeholder="Phone Number/Landline Number *"
                    className="auth-input mob-input"
                    value={inputs.c_mobile_no}
                    error={errors.c_mobile_no}
                    onChange={e => handleChange(e)}
                    onBlur={e => handleBlur(e)}
                    helperText={errors.c_mobile_no && "Not a valid number"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={Phone} alt="Phone" />
                        </InputAdornment>
                      )
                    }}
                  />
                {/* </div>
              </Grid> */}
              {/* <Grid item xs={12}>
                <div className="mr-16"> */}
                  <TextField
                    name="c_company"
                    margin="normal"
                    variant="outlined"
                    placeholder="Company *"
                    className="auth-input mob-input"
                    value={inputs.c_company}
                    error={errors.c_company}
                    onChange={e => handleChange(e)}
                    onBlur={e => handleBlur(e)}
                    helperText={errors.c_company && "Not a valid company name"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={Srore} alt="Company" />
                        </InputAdornment>
                      )
                    }}
                  />
                {/* </div>
              </Grid> */}
              {/* <Grid item xs={6}>
                <div className="mr-16">
                  <TextField
                    name="area"
                    margin="normal"
                    variant="outlined"
                    placeholder="Area"
                    className="auth-input mob-input"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={City} alt="City" />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
              </Grid> */}
              {/* <Grid item xs={12}>
                <div className="mr-16"> */}
                <Autocomplete
                  inputValue={inputs.c_city_name}
                  onInputChange={(e, newValue) => 
                    handleSearchChange(e, newValue, "c_city_name") }
                  onChange={(e, newValue) => 
                    handleSearchOnChange(e, newValue, "c_city_code")}
                  options={cityList}
                  className="toCatp"
                  getOptionLabel={(option) => option.c_name}
                  renderInput={(params) => 
                    <TextField 
                      {...params}  
                      error={errors.c_city_name}
                      margin="normal"
                      variant="outlined"
                      placeholder="City *"
                      className="toCatp auth-input mob-input mr-6"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                      }}
                    />
                  }
                />
                  {/* <TextField
                    name="c_city_name"
                    select
                    className="auth-input mob-input"
                    value={optValue}
                    onChange={handleSelect}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={Shape} alt="city" />
                        </InputAdornment>
                      )
                    }}
                    margin="normal"
                    variant="outlined"
                  >
                    <option value={"one"}>Area</option>
                    <option value={"two"}>Area1</option>
                    <option value={"three"}>Area2</option>
                  </TextField> */}
                {/* </div>
              </Grid>
              <Grid item xs={12}>
                <div className="mr-16"> */}
                  <TextField
                    name="c_product_name"
                    select
                    className="toCatp auth-input mob-input"
                    value={optValue}
                    error={errors.c_product_name}
                    onChange={handleSelect}
                    placeholder="Select Product *"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={User} alt="User" />
                        </InputAdornment>
                      )
                    }}
                    margin="normal"
                    variant="outlined"
                  >
                  <MenuItem value="-1">Select Product</MenuItem>
                  <MenuItem className="toCatp" value="sfa360">SFA360 ( For Pharma marketing companies )</MenuItem>
                  <MenuItem className="toCatp" value="go4+">Go4+  (For C&F)</MenuItem>
                  <MenuItem className="toCatp" value="pharmassist">Pharmassist+ (For Distributor enterprises)</MenuItem>
                  <MenuItem className="toCatp" value="ecogreen">Ecogreen (For multi chain retail store )</MenuItem>
                  <MenuItem className="toCatp" value="ecogreenexpress">Ecogreen Express( For standalone pharmacies )</MenuItem>
                  <MenuItem className="toCatp" value="liveconnect">Liveconnect (B2B Ordering platform)</MenuItem>
                  </TextField>
                {/* </div>
              </Grid> */}
              {/* <Grid item xs={12} sm={12}>
                <div className="feedback-query">
                  <div className="feedback-label">Your Message</div>
                  <div className="feedback-label">
                    Max <span>1000</span> character
                  </div>
                </div>
                <TextField
                  multiline
                  name="name"
                  margin="normal"
                  variant="outlined"
                  placeholder="Write here..."
                  className="auth-input mob-input"
                ></TextField>
              </Grid> */}
            {/* </Grid>
            <div className="align-center"> */}
              <Button
                variant="contained"
                color="primary"
                className="cancel-demo-btn-mob"
                component="span"
                onClick={handleClose}
              >
                cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="schedule-demo-btn-mob"
                component="span"
                onClick={handleSubmit}
              >
              {demoRequestResult.loading ? <CircularProgress className="spining-icon" /> : null}{" "}
                Schedule Demo
              </Button>
            {/* </div> */}
            </form>
       </div>
      </SwipeableDrawer>
    </div>
  );
};

export default DemoForm;
