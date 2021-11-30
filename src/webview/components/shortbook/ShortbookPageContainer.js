import ShortbookPage from "./ShortbookPage";
import { connect } from "react-redux";
// import { State } from "../../../rootReducer";
import "../orderHistory/css/OrderHistoryStyle.css";
import "./css/Shortbook.css"
// import './css/InputsStyles.css'

import {GetShortbookItems, AddWatchlistItems, RemoveWatchlistItems,RemoveShortbookItems, GetPdpPageItems, GetPdpPageSellerDetails, AddToCartAction, getBranchListAction, CartCount} from "../../../common/action";

const mapStateToProps = (state) => ({
    shortbookItemsResult: state.shortbookItemsResult, 
    addWatchlistResult:state.addWatchlistResult,
    removeWatchlistResult:state.removeWatchlistResult,
    removeShortbookResult:state.removeShortbookResult,
    watchlistCountRes:state.watchlistCountRes,
    shortbookCountRes:state.shortbookCountRes,
    branchListResult:state.branchListResult,
    pdpPageItemsResult:state.pdpPageItemsResult,
    pdpPageSellerDetailsResult:state.pdpPageSellerDetailsResult,
    addToCartResult:state.addToCartResult,
});

const mapDispatchToProps = (dispatch) => ({
    GetShortbookItems: (inputs) => dispatch(GetShortbookItems(inputs)), 
    getBranchListAction: () => dispatch(getBranchListAction()),
    AddWatchlistItems:(inputs)=>dispatch(AddWatchlistItems(inputs)),
    RemoveWatchlistItems:(inputs)=>dispatch(RemoveWatchlistItems(inputs)),
    RemoveShortbookItems:(inputs)=>dispatch(RemoveShortbookItems(inputs)),
    
    GetPdpPageItems:(body)=>dispatch(GetPdpPageItems(body)),
    GetPdpPageSellerDetails:(body)=>dispatch(GetPdpPageSellerDetails(body)),
    AddToCartAction:(body)=>dispatch(AddToCartAction(body)),
    CartCount: (body) => dispatch(CartCount(body)),

    
});
const ShortbookPageContainer = connect(mapStateToProps,mapDispatchToProps )(ShortbookPage);
export default ShortbookPageContainer;