import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import eye from "../../../assets/images/eye.svg";
import eyeOff from "../../../assets/images/eyeOff.svg";
import password from "../../../assets/images/password.svg";
import Button from "@material-ui/core/Button";
import SucessProfilePassPop from "./Popup/Successpopup";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";

const ChangePassword = (props) => {
	const {
		SendOTP,
		sendOTPResult,
		ChangePasswordAction,
		changePasswordResult,
		forgotPaasword,
	} = props;
	

	const [showCurPassword, setCurShowPassword] = useState(false);
	const [showNewPassword, setNewShowPassword] = useState(false);
	const [showConPassword, setShowConPassword] = useState(false);
	const [open, setOpen] = React.useState(false);
	const [sucmsg, setSucMsg] = useState([]);
	const [openModal, setOpenModal] = useState(false);
	// const [sucmsg, setSucMsg] = useState<ChangePasRespEntity>({

	// })

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleCurPassword = () => {
		setCurShowPassword(!showCurPassword);
	};

	const handleNewPassword = () => {
		setNewShowPassword(!showNewPassword);
	};

	const handleConPassword = () => {
		setShowConPassword(!showConPassword);
	};

	const [inputs, setInputs] = useState({
		c_old_pwd: "",
		c_new_pwd: "",
		c_confirm_pwd: "",
	});

	const [errors, setErrors] = useState({
		c_old_pwd: false,
		c_new_pwd: false,
		c_confirm_pwd: false,
	});

	const handleInputChange = (e) => {
		let { name, value } = e.target;

		setErrMsg("");
		setErrors({ ...errors, [name]: false });

		if (value.length > 16) {
			value = value.slice(0, 16);
		} else {
			setInputs({ ...inputs, [name]: value });
		}
	};

	const handleBlur = (e) => {
		let { name, value } = e.target;

		if (name === "OTP") {
			if (value.length < 4) {
				setErrors({ ...errors, [name]: true });
			}
		} else if (name === "c_old_pwd" || name === "c_new_pwd") {
			if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{4,16}$/.test(value)) {
				setErrors({ ...errors, [name]: true });
			}
		} else if (name === "c_confirm_pwd") {
			if (inputs.c_new_pwd !== inputs.c_confirm_pwd) {
				setErrors({ ...errors, [name]: true });
			}
		}
	};

	const handleSubmit = () => {
		setErrMsg("");
		if (inputs.c_old_pwd === "" || errors.c_old_pwd === true) {
			setErrors({ ...errors, c_old_pwd: true });
		} else if (inputs.c_new_pwd === "" || errors.c_new_pwd === true) {
			setErrors({ ...errors, c_new_pwd: true });
		} else if (
			inputs.c_confirm_pwd !== inputs.c_new_pwd ||
			errors.c_confirm_pwd === true
		) {
			setErrors({ ...errors, c_confirm_pwd: true });
		} else {
			ChangePasswordAction(inputs);
		}
	};

	const handleClear = () => {
		setInputs({
			c_old_pwd: "",
			c_new_pwd: "",
			c_confirm_pwd: "",
		});
		setErrors({
			c_old_pwd: false,
			c_new_pwd: false,
			c_confirm_pwd: false,
		});
	};

	const [errMsg, setErrMsg] = useState("");


	useEffect(() => {
		// if (inputs.c_old_pwd) {
		//   if (changePasswordResult.error !== "") {
		//     setErrMsg(changePasswordResult.error);
		//   } else if (
		//     changePasswordResult.payload !== undefined &&
		//     Array.isArray(changePasswordResult.payload) &&
		//     changePasswordResult.payload.length > 0
		//   ) {
		//     setOpen(true);
		//     setSucMsg(changePasswordResult.payload);
		//     setInputs({
		//       c_old_pwd: "",
		//       c_new_pwd: "",
		//       c_confirm_pwd: "",
		//     });
		//   }
		// }
if(inputs.c_old_pwd){
	if(changePasswordResult.statuscode === 0){
		setOpen(true);
				setSucMsg(changePasswordResult.payload);
				setInputs({
					c_old_pwd: "",
					c_new_pwd: "",
					c_confirm_pwd: "",
				});
	}else if(changePasswordResult.statuscode === 11){
		setOpenModal(true);
		setErrMsg(changePasswordResult.error);


	}
}
	

	}, [changePasswordResult]);

	// console.log("inputs", sendOTPResult)

	// console.log(props.changePasswordResult,"changePasswordResult")

	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: `
						.pressifforgo {
								color: #e09;
								font-size: 24px;
						}`,
				}}
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
						<span className="font-weight-bold">{errMsg}</span>
					</Alert>
				</Collapse>
			</div>
			<SucessProfilePassPop
				// handleClickOpen ={handleClickOpen}
				handleClose={handleClose}
				open={open}
				changePasswordResult={changePasswordResult}
				// sucmsg = {sucmsg}
			/>

			<div className="profile-title-sec ml-16">
				<h4 className="profile-title mr-b-8">Change Password</h4>
				<p className="profile-subtitle">Change your password from below.</p>
			</div>
			<div>
				<form className="profile-details-sec change-password">
					{/* PersonalInformation */}
					{/* <p className="login-error-msg min-height-none mb-10">{errMsg}</p> */}
					{/* <div>
						<h4 className="profile-title">Send OTP to ChangePassword</h4>
					</div> */}
					{/* <Grid container spacing={0}>
						<Grid item xs={4}>
							<div className="mr-16">
								<TextField
									name="c_mobile_no"
									value={inputs.c_mobile_no}
									margin="normal"
									variant="outlined"
									placeholder="Mobile Number"
									className="auth-input"
									autoComplete="new-password"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={phone} alt="mobile-phone" />
											</InputAdornment>
										),
										endAdornment: (
											<InputAdornment
												position="end"
												className="web-forgot-link"
												onClick={handleSendOTP}
											>
												Send OTP
											</InputAdornment>
										)
									}}
								/>
								<p className="login-error-msg success-color  cha-pass-succ min-height-none">{succMsg}</p>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className="mr-16">
								<TextField
									name="OTP"
									value={inputs.OTP}
									error={errors.OTP}
									onChange={e => handleInputChange(e)}
									onBlur={e => handleBlur(e)}
									helperText={errors.OTP && "Not a valid OTP"}
									type="number"
									margin="normal"
									variant="outlined"
									placeholder="otp"
									className="auth-input"
									autoComplete="new-password"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={otp} alt="mobile-phone" />
											</InputAdornment>
										)
									}}
								/>
							</div>
						</Grid>
					</Grid> */}
					<Grid container spacing={0}>
						<Grid item xs={4}>
							<div className="ml-16">
								<TextField
									name="c_old_pwd"
									value={inputs.c_old_pwd}
									error={errors.c_old_pwd}
									onChange={(e) => handleInputChange(e)}
									type={showCurPassword ? "text" : "password"}
									onBlur={(e) => handleBlur(e)}
									helperText={errors.c_old_pwd && "Invalid Old Password"}
									margin="normal"
									variant="outlined"
									placeholder="Enter Current Password"
									className="auth-input"
									autoComplete="new-password"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={password} alt="password" />
											</InputAdornment>
										),
										endAdornment: (
											<InputAdornment className="cursor" position="end">
												{showCurPassword ? (
													<img
														src={eyeOff}
														alt="password"
														onClick={handleCurPassword}
													/>
												) : (
													<img
														src={eye}
														alt="password"
														onClick={handleCurPassword}
													/>
												)}
											</InputAdornment>
										),
									}}
								/>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className="ml-16">
								<TextField
									name="c_new_pwd"
									value={inputs.c_new_pwd}
									error={errors.c_new_pwd}
									onChange={(e) => handleInputChange(e)}
									onBlur={(e) => handleBlur(e)}
									helperText={errors.c_new_pwd && "Not a valid password"}
									type={showNewPassword ? "text" : "password"}
									margin="normal"
									variant="outlined"
									placeholder="Set New Password"
									className="auth-input"
									autoComplete="new-password"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={password} alt="password" />
											</InputAdornment>
										),
										endAdornment: (
											<InputAdornment className="cursor" position="end">
												{showNewPassword ? (
													<img
														src={eyeOff}
														alt="password"
														onClick={handleNewPassword}
													/>
												) : (
													<img
														src={eye}
														alt="password"
														onClick={handleNewPassword}
													/>
												)}
											</InputAdornment>
										),
									}}
								/>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className="ml-16">
								<TextField
									name="c_confirm_pwd"
									value={inputs.c_confirm_pwd}
									error={errors.c_confirm_pwd}
									onChange={(e) => handleInputChange(e)}
									onBlur={(e) => handleBlur(e)}
									helperText={errors.c_confirm_pwd && "Password is not same"}
									type={showConPassword ? "text" : "password"}
									margin="normal"
									variant="outlined"
									placeholder="Confirm Password"
									className="auth-input"
									autoComplete="new-password"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={password} alt="password" />
											</InputAdornment>
										),
										endAdornment: (
											<InputAdornment className="cursor" position="end">
												{showConPassword ? (
													<img
														src={eyeOff}
														alt="password"
														onClick={handleConPassword}
													/>
												) : (
													<img
														src={eye}
														alt="password"
														onClick={handleConPassword}
													/>
												)}
											</InputAdornment>
										),
									}}
								/>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div className="ml-16">
								<p className="pressifforgot" onClick={forgotPaasword}>
									Press here if forgot ?
								</p>
								{/* <p className="pressifforgo">Press here if forgot ?</p> */}
								<Button
									variant="contained"
									color="primary"
									className="sm-u-btn feedback-send-btn"
									component="span"
									onClick={handleSubmit}
								>
									SAVE
								</Button>
								<Button
									color="primary"
									variant="contained"
									className="sm-u-btn feedback-clear-btn"
									component="span"
									onClick={handleClear}
								>
									CLEAR
								</Button>
							</div>
						</Grid>
					</Grid>
				</form>
			</div>
		</>
	);
};

export default ChangePassword;
