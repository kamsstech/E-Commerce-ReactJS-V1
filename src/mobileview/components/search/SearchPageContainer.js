import SearchPage from "./SearchPage";
import "./css/SearchStyles.css";
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import { search } from "../../../common/action";

const mapStateToProps = (state: State) => ({
  searchResult: state.search
});

const mapDispatchToProps = (dispatch: any) => ({
  search: (searchKey: string | number) => dispatch(search(searchKey))
});

export const SearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
