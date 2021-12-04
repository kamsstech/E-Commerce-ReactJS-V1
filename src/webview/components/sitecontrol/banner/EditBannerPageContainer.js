import EditBannerPage from "./EditBannerPage";
import { State } from "../../../../rootReducer";
import {AddBannerAction, BannerGetPageAction, BannerUpdatePageAction} from "../../../../common/action";
import { connect } from "react-redux";

import "./css/ProfileStyles.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    getBannerResult: state.getBannerResult,
    bannerUpdateResult: state.bannerUpdateResult,
   });

const mapDispatchToProps = (dispatch) => ({
    BannerGetPageAction: (inputs) => dispatch(BannerGetPageAction(inputs)),
    BannerUpdatePageAction: (inputs) => dispatch(BannerUpdatePageAction(inputs),)
   
});

export const EditBannerPageContainer = connect(mapStateToProps,mapDispatchToProps)(EditBannerPage);

