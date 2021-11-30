import * as React from "react";
import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

//Images
import eye from "../../../assets/images/eye.svg";
import eyeOff from "../../../assets/images/eyeOff.svg";
import password from "../../../assets/images/password.svg";


  
const ChangePasswordPage = (props) => {
  const {SendOTP, sendOTPResult, ChangePasswordAction, changePasswordResult } = props;

    const [showCurPassword, setCurShowPassword] = useState(false);
    const [showNewPassword, setNewShowPassword] = useState(false);
    const [showConPassword, setShowConPassword] = useState(false);

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
        c_confirm_pwd: ""
      })
    
      const [errors, setErrors] = useState({
        c_old_pwd: false,
        c_new_pwd: false,
        c_confirm_pwd: false
      })
      
      const handleInputChange = (e) => {
        let { name, value } = e.target;
        
        setErrMsg("");
        setErrors({ ...errors, [name]: false });
    
        if (value.length > 16) {
          value = value.slice(0, 16);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
      }
    
      const handleBlur = (e) => {
        let { name, value } = e.target;
    
        if(name === "OTP"){
          if(value.length < 4){
            setErrors({ ...errors, [name]: true });
          }
        } else if(name === "c_old_pwd" || name === "c_new_pwd"){
          if(!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{4,16}$/.test(value))){
            setErrors({ ...errors, [name]: true });
          }
        } else if(name === "c_confirm_pwd"){
          if(inputs.c_new_pwd !== inputs.c_confirm_pwd){
            setErrors({ ...errors, [name]: true });
          }
        }
      }
    
      const handleSubmit = () => {
        setErrMsg("");
        if (inputs.c_old_pwd === "" || errors.c_old_pwd === true) {
          setErrors({ ...errors, c_old_pwd: true });
        } else if (inputs.c_new_pwd === "" || errors.c_new_pwd === true) {
          setErrors({ ...errors, c_new_pwd: true });
        } else if (inputs.c_confirm_pwd !== inputs.c_new_pwd || errors.c_confirm_pwd === true) {
          setErrors({ ...errors, c_confirm_pwd: true });
        } else {
          ChangePasswordAction(inputs)
        } 
      }
    
      const handleClear = () => {
        setInputs({
          c_old_pwd: "",
          c_new_pwd: "",
          c_confirm_pwd: ""
        })
        setErrors({
          c_old_pwd: false,
          c_new_pwd: false,
          c_confirm_pwd: false
        })
      }
    
      const [errMsg, setErrMsg] = useState("")
      useEffect(() => {
        if(inputs.c_old_pwd){
          if(changePasswordResult.error !== ""){
            setErrMsg(changePasswordResult.error)
          } 
        }
      }, [changePasswordResult])
    
    return (
        <div className="mob-profile-sec-space">
            <h4 className="mob-addbranch-drawer-title mb-12">Change Password</h4>
            <p className="login-error-msg">{errMsg}</p>

            <TextField
                name="c_old_pwd"
                value={inputs.c_old_pwd}
                error={errors.c_old_pwd}
                onChange={e => handleInputChange(e)}
                type={showCurPassword ? "text" : "password"}
                onBlur={e => handleBlur(e)}
                helperText={errors.c_old_pwd && "Not a valid password"}
                margin="normal"
                variant="outlined"
                placeholder="Enter Current Password"
                
                className="auth-input mob-input"
                autoComplete="new-password"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <img src={password} alt="password" />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
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
                )
                }}
            />
            <TextField
                name="c_new_pwd"
                value={inputs.c_new_pwd}
                error={errors.c_new_pwd}
                onChange={e => handleInputChange(e)}
                onBlur={e => handleBlur(e)}
                helperText={errors.c_new_pwd && "Not a valid password"}
                type={showNewPassword ? "text" : "password"}
                margin="normal"
                variant="outlined"
                placeholder="Set New Password"
                className="auth-input mob-input"
                autoComplete="new-password"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <img src={password} alt="password" />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
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
                )
                }}
            />
            <TextField
                name="c_confirm_pwd"
                value={inputs.c_confirm_pwd}
                error={errors.c_confirm_pwd}
                onChange={e => handleInputChange(e)}
                onBlur={e => handleBlur(e)}
                helperText={errors.c_confirm_pwd && "Password is not same"}
                type={showConPassword ? "text" : "password"}
                margin="normal"
                variant="outlined"
                placeholder="Confirm Password"
                className="auth-input mob-input"
                autoComplete="new-password"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <img src={password} alt="password" />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
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
                )
                }}
            />
            <div>
                <Button
                variant="outlined"
                className="mob-changePass-btn"
                onClick={handleSubmit}
                >
                SAVE
                </Button>
                {/* <Button
                variant="contained"
                className="feedback-clear-btn"
                component="span"
                onClick={handleClear}
                >
                CLEAR
                </Button> */}
          </div>
            {/* <Button variant="outlined" className="mob-changePass-btn">
                Save
            </Button> */}
        </div>
    )
}

export default ChangePasswordPage;