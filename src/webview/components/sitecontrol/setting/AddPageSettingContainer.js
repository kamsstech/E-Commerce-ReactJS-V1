import AddPage from "./AddPage";
// import { State } from "../../../rootReducer";
import { AddPageAction } from "../../../../common/action";
import { connect } from "react-redux";

import "./css/ProfileStyles.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    addPageResult: state.addPageResult,
});

const mapDispatchToProps = (dispatch) => ({
    AddPageAction: (inputs) => dispatch(AddPageAction(inputs)),
});

export const AddPageSettingContainer = connect(mapStateToProps,mapDispatchToProps)(AddPage);

