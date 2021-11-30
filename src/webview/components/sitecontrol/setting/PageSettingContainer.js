import PageSetting from "./PageSetting";
import { State } from "../../../../rootReducer";
import { PageListPageAction} from "../../../../common/action";
import { connect } from "react-redux";

import "./css/PaymentPage.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    pageListPageResult:state.pageListPageResult,
});

const mapDispatchToProps = (dispatch) => ({
    PageListPageAction: (body) => dispatch(PageListPageAction(body)),
});

export const PageSettingContainer = connect(mapStateToProps,mapDispatchToProps)(PageSetting);


