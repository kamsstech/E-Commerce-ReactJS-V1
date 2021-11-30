import React, { useState, useEffect } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import "./css/CombineStore.css";

import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import AppLogo from "../../../assets/images/landing_logo.svg";
import { Constants } from "../../../common/constant/localstorage";
import CombineStorePopUp from "./popup/CombineStorePopUp";
import { Link, useHistory } from "react-router-dom";

const StoreNameCombine = (props) => {
  let history = useHistory();
  const {
    GetStoreCombineList,
    getStoreCombineListResult,
    SaveUnCombineStore,
    saveUnCombineStoreResult,
    UpdateCombineStore,
    updateCombineStoreResult,
    Combine_Store,
    combineStoreResult,
  } = props;

  // const array = ['5', 1, 2, '5', '5', 3];

  // const array1= array.filter((item, index) => array.indexOf(item) === index);
  // console.log(array1,"<<< array");

  const data = getStoreCombineListResult.payload;

  const mobileNo = localStorage.getItem(Constants.MOBILE_NO);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([]);
  const [checkedId, setCheckedId] = useState([]);

  const [selected, setSelected] = useState([]);
  const [inputsChecked, setCheckedInputs] = React.useState(false);
  const [idValue, setIdValue] = useState("");
  console.log(idValue, "<<<< idValueidValueidValueidValue")
  const [dLNum, setDLNum] = useState("");
  const [keyValue, setKeyValue] = useState(null);
  const [tokenValue, setTokenValue] = useState(null);

  const [duplicateAction, setDuplicateAction] = useState("");
  const yourArrayWithoutDuplicates = [...new Set(dLNum)];
  let duplicates = [...dLNum];
  yourArrayWithoutDuplicates.forEach((item) => {
    const i = duplicates.indexOf(item);
    duplicates = duplicates
      .slice(0, i)
      .concat(duplicates.slice(i + 1, duplicates.length));
  });

  useEffect(() => {
    let dlArray = [];
    if (Array.isArray(data)) {
      data.map((item, index) =>
        item.map((item1, index1) =>
          // dlArray.push(item1.c_drug_license_no)
          dlArray.push(
            item1.c_drug_license_no.slice(item1.c_drug_license_no.length - 4)
          )
        )
        //
      );
    }
    setDLNum(dlArray);
  }, [data]);

  useEffect(() => {
    if (duplicates.length > 0) {
      setDuplicateAction(true);
    } else {
      setDuplicateAction(false);
    }
  }, [duplicates]);

  console.log(dLNum, "<<<  DL 4 Digit Number");
  console.log(duplicateAction, "<<< duplicateAction");

  // console.log(checked,"<<< checked")
  // console.log(checkedId,"<<< checkedId")
  useEffect(() => {
    if (checked.length === 1) {
      const tok = localStorage.getItem(Constants.TOKEN);

      const key = localStorage.getItem(Constants.KEY);
      setKeyValue(key);
      setTokenValue(tok);
      //  console.log(tok,"<<<<<< TOKEN")
      //  console.log(key,"<<<<<< KEY")
      if (data.length === 1) {
        if (key === null && tok === null) {
          setCheckedInputs(true);
        }
      }
    } else if (checked.length > 1) {
      setCheckedInputs(true);
    } else {
      setCheckedInputs(false);
    }
  }, [checked]);
  const handleClose = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const body = {
      c_mobile_no: mobileNo,
    };
    GetStoreCombineList(body);
  }, []);

  useEffect(() => {
    // console.log(getStoreCombineListResult,"<<<< getStoreCombineListResult")
  }, [getStoreCombineListResult]);

  const combineStoreSelect = () => {
    const body = {
      c_mobile_no: mobileNo,
      c_combine_store_list: checked,
    };
    SaveUnCombineStore(body);
  };
  useEffect(() => {
    setOpen(true);
    setCheckedInputs(false);
    setIdValue("");
  }, [saveUnCombineStoreResult]);

  const CheckboxFilterHandler = (e, index) => {
    if (e.target.checked == true) {
      setChecked([...checked, e.target.value]);
      setCheckedId([...checkedId, e.target.id]);
      setIdValue(e.target.id);
    }else if(e.target.checked == false){
      setChecked([...checked, ""]);
      setCheckedId([...checkedId, ""]);
      setIdValue("");
    }else {
      let check_list = [];
      checked.map((check) => {
        if (check !== e.target.value) {
          check_list.push(check);
        }
      });
      setChecked(check_list);

      let check_list_id = [];
      checkedId.map((check) => {
        if (check !== e.target.id) {
          check_list_id.push(check);
        }
      });
      setCheckedId(check_list_id);
    }
  };

  const isAllSelected =
    checked.length > 0 && selected.length === checked.length;

  const handleChange = (event) => {
    const value = event.target.value;

    if (value === "all") {
      setSelected(selected.length === checked.length ? checked : checked);
      return;
    }
    // added below code to update selected options
    const list = [...selected];
    const index = list.indexOf(value);
    index === -1 ? list.push(value) : list.splice(index, 1);
    setSelected(list);
  };

  // console.log(selected, "<<< selected ALL");

  const handleTakeMeToSubmit = () => {
    const body = {
      c_mobile_no: mobileNo,
      c_combine_store_list: selected,
    };
    // console.log(body,"<<< selected")
    Combine_Store(body);
    // GetStoreCombineList(body);
  };

  useEffect(() => {
    if (updateCombineStoreResult.statuscode === 0) {
      setChecked([]);
      const mobileNo = localStorage.getItem(Constants.MOBILE_NO);
      const body = {
        c_mobile_no: mobileNo,
      };
      GetStoreCombineList(body);
    }
  }, [updateCombineStoreResult]);

  useEffect(() => {
    if (combineStoreResult.statuscode === 0) {
      history.push("/home");
    } else if (
      getStoreCombineListResult.statuscode === 0 &&
      getStoreCombineListResult.payload.length === 0
    ) {
      // history.push("/login")
    }
  }, [combineStoreResult, getStoreCombineListResult]);
  return (
    <>
      <CombineStorePopUp
        open={open}
        handleClose={handleClose}
        saveUnCombineStoreResult={saveUnCombineStoreResult}
        UpdateCombineStore={UpdateCombineStore}
        updateCombineStoreResult={updateCombineStoreResult}
        GetStoreCombineList={GetStoreCombineList}
      />
      <AppBar color="inherit" position="static" className="combineStore">
        <Container fixed>
          <Toolbar className="header-top-sec pd-l-0 pd-r-0">
            <Link to="/">
              <img src={AppLogo} alt={AppLogo} className="website-logo" />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Container fixed className="combineStoreContent">
        <div className="scrolling">
          <div className="sub-container">
            <Grid container className="combineStoreHeader">
              <Grid item xs={8}>
                <span class="verification-span">One Small Verification</span>
                <h1>
                  <span>{mobileNo}</span> is tagged to multiple stores in our
                  database. <br />
                  Verify your store details and merge duplicate entries.{" "}
                </h1>
              </Grid>

              <Grid item xs={4} className="text-right">
                <Button
                  // disabled={inputsChecked && duplicateAction ? false : true}
                  disabled={inputsChecked && idValue !=="" ? false : true}
                  color="primary"
                  variant="contained"
                  className="btn-compain"
                  component="span"
                  onClick={combineStoreSelect}
                >
                  Combine Selected
                </Button>
              </Grid>
            </Grid>
            {getStoreCombineListResult.payload &&
              getStoreCombineListResult.payload.length === 0 && <></>}
            {getStoreCombineListResult.payload &&
              getStoreCombineListResult.payload.length === 0 && (
                <FormControlLabel
                  control={
                    <Checkbox
                      name={"all"}
                      value={""}
                      id={""}
                      onChange={(e) => CheckboxFilterHandler(e, 1)}
                      color="primary"
                    />
                  }
                  label={<h4>No Pending Stores to Combine</h4>}
                />
              )}
            <Grid container className="combineStoreList">
              {Array.isArray(data) &&
                data.map((item, index) =>
                  item.map((data, index1) => (
                    <>
                      <Grid item xs={6} key={index1}>
                        <div
                          className={
                            duplicateAction &&
                            idValue !== "" &&
                            !(
                              data.c_drug_license_no.slice(
                                data.c_drug_license_no.length - 4
                              ) === idValue
                            )
                              ? "singleStore1 active"
                              : "singleStore active"
                          }
                        >
                          {/* <div className="singleStore active"> */}

                          <div>
                            <span class="storeCount">Store</span>
                            <div className="storeCheck">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    // disabled={
                                    //   (((checkedId[0] === [])) ? true : false)  ||
                                    //   ((data.c_drug_license_no.slice(data.c_drug_license_no.length - 4) !== checkedId[0]) ? false :true)
                                    // }
                                    // selected={(data.c_drug_license_no.slice(data.c_drug_license_no.length - 4)=== idValue) ? false: true}

                                    disabled={
                                      duplicateAction &&
                                      idValue !== "" &&
                                      !(
                                        data.c_drug_license_no.slice(
                                          data.c_drug_license_no.length - 4
                                        ) === idValue
                                      )
                                        ? true
                                        : false
                                    }

                                    name={data.c_br_code}
                                    value={data.c_br_code}
                                    id={data.c_drug_license_no.slice(
                                      data.c_drug_license_no.length - 4
                                    )}
                                    onChange={(e) =>
                                      CheckboxFilterHandler(e, index1)
                                    }
                                    color="primary"
                                  />
                                }
                              />
                            </div>
                          </div>
                          <h1>{data.c_firm_name}</h1>
                          <p>
                            Last 4 Digit :{" "}
                            {data.c_drug_license_no.slice(
                              data.c_drug_license_no.length - 4
                            )}
                          </p>
                          <p>
                            <span className="font-weight-600">
                              {data.c_address_no1},{" "}
                            </span>
                            {data.c_address_no2},{data.c_state_name},
                            {data.c_city_name},{data.c_area_name}
                            {data.c_pincode}
                          </p>
                          <div class="informations">
                            <span class="drugLicense mr-r-8">
                              <span className="font-weight-600">
                                Drug License:{" "}
                              </span>
                              {data.c_drug_license_no}
                            </span>
                            |
                            <span class="gstNo mr-l-8">
                              <span className="font-weight-600">GST No.: </span>
                              {data.c_gst_number}
                            </span>
                          </div>
                        </div>
                      </Grid>
                    </>
                  ))
                )}
            </Grid>
          </div>
        </div>
      </Container>

      <AppBar color="inherit" position="static" className="combineStoreFooter">
        <Container fixed>
          <div className="sub-container">
            <Grid container className="combineStoreFooterSec">
              <Grid item xs={8}>
                <div className="terms">
                  <p>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="checkedB"
                          color="primary"
                          value="all"
                          onChange={handleChange}
                          checked={
                            isAllSelected
                          }
                        />
                      }
                    />
                    I Agree, all above stores are separate Stores.
                  </p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="takeme">
                  <Button
                    disabled={
                       
                      ((selected.length >= 1  ? false : true) ||
                      (getStoreCombineListResult.payload.length === 0
                        ? false
                        : false))
                    }
                    color="primary"
                    variant="contained"
                    className="btn-compain btn-takeme"
                    onClick={handleTakeMeToSubmit}
                    component="span"
                  >
                    Take me to Live Order
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </AppBar>
    </>
  );
};

export default StoreNameCombine;
