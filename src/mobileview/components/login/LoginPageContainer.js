import LoginPage from "./LoginPage";
// import "./css/LoginStyle.css";
import { state } from "../../../rootReducer";
import { login, SendOTP, validateREGISTER } from "../../../common/action";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
  loginResult: state.login,
  sendOTPResult: state.sendOTPResult,
  profileDetailsResult: state.profileDetailsResult,
  validateREGISTERResult: state.validateREGISTERResult,
});

const mapDispatchToProps = (dispatch) => ({
  login: (inputs) => dispatch(login(inputs)),
  validateREGISTER: (body) => dispatch(validateREGISTER(body)),
  SendOTP: (inputs) => dispatch(SendOTP(inputs))
});

const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

export default LoginPageContainer