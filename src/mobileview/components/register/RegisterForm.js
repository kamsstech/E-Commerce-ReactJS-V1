import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

//Images
import user from "../../../assets/images/user.svg";
import phone from "../../../assets/images/phone.svg";
import zip_code from "../../../assets/images/zip_code.svg";

import password from "../../../assets/images/password.svg";
import Eye from "../../../assets/images/eye.svg";
import EyeOff from "../../../assets/images/eyeOff.svg";
import correct1 from '../../../assets/images/correct.gif'
import wrong1 from '../../../assets/images/wrong.gif'


import { CircularProgress } from "@material-ui/core";


const RegisterForm = (props) => {
  const { inputs, errors, handleChange,handleFocus, handleBlur, handleRegister, loading, errorMsg,right,wrong } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <p className="login-error-msg">{errorMsg}</p>
      <form>
        <TextField
          error={errors.c_name}
          id="firmname"
          name="c_name"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          placeholder={inputs.c_buyer === "Y" ? "Buyer Firm Name":"Seller Firm Name"}
          className="auth-input mob-input"
          value={inputs.c_name}
          onChange={e => handleChange(e)}
          onBlur={e => handleBlur(e)}
          helperText={errors.c_name && "Not a valid firm name"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={user} alt="user-img" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          error={errors.c_pincode}
          id="c_pincode"
          name="c_pincode"
          type="number"
          margin="normal"
          variant="outlined"
          placeholder="pincode"
          autoComplete="off"
          className="auth-input mob-input"
          value={inputs.c_pincode}
          onChange={e => handleChange(e)}
          onFocus={e => handleFocus(e)}
          onBlur={e => handleBlur(e)}
          helperText={errors.c_pincode && "Not a valid pincode"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={zip_code} alt="pincode" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          error={errors.c_mobile_no}
          id="c_mobile_no"
          name="c_mobile_no"
          type="number"
          margin="normal"
          variant="outlined"
          placeholder="Mobile Number"
          autoComplete="off"
          className="auth-input mob-input"
          value={inputs.c_mobile_no}
          onChange={e => handleChange(e)}
          onFocus={e => handleFocus(e)}
          onBlur={e => handleBlur(e)}
          helperText={errors.c_mobile_no &&  "Not a valid mobile number"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={phone} alt="mobile-phone" />
              </InputAdornment>
            ),
            // endAdornment: (
            //   <InputAdornment position="end">
            //       {
            //         wrong ? (<img style={{width:'30px', height:'30px'}} src={wrong1} alt="wrong"  />):(null)
            //       }
            //       {
            //         right ? (<img style={{width:'30px', height:'30px'}} src={correct1} alt="correct"  />):(null)
            //       }
            //   </InputAdornment>
            // )
          }}
        />
        <TextField
          error={errors.c_pwd}
          name="c_pwd"
          type={showPassword ? "text" : "password"}
          margin="normal"
          variant="outlined"
          placeholder="Create Password"
          autoComplete="off"
          helperText="Password should contain 4 - 16 character & should contain alphanumeric and special character"
          className="auth-input"
          value={inputs.c_pwd}
          onChange={e => handleChange(e)}
          onBlur={e => handleBlur(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={password} alt="password" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {showPassword ? (
                  <img src={EyeOff} alt="password" onClick={handlePassword} />
                ) : (
                  <img src={Eye} alt="password" onClick={handlePassword} />
                )}
              </InputAdornment>
            )
          }}
        />
        {/* <Link to="/verify-otp/buyer"> */}
          <Button
            variant="contained"
            color="primary"
            className="mob-theme-btn space-top-4"
            disabled={loading}  
            onClick={handleRegister}
          >
            {loading ? <CircularProgress className="spining-icon" /> : null}{" "}
            Register
          </Button>
        {/* </Link> */}
      </form>
      <div className="mob-auth-navigation">
        <p>Already have an account?</p>
        <Link to="/login">
          <Button variant="outlined" className="mob-default-btn">
            SIGN IN
          </Button>
        </Link>
        {inputs.c_buyer === "Y" &&
          <p className="mob-register-link">
          Are you a seller?{" "}
          <Link to="/register/seller" className="orange-link">
            Register here
          </Link>
        </p>}
        {inputs.c_seller === "Y" &&
          <p className="mob-register-link">
          Are you a buyer?{" "}
          <Link to="/register/buyer" className="orange-link">
            Register here
          </Link>
        </p> }
        
      </div>
    </>
  );
};

export default RegisterForm;
