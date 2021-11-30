// import FooterPage from "./footerPage";
// import "./css/footerStyle.css";

import PaymentFooterPage from "./PaymentFooterPage";
import "./css/FooterStyle.css";
// import './css/InputsStyles.css'
import "../../../assets/slick/slick.css";
import "../../../assets/slick/slick-theme.css";
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import { footerSubscribe } from "../../../common/action";


const mapStateToProps = (state) => ({
     footerSubscribeResult: state.footerSubscribeResult
});

const mapDispatchToProps = (dispatch) => ({
    footerSubscribe:(email) =>dispatch(footerSubscribe(email))

});
  

const PaymentFooterPageContainer = connect(mapStateToProps, mapDispatchToProps)(PaymentFooterPage);
export default PaymentFooterPageContainer
