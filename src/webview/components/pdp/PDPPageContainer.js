import PDPPage from "./PDPPage";
import "./css/PdpStyle.css";
// import './css/InputsStyles.css'
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import { GetPdpPageItems, GetPdpPageSellerDetails, GetPdpPageAlternatives, AddWatchlistItems, RemoveWatchlistItems, AddShortbookItems, RemoveShortbookItems, ShortbookCount, WatchlistCount, CartCount, AddToCartAction, getBranchListAction } from '../../../common/action';

const mapStateToProps = (state) => ({
    pdpPageItemsResult: state.pdpPageItemsResult,
    pdpPageSellerDetailsResult: state.pdpPageSellerDetailsResult,
    // pdpPageAlternativesResult : state.pdpPageAlternativesResult,
    watchlistCountRes:state.watchlistCountRes,
    shortbookCountRes:state.shortbookCountRes,
    addWatchlistResult:state.addWatchlistResult,
    removeWatchlistResult:state.removeWatchlistResult,
    addShortbookResult:state.addShortbookResult,
    removeShortbookResult:state.removeShortbookResult,
    branchListResult: state.branchListResult,
    addToCartResult: state.addToCartResult,
});

const mapDispatchToProps = (dispatch) => ({
    GetPdpPageItems: (body) => dispatch(GetPdpPageItems(body)), 
    GetPdpPageSellerDetails: (body) => dispatch(GetPdpPageSellerDetails(body)),
    
    ShortbookCount: () => dispatch(ShortbookCount()), 
    WatchlistCount: () => dispatch(WatchlistCount()), 
    AddWatchlistItems:(inputs)=>dispatch(AddWatchlistItems(inputs)),
    RemoveWatchlistItems:(inputs)=>dispatch(RemoveWatchlistItems(inputs)),
    AddShortbookItems:(inputs)=>dispatch(AddShortbookItems(inputs)),
    RemoveShortbookItems:(inputs)=>dispatch(RemoveShortbookItems(inputs)),
    getBranchListAction: () => dispatch(getBranchListAction()),
    AddToCartAction: (body) => dispatch(AddToCartAction(body)),
    CartCount: (body) => dispatch(CartCount(body)),
    





    // GetPdpPageAlternatives: ( c_cont_code, limitNumber) => dispatch ( GetPdpPageAlternatives(c_cont_code,limitNumber)),
});

const PDPPageContainer = connect(mapStateToProps, mapDispatchToProps )(PDPPage);
export default PDPPageContainer;