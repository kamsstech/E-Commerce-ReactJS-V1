import RegisterDetailsPage from "./RegisterDetailsPage";
import { State } from "../../../rootReducer";
import { registerDetails , CityListAction,AreaListAction, GSTListAction, StateListAction} from "../../../common/action";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
    registerDetailsResult: state.registerDetails,
    stateListResult: state.stateListResult,
    cityListResult: state.cityListResult,
    areaListResult: state.areaListResult,
    gstListResult: state.gstListResult
});
  
const mapDispatchToProps = (dispatch) => ({
    registerDetails: (inputs) => dispatch(registerDetails(inputs)),
    StateListAction: () => dispatch(StateListAction()),
    CityListAction: (stateCode) => dispatch(CityListAction(stateCode)),
    AreaListAction: (cityCode) => dispatch(AreaListAction(cityCode)),
    GSTListAction: () => dispatch(GSTListAction())
});
export const RegisterDetailsPageContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterDetailsPage);