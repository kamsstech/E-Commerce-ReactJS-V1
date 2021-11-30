import PLPPage from "./PLPPage";
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import "./css/PLPStyle.css";
import { GetFastMovingItems, GetPdpPageAlternatives } from "../../../common/action";

const mapStateToProps = (state: State) => ({
    fastMovingItemsResult: state.fastMovingItemsResult, 
    pdpPageAlternativesResult : state.pdpPageAlternativesResult,
});

const mapDispatchToProps = (dispatch: any) => ({
    GetFastMovingItems: () => dispatch(GetFastMovingItems()), 
    GetPdpPageAlternatives: ( c_cont_code: string, limitNumber : number) => dispatch ( GetPdpPageAlternatives(c_cont_code,limitNumber)),
});
export const PLPPageContainer =connect (mapStateToProps,mapDispatchToProps) (PLPPage);