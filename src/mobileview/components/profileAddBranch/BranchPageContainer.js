import BranchPage from "./BranchPage";
import { State } from "../../../rootReducer";
import { getBranchListAction, deleteBranchAction, setDefaultBranch, searchBranchListAction } from "../../../common/action";
import { Types } from "../../../common/constant/action";
import { connect } from "react-redux";

const mapStateToProps = (state: State) => ({
    branchListResult: state.branchListResult,
    deleteBranchResult: state.deleteBranchResult,
    defaultBranchResult: state.defaultBranchResult
});
  
const mapDispatchToProps = (dispatch: any) => ({
    getBranchListAction: () => dispatch(getBranchListAction()),
    deleteBranchAction: (branchId:number) => dispatch(deleteBranchAction(branchId)),
    setDefaultBranch: (firmId: string) => dispatch(setDefaultBranch(firmId)),
    searchBranchListAction: (searchKey: string) => dispatch(searchBranchListAction(searchKey)),
    clearGetBranch: () => dispatch({
        type: Types.GET_BRANCH_CLEAR,
        payload:[],
        error: ""
    }),
    clearDeleteBranch: () => dispatch({
        type: Types.DELETE_BRANCH_CLEAR,
        loading: false,
        error: ""
    })
});


export const BranchPageContainer = connect(mapStateToProps, mapDispatchToProps)(BranchPage);