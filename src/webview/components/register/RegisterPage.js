import * as React from "react";
import { useState, useEffect } from "react";
import AuthIllustration from "../../../assets/images/login-Illustration.svg";
// import Illustration1 from "../../../assets/images/new_illustration.json";

// import Illustration from "../../../assets/animation/Illustration.json";
import LottiAnimations from "../../../common/lottieAnimation";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import RegisterForm from "./RegisterForm";

import SucessRegisterNumPassPop from "./Popup/SuccessRegisterPopup";

const RegisterPage = (props) => {
	let history = useHistory();
	const {
		match,
		register,
		sendOTP,
		sendOTPResult,
		registerResult,
		validateREGISTER,
		validateREGISTERResult,
		savePassResult,
	} = props;

	// console.log(sendOTPResult,"<<sendOTPResult")

	const [inputs, setInputs] = useState({
		c_mobile_no: "",
		c_pincode: "",
		c_name: "",
		c_pwd: "",
		c_buyer: match.params.type == "buyer" ? "Y" : "N",
		c_seller: match.params.type == "seller" ? "Y" : "N",
	});

	const [errors, setErrors] = useState({
		c_mobile_no: false,
		c_pincode: false,
		c_name: false,
		c_pwd: false,
	});

	const [errorsValidate, setErrorsValidate] = useState({
		c_mobile_no: false,
		c_pincode: false,
		c_name: false,
		c_pwd: false,
	});

	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};
	const handleClickOpen = () => {
		// setOpen(true);
	};
	useEffect(() => {
		setOpen(false);
	}, []);
	const [errorMsg, setErrorMsg] = useState("");

	const handleChange = (e) => {
		let { name, value } = e.target;

		setErrorMsg("");
		// setErrors({ c_mobile_no: false, c_name: false, c_pwd: false });
		setErrors({ ...errors, [name]: false });

		if (name === "c_name") {
			setInputs({ ...inputs, [name]: value });
		} else if (name === "c_mobile_no") {
			if (value.length > 10) {
				value = value.slice(0, 10);
			} else {
				
				setInputs({ ...inputs, [name]: value });

				let type = "";
					if (inputs.c_buyer === "Y") {
						type = "B";
					} else if (inputs.c_seller === "Y") {
						type = "S";
					}

				if(value.length === 10){
					const body = {
						c_mobile_no: value,
						c_type: type,
					};
					validateREGISTER(body);
				}
			}
		} else if (name === "c_pincode") {
			if (value.length > 6) {
				value = value.slice(0, 6);
			} else {
				setInputs({ ...inputs, [name]: value });
				
			}
		} else if (name === "c_pwd") {
			if (value.length > 16) {
				value = value.slice(0, 16);
			} else {
				setInputs({ ...inputs, [name]: value });
			}
		}
	};
	const handleFocus = (e) => {
		let { name, value } = e.target;
		setErrors({ ...errors, [name]: false });
		
	};

	const handleKeyDown = (e) => {
		if (e.key === " ") {
			// e.preventDefault();
		}
	};

	const handleBlur = (e) => {
		let { name, value } = e.target;

		if (name === "c_name") {
			let str = value;
			let firstLetter = str.charAt(0);
			if (firstLetter === " ") {
				setErrors({ ...errors, [name]: true });
			}
			else if (!/^(?=.*[a-zA-Z]).{4,128}$/.test(value)) {
					setErrors({ ...errors, [name]: true });
			}

		} else if (name === "c_mobile_no") {
			if (value.length <= 10) {
				if (!/^[6-9]\d{9}$/.test(value)) {
					setErrors({ ...errors, [name]: true });
				} else if (value.length === 10) {
					let type = "";
					if (inputs.c_buyer === "Y") {
						type = "B";
					} else if (inputs.c_seller === "Y") {
						type = "S";
					}
					// const body = {
					//   c_mobile_no: inputs.c_mobile_no,
					//   c_type: type,
					// };
					// validateREGISTER(body);
				}
			}
		} else if (name === "c_pincode") {
			if (value.length <= 6) {
				if (!/^[1-9]\d{5}$/.test(value)) {
					setErrors({ ...errors, [name]: true });
				}
			}
		} else if (name === "c_pwd") {
			if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{4,16}$/.test(value)) {
				setErrors({ ...errors, [name]: true });
			}
		}
	};

	const handleRegister = () => {
		if (inputs.c_name === "" || errors.c_name === true) {
			setErrors({ ...errors, c_name: true });
		} else if (inputs.c_mobile_no === "" || errors.c_mobile_no === true) {
			setErrors({ ...errors, c_mobile_no: true });
		} else if (inputs.c_pincode === "" || errors.c_pincode === true) {
			setErrors({ ...errors, c_pincode: true });
		} else if (inputs.c_pwd === "" || errors.c_pwd) {
			setErrors({ ...errors, c_pwd: true });
		} else {
			let type = "";
			if (inputs.c_buyer === "Y") {
				type = "B";
			} else if (inputs.c_seller === "Y") {
				type = "S";
			}

			const body = {
				c_cname: inputs.c_name,
				c_mobile_no: inputs.c_mobile_no,
				// c_mobile_no:8012005747,
				c_pincode: inputs.c_pincode,
				c_pwd: inputs.c_pwd,
				c_type: type,
				c_buyer: inputs.c_buyer,
				c_seller: inputs.c_seller,
				page: "register",
			};
			// props.register(body);
			sendOTP(body);
		}
	};

	useEffect(() => {
		if (sendOTPResult.statuscode === 0) {
			if (inputs.c_buyer == "Y") {
				history.push("/verify-otp/buyer");
			} else if (inputs.c_seller == "Y") {
				history.push("/verify-otp/seller");
			}
		}
	}, [sendOTPResult.payload.message !== ""]);

	useEffect(() => {
		if (inputs.c_mobile_no !== "") {
			if (props.registerResult.error !== "") {
				setErrorMsg(props.registerResult.error);
			}
		}
	}, [props.registerResult]);

	useEffect(() => {
		setErrorMsg("");
		setInputs({
			c_mobile_no: "",
			c_pincode: "",
			c_name: "",
			c_pwd: "",
			c_buyer: match.params.type == "buyer" ? "Y" : "N",
			c_seller: match.params.type == "seller" ? "Y" : "N",
		});
		setErrors({
			c_mobile_no: false,
			c_pincode: false,
			c_name: false,
			c_pwd: false,
		});
	}, [match.params.type]);

	useEffect(() => {
		if(validateREGISTERResult.statuscode === 2){
			if (validateREGISTERResult.payload.message === "Already registered!" || validateREGISTERResult.payload.message === "Mobile Number exist in LC1") {
				setOpen(true);
				setInputs({
					c_mobile_no: "",
					c_pincode: inputs.c_pincode,
					c_name: inputs.c_name,
					c_pwd: inputs.c_pwd,
					c_buyer: match.params.type == "buyer" ? "Y" : "N",
					c_seller: match.params.type == "seller" ? "Y" : "N",
				});
			}
		}
	}, [validateREGISTERResult.payload.message !== ""]);

	useEffect(() => {
		setOpen(false);
	}, []);

	return (
		<>
			<SucessRegisterNumPassPop
				handleClickOpen={handleClickOpen}
				handleClose={handleClose}
				open={open}
				savePassResult={savePassResult}
				// sucmsg = {sucmsg}
			/>

			<div className="auth-container">
				<div className="auth-left-container">
					<div className="space-3">
						{ <img src={AuthIllustration} alt="AuthIllustration" /> }
						{/*<LottiAnimations
							Illustration={Illustration1}
							height="850"
							width="650"
						/>*/}
					</div>
				</div>
				<div className="auth-right-container">
					<div className="auth-links">
						<span className="auth-text">Already have an account?</span>
						<Link to="/login">
							<Button
								variant="outlined"
								className="top-btn default-btn default-width fixed-space"
							>
								SIGN IN
							</Button>
						</Link>
					</div>
					<div className="auth-form">
						{
							<RegisterForm
								inputs={inputs}
								errors={errors}
								handleChange={handleChange}
								handleBlur={handleBlur}
								handleFocus={handleFocus}
								handleRegister={handleRegister}
								loading={registerResult.loading}
								savePassResult={savePassResult}
								errorMsg={errorMsg}
								onKeyDown={handleKeyDown}
							/>
						}
					</div>
				</div>
			</div>
		</>
	);
};

export default RegisterPage;
