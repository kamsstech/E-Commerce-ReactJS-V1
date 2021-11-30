import VerifyOtpPage from "./VerifyOtpPage";
import { State } from "../../../rootReducer";
import { validateOTP, SendOTP, ReSendOTP } from "../../../common/action";
import { connect } from "react-redux";
// import './css/InputsStyles.css'
const mapStateToProps = (state) => ({
    verifyOTPResult: state.verifyOTP,
    registerResult: state.register,
    sendOTPResult: state.sendOTPResult,
});
  
const mapDispatchToProps = (dispatch) => ({
    validateOTP: (inputs) => dispatch(validateOTP(inputs)),
    SendOTP: (inputs) => dispatch(SendOTP(inputs)),
    ReSendOTP: (inputs) => dispatch(ReSendOTP(inputs)),
});


const VerifyOtpPageContainer = connect(mapStateToProps, mapDispatchToProps)(VerifyOtpPage);
export default VerifyOtpPageContainer;
