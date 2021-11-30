import ProfilePage from "./ProfilePage";
import "./css/ProfileStyle.css";
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import { getProfileInfo, getBranchListAction, setDefaultBranch } from "../../../common/action";

const mapStateToProps = (state) => ({
    getProfileInfoResult: state.getProfileInfoResult,
    branchListResult: state.branchListResult,
    defaultBranchResult: state.defaultBranchResult
});

const mapDispatchToProps = (dispatch) => ({
    getProfileInfo: () => dispatch(getProfileInfo()),
    getBranchListAction: () => dispatch(getBranchListAction()),
    setDefaultBranch: (firmId) => dispatch(setDefaultBranch(firmId))
});

export const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);