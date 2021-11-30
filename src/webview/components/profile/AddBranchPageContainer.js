import AddBranchPage from "./AddBranchPage";
// import { State } from "../../../rootReducer";    
import { AddBranchAction, getBranchInfo, CityListAction, AreaListAction, GSTListAction,AddUserAction, StateListAction, imageupload, imagedelete, GetStateCityArea, GetBranchListUsersAction, getBranchListAction } from "../../../common/action";
import { connect } from "react-redux";
import { Types } from "../../../common/constant/action";
import "./css/ProfileStyles.css";
// import './css/InputsStyles.css'";
import "./css/RegisterNumCheckStyles.css";

const mapStateToProps = (state) => ({
    addBranchResult: state.addBranchResult,
    branchInfoResult: state.branchInfoResult,
    stateListResult: state.stateListResult,
    cityListResult: state.cityListResult,
    areaListResult: state.areaListResult,
    gstListResult: state.gstListResult,
    imageUploadResult: state.imageUploadResult,
    getStateCityAreaResult:state.getStateCityAreaResult,
    getBranchListUsersResult:state.getBranchListUsersResult
});

const mapDispatchToProps = (dispatch) => ({
    AddBranchAction: (inputs, isEdit) => dispatch(AddBranchAction(inputs, isEdit)),
    GetBranchListUsersAction: (body) => dispatch(GetBranchListUsersAction(body)),
    getBranchInfo: () => dispatch(getBranchInfo()),
    StateListAction: () => dispatch(StateListAction()),
    CityListAction: (key) => dispatch(CityListAction(key)),
    AreaListAction: (key) => dispatch(AreaListAction(key)),
    GSTListAction: () => dispatch(GSTListAction()),
    imageupload: (form) => dispatch(imageupload(form)),
    imagedelete: (body) => dispatch(imagedelete(body)),
    getBranchListAction: (body) => dispatch(getBranchListAction(body)),
    
    GetStateCityArea: (body) => dispatch(GetStateCityArea(body)),
    AddUserAction: (inputs, isEdit) => dispatch(AddUserAction(inputs, isEdit)),
    clearGetBranchInfo: () => dispatch({
        type: Types.GET_BRANCHINFO_CLEAR,
        payload: {},
        error: ""
    }),
    clearAddBranchInfo: () => dispatch({
        type: Types.ADD_BRANCH_CLEAR,
        loading: false,
        message: null,
        error: ""
    }),
});

const AddBranchPageContainer = connect(mapStateToProps, mapDispatchToProps)(AddBranchPage);
export default  AddBranchPageContainer;

