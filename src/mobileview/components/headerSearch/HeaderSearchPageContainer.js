import HeaderSearchPage from "./HeaderSearchPage";
import "./css/HeaderStyle.css";
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import { SearchByProduct, SearchBySeller, SearchByMolecule, SearchByMfc, 
    getProfileInfo, getBranchListAction, setDefaultBranch,  GetSearchParameters } from "../../../common/action";

const mapStateToProps = (state) => ({
    searchByProductResult: state.searchByProductResult, 
    searchBySellerResult: state.searchBySellerResult,
    searchByMoleculeResult: state.searchByMoleculeResult,
    searchByMfcResult: state.searchByMfcResult,
    getProfileInfoResult: state.getProfileInfoResult,
    branchListResult: state.branchListResult,
    defaultBranchResult: state.defaultBranchResult,
    searchParametersResult: state.searchParametersResult
});

const mapDispatchToProps = (dispatch) => ({
    SearchByProduct: (searchKey) => dispatch(SearchByProduct(searchKey)), 
    SearchBySeller: (searchKey) => dispatch(SearchBySeller(searchKey)),
    SearchByMolecule: (searchKey) => dispatch(SearchByMolecule(searchKey)),
    SearchByMfc: (searchKey) => dispatch(SearchByMfc(searchKey)),
    getProfileInfo: () => dispatch(getProfileInfo()),
    getBranchListAction: () => dispatch(getBranchListAction()),
    setDefaultBranch: (firmId) => dispatch(setDefaultBranch(firmId)),
    GetSearchParameters: ( searchObject ) => dispatch (GetSearchParameters(searchObject))
});

export const HeaderSearchPageContainer =  connect (mapStateToProps,mapDispatchToProps)(HeaderSearchPage);
