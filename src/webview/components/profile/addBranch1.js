import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import phone from "../../../assets/images/phone.svg";
import User from "../../../assets/images/user.svg";
import Shop from "../../../assets/images/shop1.svg";
import Email from "../../../assets/images/email.svg";
import Address from "../../../assets/images/address.svg";
import Zipcode from "../../../assets/images/zip_code.svg";
import Placeholder from "../../../assets/images/placeholder1.svg";
import City from "../../../assets/images/city.svg";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import StepConnector from "@material-ui/core/StepConnector";
import { Grid, InputAdornment, TextField } from "@material-ui/core";
import FirstAidKit from "../../../assets/images/first-aid-kit.svg";
import Camera from "../../../assets/images/camera.svg";
import ImageView from "./ImageView";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Calendar from "../../../assets/images/calendar.svg";
import Gst from "../../../assets/images/gst.svg";
import Tax from "../../../assets/images/tax.svg";
import Drug from "../../../assets/images/drug.svg";
import PlusPurple from "../../../assets/images/plus-purple.svg";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Slider from "@material-ui/core/Slider";
import Worldwide from "../../../assets/images/worldwide.svg";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
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

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundColor: "#00d3b4",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "#00d3b4",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    zIndex: 1,
    color: "#00d3b4",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#fff",
  },
  completed: {
    backgroundColor: "#fff",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <RadioButtonCheckedIcon />,
    2: <RadioButtonCheckedIcon />,
    3: <RadioButtonCheckedIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Firm legal Identities",
    "Other Documents",
    "Firm Contact Information",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Firm legal Identities";
    case 1:
      return "Other Documents";
    case 2:
      return "Firm Contact Information";
    default:
      return "Unknown step";
  }
}

