import FeedbackPage from "./FeedbackPage";
import "./css/FeedbackStyle.css";
import "./css/InputsStyles.css";
import { getBranchListAction, sendFeedbackAction } from "../../../common/action";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
    branchListResult: state.branchListResult,
    sendFeedbackResult: state.sendFeedbackResult
});
  
const mapDispatchToProps = (dispatch) => ({
    getBranchListAction: () => dispatch(getBranchListAction()),
    sendFeedbackAction: (body) => dispatch(sendFeedbackAction(body))
});



const FeedbackPageContainer = connect(mapStateToProps, mapDispatchToProps)(FeedbackPage);
export default FeedbackPageContainer;
