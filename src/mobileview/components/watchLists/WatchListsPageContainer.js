
import WatchListsPage from "./WatchListsPage";
import { State } from "../../../rootReducer";
import {  saveProfileInfo} from "../../../common/action";
import { connect } from "react-redux";

import "./css/WatchlistPageStyle.css";

const mapStateToProps = (state) => ({
    saveProfileInfoResult: state.saveProfileInfo,
    
});

const mapDispatchToProps = (dispatch) => ({
    saveProfileInfo: (inputs,isMobile) => dispatch(saveProfileInfo(inputs,isMobile)),
    
});

export const WatchListsPageContainer = connect(mapStateToProps, mapDispatchToProps)(WatchListsPage);