import WatchListPage from "./WatchListPage";
import { connect } from "react-redux";
import "../orderHistory/css/OrderHistoryStyle.css";
import "./css/WatchList.css"
// import './css/InputsStyles.css'
import {GetWatchlistItems, AddShortbookItems, RemoveShortbookItems, RemoveWatchlistItems, GetPdpPageItems, GetPdpPageSellerDetails, AddToCartAction, getBranchListAction, CartCount} from "../../../common/action";

const mapStateToProps = (state) => ({
    watchlistItemsResult: state.watchlistItemsResult,
    addShortbookResult:state.addShortbookResult,
    removeShortbookResult:state.removeShortbookResult, 
    watchlistCountRes:state.watchlistCountRes,
    shortbookCountRes:state.shortbookCountRes,
    branchListResult:state.branchListResult,
    pdpPageItemsResult:state.pdpPageItemsResult,
    pdpPageSellerDetailsResult:state.pdpPageSellerDetailsResult,
    addToCartResult:state.addToCartResult,
});

const mapDispatchToProps = (dispatch) => ({
    GetWatchlistItems: (inputs) => dispatch(GetWatchlistItems(inputs)), 
    getBranchListAction: () => dispatch(getBranchListAction()),
    AddShortbookItems:(inputs)=>dispatch(AddShortbookItems(inputs)),
    RemoveShortbookItems:(inputs)=>dispatch(RemoveShortbookItems(inputs)),
    RemoveWatchlistItems:(inputs)=>dispatch(RemoveWatchlistItems(inputs)),

    GetPdpPageItems:(body)=>dispatch(GetPdpPageItems(body)),
    GetPdpPageSellerDetails:(body)=>dispatch(GetPdpPageSellerDetails(body)),
    AddToCartAction:(body)=>dispatch(AddToCartAction(body)),
    CartCount: (body) => dispatch(CartCount(body)),
});
const WatchListPageContainer = connect(mapStateToProps,mapDispatchToProps )(WatchListPage);
export default WatchListPageContainer;
