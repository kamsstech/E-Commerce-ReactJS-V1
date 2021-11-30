import * as React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { ENV } from "../../../common/constant/env";
import { Constants } from "../../../common/constant/localstorage";
import {useEffect, useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../assets/images/cross-grey.svg";
import Pharmacy from "../../../assets/images/pharmacy.svg";

import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";


import { State } from "../../../rootReducer";
import { GetBranchListUsersAction, getUserListAction , AddUserToBranchAction,GetUserInfoAction} from "../../../common/action";
import { connect } from "react-redux";


const PrettoSlider = withStyles({
  root: {
    color: "#674cf3",
    height: 8,
    width: "12em",
    marginLeft: 10
  },
  thumb: {
    height: 22,
    width: 22,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -4,
    marginLeft: -8,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    // left: 'calc(-50% + 4px)',
  },
  track: {
    height: 16,
    borderRadius: 8
  },
  rail: {
    height: 16,
    borderRadius: 8
  }
})(Slider);

const AddBranchModal = (props) => {
  const { branchName, branchArea, branchId, openAddBranchModal, 
    handleCloseAddBranchModal, handleOpenAddBranchModal,
    getUserListAction, userListResult,
    GetBranchListUsersAction, branchUserListResult, 
    AddUserToBranchAction, addUserToBranchResult,AddUserAction ,GetUserInfoAction,userInfoResult} = props;

  const [userList, setUserList] = useState({});
  const [error, setError] = useState("");
  const [count,setCount] = useState(0)
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
        n_granted_per: "day",
        n_max_value: 1,
        n_min_value: 0,
        n_place_order: "0",
        n_view_transaction: "1",
      }
    ]
  })
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
      }
    ]
  })
  const [errorMsg, setErrorMsg] = useState("");
  const [inputInfo,setInputInfo] = useState({})

