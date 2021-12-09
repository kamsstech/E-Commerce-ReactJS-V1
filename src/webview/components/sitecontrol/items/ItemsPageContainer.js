import ItemsPage from "./ItemsPage";
import { State } from "../../../../rootReducer";
import { ItemListPageAction} from "../../../../common/action";
import { connect } from "react-redux";

import "./css/PaymentPage.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    itemListPageResult:state.itemListPageResult,
});

const mapDispatchToProps = (dispatch) => ({
    ItemListPageAction: (body) => dispatch(ItemListPageAction(body)),
});

export const ItemsPageContainer = connect(mapStateToProps,mapDispatchToProps)(ItemsPage);

