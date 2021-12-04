import BannerPage from "./BannerPage";
import { State } from "../../../../rootReducer";
import { BannerListPageAction, BannerUpdatePageAction} from "../../../../common/action";
import { connect } from "react-redux";

import "./css/PaymentPage.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    bannerListPageResult:state.bannerListPageResult,
    bannerUpdateResult: state.bannerUpdateResult,
});

const mapDispatchToProps = (dispatch) => ({
    BannerListPageAction: (body) => dispatch(BannerListPageAction(body)),
    BannerUpdatePageAction: (inputs) => dispatch(BannerUpdatePageAction(inputs),)
});

export const BannerPageContainer = connect(mapStateToProps,mapDispatchToProps)(BannerPage);

