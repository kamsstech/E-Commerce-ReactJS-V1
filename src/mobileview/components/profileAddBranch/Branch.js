import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swipeout from 'rc-swipeout';
import EditUser from "../../../assets/mobImages/list-user/edit.png";
import DeleteUser from "../../../assets/mobImages/list-user/delete.png";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import DeleteBranchModal from "./DeleteBranchModal";
import { Constants } from "../../../common/constant/localstorage";

import { BranchEntity, BranchListEntity, RegisterEntity, SavePassEntity } from "../../../common/model";

// interface Props {
//   getBranchListAction(): void;
//   branchListResult: BranchListEntity;
//   deleteBranchAction(branchId:number): void;
//   deleteBranchResult: RegisterEntity;
//   setDefaultBranch(firmId: string): void;
//   defaultBranchResult: SavePassEntity;
//   searchBranchListAction(searchKey: string): void;
//   clearGetBranch(): void;
//   clearDeleteBranch(): void;
// }

const Branch = (props) => {
  const { getBranchListAction, branchListResult, deleteBranchAction, deleteBranchResult,
    searchBranchListAction, clearGetBranch, clearDeleteBranch } = props;

  const [errorMsg, setErrorMsg] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [openDeleteBranchModal, setOpenDeleteBranchModal] = useState(false);
  const [deleteBranchId, setDeleteBranchId] = useState(0);
  const [isDefault, setIsDefault] = useState(false);

  const handleOpenDeleteBranchModal = (branchId) => {
    setErrorMsg("")
    setDeleteBranchId(branchId)
    setOpenDeleteBranchModal(true);
    if(defaultBranch === branchId.toString()){
      setIsDefault(true);
    } else {
      setIsDefault(false);
    }
  };

  const handleCloseDeleteBranchModal = () => {
    setOpenDeleteBranchModal(false);
  };

  useEffect(() => {
    getBranchListAction();

    const branchId = localStorage.getItem(Constants.DEFAULT_FIRM_ID)
    setDefaultBranch(branchId);

    return () => {
      clearGetBranch();
      clearDeleteBranch();
    }
  }, []);

  useEffect(() => {
    if(branchListResult.error !== ""){
      setErrorMsg(branchListResult.error);
    }
  }, [branchListResult])

  useEffect(() => {
    setOpenDeleteBranchModal(false);
    if(deleteBranchResult.error !== ""){
      setErrorMsg(deleteBranchResult.error);
    } 
  }, [deleteBranchResult])

  const [defaultBranch, setDefaultBranch] = React.useState("");

  const handleDefaultBranch = (event) => {
    setDefaultBranch((event.target).value);
    localStorage.setItem(Constants.DEFAULT_FIRM_ID, (event.target).value);
    localStorage.setItem(Constants.FIRM_ID, (event.target).value);
    props.setDefaultBranch((event.target).value)
  };

  const handleChange = (e) => {
    var regex = /^[A-Za-z0-9]+$/;
    setSearchKey(e.target.value);
    setErrorMsg("");

    if(e.target.value.length === 0){
      getBranchListAction();
    } else if(regex.test(e.target.value)){
      searchBranchListAction(e.target.value)
    } else {
      setErrorMsg("Special characters are not allowed")
    }
  } 
  useEffect(() => {
    window.scrollTo(0, 0)
}, [defaultBranch]) 
  return(
    <>
      <DeleteBranchModal 
        openDeleteBranchModal={openDeleteBranchModal}
        handleCloseDeleteBranchModal={handleCloseDeleteBranchModal}
        deleteBranchId={deleteBranchId}
        deleteBranchAction={deleteBranchAction}
        isDefault={isDefault}
      />
      <div className="users-list-sec">
        <p className="login-error-msg min-height-none mb-10">{errorMsg}</p>
        <input 
          value={searchKey}
          onChange={e => handleChange(e)}
          placeholder="Search for branch" 
          className="search-branch-input search-branch-mobile"
        />
        <FormControl component="fieldset" className="width-100">
          <RadioGroup aria-label="gender" name="gender1" value={defaultBranch} onChange={handleDefaultBranch}>
            {(branchListResult.payload).sort(function(bItem,bItem1){
              if((bItem1.n_branch_id.toString() === defaultBranch) && (bItem.n_branch_id.toString() !== defaultBranch) ) {
                return 1;
              }else{
                return -1;
              }
              }).map((item, index) => (
              <div className="width-100" key={index}>
                <Swipeout
                    style={{ backgroundColor: 'white' }}
                    autoClose
                    right={[
                      {
                        text: <Link to={`/edit-branch/${item.n_branch_id}`}><img src={EditUser} alt="Edit" /></Link>,
                        className: 'edit-user'
                      },
                      {
                      text: <><img src={DeleteUser} alt="Delete" /></>,
                      onPress: ()=>handleOpenDeleteBranchModal(item.n_branch_id),
                        className: 'delete-user'
                      },
                    ]}
                >
                    <div className="user-row">
                      <div className="user-row-profileimg">
                        {(item.c_name.match(/\b\w/g) || []).shift() || ''}{(item.c_name.match(/\b\w/g) || [])[1] || ''}
                      </div>
                      <div className="user-details-sec">
                        <h4 className="user-row-proname">
                          {<>
                              <>{item.c_name}</>
                              <>{(item.c_area_name!==undefined && item.c_area_name!=="") && <> ({item.c_area_name} {(item.c_landmark !==undefined && item.c_landmark !=="") && <>, {item.c_landmark}</>})</>}</>
                          </>}
                        </h4>
                        <h4 className="user-row-prodetails">
                          {item.c_city_name}{(item.c_pincode!== undefined && item.c_pincode!=="") && <><span>|</span>({item.c_pincode})</> }
                        </h4>
                        <FormControlLabel
                          value={item.n_branch_id.toString()}
                          control={<Radio color="primary" />}
                          label="Set default"
                          className="p-0 mr-10 font-12"
                        />
                      </div>
                    </div>
                </Swipeout>
              </div>
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </>
  )
} 

export default Branch;