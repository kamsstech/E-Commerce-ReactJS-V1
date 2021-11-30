import BannerPage from "./BannerPage";
import { State } from "../../../../rootReducer";
import { BannerListPageAction} from "../../../../common/action";
import { connect } from "react-redux";

import "./css/PaymentPage.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    bannerListPageResult:state.bannerListPageResult,
});

const mapDispatchToProps = (dispatch) => ({
    BannerListPageAction: (body) => dispatch(BannerListPageAction(body)),
});

export const BannerPageContainer = connect(mapStateToProps,mapDispatchToProps)(BannerPage);

