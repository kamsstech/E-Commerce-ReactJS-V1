// "salesenquiries@csquare.in"
import * as React from "react";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import CrossImg from "../../../assets/images/cross-grey.svg";

import SuccessImg from "../../../assets/images/icons/payment-success.svg";
import Shop from "../../../assets/images/icons/shop.svg";
import User from "../../../assets/images/icons/user.svg";
import Phone from "../../../assets/images/icons/smartphone.svg";
import ZipCode from "../../../assets/images/icons/zip-code.svg";

// import DemoHeader from "../../../assets/images/ask-for-demo.svg";
// import DemoHeader from "../../../assets/images/bg_of_demo.png";
import DemoHeader from "../../../assets/images/bgOfdemoc2@3x.png";

import { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";

import {
	makeStyles,
	MenuItem,
	CircularProgress,
	Tooltip,
	Zoom,
} from "@material-ui/core";


const ScheduleDemoForm = (props) => {
	const {
		open,
		handleClose,
		demoFor,
		productValue,
		submitDemoRequestAction,
		demoRequestResult,
		ScheduleDemoEmailAction,
		scheduleDemoEmailResult
	} = props;
	

	const [optValue, setOptValue] = useState("" + productValue);
	const [successMsg, setSuccessMsg] = useState("");

	const [respModalOpen, setRespModalOpen] = useState(false);

	const [errMsg, setErrMsg] = useState("");
	const [extCustomer, setExtCustomer] = useState("");
	

	useEffect(() => {
		setOptValue(productValue);
		setSuccessMsg("");
		setErrMsg("");
		setInputs({ ...inputs, c_product_name: productValue });
	}, [productValue]);

	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		

	const [inputs, setInputs] = useState({
		c_name: "",
		c_pincode: "",
		c_mobile_no: "",
		c_firm_name: "",
		c_product_name: "",
		c_description: "Yes, I am interested in demo.",
	});
	
	const [checkList, setCheckList] = useState({
		Y: true,
		N: false
	})
	const handleSelect = (event) => {
		setOptValue(event.target.value);
		setInputs({ ...inputs, c_product_name: event.target.value });
	};


	const [errors, setErrors] = useState({
		c_name: false,
		c_mobile_no: false,
		c_firm_name: false,
		c_pincode: false,
		c_product_name: false,
		c_description: false,
	});

	const handleChange = (e) => {
		let { name, value } = e.target;

		setErrMsg("");
		setErrors({ ...errors, [name]: false });
		switch (name) {
			case "c_name":
				if (value.length > 256) {
					value = value.slice(0, 256);
				} else {
					setInputs({ ...inputs, [name]: value });
				}
				break;
				case "c_firm_name":
					if (value.length > 256) {
						value = value.slice(0, 256);
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
				case "c_pincode":
				if (value.length > 6) {
					value = value.slice(0, 6);
				} else {
					setInputs({ ...inputs, [name]: value });
				}
				break;
			case "c_description":
				if (value.length > 500) {
					value = value.slice(0, 500);
				} else {
					setInputs({ ...inputs, [name]: value });
				}

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
			case "c_pincode":
				if (value.length <= 6) {
					if (!/^[1-9]\d{5}$/.test(value)) {
						setErrors({ ...errors, [name]: true });
					}
				}
				
				break;
			case "c_mobile_no":
				if (value.length <= 10) {
					if (!/^[6-9]\d{9}$/.test(value)) {
						setErrors({ ...errors, [name]: true });
					}
					
				}
				break;
			case "c_firm_name":
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
				// if (value !== "" && !re.test(String(value).toLowerCase())) {
				//   setErrors({ ...errors, [name]: true });
				// }
				break;
			default:
				setInputs({ ...inputs, [name]: value });
				break;
		}
	};

	const handleSearchChange = (event, value, name) => {
		setErrors({ ...errors, [name]: false });
		setInputs({ ...inputs, [name]: value });
	};

	const handleSearchOnChange = (event, value, name) => {
		if (value !== null) {
			setInputs({ ...inputs, [name]: value.c_code });
		} else {
			setInputs({ ...inputs, [name]: "" });
		}
	};

	const handleSubmit = async (e) => {
		if (inputs.c_name === "" || errors.c_name === true) {
			setErrors({ ...errors, c_name: true });
		} else if (inputs.c_mobile_no === "" || errors.c_mobile_no === true) {
			setErrors({ ...errors, c_mobile_no: true });
		} else if (inputs.c_firm_name === "" || errors.c_firm_name) {
			setErrors({ ...errors, c_firm_name: true });
		} else if (inputs.c_pincode === "" || errors.c_pincode) {
			setErrors({ ...errors, c_pincode: true });
		} else if (inputs.c_product_name === "" || errors.c_product_name) {
			setErrors({ ...errors, c_product_name: true });
		} else if (inputs.c_description === "" || errors.c_description) {
			setErrors({ ...errors, c_description: true });
		} else {
			
			const body={
				c_store_name:inputs.c_name,
				c_owner_name:inputs.c_firm_name,
				c_mobile_no:inputs.c_mobile_no,
				c_pincode:inputs.c_pincode,
				c_description:inputs.c_description,
				// c_existing_customer:checkList.Y,
				c_product:productValue,
			}
			if(checkList.N == true)
			{
					body['c_existing_customer']="Y";
			}else {
				 body['c_existing_customer']="N";
			}

			

			const emailBody={
				"to": {
						"c_to": [
								"salesenquiries@csquare.in"
						],
						"c_to_cc": [],
						"c_to_bcc": []
				},
				"c_subject": "C-Square - Demo Request",
				"c_content": `
				<h1>New Enquiry from Liveorder</h1>
				<h5>You have received an enquiry from ${inputs.c_firm_name}, with the following information</h5>
				Store: <b>${inputs.c_name}</b><br>
				Owner: <b>${inputs.c_firm_name}</b><br>
				Phone: <b>${inputs.c_mobile_no}</b><br>
				Pincode: <b>${inputs.c_pincode}</b><br>
				Product Interested: <b>${demoFor}</b><br><br>
				Description: <b>${inputs.c_description}</b>`,
				"attachMents": []
		}


		ScheduleDemoEmailAction(emailBody);
		submitDemoRequestAction(body);


			setInputs({
				c_name: "",
			c_pincode: "",
			c_mobile_no: "",
			c_firm_name: "",
			c_product_name: "",
			c_description: "Yes, I am interested in demo.",
			})
		}
	};
	const handleCheckbox = (name) => (event) => {
		setCheckList({
			...checkList,
			[name]: event.target.checked
		})
		setExtCustomer(name)
		
	}
	const handleCloseRespModal = () => {
		setRespModalOpen(false);
		handleClose();
	};

	useEffect(() => {
		
		if (demoRequestResult.error !== "") {
			setSuccessMsg("");
			setErrMsg(demoRequestResult.error);
			setRespModalOpen(true);
		}
		if (demoRequestResult.statuscode === 0) {
			// setSuccessMsg("Your Request for product demo is accepted, soon you will be contacted!");
			setSuccessMsg(
				demoRequestResult.message
			);
			setRespModalOpen(true);
			setErrMsg("");
		}
	}, [demoRequestResult]);


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
								Thank you for showing interest in <span>“{demoFor}”</span>{" "}
							</p>
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
											onChange={(e) => handleChange(e)}
											onBlur={(e) => handleBlur(e)}
											helperText={errors.c_name && "Not a valid name"}
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
											name="c_firm_name"
											margin="normal"
											variant="outlined"
											placeholder="Owner Name *"
											className="auth-input"
											value={inputs.c_firm_name}
											error={errors.c_firm_name}
											onChange={(e) => handleChange(e)}
											onBlur={(e) => handleBlur(e)}
											helperText={errors.c_firm_name && "Not a owner name"}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<img src={User} alt="Owner" />
													</InputAdornment>
												),
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
											onChange={(e) => handleChange(e)}
											onBlur={(e) => handleBlur(e)}
											helperText={errors.c_mobile_no && "Not a valid number"}
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
											helperText={
												errors.c_pincode && "Not a valid pincode"
											}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<img src={ZipCode} alt="ZipCode" />
													</InputAdornment>
												),
											}}
										/>
									</div>
								</Grid>

								<Grid item xs={6}>
									<h4 className="description-title">
										Description
										<span className="mandateSign"> *</span>
									</h4>
								</Grid>
								<Grid item xs={6}>
									<div className="mr-16">
										<h4 className="description-title text-right ">
											Max{" "}
											<span className="clr-aquamarine">
												{500 - inputs.c_description.length}
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
										/>
									</div>
								</Grid>
								<Grid item xs={12}>
									<div className="mr-16 text-left">
										<h6>
											<Checkbox
												className="pd-l-32 itemMapCheckbox"
												color="primary"
												checked={checkList.N}
												onChange={handleCheckbox("N")}
											/>{" "}
											Are you a existing Customer
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
											onClick={(e)=>handleSubmit(e)}
											disabled={inputs.c_name === "" || inputs.c_pincode === "" || inputs.c_firm_name === "" ||(inputs.c_pincode.length !== 6) || inputs.c_description === ""}
										>
											{demoRequestResult && demoRequestResult.loading ? (
												<CircularProgress className="spining-icon" />
											) : null}{" "}
											Schedule Demo
										</Button>
									</div>
								</Grid>

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
					timeout: 500,
				}}
			>
				<Fade in={respModalOpen}>
					<div className="demoresult-popup-sec demoresult-success p-0">
						<div className="exclamation text-center">
							<img src={SuccessImg} alt="SuccessImg" className="exclamationImg" />
						</div>
						<h1 class="text-center">Successful!</h1>

						<div className="demoresultpopup-titlesec text-center">
							<p className="width-100">Thank you for expressing your interest in <strong>LIVE ORDER</strong><br/>Team C-Square will get in touch with you Shortly.</p>
							{/*{
								successMsg !== "" ? (
									<p className="successMessage">{successMsg}</p>
								) : (
									<p className="errorMessage">{errMsg}</p>
								)
							}*/}
						</div>
						<div className="text-center">
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
