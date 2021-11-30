import React, { useState, useEffect } from "react";
import {
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
  Table,
  TableRow,
  TableCell,
  Divider,
  Button,
  TableBody,
  TableHead
} from "@material-ui/core";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";

import InputAdornment from "@material-ui/core/InputAdornment";
import PaymentStatus from "../../../../assets/images/payment-status.svg";
import searchimg from "../../../../assets/images/search.svg";

import ItemSubMasterUnMappedList from "./itemSubMasterUnMappedList";
import ItemSubMasterMappedList from "./itemSubMasterMappedList";
import ItemSubMasterOwnItemsList from "./itemSubMasterOwnItemsList";
import ItemSubMasterBlockedList from "./itemSubMasterBlockedList";

import { Constants } from "../../../../common/constant/localstorage";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  },
  customWidth: {
    "& div": {
      width: "212px"
    }
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ItemSubMasterMapping = (props) => {
  const {
    GetItemSubMasterMapCount,
    itemSubMasterMapCountResult,
    GetItemSubMasterMap,
    itemSubMasterMapResult,
    MoveOwnItemSubMasterMap,
    ownItemSubMasterMapResult,
    MoveBlockItemSubMasterMap,
    blockItemSubMasterMapResult,
    MoveConfirmItemSubMasterMap,
    confirmItemSubMasterMapResult,
    MoveOwnAllItemSubMasterMap,
    ownAllItemSubMasterMapResult,
    DeleteItemSubMasterMap,
    deleteItemSubMasterMapResult,
    GetItemSubMasterSearch,
    itemSubMasterSearchResult
  } = props;

  const [filterBy, setFilterBy] = React.useState(1);
  const c2code = localStorage.getItem(Constants.C2_CODE);
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [isCheck, setIsCheck] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [arrayJson, setarrayJson] = useState([]);
  const [page, setPage] = useState(0);
  const [loadStatus, setloadStatus] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalList, setTotalList] = useState(0);
  const [totalLimit, setLimitTotal] = useState(10);
  const [totalOffset, settotalOffset] = useState(0);
  const [searchKeyVal, setsearchKeyVal] = useState("");
  const [checkCount, setCheckCount] = useState(0);
  const [listValue, setListValue] = useState(1);
  const [notFound, setNotFound] = useState(false);
  const limit = 10;
  const handleChangenew = (event) => {
    setsearchKeyVal("");
    setPage(0);
    const {
      target: { value }
    } = event;
    setFilterBy(event.target.value);
    setarrayJson([]);
    itemSubMasterMapResult.payload.data=[]
    const body = {
      c_c2code: c2code,
      c_type_code: event.target.value
    };
    const body1 = {
      c_c2code: c2code,
      c_filter_type: event.target.value,
      c_search_key: "",
      c_list_type: listValue,
      n_page: 0,
      n_limit: 10
    };
    GetItemSubMasterMapCount(body);
    GetItemSubMasterMap(body1);
  };

  const handleChange = (event, newValue) => {
    // console.log(page,">>>>>>>>>>>>>>>>>")
    itemSubMasterMapResult.payload.data=[]
    setarrayJson([])
    setPage(0);
     // console.log(page,">>>>>>>>>>>>>>>>>")
    setValue(newValue);
    setListValue(newValue + 1);
    
    // console.log(page,"<<<<<<<<<<<<<<<<<<<<")
  };

  const body1 = {
    c_c2code: c2code,
    c_filter_type: filterBy
  };
  const body2 = {
    c_c2code: c2code,
    c_filter_type: filterBy,
    c_search_key: searchKeyVal,
    c_list_type: listValue,
    n_page: page,
    n_limit: limit
  };
  const body3 = {
    c_c2code: c2code,
    c_type_code: filterBy
  };
  const handleOwnAllClick = (e, checkall, checklist) => {
    if (checkall == true) {
      if (checklist.length > 0) {
        ownItemSubMasterMapResult.statuscode = "";
        MoveOwnAllItemSubMasterMap(body1);
      }
    } else if (checkall == false) {
      if (checklist.length > 0) {
        ownAllItemSubMasterMapResult.statuscode = "";
        const body = {
          c_c2code: c2code,
          c_filter_type: filterBy,
          j_codes: checklist
        };
        MoveOwnItemSubMasterMap(body);
      }
    }
  };

  useEffect(() => {
    setCheckCount(0);
    setIsCheck([])
    if (
      ownItemSubMasterMapResult.statuscode === 0 ||
      ownAllItemSubMasterMapResult.statuscode === 0
    ) {
      setarrayJson([]);
    itemSubMasterMapResult.payload.data=[]
      setCheckCount(0);
      GetItemSubMasterMapCount(body3);
      GetItemSubMasterMap(body2);

      ownItemSubMasterMapResult.statuscode = "";
      ownAllItemSubMasterMapResult.statuscode = "";
    }
  }, [ownItemSubMasterMapResult, ownAllItemSubMasterMapResult]);

  const handleSearchnew = (event) => {
    setPage(0);
    let target = event.target.value;
    setsearchKeyVal(target);
    setarrayJson([]);
    itemSubMasterMapResult.payload.data=[]
    const body = {
      c_c2code: c2code,
      c_type_code: filterBy
    };
    const body1 = {
      c_c2code: c2code,
      c_filter_type: filterBy,
      c_search_key: target,
      c_list_type: listValue,
      n_page: 0,
      n_limit: 10
    };
    GetItemSubMasterMap(body1);
  };
  return (
    <div>
      <div className="order-history-tab-sec">
        <div className="flexDisplay order-to-seller">
          <div className="search-ots-sec">
            <div className="odersellerListhead">Item Sub-Master Mapping</div>
            <div className="flex-row">
              <div className="relative">
                <div className="itemSelected">
                  {checkCount > 0 ? (
                    <p>
                      Item Selected: <span>{checkCount}</span>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <Button
                  variant="contained"
                  className="allSelectedBtn mr-12"
                  color="primary"
                  onClick={(e) => handleOwnAllClick(e, isCheckAll, isCheck)}
                  disabled={checkCount > 0 ? "" : "disabled"}
                >
                  All Selected OwnItems
                </Button>
                <Select
                  menuPlacement="auto"
                  menuPosition="fixed"
                  className="{classes.customWidth} width212 mr-12 filterBy"
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  value={filterBy}
                  variant="outlined"
                  onChange={handleChangenew}
                  startAdornment={
                    <InputAdornment position="start">
                      <img src={PaymentStatus} alt="searchimg" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="1">Manufacturers</MenuItem>
                  <MenuItem value="2">Packing</MenuItem>
                  <MenuItem value="3">Item Pack Type</MenuItem>
                  <MenuItem value="4">Item Category</MenuItem>
                  <MenuItem value="5">Item Schedule</MenuItem>
                </Select>
              </div>
              <div>
                <TextField
                  margin="normal"
                  variant="outlined"
                  placeholder="Search"
                  onChange={(e) => handleSearchnew(e)}
                  className="width192 serachitemMapInput searchbox"
                  value={searchKeyVal}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={searchimg} alt="searchimg" />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <Container fixed>
          <div className="search-ots-selected">
            <h2>
              Showing Results as per{" "}
              <span className="font-weight-bold">Manufactures Sub-Masters</span>
            </h2>
          </div>
        </Container>

        <Container fixed>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              aria-label="full width tabs example"
              className="order-history-tab custom-ors-tab"
            >
              <Tab label="UnMapped List" {...a11yProps(0)} />
              <Tab label="Mapped List" {...a11yProps(1)} />
              <Tab label="OwnItems List" {...a11yProps(2)} />
              <Tab label="Blocked List" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
        </Container>

        <TabPanel value={value} index={0} dir={theme.direction}>
          <Container fixed>
            <ItemSubMasterUnMappedList
              c2code={c2code}
              isCheck={isCheck}
              setIsCheck={setIsCheck}
              isCheckAll={isCheckAll}
              setIsCheckAll={setIsCheckAll}
              filterBy={filterBy}
              arrayJson={arrayJson}
              setarrayJson={setarrayJson}
              page={page}
              setPage={setPage}
              loadStatus={loadStatus}
              setloadStatus={setloadStatus}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalList={totalList}
              setTotalList={setTotalList}
              totalLimit={totalLimit}
              setLimitTotal={setLimitTotal}
              totalOffset={totalOffset}
              settotalOffset={settotalOffset}
              limit={limit}
              searchKeyVal={searchKeyVal}
              checkCount={checkCount}
              setCheckCount={setCheckCount}
              notFound={notFound}
              setNotFound={setNotFound}
              GetItemSubMasterMapCount={GetItemSubMasterMapCount}
              itemSubMasterMapCountResult={itemSubMasterMapCountResult}
              GetItemSubMasterMap={GetItemSubMasterMap}
              itemSubMasterMapResult={itemSubMasterMapResult}
              MoveOwnItemSubMasterMap={MoveOwnItemSubMasterMap}
              ownItemSubMasterMapResult={ownItemSubMasterMapResult}
              MoveBlockItemSubMasterMap={MoveBlockItemSubMasterMap}
              blockItemSubMasterMapResult={blockItemSubMasterMapResult}
              MoveConfirmItemSubMasterMap={MoveConfirmItemSubMasterMap}
              confirmItemSubMasterMapResult={confirmItemSubMasterMapResult}
              GetItemSubMasterSearch={GetItemSubMasterSearch}
              itemSubMasterSearchResult={itemSubMasterSearchResult}
            />
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Container fixed>
            <ItemSubMasterMappedList
              c2code={c2code}
              filterBy={filterBy}
              arrayJson={arrayJson}
              setarrayJson={setarrayJson}
              page={page}
              setPage={setPage}
              loadStatus={loadStatus}
              setloadStatus={setloadStatus}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalList={totalList}
              setTotalList={setTotalList}
              totalLimit={totalLimit}
              setLimitTotal={setLimitTotal}
              totalOffset={totalOffset}
              settotalOffset={settotalOffset}
              limit={limit}
              searchKeyVal={searchKeyVal}
              notFound={notFound}
              setNotFound={setNotFound}
              GetItemSubMasterMapCount={GetItemSubMasterMapCount}
              itemSubMasterMapCountResult={itemSubMasterMapCountResult}
              GetItemSubMasterMap={GetItemSubMasterMap}
              itemSubMasterMapResult={itemSubMasterMapResult}
              DeleteItemSubMasterMap={DeleteItemSubMasterMap}
              deleteItemSubMasterMapResult={deleteItemSubMasterMapResult}
            />
          </Container>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Container fixed>
            <ItemSubMasterOwnItemsList
              c2code={c2code}
              filterBy={filterBy}
              arrayJson={arrayJson}
              setarrayJson={setarrayJson}
              page={page}
              setPage={setPage}
              loadStatus={loadStatus}
              setloadStatus={setloadStatus}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalList={totalList}
              setTotalList={setTotalList}
              totalLimit={totalLimit}
              setLimitTotal={setLimitTotal}
              totalOffset={totalOffset}
              settotalOffset={settotalOffset}
              limit={limit}
              searchKeyVal={searchKeyVal}
              notFound={notFound}
              setNotFound={setNotFound}
              GetItemSubMasterMapCount={GetItemSubMasterMapCount}
              itemSubMasterMapCountResult={itemSubMasterMapCountResult}
              GetItemSubMasterMap={GetItemSubMasterMap}
              itemSubMasterMapResult={itemSubMasterMapResult}
              MoveBlockItemSubMasterMap={MoveBlockItemSubMasterMap}
              blockItemSubMasterMapResult={blockItemSubMasterMapResult}
              MoveConfirmItemSubMasterMap={MoveConfirmItemSubMasterMap}
              confirmItemSubMasterMapResult={confirmItemSubMasterMapResult}
              GetItemSubMasterSearch={GetItemSubMasterSearch}
              itemSubMasterSearchResult={itemSubMasterSearchResult}
            />
          </Container>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Container fixed>
            <ItemSubMasterBlockedList
              c2code={c2code}
              filterBy={filterBy}
              arrayJson={arrayJson}
              setarrayJson={setarrayJson}
              page={page}
              setPage={setPage}
              loadStatus={loadStatus}
              setloadStatus={setloadStatus}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalList={totalList}
              setTotalList={setTotalList}
              totalLimit={totalLimit}
              setLimitTotal={setLimitTotal}
              totalOffset={totalOffset}
              settotalOffset={settotalOffset}
              limit={limit}
              searchKeyVal={searchKeyVal}
              notFound={notFound}
              setNotFound={setNotFound}
              GetItemSubMasterMapCount={GetItemSubMasterMapCount}
              itemSubMasterMapCountResult={itemSubMasterMapCountResult}
              GetItemSubMasterMap={GetItemSubMasterMap}
              itemSubMasterMapResult={itemSubMasterMapResult}
              DeleteItemSubMasterMap={DeleteItemSubMasterMap}
              deleteItemSubMasterMapResult={deleteItemSubMasterMapResult}
            />
          </Container>
        </TabPanel>
      </div>
    </div>
  );
};

export default ItemSubMasterMapping;
