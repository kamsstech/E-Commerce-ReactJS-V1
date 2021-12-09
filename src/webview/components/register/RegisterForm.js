import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../../assets/images/user.svg";
import eye from "../../../assets/images/eye.svg";
import eyeOff from "../../../assets/images/eyeOff.svg";
import phone from "../../../assets/images/phone.svg";
import password from "../../../assets/images/password.svg";
import ZipCode from "../../../assets/images/icons/zip-code.svg";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import CopyRightsContainer from "../copyRights/CopyRightsContainer";

// import { CopyRightsContainer } from "../copyRights/CopyRightsContainer";


const RegisterForm = (props) => {
	const { inputs, errors, handleChange,handleFocus, handleBlur, handleRegister, loading, errorMsg,onKeyDown } = props;

	const [showPassword, setShowPassword] = useState(false);

	const handlePassword = () => {
		setShowPassword(!showPassword);
	};
	
	return (
		<div className="auth-form-space">
			<div className="auth-form-header">
			<h3 className="auth-title">Register With 'KAMSS Tech Admin'</h3>
		<h5 className="auth-subtitle">{inputs.c_buyer === "Y" ? "Dear Buyer Please Enter your details below." : "Dear Seller Please Enter your details below."}</h5>
			
			</div>
			<p className="login-error-msg">{errorMsg}</p>
			<form>
				<TextField
					error={errors.c_name}
					name="c_name"
					margin="normal"
					variant="outlined"
					// autoFocus="on"
					placeholder={inputs.c_buyer === "Y" ? "Buyer Firm Name" : "Seller Firm Name"}
					autoComplete="off"
					className="auth-input"
					value={inputs.c_name}
					onKeyDown={onKeyDown}
					onChange={e => handleChange(e)}
					onFocus={e => handleFocus(e)}
					onBlur={e => handleBlur(e)}
					
					helperText={errors.c_name && "Not a valid firm name"}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<img src={user} alt="user" />
							</InputAdornment>
						)
					}}
				/>
				<TextField
					error={errors.c_pincode}
					name="c_pincode"
					type="number"
					margin="normal"
					variant="outlined"
					placeholder="Pincode"
					autoComplete="off"
					className="auth-input "
					value={inputs.c_pincode}
					onChange={e => handleChange(e)}
					onFocus={e => handleFocus(e)}
					onBlur={e => handleBlur(e)}
					helperText={errors.c_pincode && "Please enter valid pincode"}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<img src={ZipCode} alt="ZipCode" />
							</InputAdornment>
						)
					}}
				/>
				<TextField
					error={errors.c_mobile_no}
					name="c_mobile_no"
					type="number"
					margin="normal"
					variant="outlined"
					placeholder="Mobile Number"
					autoComplete="off"
					className="auth-input"
					value={inputs.c_mobile_no}
					onChange={e => handleChange(e)}
					onFocus={e => handleFocus(e)}
					onBlur={e => handleBlur(e)}
					helperText={errors.c_mobile_no && "Not a valid mobile number"}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<img src={phone} alt="mobile-phone" />
							</InputAdornment>
						)
					}}
				/>
				
				<TextField
					error={errors.c_pwd}
					name="c_pwd"
					type={showPassword ? "text" : "password"}
					margin="normal"
					variant="outlined"
					placeholder="Create Password"
					helperText="Password should contain 4 - 16 characters & should contain alphanumeric and special characters"
					className="auth-input"
					value={inputs.c_pwd}
					onChange={e => handleChange(e)}
					onFocus={e => handleFocus(e)}
					onBlur={e => handleBlur(e)}
					autocomplete= 'off'
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<img src={password} alt="password" />
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position="end" className="cursor">
								{showPassword ? (
									<img src={eyeOff} alt="password" onClick={handlePassword} />
								) : (
									<img src={eye} alt="password" onClick={handlePassword} />
								)}
							</InputAdornment>
						)
					}}
				/>
				<Button disabled={loading} variant="contained" color="primary" className="theme-btn default-width fixed-space" onClick={handleRegister}>
					{loading ? <CircularProgress className="spining-icon" /> : null}{" "}
					Register
				</Button>
				{/*
					inputs.c_buyer === "Y" &&
					<h5 className="another-registration">
						Are you a seller? <Link to="/register/seller">Register here</Link>
					</h5> */
				}
				{
					inputs.c_seller === "Y" &&
					<h5 className="another-registration">
						Are you a buyer? <Link to="/register/buyer">Register here</Link>
					</h5> 
				}
			</form>
			<CopyRightsContainer />
		</div>
	);
};

export default RegisterForm;
