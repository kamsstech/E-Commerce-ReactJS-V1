import RegisterDetailsPage from "./RegisterDetailsPage";
// import { State } from "../../../rootReducer";
import { registerDetails ,StateListAction, CityListAction,AreaListAction, imageupload, imagedelete, GetGST_Type, GSTListAction, GetStateCityArea, profileDetails} from "../../../common/action";
import { connect } from "react-redux";
import './css/RegisterDetailsStyles.css'

const mapStateToProps = (state) => ({
    registerDetailsResult: state.registerDetails,
    profileDetailsResult: state.profileDetailsResult,
    // stateListResult: state.stateListResult,
    // cityListResult: state.cityListResult,
    // areaListResult: state.areaListResult,
    // getGST_TypeResult: state.getGST_TypeResult,
    imageUploadResult: state.imageUploadResult,
    imageDeleteResult: state.imageDeleteResult,
    getStateCityAreaResult:state.getStateCityAreaResult,
    gstListResult: state.gstListResult,

});
  
const mapDispatchToProps = (dispatch) => ({
    registerDetails: (body) => dispatch(registerDetails(body)),
    profileDetails: () => dispatch(profileDetails()),

    

    // StateListAction: () => dispatch(StateListAction()),
    // CityListAction: (state) => dispatch(CityListAction(state)),
    // AreaListAction: (city) => dispatch(AreaListAction(city)),
    imageupload: (form) => dispatch(imageupload(form)),
    imagedelete: (body) => dispatch(imagedelete(body)),
    GetGST_Type: () => dispatch(GetGST_Type()), 
    GetStateCityArea: (body) => dispatch(GetStateCityArea(body)),
    GSTListAction: () => dispatch(GSTListAction()),
    // GSTListAction: () => dispatch(GSTListAction())
});


const RegisterDetailsPageContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterDetailsPage);
export default RegisterDetailsPageContainer;
