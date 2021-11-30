import PaymentPage from './PaymentPage';
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import {GetSellerWisePayOut,GetSellerWisePayPagination,GetSellerPayDetails} from "../../../common/action";
// import './css/InputsStyles.css'";
const mapStateToProps = (state) => ({
    sellerwisePayoutResult: state.sellerwisePayoutResult, 
    sellerwisePayPaginationResult: state.sellerwisePayPaginationResult, 
    sellerPayDetailsResult: state.sellerPayDetailsResult, 
    
});
const mapDispatchToProps = (dispatch) => ({
    GetSellerWisePayOut: (inputs) => dispatch(GetSellerWisePayOut(inputs)),   
    GetSellerWisePayPagination: (inputs) => dispatch(GetSellerWisePayPagination(inputs)),
    GetSellerPayDetails: (inputs) => dispatch(GetSellerPayDetails(inputs)),   

    
});
const PaymentPageContainer = connect(mapStateToProps,mapDispatchToProps)(PaymentPage);

export default PaymentPageContainer