import BranchPage from "./BranchPage";
import { State } from "../../../rootReducer";
import { getBranchListAction, deleteBranchAction, setDefaultBranch, searchBranchListAction } from "../../../common/action";
import { Types } from "../../../common/constant/action";
import { connect } from "react-redux";
import "./css/ProfileStyles.css";
// import './css/InputsStyles.css'";
const mapStateToProps = (state) => ({
    branchListResult: state.branchListResult,
    deleteBranchResult: state.deleteBranchResult,
    defaultBranchResult: state.defaultBranchResult
});
  
const mapDispatchToProps = (dispatch) => ({
    getBranchListAction: (body) => dispatch(getBranchListAction(body)),
    deleteBranchAction: (branchId) => dispatch(deleteBranchAction(branchId)),
    setDefaultBranch: (firmId) => dispatch(setDefaultBranch(firmId)),
    searchBranchListAction: (searchKey) => dispatch(searchBranchListAction(searchKey)),
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

const BranchPageContainer = connect(mapStateToProps, mapDispatchToProps)(BranchPage);
export default BranchPageContainer;
