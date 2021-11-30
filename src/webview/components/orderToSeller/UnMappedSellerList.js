import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Table,
  TableRow,
  TableCell,
  Divider,
  Button,
  TableBody,
  TableHead,
} from "@material-ui/core";
import shop from "../../../assets/images/shop.svg";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import PaymentStatus from "../../../assets/images/payment-status.svg";
import RetrivalFilterOption from "./RetrivalFilterOption";
import AddSellerModal from "./AddSellerModal";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import searchimg from "../../../assets/images/search.svg";
import { Constants } from "../../../common/constant/localstorage";
import { REACT_APP_BASE_URL } from "../../../common/constant/env";
const UnMappedSellerList = (props) => {
  const {
    GetSellerInfo,
    getSellerInfoResult,
    GetUnMappedSellerList,
    getUnMappedSellerListResult,
    GetUnMappedCASList,
    getUnMappedCASListResult,
    SearchUnMappedSellerList,
    searchUnMappedSellerListResult,
    getProfileInfo,
    getProfileInfoResult,
    StateListAction,
    stateListResult,
    CityListAction,
    cityListResult,
    AreaListAction,
    areaListResult,
    SearchStateAction,
    searchStateResult,
    SearchCityAction,
    searchCityResult,
    SearchAreaAction,
    searchAreaResult,
    ScheduleDemoEmailAction,
		scheduleDemoEmailResult
  } = props;

  const sellerList = getUnMappedSellerListResult.payload;
  const sellerLength = getUnMappedSellerListResult.payload.length;
  const searchsellerList = searchUnMappedSellerListResult.payload;
  const searchsellerLength = searchUnMappedSellerListResult.payload.length;

  // const sellerList = searchsellerLength > 0 ? searchsellerList : sellerLists ;
  console.log(sellerList, "<<< sellerList");

  const [errorMsg, setErrorMsg] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [sellerName, setSellerName] = useState("");
  const anchorRef = React.useRef(null);
  //const [priorityValue, setPriority] = useState("Seller Priority");
  const [openRetrival, setOpenRetrival] = useState(false);
  const [openSeller, setOpenSeller] = useState(false);

  const handleChange = (e) => {
    var regex = /^[A-Za-z0-9]+$/;
    setSearchKey(e.target.value);
    console.log(searchKey, "<<searchKey Seller");
    // setErrorMsg("");

    // if(e.target.value.length === 0){
    //   GetUnMappedSellerList();
    // }
    // else if(regex.test(e.target.value)){

    //     const body={
    //       "c_name":e.target.value,
    //       "n_page":"0",
    //       "n_limit":"10"
    //     }
    //     if(e.target.value >= 3){
    //       SearchUnMappedSellerList(body)
    //     }

    // }
    // else {
    //   setErrorMsg("Special characters are not allowed")
    // }
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setIsOpen(false);
  };
  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const handleOpenRetrival = () => {
    setOpenRetrival(!openRetrival);
  };
  const handleCloseSeller = () => {
    setOpenSeller(!openSeller);
  };
  const handleAddSeller = (s_name, s_code) => {
    const body = {
      c_seller_code: s_code,
    };
    GetSellerInfo(body);
    setSellerName(s_name);
    getProfileInfo();
    setOpenSeller(!openSeller);
  };
  useEffect(() => {
    if (searchKey.length >= 3) {
      const body = {
        c_name: searchKey,
        n_page: "0",
        n_limit: "10",
      };
      SearchUnMappedSellerList(body);
    }
  }, [searchKey]);

  const [page, setPage] = useState(0);
  const loader = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  const [arrayRes, setArrayRes] = useState([]);
  console.log(arrayRes, "<<< arrayRes");

  useEffect(() => {
    if (!loader) return;

    const headers = {
      "Content-Type": "application/json",
      "X-csquare-api-token": localStorage.getItem(Constants.TOKEN),
      "X-csquare-api-key": localStorage.getItem(Constants.KEY),
    };

    const body = {
      n_page: page,
      n_limit: 20,
    };
    arrayRes.length !== null &&
      axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/seller/list`, body, {
          headers,
        })
        .then((response) => {
          if(response.data.payloadJson !== null){
            setArrayRes([...arrayRes, ...response.data.payloadJson.data]);
          }
          
        });
  }, [loader, page]);

  return (
    <div>
      <div className="flexDisplay order-to-seller">
        <div className="search-branch-sec">
          <div className="sellerListhead">List Of Un-Mapped Sellers</div>
          <div className="flex-row">
            <div className="mt16 relative">
              <Button
                className="retrival-button mt-0 mr-10 toCatp"
                color="primary"
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleOpenRetrival}
              >
                <img
                  src={PaymentStatus}
                  alt="PaymentStatus"
                  className="mr-10 opacity08"
                />{" "}
                Retrieval Filter/option
              </Button>
              {
                <RetrivalFilterOption
                  open={openRetrival}
                  handleOpenRetrival={handleOpenRetrival}
                  StateListAction={StateListAction}
                  stateListResult={stateListResult}
                  CityListAction={CityListAction}
                  cityListResult={cityListResult}
                  AreaListAction={AreaListAction}
                  areaListResult={areaListResult}
                  SearchStateAction={SearchStateAction}
                  searchStateResult={searchStateResult}
                  SearchCityAction={SearchCityAction}
                  searchCityResult={searchCityResult}
                  SearchAreaAction={SearchAreaAction}
                  searchAreaResult={searchAreaResult}
                  GetUnMappedCASList={GetUnMappedCASList}
                  getUnMappedCASListResult={getUnMappedCASListResult}
                />
              }
            </div>
            <div>
              {/* <input 
							value={searchKey}
							onChange={e => handleChange(e)}
							placeholder="Search Sellers" 
							className="serachSellerInput"
						/> */}

              <TextField
                value={searchKey}
                onChange={(e) => handleChange(e)}
                margin="normal"
                variant="outlined"
                placeholder="Search Sellers"
                className="serachSellerInput width256 searchbox startAdornmentEmpty"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={searchimg} alt="searchimg" />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="MuiDivider-root blue-divider"></hr>
      <div>
        <Table>
          <TableHead>
            <TableRow className="head noBorder">
              <TableCell>Seller Code</TableCell>
              <TableCell>Seller Name</TableCell>
              <TableCell>State</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Supply Area</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* searchsellerLength > 0 ? */}

            {
              getUnMappedCASListResult.payload  &&  getUnMappedCASListResult.payload.length > 0 ?   
                <>
                {getUnMappedCASListResult.payload.map((product, index) =>
                <>
                <TableRow key={index}>
                    <TableCell className="tBody">
                      {product.c_seller_code}
                    </TableCell>
                    <TableCell className="tBody">
                      {product.c_seller_name}
                    </TableCell>
                    <TableCell className="tBody">
                      {product.c_state_name}
                    </TableCell>
                    <TableCell className="tBody">
                      {product.c_city_name}
                    </TableCell>
                    <TableCell className="tBody">
                      All Over {product.c_state_name},{product.c_area_name}
                    </TableCell>
                    <TableCell
                      className="tBody handCursur activeLink"
                      onClick={() =>
                        handleAddSeller(
                          product.c_seller_code,
                          product.c_seller_code
                        )
                      }
                    >
                      Add Seller
                    </TableCell>
                  </TableRow>
                </>

                )}
               </>: 
               
               <>
               {searchKey.length >= 3 ? (
              searchsellerLength > 0 ? (
                searchsellerList.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell className="tBody">
                      {product.c_seller_code}
                    </TableCell>
                    <TableCell className="tBody">
                      {product.c_seller_name}
                    </TableCell>
                    <TableCell className="tBody">
                      {product.c_state_name}
                    </TableCell>
                    <TableCell className="tBody">
                      {product.c_city_name}
                    </TableCell>
                    <TableCell className="tBody">
                      All Over {product.c_state_name},{product.c_area_name}
                    </TableCell>
                    <TableCell
                      className="tBody handCursur activeLink"
                      onClick={() =>
                        handleAddSeller(
                          product.c_seller_code,
                          product.c_seller_code
                        )
                      }
                    >
                      Add Seller
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <h4>No Data Found</h4>
              )
            ) : (
              arrayRes.length > 0 &&
              arrayRes.map((product, index) => (
                <TableRow key={index}>
                  <TableCell className="tBody">
                    {product.c_seller_code}
                  </TableCell>
                  <TableCell className="tBody">
                    {product.c_seller_name}
                  </TableCell>
                  <TableCell className="tBody">
                    {product.c_state_name}
                  </TableCell>
                  <TableCell className="tBody">{product.c_city_name}</TableCell>
                  <TableCell className="tBody">
                    All Over {product.c_state_name},{product.c_area_name}
                  </TableCell>
                  <TableCell
                    className="tBody handCursur activeLink"
                    onClick={() =>
                      handleAddSeller(
                        product.c_seller_name,
                        product.c_seller_code
                      )
                    }
                  >
                    Add Seller
                  </TableCell>
                </TableRow>
              ))
            )}
               </>
            }    


            

            <TableRow></TableRow>
          </TableBody>
        </Table>
        <div className="loading" ref={loader}>
          <h4></h4>
        </div>
        <AddSellerModal
          open={openSeller}
          handleClose={handleCloseSeller}
          getSellerInfoResult={getSellerInfoResult}
          sellerName={sellerName}
          getProfileInfo={getProfileInfo}
          getProfileInfoResult={getProfileInfoResult}
          ScheduleDemoEmailAction={ScheduleDemoEmailAction}
		      scheduleDemoEmailResult={scheduleDemoEmailResult}
        />
      </div>
    </div>
  );
};

export default UnMappedSellerList;
