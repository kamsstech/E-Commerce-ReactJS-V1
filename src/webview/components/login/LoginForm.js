import React, { useState, useEffect } from "react";
import Email from "../../../assets/images/email.svg";
import password from "../../../assets/images/password.svg";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import eye from "../../../assets/images/eye.svg";
import eyeOff from "../../../assets/images/eyeOff.svg";
import CopyRightsContainer from "../copyRights/CopyRightsContainer";
// import { CopyRightsContainer } from "../copyRights/CopyRightsContainer";


const LoginForm = (props) => {
	const {
		handleChange,
		handleFocus,
		handleBlur,
		login,
		forgot,
		inputs,
		errors,
		errorMsg,
		loading,
		loginResult,
		profileDetailsResult
	} = props;
	const [values, setValues] = React.useState({
		showPassword: false,
	});

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const [showPassword, setShowPassword] = useState(false);
	const handlePassword = () => {
		setShowPassword(!showPassword);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	// useEffect(() => {
	// 	console.log(profileDetailsResult)
    // }, [profileDetailsResult]);
	return (
		<div className="auth-form-space">
			<div className="auth-form-header">
				<h3 className="auth-title">Welcome To 'KAMSS Tech Admin'</h3>
				<h5 className="auth-subtitle">
					{/*India's Fastest Growing B2B Pharma 'Eco System'*/}
				</h5>
			</div>
			<p className="login-error-msg">{errorMsg}</p>
			<form onSubmit={(e) => login(e)}>
				{/* <form onSubmit={(e) => login(e)}> */}
				<TextField
					name="c_email"
					value={inputs.c_email}
					onChange={(e) => handleChange(e)}
					onFocus={(e) => handleFocus(e)}
					onBlur={(e) => handleBlur(e)}
					error={errors.c_email}
					onBlur={e => handleBlur(e)}
					helperText={errors.c_email && "Not a valid E-mail"}
					autoComplete="new-password"
					margin="normal"
					variant="outlined"
					placeholder="E-mail *"
					className="auth-input mob-input"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<img src={Email} alt="Email" />
							</InputAdornment>
						)
					}}
				/>
				<TextField
					error={errors.password}
					// helperText="Password should contain 4 - 16 characters & should contain alphanumeric and special characters"
					helperText="Please enter valid username and password"
					autoComplete="off"
					name="password"
					margin="normal"
					variant="outlined"
					placeholder="Password"
					className="auth-input"
					type={showPassword ? "text" : "password"}
					value={inputs.password}
					onChange={(e) => handleChange(e)}
					onFocus={(e) => handleFocus(e)}
					onBlur={(e) => handleBlur(e)}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<img src={password} alt="password" />
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position="end">
								{showPassword ? (
									<img
										src={eyeOff}
										className="eye_pointer"
										alt="password"
										onClick={handlePassword}
									/>
								) : (
									<img
										src={eye}
										className="eye_pointer"
										alt="password"
										onClick={handlePassword}
									/>
								)}
							</InputAdornment>
						),
					}}
				/>
				<Button
					variant="contained"
					color="primary"
					className="theme-btn default-width fixed-space"
					disabled={loading}
					type="submit"
				>
					{loading ? <CircularProgress className="spining-icon" /> : null} Sign
					in
				</Button>
			</form>

			<CopyRightsContainer />
		</div>
	);
};

export default LoginForm;
