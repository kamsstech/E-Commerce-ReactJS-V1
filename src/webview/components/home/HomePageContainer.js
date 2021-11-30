import HomePage from "./HomePage";
import "./css/HomeStyle.css";
// import './css/InputsStyles.css'";
import { connect } from "react-redux";
// import { state } from "../../../rootReducer";

import {
		GetNewLaunchesItems,
		GetFastMovingItems,
		CityListAction,
		submitDemoRequestAction,
		shopByManfacturer,
		PreferedSellerCall,
		GetOffers,
		BannerAction,
		AddWatchlistItems,
		RemoveWatchlistItems,
		AddShortbookItems,
		RemoveShortbookItems,
		GetPdpPageItems,
		GetPdpPageSellerDetails,
		ShortbookCount,
		WatchlistCount,
		getBranchListAction,
		AddToCartAction,
		CartCount,
		roadBlockModal,
		ScheduleDemoEmailAction,
		ScheduleDemoAction,
} from "../../../common/action";



const mapStateToProps = (state) => ({
		loginResult: state.login,
		newLaunchesItemsResult: state.newLaunchesItemsResult,
		fastMovingItemsResult: state.fastMovingItemsResult,
		cityListResult: state.cityListResult,
		demoRequestResult: state.demoRequestResult,
		landingPageResult: state.landingPageResult,
		shopByMfcRes: state.shophByMfcResult,
		bannerResponse: state.bannerResponse,
		branchListResult: state.branchListResult,
		// landingPageResult: state.landingPageResult
		preferedSellerResult: state.preferedSellerResult,
		bannerResponse: state.bannerResponse,
		offersResult: state.offersResult,
		addWatchlistResult: state.addWatchlistResult,
		removeWatchlistResult: state.removeWatchlistResult,
		addShortbookResult: state.addShortbookResult,
		removeShortbookResult: state.removeShortbookResult,
		notificationCountRes: state.notificationCountRes,
		watchlistCountRes: state.watchlistCountRes,
		shortbookCountRes: state.shortbookCountRes,
		pdpPageItemsResult: state.pdpPageItemsResult,
		pdpPageSellerDetailsResult: state.pdpPageSellerDetailsResult,
		addToCartResult: state.addToCartResult,
		roadBlockModalResult: state.roadBlockModalResult,
		getProfileInfoResult: state.getProfileInfoResult,
		scheduledemoRequestResult: state.scheduledemoRequestResult,
		scheduleDemoEmailResult: state.scheduleDemoEmailResult,
});

const mapDispatchToProps = (dispatch) => ({
		RoadBlockModal: () => dispatch(roadBlockModal()),
		AddToCartAction: (body) => dispatch(AddToCartAction(body)),
		getBranchListAction: () => dispatch(getBranchListAction()),
		GetNewLaunchesItems: () => dispatch(GetNewLaunchesItems()),
		GetFastMovingItems: () => dispatch(GetFastMovingItems()),
		shopByManfacturer: () => dispatch(shopByManfacturer()),
		CityListAction: (stateCode) => dispatch(CityListAction(stateCode)),
		submitDemoRequestAction: (body) => dispatch(submitDemoRequestAction(body)),
		PreferedSellerCall: () => dispatch(PreferedSellerCall()),
		BannerAction: () => dispatch(BannerAction()),
		GetOffers: () => dispatch(GetOffers()),
		GetPdpPageItems: (body) => dispatch(GetPdpPageItems(body)),
		GetPdpPageSellerDetails: (body) => dispatch(GetPdpPageSellerDetails(body)),
		AddWatchlistItems: (body) => dispatch(AddWatchlistItems(body)),
		RemoveWatchlistItems: (body) => dispatch(RemoveWatchlistItems(body)),
		AddShortbookItems: (body) => dispatch(AddShortbookItems(body)),
		RemoveShortbookItems: (body) => dispatch(RemoveShortbookItems(body)),
		ShortbookCount: () => dispatch(ShortbookCount()),
		WatchlistCount: () => dispatch(WatchlistCount()),
		CartCount: (body) => dispatch(CartCount(body)),
		ScheduleDemoAction: (inputs) => dispatch(ScheduleDemoAction(inputs)),
		ScheduleDemoEmailAction: (body) => dispatch(ScheduleDemoEmailAction(body)),
});

const HomePageContainer = connect(
		mapStateToProps,
		mapDispatchToProps
)(HomePage);

export default HomePageContainer;