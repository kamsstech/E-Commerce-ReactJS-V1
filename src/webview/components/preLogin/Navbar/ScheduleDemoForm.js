import * as React from "react";
import { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import Checkbox from '@material-ui/core/Checkbox';


import Shop from "../../../assets/images/icons/shop.svg";
import User from "../../../assets/images/icons/user.svg";
import Phone from "../../../assets/images/icons/smartphone.svg";
import ZipCode from "../../../assets/images/icons/zip-code.svg";

import CrossImg from "../../../../assets/images/cross-grey.svg";
import City from "../../../../assets/images/city.svg";
import Shape from "../../../../assets/images/shape.svg";
import DemoHeader from "../../../../assets/images/ask-for-demo.svg";

import Autocomplete from "@material-ui/lab/Autocomplete";

import { makeStyles, MenuItem, CircularProgress, Tooltip, Zoom } from "@material-ui/core";

// interface Props {
//   open: boolean;
//   handleClose(): void;
//   demoFor: string;
//   CityListAction(stateCode: string): void;
//   cityListResult: StateListEntity;
//   productValue:string;
//   submitDemoRequestAction(inputs: DemoRequestInputEntity): void;
//   demoRequestResult: DemoRequestEntity;
// }

const ScheduleDemoForm = (props) => {
	const { open, handleClose, demoFor, CityListAction, cityListResult, productValue,submitDemoRequestAction,demoRequestResult } = props;
	console.log(demoFor,"<<<< productValue")
	const [optValue, setOptValue] = useState(""+productValue);
	const [successMsg, setSuccessMsg] = useState("");

	const [respModalOpen, setRespModalOpen] = useState(false);

	const [errMsg, setErrMsg] = useState("");

	useEffect(()=>{
		setOptValue(productValue);
		setSuccessMsg("");
		setErrMsg("");
		setInputs({ ...inputs, 'c_product_name': productValue });

	},[productValue]);

	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const [cityList, setCityList] = useState([]);


	const [inputs, setInputs] = useState({
		c_name: "",
		c_company: "",
		c_mobile_no: "",
		c_email: "",
		c_city_name: "",
		c_product_name: "",
		c_description:"Yes, I am interested in demo."
	});

	const handleSelect = (event) => {
		setOptValue(event.target.value);
		setInputs({ ...inputs, 'c_product_name': event.target.value });
	};

	
	useEffect(() =>{
		setCityList(cityListResult.payload);
	}, [cityListResult]);
	
	const [errors, setErrors] = useState({
		c_name: false,
		c_mobile_no: false,
		c_email: false,
		c_city_name: false,
		c_company:false,
		c_product_name: false,
		c_description:false
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
				case "c_description":
				if (value.length > 1000) 
				{
						value = value.slice(0, 1000);
				} 
				else 
				{
						setInputs({ ...inputs, [name]: value });
				}

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
				if(value.length < 10 ){
					setErrors({ ...errors, [name]: true });
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
		} 
		else if (inputs.c_city_name === "" || errors.c_city_name) {
			setErrors({ ...errors, c_city_name: true });
		} 
		else if (inputs.c_description === "" || errors.c_description) {
			setErrors({ ...errors, c_description: true });
		} 
		else {
		 submitDemoRequestAction(inputs);
		}
	}

	const handleCloseRespModal = () =>{
		setRespModalOpen(false);
		handleClose();
	}
	
	useEffect(() => {

		if (demoRequestResult.error !== "") {
			setSuccessMsg("");
			setErrMsg(demoRequestResult.error);
			setRespModalOpen(true);

		}
		if (demoRequestResult.payload !== "" ) {
			// setSuccessMsg("Your Request for product demo is accepted, soon you will be contacted!");
			setSuccessMsg("Thank you for the information. We will be shortly getting in touch with you.");
			setRespModalOpen(true);
			setErrMsg("");
		}
		
		
	}, [demoRequestResult]);

	useEffect(() => {
		CityListAction("");
	}, []);

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className="roadblock-popup"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={open}>
					<div className="demo-popup-sec demoSecNew">
						<div className="demopopup-titlese c" style ={ { backgroundImage: `url('${DemoHeader}')`} }>
							<p>Thank you for showing interest in <span>“Pharmsoft”</span> </p>
							<h4>Fill the form to proceed.</h4>
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
										name="c_name"
										margin="normal"
										variant="outlined"
										placeholder="Store Name *"
										className="auth-input"
										value={inputs.c_name}
										error={errors.c_name}
										onChange={e => handleChange(e)}
										onBlur={e => handleBlur(e)}
										helperText={errors.c_name && "Not a valid name"}
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<img src={Shop} alt="Shop" />
												</InputAdornment>
											)
										}}
									/>
								</div>
							</Grid>
							
							<Grid item xs={6}>
								<div className="mr-16">
									<TextField
										name="c_email"
										margin="normal"
										variant="outlined"
										placeholder="Owner Name *"
										className="auth-input"                    
										value={inputs.c_email}
										error={errors.c_email}
										onChange={e => handleChange(e)}
										onBlur={e => handleBlur(e)}
										helperText={errors.c_email && "Not a valid email"}
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<img src={User} alt="User" />
												</InputAdornment>
											)
										}}
									/>
								</div>
							</Grid>
							{/* <Grid item xs={6}>
								<div className="mr-16">
									<TextField
										name="lastName"
										margin="normal"
										variant="outlined"
										placeholder="Last Name"
										className="auth-input"
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
							
							<Grid item xs={6}>
								<div className="mr-16">
									<TextField
										name="c_mobile_no"
										type="number"
										margin="normal"
										variant="outlined"
										placeholder="Phone Number/Landline Number *"
										className="auth-input"
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
								</div>
							</Grid>
							<Grid item xs={6}>
								<div className="mr-16">
									<TextField
										name="c_company"
										margin="normal"
										variant="outlined"
										placeholder="Pin Code *"
										className="auth-input"
										value={inputs.c_company}
										error={errors.c_company}
										onChange={e => handleChange(e)}
										onBlur={e => handleBlur(e)}
										helperText={errors.c_company && "Not a valid company name"}
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<img src={ZipCode} alt="Pin Code" />
												</InputAdornment>
											)
										}}
									/>
								</div>
							</Grid>

							<Grid item xs={6}>
									<h4 className="description-title">
										Description
										<span className="mandateSign">*</span>
									</h4>
								</Grid>
								<Grid item xs={6}>
										<div className="mr-16">
											<h4 className="description-title text-right ">
												Max{" "}
												<span className="clr-aquamarine">
													{1000 - inputs.c_description.length}
												</span>{" "}
												character
											</h4>
									</div>
								</Grid>

								 <Grid item xs={12}>
										<div className="mr-16">
											<TextField
												name="c_description"
												multiline
												rows={1}
												rowsMax={4}
												value={inputs.c_description}
												onChange={(e) => handleChange(e)}
												onBlur={(e) => handleBlur(e)}
												error={errors.c_description}
												helperText={errors.c_description && "Please Enter"}
												margin="normal"
												variant="outlined"
												placeholder="Yes, I am interested in demo."
												className="auth-input"
												// InputProps={{
												//     startAdornment: (
												//     <InputAdornment position="start">
												//         <img src={city} alt="city" />
												//     </InputAdornment>
												//     )
												// }}
											/>
									</div>
							</Grid>
							<Grid item xs={12}>
									<div className="mr-16 text-left">
												<h6>
														<Checkbox className="pd-l-32 itemMapCheckbox" color="primary"/> Are you a existing Customer
												</h6>
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
												Close
											</Button>
											<Button
												variant="contained"
												color="primary"
												className="schedule-ddemo-btn"
												component="span"
												onClick={handleSubmit}

											>
											{demoRequestResult.loading ? <CircularProgress className="spining-icon" /> : null}{" "}

												Schedule Demo
											</Button>
									</div>
							</Grid>

							{/* <Grid item xs={6}>
								<div className="mr-16">
									<TextField
										name="area"
										margin="normal"
										variant="outlined"
										placeholder="Area"
										className="auth-input"
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
						 {/* <Grid item xs={6}>
								<div className="mr-16">
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
											className="toCatp auth-input mr-6"
											inputProps={{
												...params.inputProps,
												autoComplete: 'new-password',
											}}
										/>
									}
								/>*/}
									{/* <TextField
										name="c_city_name"
										select
										className="auth-input"
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
								{/*</div>
							</Grid>*/}
							{/*<Grid item xs={6}>
								<div className="mr-16">
									<TextField
										name="c_product_name"
										select
										className="toCatp auth-input"
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
								</div>
							</Grid>*/}
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
									className="auth-input"
								></TextField>
							</Grid> */}
						</Grid>
						
						</form>
					</div>
				</Fade>
			</Modal>
		
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className="roadblock-popup"
				open={respModalOpen}
				onClose={handleCloseRespModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={respModalOpen}>
					<div className="demoresult-popup-sec">
						<div className="demoresultpopup-titlesec">
							<h4>{successMsg !== ""?<p color="green">{successMsg }</p> :<p color="red">{errMsg}</p>}</h4>
							{/* <img src={CrossImg} alt="CrossImg" onClick={handleClose} /> */}

						</div>
						<div className="align-center">
							<Button
								variant="contained"
								color="primary"
								className="cancel-demo-btn"
								component="span"
								onClick={handleCloseRespModal}
							>
								Close
							</Button>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default ScheduleDemoForm;
