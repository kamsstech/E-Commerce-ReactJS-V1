import AddItemsPage from "./AddItemsPage";
import { State } from "../../../../rootReducer";
import { CategoryListAction,BrandListAction,VariationsAllListPageAction} from "../../../../common/action";
import { connect } from "react-redux";

import "./css/PaymentPage.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    categoryListResult:state.categoryListResult,
    brandListResult:state.brandListResult,
    variationsAllListResult:state.variationsAllListResult,
});

const mapDispatchToProps = (dispatch) => ({
    CategoryListAction: () => dispatch(CategoryListAction()),
    BrandListAction: () => dispatch(BrandListAction()),
    VariationsAllListPageAction: () => dispatch(VariationsAllListPageAction()),
});

export const AddItemsPageContainer = connect(mapStateToProps,mapDispatchToProps)(AddItemsPage);


