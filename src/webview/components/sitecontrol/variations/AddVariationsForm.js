import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import Autocomplete from "@material-ui/lab/Autocomplete";

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


const AddVariationsForm = (props) => {
	const {
		addVariationsPageResult,AddVariationsPageAction
	} = props;
	const [errMsg, setErrMsg] = useState("");

	const [openModal, setOpenModal] = React.useState(false);
	const [openModal1, setOpenModal1] = React.useState(false);
	const variation_type = [];
	const [valueType, setValueType] = React.useState(variation_type);
	const [inputs, setInputs] = useState({
		c_variation_type: "",
		c_variation_name: "",
		c_variation_description: "",
	});


	const [errors, setErrors] = useState({
		c_variation_type: "",
		c_variation_name: "",
		c_variation_description: "",
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
	
		if (name === "c_variation_type") {
			if (value == '') {
			setErrors({ ...errors, [name]: true });
			}
		}else if (name === "c_variation_name") {
			if (value.length <= 3) {
				setErrors({ ...errors, [name]: true });
			}
		}
		};

	const handleKeyDown = event => {
		 setErrors({ ...errors, c_variation_type: false });
	    switch (event.key) {
	      case ",":
	      case " ": {
	        event.preventDefault();
	        event.stopPropagation();
	        if (event.target.value.length > 0) {
	          setValueType([...valueType, event.target.value]);
	          
	        }
	        break;
	      }
	      default:
	    }
	};

	const handleSubmit = (e) => {
		if (inputs.c_variation_name === "" || errors.c_variation_name === true) {
			setErrors({ ...errors, c_variation_name: true });
		}
		else if (valueType.length === 0) {
			setErrors({ ...errors, c_variation_type: true });
		}
		const arrayVal=[]
		if(valueType.length > 0)
		{
			for(let i=0;i<valueType.length;i++){
				let objVal={c_variation_name:inputs.c_variation_name,
							c_variation_type:valueType[i],
							c_variation_description:inputs.c_variation_description
					}

				arrayVal.push(objVal);
			}
		}
		if(arrayVal.length > 0)
		{
			const body={c_variation_name:inputs.c_variation_name,
						j_insertdata:arrayVal}
			
		 	AddVariationsPageAction(body);
		}
		
	};

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
					<h4 className="profile-title">Add Variations</h4>
				</div>

				<div>
					<form className="profile-details-sec">
						<p className="login-error-msg min-height-none mb-10">
							{errMsg.toLowerCase()}
						</p>

						<Grid container spacing={0}>
							<Grid item xs={6}>
								<div className="ml-16">
									<TextField
										name="c_variation_name"
										value={inputs.c_variation_name}
										onChange={(e) => handleInputChange(e)}
										onFocus={(e) => handleFocus(e)}
										onBlur={(e) => handleBlur(e)}
										error={errors.c_variation_name}
										helperText={errors.c_variation_name && "Not a valid name"}
										margin="normal"
										variant="outlined"
										placeholder="Variation Name"
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
										name="c_variation_description"
										multiline
										rows={1}
										rowsMax={4}
										margin="normal"
										variant="outlined"
										placeholder="Description"
										className="auth-input kmass_desc"
										onChange={(e) => handleInputChange(e)}
									/>
								</div>
							</Grid>
							<Grid item xs={12}>
								<div className="pd-l-16">
								      <Autocomplete
								        multiple
								        freeSolo
								        className="autoCompleteTag"
								        id="tags-outlined"
								        options={variation_type}
								        getOptionLabel={option => option.title || option}
								        value={valueType}
								        onChange={(event, newValue) => setValueType(newValue)}
								        filterSelectedOptions
								        renderInput={params => {
								          params.inputProps.onKeyDown = handleKeyDown;
								          return (
								            <TextField
								              {...params}
								              variant="outlined"
								              placeholder="Variation Type"
								              margin="normal"
								              value={valueType}
								              name="c_variation_type"
								              error={errors.c_variation_type}
											  helperText={errors.c_variation_type && "Not a valid Type"}
								              fullWidth
								            />
								          );
								        }}
								      />
								</div>
							</Grid>
							<Grid item xs={12}>
								<div className="pd-l-16">
									<Button variant="contained" onClick={(e) => handleSubmit(e)} className="yes" color="primary">Submit</Button>
								</div>

							</Grid>
						</Grid>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddVariationsForm;