import RegisterPage from "./RegisterPage";
import { State } from "../../../rootReducer";
import { register, SendOTP, validateREGISTER } from "../../../common/action";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
    registerResult: state.register,
    validateREGISTERResult: state.validateREGISTERResult,
    sendOTPResult: state.sendOTPResult,
});
  
const mapDispatchToProps = (dispatch) => ({
    register: (inputs) => dispatch(register(inputs)),
    sendOTP: (inputs) => dispatch(SendOTP(inputs)),
    validateREGISTER: (inputs) => dispatch(validateREGISTER(inputs)),
});
export const RegisterPageContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
