import AlternativesPage from "./AlternativePage";
import { connect } from "react-redux";
import { State } from "../../../rootReducer";

import { GetPdpPageAlternatives} from "../../../common/action";

import "./css/AlternativeStyle.css";

const mapStateToProps = (state: State) => ({

  pdpPageAlternativesResult : state.pdpPageAlternativesResult,
});

const mapDispatchToProps = (dispatch: any) => ({

    GetPdpPageAlternatives: ( c_cont_code: string, limitNumber: number) => dispatch ( GetPdpPageAlternatives(c_cont_code, limitNumber))
});

export const AlternativesPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlternativesPage);
