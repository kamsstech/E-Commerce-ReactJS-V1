import VariationsPage from "./VariationsPage";
import { State } from "../../../../rootReducer";
import { VariationsListPageAction} from "../../../../common/action";
import { connect } from "react-redux";

import "./css/PaymentPage.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    variationsListPageResult:state.variationsListPageResult,
});

const mapDispatchToProps = (dispatch) => ({
    VariationsListPageAction: (body) => dispatch(VariationsListPageAction(body)),
});

export const VariationsPageContainer = connect(mapStateToProps,mapDispatchToProps)(VariationsPage);

