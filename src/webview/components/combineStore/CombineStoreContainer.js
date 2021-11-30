import CombineStore from "./CombineStore";
import { connect } from "react-redux";
import { Combine_NaStore, Combine_Store, GetStateCityArea, GetStoreCombineList, SaveUnCombineStore, UpdateCombineStore } from "../../../common/action";

const mapStateToProps = (state) => ({
    getStoreCombineListResult: state.getStoreCombineListResult,
    combineStoreResult: state.combineStoreResult,
    combineNaStoreResult: state.combineNaStoreResult,
    saveUnCombineStoreResult: state.saveUnCombineStoreResult,
    updateCombineStoreResult: state.updateCombineStoreResult,
    getStateCityAreaResult:state.getStateCityAreaResult
});
  
const mapDispatchToProps = (dispatch) => ({
    GetStoreCombineList: (body) => dispatch(GetStoreCombineList(body)),
    SaveUnCombineStore: (body) => dispatch(SaveUnCombineStore(body)),
    UpdateCombineStore: (body) => dispatch(UpdateCombineStore(body)),
    Combine_Store: (body) => dispatch(Combine_Store(body)),
    Combine_NaStore: (body) => dispatch(Combine_NaStore(body)),
    GetStateCityArea: (body) => dispatch(GetStateCityArea(body)),
});

const CombineStoreContainer = connect(mapStateToProps, mapDispatchToProps)(CombineStore);
export default CombineStoreContainer;
