import * as React from "react"
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import { BranchListEntity, BranchEntity, AddUserInputEntity, AddUserRoleEntity, 
  RegisterEntity, GetUserInfoEntity, StateListEntity, StateListResultEntity } from "../../../common/model";
//images
import phone from "../../../assets/images/phone.svg";
import User from "../../../assets/images/user.svg";
import Email from "../../../assets/images/email.svg";
import Address from "../../../assets/images/address.svg";
import Zipcode from "../../../assets/images/zip_code.svg";
import Worldwide from "../../../assets/images/worldwide.svg";
import City from "../../../assets/images/city.svg";
import Shape from "../../../assets/images/shape.svg";
import Autocomplete from "@material-ui/lab/Autocomplete";

// interface Props{
//   match:any;
//   getBranchListAction(): void;
//   branchListResult: BranchListEntity
//   AddUserAction(inputs: AddUserInputEntity, isEdit?:boolean): void;
//   addUserResult: RegisterEntity;
//   GetUserInfoAction(userId: number): void;
//   userInfoResult: GetUserInfoEntity;
//   CityListAction(stateCode: string): void;
//   cityListResult: StateListEntity;
//   AreaListAction(cityCode: string): void;
//   areaListResult: StateListEntity;
//   handleInputChange(event: any, role?: string, index?: number):void;
//   handleBlur(event: any):void;
//   inputs: AddUserInputEntity;
//   errors: any;
//   errMsg: string;
//   handleSearchChange(e:any, value: string|null, name:string): void;
//   handleSearchOnChange(e:any, value: any, name:string): void;
//   cityList: StateListResultEntity[];
//   areaList: StateListResultEntity[];
// }

const UserInfo = (props) => {
  
  const {handleBlur,handleInputChange,inputs,errMsg,errors,handleSearchChange, handleSearchOnChange,cityList,areaList } = props;
    

    return (
      <div className="mob-profile-sec-space">
        <form>
            <h4 className="mob-profile-info-title">User Information</h4>
            <h4 className="mob-profile-sub-title">Personal Info</h4>
            <p className="login-error-msg min-height-none mb-10">{errMsg}</p>

            <TextField
              name="c_mobile_no"
              value={inputs.c_mobile_no}
              onChange={e => handleInputChange(e)}
              error={errors.c_mobile_no}
              onBlur={e => handleBlur(e)}
              helperText={errors.c_mobile_no && "Not a valid mobile number"}
              autoComplete="new-password"
              type="number"
              margin="normal"
              variant="outlined"
              placeholder="Enter Mobile Number *"
              className="auth-input mob-input"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={phone} alt="mobile-phone" />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              name="c_name"
              value={inputs.c_name}
              onChange={e => handleInputChange(e)}
              error={errors.c_name}
              onBlur={e => handleBlur(e)}
              helperText={errors.c_name && "Not a valid name"}
              autoComplete="new-password"
              margin="normal"
              variant="outlined"
              placeholder="Full Name *"
              className="auth-input mob-input"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={User} alt="user" />
                  </InputAdornment>
                )
              }}
            />
            <TextField
                name="c_email"
                value={inputs.c_email}
                onChange={e => handleInputChange(e)}
                error={errors.c_email}
                onBlur={e => handleBlur(e)}
                helperText={errors.c_email && "Not a valid E-mail"}
                autoComplete="new-password"
                margin="normal"
                variant="outlined"
                placeholder="E-mail *"
                className="auth-input mob-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Email} alt="Email" />
                    </InputAdornment>
                  )
                }}
            />
            <h4 className="mob-profile-sub-title">Address</h4>

            <TextField
              name="c_address_1"
              value={inputs.c_address_1}
              onChange={e => handleInputChange(e)}
              onBlur={e => handleBlur(e)}
              error={errors.c_address_1}
              helperText={errors.c_address_1 && "Not a valid address"}
              autoComplete="new-password"
              margin="normal"
              variant="outlined"
              placeholder="Address Line 1"
              className="auth-input mob-input"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Address} alt="Address" />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              name="c_address_2"
              value={inputs.c_address_2}
              onChange={e => handleInputChange(e)}
              onBlur={e => handleBlur(e)}
              error={errors.c_address_2}
              helperText={errors.c_address_2 && "Not a valid address"}
              autoComplete="new-password"
              margin="normal"
              variant="outlined"
              placeholder="Address Line 2"
              className="auth-input mob-input"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Address} alt="Address" />
                  </InputAdornment>
                )
              }}
            />
              <TextField
              name="c_pincode"
              value={inputs.c_pincode}
              onChange={e => handleInputChange(e)}
              onBlur={e => handleBlur(e)}
              error={errors.c_pincode}
              helperText={errors.c_pincode && "Not a valid pincode"}
              autoComplete="new-password"
              margin="normal"
              variant="outlined"
              type="number"
              placeholder="Pin Code"
              className="auth-input mob-input"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Zipcode} alt="user" />
                  </InputAdornment>
                )
              }}
            />
              <TextField
              disabled
              name="c_state_name"
              value={inputs.c_state_name}
              error={errors.c_state_name}
              onChange={e => handleInputChange(e)}
              autoComplete="new-password"
              className="toCatp auth-input mob-input"
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
            <Autocomplete
              inputValue={inputs.c_city_name}
          
              onInputChange={(e, newValue) => 
                handleSearchChange(e, newValue, "c_city_name") }
              onChange={(e, newValue) => 
                handleSearchOnChange(e, newValue, "c_city_code")}
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
                  className="toCatp auth-input mob-input"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password',
                  }}
                />
              }
            />
              <Autocomplete
              inputValue={inputs.c_area_name}
              onInputChange={(e, newValue) => 
                handleSearchChange(e, newValue, "c_area_name") }
              onChange={(e, newValue) => 
                handleSearchOnChange(e, newValue, "c_area_code")}
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
                  className="toCatp auth-input mob-input"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password',
                  }}
                />
              }
            />
          </form>
      </div>
    )
}

export default UserInfo;