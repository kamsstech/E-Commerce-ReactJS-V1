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

import deleteImg from "../../../../assets/images/icons/delete-red.svg";

import CircularProgress from "@material-ui/core/CircularProgress";

const ItemSubMasterMappedList = (props) => {
  const {
    c2code,
    GetItemSubMasterMapCount,
    itemSubMasterMapCountResult,
    GetItemSubMasterMap,
    itemSubMasterMapResult,
    DeleteItemSubMasterMap,
    deleteItemSubMasterMapResult,
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
    setNotFound
  } = props;
  const [resultCount, setresultCount] = useState(0);
  const body1 = {
    c_c2code: c2code,
    c_filter_type: filterBy
  };

  const body2 = {
    c_c2code: c2code,
    c_filter_type: filterBy,
    c_search_key: searchKeyVal,
    c_list_type: 2,
    n_page: 0,
    n_limit: limit
  };
  const body3 = {
    c_c2code: c2code,
    c_type_code: filterBy
  };
  // const loader = useRef(null);
  useEffect(() => {
    const body = {
      c_c2code: c2code,
      c_filter_type: filterBy,
      c_search_key: searchKeyVal,
      c_list_type: 2,
      n_page: 0,
      n_limit: limit
    };
    GetItemSubMasterMap(body);
  }, []);

  const handleDeleteClick = (e, itemcodes) => {
    const body = {
      c_c2code: c2code,
      c_filter_type: filterBy,
      c_code: itemcodes
    };
    DeleteItemSubMasterMap(body);
  };
  useEffect(() => {
    if (deleteItemSubMasterMapResult.statuscode === 0) {
      setarrayJson([]);
      itemSubMasterMapResult.payload.data=[]
      setPage(0);
      GetItemSubMasterMapCount(body3);
      GetItemSubMasterMap(body2);
      deleteItemSubMasterMapResult.statuscode = "";
    }
  }, [deleteItemSubMasterMapResult]);

  
  // useEffect(() => {
  //   const body = {
  //     c_c2code: c2code,
  //     c_filter_type: filterBy,
  //     c_search_key: searchKeyVal,
  //     c_list_type: 2,
  //     n_page: page,
  //     n_limit: limit
  //   };
  //   if (notFound === true) return;
  //   if (!loader) return;
  //   if (page === 0) return;
  //   GetItemSubMasterMap(body);
  // }, [page]);
  const handleLoadMore = (e,nextPage) => { 
    const body = {
      c_c2code: c2code,
      c_filter_type: filterBy,
      c_search_key: searchKeyVal,
      c_list_type: 2,
      n_page: nextPage,
      n_limit: limit
    };
    GetItemSubMasterMap(body);
  }
  useEffect(() => {
    // console.log(itemSubMasterMapResult,"sdfdg")
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
              <TableCell width="30%">Buyer Sub-Master Attribute</TableCell>
              <TableCell className="pd-l-16" width="10%">
                Action
              </TableCell>
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
                    </div>
                  </TableCell>
                  <TableCell className="tBody">
                    <div className="mr-l-24 itemDeleteAttribute">
                      <Button
                        className="deleteBtn"
                        color="primary"
                        onClick={(e) => handleDeleteClick(e, item.c_code)}
                      >
                        <img src={deleteImg} alt="deleteImg" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="tBody">
                    <div className="itemNameAttribute">
                      <div className="itemName mr-b-12">
                        {item.c_csquare_item_name}
                      </div>
                    </div>
                  </TableCell>
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

export default ItemSubMasterMappedList;
