import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./HeroSection.css";
import Button from "@material-ui/core/Button";
import SearchIconSVG from "../../../../assets/images/search_icon.svg";
import { Constants } from "../../../../common/constant/localstorage";
import LoginPopup from "../LoginPopup";
import { Link } from "react-router-dom";
import { convertToSlug } from "../../../../util/Helper";
/**
 * @author
 * @function HeroSection
 **/

const HeroSection = (props) => {
  const { SearchByNAProduct, searchByNAProductResult } = props;
  console.log(searchByNAProductResult, "<<<$$$$$$$$ searchByNAProductResult");
  let localstorageCount = localStorage.getItem(
    Constants.PRE_LOGIN_SEARCH_COUNT
  );

  if (localstorageCount === null || localstorageCount === "NaN") {
    localStorage.setItem(Constants.PRE_LOGIN_SEARCH_COUNT, 0);
  }

  const [inputSearch, setInputSearch] = useState("");
  const [count, setCount] = useState(parseInt(localstorageCount));
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [arrayProducts, setArrayProducts] = useState([]);
  const [arrayErrorProducts, setArrayErrorProducts] = useState("");
  console.log(arrayErrorProducts, "<<<<<<<<< arrayErrorProducts");
  const handleSearchChange = (e) => {
    e.preventDefault();
    console.log(e.target.value, "<<<< e.target.value");
    setInputSearch(e.target.value);
  };

  const clickHandleCancel = (event) => {
    // console.log(count,localstorageCount)
    localStorage.setItem(Constants.PRE_LOGIN_SEARCH_COUNT, count + 1);
    setCount(count + 1);
    // if(localstorageCount === null || localstorageCount === 'NaN')
    // {
    // 	localStorage.setItem(Constants.PRE_LOGIN_SEARCH_COUNT, 0);
    // }
    // else if(localstorageCount !== null || localstorageCount !== 'NaN')
    // {
    // }
  };
  useEffect(() => {
    // console.log(count,"<<<<Count Value")
    if (inputSearch.length >= 3) {
      const body = {
        c_search_term: inputSearch,
        n_page: 0,
        n_limit: 10,
      };
      if (count <= 5) {
        SearchByNAProduct(body);
      }
    } else if (inputSearch.length > 0 && count > 5) {
      setOpen(true);
    }

    // else if(inputSearch.length <3){
    // 	const body={
    // 		"c_search_term":"",
    // 		"n_page":0,
    // 		"n_limit":10
    // 	}
    // 	SearchByNAProduct(body)
    // }
    // else{
    // 	const body={
    // 		"c_search_term":"",
    // 		"n_page":0,
    // 		"n_limit":10
    // 	}
    // 	SearchByNAProduct(body)
    // }
  }, [inputSearch]);

  useEffect(() => {
    if (count - 1 >= 5 && inputSearch.length >= 3) {
      setOpen(true);
    }
  }, [count, inputSearch]);

  useEffect(() => {
    if (searchByNAProductResult.statuscode === 5) {
      console.log(
        searchByNAProductResult.error,
        "<<<<<<@@@@@@@@@@ searchByNAProductResult.error"
      );
      setArrayErrorProducts(searchByNAProductResult.error);
    }
  }, [searchByNAProductResult.payload === null]);

  useEffect(() => {
    if (
      searchByNAProductResult.statuscode === 0 &&
      searchByNAProductResult.payload !== null
    ) {
      setArrayProducts(searchByNAProductResult.payload);
    }
    // else if(searchByNAProductResult.statuscode === 5){
    // 	setArrayProducts(searchByNAProductResult.error)
    // }
  }, [searchByNAProductResult.payload !== null]);

  // console.log(arrayProducts,"<<<<< arrayProducts")
  return (
    <div className="HeroSection text-center">
      <div className="HeroBg">
        <div className="text-center HeroCopy">
          <h1
            className="h1 HeroTitle mb-4"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="1500"
          >
            Always say <span>“YES”</span> to your Customers
          </h1>
          <h5
            className="h5 HeroSubTitle"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="1750"
          >
            “KAMSS Tech Admin” Pharma Eco-System Makes{" "}
            <br className="d-none d-md-block" />
            your Business Future-Ready
          </h5>
          <div
            className="search-container d-flex align-items-center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="2000"
          >
            <form className="w-100" autoComplete="off">
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-center align-items-center w-100">
                  <img
                    src={SearchIconSVG}
                    alt="search icon"
                    height="15.4px"
                    width="15.2px"
                  />
                  <input
                    type="text"
                    placeholder="Search for products, Molecules, Sellers"
                    value={inputSearch}
                    name="search"
                    autoFocus
                    onChange={(e) => handleSearchChange(e)}
                  />
                </div>
                <Button className="btn btn-primary search-btn text-white">
                  Search
                </Button>
                {/* <button
										type="submit"
										className="btn btn-primary search-btn text-white"
									>
										Search
									</button> */}
              </div>
            </form>
            {/*<div className="search-overlay">
								<div className="search-results">*/}

            {(searchByNAProductResult.statuscode === 5 && inputSearch.length >= 3 && inputSearch !== "" )? (
              <div className="search-overlay">
                <div className="search-results">
                  <div className="search-result-card">
                    {/* <div className="details-div"> */}
                    <p className="heading">{searchByNAProductResult.error}</p>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            ) : (
              searchByNAProductResult.statuscode === 0 &&
              inputSearch.length >= 3 &&
              count <= 5 && inputSearch !== ""  && 
              Array.isArray(searchByNAProductResult.payload) &&
              searchByNAProductResult.payload.length > 0 && (
                <div className="search-overlay">
                  <div className="search-results">
                    {searchByNAProductResult.payload.map((item, index) => (
                      <Link
                        onClick={() => clickHandleCancel("c_dl1_img")}
                        to={`/pdp-na/${item.c_item_code}/${convertToSlug(
                          item.c_item_name
                        )}`}
                      >
                        <div className="search-result-card">
                          <div className="details-div">
                            <p className="heading">{item.c_item_name}</p>
                            <p className="sub-heading">
                              {item.c_item_mfg_name}
                            </p>
                          </div>
                          <div className="inventory">
                            <p className="pack-size">
                              Pack Size: {item.c_pack_name}
                            </p>
                            <p className="price">&#8377; {item.n_max_mrp}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}

            {/*</div> 
							</div> */}
          </div>
        </div>
      </div>
      <LoginPopup open={open} handleClose={handleClose} />
    </div>
  );
};
export default HeroSection;
