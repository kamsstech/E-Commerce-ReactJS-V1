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
// import { useHistory } from "react-router-dom";
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
    GetStateCityArea,
    getStateCityAreaResult,
    Combine_NaStore,
    combineNaStoreResult

  } = props;

  console.log(combineNaStoreResult,"<<<  combineNaStoreResult")

  
  // const array = ['5', 1, 2, '5', '5', 3];

  // const array1= array.filter((item, index) => array.indexOf(item) === index);
  // console.log(array1,"<<< array");

  const data = getStoreCombineListResult.payload;
  

  const mobileNo = localStorage.getItem(Constants.MOBILE_NO);
  const token = localStorage.getItem(Constants.TOKEN);
  const key = localStorage.getItem(Constants.KEY);

  // console.log(token,"<<<<&&&&&&&&&&& token")
  // console.log(key,"<<<<&&&&&&&&&&& key")
  console.log(getStoreCombineListResult.payload && getStoreCombineListResult.payload.length,"<<<<&&&&&&&&&&&$$$$$$$$$$$$$$$$$$ getStoreCombineListResult")

  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([]);
  const [checkedId, setCheckedId] = useState([]);
  const [checkedDrug, setCheckedDrug] = useState([]);
  
  const [pushData, setPushData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [inputsChecked, setCheckedInputs] = React.useState(false);
  const [selectedDrug, setSelectedDrug] = useState([]);
  const [selectedDrugId, setSelectedDrugId] = useState([]);
  const [duplicateAction, setDuplicateAction] = useState("");
  const [dLNum, setDLNum] = useState("");
  const yourArrayWithoutDuplicates = [...new Set(dLNum)];

  let duplicates = [...dLNum];
  yourArrayWithoutDuplicates.forEach((item) => {
    const i = duplicates.indexOf(item);
    duplicates = duplicates
      .slice(0, i)
      .concat(duplicates.slice(i + 1, duplicates.length));
  });

  // console.log(checked,"<<< checked")
  // console.log(checkedId,"<<< checkedId")
  // console.log(checkedDrug,"<<< checkedDrug")

  console.log(selected,"<<< selected")
  console.log(selectedDrugId,"<<< selectedDrugId")
  console.log(selectedDrug,"<<< selectedDrug")
  console.log(duplicateAction,"<<< duplicateAction")
  



  useEffect(() => {
   if(checked.length >1){
    setCheckedInputs(true)
    
   }else{
    setCheckedInputs(false)
   }
  }, [checked])
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
    if (duplicates.length > 0) {
      setDuplicateAction(true);
    } else {
      setDuplicateAction(false);
    }
  }, [duplicates]);
  useEffect(() => {
   console.log(getStoreCombineListResult,"OOOOOOOOOOOOOOOOOOOOOOOOO getStoreCombineListResult")

  //  console.log(getStoreCombineListResult.payload.length,"OOOOOOOOOOOOOOOOOOOOOOOOO getStoreCombineListResult")



    if(getStoreCombineListResult.statuscode === 0){
      if(getStoreCombineListResult.payload.length === 0){
        const body = {
          c_mobile_no: mobileNo,
          c_combine_store_list:selected,
          c_drug_license_list: selectedDrug,
        };
        console.log(body,"<<< Combine_Store")
        Combine_Store(body);
        // history.push("/home")
      }
      else if(getStoreCombineListResult.payload.length >=0){
        if(token === null && key === null){
          const body = {
            c_mobile_no: mobileNo,
            c_combine_store_list:selected,
            c_drug_license_list: selectedDrug,
          };
          console.log(body,"<<< Combine_NaStore")
          // Combine_NaStore(body);
        }
      }
        
    }

  }, [getStoreCombineListResult])

  const combineStoreSelect = () => {
    const body = {
      c_mobile_no: mobileNo,
      c_combine_store_list: selected,
      c_drug_license_list: selectedDrug,
    };
    SaveUnCombineStore(body);
  };


  useEffect(() => {
    setOpen(true);
    setCheckedInputs(false)
    // const body = {
    //   c_mobile_no: mobileNo,
    // };
    // if (saveUnCombineStoreResult.statuscode === 0) {
    //   GetStoreCombineList(body);
    // }
    
  }, [saveUnCombineStoreResult]);

  useEffect(() => {
   
    const body = {
      c_mobile_no: mobileNo,
    };
    if (updateCombineStoreResult.statuscode === 0) {
      GetStoreCombineList(body);
     
    }
    
  }, [updateCombineStoreResult]);




  const CheckboxFilterHandler = (e,index) => {
    const value = e.target.value;
    if (e.target.checked == true) {

      const pushSelectAllData = [];
    const pushSelectDrugAllData = [];
    const pushSelectDrugIdAllData = [];
      if (index === "all") {
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
        setSelectedDrugId(
          selectedDrug.length === pushData.length ? [] : pushSelectDrugAllData
        );
        setSelectedDrug(
          selectedDrugId.length === pushData.length
            ? []
            : pushSelectDrugIdAllData
        );
  
        return;
      }else{
        setChecked([...checked, e.target.value]);
        setCheckedId([...checkedId, e.target.id]);
        setCheckedDrug([...checkedId, e.target.name]);
  
        setSelected([...selected, e.target.value]);
        setSelectedDrugId([...selectedDrugId, e.target.id]);
        setSelectedDrug([...selectedDrug, e.target.name]);
      }



      
     
       
      
    }else if(e.target.checked == false){
      setChecked([])
      setCheckedId([])
      setCheckedDrug([])
      setSelected([])
      setSelectedDrugId([])
      setSelectedDrug([])
    }
    
    
    
    else {
     
      // let check_list = [];
      // checked.map((check) => {
      //   if (check !== e.target.value) {
      //     check_list.push(check);
      //   }
      // });
      // setChecked(check_list);
      
      // let check_list_id = [];
      // checkedId.map((check) => {
      //   if (check !== e.target.id) {
      //     check_list_id.push(check);
      //   }
      // });
      // setCheckedId(check_list_id);

      // let check_drug = [];
      // checkedId.map((check) => {
      //   if (check !== e.target.name) {
      //     check_drug.push(check);
      //   }
      // });

      // setCheckedDrug(check_drug)
    }
  };

  // const isAllSelected =    checked.length > 0 && selected.length === checked.length;
  const isAllSelected =pushData.length > 0 && selectedDrug.length === pushData.length;

  console.log(isAllSelected,"<<<<<<<< isAllSelected")
  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
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
    }else{
      const list = [...selected];
      const index = list.indexOf(value);
      index === -1 ? list.push(value) : list.splice(index, 1);
      setSelected(list);
    }
    
    
  };

  console.log(selected, "<<< selected ALL");


  const handleTakeMeToSubmit=()=>{

     if(getStoreCombineListResult.payload.length >0){
      if(token === null && key === null){
        const body = {
          c_mobile_no: mobileNo,
          c_combine_store_list:selected,
          c_drug_license_list: selectedDrug,
        };
        console.log(body,"<<< Combine_NaStore")
        Combine_NaStore(body);
      }else{
        const body = {
          c_mobile_no: mobileNo,
          c_combine_store_list:selected,
          c_drug_license_list: selectedDrug,
        };
        console.log(body,"<<< selected")
        Combine_Store(body);
      }
    }


   
    // GetStoreCombineList(body);
  }
 

  useEffect(() => {
    if(updateCombineStoreResult.statuscode === 0){
      
      const mobileNo = localStorage.getItem(Constants.MOBILE_NO);
      const body={
        c_mobile_no: mobileNo,
      }
      GetStoreCombineList(body)
      setChecked([]);
      setCheckedId([]);
    }
  }, [updateCombineStoreResult])

  useEffect(() => {
    if(combineStoreResult.statuscode === 0){
      history.push("/home")
    }else if(combineNaStoreResult.statuscode === 0){
      history.push("/home")
    }
    else if(getStoreCombineListResult.statuscode === 0 && getStoreCombineListResult.payload.length === 0){
      // history.push("/login")
    }
    
  }, [combineStoreResult,getStoreCombineListResult])

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
                
                  
                  disabled={inputsChecked ? false : true}
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
            {/* <h4>No Pending Stores to Combine</h4> */}
            <Grid container className="combineStoreList">
              {Array.isArray(data) &&
                data.map((item, index) =>
                  item.map((data, index1) => (
                    <>
                      <Grid item xs={6} key={index1}>
                        <div 
                        // className="singleStore active"
                        className={
                          duplicateAction &&
                          !duplicates.includes(
                            data.c_drug_license_no.slice(
                              data.c_drug_license_no.length - 4
                            )
                          )
                            ? "singleStore1 active" : 

                             (checkedId[0] ===  data.c_drug_license_no.slice(
                              data.c_drug_license_no.length - 4
                            )) ? "singleStore active" :  (checkedId.length > 0) ? "singleStore2 active" : "singleStore active"   

                            
                        }
                        
                        >
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

                                    disabled={
                                      duplicateAction &&
                          !duplicates.includes(
                            data.c_drug_license_no.slice(
                              data.c_drug_license_no.length - 4
                            )
                          )
                            ? true : 

                             ( checkedId[0] ===  data.c_drug_license_no.slice(
                              data.c_drug_license_no.length - 4
                            )) ? false : ((checkedId.length > 0)   ) ? true : false
                                    }


                                    name={data.c_drug_license_no}
                                    value={data.c_br_code}
                                    id={data.c_drug_license_no.slice(data.c_drug_license_no.length - 4)}
                                    onChange={(e) => CheckboxFilterHandler(e,index1)}
                                    color="primary"
                                    // ckecked={!duplicateAction && isAllSelected && selected.length > 0 ? true : false }
                                    // checked={ !duplicateAction === true && isAllSelected && selected.length > 0 ? true : (duplicateAction === true && inputsChecked) ? true :false}
                                    // checked={ inputsChecked ? true :false}
                                    // ckecked={(duplicateAction === true && inputsChecked) ? true : false }
                                        ckecked={!duplicateAction === true && isAllSelected  ? true : false}
                                    // checked={(duplicateAction === true && isAllSelected) ? true:false}
                                   
                                   
                                  />
                                }
                              />
                            </div>
                          </div>
                          <h1>{data.c_firm_name}</h1>
                          <p>
                            Last 4 Digit :{" "}
                            {data.c_drug_license_no.slice(data.c_drug_license_no.length - 4)}
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
                    disabled={!duplicateAction ? false : true}
                      control={
                        <Checkbox
                          name="checkedB"
                          color="primary"
                          value="all"
                          // onChange={handleChange}
                          onChange={(e) => CheckboxFilterHandler(e,"all")}
                          checked={isAllSelected ? true : false}
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
                    disabled={!duplicateAction && selected.length >= 1 ? false : true}
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