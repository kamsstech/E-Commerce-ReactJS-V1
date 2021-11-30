import HomePage from "./HomePage";
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import "./css/HomeStyle.css";
import { GetFastMovingItems,CityListAction,submitDemoRequestAction, GetOffers, getBranchListAction, BannerAction } from "../../../common/action";


const mapStateToProps = (state) => ({
    fastMovingItemsResult: state.fastMovingItemsResult, 
    cityListResult: state.cityListResult,
    demoRequestResult: state.demoRequestResult,
    offersResult: state.offersResult,
    branchListResult: state.branchListResult,
    bannerResponse: state.bannerResponse,
});
const mapDispatchToProps = (dispatch) => ({
    GetOffers: () => dispatch(GetOffers()),
    BannerAction: () => dispatch(BannerAction()),
    getBranchListAction: () => dispatch(getBranchListAction()),
    GetFastMovingItems: () => dispatch(GetFastMovingItems()), 
    CityListAction: (stateCode) => dispatch(CityListAction(stateCode)),
    submitDemoRequestAction: (inputs) => dispatch(submitDemoRequestAction(inputs)),
});
export const HomePageContainer = connect (mapStateToProps,mapDispatchToProps) (HomePage);
