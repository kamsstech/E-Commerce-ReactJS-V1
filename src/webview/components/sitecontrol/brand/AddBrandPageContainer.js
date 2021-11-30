import AddBrandPage from "./AddBrandPage";
// import { State } from "../../../rootReducer";
import { getProfileInfo, saveProfileInfo, CityListAction, AreaListAction, GSTListAction, StateListAction, imageupload, getBranchListAction, imagedelete, registerDetails, GetStateCityArea } from "../../../../common/action";
import { connect } from "react-redux";

import "./css/ProfileStyles.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    saveProfileInfoResult: state.saveProfileInfo,
    getProfileInfoResult: state.getProfileInfoResult,
    stateListResult: state.stateListResult,
    cityListResult: state.cityListResult,
    areaListResult: state.areaListResult,
    gstListResult: state.gstListResult,
    imageUploadResult: state.imageUploadResult,
    branchListResult: state.branchListResult,
    getStateCityAreaResult:state.getStateCityAreaResult,
});

const mapDispatchToProps = (dispatch) => ({
    registerDetails: (body) => dispatch(registerDetails(body)),
    getBranchListAction: () => dispatch(getBranchListAction()),
    getProfileInfo: () => dispatch(getProfileInfo()),
    saveProfileInfo: (inputs) => dispatch(saveProfileInfo(inputs)),
    StateListAction: () => dispatch(StateListAction()),
    CityListAction: (stateCode) => dispatch(CityListAction(stateCode)),
    AreaListAction: (cityCode) => dispatch(AreaListAction(cityCode)),
    GSTListAction: () => dispatch(GSTListAction()),
    imageupload: (form) => dispatch(imageupload(form)),
    imagedelete: (body) => dispatch(imagedelete(body)),
    GetStateCityArea: (body) => dispatch(GetStateCityArea(body)),
});

export const AddBrandPageContainer = connect(mapStateToProps,mapDispatchToProps)(AddBrandPage);

