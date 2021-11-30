
import ProfileInfoPage from "./ProfileInfoPage";
import { State } from "../../../rootReducer";
import { getProfileInfo, saveProfileInfo, CityListAction, AreaListAction, GSTListAction } from "../../../common/action";
import { connect } from "react-redux";

import "./css/ProfileInfoStyle.css";

const mapStateToProps = (state) => ({
    saveProfileInfoResult: state.saveProfileInfo,
    getProfileInfoResult: state.getProfileInfoResult,
    cityListResult: state.cityListResult,
    areaListResult: state.areaListResult,
    gstListResult: state.gstListResult
});

const mapDispatchToProps = (dispatch) => ({
    getProfileInfo: () => dispatch(getProfileInfo()),
    saveProfileInfo: (inputs,isMobile) => dispatch(saveProfileInfo(inputs,isMobile)),
    CityListAction: (stateCode) => dispatch(CityListAction(stateCode)),
    AreaListAction: (cityCode) => dispatch(AreaListAction(cityCode)),
    GSTListAction: () => dispatch(GSTListAction())
});

export const ProfileInfoPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoPage);