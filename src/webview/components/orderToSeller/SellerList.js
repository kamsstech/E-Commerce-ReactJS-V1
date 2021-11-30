import React, { useState,useEffect } from "react";
import {
  Table,
  TableRow,
  TableCell,
  Divider,
  Button,
  TableBody,
  TableHead,
} from "@material-ui/core";
import shop from "../../../assets/images/shop.svg";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import arrow from "../../../assets/images/Priorityarrow.svg";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import searchimg from "../../../assets/images/search.svg";

const SellerList = (props) => {
  const {
    GetMappedSellerList,
    getMappedSellerListResult,
    SearchMappedSellerList,
    searchMappedSellerListResult,
    SetPriorityMappedSeller,
    setPriorityMappedSellerResult,
  } = props;

  const sellerList = getMappedSellerListResult.payload;
  const sellerLength = getMappedSellerListResult.payload.length;
  const searchsellerList = searchMappedSellerListResult.payload;
  const searchsellerLength = searchMappedSellerListResult.payload.length;

  console.log(sellerList,"$$$$$$$$$ sellerList")
  console.log(sellerLength,"$$$$$$$$$ sellerLength")

  const [searchKey, setSearchKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = React.useRef < HTMLDivElement > null;
  const [priorityValue, setPriority] = useState("01");

  const handleChange = (e) => {
    var regex = /^[A-Za-z0-9]+$/;
    setSearchKey(e.target.value);
    // setErrorMsg("");

    // if(e.target.value.length === 0){
    //   getBranchListAction();
    // } else if(regex.test(e.target.value)){
    //   searchBranchListAction(e.target.value)
    // } else {
    //   setErrorMsg("Special characters are not allowed")
    // }
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setIsOpen(false);
  };
  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  useEffect(() => {
    if(searchKey.length >=3){
      const body={
        "c_name":searchKey,
        "n_page":"0",
        "n_limit":"10"
      }
      SearchMappedSellerList(body);
    }
    
  }, [searchKey])
  return (
    <div>
      <div className="flexDisplay order-to-seller">
        <div className="search-branch-sec">
          <div className="sellerListhead">List Of the Sellers</div>
          {/* <input 
					value={searchKey}
					onChange={e => handleChange(e)}
					placeholder="Search Sellers" 
					className="serachSellerInput"
				/> */}

          <TextField
            value={searchKey}
            onChange={(e) => handleChange(e)}
            margin="normal"
            variant="outlined"
            placeholder="Search Shortbook Products"
            className="serachSellerInput searchbox width256 startAdornmentEmpty"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={searchimg} alt="searchimg" />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <hr className="MuiDivider-root blue-divider"></hr>
      <div>
        <Table className="sellerList">
          <TableHead>
            <TableRow className="head noBorder">
              <TableCell>Sr No.</TableCell>
              <TableCell>Seller Name</TableCell>
              <TableCell>No. Of Products on Scheme</TableCell>
              <TableCell>Pending Credit Note</TableCell>
              <TableCell className="text-center">Set Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>



            {/* {products.map(product => ( */}

				{ searchKey.length >=3 ?

searchsellerLength > 0 ?

		searchsellerList.map((product, index) => (

			<TableRow key={index}>
              <TableCell className="tBody">
				  {/* {product.c_seller_code} */}
				  {index + 1}
				  
				  </TableCell>
              <TableCell className="tBody">
			  {product.c_seller_name}
              </TableCell>
              <TableCell className="tBody">358</TableCell>
              <TableCell className="tBody">
                ₹ {parseInt("10000").toLocaleString()}
              </TableCell>
              <TableCell
                className="text-center tBody handCursur"
                onClick={handleToggle}
              >
                <div className="setPriority cursor">
                  <img src={arrow} />
                </div>
              </TableCell>
              <div className="priority-collapse-div">
                <Popper
                  open={isOpen}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                  className="profile-dropdown"
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "right"
                            ? "center left"
                            : "center right",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList id="split-button-menu">
                            <MenuItem
                              value={-1}
                              onClick={(value) => {
                                setPriority("-01");
                              }}
                            >
                              Set Priority As
                            </MenuItem>
                            <MenuItem
                              value={1}
                              onClick={(value) => {
                                setPriority("01");
                              }}
                            >
                              01
                            </MenuItem>
                           
                            
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </TableRow>
			
			)) 
              :
              <h4>No Data Found</h4>
              
              
              :

			  sellerLength > 0 ?
                sellerList.map((product, index) => (

					<TableRow key={index}>
              <TableCell className="tBody">
				  {/* {product.c_seller_code} */}
				  {index + 1}
				  </TableCell>
              <TableCell className="tBody">
			  {product.c_seller_name}
              </TableCell>
              <TableCell className="tBody">358</TableCell>
              <TableCell className="tBody">
                ₹ {parseInt("10000").toLocaleString()}
              </TableCell>
              <TableCell
                className="text-center tBody handCursur"
                onClick={handleToggle}
              >
                <div className="setPriority cursor">
                  <img src={arrow} />
                </div>
              </TableCell>
              <div className="priority-collapse-div">
                <Popper
                  open={isOpen}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                  className="profile-dropdown"
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "right"
                            ? "center left"
                            : "center right",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList id="split-button-menu">
                            <MenuItem
                              value={-1}
                              onClick={(value) => {
                                setPriority("-01");
                              }}
                            >
                              Set Priority As
                            </MenuItem>
                            <MenuItem
                              value={1}
                              onClick={(value) => {
                                setPriority("01");
                              }}
                            >
                              01
                            </MenuItem>
                           
                            
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </TableRow>


					)) 

					:
					<h4>No Record Found</h4>
                
            
				}

            




            
            {/* ))} */}
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SellerList;
