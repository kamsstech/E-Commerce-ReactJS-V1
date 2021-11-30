import ProductPage from "./ProductPage";
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import { GetPdpPageItems, GetPdpPageSellerDetails, GetPdpPageAlternatives} from "../../../common/action";
import "./css/ProductStyles.css";

const mapStateToProps = (state) => ({
  pdpPageItemsResult: state.pdpPageItemsResult,
  pdpPageSellerDetailsResult: state.pdpPageSellerDetailsResult,
  pdpPageAlternativesResult : state.pdpPageAlternativesResult,
});

const mapDispatchToProps = (dispatch) => ({
  GetPdpPageItems: (body) => dispatch(GetPdpPageItems(body)), 
  GetPdpPageSellerDetails: (body) => dispatch(GetPdpPageSellerDetails(body)),
  GetPdpPageAlternatives: ( c_cont_code, limitNumber) => dispatch ( GetPdpPageAlternatives(c_cont_code, limitNumber))
});

export const ProductPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
