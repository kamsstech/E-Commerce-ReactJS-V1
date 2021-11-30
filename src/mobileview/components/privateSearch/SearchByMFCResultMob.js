import * as React from "react";
import { Link } from "react-router-dom";



const SearchByMFCResult = (props) => {
    const { searchByMfcResult } = props;
    return (
        <>


                {searchByMfcResult !== undefined && searchByMfcResult.map((item, index) => (
                    <div key={index}>
                        <div className="mob-result-sec">
                            {/* <h5 className="mob-result-product">{item.c_manufacture_name.toLowerCase()}</h5> */}
                            <h5 className="mob-result-product">{item.c_manufacture_name}</h5>
                        </div>
                        <h6 className="mob-result-mfr">Ongoing Offers: {item.n_ongoing_scheme}</h6>
                        <h6 className="mob-result-product-text">Manufactures</h6>
                        <p className="mob-result-seperator1"></p>
                    </div>
                ))}
        </>
    );
};

export default SearchByMFCResult;
