import * as React from "react";
import { useEffect, useState } from "react";
import FilterFreqOrder from './FilterFreqOrder';
import FreqBoxView from "./FreqBoxView";
import FreqListView from "./FreqListView";
import SellerDropDown from "./SellerDropDown"

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";


import medicine from "../../../assets/images/medicine-syrup-plp-page.jpg";
import wishlist from "../../../assets/images/wishlist_plp_page.svg";
import commerce_offer from "../../../assets/images/commerce-and-shopping_plp_page.svg";
import box_to_ListView_Icon from "../../../assets/images/Group_860.svg";
import list_to_boxView_icon from "../../../assets/images/list_to_boxView_icon.svg";
import DownArrow from "../../../assets/images/down-arrow.svg";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import Zoom from "@material-ui/core/Zoom";
import Tooltip from "@material-ui/core/Tooltip";
import {FreqorderEntity} from "../../../common/model"

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
        },

    })

);

const useStylesBranch = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
        letterSpacing: ".8px",
        fontFamily: "Quicksand-Medium",
    }
}));


const FreqOrder = (props) => {
const {freqorderResponse} = props
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyles();
    const limitNumber = 10
    const [viewToggle, setViewToggle] = useState(true)
    const handleViewToggle = () => {
        setViewToggle(!viewToggle)
    }
    // const [open, setOpen] = useState(false);
    // const [relevanceValue, setRelevanceValue] = useState('Relevance');

    // const anchorRef = React.useRef<HTMLDivElement>(null);
    // const handleToggle = () => {
    //     setOpen(prevOpen => !prevOpen);
    // };
    // const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    //     if (
    //         anchorRef.current &&
    //         anchorRef.current.contains(event.target as HTMLElement)
    //     ) {
    //         return;
    //     }
    //     setOpen(false);
    // };

    return (
        <div className="body-spacing">
            <Container fixed>

                <div className="freq-top-sec">
                    <div className="top-heading">
                        <div className="heading">
                            <div className="heading-sub">
                                <h3 className="heading-title"> All Products </h3>
                                <p className="products-count-sec"> (Showing 1- 40 of 60 products)</p>
                            </div>
                        </div>
                        <div className="rightside_topHeading">
                            <div className="view-icon-sec" onClick={handleViewToggle}>
                                {!viewToggle ? <Tooltip title="Grid View" TransitionComponent={Zoom}><img src={box_to_ListView_Icon} alt="List-to-Tile" className="view-icon" /></Tooltip> :
                                    <Tooltip title="List View" TransitionComponent={Zoom}><img src={list_to_boxView_icon} alt="List-to-Tile" className="view-icon" /></Tooltip>}
                            </div>
                        </div>
                    </div>
                </div>

                <Grid container spacing={0}>

                    <Grid item xs={3} >
                        <div className="freq-filter-sec">
                            <div className="sticky-filter">
                                <FilterFreqOrder />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        {
                            !viewToggle ?
                                <FreqListView freqorderResponse={freqorderResponse}/>
                                :
                                <FreqBoxView freqorderResponse={freqorderResponse}/>
                        }
                   
                    </Grid>
                </Grid>
            </Container>
         
        </div>


    )
}

export default FreqOrder;