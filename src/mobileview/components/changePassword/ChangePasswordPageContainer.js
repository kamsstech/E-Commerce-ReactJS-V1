import ChangePasswordPage from "./ChangePasswordPage";
import { State } from "../../../rootReducer";
import { SendOTP, ChangePassword} from "../../../common/action";
import { connect } from "react-redux";
import { ChangePassInputEntity, AddBranchInputEntity } from "../../../common/model";
import "./css/ChangePassStyle.css";

const mapStateToProps = (state: State) => ({
    sendOTPResult: state.sendOTPResult,
    changePasswordResult: state.changePasswordResult
});
  
const mapDispatchToProps = (dispatch: any) => ({
    SendOTP: (username: string, page: string) => dispatch(SendOTP(username, page)),
    ChangePasswordAction: (inputs: ChangePassInputEntity) => dispatch(ChangePassword(inputs)),
});

export const ChangePasswordPageContainer = connect(mapStateToProps, mapDispatchToProps)(ChangePasswordPage);
