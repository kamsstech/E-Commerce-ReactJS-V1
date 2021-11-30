import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";

import Shop from "../../../../assets/images/icons/shop.svg";
import User from "../../../../assets/images/icons/user.svg";
import Phone from "../../../../assets/images/icons/smartphone.svg";
import Email from "../../../../assets/images/email.svg";
import TAN_PAN from "../../../../assets/images/icons/pan-tan.svg";
import Narcotic from "../../../../assets/images/icons/narcotic-number.svg";
import RentAgreement from "../../../../assets/images/icons/rent-agreement.svg";
import PartnershipDeed from "../../../../assets/images/icons/partnership-deed.svg";
import AuthorityLetter from "../../../../assets/images/icons/authority-letter.svg";
import Zipcode from "../../../../assets/images/icons/zip-code.svg";
import State from "../../../../assets/images/icons/state.svg";
import City from "../../../../assets/images/icons/city.svg";
import Area from "../../../../assets/images/icons/area.svg";
import Landmark from "../../../../assets/images/landmark.svg";
import Address from "../../../../assets/images/address.svg";


import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import StepConnector from "@material-ui/core/StepConnector";
import { Grid, InputAdornment, TextField } from "@material-ui/core";
import FirstAidKit from "../../../../assets/images/first-aid-kit.svg";
import Camera from "../../../../assets/images/camera.svg";
import ImageView from "./ImageView";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Calendar from "../../../../assets/images/calendar.svg";
import Gst from "../../../../assets/images/gst.svg";
import Tax from "../../../../assets/images/tax.svg";
import Drug from "../../../../assets/images/drug.svg";
import PlusPurple from "../../../../assets/images/plus-purple.svg";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Slider from "@material-ui/core/Slider";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
// import "./css/ProfileStyles.css";
// import styles from './css/ProfileStyles.css'
import {
	MenuItem,
} from "@material-ui/core";

const PrettoSlider = withStyles({
	root: {
		color: "#674cf3",
		height: 8,
		width: "12em",
		marginLeft: 10,
	},
	thumb: {
		height: 22,
		width: 22,
		backgroundColor: "#fff",
		border: "2px solid currentColor",
		marginTop: -4,
		marginLeft: -8,
		"&:focus,&:hover,&$active": {
			boxShadow: "inherit",
		},
	},
	active: {},
	valueLabel: {
		// left: 'calc(-50% + 4px)',
	},
	track: {
		height: 16,
		borderRadius: 8,
	},
	rail: {
		height: 16,
		borderRadius: 8,
	},
})(Slider);

const useQontoStepIconStyles = makeStyles({
	root: {
		color: "#eaeaf0",
		display: "flex",
		height: 22,
		alignItems: "center",
	},
	active: {
		color: "#784af4",
	},
	circle: {
		width: 8,
		height: 8,
		borderRadius: "50%",
		backgroundColor: "currentColor",
	},
	completed: {
		color: "#784af4",
		zIndex: 1,
		fontSize: 18,
	},
});

function QontoStepIcon(props) {
	const classes = useQontoStepIconStyles();
	const { active, completed } = props;

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
			})}
		>
			{completed ? (
				<Check className={classes.completed} />
			) : (
				<div className={classes.circle} />
			)}
		</div>
	);
}

QontoStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 */
	active: PropTypes.bool,
	/**
	 * Mark the step as completed. Is passed to child components.
	 */
	completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
	alternativeLabel: {
		top: 22,
	},
	active: {
		"& $line": {
			backgroundColor: "#00d3b4",
		},
	},
	completed: {
		"& $line": {
			backgroundColor: "#00d3b4",
		},
	},
	line: {
		height: 3,
		border: 0,
		backgroundColor: "#eaeaf0",
		borderRadius: 1,
	},
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
	root: {
		zIndex: 1,
		color: "#00d3b4",
		width: 50,
		height: 50,
		display: "flex",
		borderRadius: "50%",
		justifyContent: "center",
		alignItems: "center",
	},
	active: {
		backgroundColor: "#fff",
	},
	completed: {
		backgroundColor: "#fff",
	},
});

function ColorlibStepIcon(props) {
	const classes = useColorlibStepIconStyles();
	const { active, completed } = props;

	const icons = {
		1: <RadioButtonCheckedIcon />,
		2: <RadioButtonCheckedIcon />,
		3: <RadioButtonCheckedIcon />,
	};

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
				[classes.completed]: completed,
			})}
		>
			{icons[String(props.icon)]}
		</div>
	);
}

ColorlibStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 */
	active: PropTypes.bool,
	/**
	 * Mark the step as completed. Is passed to child components.
	 */
	completed: PropTypes.bool,
	/**
	 * The label displayed in the step icon.
	 */
	icon: PropTypes.node,
};


const AddBannerForm = (props) => {
	const {
		AddBannerAction,
		imageupload
	} = props;
	const [errMsg, setErrMsg] = useState("");

	const [openModal, setOpenModal] = React.useState(false);
	const [imgSizeMsg, setimgSizeMsg] = React.useState(true);
	const [imgSize, setimgSize] = React.useState("Image Size Should Be 1600 X 400");
	

	const [inputs, setInputs] = useState({
		n_banner_type: "",
		c_banner_title: "",
		c_banner_image: "",
		c_banner_description: "",
		c_redirect_url:"",
		c_start_date:"",
		c_end_date:""
	});


	const [errors, setErrors] = useState({
		n_banner_type: "",
		c_banner_title: "",
		c_banner_image: "",
		c_banner_description: "",
		c_redirect_url:"",
		c_start_date:"",
		c_end_date:""
	});
	const [roadBlock, setRoadBlock] = React.useState(false);
	const handleInputChange = (e) => {
		let { name, value } = e.target;
		setErrMsg("");
		setErrors({ ...errors, [name]: false });
		setInputs({ ...inputs, [name]: value });
		if(value === "1")
		{
			setimgSizeMsg(true)
			setRoadBlock(false)
			setimgSize("Image Size Should Be 1600 X 400")
		}
		else if(value === "2")
		{
			setimgSizeMsg(true);
			setRoadBlock(false)
			setimgSize("Image Size Should Be 1600 X 400")
		}
		else if(value === "3")
		{
			setimgSizeMsg(true);
			setRoadBlock(false)
			setimgSize("Image Size Should Be 1200 X 100")
		}
		else if(value === "4")
		{
			setimgSizeMsg(true);
			setRoadBlock(true)
			setimgSize("Image Size Should Be 1100 X 600")
		}
		};
		const handleFocus = (e) => {
		let { name } = e.target;
		setErrors({ ...errors, [name]: false });
		};
	
		const handleBlur = (e) => {
		let { name, value } = e.target;
		if (name === "n_banner_type") {
			if (value === "1") {
			setErrors({ ...errors, [name]: true });
			setimgSizeMsg(false)
			}
		}else if (name === "c_banner_title") {
			if (value.length <= 3) {
				setErrors({ ...errors, [name]: true });
			}
		}
		};

	const [openImgViewD1, setOpenImgViewD1] = useState(false);


	const clickHandleCancel = (event) => {
		if (event === "cancel_upload") {
			setInputs({ ...inputs, c_banner_image: "" });
		}
		};

	const [banner, setBaner] = useState(null);
	const [bannerData, setBannerData] = useState(null);

	const handleUpload = (event, url) => {
	const { name, id } = event.target;
	let filename = event.target.files[0].name;
	let idxDot = filename.lastIndexOf(".") + 1;
	let extFile = filename.substr(idxDot, filename.length).toLowerCase();
		if (event.target.files[0]) {
			if (extFile == "jpg" || extFile == "jpeg" || extFile == "png" || extFile == "svg" || extFile == "gif") {
				
				if (name === "c_banner_image") {
					setBaner(event.target.files[0]);
					setBannerData(URL.createObjectURL(event.target.files[0]));
					setInputs({ ...inputs, [`${name}_name`]: filename, [name]: filename });
					setErrors({ ...errors, c_banner_image: false });
					setimgSizeMsg(false)
				} else {
					setErrMsg("Please Select Valid Images");
				}
			} else{
				setErrMsg("Please Select Valid Images");
			}
		}
	};
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	function handleStartDate(date) {
		let selDate = "";
		let currDate = "";
		setErrors({ ...errors, c_start_date: false });
		if (date !== null) {
			let mon = parseInt(`${date.getMonth() + 1}`);
			let month = mon > 9 ? mon : "0" + mon;
			let dd = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
			selDate = `${date?.getFullYear()}-${month}-${dd}`;
			let currentDate = new Date();
			let s_month = parseInt(`${currentDate.getMonth() + 1}`);
			let ss_month = s_month > 9 ? s_month : "0" + s_month;
			let s_date =
				currentDate.getDate() > 9
					? currentDate.getDate()
					: "0" + currentDate.getDate();
			currDate = `${currentDate?.getFullYear()}-${ss_month}-${s_date}`;
			// console.log("date",currDate,)
			// if (currDate === selDate) {
			// 	alert("Please Select Start Date");
			// 	setStartDate(null);
			// } else {
				
			// }
			setInputs({ ...inputs, c_start_date: selDate });
			setStartDate(date);
		}
	}
	function handleEndDate(date) {
		let selDate = "";
		let currDate = "";
		setErrors({ ...errors, c_end_date: false });
		if (date !== null) {
			let mon = parseInt(`${date.getMonth() + 1}`);
			let month = mon > 9 ? mon : "0" + mon;
			let dd = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
			selDate = `${date?.getFullYear()}-${month}-${dd}`;
			let currentDate = new Date();
			let s_month = parseInt(`${currentDate.getMonth() + 1}`);
			let ss_month = s_month > 9 ? s_month : "0" + s_month;
			let s_date =
				currentDate.getDate() > 9
					? currentDate.getDate()
					: "0" + currentDate.getDate();
			currDate = `${currentDate?.getFullYear()}-${ss_month}-${s_date}`;
			// console.log("date",currDate,)
			setInputs({ ...inputs, c_end_date: selDate });
			setEndDate(date);
		}
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target)
		if (inputs.n_banner_type === "1" || errors.n_banner_type === true) {
			setErrors({ ...errors, n_banner_type: true });
		}
		else if (inputs.c_banner_title === "" || errors.c_banner_title === true) {
			setErrors({ ...errors, c_banner_title: true });
		}
		else if (inputs.c_banner_image === "" || errors.c_banner_image === true) {
			setErrors({ ...errors, c_banner_image: true });
		}
		const form = new FormData();
		  form.append("n_banner_type",inputs.n_banner_type)
		  form.append("c_banner_title",inputs.c_banner_title)
		  form.append("c_banner_image",e.target.c_banner_image.files[0])
		  form.append("c_banner_description",inputs.c_banner_description)
		  form.append("c_redirect_url",inputs.c_redirect_url)
		if (inputs.n_banner_type === "4")
		{
			form.append("c_start_date",inputs.c_start_date)
		  	form.append("c_end_date",inputs.c_end_date)	
		}
		// console.log(form)
		AddBannerAction(form);
	};
	return (
		<>
			<div>
				<ImageView
					open={openImgViewD1}
					handleClose={() => setOpenImgViewD1(false)}
					imgUrl={bannerData}
				/>
				<div className="">
					<Collapse in={openModal}>
						<Alert
							icon={false}
							action={
								<IconButton
									aria-label="close"
									color="inherit"
									size="small"
									onClick={() => {
										setOpenModal(false);
									}}
								>
									<CloseIcon fontSize="inherit" />
								</IconButton>
							}
						>
							{/*<span className="font-weight-bold">Note: </span>Profile
							Information Updated !!!*/}
						</Alert>
					</Collapse>
				</div>
				<div className="profile-title-sec ml-16">
					<h4 className="profile-title">Add Banner</h4>
				</div>

				<div>
					<form onSubmit={(e) => handleSubmit(e)} className="profile-details-sec" encType="multipart/form-data">
						<p className="login-error-msg min-height-none mb-10">
							{errMsg.toLowerCase()}
						</p>

						<Grid container spacing={0}>
							<Grid item xs={6}>
								<div className="ml-16">
									<TextField
										name="n_banner_type"
										autoComplete=""
										value={inputs.n_banner_type}
										onChange={(e) => handleInputChange(e)}
										onFocus={(e) => handleFocus(e)}
										onBlur={(e) => handleBlur(e)}
										error={errors.n_banner_type}
										helperText={errors.n_banner_type && "Select Valid Banner Type"}
										className="toCatp auth-input"
										placeholder="Banner Type *"
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<img src={Gst} alt="gst" />
												</InputAdornment>
											),
										}}
										margin="normal"
										variant="outlined"
										select
										// value={"Banner Type"}
									>
										<MenuItem key={"0"} value={"1"}>
											Banner Type
										</MenuItem>
										<MenuItem key={"1"} value={"2"}>
											Home Banner
										</MenuItem>
										<MenuItem key={"2"} value={"3"}>
											Product Banner
										</MenuItem>
										<MenuItem key={"3"} value={"4"}>
											Road Block Banner
										</MenuItem>
									</TextField>
								</div>
							</Grid>

							<Grid item xs={6}>
								<div className="ml-16">
									<TextField
										name="c_banner_title"
										value={inputs.c_banner_title}
										onChange={(e) => handleInputChange(e)}
										onFocus={(e) => handleFocus(e)}
										onBlur={(e) => handleBlur(e)}
										error={errors.c_banner_title}
										helperText={errors.c_banner_title && "Not a valid title"}
										margin="normal"
										variant="outlined"
										placeholder="Banner Title"
										className="auth-input"
										autoComplete=""
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<img src={Shop} alt="user" />
												</InputAdornment>
											),
										}}
									/>
								</div>
							</Grid>
							<Grid item xs={12}>
								<div className="pd-l-16">
									<TextField
										name="c_banner_description"
										multiline
										rows={1}
										rowsMax={4}
										margin="normal"
										variant="outlined"
										placeholder="Description"
										className="auth-input kmass_desc"
									/>
								</div>

							</Grid>
							<Grid item xs={6}>
								<div className="ml-16">
									<TextField
										name="c_banner_image1"
										value={inputs.c_banner_image}
										onChange={(e) => handleInputChange(e)}
										onBlur={(e) => handleBlur(e)}
										error={errors.c_banner_image}
										helperText={errors.c_banner_image ? "Not a valid image to upload":imgSizeMsg === true ? imgSize:"" }
										autoComplete="new-password"
										margin="normal"
										variant="outlined"
										placeholder="Banner image *"
										className="auth-input"
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<img src={FirstAidKit} alt="mobile-phone" />
												</InputAdornment>
											),
											endAdornment: (
												<InputAdornment position="end">
													<img src={Camera} alt="Camera" />
													<input
														type="file"
														name="c_banner_image"
														id="c_banner_image"
														accept="image/jpeg, image/png, image/jpg, image/webp"
														onChange={(e) => handleUpload(e, "dl1")}
														multiple={false}
													/>
												</InputAdornment>
											),
										}}
									/>
									{inputs.c_banner_image&& (
										<div className="display-flex">
											<h4
												className="profile-upload uploaded-imagename"
												onClick={() => setOpenImgViewD1(true)}
											>
												<span>{inputs.c_banner_image}</span>
											</h4>
											<h4
												className="profile-upload uploaded-imagename float-right"
												onClick={() => clickHandleCancel("cancel_upload")}
											>
												<span>x</span>
											</h4>
										</div>
									)}
								</div>
							</Grid>
							<Grid item xs={6}>
								<div className="ml-16">
									<TextField
										name="c_redirect_url"
										value={inputs.c_redirect_url}
										onChange={(e) => handleInputChange(e)}
										onFocus={(e) => handleFocus(e)}
										onBlur={(e) => handleBlur(e)}
										error={errors.c_redirect_url}
										helperText={errors.c_redirect_url && "Not a valid title"}
										margin="normal"
										variant="outlined"
										placeholder="Banner Redirect Url"
										className="auth-input"
										autoComplete=""
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<img src={Shop} alt="user" />
												</InputAdornment>
											),
										}}
									/>
								</div>
							</Grid>
							{ roadBlock ==true ?(
							<Grid item xs={12}>
								<Grid item xs={6}>
									<div className="ml-16">
										<MuiPickersUtilsProvider utils={DateFnsUtils}>
											<DatePicker
												name="c_start_date"
												value={inputs.c_start_date}
												onChange={handleStartDate}
												error={errors.c_start_date}
												className="auth-input"
												inputVariant="outlined"
												margin="normal"
												format="dd/MM/yyyy"
												placeholder="Start Date *"
												minDate={new Date()}
												InputProps={{
													startAdornment: (
														<InputAdornment position="start">
															<img src={Calendar} alt="user-img" />
														</InputAdornment>
													),
												}}
											/>
										</MuiPickersUtilsProvider>
									</div>
								</Grid>
								<Grid item xs={6}>
									<div className="ml-16">
										<MuiPickersUtilsProvider utils={DateFnsUtils}>
											<DatePicker
												name="c_end_date"
												value={inputs.c_end_date}
												onChange={handleEndDate}
												error={errors.c_end_date}
												className="auth-input"
												inputVariant="outlined"
												margin="normal"
												format="dd/MM/yyyy"
												placeholder="Start Date *"
												minDate={new Date()}
												InputProps={{
													startAdornment: (
														<InputAdornment position="start">
															<img src={Calendar} alt="user-img" />
														</InputAdornment>
													),
												}}
											/>
										</MuiPickersUtilsProvider>
									</div>
								</Grid>
							</Grid>
							):""
							}
							
							
							<Grid item xs={12}>
								<div className="pd-l-16">
									<Button variant="contained" type="submit" className="yes" color="primary">Submit</Button>
								</div>

							</Grid>
						</Grid>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddBannerForm;