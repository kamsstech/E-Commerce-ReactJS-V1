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
import { Link, useHistory } from "react-router-dom";
import AppLogo from "../../../assets/images/LOGO_B_2.svg";
// import AppLogo from "../../../assets/images/landing_logo.svg";
import { Constants } from "../../../common/constant/localstorage";
import CombineStorePopUp from "./popup/CombineStorePopUp";

const StoreNameCombine = (props) => {
  let history = useHistory();
  const mobileNo = localStorage.getItem(Constants.MOBILE_NO);
  const {
    GetStoreCombineList,
    getStoreCombineListResult,
    SaveUnCombineStore,
    saveUnCombineStoreResult,
    UpdateCombineStore,
    updateCombineStoreResult,
    Combine_Store,
    combineStoreResult,
    GetStateCityArea,
    getStateCityAreaResult,
  } = props;

  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState([]);
  const [checkedId, setCheckedId] = useState([]);
  const [selected, setSelected] = useState([]);
  const [inputsChecked, setCheckedInputs] = React.useState(false);
  const [selectedDrug, setSelectedDrug] = useState([]);
  const [selectedDrugId, setSelectedDrugId] = useState([]);
  const [pushData, setPushData] = useState([]);
  const [dLNum, setDLNum] = useState("");
  const [duplicateAction, setDuplicateAction] = useState("");
  const [findDuplicates, setFindDuplicates] = useState(false);
  const [idValue, setIdValue] = useState("");
  const yourArrayWithoutDuplicates = [...new Set(dLNum)];

  let duplicates = [...dLNum];
  yourArrayWithoutDuplicates.forEach((item) => {
    const i = duplicates.indexOf(item);
    duplicates = duplicates
      .slice(0, i)
      .concat(duplicates.slice(i + 1, duplicates.length));
  });

  //   console.log(duplicates, "<<<<$$$$$$$ duplicates");

  useEffect(() => {
    //   console.log(duplicates,"<<< duplicates[0]")
    if (selectedDrug[0]) {
      // console.log(selectedDrug[0].slice(selectedDrug[0].length - 4),"<<< selectedDrug[0]")
      if (
        duplicates.includes(selectedDrug[0].slice(selectedDrug[0].length - 4))
      ) {
        setFindDuplicates(true);
      } else {
        setFindDuplicates(false);
      }
    }
    //   console.log(selectedDrug[0].slice(selectedDrug[0].length - 4),"<<< selectedDrug[0]")
  }, [selectedDrug]);

  // console.log(pushData,"<<< pushDataAAAAA")
  console.log(selected, "<<< selectedAAAAA");
  console.log(selectedDrugId, "<<< selectedDrugIdddddddd");
  // console.log(checked, "<<< checkedAAAAA");
  // console.log(selectedDrug, "<<< selectedDrugggggg");

  // console.log(duplicateAction, "<<<<$$$$$$$ duplicateAction");
  // console.log(findDuplicates, "<<<<$$$$$$$ findDuplicates");
  // console.log(idValue, "<<<<$$$$$$$ idValue");
  console.log(duplicates, "<<<<$$$$$$$ duplicates");

  const CheckboxFilterHandler = (e, index) => {
    if (e.target.checked == true) {
      setChecked([...checked, e.target.value]);
      setCheckedId([...checkedId, e.target.id]);
      setIdValue(e.target.id);
    } else if (e.target.checked == false) {
      setChecked([...checked, ""]);
      setCheckedId([...checkedId, ""]);
      setIdValue("");
    } else {
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
    pushData.length > 0 && selectedDrug.length === pushData.length;
  // console.log(isAllSelected, "<<< isAllSelected")

  const handleChange = (e, value, id, drugId) => {
    e.preventDefault();
    console.log(e.target.value, "<<<< VALUEEEEEEEEEEE");

    const checkedAction = e.target.checked;
    const checkedValue = e.target.value;

    // const id = e.target.id;
    setIdValue(id);
    // if (checkedAction) {
      const pushSelectAllData = [];
      const pushSelectDrugAllData = [];
      const pushSelectDrugIdAllData = [];

      if (value === "all") {
        pushData.map((item1) => {
          pushSelectAllData.push(item1.c_br_code);
        });

        pushData.map((item1) => {
          // pushSelectDrugAllData.push(item1.c_drug_license_no);
          pushSelectDrugAllData.push(
            item1.c_drug_license_no.slice(item1.c_drug_license_no.length - 4)
          );
        });

        pushData.map((item1) => {
          pushSelectDrugIdAllData.push(item1.c_drug_license_no);
        });

        // console.log(pushSelectAllData,"<<< 1 list")
        setSelected(
          selected.length === pushData.length ? [] : pushSelectAllData
        );
        setSelectedDrug(
          selectedDrug.length === pushData.length ? [] : pushSelectDrugAllData
        );
        setSelectedDrugId(
          selectedDrugId.length === pushData.length
            ? []
            : pushSelectDrugIdAllData
        );

        return;
      } else {
        // let list = [];

        // if (e.target.checked == true) {
        //   setChecked([...checked, e.target.value]);
        //   setCheckedId([...checkedId, e.target.id]);
        //   setIdValue(e.target.id);

        // } else if (e.target.checked == false) {
        //   setChecked([...checked, ""]);
        //   setCheckedId([...checkedId, ""]);
        //   setIdValue("");
        // } else {
        //   let check_list = [];
        //   checked.map((check) => {
        //     if (check !== e.target.value) {
        //       check_list.push(check);
        //     }
        //   });
        //   setChecked(check_list);

        //   let check_list_id = [];
        //   checkedId.map((check) => {
        //     if (check !== e.target.id) {
        //       check_list_id.push(check);
        //     }
        //   });
        //   setCheckedId(check_list_id);
        // }

        const list = [...selected];
        const list1 = [...selectedDrug];
        const list2 = [...selectedDrugId];

        // const index = list.indexOf(value);
        // index === -1 ? list.push(value) : list.splice(index, 1);
        // list.push(...selected, value)
        // setSelected([...selected, value]);

        // list.push(...selected, checkedValue);
        const index = list.indexOf(value);
        index === -1 ? list.push(value) : list.splice(index, 1);

        const index1 = list1.indexOf(id);
        index1 === -1 ? list1.push(id) : list1.splice(index1, 1);

        const index2 = list2.indexOf(drugId);
        index2 === -1 ? list2.push(drugId) : list2.splice(index2, 1);

        setSelected(list);
        setSelectedDrug(list1);
        setSelectedDrugId(list2);
      }
    // } else {
    //   setSelected([]);
    //   setSelectedDrug([]);
    //   setSelectedDrugId([]);
    // }
  };

  const combineStoreSelect = () => {
    const body = {
      c_mobile_no: mobileNo,
      c_combine_store_list: selected,
      c_drug_license_list: selectedDrugId,
    };
    console.log(body, "<<< SaveUnCombineStore");
    SaveUnCombineStore(body);
  };

  const handleTakeMeToSubmit = () => {
    const body = {
      c_mobile_no: mobileNo,
      c_combine_store_list: selected,
      c_drug_license_list: selectedDrugId,
    };
    // console.log(body,"<<< selected")
    Combine_Store(body);
    // GetStoreCombineList(body);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const listItem =
    Array.isArray(data) &&
    data !== undefined &&
    data.map((data1, index1) => {
      return data1.map((data2, index2) => {
        return (
          <Grid item xs={6}>
            {/* <div className="singleStore"> */}
            <div
              className={
                duplicateAction &&
                !duplicates.includes(
                  data2.c_drug_license_no.slice(
                    data2.c_drug_license_no.length - 4
                  )
                )
                  ? "singleStore1 active"
                  : "singleStore active"
              }
            >
              <div>
                <span class="storeCount">Store</span>
                <div className="storeCheck">
                  <FormControlLabel
                    // disabled={
                    //   !duplicateAction &&
                    //   !(duplicates.includes(
                    //     (data2.c_drug_license_no.slice(
                    //       data2.c_drug_license_no.length - 4
                    //     ))
                    //   ))
                    //     ? false :  true
                    // }

                    disabled={
                      duplicateAction &&
                      !duplicates.includes(
                        data2.c_drug_license_no.slice(
                          data2.c_drug_license_no.length - 4
                        )
                      )
                        ? true
                        : false
                    }
                    // disabled={ (!selectedDrug.includes(
                    //   !data2.c_drug_license_no.slice(
                    //     data2.c_drug_license_no.length - 4
                    //   )
                    // )) ? false: true}
                    control={
                      <Checkbox
                        name="checked Value"
                        color="primary"
                        onChange={(e) =>
                          handleChange(
                            e,
                            data2.c_br_code,
                            data2.c_drug_license_no.slice(
                              data2.c_drug_license_no.length - 4
                            ),
                            data2.c_drug_license_no
                          )
                        }
                        // onChange={(e) =>
                        //   CheckboxFilterHandler(e, index2)
                        // }

                        // onClick={(e) =>
                        // 	CheckboxFilterHandler(e, index2)
                        //   }

                        checked={
                          selectedDrug.includes(
                            data2.c_drug_license_no.slice(
                              data2.c_drug_license_no.length - 4
                            )
                          )
                            ? true
                            : false
                        }


                        value={data2.c_br_code}
                        id={data2.c_drug_license_no.slice(
                          data2.c_drug_license_no.length - 4
                        )}
                      />
                    }
                  />
                </div>
              </div>
              <h1>{data2.c_firm_name}</h1>
              <p>Br Code : {data2.c_br_code}</p>
              <p>
                Last 4 Digit :{" "}
                {data2.c_drug_license_no.slice(
                  data2.c_drug_license_no.length - 4
                )}
              </p>
              <p>
                <span className="font-weight-600">{data2.c_address_no1}, </span>
                {data2.c_address_no2},{data2.c_state_name},{data2.c_city_name},
                {data2.c_area_name}
                {data2.c_pincode}
              </p>
              <div class="informations">
                <span class="drugLicense mr-r-8">
                  <span className="font-weight-600">Drug License: </span>
                  {data2.c_drug_license_no}
                </span>
                |
                <span class="gstNo mr-l-8">
                  <span className="font-weight-600">GST No.: </span>
                  {data2.c_gst_number}
                </span>
              </div>
            </div>
          </Grid>
        );
      });
    });

  useEffect(() => {
    const body = {
      c_mobile_no: mobileNo,
    };
    GetStoreCombineList(body);
  }, []);

  useEffect(() => {
    if (getStoreCombineListResult.payload) {
      setData(getStoreCombineListResult.payload);
    }
  }, [getStoreCombineListResult.payload]);

  useEffect(() => {
    const pushArrayData = [];
    if (data !== undefined && data.length > 0) {
      Object.values(data).map((item, index) => {
        item.map((item1) => {
          pushArrayData.push(item1);
        });
      });
    }
    setPushData(pushArrayData);
  }, [data]);

  useEffect(() => {
    setOpen(true);
    setCheckedInputs(false);
    setIdValue("");
  }, [saveUnCombineStoreResult]);

  useEffect(() => {
    let dlArray = [];
    if (data !== undefined && data.length > 0 && Array.isArray(data)) {
      data.map((item, index) =>
        item.map((item1, index1) =>
          // dlArray.push(item1.c_drug_license_no)
          dlArray.push(
            item1.c_drug_license_no.slice(item1.c_drug_license_no.length - 4)
          )
        )
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

  useEffect(() => {
    if (updateCombineStoreResult.statuscode === 0) {
      setSelected([]);
      setSelectedDrug([]);
      setSelectedDrugId([]);
      //   const mobileNo = localStorage.getItem(Constants.MOBILE_NO);
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
        GetStateCityArea={GetStateCityArea}
        getStateCityAreaResult={getStateCityAreaResult}
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
                  disabled={
                    duplicateAction &&
                    selected.length > 0 &&
                    findDuplicates &&
                    selectedDrug.length > 0
                      ? false
                      : true
                  }
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
            <Grid container className="combineStoreList">
              {data !== [] && listItem}
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
                      disabled={!duplicateAction ? false : true}
                      control={
                        <Checkbox
                          name="checkedB"
                          color="primary"
                          value="all"
                          id="all"
                          onChange={(e) => handleChange(e, "all", "all", "all")}
                          // onClick={(e) =>
                          // 	CheckboxFilterHandler(e, 1)
                          //   }

                          checked={isAllSelected}
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
                      !duplicateAction && selected.length > 0 && isAllSelected
                        ? false
                        : true
                    }
                    color="primary"
                    variant="contained"
                    className="btn-compain btn-takeme"
                    component="span"
                    onClick={handleTakeMeToSubmit}
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
