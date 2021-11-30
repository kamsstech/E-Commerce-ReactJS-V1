import AddBannerPage from "./AddBannerPage";
import { State } from "../../../../rootReducer";
import {AddBannerAction} from "../../../../common/action";
import { connect } from "react-redux";

import "./css/ProfileStyles.css";
// import './css/InputsStyles.css'";

const mapStateToProps = (state) => ({
    addBannerResult: state.addBannerResult, 

   });

const mapDispatchToProps = (dispatch) => ({
    AddBannerAction: (inputs) => dispatch(AddBannerAction(inputs)),   
   
});

export const AddBannerPageContainer = connect(mapStateToProps,mapDispatchToProps)(AddBannerPage);

