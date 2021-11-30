import React from "react";
import {useEffect, useState} from "react";
// import history from "../../../history";

//Images
import backArrowIcon from "../../../assets/mobImages/back-white/back.png";
// import Edit from "../../../assets/mobImages/edit-white/edit.png";
import Edit from "../../../assets/mobImages/edit-white/edit.png";
import Add from "../../../assets/mobImages/add-white/plus.png";
import HideAppBar from '../HideScroll';
import { Link, useHistory } from "react-router-dom";

import { State } from "../../../rootReducer";
import { getProfileInfo, saveProfileInfo } from "../../../common/action";
import {connect} from "react-redux";
import { ENV } from "../../../common/constant/env";
import axios from "axios";
import { Constants } from "../../../common/constant/localstorage";



const HeaderCommonPage = (props) => {
  let history = useHistory();
  const { pageTitle, backArrow, edit, add, profilePage,url, getProfileInfo, getProfileInfoResult, saveProfileInfo, saveProfileInfoResult } = props;
  const [errMsg, setErrMsg] = useState("");
  const [inputs, setInputs] = useState({
    c_mobile_no: "",
    c_name: "",
    c_seller: "",
    c_buyer: "",
    c_email: "",
    c_firm_contact_person: "",
    c_firm_address1: "",
    c_firm_address2: "",
    c_state_name: "-1",
    c_city_name: "-1",
    c_area_name: "-1",
    c_pincode: "",
    c_card_holder_name: "",
    c_card_no: "",
    d_card_exp: "",
    c_card_ifsc: "",
    c_druglicense_no1: "",
    c_druglicense_no2: "",
    c_druglicense_expiry_date: "",
    c_gst_type: -1,
    c_gst_no: "",
    c_narcotic_no: "",
    c_status: "",
    c_image_url: "",
    c_druglicense_no1_img: "",
    c_druglicense_no2_img: "",
    c_narcotic_no_img: "",
  })
  const [backNavigation, setBackNavigation] = useState("");
  useEffect(() => {
    if(edit){
      getProfileInfo()
    }
  }, []);
  
  useEffect(()=>{

    if(history.location.pathname == "/profile"){
      setBackNavigation("/home");
    }else{
      setBackNavigation("/profile")
    }
  },[history.location.pathname])
  
  useEffect(() => {
    if(getProfileInfoResult.error === ""){
      let temp = {...inputs}

      Object.entries(getProfileInfoResult.payload).forEach(entry => {
        temp[entry[0]] = entry[1];      
      })
      setInputs(temp)
    }
  }, [getProfileInfoResult])

  const handleUpload = (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    
    var filename = event.target.files[0].name;

    reader.onloadend = function() {
      const headers = {
        "Content-Type": "application/json",
        "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
        "x-csquare-firm-id": localStorage.getItem(Constants.FIRM_ID)
      };

      const body = {
        docName: filename,
        docData: reader.result,
        firmId:localStorage.getItem(Constants.FIRM_ID)
      }

      axios
        .post(`${ENV.CUST_BASE_URL}/firm/image/pp`, body, { headers })
        .then(response => {
          if(response.data.appStatusCode === 0){
            if(response.data.payloadJson !== null){
              // setInputs({...inputs, c_image_url: response.data.payloadJson.URI})
              handleSubmit(response.data.payloadJson.URI);
            }
          } 
          else {
            setErrMsg(response.data.messages[0])
          }
        })
        .catch(error => {
          setErrMsg("Something went wrong, Please try again later!")
        });
    }
    reader.readAsDataURL(file);
  };

  const handleSubmit = (url)  => {
    let body= {};

    Object.entries(inputs).map(entry => {
      if(entry[1] !== ""){
        body[entry[0]] = entry[1]
      }
    })
    body["c_image_url"] = url
    saveProfileInfo(body)
  }

  // To show the error
  useEffect(() => {
    if(saveProfileInfoResult.error !== ""){
      setErrMsg(saveProfileInfoResult.error)
    } else {
      getProfileInfo();
    }
  }, [saveProfileInfoResult])

  return (
    <HideAppBar>
    <div className={`mob-common-header`}>
      <Link to={`${backNavigation}`}>
      <div className={`mobile-navigation-back ${backArrow && "opacity1"}`}>
        <img src={backArrowIcon} alt="backArrow" /> 
      </div>
      </Link>
      <h4>{pageTitle}</h4>
      {/* {edit && 
        <div className={`mobile-navigation-back ${edit && "opacity1"}`}>
          <img src={Edit} alt="edit" />
        </div>
      } */}
      <div className={`mobile-navigation-back relative ${(add || edit) && "opacity1"}`}>
        {add && url ? <Link to={`${url}`} className="align-cen"><img src={Add} alt="add" /></Link>:''}
        {edit && 
          <>
            <img src={Edit} alt="edit" />
            <input 
              type="file" 
              name="c_druglicense_no1_img"
              id="c_druglicense_no1"
              accept="image/jpeg, image/png, image/jpg, image/webp"
              onChange={e => handleUpload(e)}
              multiple={false} 
              className="editProfilePic"
            /> 
          </>
        }
        {/* <img src={Add} alt="edit" /> */}
      </div>
    </div>
    </HideAppBar>
  )
}

const mapStateToProps = (state) => ({
  saveProfileInfoResult: state.saveProfileInfo,
  getProfileInfoResult: state.getProfileInfoResult,
});

const mapDispatchToProps = (dispatch) => ({
  getProfileInfo: () => dispatch(getProfileInfo()),
  saveProfileInfo: (inputs) => dispatch(saveProfileInfo(inputs)),
});


export default connect(mapStateToProps, mapDispatchToProps)(HeaderCommonPage);
