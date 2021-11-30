import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Fab from "@material-ui/core/Fab";

import SortbyDrawer from "./SortDrawer";
import SearchBySellerResultMob from "./SearchBySellerResultMob";
import SearchByProductResultMob from "./SearchByProductResultMob";
import SearchByMoleculesResultMob from "./SearchByMoleculesResultMob";
import SearchByMFCResultMob from "./SearchByMFCResultMob";


//images
import FilterIcon from "../../../assets/mobImages/filter-black/filter.png";

const PrivateSearchPage = (props) => {
  const { SearchByProduct, searchByProductResult, SearchBySeller, searchBySellerResult,
    SearchByMolecule, searchByMoleculeResult, SearchByMfc, searchByMfcResult ,GetSearchParameters, searchParametersResult} = props;

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [searchby, setSearchby] = useState("Products");

  const toggleDrawer = (open) => (
    event,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  useEffect(() =>{
    setSearchby(searchParametersResult.payload.searchby);
    setSearchKey(searchParametersResult.payload.searchKey);
  })
  return (
    <>
      <div className="mob-profile-sec-space">
        
        { searchKey.length >= 3 && (
          <>
          {searchby === "Products" &&
          props.searchByProductResult !== undefined ? (
            <div >
              <div >
                <SearchByProductResultMob 
                  
                  searchByProductResult={searchByProductResult.payload} 
                />
              </div>
            </div>
          ) : null}
          {searchby === "Sellers" && props.searchBySellerResult !== undefined ? (
            <div >
              <div >
                <SearchBySellerResultMob 
                  
                  searchBySellerResult={searchBySellerResult.payload}
                />
              </div>
            </div>
          ) : null}
          {searchby === "Molecule" && (
            <div >
              <div >
                <SearchByMoleculesResultMob 
                  searchByMoleculeResult={searchByMoleculeResult.payload}
                />
              </div>
            </div>
          )}
          {searchby === "Manufacturer" && (
            <div >
              <div >
                <SearchByMFCResultMob 
                
                  searchByMfcResult={searchByMfcResult.payload}
                />
              </div>
            </div>
          )}
          </>
        )}

      </div>
      <Fab aria-label="register" className="floating-btn search-floating-btn" onClick={toggleDrawer(true)}>
        <img src={FilterIcon} alt="Register" />
      </Fab>
      <SortbyDrawer
        toggleDrawer={toggleDrawer}
        openDrawer={openDrawer}
        SearchByProduct={SearchByProduct}
        SearchBySeller={SearchBySeller}
        SearchByMolecule={SearchByMolecule}
        SearchByMfc={SearchByMfc}
        GetSearchParameters={GetSearchParameters}
        searchParametersResult={searchParametersResult} />
    </>
  );
};

export default PrivateSearchPage;
