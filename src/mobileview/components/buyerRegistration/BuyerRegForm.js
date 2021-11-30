import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

//images
import user from "../../../assets/images/user.svg";
import phone from "../../../assets/images/phone.svg";
import password from "../../../assets/images/password.svg";
import Eye from "../../../assets/images/eye.svg";
import EyeOff from "../../../assets/images/eyeOff.svg";

const BuyerRegForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <form>
        <TextField
          error={false}
          id="firmname"
          name="firmname"
          margin="normal"
          variant="outlined"
          placeholder="Firm Name"
          className="auth-input mob-input"
          // value={inputs.mobile_name}
          // onChange={e => handleChange(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={user} alt="user-img" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          error={false}
          id="mobilenumber"
          name="mobilenumber"
          type="number"
          margin="normal"
          variant="outlined"
          placeholder="Mobile Number"
          className="auth-input mob-input"
          // value={inputs.mobile_name}
          // onChange={e => handleChange(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={phone} alt="mobile-phone" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          error={false}
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          margin="normal"
          variant="outlined"
          placeholder="Create Password"
          className="auth-input mob-input m-0"
          // value={inputs.password}
          // onChange={e => handleChange(e)}
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
        <Link to="/home">
          <Button
            variant="contained"
            color="primary"
            className="mob-theme-btn space-top-4"
          // disabled={loading}
          // onClick={() => login()}
          >
            {/* {loading ? <CircularProgress className="spining-icon" /> : null}{" "} */}
            Register
          </Button>
        </Link>
      </form>
      <div className="mob-auth-navigation">
        <p>Already have an account?</p>
        <Link to="/login">
          <Button variant="outlined" className="mob-default-btn">
            SIGN IN
          </Button>
        </Link>
        <p className="mob-register-link">
          Are you a seller?{" "}
          <Link to="/seller-registration" className="orange-link">
            Register here
          </Link>
        </p>
      </div>
    </>
  );
};

export default BuyerRegForm;
