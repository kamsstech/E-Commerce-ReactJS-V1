import PDPNAPage from "./PDPNAPage";
import "./css/PdpNaStyle.css";
import "./css/pdpNAHeader.css";


// import './css/InputsStyles.css'
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import { GetPdpNAPageItems, ScheduleDemoAction, ScheduleDemoEmailAction, submitDemoRequestAction } from '../../../common/action';

const mapStateToProps = (state) => ({
    pdpNAPageItemsResult: state.pdpNAPageItemsResult,
    demoRequestResult: state.demoRequestResult,
    scheduledemoRequestResult: state.scheduledemoRequestResult,
    scheduleDemoEmailResult: state.scheduleDemoEmailResult,
    
});
const mapDispatchToProps = (dispatch) => ({
    GetPdpNAPageItems: (itemCode) => dispatch(GetPdpNAPageItems(itemCode)),
    submitDemoRequestAction: (inputs) => dispatch(submitDemoRequestAction(inputs)),
    ScheduleDemoAction: (inputs) => dispatch(ScheduleDemoAction(inputs)),
    ScheduleDemoEmailAction: (body) => dispatch(ScheduleDemoEmailAction(body)),
});

const PDPNAPageContainer = connect(mapStateToProps, mapDispatchToProps )(PDPNAPage);
export default PDPNAPageContainer;