import * as React from "react";
import { SearchResultEntity } from "../../../common/model";
import { Link } from "react-router-dom";

export interface Props {
  item: SearchResultEntity;
}

const RecentSearch = (props: Props) => {
  const item = props.item;
  console.log(props);
  return (
    <Link to={`/product-details/${item.ProductCode}`}>
      <div id="searchResult">
        <h5 className="mob-result-product">{item.Product.toLowerCase()}</h5>
        <h6 className="mob-result-mfr">{item.Mfr.toLowerCase()}</h6>
        <h6 className="mob-result-pack">Pack: {item.Pack}</h6>
        <p className="mob-result-seperator"></p>
      </div>
    </Link>
  );
};

export default RecentSearch;
