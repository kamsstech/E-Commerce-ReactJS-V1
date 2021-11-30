import * as React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ENV } from "../../../common/constant/env";
import axios from "axios";
import { Constants } from "../../../common/constant/localstorage";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";

import phone from "../../../assets/images/phone.svg";
import User from "../../../assets/images/user.svg";
import Email from "../../../assets/images/email.svg";
import Address from "../../../assets/images/address.svg";
import Zipcode from "../../../assets/images/zip_code.svg";
import Worldwide from "../../../assets/images/worldwide.svg";
import City from "../../../assets/images/city.svg";
import Shape from "../../../assets/images/shape.svg";
import PlusPurple from "../../../assets/images/plus-purple.svg";
import Landmark from "../../../assets/images/landmark.svg";
import Autocomplete from "@material-ui/lab/Autocomplete";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CircularProgress from "@material-ui/core/CircularProgress";

import ItemDesc from "../pdp/ItemDesc";

import RegisterNumCheckPopup from "./Popup/RegisterNumCheckPopup";

const PrettoSlider = withStyles({
  root: {
    color: "#674cf3",
    height: 8,
    width: "12em",
    marginLeft: 10,
  },
  thumb: {
    height: 22,
    width: 22,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -4,
    marginLeft: -8,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    // left: 'calc(-50% + 4px)',
  },
  track: {
    height: 16,
    borderRadius: 8,
  },
  rail: {
    height: 16,
    borderRadius: 8,
  },
})(Slider);

