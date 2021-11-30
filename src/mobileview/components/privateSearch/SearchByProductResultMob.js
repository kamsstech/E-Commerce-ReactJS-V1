import * as React from "react";
import { Link } from "react-router-dom";



const SearchByProductResultMob = (props) => {
  const {  searchByProductResult } = props;
  // console.log(searchByProductResult, "searchByProductResult")
  return (
    <>

       

{
        searchByProductResult !== undefined && searchByProductResult.map((item, index) => (
            <div key={index}>
               <Link to={`/pdp/${item.c_item_ucode}`}>
            {/* <h6 className="mob-search-sponsered-text">Sponsored</h6> */}
            <div className="mob-result-sec">
        {/* <h5 className="mob-result-product">{item.c_item_name.toLowerCase()}</h5> */}
        <h5 className="mob-result-product">{item.c_item_name}</h5>
        <h5 className="mob-result-product"><span>₹</span> {item.n_mrp}</h5>
            </div>
        <h6 className="mob-result-mfr">{item.c_manufacturer}</h6>
        <h6 className="mob-result-pack">Pack Size: {item.c_pack_size}</h6>
            <h6 className="mob-result-product-text">Products</h6>
            <p className="mob-result-seperator1"></p>
            </Link>
          </div>

    ))}
</>
  );
};

export default SearchByProductResultMob;