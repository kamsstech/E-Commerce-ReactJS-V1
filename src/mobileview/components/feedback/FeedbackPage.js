import * as React from "react";
import { useState, useEffect } from "react";
import { ENV, REACT_APP_BASE_URL } from "../../../common/constant/env";
import axios from "axios";
import { Constants } from "../../../common/constant/localstorage";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

//images
import Feedback from "../../../assets/images/feedback.svg";
import Distributor from "../../../assets/images/distributor.svg";
import Store from "../../../assets/images/store.svg";
import attachment from "../../../assets/images/attachment.svg";

import {FeedbackInputsEntity, BranchListEntity, BranchEntity, 
    UploadImgBodyEntity, UploadImgEntity, RegisterEntity} from "../../../common/model";

const useStyles = makeStyles(theme => ({
  customMenu: {
    "& .MuiList-padding": {
      padding: "1em"
    },
    "& option": {
      fontSize: "0.875em",
      fontFamily: "Quicksand-Medium",
      padding: ".78em 1.14em",
      color: "#2e3e6a",
      transition: ".2s all linear"
    },
    "& option[aria-selected='true'], & option:hover": {
      backgroundColor: "#c3cde41a",
      color: "#674cf3"
    },
    "& .MuiMenu-paper": {
      marginTop: "62px"
    }
  },
  input: {
    display: "none"
  }
}));

// interface Props{
//     getBranchListAction(): void;
//     branchListResult: BranchListEntity;
//     sendFeedbackAction(body:FeedbackInputsEntity): void;
//     sendFeedbackResult: RegisterEntity;
//   }
  