const AddUser = (props) => {
  let history = useHistory();
  const {
    match,
    getBranchListAction,
    branchListResult,
    AddUserAction,
    addUserResult,
    GetUserInfoAction,
    userInfoResult,
    StateListAction,
    stateListResult,
    CityListAction,
    cityListResult,
    AreaListAction,
    areaListResult,
    clearAddUser,
    clearGetUserInfo,
    validateREGISTERResult,
    validateREGISTER
  } = props;

  console.log(addUserResult, "<<<addUserResult");

  const [state, setState] = useState("00000");
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");
  const [city, setCity] = useState("00000");
  const [cityCode, setCityCode] = useState("");
  const [cityName, setCityName] = useState("");
  const [area, setArea] = useState("00000");
  const [areaCode, setAreaCode] = useState("");
  const [areaName, setAreaName] = useState("");
  const [gstType, setGstType] = useState("00000");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    StateListAction();
  }, []);

  useEffect(() => {
    // const form = new FormData();
    // form.append("c_state_code",state)
    // CityListAction(form);
    let state_arr = [];
    state_arr = state.split(/[,]+/);
    // console.log(state,"state");
    setStateCode(state_arr[0]);
    setStateName(state_arr[1]);

    // console.log(state_arr[0],"ARRAY 1");
    // console.log(state_arr[1],"ARRAY 2");

    CityListAction(state_arr[0]);
  }, [state]);

  useEffect(() => {
    // const form = new FormData();
    // form.append("c_city_code",city)
    // AreaListAction(form);

    let city_arr = [];
    city_arr = city.split(/[,]+/);

    setCityCode(city_arr[0]);
    setCityName(city_arr[1]);

    AreaListAction(city_arr[0]);
  }, [city]);

  useEffect(() => {
    // const form = new FormData();
    // form.append("c_city_code",city)
    // AreaListAction(form);

    let area_arr = [];
    area_arr = area.split(/[,]+/);

    setAreaCode(area_arr[0]);
    setAreaName(area_arr[1]);

    // AreaListAction(city_arr[0]);
  }, [area]);

  const handleChanges = (event) => {
    let { name, value } = event.target;
    if (name === "c_state_name") {
      setState(event.target.value);
    } else if (name === "c_city_name") {
      setCity(event.target.value);
    } else if (name === "c_area_name") {
      setArea(event.target.value);
    } else if (name === "c_gst_type") {
      setGstType(event.target.value);
    }
  };
  const [errorMsg, setErrorMsg] = useState("");
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [value, setValue] = React.useState([0, 100]);
  const [branchPayLoad, setBranchPayLoad] = useState([]);
  const [val, setValues] = React.useState({});

  const [inputs, setInputs] = useState({
    c_address_1: "",
    c_address_2: "",
    c_state_name: "",
    c_area_name: "",
    c_city_name: "",
    c_state_code: "",
    c_area_code: "",
    c_city_code: "",
    c_email: "",
    c_mobile_no: "",
    c_name: "",
    c_pincode: "",
    j_role: [
      {
        n_firm_id: -1,
        n_granted_per: "month",
        n_max_value: 0,
        n_min_value: 0,
        n_place_order: "N",
        n_view_transaction: "Y",
      },
    ],
  });
  const [updatedInput, setUpdatedInput] = useState([]);

  const [errors, setErrors] = useState({
    c_mobile_no: false,
    c_name: false,
    c_email: false,
    c_address_1: false,
    c_address_2: false,
    c_area_name: false,
    c_city_name: false,
    c_state_name: false,
    c_pincode: false,
    j_role: [
      {
        n_firm_id: false,
        n_view_transaction: false,
        n_place_order: false,
        n_min_value: false,
        n_max_value: false,
        n_granted_per: false,
      },
    ],
  });
  // useEffect(()=>{
  //   let s:any =[]
  //   s = branchListResult.payload
  //   Object.keys(s).map((item)=>{
  //     s['disabled'] = false
  //   })

  //   console.log("jim",s)
  // },[branchListResult])
  const handleInputChange = (event, role, index) => {
    //  console.log("role",role );
    //console.log("index111",index);
    let p = [];
    setErrorMsg("");
    let { name, value } = event.target;
    // console.log("role",value );
    let s = [];

    let a = [];
    s = branchPayLoad;

    let pp = {};
    pp = val;
    Object.keys(pp).map((kl, indexItem) => {
      if (index != undefined) {
        pp[index] = value;

        setValues(pp);
      }
    });

    {
      s.map((item, index8) => {
        s[index8]["disabled"] = false;
        Object.keys(pp).map((a) => {
          if (item.c_br_code == pp[a]) {
            s[index8]["disabled"] = true;
          }
        }); //pp
      });
    }

    let k = [];

    k = inputs.j_role.filter((item, i) => item.n_firm_id == value);
    //let id:any = s.indexOf('924');console.log("kin",id)
    var id = s.map((o) => o.c_br_code).indexOf(value);
    var ids = [];
    {
      k.map((rights, index1) => {
        let dd = s.map((o) => o.c_br_code).indexOf(rights.n_firm_id);
        ids.push(dd);
      });
    }

    setErrors({ ...errors, [name]: false });

    if (role !== undefined && index !== undefined) {
      //  let temp = [...inputs.j_role];
      let temp = [...updatedInput];

      temp[index][name] = value;

      //setInputs({...inputs, j_role: temp});
      setUpdatedInput(temp);

      let tempError = [...errors.j_role];
      tempError[index][name] = false;

      setErrors({ ...errors, j_role: tempError });
    } else {
      if (name === "c_mobile_no") {
        if (value.length > 10) {
          value = value.slice(0, 10);
        } else {
          setInputs({ ...inputs, [name]: value });
          // let type = "";
          // if (inputs.c_buyer === "Y") {
          //   type = "B";
          // } else if (inputs.c_seller === "Y") {
          //   type = "S";
          // }

        // if(value.length === 10){
        //   const body = {
        //     c_mobile_no: value,
        //   };
        //   validateREGISTER(body);
        // }
        }
      } else if (name === "c_name") {
        if (value.length > 16) {
          value = value.slice(0, 16);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
      } else if (name === "c_address_1" || name === "c_address_2") {
        if (value.length > 20) {
          value = value.slice(0, 20);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
      } else if (name === "c_pincode") {
        if (value.length > 6) {
          value = value.slice(0, 6);
        } else {
          setInputs({ ...inputs, [name]: value, c_state_name: "" });
        }
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    }
  };

  const handleBlur = (e) => {
    let { name, value } = e.target;

    if (name === "c_mobile_no") {
      if (value.length <= 10) {
        if (!/^[6-9]\d{9}$/.test(value)) {
          setErrors({ ...errors, [name]: true });
        }
        else if(value.length === 10){
          // setErrors({ ...errors, [name]: true });
          // setInputs({ ...inputs, [name]: "" });
          const body = {
            c_mobile_no: inputs.c_mobile_no,
          };
          validateREGISTER(body);
        }
      }
    } else if (
      (name === "c_address_1" || name === "c_address_2") &&
      value !== ""
    ) {
      if (value.length < 4) {
        setErrors({ ...errors, [name]: true });
      }
    } else if (name === "c_name") {
      if (!/^[A-Za-z\s]+$/.test(value) || value.length < 4) {
        setErrors({ ...errors, [name]: true });
      }
    } else if (name === "c_email") {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        setErrors({ ...errors, [name]: true });
      }
    }
    //  else if(name === "c_pincode" && value !==""){
    //   if(value.length < 6){
    //     setErrors({ ...errors, [name]: true });
    //   }
    // }
    else if (name === "c_pincode") {
      if (value.length <= 6) {
        if (!/^[1-9]\d{5}$/.test(value)) {
          setErrors({ ...errors, [name]: true });
        }
      }
    }
  };

  const handleCheckbox = (name, index) => (event) => {
    setErrorMsg("");
    let checked = event.target.checked === true ? "Y" : "N";
    let temp = [...inputs.j_role];

    if(name === "n_view_transaction"){
      console.log(event.target.checked,"<<< n_view_transaction")
      temp[index][name] = event.target.checked;
      // temp[index][name] = checked
    }else if (name === "n_place_order") {
      temp[index]["n_min_value"] = 0;
      temp[index]["n_max_value"] = 10000;
      console.log(event.target.checked,"<<< n_place_order")
      temp[index][name] = checked
    } 
    // else {
    //   temp[index]["n_min_value"] = 0;
    //   temp[index]["n_max_value"] = 1;
    // }

    // temp[index][name] = checked;

    setInputs({ ...inputs, j_role: temp });

    let tempError = [...errors.j_role];
    tempError[index]["n_place_order"] = false;
    setErrors({ ...errors, j_role: tempError });
  };

  const handleAddStore = () => {
    // if(Array.isArray(branchPayLoad) && branchPayLoad.length > inputs.j_role.length){ alert()
    //  if(Array.isArray(branchPayLoad) && branchPayLoad.length > 1 ){
    //   setErrorMsg("")
    //   const inputRow = {
    //     n_firm_id: -1,
    //     n_view_transaction: "1",
    //     n_place_order: "0",
    //     n_min_value: 0,
    //     n_max_value: 1,
    //     n_granted_per: "day",
    //   }

    //   let tempInput = [...updatedInput];
    //   tempInput = [...tempInput, inputRow]
    //   console.log(tempInput)

    //   const errorRow = {
    //     n_firm_id: false,
    //     n_view_transaction: false,
    //     n_place_order: false,
    //     n_min_value: false,
    //     n_max_value: false,
    //     n_granted_per: false,
    //   }

    //   let tempError = [...errors.j_role];
    //   tempError = [...tempError, errorRow]

    //   setInputs({...inputs, j_role: tempInput});
    //   setErrors({...errors, j_role: tempError});
    // }
    // }

    setErrorMsg("");
    const inputRow = {
      n_firm_id: -1,
      n_view_transaction: "N",
      n_place_order: "N",
      n_min_value: 0,
      n_max_value: 1,
      n_granted_per: "month",
    };

    let tempInput = [...updatedInput];
    tempInput = [...tempInput, inputRow];
    console.log(tempInput);

    const errorRow = {
      n_firm_id: false,
      n_view_transaction: false,
      n_place_order: false,
      n_min_value: false,
      n_max_value: false,
      n_granted_per: false,
    };

    let tempError = [...errors.j_role];
    tempError = [...tempError, errorRow];

    setInputs({ ...inputs, j_role: tempInput });
    setErrors({ ...errors, j_role: tempError });
  };

  const handleDeleteStore = (index) => {
    setErrorMsg("");
    // let filterInputArray: AddUserRoleEntity[] = updatedInput.filter((item, i) => i !== index);
    let filterInputArray = updatedInput.filter((item, i) => i !== index);
    let filterErrorArray = errors.j_role.filter((item, i) => i !== index);
    let remList = {};
    remList = val;
    delete remList[index];
    setValue(remList);
    //console.log("filter",filterInputArray);return
    // setInputs({...inputs,j_role: filterInputArray});
    setUpdatedInput(filterInputArray);
    setInputs({ ...inputs, j_role: filterInputArray });
    setErrors({ ...errors, j_role: filterErrorArray });
  };

  const handleSubmit = (action) => {
    console.log(action,"<< userId");

    // setErrorMsg("");\
    const checkRoleError = () => {
      let result = false;
      let tempError = errors.j_role;
      let index = 0;
      let s = [];
      // inputs.j_role.map((item)=>{
      //   if(item.n_place_order == "1" || item.n_view_transaction == "1"){
      //     s.push(item)
      //   }
      // })
      updatedInput.map((item) => {
        s.push(item);
      });

      // for( let item of inputs.j_role){
      for (let item of s) {
        if (item.n_firm_id === -1) {
          tempError[index]["n_firm_id"] = true;
          setErrors({ ...errors, j_role: tempError });
          return false;
          break;
        } else if (
          item.n_place_order === "N" &&
          item.n_view_transaction === "N"
        ) {
          tempError[index]["n_place_order"] = true;
          setErrors({ ...errors, j_role: tempError });

          return false;
        } else {
          // if(index === inputs.j_role.length -1){
          if (index === s.length - 1) {
            result = true;
          }
        }
        index++;
      }
      // inputs.j_role.map((item, index) => {
      //   if(item.n_firm_id === -1){
      //     console.log("inputs.j_role.n_firm_id", item.n_firm_id)
      //     tempError[index]["n_firm_id"] = true
      //     setErrors({...errors, j_role:tempError})
      //     return false;
      //   } else if(item.n_place_order === "0" && item.n_view_transaction === "0") {
      //     tempError[index]["n_place_order"] = true
      //     setErrors({...errors, j_role:tempError})
      //     return false;
      //   }
      //   else {
      //     if(index === inputs.j_role.length -1){
      //       result = true
      //     }
      //   }
      // })

      return result;
    };

    if (errorMsg !== "") {
    } else if (inputs.c_mobile_no === "" || errors.c_mobile_no === true) {
      setErrors({ ...errors, c_mobile_no: true });
    } else if (inputs.c_name === "" || errors.c_name === true) {
      setErrors({ ...errors, c_name: true });
    } else if (inputs.c_email === "" || errors.c_email === true) {
      setErrors({ ...errors, c_email: true });
    } else if (inputs.c_address_1 === "" || errors.c_address_1 === true) {
      setErrors({ ...errors, c_address_1: true });
    } else if (inputs.c_address_2 === "" || errors.c_address_2 === true) {
      setErrors({ ...errors, c_address_2: true });
    } else if (inputs.c_pincode === "" || errors.c_pincode === true) {
      setErrors({ ...errors, c_pincode: true });
    } else if (errors.c_state_name === true) {
      setErrors({ ...errors, c_state_name: true });
    } else if (errors.c_city_name === true) {
      setErrors({ ...errors, c_city_name: true });
    } else if (errors.c_area_name === true) {
      setErrors({ ...errors, c_area_name: true });
    } else if (!checkRoleError()) {
    } else {
      // let body = {};

      // Object.entries(inputs).map(entry => {
      //   if(entry[1] === "-1"){

      //   } else if(entry[1] !== ""){
      //     body[entry[0]] = entry[1];
      //   }
      // })

      // if(match.params.userId){
      //   let temp = {...body, n_user_id: match.params.userId}
      //   AddUserAction(temp, true)
      // } else {

      // }

      let j_role1 = [];

      const body = {
        c_name: inputs.c_name,
        c_mobile_no: inputs.c_mobile_no,
        c_pincode: inputs.c_pincode,
        c_email: inputs.c_email,
        c_address_1: inputs.c_address_1,
        c_address_2: inputs.c_address_2,
        c_state_code: stateCode,
        c_state_name: stateName,
        c_city_code: cityCode,
        c_city_name: cityName,
        c_area_code: areaCode,
        c_area_name: areaName,
        j_role: j_role1,
      };

      inputs.j_role.map((item, key) =>
        j_role1.push({
          n_firm_id: item.n_firm_id,
          c_view_trans_status: item.n_view_transaction,
          c_place_order_status: item.n_place_order,
          c_order_value_limit: item.n_max_value,
          c_time_limit: item.n_granted_per,
        })
      );


      console.log(body,"EDIT USER ID")
      if(action){
        let temp = {...body, n_user_id: match.params.userId}
        console.log(body,"EDIT USER")
        // AddUserAction(temp, true)
      } else {
        AddUserAction(body);
      }
      console.log(body, "<< BODY ");
      
    }
  };

  useEffect(() => {
    if (validateREGISTERResult.payload.message === "Already registered!") {
      setOpen(true);
      
      // setInputs({
      //   c_mobile_no: "",
      // });
    }
  }, [validateREGISTERResult.payload.message === "Already registered!"]);



  useEffect(() => {
    getBranchListAction();
    StateListAction();
    CityListAction("");
    AreaListAction("");

    return () => {
      clearAddUser();
      clearGetUserInfo();
    };
  }, []);

  // useEffect(() => {
  //   if(inputs.c_pincode !== undefined && inputs.c_pincode.length === 6){
  //     axios
  //     .get(`${ENV.MASTER_BASE_URL}/mst/pin/${inputs.c_pincode}`)
  //     .then(response => {
  //       if(response.data.appStatusCode === 0){
  //         if(response.data.payloadJson !== null){
  //           if(response.data.payloadJson.list[0] !== undefined){
  //             setInputs({
  //               ...inputs,
  //               c_state_code: response.data.payloadJson.list[0].c_state_code,
  //               c_state_name: response.data.payloadJson.list[0].c_state_name.toLowerCase()
  //             })
  //           } else {
  //             setErrorMsg("No state is associated with the entered pin code.")
  //           }
  //         }
  //       }
  //     })
  //   }
  // }, [inputs.c_pincode])

  useEffect(() => {
    setStateList(stateListResult.payload);
  }, [stateListResult]);

  useEffect(() => {
    setCityList(cityListResult.payload);
  }, [cityListResult]);

  useEffect(() => {
    setBranchPayLoad(branchListResult.payload);
  }, [branchListResult]);

  useEffect(() => {
    setAreaList(areaListResult.payload);
  }, [areaListResult]);

  useEffect(() => {
    if (addUserResult.error !== "") {
      setErrorMsg(addUserResult.error);
    }else if(addUserResult.statuscode === 0){
      history.push("/profile/user");
    }
  }, [addUserResult]);

  useEffect(() => {
    if (match.params.userId) {
      GetUserInfoAction(match.params.userId);
    }
  }, [match]);

  useEffect(() => {
    if (match.params.userId) {
      if (userInfoResult.error === "") {
        let temp = { ...inputs };

        Object.entries(userInfoResult.payload).map((entry) => {
          temp[entry[0]] = entry[1];
        });
        setInputs(temp);

        const errorRow = {
          n_firm_id: false,
          n_view_transaction: false,
          n_place_order: false,
          n_min_value: false,
          n_max_value: false,
          n_granted_per: false,
        };
        let tempError = [...errors.j_role];
        // console.log(temp)
        temp.j_role.map((item, index) => {
          if (index > 0) {
            tempError = [...tempError, errorRow];
          }
        });
        setErrors({ ...errors, j_role: tempError });
      } else {
        setErrorMsg(userInfoResult.error);
      }
    }
  }, [userInfoResult]);

  const handleSliderChange = (event, newValue) => {
    setErrorMsg("");
    let index = event.target["ariaLabel"];
    let temp = [...inputs.j_role];
    // setValue(newValue as number[]);

    if (index !== null) {
      if (newValue[1] === 0) {
        newValue[1] = 1;
      }
      if (newValue[0] === 1) {
        newValue[0] = 0;
      }
      temp[index]["n_max_value"] = newValue[1] * 1000;
      temp[index]["n_min_value"] = newValue[0] * 1000;
      setInputs({ ...inputs, j_role: temp });
    }
  };
  useEffect(() => {
    // debugger;
    let filterList = [];
    let branchList = [];
    branchList = branchPayLoad;
    let itemJson = {};
    itemJson = val;
    let count = 0;
    {
      branchList.map((item, index8) => {
        branchList[index8]["disabled"] = false;
      });
    }
    {
      inputs.j_role.map((rights, index) => {
        if (rights.n_view_transaction == "Y" || rights.n_place_order == "Y") {
          itemJson[index] = rights.n_firm_id;
        } else {
          itemJson[index] = "not selected";
        }
        setValues(itemJson);
      });
    }

    filterList = inputs.j_role.filter(
      (item, i) => item.n_view_transaction == "Y" || item.n_place_order == "Y"
    );

    {
      branchList.map(async (item, index8) => {
        branchList[index8]["disabled"] = false;
        Object.keys(itemJson).map((a) => {
          if (item.c_br_code == itemJson[a]) {
            branchList[index8]["disabled"] = true;
          }
        }); //pp
      });
    }

    setBranchPayLoad(branchList);
  }, [branchPayLoad, inputs.j_role]);

  useEffect(() => {
    let filterList = [];
    filterList = inputs.j_role.filter(
      (item, i) => item.n_view_transaction == "Y" || item.n_place_order == "Y"
    );
    //setInputs({...inputs, j_role: filterList});
    setUpdatedInput(filterList);
  }, [inputs.j_role]);


  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    // setOpen(true);
  };
  //console.log("branchPayLoad",updatedInput)
  let count = 0;
  return (
    <>
    
      <div className="profile-title-sec ml-16">
        <h4 className="profile-title">User Management</h4>
        <p className="profile-subtitle">Add User from the form below.</p>
      </div>
      <div>
        <form className="profile-details-sec">
          {/* Add User */}
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <div className="ml-16">
                <p className="login-error-msg min-height-none mb-10">
                  {errorMsg.toLowerCase()}
                </p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="ml-16">
                <TextField
                  name="c_mobile_no"
                  value={inputs.c_mobile_no}
                  onChange={(e) => handleInputChange(e)}
                  error={errors.c_mobile_no}
                  onBlur={(e) => handleBlur(e)}
                  helperText={errors.c_mobile_no && "Not a valid mobile number"}
                  autoComplete="new-password"
                  type="number"
                  margin="normal"
                  variant="outlined"
                  placeholder="Enter Mobile Number *"
                  className="auth-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={phone} alt="mobile-phone" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="ml-16">
                <TextField
                  name="c_name"
                  value={inputs.c_name}
                  onChange={(e) => handleInputChange(e)}
                  error={errors.c_name}
                  onBlur={(e) => handleBlur(e)}
                  helperText={errors.c_name && "Not a valid name"}
                  autoComplete="new-password"
                  margin="normal"
                  variant="outlined"
                  placeholder="Full Name *"
                  className="auth-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={User} alt="user" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="ml-16">
                <TextField
                  name="c_email"
                  value={inputs.c_email}
                  onChange={(e) => handleInputChange(e)}
                  error={errors.c_email}
                  onBlur={(e) => handleBlur(e)}
                  helperText={errors.c_email && "Not a valid E-mail"}
                  autoComplete="new-password"
                  margin="normal"
                  variant="outlined"
                  placeholder="E-mail *"
                  className="auth-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Email} alt="Email" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
          </Grid>
          {/* User Information */}
          {/* Address */}
          <div className="ml-16">
            <h4 className="profile-title">User Information</h4>
            <h4 className="profile-subtitle pd-t-8">Address</h4>
          </div>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <div className="ml-16">
                <TextField
                  name="c_address_1"
                  value={inputs.c_address_1}
                  onChange={(e) => handleInputChange(e)}
                  onBlur={(e) => handleBlur(e)}
                  error={errors.c_address_1}
                  helperText={errors.c_address_1 && "Not a valid address"}
                  autoComplete="new-password"
                  margin="normal"
                  variant="outlined"
                  placeholder="Address Line 1"
                  className="auth-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Address} alt="Address" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="ml-16">
                <TextField
                  name="c_address_2"
                  value={inputs.c_address_2}
                  onChange={(e) => handleInputChange(e)}
                  onBlur={(e) => handleBlur(e)}
                  error={errors.c_address_2}
                  helperText={errors.c_address_2 && "Not a valid address"}
                  autoComplete="new-password"
                  margin="normal"
                  variant="outlined"
                  placeholder="Address Line 2"
                  className="auth-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Address} alt="Address" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="ml-16">
                <TextField
                  name="c_pincode"
                  value={inputs.c_pincode}
                  onChange={(e) => handleInputChange(e)}
                  onBlur={(e) => handleBlur(e)}
                  error={errors.c_pincode}
                  helperText={errors.c_pincode && "Not a valid pincode"}
                  autoComplete="new-password"
                  margin="normal"
                  variant="outlined"
                  type="number"
                  placeholder="Pin Code"
                  className="auth-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Zipcode} alt="user" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
            {/* <Grid item xs={4}>
              <div className="ml-16">
                <TextField
                  disabled
                  name="c_state_name"
                  value={inputs.c_state_name}
                  error={errors.c_state_name}
                  onChange={e => handleInputChange(e)}
                  autoComplete="new-password"
                  className="toCatp auth-input"
                  margin="normal"
                  variant="outlined"
                  placeholder="State"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Worldwide} alt="Worldwide" />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
            </Grid> */}
            <Grid item xs={4}>
              <div className="ml-16">
                <TextField
                  name="c_state_name"
                  // onChange={(e) => handleInputChange(e)}
                  onChange={(e) => handleChanges(e)}
                  error={errors.state}
                  onBlur={(e) => handleBlur(e)}
                  placeholder="State"
                  helperText={errors.state && "Not a valid state"}
                  // inputValue={inputs.c_state_name}
                  margin="normal"
                  variant="outlined"
                  className="toCatp auth-input "
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Zipcode} alt="user" />
                      </InputAdornment>
                    ),
                  }}
                  select
                  value={state}
                >
                  {inputs.c_state_name === "" ? (
                    <MenuItem key={""} value={"00000"}>
                      <div className="opacity-05">Select the State</div>
                    </MenuItem>
                  ) : (
                    <MenuItem key={""} value={"00000"}>
                      <div className="opacity-05">{inputs.c_state_name}</div>
                    </MenuItem>
                  )}
                  {/* <MenuItem key={""} value={"00000"}>
                    <div className="opacity-05">{inputs.c_state_name}</div>
                  </MenuItem> */}
                  {/* <MenuItem key={""} value={"00000"}>
                    <div className="opacity-05">Select the state</div>
                  </MenuItem> */}
                  {stateList.map((option) => (
                    <MenuItem
                      key={option.c_state_code}
                      value={option.c_state_code + `,` + option.c_state_name}
                    >
                      {option.c_state_name}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="ml-16">
                <TextField
                  name="c_city_name"
                  // value={inputs.c_city_name}
                  // onChange={e => handleInputs(e)}
                  error={errors.city}
                  onBlur={(e) => handleBlur(e)}
                  helperText={errors.city && "Not a valid city"}
                  // inputValue={inputs.c_city_name}
                  margin="normal"
                  variant="outlined"
                  className="toCatp auth-input mr-6"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Zipcode} alt="user" />
                      </InputAdornment>
                    ),
                  }}
                  select
                  value={city}
                  onChange={(e) => handleChanges(e)}
                >
                  {inputs.c_city_name === "" ? (
                    <MenuItem key={""} value={"00000"}>
                      <div className="opacity-05">Select the City</div>
                    </MenuItem>
                  ) : (
                    <MenuItem key={""} value={"00000"}>
                      <div className="opacity-05">{inputs.c_city_name}</div>
                    </MenuItem>
                  )}

                  {/* <MenuItem key={""} value={"00000"}>
                    <div className="opacity-05">Select the city</div>
                  </MenuItem> */}
                  {cityList.map((option) => (
                    <MenuItem
                      key={option.c_city_code}
                      value={option.c_city_code + `,` + option.c_city_name}
                    >
                      {option.c_city_name}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="ml-16">
                <TextField
                  name="c_area_name"
                  // onChange={e => handleInputs(e)}
                  error={errors.area}
                  onBlur={(e) => handleBlur(e)}
                  helperText={errors.area && "Not a valid area"}
                  // inputValue={inputs.c_state_name}
                  margin="normal"
                  variant="outlined"
                  className="auth-input ml-6"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Zipcode} alt="user" />
                      </InputAdornment>
                    ),
                  }}
                  select
                  value={area}
                  onChange={(e) => handleChanges(e)}
                >
                  {inputs.c_area_name === "" ? (
                    <MenuItem key={""} value={"00000"}>
                      <div className="opacity-05">Select the Area</div>
                    </MenuItem>
                  ) : (
                    <MenuItem key={""} value={"00000"}>
                      <div className="opacity-05">{inputs.c_area_name}</div>
                    </MenuItem>
                  )}

                  {areaList.map((option) => (
                    <MenuItem
                      key={option.c_area_code}
                      value={option.c_area_code + `,` + option.c_area_name}
                    >
                      {option.c_area_name}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Grid>
            {/* <Grid item xs={4}>
              <div className="ml-16">
                <Autocomplete
                  inputValue={inputs.c_city_name}
                  onInputChange={(event, newInputValue) => {
                    setErrors({...errors, c_city_name: false})
                    newInputValue !== null ?
                    setInputs({...inputs, c_city_name: newInputValue})
                    : setInputs({...inputs, c_city_name: ""})
                  }}
                  onChange={(event, newValue) => {
                    newValue !== null ?
                    setInputs({...inputs, c_city_code: newValue.c_code})
                    : setInputs({...inputs, c_city_code: ""})
                  }}
                  options={cityList}
                  className="toCatp"
                  getOptionLabel={(option) => option.c_name}
                  renderInput={(params) => 
                    <TextField 
                      {...params}  
                      error={errors.c_city_name}
                      margin="normal"
                      variant="outlined"
                      placeholder="City *"
                      className="toCatp auth-input"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                      }}
                    />
                  }
                />
              </div>
            </Grid> */}
            {/* <Grid item xs={4}>
              <div className="ml-16">
                <Autocomplete
                  inputValue={inputs.c_area_name}
                  onInputChange={(event, newValue) => {
                    setErrors({...errors, c_area_name: false})
                    newValue !== null ?
                    setInputs({...inputs, c_area_name: newValue})
                    : setInputs({...inputs, c_area_name: ""})
                  }}
                  onChange={(event, newValue) => {
                    newValue !== null ?
                    setInputs({...inputs, c_area_code: newValue.c_code})
                    : setInputs({...inputs, c_area_code: ""})
                  }}
                  options={areaList}
                  className="toCatp"
                  getOptionLabel={(option) => option.c_name}
                  renderInput={(params) => 
                    <TextField 
                      {...params} 
                      error={errors.c_area_name}
                      margin="normal"
                      variant="outlined"
                      placeholder="Area *"
                      className="toCatp auth-input"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                      }}
                    />
                  }
                />
              </div>
            </Grid> */}
          </Grid>
          <div className="ml-16">
            <h4 className="profile-subtitle">User Rights</h4>
          </div>

          {updatedInput.map((rights, index) => (
            <div key={index}>
              <Grid container spacing={0}>
                <Grid item xs={5}>
                  <div className="ml-16  mr-r-24">
                    <TextField
                      name="n_firm_id"
                      value={rights["n_firm_id"]}
                      error={errors.j_role[index]["n_firm_id"]}
                      defaultValue={"-1"}
                      onChange={(e) => handleInputChange(e, "j_role", index)}
                      select
                      autoComplete="off"
                      margin="normal"
                      variant="outlined"
                      className="auth-input"
                      placeholder="Select Branch"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={City} alt="Email" />
                          </InputAdornment>
                        ),
                      }}
                    >
                      <MenuItem value={-1} className="user-select-list">
                        Select Branch
                      </MenuItem>
                      {branchPayLoad.map((item, index) => (
                        <MenuItem
                          // disabled = {item.c_br_code ==  rights.n_firm_id ? true  : false}
                          //  disabled = {item.c_br_code ==  rights.n_firm_id ? true : item.disabled === true ? true : false}
                          disabled={item.disabled === true ? true : false}
                          key={index}
                          value={item.c_br_code}
                          className="user-select-list"
                        >
                          {/* {
                            <>
                              <>{item.c_name}</>
                              <>
                                {item.c_area_name !== undefined &&
                                  item.c_area_name !== "" && (
                                    <>
                                      {" "}
                                      ({item.c_area_name}{" "}
                                      {item.c_landmark !== undefined &&
                                        item.c_landmark !== "" && (
                                          <>, {item.c_landmark}</>
                                        )}
                                      )
                                    </>
                                  )}
                              </>
                            </>
                          } */}
                          {
                            <>
                              <>{item.c_br_name}</>
                              <>
                                {item.c_city_name !== undefined &&
                                  item.c_city_name !== "" && (
                                    <>
                                      {" "}
                                      ({item.c_city_name}{" "}
                                      {item.c_pincode !== undefined &&
                                        item.c_pincode !== "" && (
                                          <>
                                            ,{" "}
                                            {item.c_pincode}
                                          </>
                                        )}
                                      )
                                    </>
                                  )}
                              </>
                            </>
                          }
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </Grid>
                <Grid item xs={7}>
                  <div className="adduser-userrights">
                    <div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            checkedIcon={<CheckBoxIcon fontSize="large" />}
                            // defaultChecked={false}
                            checked={
                              rights["n_view_transaction"] === "Y"
                                ? true
                                : false
                            }
                            onChange={handleCheckbox("n_view_transaction", index)}
                            color="primary"
                            className="adduser-checkbox-icon"
                          />
                        }
                        label="View Transaction"
                        className="adduser-checkbox"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            checkedIcon={<CheckBoxIcon fontSize="large" />}
                            checked={
                              rights["n_place_order"] === "Y" ? true : false
                            }
                            onChange={handleCheckbox("n_place_order", index)}
                            color="primary"
                            className="adduser-checkbox-icon"
                          />
                        }
                        label="Place Order"
                        className="adduser-checkbox"
                      />
                    </div>
                    <div>
                      <>
                        {index === 0 ? (
                          <Button
                            variant="contained"
                            color="primary"
                            className="addbranch-btn"
                            component="span"
                            onClick={handleAddStore}
                          >
                            <img
                              src={PlusPurple}
                              alt="PlusPurple"
                              className="mr-10"
                            />
                            Add Store
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            className="addbranch-btn delete"
                            component="span"
                            onClick={() => handleDeleteStore(index)}
                          >
                            delete
                          </Button>
                        )}
                      </>
                      {/* <>
                      { index !== 0 && <Button
                        variant="contained"
                        color="primary"
                        className="addbranch-btn delete"
                        component="span"
                        onClick={() => handleDeleteStore(index)}
                      >
                        delete store
                      </Button>
                      } </> */}
                    </div>
                  </div>
                </Grid>
              </Grid>

              {rights["n_place_order"] === "Y" && (
                <div className="">
                  <Typography
                    gutterBottom
                    id={"non-linear-slider"}
                    className="value-slider-label"
                  >
                    Set Maximum Order Value
                  </Typography>
                  <div>
                    <PrettoSlider
                      value={[
                        rights["n_min_value"] / 1000,
                        rights["n_max_value"] / 5000,
                      ]}
                      // value={value}
                      step={100}
                      marks
                      onChange={handleSliderChange}
                      valueLabelDisplay="off"
                      aria-label={`${index}`}
                    />
                  </div>
                  <div>
                    {/* <TextField
                      name="n_min_value"
                      select
                      value={rights["n_min_value"]}
                      onChange={e => handleInputChange(e, "j_role", index)}
                      autoComplete="off"
                      margin="normal"
                      variant="outlined"
                      placeholder="Min value"
                      className="value-range"
                    >
                      <MenuItem value={"0"}>Min</MenuItem>
                      <MenuItem disabled={rights["n_max_value"] <= 10000} value={"10000"}>10000</MenuItem>
                      <MenuItem disabled={rights["n_max_value"] <= 20000} value={"20000"}>20000</MenuItem>
                      <MenuItem disabled={rights["n_max_value"] <= 30000} value={"30000"}>30000</MenuItem>
                      <MenuItem disabled={rights["n_max_value"] <= 40000} value={"40000"}>40000</MenuItem>
                      <MenuItem disabled={rights["n_max_value"] <= 50000} value={"50000"}>50000</MenuItem>
                      <MenuItem disabled={rights["n_max_value"] <= 60000} value={"60000"}>60000</MenuItem>
                      <MenuItem disabled={rights["n_max_value"] <= 70000} value={"70000"}>70000</MenuItem>
                      <MenuItem disabled={rights["n_max_value"] <= 80000} value={"80000"}>80000</MenuItem>
                      <MenuItem disabled={rights["n_max_value"] <= 90000} value={"90000"}>90000</MenuItem>
                      <MenuItem disabled={rights["n_max_value"] <= 100000} value={"100000"}>100000</MenuItem>
                    </TextField> */}
                    {/* <span className="value-text">To</span> */}
                    <TextField
                      name="n_max_value"
                      select
                      value={rights["n_max_value"]}
                      onChange={(e) => handleInputChange(e, "j_role", index)}
                      autoComplete="off"
                      margin="normal"
                      variant="outlined"
                      placeholder="Max Value"
                      className="value-range"
                    >
                      <MenuItem
                        disabled={rights["n_min_value"] >= 10000}
                        value={"10000"}
                      >
                        ₹ 10,000.00
                      </MenuItem>
                      <MenuItem
                        disabled={rights["n_min_value"] >= 50000}
                        value={"50000"}
                      >
                        ₹ 50,000.00
                      </MenuItem>
                      <MenuItem
                        disabled={rights["n_min_value"] >= 100000}
                        value={"100000"}
                      >
                        ₹ 1,00,000.00
                      </MenuItem>

                      {/* <MenuItem disabled={rights["n_min_value"] >= 200000} value={"200000"}>₹ 2,00,000.00</MenuItem>
                      <MenuItem disabled={rights["n_min_value"] >= 300000} value={"300000"}>₹ 3,00,000.00</MenuItem>
                      <MenuItem disabled={rights["n_min_value"] >= 400000} value={"400000"}>₹ 4,00,000.00</MenuItem> */}

                      <MenuItem
                        disabled={rights["n_min_value"] >= 500000}
                        value={"500000"}
                      >
                        ₹ 5,00,000.00
                      </MenuItem>
                      {/* <MenuItem disabled={rights["n_min_value"] >= 40000} value={"40000"}>40000</MenuItem>
                      <MenuItem disabled={rights["n_min_value"] >= 50000} value={"50000"}>50000</MenuItem>
                      <MenuItem disabled={rights["n_min_value"] >= 60000} value={"60000"}>60000</MenuItem>
                      <MenuItem disabled={rights["n_min_value"] >= 70000} value={"70000"}>70000</MenuItem>
                      <MenuItem disabled={rights["n_min_value"] >= 80000} value={"80000"}>80000</MenuItem>
                      <MenuItem disabled={rights["n_min_value"] >= 90000} value={"90000"}>90000</MenuItem>
                      <MenuItem disabled={rights["n_min_value"] >= 100000} value={"100000"}>100000</MenuItem> */}
                    </TextField>
                    <TextField
                      name="n_granted_per"
                      value={rights["n_granted_per"]}
                      onChange={(e) => handleInputChange(e, "j_role", index)}
                      select
                      autoComplete="off"
                      margin="normal"
                      variant="outlined"
                      className="value-range"
                    >
                      <MenuItem value={"day"}>Per Day</MenuItem>
                      <MenuItem value={"week"}>Per Week</MenuItem>
                      <MenuItem value={"month"}>Per Month</MenuItem>
                    </TextField>
                  </div>
                </div>
              )}
              {/* </div>
                 :''}  */}
              {errors.j_role[index]["n_place_order"] && (
                <p className="login-error-msg min-height-none mb-10">
                  Please select any role
                </p>
              )}
            </div>
          ))}
          <div className="ml-16 pd-t-8 text-right">
            {/* <Button
                
                color="primary"
              variant="contained"
              className="sm-u-btn feedback-clear-btn"
              component="span"
            >
              CLEAR
            </Button> */}
  {
    match.params.userId ? (
      <Button
              variant="contained"
              color="primary"
              className="sm-u-btn feedback-send-btn"
              component="span"
              onClick={()=>handleSubmit(match.params.userId)}
              disabled={addUserResult.loading}
            >
              {addUserResult.loading ? (
                <CircularProgress className="spining-icon" />
              ) : null}{" "}
              UPDATE
            </Button>
    ) : (
      <Button
              variant="contained"
              color="primary"
              className="sm-u-btn feedback-send-btn"
              component="span"
              onClick={()=>handleSubmit(null)}
              disabled={addUserResult.loading}
            >
              {addUserResult.loading ? (
                <CircularProgress className="spining-icon" />
              ) : null}{" "}
              SAVE
            </Button>
    ) 
  }
            
          </div>
        </form>
      </div>
      <RegisterNumCheckPopup
        handleClose={handleClose}
        open={open}
      />
    </>
  );
};

export default AddUser;
