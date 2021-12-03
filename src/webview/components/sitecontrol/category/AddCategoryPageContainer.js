import AddCategoryPage from "./AddCategoryPage";
// import { State } from "../../../rootReducer";
import { AddCategoryAction } from "../../../../common/action";
import { connect } from "react-redux";

import "./css/ProfileStyles.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    addCategoryResult: state.addCategoryResult,
});

const mapDispatchToProps = (dispatch) => ({
    AddCategoryAction: (inputs) => dispatch(AddCategoryAction(inputs)),
});

export const AddCategoryPageContainer = connect(mapStateToProps,mapDispatchToProps)(AddCategoryPage);
