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

const AddCategoryForm = (props) => {
	const {
		AddCategoryAction,
		addCategoryResult
	} = props;
	const [errMsg, setErrMsg] = useState("");

	const [openModal, setOpenModal] = React.useState(false);
	const [openModal1, setOpenModal1] = React.useState(false);

	const [inputs, setInputs] = useState({
		c_category_type: "0",
		c_category_name: "",
		c_category_image: "",
		// c_category_banner: "",
		c_category_description: "",
	});


	const [errors, setErrors] = useState({
		c_category_type: "",
		c_category_name: "",
		c_category_image: "",
		// c_category_banner: "",
		c_category_description: "",
	});

	const handleInputChange = (e) => {
		let { name, value } = e.target;

		setErrMsg("");
		setErrors({ ...errors, [name]: false });
		setInputs({ ...inputs, [name]: value });
	};
	const handleFocus = (e) => {
		let { name } = e.target;
		setErrors({ ...errors, [name]: false });
	};

	const handleBlur = (e) => {
		let { name, value } = e.target;

		// if (name === "c_category_type") {
		// 	if (value === "Banner Type *") {
		// 	setErrors({ ...errors, [name]: true });
		// 	}
		// }else 
		if (name === "c_category_name") {
			if (value.length <= 3) {
				setErrors({ ...errors, [name]: true });
			}
		}
	};

	const [openImgViewD1, setOpenImgViewD1] = useState(false);
	// const [openImgViewD2, setOpenImgViewD2] = useState(false);

	const clickHandleCancel = (event) => {
		if (event === "cancel_upload") {
			setInputs({ ...inputs, c_category_image: "" });
		}//else if (event === "cancel_upload_1") {
		// 	setInputs({ ...inputs, c_category_banner: "" });
		// }
	};

	const [category, setCategory] = useState(null);
	const [categoryData, setCategoryData] = useState(null);
	// const [categorybanner, setCategorybanner] = useState(null);
	// const [categorybanerData, setCategorybannerData] = useState(null);
	const handleUpload = (event, url) => {
		const { name, id } = event.target;
		let filename = event.target.files[0].name;
		let idxDot = filename.lastIndexOf(".") + 1;
		let extFile = filename.substr(idxDot, filename.length).toLowerCase();
		if (event.target.files[0]) {
			if (extFile == "jpg" || extFile == "jpeg" || extFile == "png" || extFile == "svg" || extFile == "gif") {

				if (name === "c_category_image") {
					setCategory(event.target.files[0]);
					setCategoryData(URL.createObjectURL(event.target.files[0]));
					setInputs({ ...inputs, [`${name}_name`]: filename, [name]: filename });
					setErrors({ ...errors, c_category_image: false });
				} else {
					setErrMsg("Please Select Valid Images");
				}//else if (name === "c_category_banner") {
				// 	setCategorybanner(event.target.files[0]);
				// 	setCategorybannerData(URL.createObjectURL(event.target.files[0]));
				// 	setInputs({ ...inputs, [`${name}_name`]: filename, [name]: filename });
				// }
			} else {
				setErrMsg("Please Select Valid Images");
			}
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputs.c_category_name === "" || errors.c_category_name === true) {
			setErrors({ ...errors, c_category_name: true });
		} else if (inputs.c_category_image === "" || errors.c_category_image === true) {
			setErrors({ ...errors, c_category_image: true });
		} else if (inputs.c_category_description === "" || errors.c_category_description === true) {
			setErrors({ ...errors, c_category_description: true });
		}else{
			const form = new FormData();
			form.append("c_category_type", inputs.c_category_type)
			form.append("c_category_name", inputs.c_category_name)
			form.append("c_category_image", e.target.c_category_image.files[0])
			form.append("c_category_description", inputs.c_category_description)
			AddCategoryAction(form);
		}
	};
	const [categoryResult, setCategoryResult] = useState({
		status_code: "",
	});
	useEffect(() => {
		if (addCategoryResult) {
			setCategoryResult({ ...categoryResult, status_code: addCategoryResult.statuscode });
		}
	}, [addCategoryResult]);
	useEffect(() => {
		if (categoryResult.status_code === 1) {
			inputs.c_category_type = "",
				inputs.c_category_name = "",
				inputs.c_category_image = "",
				inputs.c_category_description = ""
		} else if (categoryResult.status_code != 1) {
			setErrMsg(addCategoryResult.error)
		}
	})
	return (
		<>
			<Collapse in={openModal1}>
				<Alert
					severity={"error"}
					icon={false}
					action={
						<IconButton
							aria-label="close"
							size="small"
							onClick={() => {
								setOpenModal1(false);
							}}
						>
							<CloseIcon fontSize="inherit" />
						</IconButton>
					}
				></Alert>
			</Collapse>

			<div>
				<ImageView
					open={openImgViewD1}
					handleClose={() => setOpenImgViewD1(false)}
					imgUrl={categoryData}
				/>
				{/* <ImageView
					open={openImgViewD2}
					handleClose={() => setOpenImgViewD2(false)}
					imgUrl={categorybanerData}
				/> */}
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
							<span className="font-weight-bold">Note: </span>Profile
							Information Updated !!!
						</Alert>
					</Collapse>
				</div>
				<div className="profile-title-sec ml-16">
					<h4 className="profile-title">Add Category</h4>
				</div>

				{categoryResult.status_code === 1 &&
					<div className="notFound">
						<Alert severity="success"> <span className="font-weight-bold">Category added..!!!</span></Alert>
					</div>
				}

				<div>
					<form onSubmit={(e) => handleSubmit(e)} className="profile-details-sec" encType="multipart/form-data">
						<p className="login-error-msg min-height-none mb-10">
							{errMsg.toLowerCase()}
						</p>

						<Grid container spacing={0}>
							<Grid item xs={6}>
								<div className="ml-16">
									<TextField
										name="c_category_name"
										value={inputs.c_category_name}
										onChange={(e) => handleInputChange(e)}
										onFocus={(e) => handleFocus(e)}
										onBlur={(e) => handleBlur(e)}
										error={errors.c_category_name}
										helperText={errors.c_category_name && "Not a valid title"}
										margin="normal"
										variant="outlined"
										placeholder="Category Name"
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
							<Grid item xs={6}>
								<div className="ml-16">
									<TextField
										name="c_category_type"
										autoComplete=""
										value={inputs.c_category_type}
										onChange={(e) => handleInputChange(e)}
										onFocus={(e) => handleFocus(e)}
										onBlur={(e) => handleBlur(e)}
										error={errors.c_category_type}
										helperText={errors.c_category_type && "Select Valid Banner Type"}
										className="toCatp auth-input"
										placeholder="Choose Main Category *"
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
										<MenuItem key={"0"} value={"0"}>
											Choose Main Category
										</MenuItem>
										<MenuItem key={"1"} value={"1"}>
											Home Banner
										</MenuItem>
										<MenuItem key={"2"} value={"2"}>
											Product Banner
										</MenuItem>
									</TextField>
								</div>
							</Grid>
							<Grid item xs={6}>
								<div className="ml-16">
									<TextField
										name="c_category_img"
										value={inputs.c_category_image}
										onChange={(e) => handleInputChange(e)}
										onBlur={(e) => handleBlur(e)}
										error={errors.c_category_image}
										helperText={errors.c_category_image && "Not a valid image to upload"}
										autoComplete="new-password"
										margin="normal"
										variant="outlined"
										placeholder="Category image *"
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
														name="c_category_image"
														id="c_category_image"
														accept="image/jpeg, image/png, image/jpg, image/webp"
														onChange={(e) => handleUpload(e, "dl1")}
														multiple={false}
													/>
												</InputAdornment>
											),
										}}
									/>
									{inputs.c_category_image && (
										<div className="display-flex">
											<h4
												className="profile-upload uploaded-imagename"
												onClick={() => setOpenImgViewD1(true)}
											>
												<span>{inputs.c_category_image}</span>
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

							<Grid item xs={12}>
								<div className="pd-l-16">
									<TextField
										name="c_category_description"
										value={inputs.c_category_description}
										onChange={(e) => handleInputChange(e)}
										onFocus={(e) => handleFocus(e)}
										onBlur={(e) => handleBlur(e)}
										multiline
										rows={1}
										rowsMax={4}
										margin="normal"
										variant="outlined"
										placeholder="Description"
										className="auth-input kmass_desc"
									/>
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

export default AddCategoryForm;