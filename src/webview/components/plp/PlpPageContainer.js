import PlpPage from "./PlpPage";

import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import "./css/PlpStyles.css";
// import './css/InputsStyles.css'
import {GetPlpPageActions, GetFastMovingItems, GetPdpPageAlternatives,  AddWatchlistItems, RemoveWatchlistItems, AddShortbookItems, RemoveShortbookItems, ShortbookCount, WatchlistCount, GetPdpPageItems, GetPdpPageSellerDetails, getBranchListAction, AddToCartAction, CartCount } from "../../../common/action";

const mapStateToProps = (state) => ({

    pdpPageAlternativesResult : state.pdpPageAlternativesResult,
    plpPageAtionsResult :state.plpPageAtionsResult,
    fastMovingItemsResult: state.fastMovingItemsResult,
    addWatchlistResult:state.addWatchlistResult,
    removeWatchlistResult:state.removeWatchlistResult,
    addShortbookResult:state.addShortbookResult,
    removeShortbookResult:state.removeShortbookResult,
    notificationCountRes:state.notificationCountRes,
    watchlistCountRes:state.watchlistCountRes,
    shortbookCountRes:state.shortbookCountRes,
    pdpPageItemsResult: state.pdpPageItemsResult,
    pdpPageSellerDetailsResult: state.pdpPageSellerDetailsResult,
    branchListResult: state.branchListResult,
    addToCartResult: state.addToCartResult,
});

const mapDispatchToProps = (dispatch) => ({
    GetPdpPageItems: (body) => dispatch(GetPdpPageItems(body)),
    GetPdpPageSellerDetails: (body) => dispatch(GetPdpPageSellerDetails(body)),

    GetFastMovingItems: () => dispatch(GetFastMovingItems()),
    ShortbookCount: () => dispatch(ShortbookCount()), 
    WatchlistCount: () => dispatch(WatchlistCount()), 
    GetPdpPageAlternatives: ( c_cont_code, limitNumber) => dispatch ( GetPdpPageAlternatives(c_cont_code,limitNumber)),
    GetPlpPageActions: (inputs) => dispatch(GetPlpPageActions(inputs)),
    AddWatchlistItems:(inputs)=>dispatch(AddWatchlistItems(inputs)),
    RemoveWatchlistItems:(inputs)=>dispatch(RemoveWatchlistItems(inputs)),
    AddShortbookItems:(inputs)=>dispatch(AddShortbookItems(inputs)),
    RemoveShortbookItems:(inputs)=>dispatch(RemoveShortbookItems(inputs)),

    getBranchListAction: () => dispatch(getBranchListAction()),
    AddToCartAction: (body) => dispatch(AddToCartAction(body)),
    CartCount: () => dispatch(CartCount()),
});
const PlpPageContainer = connect(mapStateToProps,mapDispatchToProps )(PlpPage);
export default PlpPageContainer
