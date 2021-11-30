import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import MenuItem from "@material-ui/core/MenuItem";

//images
import CrossImg from "../../../assets/images/cross-grey.svg";
import Pharmacy from "../../../assets/images/pharmacy.svg";

import { BranchUserListResultEntity, BranchUserListInputEntity, UserListEntity, userEntity, RegisterEntity} from "../../../common/model";
import { State } from "../../../rootReducer";
import { getBranchUserListAction, getUserListAction , AddUserToBranchAction} from "../../../common/action";
import { connect } from "react-redux";

const PrettoSlider = withStyles({
  root: {
    color: "#674cf3",
    height: 8,
    width: "20em",
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

// interface Props {
//   branchName: string;
//   branchArea: string;
//   branchId: number | null;
//   toggleDrawer(open: boolean): any;
//   openDrawer: boolean;
//   getUserListAction(): void;
//   userListResult: UserListEntity;
//   getBranchUserListAction(branchId:number): void;
//   branchUserListResult: BranchUserListResultEntity;
//   AddUserToBranchAction(body: BranchUserListInputEntity[]): void;
//   addUserToBranchResult: RegisterEntity;
// }

function AddBranchBottomSheet(props) {
  const { branchName, branchArea, toggleDrawer, openDrawer, branchId,
    getUserListAction, userListResult,
    getBranchUserListAction, branchUserListResult, 
    AddUserToBranchAction, addUserToBranchResult } = props;
    
  const [userList, setUserList] = useState({});
  const [error, setError] = useState("");
    
  const handleCheckbox = (name, id) => (
    event
  ) => {
    setError("");

    let checked = event.target.checked === true ? "1" : "0";
    let temp = {...userList};

    if (name === "n_place_order" && event.target.checked === true) {
      temp[id]["j_role"]["n_min_value"] = 0;
      temp[id]["j_role"]["n_max_value"] = 100000;
    } else {
      temp[id]["j_role"]["n_min_value"] = 0;
      temp[id]["j_role"]["n_max_value"] = 1;
    }

    if(name === "is_assigned" && event.target.checked === false){
      temp[id]["j_role"]["n_view_transaction"] = "0";
      temp[id]["j_role"]["n_place_order"] = "0";
      temp[id]["j_role"]["n_min_value"] = 0;
      temp[id]["j_role"]["n_max_value"] = 1;
    } else {
      temp[id]["j_role"]["n_view_transaction"] = "1";
    }

    temp[id]["j_role"][name] = checked;
    setUserList(temp)
  }
    
  const handleSliderChange = (event, newValue) => {
    let id = event.target["ariaLabel"];
    let temp = {...userList};

    if (id !== null) {
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
      getBranchUserListAction(branchId)
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
              is_assigned: (item.j_role.n_place_order === "1" || item.j_role.n_view_transaction === "1") ? "1" : "0",
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

      Object.values(userList).map((item) => {
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
      })
      AddUserToBranchAction(body);
    }
    
  }
    
  useEffect(() => {
    if(addUserToBranchResult.error !== ""){
      setError(addUserToBranchResult.error)
    }
  }, [addUserToBranchResult])

  // console.log(props.branchId, "branchId")
  return (
    <div>
      <SwipeableDrawer
          anchor="bottom"
          open={openDrawer}
          className="drawerRadius"
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
      >
        <div  className="mob-profile-sec-space distributor-sec-height">
            <h4 className="mob-addbranch-drawer-title">Add User To Branch !</h4>
            <p className="mob-addbranch-drawer-subtitle">Do You Want To add any user to <span className="toCatp">{branchName}, {branchArea}</span> Branch.</p>
            <p className="login-error-msg min-height-none mb-10">{error.toLowerCase()}</p>
            <form>
              {((Object)).values(userList).map((item) => (
              <div className="addbranch-users" key={item.n_branch_id}>
                <FormControlLabel
                    control={
                    <Checkbox
                        icon={<CheckBoxOutlineBlankIcon/>}
                        checkedIcon={<CheckBoxIcon />}
                        checked={item.j_role.is_assigned === "1" ? true : false}
                        onChange={handleCheckbox("is_assigned", item.n_user_id)}
                        color="primary"
                        className="adduser-checkbox-icon"
                    />
                    }
                    label={item.c_name}
                    className="adduser-checkbox mob-oneem"
                />
                {item.j_role.is_assigned === "1" && 
                <>
                  <h4 className="mob-profile-sub-title m-0">Select Rights</h4>
                  <div>
                      <FormControlLabel
                          control={
                          <Checkbox
                              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                              checkedIcon={<CheckBoxIcon fontSize="large" />}
                              checked={item.j_role.n_view_transaction === "1" ? true : false}
                              // onChange={handleCheckbox("n_view_transaction", item.n_user_id)}
                              color="primary"
                              className="adduser-checkbox-icon"
                          />
                          }
                          label="View Transaction"
                          className="adduser-checkbox mob-oneem"
                      />
                  </div>
                  <div>
                      <FormControlLabel
                          control={
                          <Checkbox
                              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                              checkedIcon={<CheckBoxIcon fontSize="large" />}
                              checked={item.j_role.n_place_order === "1" ? true : false}
                              onChange={handleCheckbox("n_place_order", item.n_user_id)}
                              color="primary"
                              className="adduser-checkbox-icon"
                          />
                          }
                          label="Place Order"
                          className="adduser-checkbox mob-oneem"
                      />
                  </div>
                  {item.j_role.n_place_order === "1" &&
                  <div>
                    <Typography gutterBottom className="value-slider-label mob-label">
                        Set Maximum Order Value
                    </Typography>
                    <PrettoSlider
                      value={[item.j_role.n_min_value/1000, item.j_role.n_max_value/1000]}
                      step={10}
                      // marks
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
                  </div>
                  }
                </>
                }
              </div>
              ))}
              {/* <div className="addbranch-users">
                  <FormControlLabel
                      control={
                      <Checkbox
                          icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                          checkedIcon={<CheckBoxIcon fontSize="large" />}
                          checked={state.checkedB}
                          onChange={handleCheck("checkedB")}
                          value="checked"
                          color="primary"
                          className="adduser-checkbox-icon"
                      />
                      }
                      label="Shankar Shrinivasan"
                      className="adduser-checkbox mob-oneem"
                  />
              </div> */}
              <Link to="/add-user">
                <div className="create-new-users mob-create-new-user">Create New User</div>
              </Link>
            </form>
            <Button
              variant="contained"
              color="primary"
              disabled={Object.keys(userList).length === 0}
              className="ordernow-modal-btn"
              onClick={handleSubmit}
            >
              DONE
            </Button>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

const mapStateToProps = (state) => ({
    branchUserListResult: state.branchUserListResult,
    userListResult: state.userListResult,
    addUserToBranchResult: state.addUserToBranchResult
});
  
const mapDispatchToProps = (dispatch) => ({
    getBranchUserListAction: (branchId) => dispatch(getBranchUserListAction(branchId)),
    getUserListAction: () => dispatch(getUserListAction()),
    AddUserToBranchAction: (body) => dispatch(AddUserToBranchAction(body)) 
});
  
export default connect(mapStateToProps, mapDispatchToProps)(AddBranchBottomSheet)