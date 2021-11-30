import * as React from "react";
import {useState, useEffect} from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';

//images
import AccountIcon from "../../../assets/mobImages/account-blue/account.png";
import NotificationIcon from "../../../assets/mobImages/notification-blue/notification.png";
import OrdersIcon from "../../../assets/mobImages/order-blue/order.png";
import FeedbackIcon from "../../../assets/mobImages/feedback-blue/feedback.png";
import LogoutIcon from "../../../assets/mobImages/logout-blue/logout.png";
import RightArrow from "../../../assets/images/down-arrow-line-grey.svg";
import BranchIcon from "../../../assets/mobImages/branch-blue/shop.png";

import ProfileInfo from "./ProfileInfo";
import { Constants } from "../../../common/constant/localstorage";


const ProfilePage = (props) => {
  let history = useHistory()
  const [showBranch, setShowBranch] = useState(false);
  const [defaultBranch, setDefaultBranch] = React.useState("");
  const [curBranch, setCurBranch] = React.useState("");
  const [inputs, setInputs] = useState({
    c_image_url: "",
    c_name: "",
    c_area_name: "",
    c_landmark: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0)
}, [curBranch])

  const logout = () => {
    localStorage.clear();
    localStorage.setItem("SECOND_TIME",true);
    history.push("/login")
    // return <Redirect to="/login" />;
    // window.location.href = window.location.href
    // window.location.reload(false)

    
  };
  
  const toggleChangeBranch = () => {
    setShowBranch(!showBranch)
  }  

  useEffect(() => {
    props.getProfileInfo();
    props.getBranchListAction();
    
    const branchId = localStorage.getItem(Constants.DEFAULT_FIRM_ID);
    setDefaultBranch(branchId)

    const curBranchId = localStorage.getItem(Constants.FIRM_ID);
    setCurBranch(curBranchId)
  }, [])

  useEffect(() => {
    let temp = {...inputs}

    Object.entries(props.getProfileInfoResult.payload).map(entry => {
      temp[entry[0]] = entry[1];      
    })
    setInputs(temp)
  }, [props.getProfileInfoResult])

  const [makeDefault, setMakeDefault] = React.useState(false);
  const handleMakeDefault = (event) => {
    setMakeDefault(event.target.checked);
  };

  const handleDefaultBranch = (event, makeDefault) => {
    // console.log(makeDefault) 
    if(makeDefault){
      setDefaultBranch((event.target).value);
      setCurBranch((event.target).value)
      localStorage.setItem(Constants.DEFAULT_FIRM_ID, (event.target).value);
      localStorage.setItem(Constants.FIRM_ID, (event.target).value);
      props.setDefaultBranch((event.target).value)
    } else {
      setCurBranch((event.target).value)
      localStorage.setItem(Constants.FIRM_ID, (event.target).value);
      // window.location.reload(false)
      window.location.href = window.location.href
    }
  };

  useEffect(() => {
    if(props.defaultBranchResult.payload.message !== ""){
      window.location.reload(false)
    }
  }, [props.defaultBranchResult.payload]);

  // console.log(inputs, "fsd")
  return (
    <>
      <ProfileInfo 
        c_image_url={inputs.c_image_url}
        c_name={inputs.c_name}
        c_area_name={inputs.c_area_name}
        c_landmark={inputs.c_landmark}
      />
      <div className="mob-profile-sec-space">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className="mob-profile-sec"
        >
          <ListItem>
              <ListItemIcon>
                  <img src={AccountIcon} alt="AccountIcon" />
              </ListItemIcon>
              <ListItemText primary={
                  <div>Account Setting
                      <ul className="mob-profile-links">
                          <li><Link to="/profile-info">Profile Information</Link></li>
                          {/* <li><Link to="">Profile Information</Link></li> */}
                          <li><Link to="/user">User Management</Link></li>
                          <li><Link to="/profile/branch">Branch Management</Link></li>
                          <li><Link to="/change-password">Change Password</Link></li>
                      </ul>
                  </div>
              } />
          </ListItem>
          {Array.isArray(props.branchListResult.payload) && props.branchListResult.payload.length > 1 && 
            <ListItem>
              <div className="width-100 display-flex" onClick={toggleChangeBranch}>
                <ListItemIcon>
                  <img src={BranchIcon} alt="BranchIcon" />
                </ListItemIcon>
                <ListItemText primary={<div>Change Branch ({Array.isArray(props.branchListResult.payload) && props.branchListResult.payload.length})</div>} />
                <ListItemIcon  className={showBranch ? "change-branch-arrow down-anim":"change-branch-arrow"}>
                  <img src={RightArrow} alt="RightArrow" />
                </ListItemIcon>
              </div>
              <div className="width-100">
                <Collapse in={showBranch} timeout="auto" unmountOnExit>
                  <div className="change-branch-sec mobile-changebranch-sec">
                    {makeDefault ? 
                    <FormControl component="fieldset" className={"sortby-filter payment login-select-branch"}>
                      <RadioGroup aria-label="gender" name="gender1" value={defaultBranch} onChange={e=>handleDefaultBranch(e, makeDefault)}>
                      {(props.branchListResult.payload).map((item, index) => (
                        <>{index < 8 &&
                          <FormControlLabel
                            // disabled={!makeDefault}
                            value={item.n_branch_id.toString()}
                            control={<Radio color="primary" />}
                            label={item.c_area_name!==undefined ? <>{item.c_area_name} {item.c_landmark !==undefined && <>, {item.c_landmark}</>}</> : <>{item.c_name}</>}
                            className="p-0"
                          />
                        }</>
                      ))}
                      </RadioGroup>
                    </FormControl>
                    : 
                    <FormControl component="fieldset" className={"visibility-hidden sortby-filter payment login-select-branch"}>
                      <RadioGroup aria-label="gender" name="gender1" value={curBranch} onChange={e=>handleDefaultBranch(e, makeDefault)}>
                      {(props.branchListResult.payload).map((item, index) => (
                        <>{index < 8 &&
                          <FormControlLabel
                            // disabled={!makeDefault}
                            value={item.n_branch_id.toString()}
                            control={<Radio color="primary" />}
                            label={item.c_area_name!==undefined ? <>{item.c_area_name} {item.c_landmark !==undefined && <>, {item.c_landmark}</>}</> : <>{item.c_name}</>}
                            className={item.n_branch_id.toString()===curBranch ? "highlight-branch p-0" : "p-0"}
                          />
                        }</>
                      ))}
                      </RadioGroup>
                    </FormControl> 
                    }
                    {Array.isArray(props.branchListResult.payload) && props.branchListResult.payload.length >= 8  &&
                    <div className="view-space"><Link to="/profile/branch" className="view-more-link">View More</Link></div> }
                    <div className="make-default-space">
                      <FormControlLabel
                        className="make-default"
                        control={
                          <Checkbox
                            name="checkedB"
                            color="primary"
                            checked={makeDefault}
                            onChange={e=>handleMakeDefault(e)}
                          />
                        }
                        label="Make Default"
                      />  
                    </div>
                  </div>
                </Collapse>
              </div>
            </ListItem>
          }
          <ListItem>
              <ListItemIcon>
                  <img src={NotificationIcon} alt="NotificationIcon" />
              </ListItemIcon>
              <ListItemText primary={<div>Notification Setting</div>} />
          </ListItem>
          <ListItem>
              <ListItemIcon>
                  <img src={OrdersIcon} alt="NotificationIcon" />
              </ListItemIcon>
              <ListItemText primary={<div>My Orders</div>} />
          </ListItem>
          <ListItem>
              <ListItemIcon>
                  <img src={NotificationIcon} alt="NotificationIcon" />
              </ListItemIcon>
              <ListItemText primary={
                  <div>Payments
                      <ul className="mob-profile-links">
                          <li><Link to="/profile-info">Live Order Wallet</Link></li>
                      </ul>
                  </div>
              } />
          </ListItem>
          <ListItem>
              <ListItemIcon>
                  <img src={NotificationIcon} alt="NotificationIcon" />
              </ListItemIcon>
              <ListItemText primary={<div>Returns</div>} />
          </ListItem>
          <ListItem>
              <ListItemIcon>
                  <img src={FeedbackIcon} alt="NotificationIcon" />
              </ListItemIcon>
              <ListItemText primary={<div><Link to="/feedback" className="unset-color">Feedback</Link></div>} />
          </ListItem>
          <ListItem onClick={logout}>
                <ListItemIcon>
                    <img src={LogoutIcon} alt="NotificationIcon" />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
            </ListItem>
        </List>
      </div>
    </>
  )
}

export default ProfilePage;