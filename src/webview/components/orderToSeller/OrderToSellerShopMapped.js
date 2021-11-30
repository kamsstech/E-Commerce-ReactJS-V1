import React, { useState, useEffect,useRef } from "react";
// import "./css/OrderToSellerShopMapped.css";
import axios from "axios";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import SellerList from "./SellerList";
import UnMappedSellerList from "./UnMappedSellerList";
import RegisterSeller from "./RegisterSeller";
import ValidationPopup from "./ValidationPopup";
import { Constants } from "../../../common/constant/localstorage";
import { REACT_APP_BASE_URL } from "../../../common/constant/env";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
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

const OrderToSellerShopMapped = (props) => {
  const {
    GetSellerInfo,
    getSellerInfoResult,
    GetMappedSellerList,
    getMappedSellerListResult,
    GetUnMappedCASList,
    getUnMappedCASListResult,
    GetUnMappedSellerList,
    getUnMappedSellerListResult,
    SearchMappedSellerList,
    searchMappedSellerListResult,
    SearchUnMappedSellerList,
    searchUnMappedSellerListResult,
    SetPriorityMappedSeller,
    setPriorityMappedSellerResult,
    GetGST_Type,
    getGST_TypeResult,
    GST_NumCheck,
    gST_NumCheckResult,
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
    validateREGISTER,
    validateREGISTERResult,
    ScheduleDemoEmailAction,
		scheduleDemoEmailResult
  } = props;

 console.log(getMappedSellerListResult,"************** getMappedSellerListResult")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [page, setPage] = useState(0);
	const loader = useRef(null);

  useEffect(() => {
    const body = {
      n_page: 0,
      n_limit: 20,
    };
    GetUnMappedSellerList(body);
    GetMappedSellerList(body);
    GetGST_Type();
    getProfileInfo();
    StateListAction();
  }, []);

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [openValidate, setValidationPopup] = useState(false);

  const handleClose = () => {
    setValidationPopup(!openValidate);
  };
  
  const handleObserver = (entities) => {
		const target = entities[0];
		if (target.isIntersecting) {
		  setPage((page) => page + 1);
		}
	  };
	
	  const [arrayRes, setArrayRes] = useState([]);
	  console.log(arrayRes, "<<<&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& arrayRes");
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
        axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/seller/mapped/seller`, body, {
          headers,
        })
        .then((response) => {
          if(response.data.payloadJson !== null){
            setArrayRes([...arrayRes, ...response.data.payloadJson.data]);
          }
          
        });
      }, [loader, page]);


  return (
    <div className="">
      <div className="order-history-tab-wrapper">
        <div className="order-history-tab-sec">
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
                <Tab label="Mapped Sellers" {...a11yProps(0)} />
                <Tab label="Un-Mapped Sellers " {...a11yProps(1)} />
                <Tab label="Register a Seller" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
          </Container>

          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="order-history-tab-wrapper pb-0">
              <div className="order-history-tab-sec">
                <Container fixed>
                  <SellerList
                  GetMappedSellerList={GetMappedSellerList}
                  getMappedSellerListResult={getMappedSellerListResult}
                  SearchMappedSellerList={SearchMappedSellerList}
                  searchMappedSellerListResult={searchMappedSellerListResult}
                  SetPriorityMappedSeller={SetPriorityMappedSeller}
                  setPriorityMappedSellerResult={setPriorityMappedSellerResult}
                  />
                </Container>
              </div>
            </div>
            
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="order-history-tab-wrapper pb-0">
              <div className="order-history-tab-sec">
                <Container fixed>
                  <UnMappedSellerList
                  GetSellerInfo={GetSellerInfo}
                  getSellerInfoResult={getSellerInfoResult}
                    GetUnMappedSellerList={GetUnMappedSellerList}
                    getUnMappedSellerListResult={getUnMappedSellerListResult}
                    GetUnMappedCASList={GetUnMappedCASList}
                    getUnMappedCASListResult={getUnMappedCASListResult}
                    SearchUnMappedSellerList={SearchUnMappedSellerList}
                    searchUnMappedSellerListResult={searchUnMappedSellerListResult}
                    getProfileInfo={getProfileInfo}
                    getProfileInfoResult={getProfileInfoResult}
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
                    ScheduleDemoEmailAction={ScheduleDemoEmailAction}
		                scheduleDemoEmailResult={scheduleDemoEmailResult}

                  />
                </Container>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="order-history-tab-wrapper pb-0">
              <div className="order-history-tab-sec">
                <Container fixed>
                  <RegisterSeller
                  GST_NumCheck={GST_NumCheck}
                  gST_NumCheckResult={gST_NumCheckResult}
                  validateREGISTER={validateREGISTER}
                  validateREGISTERResult={validateREGISTERResult}
                  ScheduleDemoEmailAction={ScheduleDemoEmailAction}
                  scheduleDemoEmailResult={scheduleDemoEmailResult}
                  getProfileInfoResult={getProfileInfoResult}
                  />
                </Container>
              </div>
            </div>
            <ValidationPopup
              open={openValidate}
              textField="Mobile Number"
              handleClose={handleClose}
            />
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default OrderToSellerShopMapped;
