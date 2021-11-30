import FeedbackPage from "./FeedbackPage";
import { State } from "../../../rootReducer";
import { getBranchListAction, sendFeedbackAction } from "../../../common/action";
import { connect } from "react-redux";
import { FeedbackInputsEntity } from "../../../common/model";

const mapStateToProps = (state: State) => ({
    branchListResult: state.branchListResult,
    sendFeedbackResult: state.sendFeedbackResult
});
  
const mapDispatchToProps = (dispatch: any) => ({
    getBranchListAction: () => dispatch(getBranchListAction()),
    sendFeedbackAction: (body: FeedbackInputsEntity) => dispatch(sendFeedbackAction(body))
});

export const FeedbackPageContainer = connect(mapStateToProps, mapDispatchToProps)(FeedbackPage);