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
import Shape from "../../../assets/images/shape.svg";
import PlusPurple from "../../../assets/images/plus-purple.svg";
import Landmark from "../../../assets/images/landmark.svg";
import State from "../../../assets/images/icons/state.svg";
import City from "../../../assets/images/icons/city.svg";
import Area from "../../../assets/images/icons/area.svg";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import RegisterNumCheckPopup from "./Popup/RegisterNumCheckPopup";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
const filter = createFilterOptions();

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
    GetStateCityArea,
    getStateCityAreaResult,
    getBranchListAction,
    branchListResult,
    AddUserAction,
    addUserResult,
    GetUserInfoAction,
    userInfoResult,
    CityListAction,
    cityListResult,
    AreaListAction,
    areaListResult,
    clearAddUser,
    clearGetUserInfo,
    validateREGISTERResult,
    validateREGISTER,
    setValue2,
    value2,
  } = props;

  // console.log(getStateCityAreaResult,"<<< getStateCityAreaResult")
  const [errorMsg, setErrorMsg] = useState("");
  const [cityList, setCityList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [value, setValue] = React.useState([0, 100]);
  const [branchPayLoad, setBranchPayLoad] = useState([]);
  const [val, setValues] = React.useState({});
  const [openModal, setOpenModal] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [br_code, setBr_Code] = useState("");
  const [passBrcode, setPassBrCode] = useState(null);

  //   console.log(branchListResult,"<<< branchListResult")
  //   console.log(branchListResult.payload.length,"<<< branchListResult length")

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
        c_view_trans_status: "N",
        c_place_order_status: "N",
        c_order_value_limit: 1,
        c_time_limit: "month",
        // n_min_value: 0,
      },
    ],
  });

  console.log(passBrcode, "<<<passBrcode");
  console.log(br_code, "<<< br_code");
  console.log(inputs, "<<< inputsinputsinputs");

  useEffect(() => {
    let temp = {};
    Object.entries(branchListResult.payload).map((entry) => {
      if (entry[1].c_default_status === "Y") {
        temp = entry[1];
      }

      setBr_Code(temp.c_br_code);
    });
    // const currentBrcode = parseInt(temp.c_br_code);

    // setBr_Code((temp.c_br_code));
  }, [branchListResult]);

  useEffect(() => {
    if (branchListResult.payload.length === 1) {
      setPassBrCode(br_code);
    } else {
      setPassBrCode(-1);
    }
  }, [branchListResult]);

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
        c_view_trans_status: false,
        c_place_order_status: false,
        // n_min_value: false,
        c_order_value_limit: false,
        c_time_limit: false,
      },
    ],
  });
  useEffect(() => {
    let s = [];
    s = branchListResult.payload;
    Object.keys(s).map((item) => {
      s["disabled"] = false;
    });
    console.log("jim", s);
  }, [branchListResult]);
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
      //  let temp: any = [...inputs.j_role];
      let temp = [...updatedInput];

      temp[index][name] = value;

      // setInputs({...inputs, j_role: temp});
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
          setInputs({
            ...inputs,
            [name]: value,
            c_state_name: "",
            c_city_name: "",
            c_area_name: "",
          });
          setValue2({
            c_area_name: "",
          });
        }
      } else {
        setInputs({ ...inputs, [name]: value });
        setValue2({ ...value2, [name]: value });
      }
    }
  };

  const handleBlur = (e) => {
    let { name, value } = e.target;

    if (name === "c_mobile_no") {
      if (value.length <= 10) {
        if (!/^[6-9]\d{9}$/.test(value)) {
          setErrors({ ...errors, [name]: true });
        } else if (value.length === 10) {
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
    } else if (name === "c_pincode" && value !== "") {
      if (value.length < 6) {
        setErrors({ ...errors, [name]: true });
      }
    }
  };

  const handleCheckbox = (name, index) => (event) => {
    setErrorMsg("");
    let checked = event.target.checked === false ? "N" : "Y";
    let temp = [...inputs.j_role];

    if (name === "c_place_order_status" && event.target.checked === true) {
      temp[index]["n_min_value"] = 0;
      temp[index]["c_place_order_status"] = "Y";
      temp[index]["c_order_value_limit"] = 100000;
    } else {
      temp[index]["n_min_value"] = 0;
      temp[index]["c_place_order_status"] = "N";
      temp[index]["c_order_value_limit"] = 1;
    }

    temp[index][name] = checked;

    // console.log(name, "<<< check name");
    // console.log(index, "<<< check index");
    // console.log(checked, "<<< check event.target.value");

    // setInputs({...inputs, j_role: temp});

    let tempError = [...errors.j_role];
    tempError[index]["c_place_order_status"] = false;
    setErrors({ ...errors, j_role: tempError });
  };

  const handleCheckbox1 = (name, index) => (event) => {
    setErrorMsg("");
    let checked = event.target.checked === false ? "N" : "Y";
    let temp = [...inputs.j_role];

    if (name === "c_view_trans_status" && event.target.checked === true) {
      temp[index]["c_view_trans_status"] = "Y";
      temp[index][name] = checked;
      //   setInputs({...inputs, j_role: temp});
    } else {
      temp[index]["c_view_trans_status"] = "N";
      temp[index][name] = checked;
      //   setInputs({...inputs, j_role: temp});
    }

    let tempError = [...errors.j_role];
    tempError[index]["c_view_trans_status"] = false;
    setErrors({ ...errors, j_role: tempError });
  };

  const handleAddStore = () => {
    // if(Array.isArray(branchPayLoad) && branchPayLoad.length > inputs.j_role.length){ alert()
    if (Array.isArray(branchPayLoad) && branchPayLoad.length > 1) {
      setErrorMsg("");
      const inputRow = {
        n_firm_id: -1,
        c_view_trans_status: "N",
        c_place_order_status: "N",
        n_min_value: 0,
        c_order_value_limit: 1,
        c_time_limit: "month",
      };

      let tempInput = [...updatedInput];
      tempInput = [...tempInput, inputRow];
      //   console.log(tempInput);

      const errorRow = {
        n_firm_id: false,
        c_view_trans_status: false,
        c_place_order_status: false,
        n_min_value: false,
        c_order_value_limit: false,
        c_time_limit: false,
      };

      let tempError = [...errors.j_role];
      tempError = [...tempError, errorRow];

      setInputs({ ...inputs, j_role: tempInput });
      setErrors({ ...errors, j_role: tempError });
    }
    // }
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

  const handleSubmit = () => {
    // setErrorMsg("");\
    const checkRoleError = () => {
      let result = false;
      let tempError = errors.j_role;
      let index = 0;
      let s = [];
      // inputs.j_role.map((item)=>{
      //   if(item.c_place_order_status == "Y" || item.c_view_trans_status == "Y"){
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
        } 
		// else if (
        //   item.c_place_order_status === "N" &&
        //   item.c_view_trans_status === "N"
        // ) {
        //   tempError[index]["c_place_order_status"] = true;
        //   setErrors({ ...errors, j_role: tempError });

        //   return false;
        // } 
		else {
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
      //   } else if(item.c_place_order_status === "N" && item.c_view_trans_status === "N") {
      //     tempError[index]["c_place_order_status"] = true
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
    } else if (errors.c_address_1 === true) {
      setErrors({ ...errors, c_address_1: true });
    } else if (errors.c_address_2 === true) {
      setErrors({ ...errors, c_address_2: true });
    } else if (errors.c_pincode === true) {
      setErrors({ ...errors, c_pincode: true });
    } else if (inputs.c_state_name === "" || errors.c_state_name === true) {
      setErrors({ ...errors, c_state_name: true });
    } else if (inputs.c_city_name === "" || errors.c_city_name === true) {
      setErrors({ ...errors, c_city_name: true });
    } 
	// else if (value2.c_area_name === "" || errors.c_area_name === true) {
    //   setErrors({ ...errors, c_area_name: true });
    // } 
	else if (!checkRoleError()) {
    } else {
      let body = {};

      Object.entries(inputs).map((entry) => {
        if (entry[1] === "-1") {
        } else if (entry[1] !== "") {
          body[entry[0]] = entry[1];
        }
      });

      if (match.params.userId) {
        let temp = { ...body, n_user_id: match.params.userId, c_area_name:value2.c_area_name };
        console.log(match.params.userId, "<<< match.params.userId");
        AddUserAction(temp, true);
      } else {
        // console.log(body,"<<<< BODY")
        AddUserAction(body);
      }
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getBranchListAction();
    CityListAction("");
    AreaListAction("");

    return () => {
      clearAddUser();
      clearGetUserInfo();
    };
  }, []);
  


  const handleChanges = (e) => {
    let { name, value } = e.target;

    
    switch (name) {
      case "c_firm_name":
        if (value.length > 256) {
          value = value.slice(0, 256);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;

      case "c_br_code":
        if (value.length > 10) {
          value = value.slice(0, 10);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_pincode":
        if (value.length > 6) {
          value = value.slice(0, 6);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_drug_license_no":
        if (value.length > 1000) {
          value = value.slice(0, 1000);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;

      case "c_gst_number":
        if (value.length > 1000) {
          value = value.slice(0, 1000);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_address_no1":
        if (value.length > 1000) {
          value = value.slice(0, 1000);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_address_no2":
        if (value.length > 1000) {
          value = value.slice(0, 1000);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_state_name":
        if (value.length > 1000) {
          value = value.slice(0, 1000);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_city_name":
        if (value.length > 1000) {
          value = value.slice(0, 1000);
        } else {
          setInputs({ ...inputs, [name]: value });
        }
        break;
      case "c_area_name":
        if (value.length > 1000) {
          value = value.slice(0, 1000);
        } else {
        //   setInputs({ ...inputs, [name]: value });
          setValue2({ ...value2, [name]: value });
        }
        break;

      default:
        setInputs({ ...inputs, [name]: value });
        break;
    }
  };





  useEffect(() => {
    if (inputs.c_pincode !== undefined && inputs.c_pincode.length === 6) {
      //   console.log(inputs.c_pincode, "<<< inputs.c_pincode");
      const body = {
        c_pincode: inputs.c_pincode,
      };
      GetStateCityArea(body);
    } else if (inputs.c_pincode.length <= 6) {
      setOpenModal(false);
    }
  }, [inputs.c_pincode]);

  useEffect(() => {
    if (validateREGISTERResult.payload.message === "Already registered!") {
      if (inputs.c_mobile_no !== "") {
        setOpen(true);
      }
      setInputs({
        ...inputs,
        c_mobile_no: "",
      });
    }
  }, [validateREGISTERResult.payload.message === "Already registered!"]);

  useEffect(() => {
    if (getStateCityAreaResult.statuscode === 5) {
      setOpenModal(true);
    } else if (
      getStateCityAreaResult.statuscode === 0 ||
      getStateCityAreaResult.statuscode === ""
    ) {
      setOpenModal(false);
    }
    setInputs({
      ...inputs,
      c_state_name: getStateCityAreaResult.payload.c_state_name,
      c_state_code: getStateCityAreaResult.payload.c_state_code,
      // c_area_name: getStateCityAreaResult.payload.c_area_name,
      // c_area_code: getStateCityAreaResult.payload.c_area_code,
      c_city_name: getStateCityAreaResult.payload.c_city_name,
      c_city_code: getStateCityAreaResult.payload.c_city_code,
    });
    console.log(getStateCityAreaResult, "<<< Stae city");
  }, [getStateCityAreaResult]);

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
    } else if (addUserResult.statuscode === 0) {
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
          c_view_trans_status: false,
          c_place_order_status: false,
          n_min_value: false,
          c_order_value_limit: false,
          c_time_limit: false,
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
  console.log(inputs.c_pincode, "<<< PINCODE");
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
      temp[index]["c_order_value_limit"] = newValue[1] * 1000;
      temp[index]["n_min_value"] = newValue[0] * 1000;
      setInputs({ ...inputs, j_role: temp });
    }
  };
  useEffect(() => {
    if (inputs.c_pincode === "") {
      setInputs({
        ...inputs,
      });
    }
  }, []);
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
        if (
          rights.c_view_trans_status == "Y" ||
          rights.c_view_trans_status == "N" ||
          rights.c_place_order_status == "Y"
        ) {
          itemJson[index] = rights.n_firm_id;
        } else {
          itemJson[index] = "not selected";
        }
        setValues(itemJson);
      });
    }

    filterList = inputs.j_role.filter(
      (item, i) =>
        item.c_view_trans_status == "Y" ||
        item.c_view_trans_status == "N" ||
        item.c_place_order_status == "Y"
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
      (item, i) =>
        item.c_view_trans_status == "Y" ||
        item.c_view_trans_status == "N" ||
        item.c_place_order_status == "Y"
    );
    // setInputs({...inputs, j_role: filterList});
    setUpdatedInput(filterList);
  }, [inputs.j_role]);

  console.log(inputs.j_role[0].n_firm_id, "<<<<<<&&&& inputs.j_role");
  //console.log("branchPayLoad",updatedInput)
  let count = 0;
  return (
    <>
      <Collapse in={openModal}>
        <Alert
          severity={"error"}
          icon={false}
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <span className="font-weight-bold">
            Note:{" "}
            {getStateCityAreaResult.error !== "" &&
              getStateCityAreaResult.error}{" "}
            Please Enter Valid Pincode
          </span>
        </Alert>
      </Collapse>
      <div className="profile-title-sec ml-16">
        <h4 className="profile-title">
          User Management <span>Add A New User from the form below.</span>
        </h4>
      </div>
      <div>
        <form className="profile-details-sec">
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
                  placeholder="Address Line 1 *"
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
                  placeholder="Address Line 2 *"
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
                  placeholder="Pin Code *"
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
            <Grid item xs={4}>
              <div className="ml-16">
                <TextField
                  disabled
                  name="c_state_name"
                  value={inputs.c_state_name}
                  error={errors.c_state_name}
                  helperText={errors.c_state_name && "Not a valid state"}
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="new-password"
                  className="toCatp auth-input"
                  margin="normal"
                  variant="outlined"
                  placeholder="State *"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={State} alt="State" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className="ml-16">
                <TextField
                  disabled
                  name="c_city_name"
                  value={inputs.c_city_name}
                  error={errors.c_city_name}
                  helperText={errors.c_city_name && "Not a valid state"}
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="new-password"
                  className="toCatp auth-input"
                  margin="normal"
                  variant="outlined"
                  placeholder="City *"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={City} alt="City" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="ml-16">
                {/* <TextField
									disabled
									name="c_area_name"
									value={inputs.c_area_name}
									error={errors.c_area_name}
									helperText={errors.c_area_name && "Not a valid state"}
									onChange={(e) => handleInputChange(e)}
									autoComplete="new-password"
									className="toCatp auth-input"
									margin="normal"
									variant="outlined"
									placeholder="Area *"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<img src={Area} alt="Area" />
											</InputAdornment>
										),
									}}
								/> */}

                <Autocomplete
                  name="c_area_name"
                  value={value2 ? value2 : inputs.c_area_name}
                  onChange={(event, newValue) => {
                    if (typeof newValue === "string") {
                      setValue2({
                        c_area_name: newValue,
                      });
                    } else if (newValue && newValue.inputValue) {
                      // Create a new value from the user input
                      setValue2({
                        c_area_name: newValue.inputValue,
                      });
                    } else {
                      setValue2(newValue);
                    }
                  }}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    // Suggest the creation of a new value
                    if (params.inputValue !== "") {
                      filtered.push({
                        inputValue: params.inputValue,
                        c_area_name: `Add "${params.inputValue}"`,
                      });
                    }

                    return filtered;
                  }}
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={getStateCityAreaResult.payload.j_area_list}
                  getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === "string") {
                      return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    // Regular option
                    return option.c_area_name;
                  }}
                  renderOption={(option) => option.c_area_name}
                  className="auth-input CusAutoComplete"
                  freeSolo
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search or Add Your Area "
                      error={errors.c_area_name}
                      helperText={errors.c_area_name && "Not a valid Area"}
                      onChange={(e) => handleChanges(e)}
                      // onBlur={(e) => handleBlur(e)}
                      variant="outlined"
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={Area} alt="Area" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
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
						</Grid>
						<Grid item xs={4}>
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
              {/* {rights.c_place_order_status == "Y" || rights.c_view_trans_status == "Y" ? 
							<div> */}
              <Grid container spacing={0}>
                <Grid item xs={5}>
                  <div className="ml-16 mr-r-24">
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
                      placeholder="Select Branch *"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={City} alt="Email" />
                          </InputAdornment>
                        ),
                      }}
                    >
                      <MenuItem value={-1} className="user-select-list">
                        Select Branch *
                      </MenuItem>

                      {branchPayLoad.map((item, index) => (
                        <MenuItem
                          // disabled = {item.c_br_code ==  rights.n_firm_id ? true  : false}
                          //    disabled = {item.c_br_code ==  rights.n_firm_id ? true : item.disabled === true ? true : false}
                          disabled={item.disabled === true ? true : false}
                          key={index}
                          value={item.c_br_code}
                          className="user-select-list mr-r-24"
                        >
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
                                          <>, {item.c_pincode}</>
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
                            checked={
                              rights["c_view_trans_status"] === "N"
                                ? false
                                : true
                            }
                            onChange={handleCheckbox1(
                              "c_view_trans_status",
                              index
                            )}
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
                              rights["c_place_order_status"] === "Y"
                                ? true
                                : false
                            }
                            onChange={handleCheckbox(
                              "c_place_order_status",
                              index
                            )}
                            color="primary"
                            className="adduser-checkbox-icon"
                          />
                        }
                        label="Place Order"
                        className="adduser-checkbox"
                      />
                    </div>
                    <div>
                      {updatedInput.length !== branchPayLoad.length ? (
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
                      ) : (
                        <>
                          {index !== 0 && (
                            <Button
                              variant="contained"
                              color="primary"
                              className="addbranch-btn delete"
                              component="span"
                              onClick={() => handleDeleteStore(index)}
                            >
                              delete
                            </Button>
                          )}{" "}
                        </>
                      )}
                    </div>
                  </div>
                </Grid>
              </Grid>
              {rights["c_place_order_status"] === "Y" && (
                <div className="ml-16">
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
                        rights["c_order_value_limit"] / 1000,
                      ]}
                      // value={value}
                      step={10}
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
											<MenuItem value={"N"}>Min</MenuItem>
											<MenuItem disabled={rights["c_order_value_limit"] <= 10000} value={"10000"}>10000</MenuItem>
											<MenuItem disabled={rights["c_order_value_limit"] <= 20000} value={"20000"}>20000</MenuItem>
											<MenuItem disabled={rights["c_order_value_limit"] <= 30000} value={"30000"}>30000</MenuItem>
											<MenuItem disabled={rights["c_order_value_limit"] <= 40000} value={"40000"}>40000</MenuItem>
											<MenuItem disabled={rights["c_order_value_limit"] <= 50000} value={"50000"}>50000</MenuItem>
											<MenuItem disabled={rights["c_order_value_limit"] <= 60000} value={"60000"}>60000</MenuItem>
											<MenuItem disabled={rights["c_order_value_limit"] <= 70000} value={"70000"}>70000</MenuItem>
											<MenuItem disabled={rights["c_order_value_limit"] <= 80000} value={"80000"}>80000</MenuItem>
											<MenuItem disabled={rights["c_order_value_limit"] <= 90000} value={"90000"}>90000</MenuItem>
											<MenuItem disabled={rights["c_order_value_limit"] <= 100000} value={"100000"}>100000</MenuItem>
										</TextField>
										<span className="value-text">To</span> */}
                    <TextField
                      name="c_order_value_limit"
                      select
                      value={rights["c_order_value_limit"]}
                      onChange={(e) => handleInputChange(e, "j_role", index)}
                      autoComplete="off"
                      margin="normal"
                      variant="outlined"
                      placeholder="Max Value"
                      className="value-range"
                    >
                      <MenuItem
                        disabled={rights["n_min_value"] >= 1000}
                        value={"1000"}
                      >
                        ₹ 1000
                      </MenuItem>
                      <MenuItem
                        disabled={rights["n_min_value"] >= 10000}
                        value={"10000"}
                      >
                        ₹ 10000
                      </MenuItem>
                      <MenuItem
                        disabled={rights["n_min_value"] >= 20000}
                        value={"20000"}
                      >
                        ₹ 20000
                      </MenuItem>
                      <MenuItem
                        disabled={rights["n_min_value"] >= 30000}
                        value={"30000"}
                      >
                        ₹ 30000
                      </MenuItem>
                      <MenuItem
                        disabled={rights["n_min_value"] >= 40000}
                        value={"40000"}
                      >
                        ₹ 40000
                      </MenuItem>
                      <MenuItem
                        disabled={rights["n_min_value"] >= 50000}
                        value={"50000"}
                      >
                        ₹ 50000
                      </MenuItem>
                      <MenuItem
                        disabled={rights["n_min_value"] >= 60000}
                        value={"60000"}
                      >
                        ₹ 60000
                      </MenuItem>
                      <MenuItem
                        disabled={rights["n_min_value"] >= 70000}
                        value={"70000"}
                      >
                        ₹ 70000
                      </MenuItem>
                      <MenuItem
                        disabled={rights["n_min_value"] >= 80000}
                        value={"80000"}
                      >
                        ₹ 80000
                      </MenuItem>
                      <MenuItem
                        disabled={rights["n_min_value"] >= 90000}
                        value={"90000"}
                      >
                        ₹ 90000
                      </MenuItem>
                      <MenuItem
                        disabled={rights["n_min_value"] >= 100000}
                        value={"100000"}
                      >
                        ₹ 100000
                      </MenuItem>
                      {/* <MenuItem disabled={rights["n_min_value"] >= 200000} value={"200000"}>₹ 200000</MenuItem>
											<MenuItem disabled={rights["n_min_value"] >= 300000} value={"300000"}>₹ 300000</MenuItem>
											<MenuItem disabled={rights["n_min_value"] >= 400000} value={"400000"}>₹ 400000</MenuItem>
											<MenuItem disabled={rights["n_min_value"] >= 500000} value={"500000"}>₹ 500000</MenuItem> */}
                    </TextField>
                    <TextField
                      name="c_time_limit"
                      value={rights["c_time_limit"]}
                      onChange={(e) => handleInputChange(e, "j_role", index)}
                      select
                      autoComplete="off"
                      margin="normal"
                      variant="outlined"
                      className="value-range"
                    >
                      <MenuItem value={"day"}>Per Day</MenuItem>
                      <MenuItem value={"month"}>Per Month</MenuItem>
                      <MenuItem value={"quarter"}>Per Quarter</MenuItem>
                    </TextField>
                  </div>
                </div>
              )}
              {/* </div>
								 :''}  */}
              {errors.j_role[index]["c_place_order_status"] && (
                <p className="login-error-msg min-height-none mb-10">
                  Please select any role
                </p>
              )}
            </div>
          ))}
          <div className="ml-16 pd-t-8 text-right">
            {/* <Button
										disabled
										color="primary"
										variant="contained"
										className="sm-u-btn feedback-clear-btn"
										component="span"
									>
										CLEAR
									</Button> */}

            <Button
              variant="contained"
              color="primary"
              className="feedback-send-btn sm-u-btn mr-r-0"
              component="span"
              onClick={handleSubmit}
              // disabled={addUserResult.loading}
              disabled={
                addUserResult.loading ||
                inputs.c_name === "" ||
                inputs.c_mobile_no === "" ||
                inputs.c_email === "" ||
                inputs.c_address_1 === "" ||
                inputs.c_address_2 === "" ||
                inputs.c_pincode.length !== 6 ||
                getStateCityAreaResult.statuscode === 5 ||
                inputs.j_role[0].n_firm_id === -1 
				// errors.c_area_name === true ||
				// inputs.j_role[0]["c_view_trans_status"] === "N"
              }
            >
              {addUserResult.loading ? (
                <CircularProgress className="spining-icon" />
              ) : null}{" "}
              SAVE
            </Button>
          </div>
        </form>
      </div>
      <RegisterNumCheckPopup handleClose={handleClose} open={open} />
    </>
  );
};

export default AddUser;
