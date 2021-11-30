import CategoryPage from "./CategoryPage";
import { State } from "../../../../rootReducer";
import { CategoryListPageAction} from "../../../../common/action";
import { connect } from "react-redux";

import "./css/PaymentPage.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    categoryListPageResult:state.categoryListPageResult,
});

const mapDispatchToProps = (dispatch) => ({
    CategoryListPageAction: (body) => dispatch(CategoryListPageAction(body)),
});

export const CategoryPageContainer = connect(mapStateToProps,mapDispatchToProps)(CategoryPage);

