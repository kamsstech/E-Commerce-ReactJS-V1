import AddVariationsPage from "./AddVariationsPage";
// import { State } from "../../../rootReducer";
import { AddVariationsPageAction } from "../../../../common/action";
import { connect } from "react-redux";

import "./css/ProfileStyles.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    addVariationsPageResult: state.addVariationsPageResult,
});

const mapDispatchToProps = (dispatch) => ({
    AddVariationsPageAction: (body) => dispatch(AddVariationsPageAction(body)),
});

export const AddVariationsPageContainer = connect(mapStateToProps,mapDispatchToProps)(AddVariationsPage);

