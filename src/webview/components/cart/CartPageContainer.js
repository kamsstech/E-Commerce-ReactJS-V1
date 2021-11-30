import CartPage from "./CartPage";
import "./css/CartStyle.css";
// import './css/InputsStyles.css'";
import { connect } from "react-redux";
// import { state } from "../../../rootReducer";
import { CartCount, DeleteByIdAction, DeleteBySellerAction, getBranchListAction, GetCartItemAction, getProfileInfo, MoveToShortAction, OrderCreditLimit, PlaceOrder, ShortbookCount, UpdateCartItemAction, WatchlistCount } from "../../../common/action";


const mapStateToProps = (state) => ({
    
    getCartItemResult: state.getCartItemResult,
    getProfileInfoResult: state.getProfileInfoResult,
    deleteBySellerResult: state.deleteBySellerResult,
    deleteByIdResult: state.deleteByIdResult,
    moveToShortResult: state.moveToShortResult,
    updateCartItemResult: state.updateCartItemResult,
    branchListResult: state.branchListResult,
    placeOrderResult: state.placeOrderResult,
    orderCreditLimitResult: state.orderCreditLimitResult,
    
  });

  const mapDispatchToProps = (dispatch) => ({

    GetCartItemAction: (body) => dispatch(GetCartItemAction(body)),
    getProfileInfo: () => dispatch(getProfileInfo()),    
    getBranchListAction: () => dispatch(getBranchListAction()),
    ShortbookCount: () => dispatch(ShortbookCount()),
    WatchlistCount: () => dispatch(WatchlistCount()),
    CartCount: (body) => dispatch(CartCount(body)),
    DeleteBySellerAction: (body) => dispatch(DeleteBySellerAction(body)),
    DeleteByIdAction: (body) => dispatch(DeleteByIdAction(body)),
    MoveToShortAction: (body) => dispatch(MoveToShortAction(body)),
    UpdateCartItemAction: (body) => dispatch(UpdateCartItemAction(body)),
    PlaceOrder: (body) => dispatch(PlaceOrder(body)),
    OrderCreditLimit: (body) => dispatch(OrderCreditLimit(body)),
    
    
  });
  

  const CartPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartPage);

  export default CartPageContainer;