import ForgotPassPage from "./ForgotPassPage";
import { State } from "../../../rootReducer";
import { SendOTP, SavePassword, ValidateOTP } from "../../../common/action";
import { connect } from "react-redux";
import "./css/ForgotPassStyles.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
  sendOTPResult: state.sendOTPResult,
  loginResult: state.login,
  validateOTPResult: state.validateOTPResult,
  savePassResult: state.savePassResult,

});

const mapDispatchToProps = (dispatch) => ({
  SendOTP: (inputs) =>dispatch(SendOTP(inputs)),
  ValidateOTP: (inputs) =>dispatch(ValidateOTP(inputs)),
  SavePassword: (inputs) => dispatch(SavePassword(inputs))
});

const ForgotPassPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassPage);
export default ForgotPassPageContainer;
