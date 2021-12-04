import AddItemsPage from "./AddItemsPage";
import { State } from "../../../../rootReducer";
import { CategoryListAction,BrandListAction} from "../../../../common/action";
import { connect } from "react-redux";

import "./css/PaymentPage.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    categoryListResult:state.categoryListResult,
    brandListResult:state.brandListResult,
    // customerListPageResult:state.customerListPageResult,
});

const mapDispatchToProps = (dispatch) => ({
    CategoryListAction: () => dispatch(CategoryListAction()),
    BrandListAction: () => dispatch(BrandListAction()),
});

export const AddItemsPageContainer = connect(mapStateToProps,mapDispatchToProps)(AddItemsPage);


