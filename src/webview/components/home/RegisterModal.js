import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../assets/images/cross-grey.svg";

import { Link } from "react-router-dom";
import user from "../../../assets/images/user.svg";
import eye from "../../../assets/images/eye.svg";
import eyeOff from "../../../assets/images/eyeOff.svg";
import phone from "../../../assets/images/phone.svg";
import password from "../../../assets/images/password.svg";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
import AuthIllustration from "../../../assets/images/login-Illustration.svg";
import DemoPharmsoft from "./DemoPharmsoft";

const RegisterModal = (props) => {
  const {open, handleOpen, handleClose,handleRegister } = props;


  const [openDemo, setOpenDemo] = React.useState(false);


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="roadblock-popup"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >

        <Fade in={open}>
            <div className="wantToSellModalSec">
                
                <div className="wantToSellModalSec-left">
                    {/* <div className="space-3"> */}
                    <img src={AuthIllustration} alt="AuthIllustration" />
                    {/* </div> */}
                </div>
                <div className="wantToSellModalSec-right">
                    <div className="want-to-sell-form">
                        <h3 className="auth-title">Register With 'Live Order'</h3>
                        <h5 className="modal-auth-subtitle">Dear Distributor Please Enter your Firm Name below.</h5>
                        {/* <p className="login-error-msg">svf</p> */}
                        <form>
                            <TextField
                            // error={errors.c_name}
                            name="c_name"
                            margin="normal"
                            variant="outlined"
                            placeholder="Distributor Firm Name"
                            autoComplete="off"
                            className="auth-input"
                            // value={inputs.c_name}
                            // onChange={e => handleChange(e)}
                            // onBlur={e => handleBlur(e)}
                            // helperText={errors.c_name && "Not a valid firm name"}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <img src={user} alt="user" />
                                </InputAdornment>
                                )
                            }}
                            />
                            <TextField
                            // error={errors.c_mobile_no}
                            name="c_mobile_no"
                            type="number"
                            margin="normal"
                            variant="outlined"
                            placeholder="Mobile Number"
                            autoComplete="off"
                            className="auth-input"
                            disabled
                            value={localStorage.getItem('MOBILE_NO')}
                            // onChange={e => handleChange(e)}
                            // onBlur={e => handleBlur(e)}
                            // helperText={errors.c_mobile_no && "Not a valid mobile number"}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <img src={phone} alt="mobile-phone" />
                                </InputAdornment>
                                )
                            }}
                            />
                            <Button disabled={false} variant="contained" color="primary" onClick={handleRegister} className="theme-btn"> 
                                Register
                            </Button>
                            {/* {inputs.c_buyer === "Y" &&
                            <h5 className="another-registration">
                                Are you a seller? <Link to="/register/seller">Register here</Link>
                            </h5> }
                            {inputs.c_seller === "Y" &&
                            <h5 className="another-registration">
                                Are you a buyer? <Link to="/register/buyer">Register here</Link>
                            </h5> } */}
                        </form>
                    </div>
                </div>
                <div className="cross-icon-modal">
                <img src={CrossImg} alt="cross-img" onClick={handleClose} />
                </div>
            </div>
        </Fade>
    </Modal>
    </div>
  );
};

export default RegisterModal;
