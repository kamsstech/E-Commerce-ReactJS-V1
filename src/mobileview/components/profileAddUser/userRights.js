import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

//images
import PlusPurple from "../../../assets/images/plus-purple.svg";
import City from "../../../assets/images/city.svg";
import Shop from "../../../assets/mobImages/branch-grey/shop.png";

import { BranchListEntity, BranchEntity, AddUserInputEntity, AddUserRoleEntity, 
    RegisterEntity, GetUserInfoEntity, StateListEntity, StateListResultEntity } from "../../../common/model";
import { MenuItem } from "@material-ui/core";
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

// interface Props{
//     match:any;
//     getBranchListAction(): void;
//     branchListResult: BranchListEntity
//     AddUserAction(inputs: AddUserInputEntity, isEdit?:boolean): void;
//     addUserResult: RegisterEntity;
//     GetUserInfoAction(userId: number): void;
//     userInfoResult: GetUserInfoEntity;
//     CityListAction(stateCode: string): void;
//     cityListResult: StateListEntity;
//     AreaListAction(cityCode: string): void;
//     areaListResult: StateListEntity;
//     handleInputChange(event: any, role?: string, index?: number):void;
//     handleBlur(event: any):void;
//     inputs: AddUserInputEntity;
//     errors: any;
//     errMsg: string;
//     handleCheckbox(name: string, index: number) : (event: React.ChangeEvent<HTMLInputElement>)=>void;
//     handleSearchOnChange(e:any, value: any, name:string): void;
//     cityList: StateListResultEntity[];
//     areaList: StateListResultEntity[];
//     handleSliderChange(event: any, newValue: any):void;
//     handleAddStore():void;
//     handleDeleteStore(index:number):void;
//   }

