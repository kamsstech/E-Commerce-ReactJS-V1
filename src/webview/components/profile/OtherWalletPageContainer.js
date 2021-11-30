import OtherWalletPage from "./OtherWalletPage";
// import { State } from "../../../rootReducer";
import { SendOTP, ChangePassword} from "../../../common/action";
import { connect } from "react-redux";
// import './css/InputsStyles.css'";
import "./css/ProfileStyles.css";

const mapStateToProps = (state) => ({
    sendOTPResult: state.sendOTPResult,
    changePasswordResult: state.changePasswordResult
});
  
const mapDispatchToProps = (dispatch) => ({
    SendOTP: (username, page) => dispatch(SendOTP(username, page)),
    ChangePasswordAction: (inputs) => dispatch(ChangePassword(inputs)),
});

const OtherWalletPageContainer = connect(mapStateToProps, mapDispatchToProps)(OtherWalletPage);
export default OtherWalletPageContainer;
