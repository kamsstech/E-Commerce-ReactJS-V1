import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ValidationPopup from "./ValidationPopup";


import Shop from "../../../assets/images/icons/shop.svg";
import Licence  from "../../../assets/images/icons/licence.svg";
import Gst  from "../../../assets/images/icons/gst.svg";
import Phone from "../../../assets/images/icons/smartphone.svg";
import State from "../../../assets/images/icons/state.svg";
import City from "../../../assets/images/icons/city.svg";
import RegisterSellerModal from "./RegisterSellerModal";


const RegisterSeller = (props) => {
	const {
		GST_NumCheck,
		gST_NumCheckResult,
		validateREGISTER,
		validateREGISTERResult,
		ScheduleDemoEmailAction,
        scheduleDemoEmailResult,
		getProfileInfoResult
	} = props;
	console.log(getProfileInfoResult,"VVVVVVVVVVVVVVVVVVVVVVV getProfileInfoResult")
	const [openValidate, setValidationPopup] = useState(false);
	const [respModalOpen, setRespModalOpen] = useState(false);
	const [errors, setErrors] = useState({
		store: false,
		c_name: false,
		c_mobile_no: false,
		c_email: false,
		c_date: false,
		c_address_1: false,
		c_address_2: false,
		c_area_name: false,
		// c_city_name_name: false,
		c_landmark: false,
		c_pincode: false,
		c_drug_lic: false,
		c_gst_num: false,
		c_gst_type: false,
		c_state: false,
		c_city_name: false,
		c_mobile_number: false,
		c_state_name: false,
		c_gst_no: false,
		c_druglicense_no1: false,
		c_description: false,
	});
	const [inputs, setInputs] = useState({
		c_city_name: "",
		c_mobile_number: "",
		c_state_name: "",
		c_gst_no: "",
		c_druglicense_no1: "",
		c_name: "",
		c_description: "I am Interested to Register a new seller",
	});

	

	const handleInputChange = (e) => {
		// console.log("e is",event)
		let { name, value } = e.target;

		setErrors({ ...errors, [name]: false });
		if (name === "c_city_name") {
			setInputs({ ...inputs, [name]: value });
		} else if (name == "c_state_name") {
			setInputs({ ...inputs, [name]: value });
		} else if (name === "c_gst_no") {
			if (value.length > 15) {
				value = value.slice(0, 15);
			} else {
				setInputs({ ...inputs, [name]: value });
			}
		} else if (name === "c_mobile_number") {
			if (value.length > 10) {
				value = value.slice(0, 10);
			} else {
				setInputs({ ...inputs, [name]: value });
			}
		} else if (name === "c_druglicense_no1") {
			if (value.length > 15) {
				value = value.slice(0, 15);
			} else {
				setInputs({ ...inputs, [name]: value });
			}
		} else if (name === "c_name") {
			setInputs({ ...inputs, [name]: value });
		} 
		else if (name === "c_description") {
			if (value.length > 1000) {
				value = value.slice(0, 1000);
			} else {
				setInputs({ ...inputs, [name]: value });
			}
		}
	};

	const handleBlur = (e) => {
		let { name, value } = e.target;

		if (name === "c_gst_no") {
			if (
				!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value)
			) {
				setErrors({ ...errors, [name]: true });
			}
		} else if (name === "c_mobile_number") {
			if (value.length <= 10) {
				if (!/^[6-9]\d{9}$/.test(value)) {
					setErrors({ ...errors, [name]: true });
				} else {
					const body = {
						c_mobile_no: inputs.c_mobile_number,
					};
					validateREGISTER(body);
				}
			}
		} else if (name === "c_druglicense_no1") {
			if (value.length < 13) {
				setErrors({ ...errors, [name]: true });
			}
		}
	};
	const handleClose = () => {
		setValidationPopup(!openValidate);
	};
	useEffect(() => {
		if (validateREGISTERResult.message !== "") {
			setValidationPopup(true);
		//   setInputs({
		//     c_mobile_number: "",
		//   });
		}
	}, [validateREGISTERResult.statuscode === 2]);

	const handleSubmit = ()=>{
		setRespModalOpen(true);

		// handleClose(true);

		const emailBody={
			"to": {
					"c_to": [
							"liveorder@c2info.com"
					],
					"c_to_cc": [],
					"c_to_bcc": []
			},
			"c_subject": "Live Order - Register A Seller (On Boarding)",
			"c_content": `
			<h1>A New Reference To Register A Seller Has Been Generated By ${getProfileInfoResult.payload.c_name} With The Below Information</h1>
			
			Seller Name: <b>${inputs.c_name}</b><br>
			Drug License Number: <b>${inputs.c_druglicense_no1}</b><br>
			GSTIN No: <b>${inputs.c_gst_no}</b><br>
			Phone : <b>${inputs.c_mobile_number}</b><br>
			State: <b>${inputs.c_state_name}</b><br>
			City: <b>${inputs.c_city_name}</b><br>
			Description : <b>${inputs.c_description}</b><br><br>
			<h4>The Reference To Register A New Seller Has Been Generated By Buyer With The Following Information.</h4><br><br>

			Store Name: <b>${getProfileInfoResult.payload.c_name}</b><br>
			Owner Name: <b>${getProfileInfoResult.payload.c_firm_contact_person}</b><br>
			Email ID: <b>${getProfileInfoResult.payload.c_email}</b><br>
			Phone : <b>${getProfileInfoResult.payload.c_mobile_no}</b><br>
			City: <b>${getProfileInfoResult.payload.c_state_name}</b><br><br>
			<h4>Kindly Get In Touch With The Seller To Add Him In C-Square EcoSystem.</h4><br><br>
			`,
			"attachMents": []
	}
		
		ScheduleDemoEmailAction(emailBody);


		






	}
	
	const handleCloseRespModal = () => {
		setRespModalOpen(false);
		handleClose();
		setInputs({
		c_city_name: "",
		c_mobile_number: "",
		c_state_name: "",
		c_gst_no: "",
		c_druglicense_no1: "",
		c_name: "",
		c_description: "I am Interested to Register a new seller",
		})	
	};
	return (
		<div className="row-mr-rl-16">
			<div className="ml-16 register-seller-heading">Register A New Seller</div>
			<form className="newsellerprofile">
				<div className="ml-16">
					<h4 className="profile-subtitle">Give the details given below</h4>
				</div>
				<Grid container spacing={0}>
					<Grid item xs={3}>
						<div className="ml-16 mr-b-20">
							<TextField
								name="c_name"
								value={inputs.c_name}
								onChange={(e) => handleInputChange(e)}
								onBlur={(e) => handleBlur(e)}
								error={errors.c_name}
								helperText={errors.c_name && "Not a valid Store"}
								autoComplete="new-password"
								margin="normal"
								variant="outlined"
								placeholder="Seller/firm Name"
								className="auth-input"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<img src={Shop} alt="store" />
										</InputAdornment>
									),
								}}
							/>
						</div>
					</Grid>
					<Grid item xs={3}>
						<div className="ml-16 mr-b-20">
							<TextField
								name="c_druglicense_no1"
								value={inputs.c_druglicense_no1}
								onChange={(e) => handleInputChange(e)}
								onBlur={(e) => handleBlur(e)}
								error={errors.c_druglicense_no1}
								helperText={
									errors.c_druglicense_no1 && "Not a valid drug licence no."
								}
								autoComplete="new-password"
								margin="normal"
								variant="outlined"
								placeholder="Drug Licence Number"
								className="auth-input"
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
					<Grid item xs={3}>
						<div className="ml-16 mr-b-20">
							<TextField
								name="c_gst_no"
								value={inputs.c_gst_no.toUpperCase()}
								onChange={(e) => handleInputChange(e)}
								onBlur={(e) => handleBlur(e)}
								error={errors.c_gst_no}
								helperText={errors.c_gst_no && "Not a valid GSTIN number"}
								autoComplete="new-password"
								margin="normal"
								variant="outlined"
								placeholder="GSTIN Number"
								className="auth-input"
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
					<Grid item xs={3}>
						<div className="ml-16 mr-b-20">
							<TextField
								name="c_mobile_number"
								value={inputs.c_mobile_number}
								onChange={(e) => handleInputChange(e)}
								onBlur={(e) => handleBlur(e)}
								error={errors.c_mobile_number}
								helperText={errors.c_mobile_number && "Not a valid mobile number"}
								autoComplete="new-password"
								margin="normal"
								type="number"
								variant="outlined"
								placeholder="Mobile Number"
								className="auth-input"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<img src={Phone} alt="Phone" />
										</InputAdornment>
									),
								}}
							/>
						</div>
					</Grid>
				</Grid>
				<Grid container spacing={0}>
					<Grid item xs={3}>
						<div className="ml-16">
							<TextField
								name="c_state_name"
								value={inputs.c_state_name}
								onChange={(e) => handleInputChange(e)}
								onBlur={(e) => handleBlur(e)}
								error={errors.c_state_name}
								helperText={errors.c_state_name && "Not a valid state"}
								autoComplete="new-password"
								margin="normal"
								variant="outlined"
								placeholder="State"
								className="auth-input"
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
					<Grid item xs={3}>
						<div className="ml-16">
							<TextField
								name="c_city_name"
								value={inputs.c_city_name}
								onChange={(e) => handleInputChange(e)}
								onBlur={(e) => handleBlur(e)}
								error={errors.c_city_name}
								helperText={errors.c_city_name && "Not a valid city"}
								autoComplete="new-password"
								margin="normal"
								variant="outlined"
								placeholder="City"
								className="auth-input"
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
				</Grid>
				<div className="ml-16">
					<Grid container spacing={0}>
						<Grid item xs={6}>
							<h4 className="description-title">
								Description
								<span className="mandateSign"> *</span>
							</h4>
						</Grid>
						<Grid item xs={6}>
							<h4 className="description-title text-right ">
								Max{" "}
								<span className="clr-aquamarine">
									{1000 - inputs.c_description.length}
								</span>{" "}
								character
							</h4>
						</Grid>
					</Grid>
				</div>
				<Grid container spacing={0}>
					<Grid item xs={12}>
						<div className="ml-16 mr-b-32">
							<TextField
								name="c_description"
								multiline
								rows={2}
								rowsMax={4}
								value={inputs.c_description}
								onChange={(e) => handleInputChange(e)}
								onBlur={(e) => handleBlur(e)}
								error={errors.c_description}
								helperText={errors.c_description && "Not a valid description"}
								autoComplete="new-password"
								margin="normal"
								variant="outlined"
								placeholder="I am Interested to Register a new seller"
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
				</Grid>
				<div className="ml-16 pd-b-24">
					<Button
						variant="contained"
						color="primary"
						className="feedback-send-btn"
						component="span"
						disabled={
							inputs.c_name === "" || errors.c_name === true ||
							inputs.c_mobile_number === "" || errors.c_mobile_number === true ||
							inputs.c_state_name === "" || errors.c_state_name === true ||
							inputs.c_city_name === "" || errors.c_city_name === true ||
							inputs.c_gst_no === "" || errors.c_gst_no === true ||
							inputs.c_druglicense_no1 === "" || errors.c_druglicense_no1 === true ||
							inputs.c_description === "" || errors.c_description === true 
						
						}
						
						onClick={handleSubmit}
						// disabled={addBranchResult.loading}
					>
						{/* {addBranchResult.loading ? <CircularProgress className="spining-icon" /> : null}{" "} */}
						SEND
					</Button>
				</div>
			</form>
			{/* <ValidationPopup
				open={openValidate}
				textField="Mobile Number"
				handleClose={handleClose}
			/> */}
			<RegisterSellerModal 
			sellerName={inputs.c_name}
			respModalOpen={respModalOpen}
			handleCloseRespModal={handleCloseRespModal}
			/>
		</div>
	);
};

export default RegisterSeller;
		
		