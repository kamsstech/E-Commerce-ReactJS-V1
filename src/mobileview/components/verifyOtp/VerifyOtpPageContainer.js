import VerifyOtpPage from "./VerifyOtpPage";
import { State } from "../../../rootReducer";
import { validateOTP, SendOTP, ReSendOTP } from "../../../common/action";
import { connect } from "react-redux";
// import "./css/VerifyOtpStyles.css";

const mapStateToProps = (state) => ({
    verifyOTPResult: state.verifyOTP,
    registerResult: state.register,
    sendOTPResult: state.sendOTPResult,
});
  
const mapDispatchToProps = (dispatch) => ({
    validateOTP: (otp, type) => dispatch(validateOTP(otp, type)),
    SendOTP: (username, page) => dispatch(SendOTP(username, page)),
    ReSendOTP: (username, page) => dispatch(ReSendOTP(username, page)),
});

export const VerifyOtpPageContainer = connect(mapStateToProps, mapDispatchToProps)(VerifyOtpPage);
