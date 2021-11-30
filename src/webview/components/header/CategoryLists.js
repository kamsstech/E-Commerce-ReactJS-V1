import React from "react";

import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { ENV } from "../../../common/constant/env";
import axios from "axios";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
// import AppLogo from "../../../assets/images/site-logo-white.svg";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import Checkbox from '@material-ui/core/Checkbox';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Menu from "../../../assets/images/menu.svg";
// import DownArrowLine from "../../../assets/images/down-arrow-line.svg";
import DownArrowLine from "../../../assets/images/icons/down-arrow.svg";
// import {CategoryListsResultEntity,CategoryListsEntity,} from "../../../common/model";
const useStyles = makeStyles((theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    dropdownStyle: {
      borderRadius: "6px",
      backgroundColor: "#fff",
      width: "11.9em",
      marginTop: "3em"
    }
  })
);

const CategoryMenuLists = (props) => {
    const {CategoryListsResult, CategoryListsAction} = props;
    useEffect(()=>{
        CategoryListsAction();
        // console.table(CategoryListsResult);
    },[]);

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openCat, setCatOpen] = useState(false);

    const handleCatToggle = () => {
        setCatOpen(prevOpen => !prevOpen);
    };

    const handleCatClose = (event) => {
        setCatOpen(false)
        if (anchorRef.current && anchorRef.current.contains(event.target)) 
        {
            return;
        }
    };

    const anchorRef = React.useRef(null);
    const handleCloseMenu =() =>{
        setCatOpen(prevOpen => !prevOpen);
    }


   return (
	 <>
	 	<Button
          variant="contained"
          color="primary"
          className={openCat ? "all-categories arrowdown" : "all-categories"}
          onClick={handleCatToggle}>
          {/*<img src={Menu} alt="Menu" />*/}
          All Categories
          <img src={DownArrowLine} alt="DownArrowLine" />
    </Button>


    <Popper
      open={openCat}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
      className="web-header-allcat"
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:placement === "bottom" ? "center top" : "center bottom"
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleCatClose} >
              <MenuList>
                {Array.isArray(CategoryListsResult.payload.data) && CategoryListsResult.payload.data.length > 0 && (CategoryListsResult.payload.data).map((item, index) => (
                  <Link to={`/plp/category?index=0&q=${item.c_code}&n=${item.c_name}`}>
                    <MenuItem onClick={handleCloseMenu}>
                      <span>{item.c_name}</span>
                    </MenuItem>
                  </Link>
                ))}
                
                {/* <Link to="/home"> */}
                <Link to={`/plp/category?index=&q=&n=`}>
                  <MenuItem  onClick={handleCloseMenu}>
                    <span>All Products</span>
                  </MenuItem>
                </Link>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
	 </>
  );
};
export default CategoryMenuLists;