const UserRights = (props) => {
    
    const {handleBlur,handleInputChange,inputs,errMsg,errors,handleCheckbox, handleSearchOnChange,cityList,areaList, branchListResult,handleSliderChange,handleAddStore,handleDeleteStore} = props;

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false
    });

    const hrstyle = {
      color: "rgb(246,248,253)",
      borderStyle: "dashed"
    };

    return (
        <div className="mob-profile-sec-space">
            <form>
                <div className="mob-profile-userrights">
                    <h4 className="mob-profile-info-title">User Rights</h4>


                    {/* {inputs.j_role.map((rights, index) => (
                       inputs.j_role.length !== branchListResult.payload.length ?
                        <>
                          { index === 0 ?
                            <Button
                              variant="contained"
                              color="primary"
                              className="addbranch-btn mob-oneem"
                              component="span"
                              onClick={handleAddStore}
                            >
                              <img src={PlusPurple} alt="PlusPurple" className="mr-10" />
                            Add Store
                            </Button> : 
                            <Button
                              variant="contained"
                              color="primary"
                              className="addbranch-btn mob-oneem delete"
                              component="span"
                              onClick={() => handleDeleteStore(index)}
                            >
                              delete
                            </Button>
                          }
                        </> : 
                        <>
                          { index !== 0 && <Button
                            variant="contained"
                            color="primary"
                            className="addbranch-btn mob-oneem delete"
                            component="span"
                            onClick={() => handleDeleteStore(index)}
                          >
                            delete
                          </Button>
                          } 
                        </>
                      
                    ))} */}
                    
                </div>





                
                {
                inputs.j_role.map((rights, index) => (
                <div key={index}>
                  <div className="user-right-mobile-titlesec">
                  {index===0 ? 
                  <h4 className="mob-profile-sub-title">Give User Rights {inputs.c_name !== "" ? `to ${inputs.c_name}` : ''} </h4>
                  :
                  <h4 className="mob-profile-sub-title1">Give Rights for another store</h4>}
                  { inputs.j_role.length !== branchListResult.payload.length ?
                      <>
                      { index === 0 ?
                        <Button
                          variant="contained"
                          color="primary"
                          className="addbranch-btn mob-oneem"
                          component="span"
                          onClick={handleAddStore}
                        >
                          <img src={PlusPurple} alt="PlusPurple" className="mr-10" />
                        Add Store
                        </Button> : 
                        <Button
                          variant="contained"
                          color="primary"
                          className="addbranch-btn delete mob-oneem m-0"
                          component="span"
                          onClick={() => handleDeleteStore(index)}
                        >
                          delete
                        </Button>
                      }
                      </> : <>
                      { index !== 0 && <Button
                        variant="contained"
                        color="primary"
                        className="addbranch-btn delete mob-oneem m-0"
                        component="span"
                        onClick={() => handleDeleteStore(index)}
                      >
                        delete
                      </Button>
                      } </>
                    }
                  </div>
                <div>
                    <TextField
                      name="n_firm_id"
                      value={rights.n_firm_id}
                      error={errors.j_role[index].n_firm_id}
                      defaultValue={"-1"}
                      onChange={e => handleInputChange(e, "j_role", index)}
                      select
                      autoComplete="off"
                      margin="normal"
                      variant="outlined"
                      className="toCatp auth-input mob-input"
                      placeholder="Select Branch"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={Shop} alt="Branch" />
                          </InputAdornment>
                        )
                      }}
                      SelectProps={{
                        MenuProps: {
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                          },
                          getContentAnchorEl: null
                        }
                      }}
                    >                      
                      <MenuItem value={-1}>Select Branch</MenuItem>
                      {(branchListResult.payload).map((item, index) => (
                        <MenuItem key={index} value={item.n_branch_id}>
                          {<>
                          <>{item.c_name}</>
                          <>{(item.c_area_name!==undefined && item.c_area_name!=="") && <> ({item.c_area_name} {(item.c_landmark !==undefined && item.c_landmark !=="") && <>, {item.c_landmark}</>})</>}</>
                        </>
                        }
                      </MenuItem>
                      ))}
                    </TextField>
                </div>

                <h4 className="mob-profile-sub-title m-0">Select Rights</h4>

                <div>
                    <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            checkedIcon={<CheckBoxIcon fontSize="large" />}
                            // checked={true}
                            checked={rights.n_view_transaction === "1" ? true : false}
                            // onChange={handleCheckbox("n_view_transaction", index)}
                            color="primary"
                            className="addusermob-checkbox-icon"
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
                        checked={rights.n_place_order === "1" ? true : false}
                        onChange={handleCheckbox("n_place_order", index)}
                        color="primary"
                        className="addusermob-checkbox-icon"
                        />
                    }
                    label="Place Order"
                    className="adduser-checkbox mob-oneem"
                    />
                </div>
                {rights.n_place_order === "1" &&
                <div >
                    <Typography gutterBottom className="value-slider-label mob-label">
                        Set Maximum Order Value
                    </Typography>
                    <PrettoSlider
                        // className="value-slider"
                        value={[rights.n_min_value/1000, rights.n_max_value/1000]}
                        step={10}
                        // marks
                        onChange={handleSliderChange}
                        valueLabelDisplay="off"
                        aria-label={`${index}`}
                    />
                    <div>
                    <TextField
                      name="n_min_value"
                      select
                      value={rights.n_min_value}
                      onChange={e => handleInputChange(e, "j_role", index)}
                      autoComplete="off"
                      margin="normal"
                      variant="outlined"
                      placeholder="Min value"
                      className="value-range"
                    >
                      <MenuItem value={"0"}>Min</MenuItem>
                      <MenuItem disabled={rights.n_max_value <= 10000} value={"10000"}>10000</MenuItem>
                      <MenuItem disabled={rights.n_max_value <= 20000} value={"20000"}>20000</MenuItem>
                      <MenuItem disabled={rights.n_max_value <= 30000} value={"30000"}>30000</MenuItem>
                      <MenuItem disabled={rights.n_max_value <= 40000} value={"40000"}>40000</MenuItem>
                      <MenuItem disabled={rights.n_max_value <= 50000} value={"50000"}>50000</MenuItem>
                      <MenuItem disabled={rights.n_max_value <= 60000} value={"60000"}>60000</MenuItem>
                      <MenuItem disabled={rights.n_max_value <= 70000} value={"70000"}>70000</MenuItem>
                      <MenuItem disabled={rights.n_max_value <= 80000} value={"80000"}>80000</MenuItem>
                      <MenuItem disabled={rights.n_max_value <= 90000} value={"90000"}>90000</MenuItem>
                      <MenuItem disabled={rights.n_max_value <= 100000} value={"100000"}>100000</MenuItem>
                    </TextField>
                    <span className="value-text mob-oneem">To</span>
                    <TextField
                      name="n_max_value"
                      select
                      value={rights.n_max_value===0?100000:rights.n_max_value}
                      onChange={e => handleInputChange(e, "j_role", index)}
                      autoComplete="off"
                      margin="normal"
                      variant="outlined"
                      placeholder="Max Value"
                      className="value-range"
                    >
                      <MenuItem disabled={rights.n_min_value >= 10000} value={"10000"}>10000</MenuItem>
                      <MenuItem disabled={rights.n_min_value >= 20000} value={"20000"}>20000</MenuItem>
                      <MenuItem disabled={rights.n_min_value >= 30000} value={"30000"}>30000</MenuItem>
                      <MenuItem disabled={rights.n_min_value >= 40000} value={"40000"}>40000</MenuItem>
                      <MenuItem disabled={rights.n_min_value >= 50000} value={"50000"}>50000</MenuItem>
                      <MenuItem disabled={rights.n_min_value >= 60000} value={"60000"}>60000</MenuItem>
                      <MenuItem disabled={rights.n_min_value >= 70000} value={"70000"}>70000</MenuItem>
                      <MenuItem disabled={rights.n_min_value >= 80000} value={"80000"}>80000</MenuItem>
                      <MenuItem disabled={rights.n_min_value >= 90000} value={"90000"}>90000</MenuItem>
                      <MenuItem disabled={rights.n_min_value >= 100000} value={"100000"}>100000</MenuItem>
                    </TextField>
                    <TextField
                      name="n_granted_per"
                      value={rights.n_granted_per}
                      onChange={e => handleInputChange(e, "j_role", index)}
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
                    
                </div>}
                {errors.j_role[index]["n_place_order"] && <p className="login-error-msg mob-oneem">Please select any role</p>}
                </div>
                ))}
            </form>
            
        </div>
    )
}

export default UserRights;