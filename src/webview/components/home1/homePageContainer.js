import HomePage from "./homePage";
import "./css/homeStyle.css";
import { connect } from "react-redux";
import { state } from "../../../rootReducer";
//import { GetFastMovingItems,CityListAction,submitDemoRequestAction,shopByManfacturer,BannerAction } from "../../../common/action";
import { GetFastMovingItems,CityListAction,submitDemoRequestAction,shopByManfacturer, PreferedSellerCall,GetOffers,BannerAction } from "../../../common/action";
import { DemoRequestInputEntity } from "../../../common/model";

const mapStateToProps = (state) => ({
    profileDetailsResult: state.profileDetailsResult,
    fastMovingItemsResult: state.fastMovingItemsResult, 
    cityListResult: state.cityListResult,
    demoRequestResult: state.demoRequestResult,
    landingPageResult: state.landingPageResult,
    shopByMfcRes: state.shophByMfcResult,
    bannerResponse : state.bannerResponse,
    // landingPageResult: state.landingPageResult
    preferedSellerResult: state.preferedSellerResult,
    // bannerResponse : state.bannerResponse,
    offersResult:state.offersResult, 
});

const mapDispatchToProps = (dispatch) => ({
    GetFastMovingItems: () => dispatch(GetFastMovingItems()), 
    shopByManfacturer: () => dispatch(shopByManfacturer()),
    CityListAction: (stateCode) => dispatch(CityListAction(stateCode)),
    submitDemoRequestAction: (inputs) => dispatch(submitDemoRequestAction(inputs)),
    PreferedSellerCall:() => dispatch(PreferedSellerCall()),
    BannerAction: () => dispatch(BannerAction()),
    GetOffers:() => dispatch(GetOffers()),

});

export const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);
