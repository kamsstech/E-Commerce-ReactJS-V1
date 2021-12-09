import React, {useEffect, useState} from 'react';
import Fade from '@material-ui/core/Fade';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

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
import {InputAdornment, TextField } from "@material-ui/core";
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
import Slider from "@material-ui/core/Slider";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import {
	MenuItem,
} from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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
const AddItemsPage = (props) => {
	
	const handleVInputChange= (e, index, type) => {
		console.log(type);
		for (var i = 0; i < itemVarrayJson.length; i++) 
		{
			if(i==index)
			{
				if(type==='price')
				{
					itemVarrayJson[i]['n_item_price']=e.target.value;
				}
				else if(type==='offer_price')
				{
					itemVarrayJson[i]['n_item_offer_price']=e.target.value;
				}
				else if(type==='discount')
				{
					itemVarrayJson[i]['n_item_discount']=e.target.value;
				}
				else if(type==='item_stock')
				{
					itemVarrayJson[i]['n_item_stock']=e.target.value;
				}
			}
		}
		console.log(itemVarrayJson);
	}
	const {
		ItemAddPageAction,
		itemAddPageResult,
		categoryListResult,
		brandListResult,
		BrandListAction,
		CategoryListAction,
		VariationsAllListPageAction,
		variationsAllListResult,
		itemVariationPageResult,ItemVariationPageAction
	} = props;
	const [activeStep, setActiveStep] = React.useState(0);
	const [catarrayJson, setcatarrayJson] = React.useState([]);
	const [brandarrayJson, setbrandarrayJson] = React.useState([]);
	const [variarrayJson, setvariarrayJson] = React.useState([]);
	const [itemVarrayJson, setItemVarrayJson] = React.useState([]);

	const handleNext = () => {
	    setActiveStep((prevActiveStep) => prevActiveStep + 1);
	  };

	  const handleBack = () => {
	    setActiveStep((prevActiveStep) => prevActiveStep - 1);
	  };

	  const handleReset = () => {
	    setActiveStep(0);
	  };
	  useEffect(() => {
	    CategoryListAction();
	    BrandListAction();
	    VariationsAllListPageAction();
	    
	  }, []);
	  useEffect(() => {
	    if (brandListResult.statuscode === 1) {
	      if(brandListResult.payload.data.length > 0)
	      {
	        setbrandarrayJson(brandListResult.payload?.data);
	      }
	    }
	    if(brandListResult.statuscode === 3) {
	      setbrandarrayJson([])
	    }
	    
	  }, [brandListResult]);
	  useEffect(() => {
	    if (categoryListResult.statuscode === 1) {
	      if(categoryListResult.payload.data.length > 0)
	      {
	        setcatarrayJson(categoryListResult.payload?.data);
	      }
	    }
	    if(categoryListResult.statuscode === 3) {
	      setcatarrayJson([])
	    }
	    
	  }, [categoryListResult]);
	  useEffect(() => {
	    if (variationsAllListResult.statuscode === 1) {
	      if(variationsAllListResult.payload.data.length > 0)
	      {
	        setvariarrayJson(variationsAllListResult.payload?.data);
	      }
	    }
	    if(variationsAllListResult.statuscode === 3) {
	      setvariarrayJson([])
	    }
	    
	  }, [variationsAllListResult]);
	  useEffect(() => {
	    if (itemVariationPageResult.statuscode === 1) {
	      if(itemVariationPageResult.payload.data.length > 0)
	      {
	  		// console.log(itemVariationPageResult.payload.data)
	        setItemVarrayJson(itemVariationPageResult.payload.data);
	      }
	    }
	    if(itemVariationPageResult.statuscode === 3) {
	      setItemVarrayJson([])
	    }
	    
	  }, [itemVariationPageResult]);
	const [errMsg, setErrMsg] = useState("");

	const [openModal, setOpenModal] = React.useState(false);
	const [openModal1, setOpenModal1] = React.useState(false);

	const [inputs, setInputs] = useState({
		c_item_name: "",
		c_model_name: "",
		c_meta_title: "",
		c_meta_description: "",
		c_meta_keyword: "",
		c_brand_code: "0",
		c_category_code: "0",
		c_item_description: "",
		c_item_specification: "",
		j_variations: [],
		c_item_image: "",
		c_item_img2: "",
		c_item_img3: "",
	});


	const [errors, setErrors] = useState({
		c_item_name: "",
		c_model_name: "",
		c_meta_title: "",
		c_meta_description: "",
		c_meta_keyword: "",
		c_brand_code: "",
		c_category_code: "",
		c_item_description: "",
		c_item_specification: "",
		j_variations: [],
		c_item_image: "",
		c_item_img2: "",
		c_item_img3: "",
	});

	const handleInputChange = (e) => {
		let { name, value } = e.target;
	
		setErrMsg("");
		setErrors({ ...errors, [name]: false });
		// if (name === "n_banner_type") {
		//   if (value.length === "Banner Type *") {
		// 	setInputs({ ...inputs, [n_banner_type]: 0 });
		//   } else {
		// 	setInputs({ ...inputs, [name]: value });
		//   }
		// }
		setInputs({ ...inputs, [name]: value });
		};
		const handleFocus = (e) => {
		let { name } = e.target;
		setErrors({ ...errors, [name]: false });
		};
	
		const handleBlur = (e) => {
		let { name, value } = e.target;
	
		// if (name === "n_banner_type") {
		// 	if (value === "Banner Type *") {
		// 	setErrors({ ...errors, [name]: true });
		// 	}
		// }else if (name === "c_item_name") {
		// 	if (value.length <= 3) {
		// 		setErrors({ ...errors, [name]: true });
		// 	}
		// }
		};

	const [openImgViewD1, setOpenImgViewD1] = useState(false);
	const [openImgViewD2, setOpenImgViewD2] = useState(false);
	const [openImgViewD3, setOpenImgViewD3] = useState(false);

	const clickHandleCancel = (event) => {
		if (event === "cancel_upload1") {
			setInputs({ ...inputs, c_item_image: "" });
		}else if (event === "cancel_upload2") {
			setInputs({ ...inputs, c_item_img2: "" });
		}else if (event === "cancel_upload3") {
			setInputs({ ...inputs, c_item_img3: "" });
		}
		};

	const [img1, setImg1] = useState(null);
	const [img1Data, setImg1Data] = useState(null);
	const [img2, setImg2] = useState(null);
	const [img2Data, setImg2Data] = useState(null);
	const [img3, setImg3] = useState(null);
	const [img3Data, setImg3Data] = useState(null);
	
	const handleUpload = (event, url) => {
	const { name, id } = event.target;
	let filename = event.target.files[0].name;
	let idxDot = filename.lastIndexOf(".") + 1;
	let extFile = filename.substr(idxDot, filename.length).toLowerCase();
		if (event.target.files[0]) {
			if (extFile == "jpg" || extFile == "jpeg" || extFile == "png" || extFile == "svg" || extFile == "gif") {
				
				if (name === "c_item_image") {
					setImg1(event.target.files[0]);
					setImg1Data(URL.createObjectURL(event.target.files[0]));
					setInputs({ ...inputs, [`${name}_name`]: filename, [name]: filename });
				}else if (name === "c_item_img2") {
					setImg2(event.target.files[0]);
					setImg2Data(URL.createObjectURL(event.target.files[0]));
					setInputs({ ...inputs, [`${name}_name`]: filename, [name]: filename });
				}else if (name === "c_item_img3") {
					setImg3(event.target.files[0]);
					setImg3Data(URL.createObjectURL(event.target.files[0]));
					setInputs({ ...inputs, [`${name}_name`]: filename, [name]: filename });
				} else {
					setErrMsg("Please Select Valid Images");
				}
			} else{
				setErrMsg("Please Select Valid Images");
			}
		}
	};
	
	const [value, setValue] = React.useState('no');
	const handleRadioChange = (event) => {
	    setValue(event.target.value);
	  };
	const handlePdtDetailNext = () => {
		if (inputs.c_item_name === "" || errors.c_item_name === true) {
			setErrors({ ...errors, c_item_name: true });
		}
		else if (inputs.c_model_name === "" || errors.c_model_name === true) {
			setErrors({ ...errors, c_model_name: true });
		}
		else if (inputs.c_item_specification === "" || errors.c_item_specification === true) {
			setErrors({ ...errors, c_item_specification: true });
		}
		else if (inputs.c_item_description === "" || errors.c_item_description === true) {
			setErrors({ ...errors, c_item_description: true });
		}
		else
		{
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
		}
	    
	  };
	  const handlePdtCatNext = () => {
		if (inputs.c_brand_code === "0" || errors.c_brand_code === true) {
			setErrors({ ...errors, c_brand_code: true });
		}
		else if (inputs.c_category_code === "0" || errors.c_category_code === true) {
			setErrors({ ...errors, c_category_code: true });
		}
		else
		{
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
	
	const [isCheck, setIsCheck] = useState([]);

	const handleSelect =(e,code,selected) =>{
		
		if(selected == false)
		{
			setIsCheck([...isCheck, code]);
		}
		if(selected == true)
		{
			setIsCheck(isCheck.filter((item) => item !== code));
		}
	}
	// console.log(isCheck)
	const handleGenerate = (e,checkval) =>{
		if(checkval.length > 0)
		{
			let arrayjoin=checkval.join(',')
			const form = new FormData();
			form.append("selectval", arrayjoin)
			
			ItemVariationPageAction(form);
		}
		
	}

	useEffect(() => {

	if (itemVariationPageResult.statuscode === 1) {
		setItemVarrayJson([])
	      if(itemVariationPageResult.payload.data.length > 0)
	      {
	        setItemVarrayJson(itemVariationPageResult.payload.data);
	      }
	    }
	    if(itemVariationPageResult.statuscode === 3) {
	      setItemVarrayJson([])
	    }
	    
	}, [itemVariationPageResult]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = new FormData();

		form.append("c_item_name",inputs.c_item_name);
		form.append("c_model_name",inputs.c_model_name);
		form.append("c_meta_title",inputs.c_meta_title);
		form.append("c_meta_description",inputs.c_meta_description);
		form.append("c_meta_keyword",inputs.c_meta_keyword);
		form.append("c_brand_code",inputs.c_brand_code);
		form.append("c_category_code",inputs.c_category_code);
		form.append("c_item_description",inputs.c_item_description);
		form.append("c_item_specification",inputs.c_item_specification);
		form.append("c_variation_type",value);
		
		form.append("c_item_image", img1Data);
		const arrayVal=[]
		if(value =='yes')
		{
			// console.log(itemVarrayJson,"sssss")
			if(itemVarrayJson.length > 0)
			{
				for(let i=0;i<itemVarrayJson.length;i++){
					let size =itemVarrayJson[i].Size?itemVarrayJson[i].Size:"0"
					let color =itemVarrayJson[i].Color?itemVarrayJson[i].Color:"0"
					if(itemVarrayJson[i].n_item_offer_price !='0' && itemVarrayJson[i].n_item_offer_price !='')
					{
						let objVal={
									c_variation_code1:size,
									c_variation_id1:"0",
									c_variation_code2:color,
									c_variation_id2:"0",
									n_item_stock:itemVarrayJson[i].n_item_stock,
									n_item_price:itemVarrayJson[i].n_item_price,
									n_item_discount:0,
									n_item_offer_price:itemVarrayJson[i].n_item_offer_price
								}

						arrayVal.push(objVal);
					}
					
				}
			}
		}
		else
		{
			let objVal={
							c_variation_code1:"0",
							c_variation_id1:"0",
							c_variation_code2:"0",
							c_variation_id2:"0",
							n_item_stock:inputs.n_item_stock,
							n_item_price:inputs.n_item_price,
							n_item_discount:0,
							n_item_offer_price:inputs.n_item_offer_price
						}
			arrayVal.push(objVal);
		}
		// console.log(arrayVal)
		if(arrayVal.length > 0)
		{
			form.append("j_insertvariationdata",JSON.stringify(arrayVal));
			ItemAddPageAction(form)
		}
		
	}
	useEffect(() => {
		
	  }, [itemAddPageResult]);
	return (
		<>
			<div>
				<ImageView
					open={openImgViewD1}
					handleClose={() => setOpenImgViewD1(false)}
					imgUrl={img1Data}
				/>
				<ImageView
					open={openImgViewD2}
					handleClose={() => setOpenImgViewD2(false)}
					imgUrl={img2Data}
				/>
				<ImageView
					open={openImgViewD3}
					handleClose={() => setOpenImgViewD3(false)}
					imgUrl={img3Data}
				/>
				<Container fixed>
					<div>
						{itemAddPageResult.status_code === 1 &&
							<div className="notFound">
								<Alert severity="success"> <span className="font-weight-bold">Brand Added..!!!</span></Alert>
							</div>
						}
						{itemAddPageResult.status_code === 2 &&
							<div className="notFound">
								<Alert severity="error"> <span className="font-weight-bold">Brand Already Exist..!!!</span></Alert>
							</div>
						}
						<form className="profile-details-sec" encType="multipart/form-data">
						<Stepper activeStep={activeStep} orientation="vertical">
					          <Step key="0">
					            <StepLabel>Product Basic Details</StepLabel>
					            <StepContent>
						              <div>
											<p className="login-error-msg min-height-none mb-10">
												{errMsg.toLowerCase()}
											</p>

											<Grid container spacing={0}>
												<Grid item xs={6}>
													<div className="ml-16">
														<TextField
															name="c_item_name"
															value={inputs.c_item_name}
															onChange={(e) => handleInputChange(e)}
															onFocus={(e) => handleFocus(e)}
															onBlur={(e) => handleBlur(e)}
															error={errors.c_item_name}
															helperText={errors.c_item_name && "Not a valid Item name"}
															margin="normal"
															variant="outlined"
															placeholder="Item Name *"
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
															name="c_model_name"
															value={inputs.c_model_name}
															onChange={(e) => handleInputChange(e)}
															onFocus={(e) => handleFocus(e)}
															onBlur={(e) => handleBlur(e)}
															error={errors.c_model_name}
															helperText={errors.c_model_name && "Not a valid Model name"}
															margin="normal"
															variant="outlined"
															placeholder="Model Name *"
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
															name="c_meta_title"
															value={inputs.c_meta_title}
															onChange={(e) => handleInputChange(e)}
															onFocus={(e) => handleFocus(e)}
															onBlur={(e) => handleBlur(e)}
															margin="normal"
															variant="outlined"
															placeholder="Meta title"
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
															name="c_meta_keyword"
															value={inputs.c_meta_keyword}
															onChange={(e) => handleInputChange(e)}
															onFocus={(e) => handleFocus(e)}
															onBlur={(e) => handleBlur(e)}
															margin="normal"
															variant="outlined"
															placeholder="Meta Keyword"
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
															name="c_meta_description"
															multiline
															rows={1}
															rowsMax={4}
															margin="normal"
															variant="outlined"
															placeholder="Meta Description"
															className="auth-input kmass_desc"
															onChange={(e) => handleInputChange(e)}
															value={inputs.c_meta_description}
														/>
													</div>
												</Grid>
												<Grid item xs={6}>
													<div className="ml-16">
														<TextField
															name="c_item_specification"
															multiline
															rows={1}
															rowsMax={4}
															margin="normal"
															variant="outlined"
															placeholder="Item Specification *"
															className="auth-input kmass_desc"
															onChange={(e) => handleInputChange(e)}
															error={errors.c_item_specification}
															helperText={errors.c_item_specification && "Not a valid Specification"}
															value={inputs.c_item_specification}
														/>
													</div>
												</Grid>
												<Grid item xs={12}>
													<div className="ml-16">
														<TextField
															name="c_item_description"
															multiline
															rows={1}
															rowsMax={4}
															margin="normal"
															variant="outlined"
															placeholder="Item Description *"
															className="auth-input kmass_desc"
															onChange={(e) => handleInputChange(e)}
															error={errors.c_item_description}
															helperText={errors.c_item_description && "Not a valid Description"}
															value={inputs.c_item_description}
														/>
													</div>
												</Grid>
											</Grid>
									</div>
					              <div>
					                <div>
					                {
					                	activeStep!=0 ? <Button
					                    onClick={handleBack}
					                  >
					                    Back
					                  </Button> : ""
					                }
					                  
					                  <Button
					                    variant="contained"
					                    color="primary"
					                    onClick={handlePdtDetailNext}
					                  >
					                  Next
					                  </Button>
					                </div>
					              </div>
					            </StepContent>
					          </Step>
					          <Step key="1">
					            <StepLabel>Product Categories</StepLabel>
					            <StepContent>
					              <Grid container spacing={0}>
										<Grid item xs={6}>
											<div className="ml-16">
												<TextField
													name="c_brand_code"
													autoComplete=""
													value={inputs.c_brand_code}
													onChange={(e) => handleInputChange(e)}
													onFocus={(e) => handleFocus(e)}
													onBlur={(e) => handleBlur(e)}
													error={errors.c_brand_code}
													helperText={errors.c_brand_code && "Select Valid Brand"}
													className="toCatp auth-input"
													placeholder="Choose Brand *"
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
														Choose Brand *
													</MenuItem>
													{
														Array.isArray(brandarrayJson) &&
														brandarrayJson.length > 0 &&
														brandarrayJson.map((item0, index0) => (
														<MenuItem key={item0.c_brand_code} value={item0.c_brand_code}>
															{item0.c_brand_name}
														</MenuItem>
													))}
												</TextField>
											</div>
										</Grid>
										<Grid item xs={6}>
											<div className="ml-16">
												<TextField
													name="c_category_code"
													autoComplete=""
													value={inputs.c_category_code}
													onChange={(e) => handleInputChange(e)}
													onFocus={(e) => handleFocus(e)}
													onBlur={(e) => handleBlur(e)}
													error={errors.c_category_code}
													helperText={errors.c_category_code && "Select Valid Category"}
													className="toCatp auth-input"
													placeholder="Choose Category *"
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
														Choose Category *
													</MenuItem>
													{
														Array.isArray(catarrayJson) &&
														catarrayJson.length > 0 &&
														catarrayJson.map((item1, index1) => (
														<MenuItem key={item1.c_category_code} value={item1.c_category_code}>
															{item1.c_category_name}
														</MenuItem>
													))}
												</TextField>
											</div>
										</Grid>
									</Grid>
					              <div>
					                <div>
					                  <Button
					                    onClick={handleBack}
					                  >
					                    Back
					                  </Button>
					                  <Button
					                    variant="contained"
					                    color="primary"
					                    onClick={handlePdtCatNext}
					                  >
					                  Next
					                  </Button>
					                </div>
					              </div>
					            </StepContent>
					          </Step>
					          <Step key="2">
					            <StepLabel>Product Variant</StepLabel>
					            <StepContent>

					            	<Grid item xs={12}>
										<div className="ml-16 mr-b-24">
					              			<FormControl component="fieldset">
									  			<FormLabel component="legend">Variation Type</FormLabel>
												<RadioGroup aria-label="variation_type" name="c_variation_type" value={value} onChange={handleRadioChange} >
												    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
												    <FormControlLabel value="no" control={<Radio />} label="No" />
											  	</RadioGroup>
											</FormControl>
										</div>
									</Grid>
									{value ==='yes' ?
									<Grid container spacing={0}>
									<Grid item xs={6}>
										<div className="ml-16 mr-b-24">
										        <Autocomplete
										      multiple
										      id="checkboxes-tags-demo"
										      options={variarrayJson}
										      disableCloseOnSelect

										      getOptionLabel={(option) => option.c_variation_code}
										      renderOption={(option, { selected }) => (
										        <React.Fragment>
										          <Checkbox
										          	onChange={(e) => handleSelect(e,option.c_variation_code,selected)}
										            icon={icon}
										            checkedIcon={checkedIcon}
										            style={{ marginRight: 8 }}
										            checked={selected}
										          />
										          {option.c_variation_name}
										        </React.Fragment>
										      )}
										      renderInput={(params) => (
										        <TextField {...params} variant="outlined" placeholder="Favorites" />
										      )}
										    />
										</div>
									</Grid>
									<Grid item xs={6}>
										<div className="ml-16 mr-b-24">
										      <Button
							                    variant="contained"
							                    color="primary"
							                    onClick={(e) => handleGenerate(e,isCheck)}
							                  >
							                  Generate
							                  </Button>
										</div>
									</Grid>
									
									{
										Array.isArray(itemVarrayJson) &&
										itemVarrayJson.length > 0 &&
										itemVarrayJson.map((item0, index0) => (
										<Grid container spacing={0}>
										{item0.Size ?(
											<Grid item xs={3}>
												<div className="ml-16">
													<TextField
														name="n_size"
														value={item0.Size}
														margin="normal"
														variant="outlined"
														placeholder="Item Size"
														className="auth-input"
														autoComplete=""
														disabled="disabled"
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
											):""}
											{item0.Color ?(
													<Grid item xs={3}>
													<div className="ml-16">
														<TextField
															name="n_color"
															value={item0.Color}
															margin="normal"
															variant="outlined"
															placeholder="Item Color"
															className="auth-input"
															autoComplete=""
															disabled="disabled"
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
												):""}
											
											<Grid item xs={3}>
												<div className="ml-16">
													<TextField
														name="n_item_price[]"
														defaultValue=""
														onChange={(e) => handleVInputChange(e, index0, 'price')}
														onFocus={(e) => handleFocus(e)}
														onBlur={(e) => handleBlur(e)}
														margin="normal"
														variant="outlined"
														placeholder="Item Price"
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
											{/*<Grid item xs={3}>
												<div className="ml-16">
													<TextField
														name="n_item_discount"
														defaultValue=""
														onChange={(e) => handleVInputChange(e, index0, 'discount')}
														onFocus={(e) => handleFocus(e)}
														onBlur={(e) => handleBlur(e)}
														margin="normal"
														variant="outlined"
														placeholder="Item Discount"
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
											</Grid>*/}
											<Grid item xs={3}>
												<div className="ml-16">
													<TextField
														name="n_item_offer_price[]"
														defaultValue=""
														onChange={(e) => handleVInputChange(e, index0, 'offer_price')}
														onFocus={(e) => handleFocus(e)}
														onBlur={(e) => handleBlur(e)}
														margin="normal"
														variant="outlined"
														placeholder="Item Offer Price"
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
											<Grid item xs={3}>
												<div className="ml-16">
													<TextField
														name="n_item_stock[]"
														defaultValue=""
														onChange={(e) => handleVInputChange(e, index0, 'item_stock')}
														onFocus={(e) => handleFocus(e)}
														onBlur={(e) => handleBlur(e)}
														margin="normal"
														variant="outlined"
														placeholder="Item Stock"
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
										</Grid>
									))}
									

									</Grid>:
									<Grid container spacing={0}>
												<Grid item xs={6}>
													<div className="ml-16">
														<TextField
															name="n_item_price"
															value={inputs.n_item_price}
															onChange={(e) => handleInputChange(e)}
															onFocus={(e) => handleFocus(e)}
															onBlur={(e) => handleBlur(e)}
															error={errors.n_item_price}
															helperText={errors.n_item_price && "Not a valid price"}
															margin="normal"
															variant="outlined"
															placeholder="Item Price *"
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
												{/*<Grid item xs={6}>
													<div className="ml-16">
														<TextField
															name="n_item_discount"
															value={inputs.n_item_discount}
															onChange={(e) => handleInputChange(e)}
															onFocus={(e) => handleFocus(e)}
															onBlur={(e) => handleBlur(e)}
															error={errors.n_item_discount}
															helperText={errors.n_item_discount && "Not a valid Discount"}
															margin="normal"
															variant="outlined"
															placeholder="Discount *"
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
												</Grid>*/}
												<Grid item xs={6}>
													<div className="ml-16">
														<TextField
															name="n_item_offer_price"
															value={inputs.n_item_offer_price}
															onChange={(e) => handleInputChange(e)}
															onFocus={(e) => handleFocus(e)}
															onBlur={(e) => handleBlur(e)}
															error={errors.n_item_offer_price}
															helperText={errors.n_item_offer_price && "Not a valid offerprice"}
															margin="normal"
															variant="outlined"
															placeholder="Offer Price *"
															className="auth-input"
															autoComplete=""
															// disabled="disabled"
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
															name="n_item_stock"
															value={inputs.n_item_stock}
															onChange={(e) => handleInputChange(e)}
															onFocus={(e) => handleFocus(e)}
															onBlur={(e) => handleBlur(e)}
															error={errors.n_item_stock}
															helperText={errors.n_item_stock && "Not a valid Stock"}
															margin="normal"
															variant="outlined"
															placeholder="Stock *"
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
											</Grid>
									}
					              <div>
					                <div>
					                  <Button
					                    onClick={handleBack}
					                  >
					                    Back
					                  </Button>
					                  <Button
					                    variant="contained"
					                    color="primary"
					                    onClick={handleNext}
					                  >
					                  Next
					                  </Button>
					                </div>
					              </div>
					            </StepContent>
					          </Step>
					          <Step key="3">
					            <StepLabel>Product Images</StepLabel>
					            <StepContent>
					            	<Grid container spacing={0}>
							              <Grid item xs={6}>
												<div className="ml-16">
													<TextField
														name="c_item_image"
														value={inputs.c_item_image}
														onChange={(e) => handleInputChange(e)}
														onBlur={(e) => handleBlur(e)}
														error={errors.c_item_image}
														helperText={errors.c_item_image && "Not a valid image to upload"}
														autoComplete="new-password"
														margin="normal"
														variant="outlined"
														placeholder="Item image 1 *"
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
																		name="c_item_image"
																		id="c_item_image"
																		accept="image/jpeg, image/png, image/jpg, image/webp"
																		onChange={(e) => handleUpload(e, "dl1")}
																		multiple={false}
																	/>
																</InputAdornment>
															),
														}}
													/>
													{inputs.c_item_image&& (
														<div className="display-flex">
															<h4
																className="profile-upload uploaded-imagename"
																onClick={() => setOpenImgViewD1(true)}
															>
																<span>{inputs.c_item_image}</span>
															</h4>
															<h4
																className="profile-upload uploaded-imagename float-right"
																onClick={() => clickHandleCancel("cancel_upload1")}
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
													name="c_item_img2"
													value={inputs.c_item_img2}
													onChange={(e) => handleInputChange(e)}
													onBlur={(e) => handleBlur(e)}
													error={errors.c_item_img2}
													helperText={errors.c_item_img2 && "Not a valid image to upload"}
													autoComplete="new-password"
													margin="normal"
													variant="outlined"
													placeholder="Item image 2"
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
																	name="c_item_img2"
																	id="c_item_img2"
																	accept="image/jpeg, image/png, image/jpg, image/webp"
																	onChange={(e) => handleUpload(e, "dl1")}
																	multiple={false}
																/>
															</InputAdornment>
														),
													}}
												/>
												{inputs.c_item_img2&& (
													<div className="display-flex">
														<h4
															className="profile-upload uploaded-imagename"
															onClick={() => setOpenImgViewD2(true)}
														>
															<span>{inputs.c_item_img2}</span>
														</h4>
														<h4
															className="profile-upload uploaded-imagename float-right"
															onClick={() => clickHandleCancel("cancel_upload2")}
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
													name="c_item_img3"
													value={inputs.c_item_img3}
													onChange={(e) => handleInputChange(e)}
													onBlur={(e) => handleBlur(e)}
													error={errors.c_item_img3}
													helperText={errors.c_item_img3 && "Not a valid image to upload"}
													autoComplete="new-password"
													margin="normal"
													variant="outlined"
													placeholder="Item image 3"
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
																	name="c_item_img3"
																	id="c_item_img3"
																	accept="image/jpeg, image/png, image/jpg, image/webp"
																	onChange={(e) => handleUpload(e, "dl1")}
																	multiple={false}
																/>
															</InputAdornment>
														),
													}}
												/>
												{inputs.c_item_img3&& (
													<div className="display-flex">
														<h4
															className="profile-upload uploaded-imagename"
															onClick={() => setOpenImgViewD3(true)}
														>
															<span>{inputs.c_item_img3}</span>
														</h4>
														<h4
															className="profile-upload uploaded-imagename float-right"
															onClick={() => clickHandleCancel("cancel_upload3")}
														>
															<span>x</span>
														</h4>
													</div>
												)}
											</div>
										</Grid>
									</Grid>
					              <div>
					                <div>
					                  <Button
					                    onClick={handleBack}
					                  >
					                    Back
					                  </Button>
					                  <Button
					                    variant="contained"
					                    color="primary"
					                    // type="submit"
					                    onClick={(e) => handleSubmit(e)}
					                  >
					                  Submit
					                  </Button>
					                </div>
					              </div>
					            </StepContent>
					          </Step>
					      </Stepper>
					     {/* {activeStep === steps.length && (
					        <Paper square elevation={0} className={classes.resetContainer}>
					          <Typography>All steps completed - you&apos;re finished</Typography>
					          <Button onClick={handleReset} className={classes.button}>
					            Reset
					          </Button>
					        </Paper>
					      )}*/}
						</form>
					</div>
				</Container>
			</div>
		</>
	);
};

export default AddItemsPage;