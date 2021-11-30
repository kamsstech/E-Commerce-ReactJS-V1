import OrderToSellerShopMapped from "./OrderToSellerShopMapped";
import { connect } from "react-redux";
import "./css/OrderToSellerShopMapped.css";
// import './css/InputsStyles.css'
import {
  AreaListAction,
  CityListAction,
  GetGST_Type,
  GetMappedSellerList,
  getProfileInfo,
  GetSellerInfo,
  GetUnMappedCASList,
  GetUnMappedSellerList,
  GST_NumCheck,
  ScheduleDemoEmailAction,
  SearchArea,
  SearchCity,
  SearchMappedSellerList,
  SearchState,
  SearchUnMappedSellerList,
  SetPriorityMappedSeller,
  StateListAction,
  validateREGISTER,
} from "../../../common/action";

const mapStateToProps = (state) => ({
  getSellerInfoResult: state.getSellerInfoResult,
  getMappedSellerListResult: state.getMappedSellerListResult,
  getUnMappedSellerListResult: state.getUnMappedSellerListResult,
  getUnMappedCASListResult: state.getUnMappedCASListResult,
  searchMappedSellerListResult: state.searchMappedSellerListResult,
  searchUnMappedSellerListResult: state.searchUnMappedSellerListResult,
  setPriorityMappedSellerResult: state.setPriorityMappedSellerResult,
  getGST_TypeResult: state.getGST_TypeResult,
  gST_NumCheckResult: state.gST_NumCheckResult,
  getProfileInfoResult: state.getProfileInfoResult,
  stateListResult: state.stateListResult,
  cityListResult: state.cityListResult,
  areaListResult: state.areaListResult,
  searchStateResult: state.searchStateResult,
  searchCityResult: state.searchCityResult,
  searchAreaResult: state.searchAreaResult,
  validateREGISTERResult: state.validateREGISTERResult,
  scheduleDemoEmailResult: state.scheduleDemoEmailResult,
});

const mapDispatchToProps = (dispatch) => ({
  GetSellerInfo: (body) => dispatch(GetSellerInfo(body)),
  GetMappedSellerList: (body) => dispatch(GetMappedSellerList(body)),
  GetUnMappedCASList: (body) => dispatch(GetUnMappedCASList(body)),

  GetUnMappedSellerList: (body) => dispatch(GetUnMappedSellerList(body)),
  SearchMappedSellerList: (body) => dispatch(SearchMappedSellerList(body)),
  SearchUnMappedSellerList: (body) => dispatch(SearchUnMappedSellerList(body)),
  SetPriorityMappedSeller: (body) => dispatch(SetPriorityMappedSeller(body)),
  GetGST_Type: () => dispatch(GetGST_Type()),
  GST_NumCheck: (body) => dispatch(GST_NumCheck(body)),
  getProfileInfo: () => dispatch(getProfileInfo()),
  StateListAction: () => dispatch(StateListAction()),
  CityListAction: (state) => dispatch(CityListAction(state)),
  AreaListAction: (city) => dispatch(AreaListAction(city)),
  SearchStateAction: (body) => dispatch(SearchState(body)),
  SearchCityAction: (body) => dispatch(SearchCity(body)),
  SearchAreaAction: (body) => dispatch(SearchArea(body)),
  validateREGISTER: (body) => dispatch(validateREGISTER(body)),
  ScheduleDemoEmailAction: (body) => dispatch(ScheduleDemoEmailAction(body)),
});

const OrderToSellerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderToSellerShopMapped);

export default OrderToSellerContainer;