import HeaderPage from "./HeaderPage";
import "./css/HeaderStyle.css";
import { connect } from "react-redux";
// import { State } from "../../../rootReducer";
// import './css/InputsStyles.css'";
import {
  CategoryListsAction,
  SearchByProduct,
  SearchBySeller,
  SearchByMolecule,
  SearchByMfc,
  getProfileInfo,
  getBranchListAction,
  setDefaultBranch,
  GetOrderHistoryIndexParameters,
  NotificationCount,
  ShortbookCount,
  WatchlistCount,
  GetPdpPageItems,
  GetPdpPageSellerDetails,
  CartCount,
  AddToCartAction,
  BarcodeSearch,
} from "../../../common/action";

const mapStateToProps = (state) => ({
  barcodeSearchResult: state.barcodeSearchResult,
  CategoryListsResult: state.CategoryListsResult,
  searchByProductResult: state.searchByProductResult,
  searchBySellerResult: state.searchBySellerResult,
  searchByMoleculeResult: state.searchByMoleculeResult,
  searchByMfcResult: state.searchByMfcResult,
  getProfileInfoResult: state.getProfileInfoResult,
  branchListResult: state.branchListResult,
  defaultBranchResult: state.defaultBranchResult,
  notificationCountRes: state.notificationCountRes,
  shortbookCountRes: state.shortbookCountRes,
  watchlistCountRes: state.watchlistCountRes,
  cartCountRes: state.cartCountRes,
  addToCartResultRes: state.addToCartResult,
  pdpPageItemsResult: state.pdpPageItemsResult,
  pdpPageSellerDetailsResult: state.pdpPageSellerDetailsResult,
  addToCartResult: state.addToCartResult,
});

const mapDispatchToProps = (dispatch) => ({
  BarcodeSearch: (body) => dispatch(BarcodeSearch(body)),
  getBranchListAction: () => dispatch(getBranchListAction()),
  AddToCartAction: (body) => dispatch(AddToCartAction(body)),
  CategoryListsAction: () => dispatch(CategoryListsAction()),
  SearchByProduct: (body) => dispatch(SearchByProduct(body)),
  SearchBySeller: (body) => dispatch(SearchBySeller(body)),
  SearchByMolecule: (body) => dispatch(SearchByMolecule(body)),
  SearchByMfc: (body) => dispatch(SearchByMfc(body)),
  getProfileInfo: () => dispatch(getProfileInfo()),
  setDefaultBranch: (firmId) => dispatch(setDefaultBranch(firmId)),
  GetOrderHistoryIndexParameters: (index) =>
    dispatch(GetOrderHistoryIndexParameters(index)),
  CartCount: (body) => dispatch(CartCount(body)),
  NotificationCount: () => dispatch(NotificationCount()),
  ShortbookCount: () => dispatch(ShortbookCount()),
  WatchlistCount: () => dispatch(WatchlistCount()),
  GetPdpPageItems: (body) => dispatch(GetPdpPageItems(body)),
  GetPdpPageSellerDetails: (body) =>
    dispatch(GetPdpPageSellerDetails(body)),
});

const HeaderPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderPage);
export default HeaderPageContainer;
