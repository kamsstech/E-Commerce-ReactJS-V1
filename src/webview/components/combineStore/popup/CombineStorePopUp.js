/*
	*********************
	Last Edit 
	*********************
	Made By : Dhanasekaran
	Date    : 02/11/2021
	Purpose : Button name change
*/

import * as React from "react";
import { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import {
  makeStyles,
  MenuItem,
  CircularProgress,
  Tooltip,
  Zoom,
} from "@material-ui/core";
import CrossImg from "../../../../assets/images/cross-grey.svg";

import Shop from "../../../../assets/images/icons/shop.svg";
import Licence from "../../../../assets/images/icons/licence.svg";
import Address from "../../../../assets/images/address.svg";
import ZipCode from "../../../../assets/images/icons/zip-code.svg";
import Gst from "../../../../assets/images/icons/gst.svg";
import State from "../../../../assets/images/icons/state.svg";
import City from "../../../../assets/images/icons/city.svg";
import Area from "../../../../assets/images/icons/area.svg";
import DemoHeader from "../../../../assets/images/bgOfdemoc2@3x.png";
import { Constants } from "../../../../common/constant/localstorage";

const filter = createFilterOptions();

// import DemoHeader from "../../../assets/images/ask-for-demo.svg";
// import DemoHeader from "../../../assets/images/bg_of_demo.png";

const CombileStorePopUp = (props) => {
  const {
    open,
    handleClose,
    saveUnCombineStoreResult,
    UpdateCombineStore,
    updateCombineStoreResult,
    GetStoreCombineList,
    GetStateCityArea,
    getStateCityAreaResult,
  } = props;

  // console.log(updateCombineStoreResult, ">>>> updateCombineStoreResult");

  // console.log(getStateCityAreaResult, ">>>> getStateCityAreaResult");

  const [successMsg, setSuccessMsg] = useState("");

  const [respModalOpen, setRespModalOpen] = useState(true);

  const [errMsg, setErrMsg] = useState("");
  const [extCustomer, setExtCustomer] = useState("");
  const [value, setValue] = React.useState({
    c_area_name: "",
  });
  const [inputs, setInputs] = useState({
    c_firm_name: "",
    c_br_code: "",
    c_pincode: "",
    c_drug_license_no: "",
    c_gst_number: "",
    c_address_no1: "",
    c_address_no2: "",
    c_state_code: "",
    c_state_name: "",
    c_city_code: "",
    c_city_name: "",
    c_area_code: "",
    c_area_name: "",
    c_array_area: [],
  });

  // const handleSelect = (event) => {
  //   setInputs({ ...inputs, c_product_name: event.target.value });
  // };

  const [errors, setErrors] = useState({
    c_firm_name: false,
    c_br_code: false,
    c_pincode: false,
    c_drug_license_no: false,
    c_gst_number: false,
    c_address_no1: false,
    c_address_no2: false,
    c_state_code: false,
    c_state_name: false,
    c_city_code: false,
    c_city_name: false,
    c_area_code: false,
    c_area_name: false,
    c_array_area: false,
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setErrMsg("");
    setErrors({ ...errors, [name]: false });
    switch (name) {
      case "c_firm_name":
        if (value.length > 256) {
          value = value.slice(0, 256);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;

      case "c_br_code":
        if (value.length > 10) {
          value = value.slice(0, 10);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_pincode":
        if (value.length > 6) {
          value = value.slice(0, 6);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_drug_license_no":
        if (value.length > 1000) {
          value = value.slice(0, 1000);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;

      case "c_gst_number":
        // if (value.length > 1000) {
        //   value = value.slice(0, 1000);
        // } else {
        //   setInputs({ ...inputs, [name]: value });
        // }
        if (value.length > 15) {
          value = value.slice(0, 15);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_address_no1":
        if (value.length > 1000) {
          value = value.slice(0, 1000);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_address_no2":
        if (value.length > 1000) {
          value = value.slice(0, 1000);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_state_name":
        if (value.length > 1000) {
          value = value.slice(0, 1000);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_city_name":
        if (value.length > 1000) {
          value = value.slice(0, 1000);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_area_name":
        if (value.length > 1000) {
          value = value.slice(0, 1000);
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
    switch (name) {

     




      case "c_name":
        if (name === "c_name") {
          let str = value;
          let firstLetter = str.charAt(0);
          if (firstLetter === " ") {
            setErrors({ ...errors, [name]: true });
          }
          else if (!/^(?=.*[a-zA-Z]).{4,128}$/.test(value)) {
              setErrors({ ...errors, [name]: true });
          }

        }
        break;
        case "c_gst_number":
          if (name === "c_gst_number") {
            if (value !== "" && inputs.c_gst_number === "") {
              setErrors({ ...errors, [name]: true });
            } else if (
              !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value)
            ) {
              setErrors({ ...errors, [name]: true });
            }
          }
          break;


      case "c_pincode":
        if (value.length <= 6) {
          if (!/^[1-9]\d{5}$/.test(value)) {
            setErrors({ ...errors, [name]: true });
          }
        }

        break;
        case "c_drug_license_no":
          if (value.length < 5) {
            setErrors({ ...errors, [name]: true });
            // if (!/^[1-9]\d{5}$/.test(value)) {
            //   setErrors({ ...errors, [name]: true });
            // }
          }
  
          break;
        


      // case "c_mobile_no":
      //   if (value.length <= 10) {
      //     if (!/^[6-9]\d{9}$/.test(value)) {
      //       setErrors({ ...errors, [name]: true });
      //     }

      //   }
      //   break;
      // case "c_firm_name":
      //   if (name === "c_name") {
      //     let str = value;
      //     let firstLetter = str.charAt(0);
      //     if (firstLetter === " ") {
      //       setErrors({ ...errors, [name]: true });
      //     }
      //     else if (!/^(?=.*[a-zA-Z]).{4,128}$/.test(value)) {
      //         setErrors({ ...errors, [name]: true });
      //     }

      //   }

      //   break;
      default:
        setInputs({ ...inputs, [name]: value });
        break;
    }
  };

  const handleSubmit = () => {
    // console.log(inputs, "Combine Inputs");
    if (value.c_area_name !== "") {
      const body = {
        c_br_code: inputs.c_br_code,
        c_firm_name: inputs.c_firm_name,
        c_drug_license_no: inputs.c_drug_license_no,
        c_gst_number: inputs.c_gst_number,
        c_address_no1: inputs.c_address_no1,
        c_address_no2: inputs.c_address_no2,
        c_pincode: inputs.c_pincode,
        c_state_code: inputs.c_state_code,
        c_state_name: inputs.c_state_name,
        c_city_code: inputs.c_city_code,
        c_city_name: inputs.c_city_name,
        c_area_code: inputs.c_area_code,
        // c_area_name: inputs.c_area_name,
        c_area_name: value.c_area_name,
        c_landmark: inputs.c_landmark,
      };

      UpdateCombineStore(body);
      setInputs({
        c_firm_name: "",
        c_br_code: "",
        c_pincode: "",
        c_drug_license_no: "",
        c_gst_number: "",
        c_address_no1: "",
        c_address_no2: "",
        c_state_code: "",
        c_state_name: "",
        c_city_code: "",
        c_city_name: "",
        c_area_code: "",
        c_area_name: "",
        c_array_area: [],
      });
      handleClose();
    }

    // if (inputs.c_name === "" || errors.c_name === true) {
    //   setErrors({ ...errors, c_name: true });
    // } else if (inputs.c_mobile_no === "" || errors.c_mobile_no === true) {
    //   setErrors({ ...errors, c_mobile_no: true });
    // } else if (inputs.c_firm_name === "" || errors.c_firm_name) {
    //   setErrors({ ...errors, c_firm_name: true });
    // } else if (inputs.c_pincode === "" || errors.c_pincode) {
    //   setErrors({ ...errors, c_pincode: true });
    // } else if (inputs.c_product_name === "" || errors.c_product_name) {
    //   setErrors({ ...errors, c_product_name: true });
    // } else if (inputs.c_description === "" || errors.c_description) {
    //   setErrors({ ...errors, c_description: true });
    // } else {

    //   const body={
    //     c_store_name:inputs.c_name,
    //     c_owner_name:inputs.c_firm_name,
    //     c_mobile_no:inputs.c_mobile_no,
    //     c_pincode:inputs.c_pincode,
    //     c_description:inputs.c_description,
    //     c_existing_customer:checkList.Y,
    //     c_product:productValue,

    //   }
    //   console.log(body, "<<< Schedule Demo Body")

    // }
  };

  useEffect(() => {
    if(inputs.c_pincode !== ""){
      console.log(inputs.c_pincode.length ,"inputs.c_pincode.length")
      if(inputs.c_pincode.length < 6){
        setInputs({
          ...inputs,
          c_state_name:"",
          c_city_name:""
        })
        setValue({
          c_area_name:""
        })
      }else if (inputs.c_pincode.length === 6) {
          const body = {
            c_pincode: inputs.c_pincode,
          };
          GetStateCityArea(body);
       
      }
    }
  }, [inputs.c_pincode]);

  useEffect(() => {
    if (getStateCityAreaResult.statuscode === 0) {
      setInputs({
        ...inputs,
        c_state_code: getStateCityAreaResult.payload.c_state_code,
        c_state_name: getStateCityAreaResult.payload.c_state_name,
        // c_city_code: getStateCityAreaResult.payload.c_city_code,
        c_city_name: getStateCityAreaResult.payload.c_city_name,
        // c_area_code: getStateCityAreaResult.payload.c_area_code,
        c_array_area: getStateCityAreaResult.payload.j_area_list,
      });
    }
  }, [getStateCityAreaResult]);

  useEffect(() => {
    if (saveUnCombineStoreResult.statuscode === 0) {
      setInputs({
        ...inputs,
        c_firm_name: saveUnCombineStoreResult.payload.c_firm_name,
        c_br_code: saveUnCombineStoreResult.payload.c_br_code,
        c_pincode: saveUnCombineStoreResult.payload.c_pincode,
        c_drug_license_no: saveUnCombineStoreResult.payload.c_drug_license_no,
        c_gst_number: saveUnCombineStoreResult.payload.c_gst_number,
        c_address_no1: saveUnCombineStoreResult.payload.c_address_no1,
        c_address_no2: saveUnCombineStoreResult.payload.c_address_no2,
        // c_state_code: saveUnCombineStoreResult.payload.c_state_code,
        // c_state_name: saveUnCombineStoreResult.payload.c_state_name,
        // c_city_code: saveUnCombineStoreResult.payload.c_city_code,
        // c_city_name: saveUnCombineStoreResult.payload.c_city_name,
        // c_area_code: saveUnCombineStoreResult.payload.c_area_code,
        // c_area_name: saveUnCombineStoreResult.payload.c_area_name,
      });
    }
  }, [saveUnCombineStoreResult]);

  // console.log(saveUnCombineStoreResult, "<<<<< saveUnCombineStoreResult");
  // console.log(inputs, "<<<< Inputs");
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="roadblock-popup"
        open={open && inputs.c_firm_name !== ""}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="demo-popup-sec demoSecNew">
            <div
              className="demopopup-titlese c"
              style={{ backgroundImage: `url('${DemoHeader}')` }}
            >
              <p>
                Great! Confirm Given below information. <span></span>{" "}
              </p>
              <h4>Confirm Firm/Store Information</h4>
              {/*<h4>Demo Request {demoFor}</h4>*/}
              {/* <p className="success-msg">{successMsg}</p>
							<p className="login-error-msg">{errMsg}</p> */}
              <div className="align-right popup-align-right">
                <Tooltip title="Close" TransitionComponent={Zoom}>
                  <div className="cross-img-div">
                    <img src={CrossImg} alt="cross-img" onClick={handleClose} />
                  </div>
                </Tooltip>
              </div>
            </div>
            <form>
              <Grid container spacing={0} className="mt-16 ask-for-demo">
                <Grid item xs={6}>
                  <div className="mr-16">
                    <TextField
                      name="c_firm_name"
                      margin="normal"
                      variant="outlined"
                      placeholder="Store Name *"
                      className="auth-input"
                      value={inputs.c_firm_name}
                      error={errors.c_firm_name}
                      onChange={(e) => handleChange(e)}
                      // onBlur={(e) => handleBlur(e)}
                      helperText={errors.c_firm_name && "Not a Store name"}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={Shop} alt="Shop" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="mr-16">
                    <TextField
                      name="c_drug_license_no"
                      margin="normal"
                      variant="outlined"
                      placeholder="Drug License Number*"
                      className="auth-input"
                      value={inputs.c_drug_license_no}
                      error={errors.c_drug_license_no}
                      onChange={(e) => handleChange(e)}
                      onBlur={(e) => handleBlur(e)}
                      helperText={
                        errors.c_drug_license_no && "Not a Drug License Number"
                      }
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={Licence} alt="Licence" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="mr-16">
                    <TextField
                      name="c_gst_number"
                      margin="normal"
                      variant="outlined"
                      placeholder="GSTIN Number"
                      className="auth-input"
                      value={inputs.c_gst_number.toUpperCase()}
                      // value={inputs.c_gst_number}
                      error={errors.c_gst_number}
                      onChange={(e) => handleChange(e)}
                      onBlur={(e) => handleBlur(e)}
                      helperText={
                        errors.c_gst_number && "Not a valid GSTIN number"
                      }
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={Gst} alt="Gst" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div className="mr-16">
                    <TextField
                      name="c_address_no1"
                      margin="normal"
                      variant="outlined"
                      placeholder="Address"
                      className="auth-input"
                      value={inputs.c_address_no1}
                      error={errors.c_address_no1}
                      onChange={(e) => handleChange(e)}
                      // onBlur={(e) => handleBlur(e)}
                      helperText={errors.c_address_no1 && "Not a valid Address"}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={Address} alt="Address" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="mr-16">
                    <TextField
                      name="c_pincode"
                      margin="normal"
                      variant="outlined"
                      placeholder="Pin Code *"
                      className="auth-input"
                      value={inputs.c_pincode}
                      error={errors.c_pincode}
                      onChange={(e) => handleChange(e)}
                      onBlur={(e) => handleBlur(e)}
                      helperText={errors.c_pincode && "Not a valid pincode"}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={ZipCode} alt="Pin Code" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="mr-16">
                    <TextField
                      name="c_state_name"
                      margin="normal"
                      variant="outlined"
                      placeholder="State"
                      className="auth-input"
                      value={inputs.c_state_name}
                      error={errors.c_state_name}
                      onChange={(e) => handleChange(e)}
                      // onBlur={(e) => handleBlur(e)}
                      helperText={errors.c_state_name && "Not a valid State"}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={State} alt="State" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="mr-16">
                    <TextField
                      name="c_city_name"
                      margin="normal"
                      variant="outlined"
                      placeholder="City"
                      className="auth-input"
                      value={inputs.c_city_name}
                      error={errors.c_city_name}
                      onChange={(e) => handleChange(e)}
                      // onBlur={(e) => handleBlur(e)}
                      helperText={errors.c_city_name && "Not a valid city"}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={City} alt="City" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="mr-16">
                    {/* <TextField
											select
											name="c_area_name"
											margin="normal"
											variant="outlined"
											placeholder="Area"
											className="auth-input"
											value={inputs.c_area_name}
											error={errors.c_area_name}
											onChange={(e) => handleChange(e)}
											// onBlur={(e) => handleBlur(e)}
											helperText={errors.c_area_name && "Not a valid pincode"}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<img src={Area} alt="Area" />
													</InputAdornment>
												),
											}}
										>
											<MenuItem key={""} value={"00000"}>
									<div className="opacity-05">Select the area</div>
								</MenuItem>
							{inputs.c_area_name.map((option,index) => (
								<MenuItem key={option} value={(option)}>
									{option}
								</MenuItem>
							))}
								</TextField> */}

                    {/* <Autocomplete
        id="free-solo-demo"
		freeSolo
		
        className="auth-input"
        options={inputs.c_array_area.map((option) => option)}
        renderInput={(params) => (
			
          <TextField 
		  {...params} 
		  margin="normal" 
		  variant="outlined"
		  placeholder="Search your area"
		//   InputProps={{ ...params.InputProps, type: 'search' }}
		  />
        )}
		
      /> */}

                    <Autocomplete
                      name="c_area_name"
                      value={value}
                      onChange={(event, newValue) => {
                        if (typeof newValue === "string") {
                          setValue({
                            c_area_name: newValue,
                          });
                          setInputs({
                            c_area_name: newValue,
                          });
                        } else if (newValue && newValue.inputValue) {
                          // Create a new value from the user input
                          setValue({
                            c_area_name: newValue.inputValue,
                          });
                          setInputs({
                            c_area_name: newValue.inputValue,
                          });
                        } else {
                          setValue(newValue);
                        }
                      }}
                      filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        // Suggest the creation of a new value
                        if (params.inputValue !== "") {
                          filtered.push({
                            // inputValue: params.inputValue,
                            // c_area_name: `Add "${params.inputValue}"`,
                            c_area_name: `${params.inputValue}`,
                          });
                        }

                        return filtered;
                      }}
                      selectOnFocus
                      clearOnBlur
                      handleHomeEndKeys
                      id="free-solo-with-text-demo"
                      options={inputs.c_array_area}
                      getOptionLabel={(option) => {
                        // Value selected with enter, right from the input
                        if (typeof option === "string") {
                          return option;
                        }
                        // Add "xxx" option created dynamically
                        if (option.inputValue) {
                          return option.inputValue;
                        }
                        // Regular option
                        return option.c_area_name;
                      }}
                      renderOption={(option) => option.c_area_name}
                      className="auth-input CusAutoComplete"
                      freeSolo
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Search or Add Your Area "
                          error={errors.c_area_name}
                          helperText={errors.c_area_name && "Not a valid Area"}
                          onChange={(e) => handleChange(e)}
                          // onBlur={(e) => handleBlur(e)}
                          variant="outlined"
                          InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                              <InputAdornment position="start">
                                <img src={Area} alt="Area" />
                              </InputAdornment>
                            ),
                          }}
                        />
                      )}

                      //   InputProps={{
                      // 	startAdornment: (
                      // 		<InputAdornment position="start">
                      // 			<img src={Area} alt="Area" />
                      // 		</InputAdornment>
                      // 	),
                      // }}
                    />
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div className="mr-16 text-right mr-b-24">
                    <Button
                      variant="contained"
                      color="primary"
                      className="cancel-demo-dbtn width96 mr-r-12"
                      component="span"
                      onClick={handleClose}
                    >
                      cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      className="schedule-ddemo-btn width96"
                      component="span"
                      type="submit"
                      disabled={
                        inputs.c_name === "" || errors.c_name === true ||
                        inputs.c_drug_license_no === "" || errors.c_drug_license_no === true ||
                        inputs.c_gst_number === "" || errors.c_gst_number === true ||
                        inputs.c_address_no1 === "" || errors.c_address_no1 === true ||
                        inputs.c_pincode === "" || (inputs.c_pincode.length !== 6) || errors.c_pincode === true 
                      }
                      onClick={handleSubmit}
                    >

                      {
                        // <CircularProgress className="spining-icon" />
                      }{" "}
                      confirm
                      {/*confirm*/}
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CombileStorePopUp;
