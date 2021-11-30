import ProfileAddBranchPage from "./ProfileAddBranchPage";
import { State } from "../../../rootReducer";
import { AddBranchAction, getBranchInfo, CityListAction, AreaListAction, GSTListAction } from "../../../common/action";
import { connect } from "react-redux";
import {Types} from "../../../common/constant/action";
import { AddBranchInputEntity } from "../../../common/model";

const mapStateToProps = (state: State) => ({
    addBranchResult: state.addBranchResult,
    branchInfoResult: state.branchInfoResult,
    cityListResult: state.cityListResult,
    areaListResult: state.areaListResult,
    gstListResult: state.gstListResult
});
  
const mapDispatchToProps = (dispatch: any) => ({
    AddBranchAction: (inputs: AddBranchInputEntity, isEdit?: boolean) => dispatch(AddBranchAction(inputs, isEdit)),
    getBranchInfo: (branchId:number) => dispatch(getBranchInfo(branchId)),
    CityListAction: (key: string) => dispatch(CityListAction(key)),
    AreaListAction: (key: string) => dispatch(AreaListAction(key)),
    GSTListAction: () => dispatch(GSTListAction()),
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

export const ProfileAddBranchPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAddBranchPage)