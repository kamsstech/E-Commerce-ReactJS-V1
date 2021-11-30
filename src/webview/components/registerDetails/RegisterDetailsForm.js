import React,{useState,useEffect} from "react";
import { Link, Redirect } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

import Avatar from "../../../assets/images/user.svg";
import address from "../../../assets/images/address.svg";
import Worldwide from "../../../assets/images/worldwide.svg";

import Email from "../../../assets/images/email.svg";
import Camera from "../../../assets/images/camera.svg";
import FirstAidKit from "../../../assets/images/first-aid-kit.svg";
import Calendar from "../../../assets/images/calendar.svg";
import Gst from "../../../assets/images/gst.svg";
import Tax from "../../../assets/images/tax.svg";
import Drug from "../../../assets/images/drug.svg";

import State from "../../../assets/images/icons/state.svg";
import City from "../../../assets/images/icons/city.svg";
import Area from "../../../assets/images/icons/area.svg";
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

import CircularProgress from "@material-ui/core/CircularProgress";

// import {moment} from 'moment';

import Landmark from "../../../assets/images/landmark.svg";
import Zipcode from "../../../assets/images/zip_code.svg";
// import Autocomplete from '@material-ui/lab/Autocomplete';

import "date-fns";
// import DateUtils from "@date-io/moment";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import { Select } from "@material-ui/core";
import { Constants } from "../../../common/constant/localstorage";
import CopyRightsContainer from "../copyRights/CopyRightsContainer";
import { SettingsInputSvideo } from "@material-ui/icons";
// import { CopyRightsContainer } from "../copyRights/CopyRightsContainer";


const filter = createFilterOptions();

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			<Box p={3}>{children}</Box>
		</Typography>
	);
}

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		"aria-controls": `scrollable-auto-tabpanel-${index}`
	};
}






