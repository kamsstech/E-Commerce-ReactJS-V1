import BrandPage from "./BrandPage";
import { State } from "../../../../rootReducer";
import { BrandListPageAction} from "../../../../common/action";
import { connect } from "react-redux";

import "./css/PaymentPage.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    brandListPageResult:state.brandListPageResult,
});

const mapDispatchToProps = (dispatch) => ({
    BrandListPageAction: (body) => dispatch(BrandListPageAction(body)),
});

export const BrandPageContainer = connect(mapStateToProps,mapDispatchToProps)(BrandPage);

