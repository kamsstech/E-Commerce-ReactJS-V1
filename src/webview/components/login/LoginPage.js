import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthIllustration from "../../../assets/images/login-Illustration.svg";
import Button from "@material-ui/core/Button";

import LoginForm from "./LoginForm";
import RegisterRequestPopup from "./popup/RegisterRequestPopup";
import SiteLoader from "../landing1/SiteLoader/SiteLoader";
import { Constants } from "../../../common/constant/localstorage";
// const Illustration1 = lazy(() => import('../../../assets/images/new_illustration.json'));
// const AuthIllustration = lazy(() => import('../../../assets/images/login-Illustration.svg'));
const LoginPage = (props) => {
	const {
		loginResult,
		sendOTPResult,
		profileDetailsResult,
		validateREGISTERResult,
		validateREGISTER,
	} = props;
	let history = useHistory();
	const [showLoader, setShowLoader] = useState(false);
	useEffect(() => {
		if (history.location.pathname === "/login" && history.location.hash === "") {
			setTimeout(() => {
				setShowLoader(true);
			}, 5000);
		} else {
			setShowLoader(true);
		}
	}, [history.location.pathname]);

	const [inputs, setInputs] = useState({
		c_email: "",
		password: "",
	});

	const [errors, setErrors] = useState({
		c_email: false,
		password: false,
	});

	const [errorMsg, setErrorMsg] = useState("");
	const [open, setOpen] = useState(false);
	const [errMsgPop, setErrorMsgPop] = useState("");
	const [sucMsgPop, setSucMsgPop] = useState("");
	const [status, setStatus] = useState("");
	const [action, setAction] = useState(false)
	const [searchCount, setSearchCount] = useState(0)

	// console.log(loginResult, "$$$$$$$$loginResult");

	// useEffect(() => {
	//   if(loginResult.error !== ""){
	//     console.log(loginResult, "loginResult");
	//   }
	// }, [loginResult.error !== ""])

	const handleChange = (e) => {
		let { name, value } = e.target;

		setErrorMsg("");
		setErrors({ ...errors, [name]: false });
		if (name === "password") {
			if (value.length > 16) {
				value = value.slice(0, 16);
			} else {
				setInputs({ ...inputs, [name]: value });
			}
		}else{
			setInputs({ ...inputs, [name]: value });
		}

	};

	const handleFocus = (e) => {
		let { name } = e.target;
		setErrors({ ...errors, [name]: false });
	};
	const handleBlur = (e) => {
		let { name, value } = e.target;

		if(name === "c_email"){
			if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))){
			  setErrors({ ...errors, [name]: true });
			}
		}else if (name === "password"){
			if (value.length === 0){
				setErrors({ ...errors, [name]: true });
			}
		}
		// else if (name === "password") {
		// 	if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{4,16}$/.test(value)) {
		// 		setErrors({ ...errors, [name]: true });
		// 	}
		// }
	};

	const login = (event) => {
		event.preventDefault();
		if (inputs.c_email === "" || errors.c_email === true) {
			setErrors({ ...errors, c_email: true });
		} else if (inputs.password === "" || errors.password === true) {
			setErrors({ ...errors, password: true });
		} else {
			props.login(inputs);
		}
	};

	const forgot = (event) => {
		
		setAction(event)
		setErrors({ ...errors, password: false });
		setInputs({ ...inputs, password: "" });
		if (inputs.c_email === "") {
			setErrors({ ...errors, c_email: true });
		} else {
			let user_name = inputs.c_email;
			const body = {
				c_email: user_name,
				page: "login",
			};

			if (user_name.length == 10) {
				if (!/^[6-9]\d{9}$/.test(user_name)) {
					setErrors({ ...errors, username: true });
				} else {
					const body = {
						c_mobile_no: inputs.c_email,
					};
					validateREGISTER(body);
					// props.SendOTP(body);
				}
			} else {
				setErrors({ ...errors, username: true });
			}
		}
	};

	// useEffect(() => {

	//   if(props.profileDetailsResult.message !== ""){
	//      history.push('/home');
	//   }
	// }, [props.profileDetailsResult])

	useEffect(() => {
	    const vall = localStorage.getItem(Constants.PRE_LOGIN_SEARCH_COUNT)
	    const initiate = localStorage.getItem("WEB_LOAD_INITIATE")
	    setSearchCount(vall)
	    localStorage.clear();
	    if (initiate === "INITIATED") {
	        localStorage.setItem(Constants.PRE_LOGIN_SEARCH_COUNT, vall);
	    } else {
	        localStorage.setItem(Constants.PRE_LOGIN_SEARCH_COUNT, 0);
	    }

	    localStorage.setItem("WEB_LOAD_INITIATE", "INITIATED");
	}, []);

	const handleClickOpen = () => {
	    // setOpen(true);
	};

	const handleClose = () => {
	    setOpen(false);
	};

	useEffect(() => {
	    if (validateREGISTERResult.statuscode === 2) {
	        const body = {
	            c_email: inputs.c_email,
	            page: "login",
	        };
	        props.SendOTP(body);
	        if (inputs.c_email !== "") {
	            if (validateREGISTERResult.message === "Already registered!") {
	                if (action === true) {
	                    history.push(`/forgot-password/${inputs.c_email}`);
	                }
	            } else if (validateREGISTERResult.message === "Mobile Number exist in LC1") {

	                localStorage.setItem(Constants.LC1_USER_STATUS, true)
	                // history.push(`/combine-store-name`);
	                history.push(`/verify-otp/buyer`);
	            }

	        }
	    } else if (validateREGISTERResult.statuscode === 4) {
	        setOpen(true);
	        setStatus(validateREGISTERResult.statuscode);
	        setErrorMsgPop(validateREGISTERResult.error);
	    } else if (validateREGISTERResult.statuscode === 5) {
	        setOpen(true);
	        setStatus(validateREGISTERResult.statuscode);
	        setErrorMsgPop(validateREGISTERResult.error);
	    }
	}, [validateREGISTERResult]);

	useEffect(() => {
	    if (inputs.c_email !== "") {
	        if (props.loginResult.error !== "") {
	            setErrorMsg(props.loginResult.error);
	            // setOpen(true);
	            setStatus(loginResult.statuscode);
	            setErrorMsgPop(loginResult.error);
	        }
			else if(loginResult.loading != true){
				if (loginResult.payload.status === 1){
					history.push("/site-control/new-orders");
				}
			}
	    }
	}, [loginResult]);


	return (
		<>
		 

			<RegisterRequestPopup
				handleClickOpen={handleClickOpen}
				handleClose={handleClose}
				open={open}
				status={status}
				errormsg={errMsgPop}
				successMsg={sucMsgPop}
			/>


			<div className="auth-container">
				<div className="auth-left-container">
					<div className="space-3">
					 {/* <Suspense fallback={<div>loading</div>}>  */}
						{/* <LottiAnimations
							Illustration={Illustration1}
							
							height="850"
							width="650"
						/> */}
						<img src={AuthIllustration} alt="AuthIllustration" />
					{/* </Suspense> */}
						
					</div>
				</div>
				<div className="auth-right-container">
					<div className="auth-form">
						<LoginForm
							handleChange={handleChange}
							handleFocus={handleFocus}
							handleBlur={handleBlur}
							login={login}
							forgot={forgot}
							inputs={inputs}
							errors={errors}
							errorMsg={errorMsg}
							loading={props.loginResult.loading}
							loginResult={loginResult}
							profileDetailsResult={profileDetailsResult}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
export default LoginPage;