const getBranchMapping=(userId)=>{
 if(userId != null){
    GetUserInfoAction(userId)
  }
  
}
useEffect(()=>{ 
//let count:number = 0
  // if(userInfoResult.payload){
  //   // (userInfoResult.payload as Array<any>).map((item) => {
  //   //   if(item["n_view_transaction"]== "1"){
  //   //    // count =  parseInt(count:number) + 1
  //   //     count = parseInt(`${count+1}`)
  //   //   }
  //   // })
     let temp = {}

    Object.entries(userInfoResult.payload).map(entry => {
    
      temp = entry[1]
    })
   
  //  Object.keys(temp).map((item)=>{
     
  //    if(temp[item]['n_view_transaction'] == "1"){
  //     count = parseInt(`${count+1}`)
  //    }
  //  })
  //  setCount(count)
 
  // }
 // setInputInfo(temp)
  
},[userInfoResult])

  const handleCheckbox = (name, id,inputInfo) => (
    event
  ) => { 
    setError("");
    // getBranchMapping(id)
   // reader.onloadend = function() {
     let temp_data = []
    
     let count = 0
          
    //}
      
    let checked = event.target.checked === true ? "1" : "0";
    let temp = {...userList};
   
    
    if(name === "is_assigned" && event.target.checked === false){ 
      const headers = {
        "Content-Type": "application/json",
        "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
        "x-csquare-firm-id": localStorage.getItem(Constants.FIRM_ID)//response.data.payloadJson.n_branch_id
      };
  
           axios.get(`${ENV.CUST_BASE_URL}/firm/user/detail/${id}`, {headers})
            .then(response => {
              if(response.data.appStatusCode === 0){
                //setInputs({...inputs, [`${name}_name`]: filename, [name]: response.data.payloadJson.URI})
                console.log("payload",response.data.payloadJson.j_role)
               // setInputInfo(response.data.payloadJson.j_role)
               Object.keys(response.data.payloadJson.j_role).map((item)=>{
     
                   if(response.data.payloadJson.j_role[item]['n_view_transaction'] == "1"){
                    count = parseInt(`${count+1}`)
                   }
                 })
                 if(count == 1){
                   alert("you can't Delete All Branches")
                 }else{
                 
                  temp[id]["j_role"]["n_view_transaction"] = "0";
                  temp[id]["j_role"]["n_place_order"] = "0";
                  temp[id]["j_role"]["n_min_value"] = 0;
                  temp[id]["j_role"]["n_max_value"] = 1;

                  temp[id]["j_role"][name] = checked;
                  setUserList(temp)
                 }
               
              } else {
                setErrorMsg(response.data.messages[0])
                //dispatch(getUserInfoFailure(response.data.messages[0]))
              }
            }) 
            .catch(err => {
              setErrorMsg("Something went wrong, Please try again later!")
            })
    }else{

  

    if (name === "n_place_order" && event.target.checked === true) {
      temp[id]["j_role"]["n_min_value"] = 0;
      temp[id]["j_role"]["n_max_value"] = 100000;
    } else {
      temp[id]["j_role"]["n_min_value"] = 0;
      temp[id]["j_role"]["n_max_value"] = 1;
    }

    if(name === "is_assigned" && event.target.checked === false){ 
     
      // if(count == 1){
      //   return
      // }else{
        temp[id]["j_role"]["n_view_transaction"] = "0";
        temp[id]["j_role"]["n_place_order"] = "0";
        temp[id]["j_role"]["n_min_value"] = 0;
        temp[id]["j_role"]["n_max_value"] = 1;
     // }
    } else {
      temp[id]["j_role"]["n_view_transaction"] = "1";
    }
    
    
    temp[id]["j_role"][name] = checked;
   
    setUserList(temp)
  }
   
  }

  const handleSliderChange = (event, newValue) => {
    let id = event.target["ariaLabel"];
    let temp = {...userList};

    if (id !== null) {
      if(newValue[1]===0){
        newValue[1]=1;
      }
      if(newValue[0]===1){
        newValue[0]=0;
      }
      temp[id]["j_role"]["n_min_value"] = newValue[0]*1000;
      temp[id]["j_role"]["n_max_value"] = newValue[1]*1000;

      setUserList(temp)
    }
  };

  const handleInputChange = (event, id) => {
    let { name, value } = event.target;

    let temp = {...userList}

    setError("");
    temp[id]["j_role"][name] = value; 
    setUserList(temp)
  }

  useEffect(() => {
    getUserListAction()
  }, [])

  useEffect(() => {
    if(userListResult.error !== ""){

    } else {
      let list = {};

      (userListResult.payload).map((item) => {
        const listItem = {
          n_user_id:item.c_user_id,
          c_name: item.c_user_name,
          j_role: {
            is_assigned: "0",
            n_view_transaction: "0",
            n_place_order: "0",
            n_min_value: 0,
            n_max_value: 1,
            n_granted_per: "day"
          }
        }
        list[item.c_user_id] = listItem;
      })
      setUserList(list)

    }
  }, [userListResult])

  useEffect(() => {
    if(branchId !== null){
      GetBranchListUsersAction(branchId)
    }
  }, [branchId]);

  useEffect(() => {
    if(branchUserListResult.error !== ""){

    } else {
      
      let list = {...userList};
      if(userList !== undefined){
        (branchUserListResult.payload).map((item) => {
          list[item.n_user_id] = {
            n_user_id: item.n_user_id,
            c_name: item.c_name,
            j_role: {
              is_assigned:(item.j_role.n_place_order === "1" || item.j_role.n_view_transaction === "1") ? "1" : "0",
              n_granted_per: item.j_role.n_granted_per,
              n_max_value: item.j_role.n_max_value,
              n_min_value: item.j_role.n_min_value,
              n_place_order: item.j_role.n_place_order,
              n_view_transaction: item.j_role.n_view_transaction
            }
          }
        })
      }

      setUserList(list); 
    }
  }, [branchUserListResult]);

  const handleSubmit = () => { 

    const checkError = () => {
      let result = false;
      Object.values(userList).map((item, index) => {
        if(item.j_role.is_assigned==="1" && item.j_role.n_place_order === "0" && item.j_role.n_view_transaction === "0") {
          setError(`Please assign any role to ${item.c_name}`)
          return false
        } else {
          if(index === Object.keys(userList).length - 1){
            result = true
          }
        }
      })

      return result
    }
    
    if(!checkError()){

    } else {
      const body = [];
      let k=[]
      // k =userList.filter((item, i) => item.j_role.is_assigned === "1");
      Object.values(userList).map((item) => {
        
     //   if(item.j_role.is_assigned==="1"){
          let row = {
            n_branch_id: branchId,
            n_user_id: item.n_user_id,
            j_role: {
              n_view_transaction: item.j_role.n_view_transaction,
              n_place_order: item.j_role.n_place_order,
              n_min_value: item.j_role.n_min_value,
              n_max_value: item.j_role.n_max_value,
              n_granted_per: item.j_role.n_granted_per
            }
          }
          body.push(row);
        //}
       
      })
      
      AddUserToBranchAction(body);
    }

  }

  useEffect(() => {
    if(addUserToBranchResult.error !== ""){
      setError(addUserToBranchResult.error)
    }
  }, [addUserToBranchResult])
  // console.log(Object.keys(inputInfo).length, "ghjgjhhjhj")
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="ordernow-modal"
        open={openAddBranchModal}
        onClose={handleCloseAddBranchModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openAddBranchModal}>
          <div className="openmodal-sec">
            <div className="align-right">
              <img
                src={CrossImg}
                alt="cross-img"
                onClick={handleCloseAddBranchModal}
              /> 
            </div>
            <div className="align-center">
              <img src={Pharmacy} alt="OrderNowImg" className="pharmacy-img" />
              <h3 className="ordernow-title">Add User To Branch !</h3>
              <p className="ordernow-label">
                Do You Want To add any user to <span className="toCatp">{branchName}, {branchArea}</span> Branch.
              </p>
              <p className="login-error-msg min-height-none mb-10">{error.toLowerCase()}</p>
              <form className="thin-scroll height-20em">
                {((Object)).values(userList).map((item) => (
                <div className="addbranch-users" key={item.n_user_id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<CheckBoxOutlineBlankIcon />}
                        checkedIcon={<CheckBoxIcon />}
                        checked={item.j_role.is_assigned === "1" ? true : false}
                        onChange={handleCheckbox("is_assigned", item.n_user_id,inputInfo)}
                        color="primary"
                        className="adduser-checkbox-icon"
                      />
                    }
                    label={item.c_name}
                    className="adduser-checkbox toCatp"
                  />
                  <div>
                    {item.j_role.is_assigned === "1" &&
                    <>
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon />}
                          checkedIcon={<CheckBoxIcon />}
                          checked={item.j_role.n_view_transaction === "1" ? true : false}
                          // onChange={handleCheckbox("n_view_transaction", item.n_user_id)}
                          color="primary"
                          className="adduser-checkbox-icon"
                        />
                      }
                      label="View Transaction"
                      className="adduser-checkbox toCatp"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon />}
                          checkedIcon={<CheckBoxIcon />}
                          checked={item.j_role.n_place_order === "1" ? true : false}
                          onChange={handleCheckbox("n_place_order", item.n_user_id,inputInfo)}
                          color="primary"
                          className="adduser-checkbox-icon"
                        />
                      }
                      label="Place Order"
                      className="adduser-checkbox toCatp"
                    />
                    {item.j_role.n_place_order === "1" &&
                    <>
                      <Typography gutterBottom className="value-slider-label">
                        Set Maximum Order Value
                      </Typography>
                      <PrettoSlider
                        value={[item.j_role.n_min_value/1000, item.j_role.n_max_value/1000]}
                        step={10}
                        marks
                        onChange={handleSliderChange}
                        valueLabelDisplay="off"
                        aria-label={`${item.n_user_id}`}
                      />
                      <div>
                        <TextField
                          name="n_min_value"
                          select
                          autoComplete="off"
                          margin="normal"
                          variant="outlined"
                          value={item.j_role.n_min_value}
                          onChange={(e) => handleInputChange(e, item.n_user_id)}
                          className="value-range"
                        >
                          <MenuItem value={"0"}>Min</MenuItem>
                          <MenuItem disabled={item.j_role.n_max_value <= 10000} value={"10000"}>10000</MenuItem>
                          <MenuItem disabled={item.j_role.n_max_value <= 20000} value={"20000"}>20000</MenuItem>
                          <MenuItem disabled={item.j_role.n_max_value <= 30000} value={"30000"}>30000</MenuItem>
                          <MenuItem disabled={item.j_role.n_max_value <= 40000} value={"40000"}>40000</MenuItem>
                          <MenuItem disabled={item.j_role.n_max_value <= 50000} value={"50000"}>50000</MenuItem>
                          <MenuItem disabled={item.j_role.n_max_value <= 60000} value={"60000"}>60000</MenuItem>
                          <MenuItem disabled={item.j_role.n_max_value <= 70000} value={"70000"}>70000</MenuItem>
                          <MenuItem disabled={item.j_role.n_max_value <= 80000} value={"80000"}>80000</MenuItem>
                          <MenuItem disabled={item.j_role.n_max_value <= 90000} value={"90000"}>90000</MenuItem>
                          <MenuItem disabled={item.j_role.n_max_value <= 100000} value={"100000"}>100000</MenuItem>
                        </TextField>
                        <span className="value-text">To</span>
                        <TextField
                          name="n_max_value"
                          select
                          autoComplete="off"
                          margin="normal"
                          variant="outlined"
                          value={item.j_role.n_max_value}
                          onChange={(e) => handleInputChange(e, item.n_user_id)}
                          className="value-range"
                        >
                          <MenuItem disabled={item.j_role.n_min_value >= 1000} value={"1000"}>1000</MenuItem>
                          <MenuItem disabled={item.j_role.n_min_value >= 10000} value={"10000"}>10000</MenuItem>
                          <MenuItem disabled={item.j_role.n_min_value >= 20000} value={"20000"}>20000</MenuItem>
                          <MenuItem disabled={item.j_role.n_min_value >= 30000} value={"30000"}>30000</MenuItem>
                          <MenuItem disabled={item.j_role.n_min_value >= 40000} value={"40000"}>40000</MenuItem>
                          <MenuItem disabled={item.j_role.n_min_value >= 50000} value={"50000"}>50000</MenuItem>
                          <MenuItem disabled={item.j_role.n_min_value >= 60000} value={"60000"}>60000</MenuItem>
                          <MenuItem disabled={item.j_role.n_min_value >= 70000} value={"70000"}>70000</MenuItem>
                          <MenuItem disabled={item.j_role.n_min_value >= 80000} value={"80000"}>80000</MenuItem>
                          <MenuItem disabled={item.j_role.n_min_value >= 90000} value={"90000"}>90000</MenuItem>
                          <MenuItem disabled={item.j_role.n_min_value >= 100000} value={"100000"}>100000</MenuItem>
                        </TextField>
                        <TextField
                          name="n_granted_per"
                          select
                          autoComplete="off"
                          margin="normal"
                          variant="outlined"
                          value={item.j_role.n_granted_per}
                          onChange={(e) => handleInputChange(e, item.n_user_id)}
                          className="value-range"
                        >
                          <MenuItem value={"day"}>Per Day</MenuItem>
                          <MenuItem value={"week"}>Per Week</MenuItem>
                          <MenuItem value={"month"}>Per Month</MenuItem>
                        </TextField>
                      </div>
                      </>
                    }
                    </>
                    }
                  </div>
                </div>
                ))}
                <Link to="/profile/add-user">
                  <div className="create-new-users">Create New User</div>
                </Link>
              </form>
              <Button
                variant="contained"
                color="primary"
                disabled={Object.keys(userList).length === 0}
                className="ordernow-modal-btn mt-10"
                onClick={handleSubmit}
              >
                DONE
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  branchUserListResult: state.branchUserListResult,
  userListResult: state.userListResult,
  addUserToBranchResult: state.addUserToBranchResult,
  userInfoResult: state.userInfoResult
});

const mapDispatchToProps = (dispatch) => ({
  GetBranchListUsersAction: (branchId) => dispatch(GetBranchListUsersAction(branchId)),
  getUserListAction: () => dispatch(getUserListAction()),
  AddUserToBranchAction: (body) => dispatch(AddUserToBranchAction(body)) ,
  GetUserInfoAction: (userId) => dispatch(GetUserInfoAction(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBranchModal);
