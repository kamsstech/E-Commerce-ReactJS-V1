import UserPage from "./UserPage";
// import { State } from "../../../rootReducer";
import { getUserListAction, deleteUserAction } from "../../../common/action";
import { Types } from "../../../common/constant/action"
import { connect } from "react-redux";
import "./css/ProfileStyles.css";
// import './css/InputsStyles.css'";
const mapStateToProps = (state) => ({
    userListResult: state.userListResult,
    deleteUserResult: state.deleteUserResult
});
  
const mapDispatchToProps = (dispatch) => ({
    getUserListAction: () => dispatch(getUserListAction()),
    deleteUserAction: (userId) => dispatch(deleteUserAction(userId)),
    clearGetUserList: () => dispatch({
        type: Types.GET_USER_CLEAR,
        message: "",
        payload: [],
        error: ""
    }),
    clearDeleteUser: () => dispatch({
        type: Types.DELETE_USER_CLEAR,
        loading: false,
        error: ""
    })
});

const UserPageContainer = connect(mapStateToProps, mapDispatchToProps)(UserPage);
export default UserPageContainer;