const AddBranch = (props) => {
  let history = useHistory();
  const {
    match,
    GetStateCityArea,
    getStateCityAreaResult,

    GetBranchListUsersAction,  
    getBranchListUsersResult,
    StateListAction,
    stateListResult,
    CityListAction,
    cityListResult,
    AreaListAction,
    areaListResult,
    GSTListAction,
    gstListResult,
    imageupload,
    imageUploadResult,
    value1,
    step,
    branchListResult,
    getBranchInfo,
    branchInfoResult,
    AddBranchAction,
    addBranchResult,
  } = props;

useEffect(() => {
  if(match.params.branchId !=="" && match.params.branchId !== null){
    console.log(match.params.branchId, "<<< Branch Id");
    const body={
      c_br_code:match.params.branchId
    }
    GetBranchListUsersAction(body)
  }

}, [match.params.branchId])


 
  console.log(getBranchListUsersResult, "<<< getBranchListUsersResult");

  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);
  const [count, setCount] = useState(0);
  const [openAddBranchModal, setAddBranchModal] = useState(false);
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  let addFormFields = () => {
    setCount((prevCount) => prevCount + 1);
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
    setCount((prevCount) => prevCount - 1);
  };

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(JSON.stringify(formValues));
  // };

  

  const [errorMsg, setErrorMsg] = useState("");
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [value, setValue] = React.useState([0, 100]);
  const [branchPayLoad, setBranchPayLoad] = useState([]);
  const [val, setValues] = React.useState({});
  const [openModal, setOpenModal] = React.useState(false);
  // const classes = useStyles();
  const [errMsg, setErrMsg] = useState("");
  const [updatedInput, setUpdatedInput] = useState([]);
  const handleOpenAddBranchModal = () => {
    setAddBranchModal(true);
  };

  const handleCloseAddBranchModal = () => {
    setAddBranchModal(false);
    history.push("/profile/branch");
  };
  // useEffect(() => {
  //   getBranchInfo();
  // }, []);

  // useEffect(() => {
  //   StateListAction();
  // }, []);





  // useEffect(() => {
  //   let state_arr = [];
  //   state_arr = state.split(/[,]+/);
  //   setStateCode(state_arr[0]);
  //   setStateName(state_arr[1]);


  //   CityListAction(state_arr[0]);
  // }, [state]);

  // useEffect(() => {
 

  //   let city_arr = [];
  //   city_arr = city.split(/[,]+/);

  //   setCityCode(city_arr[0]);
  //   setCityName(city_arr[1]);

  //   AreaListAction(city_arr[0]);
  // }, [city]);

  // useEffect(() => {


  //   let area_arr = [];
  //   area_arr = area.split(/[,]+/);

  //   setAreaCode(area_arr[0]);
  //   setAreaName(area_arr[1]);

  // }, [area]);

  const handleChanges = (event) => {
    let { name, value } = event.target;
    // if (name === "c_state_name") {
    //   setState(event.target.value);
    // } else if (name === "c_city_name") {
    //   setCity(event.target.value);
    // } else if (name === "c_area_name") {
    //   setArea(event.target.value);
    // } 
    // else if (name === "c_gst_type") {
    //   setGstType(event.target.value);
    // }
  };
  




  const handleCheckbox = (name, index) => (event) => {
    setErrorMsg("");
    let checked = event.target.checked === true ? "1" : "0";
    let temp = [...inputs.j_role];

    if (name === "n_place_order" && event.target.checked === true) {
      temp[index]["n_min_value"] = 0;
      temp[index]["n_max_value"] = 500000;
    } else {
      temp[index]["n_min_value"] = 0;
      temp[index]["n_max_value"] = 1;
    }

    temp[index][name] = checked;

    setInputs({ ...inputs, j_role: temp });

    let tempError = [...errors.j_role];
    tempError[index]["n_place_order"] = false;
    setErrors({ ...errors, j_role: tempError });
  };

  const [inputs, setInputs] = useState({
    c_name: "",
    c_seller: "",
    c_buyer: "",
    c_email: "",
    c_firm_contact_person: "",
    c_firm_address1: "",
    c_firm_address2: "",
    c_state_name: "",
    c_city_name: "",
    c_area_name: "",
    c_state_code: "",
    c_city_code: "",
    c_area_code: "",
    c_pincode: "",
    c_landmark: "",
    c_card_holder_name: "",
    c_card_no: "",
    d_card_exp: "",
    c_card_ifsc: "",
    c_druglicense_no1: "",
    c_druglicense_no2: "",
    c_druglicense_expiry_date: "",
    c_gst_type: -100,
    c_gst_no: "",
    c_narcotic_no: "",
    c_status: "",
    c_image_url: "",
    c_druglicense_no1_img: "",
    c_druglicense_no2_img: "",
    c_narcotic_no_img: "",
    c_druglicense_no1_img_name: "",
    c_druglicense_no2_img_name: "",
    c_narcotic_no_img_name: "",
    c_tan_no: "",
    c_tan_no_img: "",
    c_pan_no: "",
    c_pan_no_img: "",
    c_it_pan_no: "",
    c_it_pan_no_img: "",
    c_electricity_bill_no: "",
    c_electricity_bill_no_img: "",
    c_rent_agreement_no: "",
    c_rent_agreement_no_img: "",
    c_partnership_deed_no: "",
    c_partnership_deed_no_img: "",
    c_bank_statement: "",
    c_bank_statement_img: "",
    c_authority_letter: "",
    c_authority_letter_img: "",
  });

  const [errors, setErrors] = useState({
    c_name: false,
    c_email: false,
    c_firm_contact_person: false,
    c_firm_address1: false,
    c_firm_address2: false,
    c_state_name: false,
    c_city_name: false,
    c_area_name: false,
    c_pincode: false,
    c_card_holder_name: false,
    c_card_no: false,
    d_card_exp: false,
    c_card_ifsc: false,
    c_druglicense_no1: false,
    c_druglicense_no2: false,
    c_druglicense_expiry_date: false,
    c_gst_type: false,
    c_gst_no: false,
    c_narcotic_no: false,

    c_tan_no: false,
    c_pan_no: false,
    c_it_pan_no: false,
    c_electricity_bill_no: false,
    c_rent_agreement_no: false,
    c_partnership_deed_no: false,
    c_bank_statement: false,
    c_authority_letter: false,
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

  const handleInputChange = (e) => {
    setErrMsg("");

    let { name, value } = e.target;

    setErrors({ ...errors, [name]: false });

    if (name === "c_gst_no") {
      if (value !== "" && inputs.c_gst_no === "") {
        setErrors({ ...errors, [name]: true });
      } else if (
        !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value)
      ) {
        setErrors({ ...errors, [name]: true });
      }
       if (value.length > 15) {
        value = value.slice(0, 15);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if (name === "c_pan_no") {
      if (value.length > 10) {
        value = value.slice(0, 10);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if (name === "c_tan_no") {
      if (value.length > 10) {
        value = value.slice(0, 10);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } 
    // else if (name === "c_state_name") {
    //   setState(value);
    // } else if (name === "c_city_name") {
    //   setCity(value);
    // } else if (name === "c_area_name") {
    //   setArea(value);
    // }

    // else if (name === "c_gst_type") {
    //   setGstType(value);
    // }
    else if (name === "c_druglicense_no1" || name === "c_druglicense_no2") {
      if (value.length > 15) {
        value = value.slice(0, 15);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if (name === "c_firm_contact_person") {
      if (value.length > 16) {
        value = value.slice(0, 16);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if (name === "c_firm_address1" || name === "c_firm_address2") {
      if (value.length > 20) {
        value = value.slice(0, 20);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else if (name === "c_pincode") {
      if (value.length > 6) {
        value = value.slice(0, 6);
      } else {
        // setInputs({ ...inputs, [name]: value, c_pincode: "" });
        setInputs({ ...inputs, [name]: value });
      }
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };

  const handleUpload = (event) => {
    const { name, id } = event.target;

    setErrors({ ...errors, [id]: false });

    let file = event.target.files[0];
    let reader = new FileReader();

    let filename = event.target.files[0].name;
    let idxDot = filename.lastIndexOf(".") + 1;
    let extFile = filename.substr(idxDot, filename.length).toLowerCase();
    if (
      extFile == "jpg" ||
      extFile == "jpeg" ||
      extFile == "png" ||
      extFile == "svg" ||
      extFile == "gif"
    ) {
      reader.onloadend = function () {
        const form = new FormData();
        form.append("img", file);
        imageupload(form);
        console.log(file, "file");
      };

      if (name === "c_druglicense_no1_img") {
        setInputs({
          ...inputs,
          [`${name}_name`]: imageUploadResult.payload.path,
          [name]: imageUploadResult.payload.path,
        });
      } else if (name === "c_druglicense_no2_img") {
        setInputs({
          ...inputs,
          [`${name}_name`]: imageUploadResult.payload.path,
          [name]: imageUploadResult.payload.path,
        });
      } else if (name === "c_narcotic_no_img") {
        setInputs({
          ...inputs,
          [`${name}_name`]: imageUploadResult.payload.path,
          [name]: imageUploadResult.payload.path,
        });
      } else if (name === "c_tan_no_img") {
        setInputs({
          ...inputs,
          [`${name}_name`]: imageUploadResult.payload.path,
          [name]: imageUploadResult.payload.path,
        });
      } else if (name === "c_pan_no_img") {
        setInputs({
          ...inputs,
          [`${name}_name`]: imageUploadResult.payload.path,
          [name]: imageUploadResult.payload.path,
        });
      } else if (name === "c_it_pan_no_img") {
        setInputs({
          ...inputs,
          [`${name}_name`]: imageUploadResult.payload.path,
          [name]: imageUploadResult.payload.path,
        });
      } else if (name === "c_electricity_bill_no_img") {
        setInputs({
          ...inputs,
          [`${name}_name`]: imageUploadResult.payload.path,
          [name]: imageUploadResult.payload.path,
        });
      } else if (name === "c_rent_agreement_no_img") {
        setInputs({
          ...inputs,
          [`${name}_name`]: imageUploadResult.payload.path,
          [name]: imageUploadResult.payload.path,
        });
      } else if (name === "c_partnership_deed_no_img") {
        setInputs({
          ...inputs,
          [`${name}_name`]: imageUploadResult.payload.path,
          [name]: imageUploadResult.payload.path,
        });
      } else if (name === "c_bank_statement_img") {
        setInputs({
          ...inputs,
          [`${name}_name`]: imageUploadResult.payload.path,
          [name]: imageUploadResult.payload.path,
        });
      } else if (name === "c_authority_letter_img") {
        setInputs({
          ...inputs,
          [`${name}_name`]: imageUploadResult.payload.path,
          [name]: imageUploadResult.payload.path,
        });
      }

      const temp = inputs;
      if (temp[id] === "") {
        setErrors({ ...errors, [id]: true });
      }

      reader.readAsDataURL(file);
    } else {
      // alert("Please Select Valid Image")
      setErrMsg("Please Select Valid Images");
    }
  };

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
  const clickHandleCancel = (event) => {
    console.log(event, "click handle cancel");
    if (event === "c_dl1_img") {
      setInputs({ ...inputs, c_druglicense_no1_img: "" });
    } else if (event === "c_dl2_img") {
      setInputs({ ...inputs, c_druglicense_no2_img: "" });
    } else if (event === "c_nc_img") {
      setInputs({ ...inputs, c_narcotic_no_img: "" });
    } else if (event === "c_tan_img") {
      setInputs({ ...inputs, c_tan_no_img: "" });
    } else if (event === "c_pan_img") {
      setInputs({ ...inputs, c_pan_no_img: "" });
    } else if (event === "c_ipan_img") {
      setInputs({ ...inputs, c_it_pan_no_img: "" });
    } else if (event === "c_eb_img") {
      setInputs({ ...inputs, c_electricity_bill_no_img: "" });
    } else if (event === "c_ra_img") {
      setInputs({ ...inputs, c_rent_agreement_no_img: "" });
    } else if (event === "c_pd_img") {
      setInputs({ ...inputs, c_partnership_deed_no_img: "" });
    } else if (event === "c_bs_img") {
      setInputs({ ...inputs, c_bank_statement_img: "" });
    } else if (event === "c_al_img") {
      setInputs({ ...inputs, c_authority_letter_img: "" });
    }
  };

  const handleBlur = (e) => {
    let { name, value } = e.target;
    if (name === "c_name") {
      let str = value;
      let firstLetter = str.charAt(0);
      if (firstLetter === " ") {
        setErrors({ ...errors, [name]: true });
      } else if (!/^(?=.*[a-zA-Z]).{4,128}$/.test(value)) {
        setErrors({ ...errors, [name]: true });
      }
    } else if (name === "c_email") {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        setErrors({ ...errors, [name]: true });
      }
    }
    // else if (name === "c_druglicense_no1") {
    //   if (value.length < 13) {
    //     setErrors({ ...errors, [name]: true });
    //   }
    //   if (value !== "" && inputs.c_druglicense_no1_img_name === "") {
    //     setErrors({ ...errors, [name]: true });
    //   }
    // } else if (name === "c_druglicense_no2") {
    //   if (value.length < 13) {
    //     setErrors({ ...errors, [name]: true });
    //   }

    //   if (value !== "" && inputs.c_druglicense_no2_img_name === "") {
    //     setErrors({ ...errors, [name]: true });
    //   }
    // }
    else if (name === "c_gst_no") {
      if (value !== "" && inputs.c_gst_no === "") {
        setErrors({ ...errors, [name]: true });
      } else if (
        !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value)
      ) {
        setErrors({ ...errors, [name]: true });
      }
    } else if (name === "c_pan_no") {
      if (value !== "" && inputs.c_pan_no === "") {
        setErrors({ ...errors, [name]: true });
      } else if (value.length <= 10) {
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
          setErrors({ ...errors, [name]: true });
        }
      }
    } else if (name === "c_tan_no") {
      if (value !== "" && inputs.c_tan_no === "") {
        setErrors({ ...errors, [name]: true });
      } else if (value.length <= 10) {
        if (!/^[A-Z]{4}[0-9]{5}[A-Z]{1}$/.test(value)) {
          setErrors({ ...errors, [name]: true });
        }
      }
    }
    // else if (name === "c_narcotic_no") {
    //   if (value !== "" && inputs.c_narcotic_no === "") {
    //     setErrors({ ...errors, [name]: true });
    //   } else if (value.length < 15) {
    //     setErrors({ ...errors, [name]: true });
    //   }

    // }
    else if (name === "c_firm_address1" && value.length < 4) {
      setErrors({ ...errors, [name]: true });
    } else if (name === "c_firm_address2" && value.length < 4) {
      setErrors({ ...errors, [name]: true });
    } else if (name === "c_firm_contact_person") {
      if (!/^[A-Za-z\s]+$/.test(value) || value.length < 4) {
        setErrors({ ...errors, [name]: true });
      }
    } else if (name === "c_pincode") {
      if (value.length <= 6) {
        if (!/^[1-9]\d{5}$/.test(value)) {
          setErrors({ ...errors, [name]: true });
        }
      }
    }
  };

  const [cardExpiryDate, setCardExpiryDate] = useState(null);
  function handleCardExpiryDate(date) {
    let selDate = "";

    if (date !== null) {
      selDate = `${date?.getFullYear()}-${
        date.getMonth() + 1
      }-${date?.getDate()}`;
    }

    setInputs({ ...inputs, d_card_exp: selDate });
    setCardExpiryDate(date);
  }

  const [drugExpiryDate, setDrugExpiryDate] = useState(null);
  function handleDrugExpiryDate(date) {
    let selDate = "";
    let currDate = "";
    setErrors({ ...errors, c_druglicense_expiry_date: false });
    if (date !== null) {
      let mon = parseInt(`${date.getMonth() + 1}`);
      let month = mon > 9 ? mon : "0" + mon;
      let dd = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
      selDate = `${date?.getFullYear()}-${month}-${dd}`;
      console.log("selDate", selDate);
      let currentDate = new Date();
      let s_month = parseInt(`${currentDate.getMonth() + 1}`);
      let ss_month = s_month > 9 ? s_month : "0" + s_month;
      let s_date =
        currentDate.getDate() > 9
          ? currentDate.getDate()
          : "0" + currentDate.getDate();
      currDate = `${currentDate?.getFullYear()}-${ss_month}-${s_date}`;
      // console.log("date",currDate,)
      if (currDate === selDate) {
        alert("Please Select Future Date");
        setDrugExpiryDate(null);
      } else {
        setInputs({ ...inputs, c_druglicense_expiry_date: selDate });
        setDrugExpiryDate(date);
      }
      //selDate = `${date?.getFullYear()}-${date.getMonth()+1}-${date?.getDate()}`
    }
  }

  const handleSubmit = () => {
    if (inputs.c_name === "" || errors.c_name === true) {
      setErrors({ ...errors, c_name: true });
    }
    else if (inputs.c_email === "" || errors.c_email === true) {
      setErrors({ ...errors, c_email: true });
    }
    else if (inputs.c_pincode === "" || errors.c_pincode === true) {
      setErrors({ ...errors, c_pincode: true });
    }
    else if(inputs.c_firm_contact_person === "" || errors.c_firm_contact_person === true){
      setErrors({ ...errors, c_firm_contact_person: true });
    }
    else if(inputs.c_firm_address1 === "" || errors.c_firm_address1 === true){
      setErrors({ ...errors, c_firm_address1: true });
    }
    else if(inputs.c_firm_address2 === "" || errors.c_firm_address2 === true){
      setErrors({ ...errors, c_firm_address2: true });
    }
    // else if (
    //   inputs.c_druglicense_no1 === "" ||
    //   errors.c_druglicense_no1 === true
    // ) {
    //   setErrors({ ...errors, c_druglicense_no1: true });
    // } else if (errors.c_druglicense_no2 === true) {
    //   setErrors({ ...errors, c_druglicense_no2: true });
    // } else if (
    //   inputs.c_druglicense_expiry_date === "" ||
    //   errors.c_druglicense_expiry_date === true
    // ) {
    //   setErrors({ ...errors, c_druglicense_expiry_date: true });
    // } 
    else if (inputs.c_gst_type === -100 || errors.c_gst_type === true) {
      setErrors({ ...errors, c_gst_type: true });
    } 
    else if (inputs.c_gst_no === "" || errors.c_gst_no === true) {
      setErrors({ ...errors, c_gst_no: true });
    } 
    // else if (
    //   inputs.c_firm_contact_person === "" ||
    //   errors.c_firm_contact_person === true
    // ) {
    //   setErrors({ ...errors, c_firm_contact_person: true });
    // } else if (
    //   inputs.c_firm_address1 === "" ||
    //   errors.c_firm_address1 === true
    // ) {
    //   setErrors({ ...errors, c_firm_address1: true });
    // } else if (
    //   inputs.c_firm_address2 === "" ||
    //   errors.c_firm_address2 === true
    // ) {
    //   setErrors({ ...errors, c_firm_address2: true });
    // } else if (inputs.c_pincode === "" || errors.c_pincode === true) {
    //   setErrors({ ...errors, c_pincode: true });
    // } else if (inputs.c_state_name === "" || errors.c_state_name === true) {
    //   setErrors({ ...errors, c_state_name: true });
    // } else if (inputs.c_city_name === "" || errors.c_city_name === true) {
    //   setErrors({ ...errors, c_city_name: true });
    // } else if (inputs.c_area_name === "" || errors.c_area_name === true) {
    //   setErrors({ ...errors, c_area_name: true });
    // } else if (errors.c_narcotic_no === true) {
    //   setErrors({ ...errors, c_narcotic_no: true });
    // }
    else {
      // let body = {};

      // Object.entries(inputs).map((entry) => {
      //   if (
      //     entry[0] === "c_druglicense_no1_img_name" ||
      //     entry[0] === "c_druglicense_no2_img_name" ||
      //     entry[0] === "c_narcotic_no_img_name"
      //   ) {
      //   } else if (entry[1] !== "") {
      //     body[entry[0]] = entry[1];
      //   }
      // });

      const body = {
        c_firm_name: inputs.c_name,
        c_mobile_no:localStorage.getItem("MOBILE_NO"),
        c_pincode: inputs.c_pincode,
        c_email: inputs.c_email,
        c_drug_license_no1: inputs.c_druglicense_no1,
        c_drug_license_no1_img: inputs.c_druglicense_no1_img,
        c_drug_license_no2: inputs.c_druglicense_no2,
        c_drug_license_no2_img: inputs.c_druglicense_no2_img,
        // c_drug_license_no3: inputs.c_druglicense_no3,
        // c_drug_license_no3_img: inputs.c_druglicense_no3_img,
        c_gst_type: inputs.c_gst_type,
        c_gst_number: inputs.c_gst_no,
        c_narcotic_no: inputs.c_narcotic_no,
        c_narcotic_no_img: inputs.c_narcotic_no_img,
        c_tan_no: inputs.c_tan_no,
        c_tan_no_img: inputs.c_tan_no_img,
        c_pan_no: inputs.c_pan_no,
        c_pan_no_img: inputs.c_pan_no_img,
        c_it_pan_no: inputs.c_it_pan_no,
        c_it_pan_no_img: inputs.c_it_pan_no_img,
        c_electricity_bill: inputs.c_electricity_bill_no,
        c_electricity_bill_img: inputs.c_electricity_bill_no_img,
        c_rent_agreement: inputs.c_rent_agreement_no,
        c_rent_agreement_img: inputs.c_rent_agreement_no_img,
        c_partnership_deed: inputs.c_partnership_deed_no,
        c_partnership_deed_img: inputs.c_partnership_deed_no_img,
        c_bank_statement: inputs.c_bank_statement,
        c_bank_statement_img: inputs.c_bank_statement_img,
        c_authority_letter: inputs.c_authority_letter,
        c_authority_letter_img: inputs.c_authority_letter_img,
        c_contact_person_name: inputs.c_firm_contact_person,
        c_address_no1: inputs.c_firm_address1,
        c_address_no2: inputs.c_firm_address2,
        c_state_code: inputs.c_state_code,
        c_state_name: inputs.c_state_name,
        c_city_code: inputs.c_city_code,
        c_city_name: inputs.c_city_name,
        c_area_code: inputs.c_area_code,
        c_area_name: inputs.c_area_name,
        c_type: "B",
        c_firm_img: inputs.c_image_url,
      };

      if(inputs.c_druglicense_expiry_date !== '')
      {
          body['c_drug_license_no1_expiry_date']=inputs.c_druglicense_expiry_date;
          // body['c_drug_license_no2_expiry_date']=inputs.c_druglicense_expiry_date;
          // body['c_drug_license_no3_expiry_date']=inputs.c_druglicense_expiry_date;
      }
     


      console.log(body, "<<<BODY");
      AddBranchAction(body);
        setInputs({
        c_name: "",
    c_seller: "",
    c_buyer: "",
    c_email: "",
    c_firm_contact_person: "",
    c_firm_address1: "",
    c_firm_address2: "",
    c_state_name: "",
    c_city_name: "",
    c_area_name: "",
    c_state_code: "",
    c_city_code: "",
    c_area_code: "",
    c_pincode: "",
    c_landmark: "",
    c_card_holder_name: "",
    c_card_no: "",
    d_card_exp: "",
    c_card_ifsc: "",
    c_druglicense_no1: "",
    c_druglicense_no2: "",
    c_druglicense_expiry_date: "",
    c_gst_type: -100,
    c_gst_no: "",
    c_narcotic_no: "",
    c_status: "",
    c_image_url: "",
    c_druglicense_no1_img: "",
    c_druglicense_no2_img: "",
    c_narcotic_no_img: "",
    c_druglicense_no1_img_name: "",
    c_druglicense_no2_img_name: "",
    c_narcotic_no_img_name: "",
    c_tan_no: "",
    c_tan_no_img: "",
    c_pan_no: "",
    c_pan_no_img: "",
    c_it_pan_no: "",
    c_it_pan_no_img: "",
    c_electricity_bill_no: "",
    c_electricity_bill_no_img: "",
    c_rent_agreement_no: "",
    c_rent_agreement_no_img: "",
    c_partnership_deed_no: "",
    c_partnership_deed_no_img: "",
    c_bank_statement: "",
    c_bank_statement_img: "",
    c_authority_letter: "",
    c_authority_letter_img: "",
      })
    }
  };

  useEffect(() => {
    GSTListAction();
  }, []);

  // useEffect(() => {
  //   setStateList(stateListResult.payload);
  // }, [stateListResult]);

  // useEffect(() => {
  //   setCityList(cityListResult.payload);
  // }, [cityListResult]);

  // useEffect(() => {
  //   setAreaList(areaListResult.payload);
  // }, [areaListResult]);

  useEffect(() => {
    if (match.params.branchId) {
      if (branchInfoResult.error === "") {
        let temp = { ...inputs };

        Object.entries(branchInfoResult.payload).map((entry) => {
          if (entry[0] === "c_druglicense_no1_img") {
            temp[entry[0]] = entry[1];
            temp["c_druglicense_no1_img_name"] = entry[1].substring(
              entry[1].lastIndexOf("/") + 1,
              entry[1].length
            );
          } else if (entry[0] === "c_druglicense_no2_img") {
            temp[entry[0]] = entry[1];
            temp["c_druglicense_no2_img_name"] = entry[1].substring(
              entry[1].lastIndexOf("/") + 1,
              entry[1].length
            );
          } else if (entry[0] === "c_narcotic_no_img") {
            temp[entry[0]] = entry[1];
            temp["c_narcotic_no_img_name"] = entry[1].substring(
              entry[1].lastIndexOf("/") + 1,
              entry[1].length
            );
          } else if (entry[0] === "c_druglicense_expiry_date") {
            const date = new Date(entry[1]);
            // const selDate = `${date?.getFullYear()}-${date.getMonth()+1}-${date?.getDate()}`
            let mon = parseInt(`${date.getMonth() + 1}`);
            let month = mon > 9 ? mon : "0" + mon;
            let dd = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
            const selDate = `${date?.getFullYear()}-${month}-${dd}`;
            temp[entry[0]] = selDate;
            setDrugExpiryDate(entry[1]);
          } else {
            temp[entry[0]] = entry[1];
          }
        });
        setInputs(temp);
      }
    } else {

    

      setErrorMsg(branchInfoResult.error);
    }
  }, [branchInfoResult]);

  useEffect(() => {

    if(addBranchResult.statuscode === 0){
     history.push("/profile/branch");
    }else if(addBranchResult.statuscode === 2){
      setErrorMsg(addBranchResult.error);
      setAddBranchModal(true);
    }

    // if (addBranchResult.error !== "") {
    //   setErrorMsg(addBranchResult.error);
    // } else if (addBranchResult.message !== null && isSaveClicked) {
      
    //   setAddBranchModal(true);
    //   history.push("/profile/branch");
    // }
  }, [addBranchResult]);

  // To show the error

  const [openImgViewD1, setOpenImgViewD1] = useState(false);
  const [openImgViewD2, setOpenImgViewD2] = useState(false);
  const [openImgViewNN, setOpenImgViewNN] = useState(false);

  const [openImgViewTN, setOpenImgViewTN] = useState(false);
  const [openImgViewPN, setOpenImgViewPN] = useState(false);
  const [openImgViewIPN, setOpenImgViewIPN] = useState(false);
  const [openImgViewEB, setOpenImgViewEB] = useState(false);
  const [openImgViewRA, setOpenImgViewRA] = useState(false);
  const [openImgViewPD, setOpenImgViewPD] = useState(false);
  const [openImgViewBS, setOpenImgViewBS] = useState(false);
  const [openImgViewAL, setOpenImgViewAL] = useState(false);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    

    if (inputs.c_name === "" || errors.c_name === true) {
      setErrors({ ...errors, c_name: true });
    }else if(inputs.c_pincode === "" || errors.c_pincode === true){
      setErrors({ ...errors, c_pincode: true });
    }else if(inputs.c_gst_type === -100 || errors.c_gst_type === true){
      setErrors({ ...errors, c_gst_type: true });
    }else if(inputs.c_gst_no === "" || errors.c_gst_no === true){
      setErrors({ ...errors, c_gst_no: true });
    }
    

    else{
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    // if (name === "c_name") {
    //   let str = value;
    //   let firstLetter = str.charAt(0);
    //   if (firstLetter === " ") {
    //     setErrors({ ...errors, [name]: true });
    //   } else if (!/^(?=.*[a-zA-Z]).{4,128}$/.test(value)) {
    //     setErrors({ ...errors, [name]: true });
    //   }
    // }else{
      
    // }
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  // useEffect(() => {

   


  //   if (addBranchResult.statuscode === 0) {
  //     setOpenModal(true);
  //   } else if (addBranchResult.statuscode === 4) {
  //     setOpenModal(true);
  //   }
  // }, [addBranchResult]);









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
      c_area_name: getStateCityAreaResult.payload.c_area_name,
      c_area_code: getStateCityAreaResult.payload.c_area_code,
      c_city_name: getStateCityAreaResult.payload.c_city_name,
      c_city_code: getStateCityAreaResult.payload.c_city_code,
    });
    console.log(getStateCityAreaResult, "<<< Stae city");
  }, [getStateCityAreaResult]);












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
      <div>
      <ImageView
        open={openImgViewD1}
        handleClose={() => setOpenImgViewD1(false)}
        imgUrl={inputs.c_druglicense_no1_img}
      />
      <ImageView
        open={openImgViewD2}
        handleClose={() => setOpenImgViewD2(false)}
        imgUrl={inputs.c_druglicense_no2_img}
      />
      <ImageView
        open={openImgViewNN}
        handleClose={() => setOpenImgViewNN(false)}
        imgUrl={inputs.c_narcotic_no_img}
      />

      <ImageView
        open={openImgViewTN}
        handleClose={() => setOpenImgViewTN(false)}
        imgUrl={inputs.c_tan_no_img}
      />
      <ImageView
        open={openImgViewPN}
        handleClose={() => setOpenImgViewPN(false)}
        imgUrl={inputs.c_pan_no_img}
      />
      <ImageView
        open={openImgViewIPN}
        handleClose={() => setOpenImgViewIPN(false)}
        imgUrl={inputs.c_it_pan_no_img}
      />
      <ImageView
        open={openImgViewEB}
        handleClose={() => setOpenImgViewEB(false)}
        imgUrl={inputs.c_electricity_bill_no_img}
      />
      <ImageView
        open={openImgViewRA}
        handleClose={() => setOpenImgViewRA(false)}
        imgUrl={inputs.c_rent_agreement_no_img}
      />
      <ImageView
        open={openImgViewPD}
        handleClose={() => setOpenImgViewPD(false)}
        imgUrl={inputs.c_partnership_deed_no_img}
      />
      <ImageView
        open={openImgViewBS}
        handleClose={() => setOpenImgViewBS(false)}
        imgUrl={inputs.c_bank_statement_img}
      />
      <ImageView
        open={openImgViewAL}
        handleClose={() => setOpenImgViewAL(false)}
        imgUrl={inputs.c_authority_letter_img}
      />
      <div>
        {/* <Collapse in={inputs.c_name && openModal}>
          <Alert
            severity={addBranchResult.statuscode === 4 ? "error" : "success"}
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
            {addBranchResult.statuscode !== "" ? (
              <span className="font-weight-bold">
                Note:{" "}
                {addBranchResult.statuscode === 4 && addBranchResult.error}
              </span>
            ) : (
              <span className="font-weight-bold">
                Note:{" "}
                {addBranchResult.statuscode === 0 && addBranchResult.message}
              </span>
            )}
          </Alert>
        </Collapse> */}
      </div>

      <div className="profile-title-sec ml-16">
        <div>
          <h4 className="profile-title">Branch Management</h4>
          <p className="profile-sub-title">
            Add A New Branch/Store given below
          </p>
        </div>
      </div>

      <div>
        <form className="profile-details-sec">
          <p className="login-error-msg min-height-none mb-10">
            {errMsg.toLowerCase()}
          </p>
          <div className="ml-16">
            <h4 className="profile-title">Store Info</h4>
          </div>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <div className="ml-16">
                <TextField
                  name="c_name"
                  value={inputs.c_name}
                  autoComplete="off"
                  onChange={(e) => handleInputChange(e)}
                  error={errors.c_name}
                  onBlur={(e) => handleBlur(e)}
                  helperText={errors.c_name && "Not a valid Store/Firm Name"}
                  margin="normal"
                  variant="outlined"
                  placeholder="Store/Firm Name *"
                  className="auth-input opacity2img"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Shop} alt="shop" />
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
                  type="number"
                  value={inputs.c_pincode}
                  onChange={(e) => handleInputChange(e)}
                  error={errors.c_pincode}
                  onBlur={(e) => handleBlur(e)}
                  helperText={errors.c_pincode && "Not a valid Pincode"}
                  margin="normal"
                  variant="outlined"
                  placeholder="Pincode *"
                  className="auth-input"
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Zipcode} alt="Pincode" />
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
                  helperText={errors.c_email && "Not a valid Email"}
                  margin="normal"
                  variant="outlined"
                  placeholder="Email *"
                  className="auth-input"
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Zipcode} alt="Pincode" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
          </Grid>
          <div className="ml-16">
            <h4 className="profile-title">Business Information</h4>
          </div>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <div>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              {getStepContent(activeStep) === "Firm legal Identities" && (
                <>
                  <div className="ml-16">
                    <div className="timer-web">
                      <p className="profile-title">Add Drug License no. 1</p>
                      <div className="profile-title-sec b-0">
                        <Button
                          disabled={count === 2 ? true : false}
                          variant="contained"
                          color="primary"
                          className="profile-addnewuser"
                          component="span"
                          onClick={() => addFormFields()}
                          // onClick={handleAddStore}
                        >
                          Add License
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Grid container spacing={0}>
                    <Grid item xs={4}>
                      <div className="ml-16">
                        <TextField
                          name="c_druglicense_no1"
                          value={inputs.c_druglicense_no1}
                          onChange={(e) => handleInputChange(e)}
                          error={errors.c_druglicense_no1}
                          onBlur={(e) => handleBlur(e)}
                          autoComplete="new-password"
                          helperText={
                            errors.c_druglicense_no1 &&
                            inputs.c_druglicense_no1_img_name === "" &&
                            "Please Enter Valid Drug no and upload a license image"
                          }
                          margin="normal"
                          variant="outlined"
                          placeholder="Drug License Number 1 "
                          className="auth-input"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <img src={FirstAidKit} alt="mobile-phone" />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <img src={Camera} alt="Camera" />
                                <input
                                  type="file"
                                  name="c_druglicense_no1_img"
                                  id="c_druglicense_no1"
                                  accept="image/jpeg, image/png, image/jpg, image/webp"
                                  onChange={(e) => handleUpload(e)}
                                  multiple={false}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {inputs.c_druglicense_no1_img && (
                          <div className="display-flex">
                            <h4
                              className="profile-upload uploaded-imagename"
                              onClick={() => setOpenImgViewD1(true)}
                            >
                              <span>{inputs.c_druglicense_no1_img}</span>
                            </h4>
                            <h4
                              className="profile-upload uploaded-imagename float-right"
                              onClick={() => clickHandleCancel("c_dl1_img")}
                            >
                              <span>x</span>
                            </h4>
                          </div>
                        )}
                      </div>
                    </Grid>

                    <Grid item xs={4}>
                      <div className="ml-16">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <DatePicker
                            name="c_druglicense_expiry_date"
                            value={drugExpiryDate}
                            onChange={handleDrugExpiryDate}
                            error={errors.c_druglicense_expiry_date}
                            className="auth-input"
                            inputVariant="outlined"
                            margin="normal"
                            format="dd/MM/yyyy"
                            placeholder="Valid Till "
                            minDate={new Date()}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <img src={Calendar} alt="user-img" />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </div>
                    </Grid>

                    <Grid item xs={4}>
                      <div className="ml-16">

                        <TextField
                          name="c_gst_type"
                          autoComplete="new-password"
                          value={inputs.c_gst_type}
                          onChange={(e) => handleInputChange(e)}
                          onBlur={(e) => handleBlur(e)}
                          error={errors.c_gst_type}
                          helperText={errors.c_gst_type && "Please Select GST Type"}
                          className="toCatp auth-input"
                          placeholder="Gst type *"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <img src={Gst} alt="gst" />
                              </InputAdornment>
                            ),
                          }}
                          margin="normal"
                          variant="outlined"
                          select
                        >
                          <MenuItem value={-100}>Gst Type *</MenuItem>
                          {/* <MenuItem key={"00000"} value={"00000"}>
                    <div className="opacity-05">Select GST Type</div>
                  </MenuItem> */}
                          
                          {(gstListResult.payload).map((item) => (
                    <MenuItem className="toCatp" key={item.n_id} value={item.n_id} >{item.c_gst_type.toLowerCase()}</MenuItem>
                  ))}
                        </TextField>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <div className="ml-16">
                        {/* <Tooltip title="GSTIN Number" TransitionComponent={Zoom} > */}

                        <TextField
                          name="c_gst_no"
                          value={inputs.c_gst_no.toUpperCase()}
                          // value={inputs.c_gst_no}
                          onChange={(e) => handleInputChange(e)}
                          error={errors.c_gst_no}
                          onBlur={(e) => handleBlur(e)}
                          helperText={
                            errors.c_gst_no && "Not a valid GSTIN number"
                          }
                          margin="normal"
                          variant="outlined"
                          placeholder="GSTIN Number *"
                          className="auth-input"
                          autoComplete="new-password"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <img src={Tax} alt="tax" />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid>
                  {formValues.map((element, index) => (
                    <div key={index}>
                      {index ? (
                        <>
                          <Grid container spacing={0}>
                            <Grid item xs={4}>
                              <div className="ml-16">
                                <TextField
                                  name="c_druglicense_no1"
                                  value={inputs.c_druglicense_no1}
                                  onChange={(e) => handleInputChange(e)}
                                  error={errors.c_druglicense_no1}
                                  onBlur={(e) => handleBlur(e)}
                                  autoComplete="new-password"
                                  helperText={
                                    errors.c_druglicense_no1 &&
                                    inputs.c_druglicense_no1_img_name === "" &&
                                    "Please Enter Valid Drug no and upload a license image"
                                  }
                                  margin="normal"
                                  variant="outlined"
                                  placeholder="Drug License Number 1 "
                                  className="auth-input"
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <img
                                          src={FirstAidKit}
                                          alt="mobile-phone"
                                        />
                                      </InputAdornment>
                                    ),
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <img src={Camera} alt="Camera" />
                                        <input
                                          type="file"
                                          name="c_druglicense_no1_img"
                                          id="c_druglicense_no1"
                                          accept="image/jpeg, image/png, image/jpg, image/webp"
                                          onChange={(e) => handleUpload(e)}
                                          multiple={false}
                                        />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                                {inputs.c_druglicense_no1_img && (
                                  <div className="display-flex">
                                    <h4
                                      className="profile-upload uploaded-imagename"
                                      onClick={() => setOpenImgViewD1(true)}
                                    >
                                      <span>
                                        {inputs.c_druglicense_no1_img}
                                      </span>
                                    </h4>
                                    <h4
                                      className="profile-upload uploaded-imagename float-right"
                                      onClick={() =>
                                        clickHandleCancel("c_dl1_img")
                                      }
                                    >
                                      <span>x</span>
                                    </h4>
                                  </div>
                                )}
                              </div>
                            </Grid>

                            <Grid item xs={4}>
                              <div className="ml-16">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <DatePicker
                                    name="c_druglicense_expiry_date"
                                    value={drugExpiryDate}
                                    onChange={handleDrugExpiryDate}
                                    error={errors.c_druglicense_expiry_date}
                                    className="auth-input"
                                    inputVariant="outlined"
                                    margin="normal"
                                    format="dd/MM/yyyy"
                                    placeholder="Valid Till "
                                    minDate={new Date()}
                                    InputProps={{
                                      startAdornment: (
                                        <InputAdornment position="start">
                                          <img src={Calendar} alt="user-img" />
                                        </InputAdornment>
                                      ),
                                    }}
                                  />
                                </MuiPickersUtilsProvider>
                              </div>
                            </Grid>
                            <Grid item xs={4}>
                              <div className="align-right">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  className="addbranch-btn delete"
                                  component="span"
                                  onClick={() => removeFormFields(index)}
                                >
                                  delete
                                </Button>
                              </div>
                            </Grid>
                          </Grid>
                        </>
                      ) : null}
                    </div>
                  ))}
                </>
              )}

              {getStepContent(activeStep) === "Other Documents" && (
                <Grid container spacing={0}>
                  <Grid item xs={4}>
                    <div className="ml-16">
                      <TextField
                        name="c_narcotic_no"
                        value={inputs.c_narcotic_no}
                        onChange={(e) => handleInputChange(e)}
                        error={errors.c_narcotic_no}
                        onBlur={(e) => handleBlur(e)}
                        autoComplete="new-password"
                        helperText={
                          errors.c_narcotic_no &&
                          inputs.c_narcotic_no_img_name === "" &&
                          "Please Enter valid narcotic no. and upload a image"
                        }
                        margin="normal"
                        variant="outlined"
                        placeholder="Narcotic Number"
                        className="auth-input"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <img src={Drug} alt="Drug" />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <img src={Camera} alt="Camera" />
                              <input
                                type="file"
                                name="c_narcotic_no_img"
                                id="c_narcotic_no"
                                accept="image/jpeg, image/png, image/jpg, image/webp"
                                onChange={(e) => handleUpload(e)}
                                multiple={false}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {inputs.c_narcotic_no_img && (
                        <div className="display-flex">
                          <h4
                            className="profile-upload uploaded-imagename"
                            onClick={() => setOpenImgViewNN(true)}
                          >
                            <span>{inputs.c_narcotic_no_img}</span>
                          </h4>
                          <h4
                            className="profile-upload uploaded-imagename float-right"
                            onClick={() => clickHandleCancel("c_nc_img")}
                          >
                            <span>x</span>
                          </h4>
                        </div>
                      )}
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="ml-16">
                      {/* <Tooltip title="Narcotic Number" TransitionComponent={Zoom} > */}

                      <TextField
                        name="c_tan_no"
                        value={inputs.c_tan_no.toUpperCase()}
                        onChange={(e) => handleInputChange(e)}
                        error={errors.c_tan_no}
                        onBlur={(e) => handleBlur(e)}
                        autoComplete="new-password"
                        helperText={
                          errors.c_tan_no &&
                          "Please Enter valid tan no. and upload a image"
                        }
                        margin="normal"
                        variant="outlined"
                        placeholder="TAN"
                        className="auth-input"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <img src={Drug} alt="Drug" />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <img src={Camera} alt="Camera" />
                              <input
                                type="file"
                                name="c_tan_no_img"
                                id="c_tan_no"
                                accept="image/jpeg, image/png, image/jpg, image/webp"
                                onChange={(e) => handleUpload(e)}
                                multiple={false}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      {/* {inputs.c_tan_no_img && (
                  <h4
                    className="profile-upload uploaded-imagename"
                    onClick={() => setOpenImgViewNN(true)}
                  >
                    <span>{inputs.c_tan_no_img_name}</span>
                  </h4>
                )} */}

                      {inputs.c_tan_no_img && (
                        <div className="display-flex">
                          <h4
                            className="profile-upload uploaded-imagename"
                            onClick={() => setOpenImgViewTN(true)}
                          >
                            <span>{inputs.c_tan_no_img}</span>
                            {/* <span>{inputs.c_druglicense_no1_img_name}</span> */}
                          </h4>
                          <h4
                            className="profile-upload uploaded-imagename float-right"
                            onClick={() => clickHandleCancel("c_tan_img")}
                          >
                            <span>x</span>
                          </h4>
                        </div>
                      )}
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="ml-16">
                      {/* <Tooltip title="Narcotic Number" TransitionComponent={Zoom} > */}

                      <TextField
                        name="c_pan_no"
                        value={inputs.c_pan_no.toUpperCase()}
                        onChange={(e) => handleInputChange(e)}
                        error={errors.c_pan_no}
                        onBlur={(e) => handleBlur(e)}
                        autoComplete="new-password"
                        helperText={
                          errors.c_pan_no &&
                          inputs.c_pan_no_img_name === "" &&
                          "Please Enter valid pan no. and upload a image"
                        }
                        margin="normal"
                        variant="outlined"
                        placeholder="PAN"
                        className="auth-input"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <img src={Drug} alt="Drug" />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <img src={Camera} alt="Camera" />
                              <input
                                type="file"
                                name="c_pan_no_img"
                                id="c_pan_no"
                                accept="image/jpeg, image/png, image/jpg, image/webp"
                                onChange={(e) => handleUpload(e)}
                                multiple={false}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      {/* {inputs.c_pan_no_img && (
                  <h4
                    className="profile-upload uploaded-imagename"
                    onClick={() => setOpenImgViewNN(true)}
                  >
                    <span>{inputs.c_pan_no_img_name}</span>
                  </h4>
                )} */}

                      {inputs.c_pan_no_img && (
                        <div className="display-flex">
                          <h4
                            className="profile-upload uploaded-imagename"
                            onClick={() => setOpenImgViewPN(true)}
                          >
                            <span>{inputs.c_pan_no_img}</span>
                            {/* <span>{inputs.c_druglicense_no1_img_name}</span> */}
                          </h4>
                          <h4
                            className="profile-upload uploaded-imagename float-right"
                            onClick={() => clickHandleCancel("c_pan_img")}
                          >
                            <span>x</span>
                          </h4>
                        </div>
                      )}
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="ml-16">
                      {/* <Tooltip title="Narcotic Number" TransitionComponent={Zoom} > */}

                      <TextField
                        name="c_it_pan_no"
                        value={inputs.c_it_pan_no}
                        onChange={(e) => handleInputChange(e)}
                        error={errors.c_it_pan_no}
                        onBlur={(e) => handleBlur(e)}
                        autoComplete="new-password"
                        helperText={
                          errors.c_it_pan_no &&
                          inputs.c_it_pan_no_img_name === "" &&
                          "Please Enter valid it pan. and upload a image"
                        }
                        margin="normal"
                        variant="outlined"
                        placeholder="IT PAN"
                        className="auth-input"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <img src={Drug} alt="Drug" />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <img src={Camera} alt="Camera" />
                              <input
                                type="file"
                                name="c_it_pan_no_img"
                                id="c_it_pan_no"
                                accept="image/jpeg, image/png, image/jpg, image/webp"
                                onChange={(e) => handleUpload(e)}
                                multiple={false}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      {/* {inputs.c_it_pan_no_img && (
                  <h4
                    className="profile-upload uploaded-imagename"
                    onClick={() => setOpenImgViewNN(true)}
                  >
                    <span>{inputs.c_it_pan_no_img_name}</span>
                  </h4>
                )} */}

                      {inputs.c_it_pan_no_img && (
                        <div className="display-flex">
                          <h4
                            className="profile-upload uploaded-imagename"
                            onClick={() => setOpenImgViewIPN(true)}
                          >
                            <span>{inputs.c_it_pan_no_img}</span>
                            {/* <span>{inputs.c_druglicense_no1_img_name}</span> */}
                          </h4>
                          <h4
                            className="profile-upload uploaded-imagename float-right"
                            onClick={() => clickHandleCancel("c_ipan_img")}
                          >
                            <span>x</span>
                          </h4>
                        </div>
                      )}
                    </div>
                  </Grid>

                  <Grid item xs={4}>
                    <div className="ml-16">
                      {/* <Tooltip title="Narcotic Number" TransitionComponent={Zoom} > */}

                      <TextField
                        name="c_electricity_bill_no"
                        value={inputs.c_electricity_bill_no}
                        onChange={(e) => handleInputChange(e)}
                        error={errors.c_electricity_bill_no}
                        onBlur={(e) => handleBlur(e)}
                        autoComplete="new-password"
                        helperText={
                          errors.c_electricity_bill_no &&
                          inputs.c_electricity_bill_no_img_name === "" &&
                          "Please Enter valid electricity bill. and upload a image"
                        }
                        margin="normal"
                        variant="outlined"
                        placeholder="Electricity Bill"
                        className="auth-input"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <img src={Drug} alt="Drug" />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <img src={Camera} alt="Camera" />
                              <input
                                type="file"
                                name="c_electricity_bill_no_img"
                                id="c_electricity_bill_no"
                                accept="image/jpeg, image/png, image/jpg, image/webp"
                                onChange={(e) => handleUpload(e)}
                                multiple={false}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      {inputs.c_electricity_bill_no_img && (
                        <div className="display-flex">
                          <h4
                            className="profile-upload uploaded-imagename"
                            onClick={() => setOpenImgViewEB(true)}
                          >
                            <span>{inputs.c_electricity_bill_no_img}</span>
                            {/* <span>{inputs.c_druglicense_no1_img_name}</span> */}
                          </h4>
                          <h4
                            className="profile-upload uploaded-imagename float-right"
                            onClick={() => clickHandleCancel("c_eb_img")}
                          >
                            <span>x</span>
                          </h4>
                        </div>
                      )}
                    </div>
                  </Grid>

                  <Grid item xs={4}>
                    <div className="ml-16">
                      <TextField
                        name="c_rent_agreement_no"
                        value={inputs.c_rent_agreement_no}
                        onChange={(e) => handleInputChange(e)}
                        error={errors.c_rent_agreement_no}
                        onBlur={(e) => handleBlur(e)}
                        autoComplete="new-password"
                        helperText={
                          errors.c_rent_agreement_no &&
                          inputs.c_rent_agreement_no_img_name === "" &&
                          "Please Enter valid rent agreement. and upload a image"
                        }
                        margin="normal"
                        variant="outlined"
                        placeholder="Rent Agreement"
                        className="auth-input"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <img src={Drug} alt="Drug" />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <img src={Camera} alt="Camera" />
                              <input
                                type="file"
                                name="c_rent_agreement_no_img"
                                id="c_rent_agreement_no"
                                accept="image/jpeg, image/png, image/jpg, image/webp"
                                onChange={(e) => handleUpload(e)}
                                multiple={false}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      {/* {inputs.c_rent_agreement_no_img && (
                  <h4
                    className="profile-upload uploaded-imagename"
                    onClick={() => setOpenImgViewNN(true)}
                  >
                    <span>{inputs.c_rent_agreement_no_img_name}</span>
                  </h4>
                )} */}
                      {inputs.c_rent_agreement_no_img && (
                        <div className="display-flex">
                          <h4
                            className="profile-upload uploaded-imagename"
                            onClick={() => setOpenImgViewRA(true)}
                          >
                            <span>{inputs.c_rent_agreement_no_img}</span>
                            {/* <span>{inputs.c_druglicense_no1_img_name}</span> */}
                          </h4>
                          <h4
                            className="profile-upload uploaded-imagename float-right"
                            onClick={() => clickHandleCancel("c_ra_img")}
                          >
                            <span>x</span>
                          </h4>
                        </div>
                      )}
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="ml-16">
                      {/* <Tooltip title="Narcotic Number" TransitionComponent={Zoom} > */}

                      <TextField
                        name="c_partnership_deed_no"
                        value={inputs.c_partnership_deed_no}
                        onChange={(e) => handleInputChange(e)}
                        error={errors.c_partnership_deed_no}
                        onBlur={(e) => handleBlur(e)}
                        autoComplete="new-password"
                        helperText={
                          errors.c_partnership_deed_no &&
                          inputs.c_partnership_deed_no_img_name === "" &&
                          "Please Enter valid partnership deed. and upload a image"
                        }
                        margin="normal"
                        variant="outlined"
                        placeholder="Partnership Deed"
                        className="auth-input"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <img src={Drug} alt="Drug" />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <img src={Camera} alt="Camera" />
                              <input
                                type="file"
                                name="c_partnership_deed_no_img"
                                id="c_partnership_deed_no"
                                accept="image/jpeg, image/png, image/jpg, image/webp"
                                onChange={(e) => handleUpload(e)}
                                multiple={false}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      {inputs.c_partnership_deed_no_img && (
                        <div className="display-flex">
                          <h4
                            className="profile-upload uploaded-imagename"
                            onClick={() => setOpenImgViewPD(true)}
                          >
                            <span>{inputs.c_partnership_deed_no_img}</span>
                            {/* <span>{inputs.c_druglicense_no1_img_name}</span> */}
                          </h4>
                          <h4
                            className="profile-upload uploaded-imagename float-right"
                            onClick={() => clickHandleCancel("c_pd_img")}
                          >
                            <span>x</span>
                          </h4>
                        </div>
                      )}
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="ml-16">
                      <TextField
                        name="c_bank_statement"
                        value={inputs.c_bank_statement}
                        onChange={(e) => handleInputChange(e)}
                        error={errors.c_bank_statement}
                        onBlur={(e) => handleBlur(e)}
                        autoComplete="new-password"
                        helperText={
                          errors.c_bank_statement &&
                          inputs.c_bank_statement_img_name === "" &&
                          "Please Enter valid bank statement. and upload a image"
                        }
                        margin="normal"
                        variant="outlined"
                        placeholder="Bank Statement"
                        className="auth-input"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <img src={Drug} alt="Drug" />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <img src={Camera} alt="Camera" />
                              <input
                                type="file"
                                name="c_bank_statement_img"
                                id="c_bank_statement"
                                accept="image/jpeg, image/png, image/jpg, image/webp"
                                onChange={(e) => handleUpload(e)}
                                multiple={false}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      {inputs.c_bank_statement_img && (
                        <div className="display-flex">
                          <h4
                            className="profile-upload uploaded-imagename"
                            onClick={() => setOpenImgViewBS(true)}
                          >
                            <span>{inputs.c_bank_statement_img}</span>
                            {/* <span>{inputs.c_druglicense_no1_img_name}</span> */}
                          </h4>
                          <h4
                            className="profile-upload uploaded-imagename float-right"
                            onClick={() => clickHandleCancel("c_bs_img")}
                          >
                            <span>x</span>
                          </h4>
                        </div>
                      )}
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="ml-16">
                      <TextField
                        name="c_authority_letter"
                        value={inputs.c_authority_letter}
                        onChange={(e) => handleInputChange(e)}
                        error={errors.c_authority_letter}
                        onBlur={(e) => handleBlur(e)}
                        autoComplete="new-password"
                        helperText={
                          errors.c_authority_letter &&
                          inputs.c_authority_letter_img_name === "" &&
                          "Please Enter valid authority letter. and upload a image"
                        }
                        margin="normal"
                        variant="outlined"
                        placeholder="Authority Letter"
                        className="auth-input"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <img src={Drug} alt="Drug" />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <img src={Camera} alt="Camera" />
                              <input
                                type="file"
                                name="c_authority_letter_img"
                                id="c_authority_letter"
                                accept="image/jpeg, image/png, image/jpg, image/webp"
                                onChange={(e) => handleUpload(e)}
                                multiple={false}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      {inputs.c_authority_letter_img && (
                        <div className="display-flex">
                          <h4
                            className="profile-upload uploaded-imagename"
                            onClick={() => setOpenImgViewAL(true)}
                          >
                            <span>{inputs.c_authority_letter_img}</span>
                            {/* <span>{inputs.c_druglicense_no1_img_name}</span> */}
                          </h4>
                          <h4
                            className="profile-upload uploaded-imagename float-right"
                            onClick={() => clickHandleCancel("c_al_img")}
                          >
                            <span>x</span>
                          </h4>
                        </div>
                      )}
                    </div>
                  </Grid>
                </Grid>
              )}
              {getStepContent(activeStep) === "Firm Contact Information" && (
                <>
                  <div className="ml-16">
                    <h4 className="profile-subtitle">
                      Firm Contact Information
                    </h4>
                  </div>
                  <Grid container spacing={0}>
                    <Grid item xs={4}>
                      <div className="ml-16">
                        <TextField
                          name="c_firm_contact_person"
                          value={inputs.c_firm_contact_person}
                          onChange={(e) => handleInputChange(e)}
                          error={errors.c_firm_contact_person}
                          onBlur={(e) => handleBlur(e)}
                          helperText={
                            errors.c_firm_contact_person && "Not a valid name"
                          }
                          margin="normal"
                          variant="outlined"
                          placeholder="Contact Person Name *"
                          className="auth-input"
                          autoComplete="new-password"
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
                          name="c_firm_address1"
                          value={inputs.c_firm_address1}
                          onChange={(e) => handleInputChange(e)}
                          onBlur={(e) => handleBlur(e)}
                          error={errors.c_firm_address1}
                          helperText={
                            errors.c_firm_address1 && "Not a valid address"
                          }
                          margin="normal"
                          variant="outlined"
                          placeholder="Address Line 1 *"
                          className="auth-input"
                          autoComplete="new-password"
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
                          name="c_firm_address2"
                          value={inputs.c_firm_address2}
                          onChange={(e) => handleInputChange(e)}
                          onBlur={(e) => handleBlur(e)}
                          error={errors.c_firm_address2}
                          helperText={
                            errors.c_firm_address2 && "Not a valid address"
                          }
                          margin="normal"
                          variant="outlined"
                          placeholder="Address Line 2 *"
                          className="auth-input"
                          autoComplete="new-password"
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
                    {/* <Grid item xs={4}>
                      <div className="ml-16">
                        <TextField
                          name="c_pincode"
                          value={inputs.c_pincode}
                          // placeholder={inputs.c_pincode}
                          onChange={(e) => handleInputChange(e)}
                          error={errors.c_pincode}
                          onBlur={(e) => handleBlur(e)}
                          helperText={errors.c_pincode && "Not a valid pincode"}
                          type="number"
                          margin="normal"
                          variant="outlined"
                          placeholder="Pin Code *"
                          className="auth-input"
                          autoComplete="new-password"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <img src={Zipcode} alt="user" />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                    </Grid> */}




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
                        <img src={Worldwide} alt="Worldwide" />
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
                        <img src={Worldwide} alt="Worldwide" />
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
                        <img src={Worldwide} alt="Worldwide" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>









                    {/* <Grid item xs={4}>
                      <div className="ml-16">
                        <TextField
                          name="c_state_name"
                          onChange={(e) => handleInputChange(e)}
                          error={errors.state}
                          onBlur={(e) => handleBlur(e)}
                          placeholder="State"
                          helperText={errors.state && "Not a valid state"}
                          margin="normal"
                          variant="outlined"
                          className="toCatp auth-input"
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
                              <div className="opacity-05">
                                {inputs.c_state_name}
                              </div>
                            </MenuItem>
                          )}
                          
                          {stateList.map((option) => (
                            <MenuItem
                              key={option.c_state_code}
                              value={
                                option.c_state_code + `,` + option.c_state_name
                              }
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
                          error={errors.city}
                          onBlur={(e) => handleBlur(e)}
                          helperText={errors.city && "Not a valid city"}
                          margin="normal"
                          variant="outlined"
                          className="auth-input"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <img src={Placeholder} alt="user" />
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
                              <div className="opacity-05">
                                {inputs.c_city_name}
                              </div>
                            </MenuItem>
                          )}

                          {cityList.map((option) => (
                            <MenuItem
                              key={option.c_city_code}
                              value={
                                option.c_city_code + `,` + option.c_city_name
                              }
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
                          error={errors.area}
                          onBlur={(e) => handleBlur(e)}
                          helperText={errors.area && "Not a valid area"}
                          margin="normal"
                          variant="outlined"
                          className="auth-input"
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
                              <div className="opacity-05">
                                {inputs.c_area_name}
                              </div>
                            </MenuItem>
                          )}

                          {areaList.map((option) => (
                            <MenuItem
                              key={option.c_area_code}
                              value={
                                option.c_area_code + `,` + option.c_area_name
                              }
                            >
                              {option.c_area_name}
                            </MenuItem>
                          ))}
                        </TextField>
                      </div>
                    </Grid> */}















                  </Grid>
                </>
              )}

              <div className="align-right">
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Previous
                </Button>
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    color="primary"
                    className="fast-moving-addtocart"
                    onClick={handleSubmit}
                    disabled={
                      inputs.c_name === ""  || errors.c_name === true ||
                      inputs.c_email === ""  || errors.c_email === true ||
                      inputs.c_pincode === "" || errors.c_pincode === true || inputs.c_pincode.length !== 6 ||
                      inputs.c_firm_contact_person === "" ||errors.c_firm_contact_person === true ||
                      inputs.c_firm_address1 === "" || errors.c_firm_address1 === true ||
                      inputs.c_firm_address2 === "" || errors.c_firm_address2 === true ||
                      inputs.c_pincode === "" || errors.c_pincode === true || inputs.c_pincode.length !== 6 ||
                      getStateCityAreaResult.statuscode === 5 
                    }
                  >
                    Finish
                  </Button>
                ) : (
                  <Button
                  disabled={
                    inputs.c_name === ""  || errors.c_name === true ||
                    inputs.c_email === ""  || errors.c_email === true ||
                    inputs.c_pincode === "" || errors.c_pincode === true || inputs.c_pincode.length !== 6 ||
                    inputs.c_gst_type === "" ||
                    inputs.c_gst_type === -100 || errors.c_gst_type === true || 
                    inputs.c_gst_no === "" || inputs.c_gst_no.length < 15  || errors.c_gst_no === true ||
                    getStateCityAreaResult.statuscode === 5 
                  }
                    variant="contained"
                    color="primary"
                    className="fast-moving-addtocart"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
    </>
    
  );
};

export default AddBranch;
