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
import CloseIcon from "@material-ui/icons/Close";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";

import searchImg from "../../../../assets/images/icons/search-icon-grey.svg";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { Constants } from "../../../../common/constant/localstorage";

const ItemMasterBlockedList = (props) => {
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
  // const exJson={
  //     "data":[{
  //         "c_item_code":"215005",
  //         "c_item_name":"Dolo 650",
  //         "c_packing_size":"10'S",
  //         "c_csquare_item_code":"1110211",
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
  const [resultCount, setresultCount] = useState(0);
  
  // const c2code=localStorage.getItem(Constants.C2_CODE);
  const body1 = { c_c2code: c2code };
  const body2 = { c_c2code: c2code, c_list_type: 4, n_page: 0, n_limit: limit };

  useEffect(() => {
    const body = {
      c_c2code: c2code,
      c_list_type: 4,
      n_page: 0,
      n_limit: limit
    };
    GetItemMasterMap(body);
  }, []);
  
  const handleLoadMore = (e,nextPage) => { 
    const body = {
      c_c2code: c2code,
      c_list_type: 4,
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

  const [open, setOpen] = React.useState(true);
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

  return (
    <>
      <Grid container className="mr-t-16 itemMappingAlert">
        <Collapse in={open}>
          <Alert
            icon={false}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <span className="font-weight-bold">Note: </span>Once you unblock any
            Item Master, it will move to UnMapped List
          </Alert>
        </Collapse>
      </Grid>

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

        <Table className="itemMapList" stickyHeader>
          <TableHead>
            <TableRow className="head noBorder">
              <TableCell width="5%">Sr No.</TableCell>
              <TableCell width="10%">Item Code</TableCell>
              <TableCell width="20%">Product Name </TableCell>
              <TableCell width="15%">Packaging</TableCell>
              <TableCell width="30%">C-Square Product Name</TableCell>
              <TableCell width="20%">Packaging</TableCell>
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
                      <div className="itemButton mr-l-0">
                        <Button
                          className="ownBlockBtn"
                          color="primary"
                          onClick={(e) =>
                            handleDeleteClick(e, item.c_item_code)
                          }
                        >
                          UnBlock
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="tBody">{item.c_packing_size}</TableCell>
                  <TableCell className="tBody">
                    <div className="itemNameAttribute">
                      <div className="itemName mr-b-12">
                        {item.c_csquare_item_name}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="tBody">
                    {item.c_csquare_packing_size}
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

export default ItemMasterBlockedList;
