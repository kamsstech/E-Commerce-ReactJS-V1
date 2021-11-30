import ForgotPassPage from "./ForgotPassPage";
import { State } from "../../../rootReducer";
import { SendOTP, SavePassword } from "../../../common/action";
import { connect } from "react-redux";
import { ForgotInputEntity } from "../../../common/model";

const mapStateToProps = (state: State) => ({
  sendOTPResult: state.sendOTPResult,
  savePassResult: state.savePassResult
});

const mapDispatchToProps = (dispatch: any) => ({
  SendOTP: (username: string, page: string) =>
    dispatch(SendOTP(username, page)),
  SavePassword: (inputs: ForgotInputEntity) =>
    dispatch(SavePassword(inputs))
});

export const ForgotPassPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassPage);
