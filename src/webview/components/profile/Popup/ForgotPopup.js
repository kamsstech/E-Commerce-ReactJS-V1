import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../../assets/images/cross-grey.svg";
import phone from "../../../../assets/images/phone.svg";
import ForgotLock from "../../../../assets/images/forgot.svg";
import eye from "../../../../assets/images/eye.svg";
import eyeOff from "../../../../assets/images/eyeOff.svg";
import otp_img from "../../../../assets/images/otp.svg";
import password from "../../../../assets/images/password.svg";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { CircularProgress } from "@material-ui/core";

const ForgotPopUp = (props) => {
  const {
    openModal,
    closeModal,
    resendOTP,
    handleInput,
    handleFocus,
    handleBlur,
    input,
    inputError,
    handleSubmit,
    succMsg,
    errMsg,
    savePassResult,
    isActive,
    count,
    isResendActive,
    resendCount,
    enableMessage,
    disableMessage,
  } = props;
  console.log(savePassResult, "<<< savePassResult")
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
   if(showPassword.statuscode === 0){
    setOpen(false)
   }
  }, [showPassword])

  // const [error1, setError1] = React.useState(true);

  React.useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    closeModal();
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  // const toggleErrorText = () => {
  //   setError1(!error1);
  // };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="scanner-popup"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="scanner-popup-sec">
            <div className="align-right">
              <img src={CrossImg} alt="cross-img" onClick={handleClose} />
            </div>

            <div className="align-center">
              <img src={ForgotLock} alt="Scan" />
              <p className="search-title">Forgot Password !</p>

              <p className="orderf-label">
                Please give details below to set new password.
              </p>

              <TextField
                error={inputError.c_mobile_no}
                name="c_mobile_no"
                type="number"
                margin="normal"
                variant="outlined"
                placeholder="Mobile Number"
                value={input.c_mobile_no}
                onChange={(e) => handleInput(e)}
                helperText={
                  <div className="timer-web">
                    {!isResendActive && (
                      <span className="grey">
                        OTP Will Resend in :{" "}
                        <span className="countdown">
                          {resendCount.minutes}:{resendCount.second}
                        </span>
                      </span>
                    )}
                  </div>
                }
                disabled={true}
                className="auth-input auth-inputs"
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
                      onClick={() => resendOTP()}
                    >
                      {isActive && !isResendActive && "Generate OTP ?"}
                      {isActive && isResendActive && "Generate OTP ?"}
                      {isResendActive && !isActive && "Resend OTP ?"}
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                error={inputError.OTP}
                name="OTP"
                type="number"
                autoComplete="off"
                margin="normal"
                variant="outlined"
                placeholder="Enter OTP"
                value={input.OTP}
                disabled={disableMessage}
                onChange={(e) => handleInput(e)}
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e)}
                helperText={inputError.OTP && "Not a valid OTP"}
                className="auth-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={otp_img} alt="otp" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                error={inputError.c_new_pwd}
                name="c_new_pwd"
                helperText="Password should contain 4 - 16 characters & should contain alphanumeric and special characters"
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                margin="normal"
                variant="outlined"
                placeholder="Create New Password"
                value={input.c_new_pwd}
                disabled={enableMessage}
                onChange={(e) => handleInput(e)}
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e)}
                className="auth-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={password} alt="password" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end" className="cursor">
                      {showPassword ? (
                        <img
                          src={eyeOff}
                          alt="password"
                          onClick={handlePassword}
                        />
                      ) : (
                        <img
                          src={eye}
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
                className="try-popup-btn"
                disabled={savePassResult.loading}
                onClick={handleSubmit}
              >
                {savePassResult.loading ? (
                  <CircularProgress className="spining-icon" />
                ) : null}{" "}
                Submit
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ForgotPopUp;
