import LoginPage from "./LoginPage";
import "./css/LoginStyles.css";
// import { State } from "../../../rootReducer";
import { login, profileDetails, SendOTP, validateREGISTER } from "../../../common/action";
import { connect } from "react-redux";



const mapStateToProps = (state) => ({
  loginResult: state.login,
  sendOTPResult: state.sendOTPResult,
  profileDetailsResult: state.profileDetailsResult,
  validateREGISTERResult: state.validateREGISTERResult,
});

const mapDispatchToProps = (dispatch) => ({
  login: (inputs) => dispatch(login(inputs)),
  profileDetails: () => dispatch(profileDetails()),
  SendOTP: (inputs) => dispatch(SendOTP(inputs)),
  validateREGISTER: (inputs) => dispatch(validateREGISTER(inputs)),
});


const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
export default LoginPageContainer;