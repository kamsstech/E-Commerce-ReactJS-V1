import React from 'react'
import { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import TextField from "@material-ui/core/TextField";
import BackArrow from "../../../assets/images/down-arrow-line-grey.svg";
import downArrow from "../../../assets/images/Chevron_Right_1_.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        paddingLeft: theme.spacing(0),
        // alignItems:'left'
    },
    nested: {
        paddingLeft: theme.spacing(0),
        alignItems: 'left',
        paddingTop:theme.spacing(0)
    },
    // listItemText:{
    //     fontSize:'1.55em',//Insert your required size
    //   }
}));



const FilterMedicine = () => {
    const classes = useStyles();
    const [openManufacturers, setOpenManufacturers] = useState(false);
    const [openBrands, setOpenBrands] = useState(false);
    const [openSellers, setOpenSellers] = useState(false);
    const [openAvailability, setOpenAvailability] = useState(false);
    const [openDiscounts, setOpenDiscounts] = useState(false);

    const handleClickManufactures = () => {
        setOpenManufacturers(!openManufacturers);
    };
    const handleClickBrands = () => {
        setOpenBrands(!openBrands);
    };
    const handleClickSellers = () => {
        setOpenSellers(!openSellers);
    };
    const handleClickAvailability = () => {
        setOpenAvailability(!openAvailability);
    };
    const handleClickDiscounts = () => {
        setOpenDiscounts(!openDiscounts);
    };

    return (
        <div className="mr-16-filter">

            <List
                component="nav">
                <ListItem className="filter-side-main-tab">
                    <ListItemText primary="Filters" className="filter-side-main-tab-listItemText" />
                </ListItem>

                <div className="filter-side-tab">
                    <ListItem onClick={handleClickManufactures} className="filter-list-item-padding">
                        <ListItemText primary="MANUFACTURERS" className="filter-side-tab-item" />
                        {openManufacturers ? <img src={downArrow} alt="fliter-mfac" className="downarrow-icon" /> :  <img src={BackArrow} alt="fliter-mfac" className="backarrow-icon" />}
                    </ListItem>
                    <Collapse in={openManufacturers} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <TextField
                                error={false}
                                // value="Search products here"
                                // onChange={e => handleSearch(e)}
                                id="search"
                                name="search"

                                // margin="normal"
                                variant="outlined"
                                placeholder="Search for Manufacturers Here"
                                className=" auth-input filter-manufacturers-search-input"

                            />
                            <ListItem className={classes.nested} >
                                <div className="checkbox-textField-main">
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="AbbVie Inc" className="filter-manufacturers-search-input" />
                                    </div>
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="Abbott Laboratories" className="filter-manufacturers-search-input" />
                                    </div>
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="Alkem Laboratories" className="filter-manufacturers-search-input" />
                                    </div>
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="Bayer AG" className="filter-manufacturers-search-input" />
                                    </div>
                                </div>
                            </ListItem>
                        </List>
                    </Collapse>
                </div>

                <div className="filter-side-tab">
                    <ListItem onClick={handleClickBrands} className="filter-list-item-padding" >
                        <ListItemText primary="BRANDS" className="filter-side-tab-item" />
                        {openBrands ? <img src={downArrow} alt="fliter-mfac" className="downarrow-icon" />: <img src={BackArrow} alt="fliter-mfac" className="backarrow-icon" />}
                    </ListItem>
                    <Collapse in={openBrands} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <TextField
                                error={false}
                                // value="Search products here"
                                // onChange={e => handleSearch(e)}
                                id="search"
                                name="search"
                                // margin="normal"
                                variant="outlined"
                                placeholder="Search for Brands Here"
                                className="auth-input filter-manufacturers-search-input"
                            />
                            <ListItem className={classes.nested} >
                            <div className="checkbox-textField-main">
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="Calpol" className="filter-manufacturers-search-input" />
                                    </div>
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="Dolo" className="filter-manufacturers-search-input" />
                                    </div>
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="Metacin" className="filter-manufacturers-search-input" />
                                    </div>
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="Medomol" className="filter-manufacturers-search-input" />
                                    </div>
                                </div>
                            </ListItem>
                        </List>
                    </Collapse>
                </div>

                <div className="filter-side-tab">
                    <ListItem onClick={handleClickSellers} className="filter-list-item-padding" >
                        <ListItemText primary="SELLERS" className="filter-side-tab-item" />
                        {openSellers ? <img src={downArrow} alt="fliter-mfac" className="downarrow-icon" /> : <img src={BackArrow} alt="fliter-mfac" className="backarrow-icon" />}
                    </ListItem>
                    <Collapse in={openSellers} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <TextField
                                error={false}
                                // value="Search products here"
                                // onChange={e => handleSearch(e)}
                                id="search"
                                name="search"
                                // margin="normal"
                                variant="outlined"
                                placeholder=" Search for Sellers Here"
                                className="auth-input filter-manufacturers-search-input"
                            />
                            <ListItem className={classes.nested} >
                            <div className="checkbox-textField-main">
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="Ganesh Pharma" className="filter-manufacturers-search-input" />
                                    </div>
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="Karnataka pharma distr..." className="filter-manufacturers-search-input" />
                                    </div>
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="Vardhman Pharma Distr..." className="filter-manufacturers-search-input" />
                                    </div>
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="Gurukrupa Pharma Distr..." className="filter-manufacturers-search-input" />
                                    </div>
                                </div>
                            </ListItem>
                        </List>
                    </Collapse>
                </div>

                <div className="filter-side-tab">
                    <ListItem onClick={handleClickAvailability} className="filter-list-item-padding" >
                        <ListItemText primary="AVAILABILITY" className="filter-side-tab-item" />
                        {openAvailability ?  <img src={downArrow} alt="fliter-mfac" className="downarrow-icon" /> : <img src={BackArrow} alt="fliter-mfac" className="backarrow-icon" />}
                    </ListItem>
                    <Collapse in={openAvailability} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            <ListItem className={classes.nested} >

                            <div className="checkbox-textField-main">
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="Include Out of Stock" className="filter-manufacturers-search-input" />
                                    </div>
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="In Stock" className="filter-manufacturers-search-input" />
                                    </div>
                                </div>
                            </ListItem>
                        </List>
                    </Collapse>
                </div>

                <div className="filter-side-tab">
                    <ListItem onClick={handleClickDiscounts} className="filter-list-item-padding" >
                        <ListItemText primary="DISCOUNT" className="filter-side-tab-item" />
                        {openDiscounts ? <img src={downArrow} alt="fliter-mfac" className="downarrow-icon" /> :  <img src={BackArrow} alt="fliter-mfac" className="backarrow-icon" />}
                    </ListItem>
                    <Collapse in={openDiscounts} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem className={classes.nested} >
                            <div className="checkbox-textField-main">
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="40% & above" className="filter-manufacturers-search-input" />
                                    </div>
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="30% & above" className="filter-manufacturers-search-input" />
                                    </div>
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="20% & above" className="filter-manufacturers-search-input" />
                                    </div>
                                    <div className=" checkbox-textField">
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon  />}
                                            checkedIcon={<CheckBoxIcon  />}
                                            // checked={rights.n_view_transaction === "1" ? true : false}
                                            // onChange={handleCheckbox("n_view_transaction", index)}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />
                                        <ListItemText primary="10% & above" className="filter-manufacturers-search-input" />
                                    </div>
                                </div>
                            </ListItem>
                        </List>
                    </Collapse>
                </div>
            </List>

        </div>
    )
}

export default FilterMedicine;
