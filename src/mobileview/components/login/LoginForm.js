import React, {useState} from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

//images
import phone from "../../../assets/images/phone.svg";
import password from "../../../assets/images/password.svg";
import eye from "../../../assets/images/eye.svg";
import eyeOff from "../../../assets/images/eyeOff.svg";
import { LoginInputEntity, LoginErrorEntity } from "../../../common/model";


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
    loading
  } = props;


  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <p className="login-error-msg">{errorMsg}</p>
      <form>
        <TextField
          error={errors.username}
          autoComplete="off"
          name="username"
          margin="normal"
          variant="outlined"
          placeholder="Mobile Number"
          className="auth-input mob-input"
          value={inputs.username}
          onChange={e => handleChange(e)}
          onFocus={e => handleFocus(e)}
          onBlur={e => handleBlur(e)}
          helperText={errors.username && "Not a valid mobile number"}
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className="MuiInputAdornment-positionStart">
                  <img src={phone} alt="mobile-phone" /> 
              </InputAdornment>
            )
          }}
        />
        <TextField
          error={errors.password}
          helperText="Password should contain 4 - 16 character & should contain alphanumeric and special character"
          autoComplete="off"
          name="password"
          margin="normal"
          variant="outlined"
          placeholder="Password"
          className="auth-input mob-input m-0"
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          onChange={e => handleChange(e)}
          onFocus={e => handleFocus(e)}
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
        <div className="mob-remember">
          {/* <FormControlLabel
            className="mob-checkbox"
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange('checkedA')}
                disabled={
                  inputs.username === "" || inputs.password === ""
                }
                color="primary"
                value="checkedA"
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            }
            label="Remember me"
          /> */}
          <span onClick={forgot} className="mob-forgot-link">
            Forgot Password?
          </span>
        </div>
        <Button
          variant="contained"
          color="primary"
          className="mob-theme-btn space-top-4"
          disabled={loading}
          onClick={() => login()}
        >
          {loading ? <CircularProgress className="spining-icon" /> : null} Sign
          in
        </Button>
      </form>
      <div className="mob-auth-navigation">
        <p>Don't have an account?</p>
        <Link to="/register/buyer">
          <Button variant="outlined" className="mob-default-btn">
            Get Started
          </Button>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
