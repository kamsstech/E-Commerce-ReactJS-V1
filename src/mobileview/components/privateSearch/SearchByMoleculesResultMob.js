import * as React from "react";
import { Link } from "react-router-dom";



const SearchByMoleculesResult = (props) => {
    const { searchByMoleculeResult } = props;

    return (
        <>


       

{
        searchByMoleculeResult !== undefined && searchByMoleculeResult.map((item, index) => (
            <div key={index}>
            {/* <h6 className="mob-search-sponsered-text">Sponsored</h6> */}
            <div className="mob-result-sec">
        {/* <h5 className="mob-result-product">{item.c_molecule_name.toLowerCase()}</h5> */}
        <h5 className="mob-result-product">{item.c_molecule_name}</h5>
        <h5 className="mob-result-product"><span>₹</span> {item.n_max_mrp}</h5>
            </div>
        <h6 className="mob-result-mfr">{item.c_item_name}</h6>
        {/* <h6 className="mob-result-mfr">Manufactures : {item.c_item_mfac.toLowerCase()}</h6> */}
        <h6 className="mob-result-pack">Pack Size: {item.c_pack_size}</h6>
            <h6 className="mob-result-product-text">Molecules</h6>
            <p className="mob-result-seperator1"></p>
          </div>

    ))}
</>
  );
};

export default SearchByMoleculesResult;