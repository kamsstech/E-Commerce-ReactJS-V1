import * as React from "react";
import { Link } from "react-router-dom";



const SearchBySellerResultMob = (props) => {
    const {  searchBySellerResult } = props;

    // console.log(searchBySellerResult)
    return (
        <>

 

        {searchBySellerResult !== undefined && searchBySellerResult.map((item, index) => (
    <div  key={index}>
    <div className="mob-result-sec">
        {/* <h5 className="mob-result-product">{item.c_seller_name.toLowerCase()}</h5> */}
        <h5 className="mob-result-product">{item.c_seller_name}</h5>
    </div>
        <h6 className="mob-result-mfr">Ongoing Offers: {item.n_ongoing_scheme_count}</h6>
    <h6 className="mob-result-product-text">Sellers</h6>
    <p className="mob-result-seperator1"></p>
  </div>

 ))}
        </>
    );
};

export default SearchBySellerResultMob;