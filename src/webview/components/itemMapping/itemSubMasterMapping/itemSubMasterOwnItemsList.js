import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import {
  Table,
  TableRow,
  TableCell,
  Divider,
  Button,
  TableBody,
  TableHead,
  Checkbox
} from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

import searchImg from "../../../../assets/images/icons/search-icon-grey.svg";
import CircularProgress from "@material-ui/core/CircularProgress";

const ItemSubMasterOwnItemsList = (props) => {
  const {
    c2code,
    GetItemSubMasterMapCount,
    itemSubMasterMapCountResult,
    GetItemSubMasterMap,
    itemSubMasterMapResult,
    MoveBlockItemSubMasterMap,
    blockItemSubMasterMapResult,
    MoveConfirmItemSubMasterMap,
    confirmItemSubMasterMapResult,
    filterBy,
    setarrayJson,
    arrayJson,
    page,
    setPage,
    loadStatus,
    setloadStatus,
    pageNumber,
    setPageNumber,
    totalList,
    setTotalList,
    totalLimit,
    setLimitTotal,
    totalOffset,
    settotalOffset,
    limit,
    searchKeyVal,
    notFound,
    setNotFound,
    GetItemSubMasterSearch,
    itemSubMasterSearchResult
  } = props;
  const [toggles, setToggles] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [searchValArray, setSearchValArray] = useState([]);
  const [selectItemcode, setSelectItemCode] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [resultCount, setresultCount] = useState(0);

  const body1 = {
    c_c2code: c2code,
    c_filter_type: filterBy
  };
  const body2 = {
    c_c2code: c2code,
    c_filter_type: filterBy,
    c_search_key: searchKeyVal,
    c_list_type: 3,
    n_page: 0,
    n_limit: limit
  };
  const body3 = {
    c_c2code: c2code,
    c_type_code: filterBy
  };
  const loader = useRef(null);

  useEffect(() => {
    const body = {
      c_c2code: c2code,
      c_filter_type: filterBy,
      c_search_key: searchKeyVal,
      c_list_type: 3,
      n_page: 0,
      n_limit: limit
    };
    GetItemSubMasterMap(body);
  }, []);

  
 
const handleLoadMore = (e,nextPage) => { 
    const body = {
      c_c2code: c2code,
      c_filter_type: filterBy,
      c_search_key: searchKeyVal,
      c_list_type: 3,
      n_page: nextPage,
      n_limit: limit
    };
    GetItemSubMasterMap(body);
  }
  useEffect(() => {
    setloadStatus(false);
    if (page === 0) {
      setarrayJson([]);
    }
    if (itemSubMasterMapResult.statuscode === 0) {
      if(itemSubMasterMapResult.payload.data.length > 0)
      {
        setarrayJson([...arrayJson, ...itemSubMasterMapResult.payload?.data]);
        setTotalList(itemSubMasterMapResult.payload.page.n_total);
        setPage(itemSubMasterMapResult.payload.page.n_next_page);
        setLimitTotal(arrayJson.length);
        setresultCount(itemSubMasterMapResult.payload.data.length)
        setloadStatus(true);
        setNotFound(false);
      }
    }
    if(itemSubMasterMapResult.statuscode === 5) {
      setloadStatus(false);
      setNotFound(true);
    }
    
  }, [itemSubMasterMapResult]);
  // if (itemSubMasterMapResult.payload.n_total) {
  //   setTotalList(itemSubMasterMapResult.payload.n_total);
  // }

  const handleBlockClick = (e, itemcodes) => {
    confirmItemSubMasterMapResult.statuscode = "";
    const body = {
      c_c2code: c2code,
      c_filter_type: filterBy,
      c_code: itemcodes
    };
    MoveBlockItemSubMasterMap(body);
  };
  const handleConfirmClick = (e, itemcodes, c2itemcode) => {
    ownItemSubMasterMapResult.statuscode = "";
    blockItemSubMasterMapResult.statuscode = "";
    const body = {
      c_c2code: c2code,
      c_filter_type: filterBy,
      c_code: itemcodes,
      c_csquare_mfg_code: c2itemcode
    };
    MoveConfirmItemSubMasterMap(body);
  };
  useEffect(() => {
    if (
      blockItemSubMasterMapResult.statuscode === 0 ||
      confirmItemSubMasterMapResult.statuscode === 0
    ) {
      setarrayJson([]);
      itemSubMasterMapResult.payload.data=[]
      setPage(0);
      GetItemSubMasterMapCount(body3);
      GetItemSubMasterMap(body2);
      blockItemSubMasterMapResult.statuscode = "";
      confirmItemSubMasterMapResult.statuscode = "";
    }
  }, [blockItemSubMasterMapResult, confirmItemSubMasterMapResult]);
  const handleOpenClick = (e,itemCode) => { 
    setOpenInput(!openInput)
    setSelectItemCode(itemCode);
    setSearchValArray([])
    setSearchKey("")
  }
   const handleSearch = (event) => {
    let searchVal=event.target.value
    setSearchKey(searchVal);

    if (searchVal === " ") {
      event.preventDefault();
    }else{
      if(searchVal.length > 3)
      {
        const body = {
          c_c2code: c2code,
          c_filter_type: filterBy,
          c_search_key: searchVal,
          n_offset: 0,
          n_limit: 10,
        };
        GetItemSubMasterSearch(body);
      }
      else
      {
        setToggles(false);
      }
    }
    
  };
  useEffect(() => {
    if(itemSubMasterSearchResult.statuscode === 0)
    {
      setSearchValArray(itemSubMasterSearchResult.payload?.j_item_list);
      setToggles(true);
    }
    else if(itemSubMasterSearchResult.statuscode === 5)
    {
      setToggles(false);
      setSearchValArray([])
    }
    else if(itemSubMasterSearchResult.statuscode === 100)
    {
      setToggles(false);
      setSearchValArray([])
    }
  }, [itemSubMasterSearchResult]);
  return (
    <>
      <Grid container className="itemMappingContainer">
        <Grid item xs={6}>
          <div className="itemMappingHead buyerItem mr-b-4">
            <h1>Buyer Sub-Master</h1>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="itemMappingHead csquareItem mr-b-4">
            <h1>C-Square Sub-Master</h1>
          </div>
        </Grid>

        <Table className="itemMapList" stickyHeader>
          <TableHead>
            <TableRow className="head noBorder">
              <TableCell width="10%">Sr No.</TableCell>
              <TableCell width="40%">Buyer Sub-Master Attribute</TableCell>
              <TableCell width="50%">C-Square Sub-Master Attribute</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(arrayJson) &&
              arrayJson.length > 0 &&
              arrayJson.map((item, index) => (
                <TableRow>
                  <TableCell className="tBody">
                    {index + 1 > 9 ? index + 1 : "0" + (index + 1)}
                  </TableCell>
                  <TableCell className="tBody">
                    <div className="itemNameAttribute">
                      <div className="itemName mr-b-12">{item.c_name}</div>
                      <div className="itemButton mr-l-0">
                        <Button
                          className="ownBlockBtn"
                          color="primary"
                          onClick={(e) => handleBlockClick(e, item.c_code)}
                        >
                          Block
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="tBody">
                    <div className="itemNameAttribute">
                      <div className="itemName mr-b-12">
                        {item.c_csquare_item_name}
                      </div>
                      <div className="itemCSQButton relative itemMappingSearch">
                        <Input
                          onClick={(e) => handleOpenClick(e, item.c_code)}
                          className={`ownSearchBtn customQButton ${
                            openInput && selectItemcode == item.c_code  ? "active Mui-focused" : ""
                          }`}
                          onChange={(e) => handleSearch(e)}
                          value={selectItemcode === item.c_code ?(searchKey):""}
                          color="primary"
                          startAdornment={
                            <InputAdornment position="start">
                              <img src={searchImg} alt />
                            </InputAdornment>
                          }
                        />
                        {searchValArray.length > 0 && toggles && selectItemcode == item.c_code  && (
                          <div>
                            <ClickAwayListener
                              onClickAway={() => setToggles(false)}
                            >
                              <div className="itemMapSearchList thin-scroll">
                                {searchValArray.map((searchitem, searchindex) => (
                                <div className="itemMapSearchListItem">
                                  <p className="productName">
                                    {searchitem.c_name}
                                  </p>
                                  {/*<p className="productPackSize">
                                    Pack Size: {searchitem.c_pack_name}
                                  </p>*/}
                                  <Button
                                    className="confirmIMBtn mr-r-8"
                                    color="primary"
                                    onClick={(e) => handleConfirmClick(e,item.c_code,searchitem.c_code)}
                                  >
                                    Confirm
                                  </Button>
                                </div>
                                ))}
                              </div>
                            </ClickAwayListener>
                          </div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  {/*<TableCell className="tBody">{item.c_csquare_packing_size}</TableCell>*/}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Grid>
      <div className="loading" xs={12}>
        {
          loadStatus === false && notFound === false ? (
            <CircularProgress className="mr-l-12" size={32} thickness={4} />
           ):""
        }
        {
          loadStatus === true && notFound === false && resultCount >= 10 ? (
          <Button
              variant="contained"
              color="primary"
              className="home-title-sectionbtn"
              onClick={(e) => handleLoadMore(e, page)}
            >
              Load More
           </Button>):""
         }
        </div>
    </>
  );
};

export default ItemSubMasterOwnItemsList;
