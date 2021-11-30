import FinalPaymentPage from "./FinalPayment";
import "./css/FinalPaymentPage.css";
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import {GetSellerPayDetails,GetSellerPayOrder} from "../../../common/action";
const mapStateToProps = (state) => ({
    sellerPayDetailsResult: state.sellerPayDetailsResult, 
    sellerPayOrderResult: state.sellerPayOrderResult, 
    
});
const mapDispatchToProps = (dispatch) => ({
    GetSellerPayDetails: (inputs) => dispatch(GetSellerPayDetails(inputs)),   
    GetSellerPayOrder: (inputs) => dispatch(GetSellerPayOrder(inputs)),   
});
const FinalPaymentPageContainer = connect(mapStateToProps,mapDispatchToProps)(FinalPaymentPage);
export default FinalPaymentPageContainer