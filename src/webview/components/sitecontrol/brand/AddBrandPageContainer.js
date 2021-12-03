import AddBrandPage from "./AddBrandPage";
// import { State } from "../../../rootReducer";
import { AddBrandAction } from "../../../../common/action";
import { connect } from "react-redux";

import "./css/ProfileStyles.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    addBrandResult: state.addBrandResult,
});

const mapDispatchToProps = (dispatch) => ({
    AddBrandAction: (inputs) => dispatch(AddBrandAction(inputs)),
});

export const AddBrandPageContainer = connect(mapStateToProps,mapDispatchToProps)(AddBrandPage);

