import OrderDetailsPage from "./OrderDetailsPage";
// import './css/InputsStyles.css'
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import { OrderDetailCall} from "../../../common/action";



const mapStateToProps = (state) => ({
    OrderDetailResult: state.OrderDetailResult, 
});

const mapDispatchToProps = (dispatch) => ({
    OrderDetailCall: (body) => dispatch(OrderDetailCall(body)), 
     
});
const OrderDetailsPageContainer = connect(mapStateToProps, mapDispatchToProps )(OrderDetailsPage);
export default OrderDetailsPageContainer;

