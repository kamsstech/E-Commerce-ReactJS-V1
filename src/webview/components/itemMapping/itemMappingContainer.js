import ItemMapping from './itemMapping';
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import {GetItemMasterMapCount,GetItemMasterMap,MoveOwnItemMasterMap,MoveOwnAllItemMasterMap,MoveBlockItemMasterMap,MoveConfirmItemMasterMap,DeleteItemMasterMap ,GetItemSubMasterMapCount,GetItemSubMasterMap,MoveOwnItemSubMasterMap,MoveOwnAllItemSubMasterMap,MoveBlockItemSubMasterMap,MoveConfirmItemSubMasterMap,DeleteItemSubMasterMap,SearchByProduct,GetItemSubMasterSearch} from "../../../common/action";
// import './css/InputsStyles.css'";
const mapStateToProps = (state) => ({
    itemMasterMapCountResult: state.itemMasterMapCountResult, 
    itemMasterMapResult: state.itemMasterMapResult, 
    ownItemMasterMapResult: state.ownItemMasterMapResult, 
    ownAllItemMasterMapResult: state.ownAllItemMasterMapResult,
    blockItemMasterMapResult: state.blockItemMasterMapResult,
    confirmItemMasterMapResult: state.confirmItemMasterMapResult, 
    deleteItemMasterMapResult: state.deleteItemMasterMapResult,
    itemSubMasterMapCountResult: state.itemSubMasterMapCountResult, 
    itemSubMasterMapResult: state.itemSubMasterMapResult, 
    ownItemSubMasterMapResult: state.ownItemSubMasterMapResult, 
    ownAllItemSubMasterMapResult: state.ownAllItemSubMasterMapResult,
    blockItemSubMasterMapResult: state.blockItemSubMasterMapResult,
    confirmItemSubMasterMapResult: state.confirmItemSubMasterMapResult, 
    deleteItemSubMasterMapResult: state.deleteItemSubMasterMapResult,
    searchByProductResult: state.searchByProductResult,
    itemSubMasterSearchResult: state.itemSubMasterSearchResult, 
});
const mapDispatchToProps = (dispatch) => ({
    GetItemMasterMapCount: (inputs) => dispatch(GetItemMasterMapCount(inputs)),   
    GetItemMasterMap: (inputs) => dispatch(GetItemMasterMap(inputs)),   
    MoveOwnItemMasterMap: (inputs) => dispatch(MoveOwnItemMasterMap(inputs)),   
    MoveOwnAllItemMasterMap: (inputs) => dispatch(MoveOwnAllItemMasterMap(inputs)),
    MoveBlockItemMasterMap: (inputs) => dispatch(MoveBlockItemMasterMap(inputs)),
    MoveConfirmItemMasterMap: (inputs) => dispatch(MoveConfirmItemMasterMap(inputs)),
    DeleteItemMasterMap: (inputs) => dispatch(DeleteItemMasterMap(inputs)),
    GetItemSubMasterMapCount: (inputs) => dispatch(GetItemSubMasterMapCount(inputs)),   
    GetItemSubMasterMap: (inputs) => dispatch(GetItemSubMasterMap(inputs)),   
    MoveOwnItemSubMasterMap: (inputs) => dispatch(MoveOwnItemSubMasterMap(inputs)),   
    MoveOwnAllItemSubMasterMap: (inputs) => dispatch(MoveOwnAllItemSubMasterMap(inputs)),
    MoveBlockItemSubMasterMap: (inputs) => dispatch(MoveBlockItemSubMasterMap(inputs)),
    MoveConfirmItemSubMasterMap: (inputs) => dispatch(MoveConfirmItemSubMasterMap(inputs)),
    DeleteItemSubMasterMap: (inputs) => dispatch(DeleteItemSubMasterMap(inputs)),
    SearchByProduct: (body) => dispatch(SearchByProduct(body)),
    GetItemSubMasterSearch: (inputs) => dispatch(GetItemSubMasterSearch(inputs)),
});
export const itemMappingContainer = connect(mapStateToProps,mapDispatchToProps)(ItemMapping);

// export default itemMappingContainer;