const FeedbackPage = (props) => {
    const {getBranchListAction, branchListResult,
      sendFeedbackAction, sendFeedbackResult} = props;
      
    const classes = useStyles();

    
  const [fileName, setFileName] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [inputs, setInputs] = useState({
    c_feedback_type: "-1",
    n_distributor_id: -1,
    n_branch_id: -1,
    c_query: "",
    c_file_url: ""
  })

  const [errors, setErrors] = useState({
    c_feedback_type: false,
    n_distributor_id: false,
    n_branch_id: false,
    c_query: false,
    c_file_url: false
  })

  const handleUpload = (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    
    var filename = event.target.files[0].name;
    var size = event.target.files[0].size;
    
    setErrors({...errors, c_file_url: false})
    reader.onloadend = function() {
      if(size < 2000000){
      // console.log(reader.result)
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
          .post(`${REACT_APP_BASE_URL}/firm/feedback/file`, body, { headers })
          .then(response => {
            if(response.data.appStatusCode === 0){
              if(response.data.payloadJson !== null){
                setInputs({...inputs, c_file_url: response.data.payloadJson.URI})
              }
            } 
            else {
              setErrMsg(response.data.messages[0])
            }
          })
          .catch(error => {
            setErrMsg("Something went wrong, Please try again later!")
          });
      } else {
        setErrors({...errors, c_file_url: true})
      }
    }
    reader.readAsDataURL(file);

    setFileName(event.target.files[0].name)
  };

  const handleChange = (e) => {
    let {name, value} = e.target;

    setErrors({...errors, [name]: false});

    if (name === "c_query") {
      if (value.length > 1000) {
        value = value.slice(0, 1000);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  }

  const handleSubmit = () => {
    if(inputs.c_feedback_type === "-1" || errors.c_feedback_type === true){
      setErrors({...errors, c_feedback_type: true})
    } else if(inputs.c_query === "" || errors.c_query === true){
      setErrors({...errors, c_query: true})
    } else if(errors.c_file_url){

    } else {
      let temp = {}

      Object.entries(inputs).map(entry => {
        if(entry[1] === "-1" || entry[1] === -1 || entry[1] === ""){
          
        } else {
          temp[entry[0]] = entry[1];
        }
      })

      sendFeedbackAction(temp);
      console.log(temp, "temp")
    }
  }

  useEffect(() => {
    getBranchListAction()
  }, []);

  useEffect(() => {
    if(sendFeedbackResult.error !== ""){
      setErrMsg(sendFeedbackResult.error)
    }
  }, [sendFeedbackResult])

  // console.log(inputs, "fuydgudyf");

  return (
      <div className="mob-profile-sec-space">
          <h4 className="mob-addbranch-drawer-title mb-12">We value your feedback. Please send your feedback in the below form</h4>
          <p className="login-error-msg min-height-none mb-10">{errMsg.toLowerCase()}</p>
          <TextField
          select
          onChange={(e)=>handleChange(e)}
          value={inputs.c_feedback_type}
          error={errors.c_feedback_type}
          name="c_feedback_type"
          margin="normal"
          variant="outlined"
          placeholder="Full Name"
          className="auth-input mob-input"
          SelectProps={{
          MenuProps: {
              className: classes.customMenu
          }
          }}
          InputProps={{
              startAdornment: (
                  <InputAdornment position="start">
                  <img src={Feedback} alt="Feedback" />
                  </InputAdornment>
              )
          }}
      >
          <MenuItem value={"-1"}>Feedback Type *</MenuItem>
          <MenuItem value={"resgistration"}>Seller Registration</MenuItem>
          <MenuItem value={"payments"}>Payments</MenuItem>
          <MenuItem value={"ordering"}>Ordering</MenuItem>
          <MenuItem value={"schemes"}>Schemes & Offers</MenuItem>
          <MenuItem value={"suggestions"}>Suggestions/Others</MenuItem>
        </TextField>
        <TextField
          select
          onChange={(e)=>handleChange(e)}
          value={inputs.n_distributor_id}
          error={errors.n_distributor_id}
          name="n_distributor_id"
            margin="normal"
            variant="outlined"
            placeholder="Full Name"
            className="auth-input mob-input"
            SelectProps={{
            MenuProps: {
                className: classes.customMenu
            }
            }}
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                <img src={Distributor} alt="Distributor" />
                </InputAdornment>
            )
            }}
          >
            <MenuItem value={-1}>Select Distributor Name</MenuItem>
            <MenuItem value={40}>Mahaveer Madi-Sales</MenuItem>
            <MenuItem value={50}>Raj Sons Pharma</MenuItem>
            <MenuItem value={60}>Vardhman Pharma</MenuItem>
            <MenuItem value={70}>Varun Pharma</MenuItem>
            <MenuItem value={80}>Yash Pharma</MenuItem>
          </TextField>
          <TextField
            select
            onChange={(e)=>handleChange(e)}
            value={inputs.n_branch_id}
            error={errors.n_branch_id}
            name="n_branch_id"
            margin="normal"
            variant="outlined"
            placeholder="Full Name"
            className="auth-input mob-input"
            SelectProps={{
            MenuProps: {
                className: classes.customMenu
            }
            }}
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                <img src={Store} alt="Store" />
                </InputAdornment>
            )
            }}
          >
            <MenuItem value={-1}>Select Store Name</MenuItem>
            {(branchListResult.payload).map((item, index) => (
              <MenuItem key={index} value={item.n_branch_id}>{item.c_name}</MenuItem>
            ))}
          </TextField>
          <div className="feedback-query">
            <div className="feedback-label">
            Your Query <span className="red-color">*</span>
            </div>
            <div className="feedback-label">
            Max <span>{1000 - inputs.c_query.length}</span> character
            </div>
          </div>
          <TextField
            onChange={(e) => handleChange(e)}
            value={inputs.c_query}
            error={errors.c_query}
            multiline
            name="c_query"
            margin="normal"
            variant="outlined"
            placeholder="Write here..."
            className="auth-input mob-input"
          />
          <div className="feedback-select">
            <div>
              <input
                className={classes.input}
                id="outlined-button-file"
                onChange={handleUpload}
                multiple={false}
                type="file"
                accept=".doc, .rtf, .pdf, .png, .jpg"
              />
              <label htmlFor="outlined-button-file">
              <Button
                  variant="outlined"
                  component="span"
                  className="upload-btn"
              >
                  <img src={attachment} alt="attachment" />
                  Upload file
              </Button>
              </label>
              <h4 className="upload-guideline">
              Supported Formats: doc, rtf, pdf,png, jpg upto 2 MB
              </h4>
              <h4 className="uploaded-imagename">
                <span>{fileName}</span>
              </h4>
              {errors.c_file_url && <p className="login-error-msg">please upload a image less than 2 MB</p>}
            </div>
          </div>
          <Button variant="outlined" className="mob-changePass-btn" onClick={handleSubmit}>
              Send
          </Button>
      </div>
    )
}

export default FeedbackPage;