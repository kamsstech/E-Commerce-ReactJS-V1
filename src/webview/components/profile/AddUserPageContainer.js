import AddUserPage from "./AddUserPage";
import { State } from "../../../rootReducer";
import { getBranchListAction, AddUserAction, GetUserInfoAction, CityListAction, AreaListAction, StateListAction, validateREGISTER, GetStateCityArea } from "../../../common/action";
import { connect } from "react-redux";

import { Types } from "../../../common/constant/action";
import "./css/ProfileStyles.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    branchListResult: state.branchListResult,
    addUserResult: state.addUserResult,
    userInfoResult: state.userInfoResult,
    stateListResult: state.stateListResult,
    cityListResult: state.cityListResult,
    areaListResult: state.areaListResult,
    validateREGISTERResult: state.validateREGISTERResult,
    getStateCityAreaResult:state.getStateCityAreaResult
});

const mapDispatchToProps = (dispatch) => ({
    getBranchListAction: (body) => dispatch(getBranchListAction(body)),
    validateREGISTER: (inputs) => dispatch(validateREGISTER(inputs)),
    AddUserAction: (body,edit) => dispatch(AddUserAction(body,edit)),
    GetUserInfoAction: (userId) => dispatch(GetUserInfoAction(userId)),
    StateListAction: () => dispatch(StateListAction()),
    GetStateCityArea: (body) => dispatch(GetStateCityArea(body)),
    CityListAction: (stateCode) => dispatch(CityListAction(stateCode)),
    AreaListAction: (cityCode) => dispatch(AreaListAction(cityCode)),
    clearAddUser: () => dispatch({
        type: Types.ADD_USER_CLEAR,
        loading: false,
        error: ""
    }),
    clearGetUserInfo: () => dispatch({
        type: Types.GET_USERINFO_CLEAR,
        payload: {},
        error: ""
    })
});

 const AddUserPageContainer = connect(mapStateToProps, mapDispatchToProps)(AddUserPage);

 

export default AddUserPageContainer;
