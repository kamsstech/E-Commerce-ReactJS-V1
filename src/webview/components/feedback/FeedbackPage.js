import * as React from "react";
import { useState, useEffect } from "react";
import { ENV } from "../../../common/constant/env";
import axios from "axios";
import { Constants } from "../../../common/constant/localstorage";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Feedback from "../../../assets/images/feedback.svg";
import Distributor from "../../../assets/images/distributor.svg";
import Store from "../../../assets/images/store.svg";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import attachment from "../../../assets/images/attachment.svg";
import MenuItem from "@material-ui/core/MenuItem";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
	customMenu: {
		"& .MuiList-padding": {
			padding: "1em"
		},
		"& option": {
			fontSize: "0.875em",
			fontFamily: "Quicksand-Medium",
			padding: ".78em 1.14em",
			color: "#2e3e6a",
			transition: ".2s all linear"
		},
		"& option[aria-selected='true'], & option:hover": {
			backgroundColor: "#c3cde41a",
			color: "#674cf3"
		},
		"& .MuiMenu-paper": {
			marginTop: "62px"
		}
	},
	input: {
		display: "none"
	}
}));



const FeedbackPage = (props) => {
	const {getBranchListAction, branchListResult,
		sendFeedbackAction, sendFeedbackResult} = props;

	const classes = useStyles();

	const [fileName, setFileName] = useState("");
	const [errMsg, setErrMsg] = useState("");
	const [inputs, setInputs] = useState({
		c_feedback_type: "-1",
		n_distributor_id: -1,
		n_branch_id: -1,
		c_query: "",
		c_file_url: ""
	})

	const [errors, setErrors] = useState({
		c_feedback_type: false,
		n_distributor_id: false,
		n_branch_id: false,
		c_query: false,
		c_file_url: false
	})

	const handleUpload = (event) => {
		var file = event.target.files[0];
		var reader = new FileReader();
		
		var filename = event.target.files[0].name;
		var size = event.target.files[0].size;
		
		setErrors({...errors, c_file_url: false})
		reader.onloadend = function() {
			if(size < 2000000){
			// console.log(reader.result)
				const headers = {
					"Content-Type": "application/json",
					"x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
					"x-csquare-firm-id": localStorage.getItem(Constants.FIRM_ID)
				};
				const body = {
					docName: filename,
					docData: reader.result,
					firmId:localStorage.getItem(Constants.FIRM_ID)
				}

				axios
					.post(`${ENV.CUST_BASE_URL}/firm/feedback/file`, body, { headers })
					.then(response => {
						if(response.data.appStatusCode === 0){
							if(response.data.payloadJson !== null){
								setInputs({...inputs, c_file_url: response.data.payloadJson.URI})
							}
						} 
						else {
							setErrMsg(response.data.messages[0])
						}
					})
					.catch(error => {
						setErrMsg("Something went wrong, Please try again later!")
					});
			} else {
				setErrors({...errors, c_file_url: true})
			}
		}
		reader.readAsDataURL(file);

		setFileName(event.target.files[0].name)
	};

	const handleChange = (e) => {
		let {name, value} = e.target;

		setErrors({...errors, [name]: false});

		if (name === "c_query") {
			if (value.length > 1000) {
				value = value.slice(0, 1000);
			} else {
				setInputs({ ...inputs, [name]: value });
			}
		} else {
			setInputs({ ...inputs, [name]: value });
		}
	}

	const handleSubmit = () => {
		// if(inputs.c_feedback_type === "-1" || errors.c_feedback_type === true){
		//   setErrors({...errors, c_feedback_type: true})
		// } else if(inputs.n_distributor_id === -1 || errors.n_distributor_id === true){
		//   setErrors({...errors, n_distributor_id: true})
		// } else if(inputs.n_branch_id === -1 || errors.n_branch_id === true){
		//   setErrors({...errors, n_branch_id: true})
		// } else if(inputs.c_query === "" || errors.c_query === true){
		//   setErrors({...errors, c_query: true})
		// } else if(inputs.c_file_url === "" || errors.c_file_url === true){
		//   setErrors({...errors, c_file_url: true})
		// } else {
		//   sendFeedbackAction(inputs);
		// }
		
		if(inputs.c_feedback_type === "-1" || errors.c_feedback_type === true){
			setErrors({...errors, c_feedback_type: true})
		} else if(inputs.c_query === "" || errors.c_query === true){
			setErrors({...errors, c_query: true})
		} else if(errors.c_file_url){

		} else {
			let temp = {}

			Object.entries(inputs).map(entry => {
				if(entry[1] === "-1" || entry[1] === -1 || entry[1] === ""){
					
				} else {
					temp[entry[0]] = entry[1];
				}
			})

			sendFeedbackAction(temp);
			console.log(temp, "temp")
		}
	}

	const handleClear = () => {
		setInputs({
			c_feedback_type: "-1",
			n_distributor_id: -1,
			n_branch_id: -1,
			c_query: "",
			c_file_url: ""
		})
		setFileName("");
		setErrMsg("");
	}

	useEffect(() => {
		getBranchListAction()
	}, []);

	useEffect(() => {
		if(sendFeedbackResult.error !== ""){
			setErrMsg(sendFeedbackResult.error)
		}
	}, [sendFeedbackResult])

	console.log(inputs, "fuydgudyf");

	return (
		<div className="body-spacing">
			<div className="navigation-container ">
				<Container fixed>
					<Breadcrumbs aria-label="breadcrumb" className="navigation-list">
						<Link to="/home">Home</Link>
						<Link className="active-link">Feedback</Link>
					</Breadcrumbs>
				</Container>
			</div>
			<Container fixed>
				<Grid item xs={12} sm={10}>
					<div className="custom-fb-mr">
						<h4 className="web-fb-title mr-l-8">
							We value your feedback. Please send your feedback in the below form
						</h4>
						<p className="login-error-msg min-height-none mb-10">{errMsg.toLowerCase()}</p>
						<Grid container>
							<Grid item xs={4} sm={4}>
									<div className="mr-r-8 mr-l-8">
								<TextField
									select
									onChange={(e)=>handleChange(e)}
									value={inputs.c_feedback_type}
									error={errors.c_feedback_type}
									helperText={
										errors.c_feedback_type && "Not a valid Feedback Type"
									}
									name="c_feedback_type"
									margin="normal"
									variant="outlined"
									placeholder="Full Name"
									className="auth-input"
									SelectProps={{
										MenuProps: {
											className: classes.customMenu
										}
									}}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={Feedback} alt="Feedback" />
											</InputAdornment>
										)
									}}
								>
									<MenuItem value={"-1"}>Feedback Type *</MenuItem>
									<MenuItem value={"resgistration"}>Seller Registration</MenuItem>
									<MenuItem value={"payments"}>Payments</MenuItem>
									<MenuItem value={"ordering"}>Ordering</MenuItem>
									<MenuItem value={"schemes"}>Schemes &amp; Offers</MenuItem>
									<MenuItem value={"suggestions"}>Suggestions/Others</MenuItem>
								</TextField>
								</div>
							</Grid>
							<Grid item xs={4} sm={4}>
									<div className="mr-r-8 mr-l-8">
								<TextField
									select
									onChange={(e)=>handleChange(e)}
									value={inputs.n_distributor_id}
									error={errors.n_distributor_id}
									name="n_distributor_id"
									margin="normal"
									variant="outlined"
									placeholder="Full Name"
									className="auth-input"
									SelectProps={{
										MenuProps: {
											className: classes.customMenu
										}
									}}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={Distributor} alt="Distributor" />
											</InputAdornment>
										)
									}}
								>
									<MenuItem value={-1}>Select Distributor Name</MenuItem>
									<MenuItem value={40}>Mahaveer Madi-Sales</MenuItem>
									<MenuItem value={50}>Raj Sons Pharma</MenuItem>
									<MenuItem value={60}>Vardhman Pharma</MenuItem>
									<MenuItem value={70}>Varun Pharma</MenuItem>
									<MenuItem value={80}>Yash Pharma</MenuItem>
								</TextField>
								</div>
							</Grid>
							<Grid item xs={4} sm={4}>
									<div className="mr-r-8 mr-l-8">
								<TextField
									select
									onChange={(e)=>handleChange(e)}
									value={inputs.n_branch_id}
									error={errors.n_branch_id}
									name="n_branch_id"
									margin="normal"
									variant="outlined"
									placeholder="Full Name"
									className="auth-input"
									SelectProps={{
										MenuProps: {
											className: classes.customMenu
										}
									}}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={Store} alt="Store" />
											</InputAdornment>
										)
									}}
								>
									<MenuItem value={-1}>Select Store Name</MenuItem>
									{(branchListResult.payload).map((item, index) => (
										<MenuItem key={index} value={item.n_branch_id}>{item.c_name}</MenuItem>
									))}
								</TextField>
								</div>
							</Grid>
							<Grid item xs={12} sm={12}>
								<div className="feedback-query mr-l-8 mr-r-8">
									<div className="feedback-label">
										Your Query <span className="red-color">*</span>
									</div>
									<div className="feedback-label">
										Max <span>{1000 - inputs.c_query.length}</span> character
									</div>
										<TextField
											onChange={(e) => handleChange(e)}
											value={inputs.c_query}
											error={errors.c_query}
											helperText={
													errors.c_query && "Not a valid Query"
												}
											multiline
											name="c_query"
											margin="normal"
											variant="outlined"
											placeholder="Write here..."
											className="auth-input c_query"
										></TextField>
								</div>
							</Grid>
						</Grid>
						<div className="feedback-select mr-l-8 mr-r-8">
							<div>
								<input
									className={classes.input}
									id="outlined-button-file"
									onChange={handleUpload}
									multiple={false}
									type="file"
									// accept="image/jpeg, image/png, image/jpg, image/webp, application/pdf, .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .rtf"
									accept=".doc, .rtf, .pdf, .png, .jpg"
								/>
								<label htmlFor="outlined-button-file">
									<Button
										variant="outlined"
										component="span"
										className="fb-upload-btn"
									>
										<img src={attachment} alt="attachment" />
										Upload file
									</Button>
								</label>
								<h4 className="fb-upload-guideline">
									Supported Formats: doc, rtf, pdf,png, jpg upto 2 MB
								</h4>
								<h4 className="uploaded-imagename">
									<span>{fileName}</span>
								</h4>
								{errors.c_file_url && <p className="login-error-msg">please upload a image less than 2 MB</p>}
							</div>
							<div>
									<Button
									variant="contained"
									className="feedback-clear-btn"
									component="span"
									onClick={handleClear}
								>
									CLEAR
								</Button>
								<Button
									variant="contained"
									color="primary"
									className="feedback-send-btn"
									component="span"
									onClick={handleSubmit}
								>
									SEND
								</Button>
								
							</div>
						</div>
					</div>
				</Grid>
			</Container>
		</div>
	);
};

export default FeedbackPage;
