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
// import { Constants } from "../../../../common/constant/localstorage";

import CircularProgress from "@material-ui/core/CircularProgress";

const ItemMasterMappedList = (props) => {
  const {
    c2code,
    GetItemMasterMapCount,
    itemMasterMapCountResult,
    GetItemMasterMap,
    itemMasterMapResult,
    DeleteItemMasterMap,
    deleteItemMasterMapResult,
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
    notFound,
    setNotFound
  } = props;
  // console.log(deleteItemMasterMapResult,"xxxx")
  // const exJson={
  //     "data":[{
  //         "c_item_code":"215005",
  //         "c_item_name":"Dolo 650",
  //         "c_packing_size":"10'S",
  //         "c_csquare_item_code":"0001231",
  //         "c_csquare_item_name":"Dolo 650mg Tablet",
  //         "c_csquare_packing_size":"10'S",
  //         },
  //         {
  //         "c_item_code":"215006",
  //         "c_item_name":"ADIZA 10mG",
  //         "c_packing_size":"10'S",
  //         "c_csquare_item_code":"0001431",
  //         "c_csquare_item_name":"ADIZA 10MG TAblet",
  //         "c_csquare_packing_size":"10'S",
  //         }],
  //     "n_next_offset":21,
  //     "n_limit":20,
  //     "n_total":2000
  //   }
  // const c2code=localStorage.getItem(Constants.C2_CODE);
  const [resultCount, setresultCount] = useState(0);
  const body1 = { c_c2code: c2code };
  const body2 = {
    c_c2code: c2code,
    c_list_type: 2,
    n_page: pageNumber,
    n_limit: limit
  };
  useEffect(() => {
    const body = {
      c_c2code: c2code,
      c_list_type: 2,
      n_page: 0,
      n_limit: limit
    };
    GetItemMasterMap(body);
  }, []);

  const handleDeleteClick = (e, itemcodes) => {
    const body = { c_c2code: c2code, c_item_code: itemcodes };
    DeleteItemMasterMap(body);
  };
  useEffect(() => {
    if (deleteItemMasterMapResult.statuscode === 0) {
      itemMasterMapResult.payload.data=[]
      setarrayJson([]);
      setPage(0);
      GetItemMasterMapCount(body1);
      GetItemMasterMap(body2);
      deleteItemMasterMapResult.statuscode = "";
    }
  }, [deleteItemMasterMapResult]);

  const loader = useRef(null);
  
  const handleLoadMore = (e,nextPage) => { 
    const body = {
      c_c2code: c2code,
      c_list_type: 2,
      n_page: nextPage,
      n_limit: limit
    };
    GetItemMasterMap(body);
  }
  useEffect(() => {
    setloadStatus(false);
    if (page === 0) {
      setarrayJson([]);
    }
    if (itemMasterMapResult.statuscode === 0) {
      if(itemMasterMapResult.payload.data.length > 0)
      {
        setarrayJson([...arrayJson, ...itemMasterMapResult.payload?.data]);
        setTotalList(itemMasterMapResult.payload.page.n_total);
        setPage(itemMasterMapResult.payload.page.n_next_page);
        setLimitTotal(arrayJson.length);
        setresultCount(itemMasterMapResult.payload.data.length)
        setloadStatus(true);
        setNotFound(false);
      }
    }
    if(itemMasterMapResult.statuscode === 5) {
      setloadStatus(false);
      setNotFound(true);
    }
    
  }, [itemMasterMapResult]);
  // if (itemMasterMapResult.payload.n_total) {
  //   setTotalList(itemMasterMapResult.payload.n_total);
  // }
  return (
    <>
      <Grid container className="itemMappingContainer">
        <Grid item xs={6}>
          <div className="itemMappingHead buyerItem mr-b-4">
            <h1>Buyer Item Master</h1>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="itemMappingHead csquareItem mr-b-4">
            <h1>C-Square Item Master</h1>
          </div>
        </Grid>

        <Table className="itemMapList itemMapListVTop" stickyHeader>
          <TableHead>
            <TableRow className="head noBorder">
              <TableCell width="5%">Sr No.</TableCell>
              <TableCell width="10%">Item Code</TableCell>
              <TableCell width="20%">Product Name </TableCell>
              <TableCell width="8%">Packaging</TableCell>
              <TableCell className="pd-l-16" width="8%">
                Action
              </TableCell>
              <TableCell width="50%">C-Square Master Attribute</TableCell>
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
                  <TableCell className="tBody">{item.c_item_code}</TableCell>
                  <TableCell className="tBody">
                    <div className="itemNameAttribute">
                      <div className="itemName mr-b-12">{item.c_item_name}</div>
                    </div>
                  </TableCell>
                  <TableCell className="tBody">{item.c_packing_size}</TableCell>
                  <TableCell className="tBody">
                    <div className="mr-l-24 itemDeleteAttribute">
                      <Button
                        className="deleteBtn"
                        color="primary"
                        onClick={(e) => handleDeleteClick(e, item.c_item_code)}
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

export default ItemMasterMappedList;
