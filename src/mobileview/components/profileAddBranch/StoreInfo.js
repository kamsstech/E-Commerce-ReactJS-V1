import * as React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Autocomplete from '@material-ui/lab/Autocomplete';

//images
import Store from "../../../assets/mobImages/branch-grey/shop.png";
import phone from "../../../assets/images/phone.svg";
import User from "../../../assets/images/user.svg";
import Email from "../../../assets/images/email.svg";
import Camera from "../../../assets/images/camera.svg";
import FirstAidKit from "../../../assets/images/first-aid-kit.svg";
import Calendar from "../../../assets/images/calendar.svg";
import Gst from "../../../assets/images/gst.svg";
import Tax from "../../../assets/images/tax.svg";
import Drug from "../../../assets/images/drug.svg";
import Address from "../../../assets/images/address.svg";
import Zipcode from "../../../assets/images/zip_code.svg";
import Shape from "../../../assets/images/shape.svg";
import Worldwide from "../../../assets/images/worldwide.svg";
import Landmark from "../../../assets/images/landmark.svg";

import { AddBranchInputEntity, AddBranchEntity , GetBranchInfoEntity, 
    StateListEntity, GSTListResultEntity, StateListResultEntity, 
    RegisterDetailsErrorEntity, UploadImgBodyEntity} from "../../../common/model";

interface Props{
    inputs: AddBranchInputEntity;
    errors: RegisterDetailsErrorEntity;
    handleInputChange(e:any): void;
    handleBlur(e:any): void;
    cityList: StateListResultEntity[];
    areaList: StateListResultEntity[];
    handleSearchChange(e:any, value: string|null, name:string): void;
    handleSearchOnChange(e:any, value: any, name:string): void;
}

const StoreInfo = (props: Props) => {
    const {inputs, errors, handleInputChange, handleBlur, 
        cityList, areaList, handleSearchChange, handleSearchOnChange } = props;

    const [optValue, setOptValue] = React.useState("one");

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOptValue(event.target.value);
    };

    return(
        <div className="mob-profile-sec-space">
            <form>
                {/* <h4 className="mob-profile-info-title">Add Branch 1</h4> */}
                <h4 className="mob-profile-sub-title">Store Information</h4>
                <div>
                    <TextField
                        name="c_name"
                        value={inputs.c_name}
                        onChange={e => handleInputChange(e)}
                        error={errors.c_name}
                        onBlur={e => handleBlur(e)}
                        helperText={errors.c_name && "Not a valid store name"}
                        autoComplete="new-password"
                        margin="normal"
                        variant="outlined"
                        placeholder="Store name *"
                        className="auth-input"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src={Store} alt="Store" />
                            </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        name="c_pincode"
                        value={inputs.c_pincode}
                        onChange={e => handleInputChange(e)}
                        error={errors.c_pincode}
                        onBlur={e => handleBlur(e)}
                        helperText={errors.c_pincode && "Not a valid pincode"}
                        autoComplete="new-password"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        placeholder="Pin Code *"
                        className="auth-input"
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
                        onChange={e => handleInputChange(e)}
                        error={errors.c_state_name}
                        autoComplete="new-password"
                        margin="normal"
                        variant="outlined"
                        placeholder="State *"
                        className="toCatp auth-input"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src={Worldwide} alt="user" />
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
                            className="toCatp auth-input"
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
                            className="toCatp auth-input"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password',
                            }}
                            />
                        }
                    />
                    <TextField
                        name="c_landmark"
                        value={inputs.c_landmark}
                        onChange={e => handleInputChange(e)}
                        autoComplete="new-password"
                        margin="normal"
                        variant="outlined"
                        placeholder="Landmark"
                        className="auth-input"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src={Landmark} alt="shape" />
                            </InputAdornment>
                            )
                        }}
                    />
                </div>
            </form>  
        </div>
    )
}

export default StoreInfo;