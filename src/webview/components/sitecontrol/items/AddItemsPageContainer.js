import AddItemsPage from "./AddItemsPage";
import { State } from "../../../../rootReducer";
import { CategoryListAction,BrandListAction,VariationsAllListPageAction,ItemVariationPageAction,ItemAddPageAction} from "../../../../common/action";
import { connect } from "react-redux";

import "./css/PaymentPage.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    categoryListResult:state.categoryListResult,
    brandListResult:state.brandListResult,
    variationsAllListResult:state.variationsAllListResult,
    itemVariationPageResult:state.itemVariationPageResult,
    itemAddPageResult:state.itemAddPageResult
});

const mapDispatchToProps = (dispatch) => ({
    ItemAddPageAction: (body) => dispatch(ItemAddPageAction(body)),
    CategoryListAction: () => dispatch(CategoryListAction()),
    BrandListAction: () => dispatch(BrandListAction()),
    VariationsAllListPageAction: () => dispatch(VariationsAllListPageAction()),
    ItemVariationPageAction: (body) => dispatch(ItemVariationPageAction(body)),
});

export const AddItemsPageContainer = connect(mapStateToProps,mapDispatchToProps)(AddItemsPage);


