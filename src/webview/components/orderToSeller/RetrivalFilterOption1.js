import React, { useState, useEffect } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import state from "../../../assets/images/state.svg";
import Box from "@material-ui/core/Box";
import RefreshIcon from "../../../assets/images/refresh.svg";
import { makeStyles, Theme } from "@material-ui/core/styles";
import city from "../../../assets/images/placeholder.svg";
import area_img from "../../../assets/images/area.svg";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 244,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const RetrivalFilterOption = (props) => {
  const {
    open,
    handleOpenRetrival,
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
  } = props;
 

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [searchStateKey, setSearchStateKey] = useState("");
  const [searchCityKey, setSearchCityKey] = useState("");
  const [searchAreaKey, setSearchAreaKey] = useState("");
  const [isCheckedState, setIsCheckedState] = useState("");
  const [isCheckedArea, setIsCheckedArea] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [isCheckedCity, setIsCheckedCity] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   const State = ["Karnataka", "Kolkata", "Uttar Pradesh"];
  const State = stateListResult.payload.length > 0 && stateListResult.payload;
  const StateLength = stateListResult.payload.length;
  const State1 =
    searchStateResult.payload.length > 0 && searchStateResult.payload;
  const State1Length = searchStateResult.payload.length;

  const City = cityListResult.payload.length > 0 && cityListResult.payload;
  const CityLength = cityListResult.payload.length;
  const City1 = searchCityResult.payload.length > 0 && searchCityResult.payload;
  const City1Length = searchCityResult.payload.length;


  // const Area = areaListResult.payload.length > 0 && areaListResult.payload;
  // const AreaLength = areaListResult.payload.length;
  // const Area1 = searchAreaResult.payload.length > 0 && searchAreaResult.payload;
  // const Area1Length = searchAreaResult.payload.length;

  const Area = ["TahsheelDar", "Srjapur Road", "Saket Nagar"];

  const handleStateSearch = (e) => {
    var regex = /^[A-Za-z0-9]+$/;
    setSearchStateKey(e.target.value);
    // console.log(e.target.value,"<<searchKey");

    // setErrorMsg("");

    // if(e.target.value.length === 0){
    //   getBranchListAction();
    // } else if(regex.test(e.target.value)){
    //   searchBranchListAction(e.target.value)
    // } else {
    //   setErrorMsg("Special characters are not allowed")
    // }
  };
  const handleCitySearch = (e) => {
    var regex = /^[A-Za-z0-9]+$/;
    setSearchCityKey(e.target.value);
    // console.log(e.target.value,"<<searchKey");

    // setErrorMsg("");

    // if(e.target.value.length === 0){
    //   getBranchListAction();
    // } else if(regex.test(e.target.value)){
    //   searchBranchListAction(e.target.value)
    // } else {
    //   setErrorMsg("Special characters are not allowed")
    // }
  };
  const handleAreaSearch = (e) => {
    var regex = /^[A-Za-z0-9]+$/;
    setSearchAreaKey(e.target.value);
    // console.log(e.target.value,"<<searchKey");

    // setErrorMsg("");

    // if(e.target.value.length === 0){
    //   getBranchListAction();
    // } else if(regex.test(e.target.value)){
    //   searchBranchListAction(e.target.value)
    // } else {
    //   setErrorMsg("Special characters are not allowed")
    // }
  };

  useEffect(() => {
    if (searchStateKey.length >= 2) {
      const body = {
        c_search_term: searchStateKey,
      };
      SearchStateAction(body);
    } else if (isCheckedState !== "") {
      CityListAction(isCheckedState);
    } else if (isCheckedState !== "" && searchCityKey.length >= 2) {
      const body = {
        c_code: isCheckedState,
        c_search_term: searchCityKey,
      };
      SearchCityAction(body);
    }else if (isCheckedArea !== "" && searchAreaKey.length >= 2) {
      const body = {
        c_code: isCheckedArea,
        c_search_term: searchAreaKey,
      };
      SearchCityAction(body);
    }
  }, [searchStateKey, isCheckedState, searchCityKey]);
  return (
    <>
      {open && (
        <ClickAwayListener onClickAway={handleOpenRetrival}>
          <div className="retrival-filter-menu">
            <div className={classes.root}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                <Tab
                  label={
                    <>
                      <img src={state} alt="Distributor" />
                      State
                    </>
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  label={
                    <>
                      <img src={city} alt="PaymentStatus" />
                      City
                    </>
                  }
                  {...a11yProps(1)}
                />
                <Tab
                  label={
                    <>
                      <img src={area_img} alt="PaymentStatus" />
                      Area
                    </>
                  }
                  {...a11yProps(2)}
                />
              </Tabs>
              <TabPanel value={value} index={0}>
                <div className="retrive-right-sec retrivalFilterRight">
                  <div className="retrive-right-sec-title">
                    <h5>Retrieve By States</h5>
                    <img
                      src={RefreshIcon}
                      alt="RefreshIcon"
                      className="refresh-icon handCursur"
                    />
                  </div>
                  <div>
                    <input
                      value={searchStateKey}
                      onChange={(e) => handleStateSearch(e)}
                      placeholder="Search State"
                      className="serachSellerInput"
                    />
                  </div>
                  <div className="retrivalFilter customScroll">
                      {State1Length ? (
                        <>
                          {State1.map((item, index) => (
                            <div>
                              <FormControlLabel
                                key={index}
                                control={
                                  <Checkbox
                                    icon={
                                      <CheckBoxOutlineBlankIcon fontSize="small" />
                                    }
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    // checked={isChecked ? true : false}
                                    value={item.c_code}
                                    disableRipple
                                    onChange={(e) => {
                                      e.target.checked
                                        ? setIsCheckedState(e.target.value)
                                        : setIsCheckedState("");
                                    }}
                                    color="primary"
                                    className="adduser-checkbox-icon"
                                  />
                                }
                                label={item.c_name}
                                className="adduser-checkbox"
                              />
                            </div>
                          ))}
                        </>
                      ) : (
                        <>
                          {StateLength &&
                            State.map((item, index) => (
                              <div>
                                <FormControlLabel
                                  key={index}
                                  control={
                                    <Checkbox
                                      icon={
                                        <CheckBoxOutlineBlankIcon fontSize="small" />
                                      }
                                      checkedIcon={
                                        <CheckBoxIcon fontSize="small" />
                                      }
                                    //   checked={index === 0 ? false : true}
                                        disableRipple
                                      value={item.c_state_code}
                                      onChange={(e) => {
                                        e.target.checked
                                          ? setIsCheckedState(e.target.value)
                                          : setIsCheckedState("");
                                      }}
                                      color="primary"
                                      className="adduser-checkbox-icon"
                                    />
                                  }
                                  label={item.c_state_name}
                                  className="adduser-checkbox"
                                />
                              </div>
                            ))}
                        </>
                      )}
                  </div>
                </div>
              </TabPanel>






























              <TabPanel value={value} index={1}>
                <div className="retrive-right-sec">
                  <div className="retrive-right-sec-title">
                    <h5>Retrieve By City</h5>
                    <img
                      src={RefreshIcon}
                      alt="RefreshIcon"
                      className="refresh-icon handCursur"
                    />
                  </div>
                  <div>
                    <input
                      value={searchCityKey}
                      onChange={(e) => handleCitySearch(e)}
                      placeholder="Search City"
                      className="serachSellerInput"
                    />
                  </div>
                  <div className="retrivalFilter customScroll">
                      {City1Length ? (
                        <>
                          {City1.map((item, index) => (
                            <div>
                              <FormControlLabel
                                key={index}
                                control={
                                  <Checkbox
                                    icon={
                                      <CheckBoxOutlineBlankIcon fontSize="small" />
                                    }
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    // checked={index === 0 ? true : false}
                                    value={item.c_code}
                                    onChange={(e) => {
                                      e.target.checked
                                        ? setIsCheckedCity(e.target.value)
                                        : setIsCheckedCity("");
                                    }}
                                    color="primary"
                                    className="adduser-checkbox-icon"
                                  />
                                }
                                label={item.c_name}
                                className="adduser-checkbox"
                              />
                            </div>
                          ))}
                        </>
                      ) : (
                        <>
                          {CityLength > 0 ? (
                            City.map((item, index) => (
                              <div>
                                <FormControlLabel
                                  key={index}
                                  control={
                                    <Checkbox
                                      icon={
                                        <CheckBoxOutlineBlankIcon fontSize="small" />
                                      }
                                      checkedIcon={
                                        <CheckBoxIcon fontSize="small" />
                                      }
                                      // checked={index === 0 ? true : false}
                                      value={item.c_city_code}
                                      onChange={(e) => {
                                        e.target.checked
                                          ? setIsCheckedCity(e.target.value)
                                          : setIsCheckedCity("");
                                      }}
                                      color="primary"
                                      className="adduser-checkbox-icon"
                                    />
                                  }
                                  label={item.c_city_name}
                                  className="adduser-checkbox"
                                />
                              </div>
                            ))
                          ) : (
                            <>
                              <h4>Please Select State</h4>
                            </>
                          )}
                        </>
                      )}
                  </div>
                  {/* {City.map((item, index) => (
                    <div>
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            checked={index === 0 ? true : false}
                            color="primary"
                            className="adduser-checkbox-icon"
                          />
                        }
                        label={item}
                        className="adduser-checkbox"
                      />
                    </div>
                  ))} */}
                </div>
              </TabPanel>





















              <TabPanel value={value} index={2}>
                <div className="retrive-right-sec">
                  <div className="retrive-right-sec-title">
                    <h5>Retrieve By Area</h5>
                    <img
                      src={RefreshIcon}
                      alt="RefreshIcon"
                      className="refresh-icon handCursur"
                    />
                  </div>
                  <div>
                    <input
                      value={searchAreaKey}
                      onChange={(e) => handleAreaSearch(e)}
                      placeholder="Search Area"
                      className="serachSellerInput"
                    />
                  </div>
                  <div className="retrivalFilter customScroll">
                      {Area.map((item, index) => (
                        <div>
                          <FormControlLabel
                            key={index}
                            control={
                              <Checkbox
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                checked={index === 0 ? true : false}
                                color="primary"
                                className="adduser-checkbox-icon"
                              />
                            }
                            label={item}
                            className="adduser-checkbox"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </TabPanel>
            </div>
            <button onClick={handleOpenRetrival} className="apply-status">
              Apply Filters
            </button>
          </div>
        </ClickAwayListener>
      )}
    </>
  );
};
export default RetrivalFilterOption;
