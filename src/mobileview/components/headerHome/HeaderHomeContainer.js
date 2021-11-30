import HeaderHome from "./HeaderHome";
import "./css/HeaderStyle.css";
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import {  CartCount, getBranchListAction, GetSearchParameters } from "../../../common/action";

// const mapDispatchToProps = (dispatch) => ({
//     GetSearchParameters: ( searchObject) => dispatch (GetSearchParameters(searchObject))
// });

const mapStateToProps = (state) => ({
    cartCountRes: state.cartCountRes,
    branchListResult: state.branchListResult,
   
});

const mapDispatchToProps = (dispatch) => ({
    getBranchListAction: () => dispatch(getBranchListAction()),
    CartCount: (body) => dispatch(CartCount(body)),
});

export const HeaderHomeContainer =  connect (mapStateToProps,mapDispatchToProps)(HeaderHome);
