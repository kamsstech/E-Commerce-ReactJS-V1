import CustomersPage from "./CustomersPage";
import { State } from "../../../../rootReducer";
import { CustomerListPageAction} from "../../../../common/action";
import { connect } from "react-redux";

import "./css/PaymentPage.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    customerListPageResult:state.customerListPageResult,
});

const mapDispatchToProps = (dispatch) => ({
    CustomerListPageAction: (body) => dispatch(CustomerListPageAction(body)),
});

export const CustomersPageContainer = connect(mapStateToProps,mapDispatchToProps)(CustomersPage);


