import OrderHistoryPage from "./OrderHistoryPage";

import { connect } from "react-redux";
// import { State } from "../../../rootReducer";
import "./css/OrderHistoryStyle.css";
// import './css/InputsStyles.css'
import { getAllOrders,getDistributors,FreqorderAction,  Getmanufactureraction, SellersAction, BrandsAction } from "../../../common/action";



const mapStateToProps = (state) => ({
  orderHistoryIndexResult: state.orderHistoryIndexResult,
  allOrdersResult:state.allOrdersResult,
  distributorResult:state.distributorResult,
  freqorderResponse : state.freqorderResponse,
  getmanufacturerResponse : state.getmanufacturerResponse,
  brandsResponse : state.brandsResponse,
  sellersResponse : state.sellersResponse

});
const mapDispatchToProps = (dispatch) => ({
getAllOrders: (body) => dispatch(getAllOrders(body)),

getDistributors:() =>dispatch(getDistributors()),
FreqorderAction: (inputs) => dispatch(FreqorderAction(inputs)),
Getmanufactureraction : () => dispatch(Getmanufactureraction()),                            
SellersAction : () => dispatch(SellersAction()),
BrandsAction : () => dispatch(BrandsAction())
});

const OrderHistoryPageContainer = connect (mapStateToProps,mapDispatchToProps )(OrderHistoryPage);
export default OrderHistoryPageContainer;
