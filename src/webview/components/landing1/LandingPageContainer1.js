import LandingPage1 from "./LandingPage1";
import "./css/LandingStyle.css";
import "../../../assets/slick/slick.css";
import "../../../assets/slick/slick-theme.css";
import { connect } from "react-redux";
// import './css/InputsStyles.css'";
import { SearchByProduct,CallLandingPage, submitDemoRequestAction, ScheduleDemoAction,scheduledemoRequestResult, SearchByNAProduct, ScheduleDemoEmailAction } from "../../../common/action";


const mapStateToProps = (state) => ({
    searchByProductResult: state.searchByProductResult, 
    searchByNAProductResult: state.searchByNAProductResult, 
    landingPageResult: state.landingPageResult,
    demoRequestResult: state.demoRequestResult,
    scheduledemoRequestResult: state.scheduledemoRequestResult,
    scheduleDemoEmailResult: state.scheduleDemoEmailResult,
});


const mapDispatchToProps = (dispatch) => ({

    SearchByProduct: (searchKey) => dispatch(SearchByProduct(searchKey)),
    SearchByNAProduct: (body) => dispatch(SearchByNAProduct(body)),
    CallLandingPage:(locationUrl) =>dispatch(CallLandingPage(locationUrl)),
    submitDemoRequestAction: (inputs) => dispatch(submitDemoRequestAction(inputs)),
    ScheduleDemoAction: (inputs) => dispatch(ScheduleDemoAction(inputs)),
    ScheduleDemoEmailAction: (body) => dispatch(ScheduleDemoEmailAction(body)),


});
  

const LandingPageContainer1 = connect(mapStateToProps, mapDispatchToProps)(LandingPage1);
export default LandingPageContainer1;
