import AddItemsPage from "./AddItemsPage";
import { State } from "../../../../rootReducer";
import { CategoryListAction,BrandListAction,VariationsAllListPageAction,ItemVariationPageAction} from "../../../../common/action";
import { connect } from "react-redux";

import "./css/PaymentPage.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    categoryListResult:state.categoryListResult,
    brandListResult:state.brandListResult,
    variationsAllListResult:state.variationsAllListResult,
    itemVariationPageResult:state.itemVariationPageResult,
});

const mapDispatchToProps = (dispatch) => ({
    CategoryListAction: () => dispatch(CategoryListAction()),
    BrandListAction: () => dispatch(BrandListAction()),
    VariationsAllListPageAction: () => dispatch(VariationsAllListPageAction()),
    ItemVariationPageAction: () => dispatch(ItemVariationPageAction()),
});

export const AddItemsPageContainer = connect(mapStateToProps,mapDispatchToProps)(AddItemsPage);