const RegisterDetailsForm = (props) => {


	const {type,inputs,handleChanges, errors,succMsg, errMsg, handleInputs, handleBlur, handleSubmit, loading,
		drugExpiryDate, handleDrugExpiryDate, handleUpload, clickHandleCancel,getStateCityAreaResult,
		handleTabChange, handleNext, value,setValue1,value1} = props;
		

 const handleChange =(e)=>{

 }

//   useEffect(() => {
// 	 setInputs({
// 		c_area_name:value1
// 	 })
//   }, [value1])

	const [openImgViewD1, setOpenImgViewD1] = React.useState(false);
	const [openImgViewD2, setOpenImgViewD2] = React.useState(false);
	const [openImgViewNN, setOpenImgViewNN] = React.useState(false);
	
	const token=localStorage.getItem('token');
	const key=localStorage.getItem('key');

 const clickAction =()=>{
	console.log('clicked function')
	localStorage.setItem(Constants.TOKEN, token);
	localStorage.setItem(Constants.KEY, key);
			 
 }
 
	


	return (
	<>
	
		{/* <ImageView open={openImgViewD1} handleClose={()=> setOpenImgViewD1(false)} imgUrl={inputs.c_druglicense_no1_img} />
			<ImageView open={openImgViewD2} handleClose={()=> setOpenImgViewD2(false)} imgUrl={inputs.c_druglicense_no2_img} />
			<ImageView open={openImgViewNN} handleClose={()=> setOpenImgViewNN(false)} imgUrl={inputs.c_narcotic_no_img} /> */}
		<div className="auth-form-space1">
			<div className="registration-details">
				<div>
					<h3 className="auth-title">Register With 'Live Order'</h3>
					<h5 className="auth-subtitle">
						Please fill Business Information for next step.
					</h5>
					<p className="login-error-msg min-height-none">{errMsg}</p>
				</div>
				{/* <div>
					{ type === 'buyer' ? <div onClick={clickAction} >
					 <Link to="/login">
						<h4 className="skip">Skip</h4>
					</Link> 
					</div> : 
					<div  >
					 <h4 className="skip">Skip</h4>
				 </div>
					}
					
				 
				</div> */}
			</div>
			<p className="login-error-msg success-color">{succMsg}</p>
			<p className="login-error-msg min-height-none"></p>
			{type !== "buyer" && 
			<Paper className="forgot-paper">
				<Tabs
					value={value}
					onChange={handleTabChange}
					indicatorColor="primary"
					textColor="primary"
					className="forgot-tabs"
				>
					<Tab label="Firm Contact Information" {...a11yProps(0)} />
					{type === "seller" && <Tab label="Firm legal Identities" {...a11yProps(1)} />}
				</Tabs>
			</Paper> }

			<div id="forgot-pass">
				<TabPanel value={value} index={0}>
					<form>
						<Grid container spacing={0}>
							<Grid item xs={6}>
								<TextField
									error={errors.c_firm_contact_person}
									autoFocus="on"
									value={inputs.c_firm_contact_person}
									onChange={e => handleInputs(e)}
									onBlur={e => handleBlur(e)}
									helperText={errors.c_firm_contact_person && "Not a valid name"}
									name="c_firm_contact_person"
									type="text"
									autoComplete="off"
									margin="normal"
									variant="outlined"
									placeholder="Contact Person Name *"
									className="auth-input mr-6"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={Avatar} alt="Avatar" />
											</InputAdornment>
										)
									}}
								/>
							</Grid>

							<Grid item xs={6}>
								<TextField
									error={errors.c_email}
									value={inputs.c_email}
									onChange={e => handleInputs(e)}
									onBlur={e => handleBlur(e)}
									helperText={errors.c_email && "Not a valid E-mail"}
									name="c_email"
									type="text"
									autoComplete="off"
									margin="normal"
									variant="outlined"
									placeholder="E-mail Address *"
									className="auth-input ml-6"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={Email} alt="Email" />
											</InputAdornment>
										)
									}}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									error={errors.c_firm_address1}
									value={inputs.c_firm_address1}
									onChange={e => handleInputs(e)}
									onBlur={e => handleBlur(e)}
									helperText={errors.c_firm_address1 && "Not a valid address"}
									name="c_firm_address1"
									type="text"
									autoComplete="off"
									margin="normal"
									variant="outlined"
									placeholder="Address Line 1 *"
									className="auth-input mr-6"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={address} alt="address" />
											</InputAdornment>
										)
									}}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									error={errors.c_firm_address2}
									value={inputs.c_firm_address2}
									onChange={e => handleInputs(e)}
									onBlur={e => handleBlur(e)}
									helperText={errors.c_firm_address2 && "Not a valid address"}
									name="c_firm_address2"
									type="text"
									autoComplete="off"
									margin="normal"
									variant="outlined"
									placeholder="Address Line 2 *"
									className="auth-input ml-6"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={address} alt="address" />
											</InputAdornment>
										)
									}}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									name="c_pincode"
									value={inputs.c_pincode}
									onChange={e => handleInputs(e)}
									error={errors.c_pincode}
									onBlur={e => handleBlur(e)}
									helperText={errors.c_pincode && "Not a valid pincode"}
									type="number"
									margin="normal"
									variant="outlined"
									placeholder="Pin Code *"
									className="auth-input mr-6"
									autoComplete="new-password"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={Zipcode} alt="user" />
											</InputAdornment>
										)
									}}
								/>
							</Grid>

							<Grid item xs={6}>
								<TextField
									disabled={true}
									name="c_state_name"
									value={inputs.c_state_name}
									onChange={e => handleInputs(e)}
									error={errors.c_state_name}
									onBlur={e => handleBlur(e)}
									helperText={errors.c_state_name && "Not a valid State"}
									margin="normal"
									variant="outlined"
									placeholder="State *"
									className="auth-input ml-6"
									autoComplete="new-password"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={State} alt="State" />
											</InputAdornment>
										)
									}}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									disabled={true}
									name="c_city_name"
									value={inputs.c_city_name}
									onChange={e => handleInputs(e)}
									error={errors.c_city_name}
									onBlur={e => handleBlur(e)}
									helperText={errors.c_city_name && "Not a valid City"}
									margin="normal"
									variant="outlined"
									placeholder="City *"
									className="auth-input mr-6"
									autoComplete="new-password"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={City} alt="City" />
											</InputAdornment>
										)
									}}
								/>
							</Grid>
							{/* <Grid item xs={6}>
								<TextField
									disabled={true}
									name="c_area_name"
									value={inputs.c_area_name}
									onChange={e => handleInputs(e)}
									error={errors.c_area_name}
									onBlur={e => handleBlur(e)}
									helperText={errors.c_area_name && "Not a valid Area"}
									margin="normal"
									variant="outlined"
									placeholder="Area *"
									className="auth-input ml-6"
									autoComplete="new-password"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={Area} alt="Area" />
											</InputAdornment>
										)
									}}
								/>
							</Grid> */}

							<Grid item xs={6}>
								{/* <TextField
									disabled={true}
									name="c_area_name"
									value={inputs.c_area_name}
									onChange={e => handleInputs(e)}
									error={errors.c_area_name}
									onBlur={e => handleBlur(e)}
									helperText={errors.c_area_name && "Not a valid Area"}
									margin="normal"
									variant="outlined"
									placeholder="Area *"
									className="auth-input ml-6"
									autoComplete="new-password"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={Area} alt="Area" />
											</InputAdornment>
										)
									}}
								/> */}




					<Autocomplete
                      name="c_area_name"
                      value={value1}
                      onChange={(event, newValue) => {
                        if (typeof newValue === "string") {
                          setValue1({
                            c_area_name: newValue,
                          });
                        } else if (newValue && newValue.inputValue) {
                          // Create a new value from the user input
                          setValue1({
                            c_area_name: newValue.inputValue,
                          });
                        } else {
                          setValue1(newValue);
                        }
                      }}
                      filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        // Suggest the creation of a new value
                        if (params.inputValue !== "") {
                          filtered.push({
                            inputValue: params.inputValue,
                            c_area_name: `Add "${params.inputValue}"`,
                          });
                        }

                        return filtered;
                      }}
                      selectOnFocus
                      clearOnBlur
                      handleHomeEndKeys
                      id="free-solo-with-text-demo"
                      options={getStateCityAreaResult.payload.j_area_list}
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

                     
                    />









							</Grid>
							
						</Grid>
						
						{type === "buyer" ? 
						<Button
							variant="contained"
							color="primary"
							className="theme-btn"
							onClick={handleSubmit}
							disabled={
								loading  ||
								inputs.c_firm_contact_person === "" || errors.c_firm_contact_person === true ||
								inputs.c_firm_address1 === "" || errors.c_firm_address1 === true ||
								inputs.c_firm_address2 === "" || errors.c_firm_address2 === true ||
								inputs.c_pincode === "" || errors.c_pincode === true || inputs.c_pincode.length !== 6 ||
								inputs.c_state_name === "" || errors.c_state_name === true ||
								inputs.c_city_name === "" || errors.c_city_name === true ||
								// inputs.c_area_name === "" || errors.c_area_name === true || inputs.c_area_name === undefined ||
								inputs.c_mobile_no === "" || errors.c_mobile_no === true || inputs.c_mobile_no === null ||
								getStateCityAreaResult.statuscode === 5
							}
						>
							{loading ? <CircularProgress className="spining-icon" /> : null}{" "}
							Done
						</Button> :
						<Button
							variant="contained"
							color="primary"
							className="theme-btn"
							// onClick={handleNext}
							onClick={handleNext}
						>
							Next
						</Button> }
					</form>
				</TabPanel>
















				<TabPanel value={value} index={1}>
					<form>
						<Grid container spacing={0}>



							<Grid item xs={6}>
								<TextField
									error={errors.c_druglicense_no1}
									value={inputs.c_druglicense_no1}
									onChange={e => handleInputs(e)}
									onBlur={e => handleBlur(e)}
									// helperText={(errors.c_druglicense_no1 && inputs.c_druglicense_no1_img === "") && "Please upload a license image"}
									name="c_druglicense_no1"
									type="text"
									autoComplete="off"
									margin="normal"
									variant="outlined"
									placeholder="Drug License Number 1 *"
									className="auth-input mr-6"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={FirstAidKit} alt="firstAidKit" />
											</InputAdornment>
										),
										endAdornment: (
											<InputAdornment position="end">
												<img src={Camera} alt="Camera" />
												<input 
													type="file" 
													name="c_druglicense_no1_img"
													id="c_druglicense_no1"
													accept="image/jpeg, image/png, image/jpg, image/webp"
													// onChange={e => handleUpload(e, "dl1")}
													onChange={e => handleUpload(e)}
													multiple={false} 
												/>
											</InputAdornment>
										)
									}}
								/>
								{/* {inputs.c_druglicense_no1_img &&
								<h4 className="profile-upload uploaded-imagename" onClick={() => setOpenImgViewD1(true)}>
									<span>{inputs.c_druglicense_no1_img_name}</span>
								</h4> } */}
								{inputs.c_druglicense_no1_img && (
									<div className="display-flex">
										<h4
											className="profile-upload uploaded-imagename"
											onClick={() => setOpenImgViewD1(true)}
										>
											<span>{inputs.c_druglicense_no1_img}</span>
											{/* <span>{inputs.c_druglicense_no1_img_name}</span> */}
										</h4>
										<h4
											className="profile-upload uploaded-imagename float-right"
											onClick={() => clickHandleCancel("c_dl1_img")}
										>
											<span>x</span>
										</h4>
									</div>
								)}
							</Grid>
							
							<Grid item xs={6}>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<DatePicker
										error={errors.c_druglicense_expiry_date}
										name="c_druglicense_expiry_date"
										value={drugExpiryDate}
										onChange={handleDrugExpiryDate}
										className="auth-input ml-6"
										inputVariant="outlined"
										margin="normal"
										format="dd/MM/yyyy"
										placeholder="Valid Till *"
										minDate={new Date()}
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<img src={Calendar} alt="user-img" />
												</InputAdornment>
											)
										}}
									/>
								</MuiPickersUtilsProvider>
							</Grid>

							{/* <Grid item xs={6}>
								<TextField
									error={errors.c_druglicense_expiry_date}
									value={inputs.c_druglicense_expiry_date}
									onChange={e => handleInputs(e)}
									name="c_druglicense_expiry_date"
									type="text"
									value={drugExpiryDate}
									autoComplete="off"
									margin="normal"
									variant="outlined"
									placeholder="Valid till"
									className="auth-input mr-6"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={Calendar} alt="Calendar" />
											</InputAdornment>
										)
									}}
								/>
							</Grid> */}








						<Grid item xs={6}>
							<TextField
							name="c_gst_type"
							onChange={e => handleInputs(e)}
							error={errors.c_gst_type}
							onBlur={e => handleBlur(e)}
							helperText={errors.c_gst_type && "Not a valid state"}
							// inputValue={inputs.c_state_name}
							margin="normal"
							variant="outlined"
							className="auth-input mr-6 MuiDSSelect"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<img src={Zipcode} alt="user" />
									</InputAdornment>
								)
							}}
							select
						 
							value={inputs.c_gst_type}
							onChange={e=>handleChanges(e)}
							>
								<MenuItem key={"00000"} value={"00000"}><div className="opacity-05">Select GST Type</div></MenuItem>
								<MenuItem key={"11111"} value={"Registered"}>Registered</MenuItem>
								<MenuItem key={"22222"} value={"Un-Registered"}>Un-Registered</MenuItem>
								<MenuItem key={"33333"} value={"Un-Registered - No RCM"}>Un-Registered - No RCM</MenuItem>
								<MenuItem key={"44444"} value={"Composite with RCM"}>Composite with RCM</MenuItem>
								<MenuItem key={"55555"} value={"Composite with No RCM"}>Composite with No RCM</MenuItem>
								<MenuItem key={"66666"} value={"Export / Import"}>Export / Import</MenuItem>
								<MenuItem key={"77777"} value={"Exempted"}>Exempted</MenuItem>
								<MenuItem key={"88888"} value={"SEZ (Special Economic Zone)"}>SEZ (Special Economic Zone)</MenuItem>
								<MenuItem key={"99999"} value={"E-commerce"}>E-commerce</MenuItem>
								<MenuItem key={"12121"} value={"Exporter ( 0.1 % GST )"}>Exporter ( 0.1 % GST )</MenuItem>
								<MenuItem key={"13131"} value={"Research Center ( 5.00 GST)"}>Research Center ( 5.00 GST)</MenuItem>
							{/* {gstList.map((option) => (
								<MenuItem key={option.c_state_code} value={option.c_state_code}>
									{option.c_state_name}
								</MenuItem>
							))} */}
						</TextField>
							</Grid>


							{/* <Grid item xs={6}>
								<TextField
									error={errors.c_gst_type}
									value={inputs.c_gst_type}
									onChange={e => handleInputs(e)}
									name="c_gst_type"
									type="text"
									autoComplete="off"
									margin="normal"
									variant="outlined"
									placeholder="GST Type *"
									className="toCatp auth-input ml-6"
									
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={Gst} alt="tax" />
											</InputAdornment>
										)
									}}
								>
								 
								</TextField>
							</Grid> */}




							<Grid item xs={6}>
								<TextField
									error={errors.c_gst_no}
									value={inputs.c_gst_no.toUpperCase()}
									onChange={e => handleInputs(e)}
									onBlur={e => handleBlur(e)}
									helperText={errors.c_gst_no && "Not a valid GSTIN number"}
									name="c_gst_no"
									type="text"
									inputProps={{ style: { textTransform: "uppercase" } }}
									autoComplete="off"
									margin="normal"
									variant="outlined"
									placeholder="GSTIN Number *"
									className="auth-input ml-6"
									InputProps={{
									 
										startAdornment: (
											<InputAdornment position="start">
												<img src={Tax} alt="tax" />
											</InputAdornment>
										)
									}}
								/>
							</Grid>
							
						</Grid>
						<Button disabled={
							loading  ||
							inputs.c_firm_contact_person === "" || errors.c_firm_contact_person === true ||
							inputs.c_firm_address1 === "" || errors.c_firm_address1 === true ||
							inputs.c_firm_address2 === "" || errors.c_firm_address2 === true ||
							inputs.c_pincode === "" || errors.c_pincode === true || inputs.c_pincode.length !== 6 ||
							inputs.c_state_name === "" || errors.c_state_name === true ||
							inputs.c_city_name === "" || errors.c_city_name === true ||
							// inputs.c_area_name === "" || errors.c_area_name === true || inputs.c_area_name === undefined ||
							inputs.c_mobile_no === "" || errors.c_mobile_no === true || inputs.c_mobile_no === null ||
							getStateCityAreaResult.statuscode === 5
						}
							onClick={handleSubmit} variant="contained" color="primary" className="theme-btn">
							{loading ? <CircularProgress className="spining-icon" /> : null}{" "}
							done
						</Button>
					</form>
				</TabPanel>
			</div>

			<CopyRightsContainer />
		</div>
	</>
	);
};

export default RegisterDetailsForm;
