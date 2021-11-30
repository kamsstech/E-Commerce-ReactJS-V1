import ChangePassPage from "./ChangePassPage";
// import { State } from "../../../rootReducer";
import { SendOTP, ChangePassword, SavePassword, ValidateOTP} from "../../../common/action";
import { connect } from "react-redux";
// import './css/InputsStyles.css'";
import "./css/ProfileStyles.css";

const mapStateToProps = (state) => ({
    sendOTPResult: state.sendOTPResult,
    changePasswordResult: state.changePasswordResult,
    savePassResult: state.savePassResult,
    validateOTPResult: state.validateOTPResult,
    
    
});
  
const mapDispatchToProps = (dispatch) => ({
    SendOTP: (username, page) => dispatch(SendOTP(username, page)),
    ChangePasswordAction: (inputs) => dispatch(ChangePassword(inputs)),
    SavePassword: (inputs) => dispatch(SavePassword(inputs)),
    ValidateOTP: (inputs) =>dispatch(ValidateOTP(inputs)),
    
});

const ChangePassPageContainer = connect(mapStateToProps, mapDispatchToProps)(ChangePassPage);
export default ChangePassPageContainer;
