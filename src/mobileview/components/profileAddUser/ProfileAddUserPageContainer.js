import ProfileAddUserPage from "./ProfileAddUserPage";
import { State } from "../../../rootReducer";
import { getBranchListAction, AddUserAction, GetUserInfoAction, CityListAction, AreaListAction } from "../../../common/action";
import { connect } from "react-redux";
import { Types } from "../../../common/constant/action";
import { AddUserInputEntity } from "../../../common/model";

const mapStateToProps = (state: State) => ({
    branchListResult: state.branchListResult,
    addUserResult: state.addUserResult,
    userInfoResult: state.userInfoResult,
    cityListResult: state.cityListResult,
    areaListResult: state.areaListResult
});
  
const mapDispatchToProps = (dispatch: any) => ({
    getBranchListAction: () => dispatch(getBranchListAction()),
    AddUserAction: (inputs:AddUserInputEntity, isEdit?:boolean, isMobile?:boolean) => dispatch(AddUserAction(inputs, isEdit,isMobile)),
    GetUserInfoAction: (userId: number) => dispatch(GetUserInfoAction(userId)),
    CityListAction: (stateCode: string) => dispatch(CityListAction(stateCode)),
    AreaListAction: (cityCode: string) => dispatch(AreaListAction(cityCode)),
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

export const ProfileAddUserPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAddUserPage);