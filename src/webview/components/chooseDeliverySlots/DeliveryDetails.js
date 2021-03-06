import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import Checkbox from '@material-ui/core/Checkbox';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Button from "@material-ui/core/Button";
import ItemView from "./ItemView";

import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { FormGroup, Radio } from "@material-ui/core";


import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';






const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);


const DeliveryDetails = (props) => {
    const { itemDetail } = props;
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [value, setValue] = React.useState('female');

    const handleChange1 = (event) => {
        setValue(event.target.value);
    };


    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div className="chooseDelivery">
            <div className="deliver-to-add-wrapper pt-0 pd-0" >
                <div className="mob-cart-items-wrapper web-cart-items-wrapper">
                    <ExpansionPanel defaultExpanded>
                        <ExpansionPanelSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className="mob-cartitems-flex-sec">
                                {/* <h4>{itemDetail.sellerName}</h4>
            <h4>{itemDetail.items.length} Items</h4> */}
                                <h4 className="deliverySlots-details-title">{itemDetail.sellerName} <span className="deliverySlots-count" onClick={handleOpen}>(3 Items)</span></h4>
                            </div>
                        </ExpansionPanelSummary>



                        <ExpansionPanelDetails>
                            <div className="mob-cartitems-sec">
                                <p className="choose-delivery-options"> Choose your Delivery Option
                                    for {itemDetail.sellerName} </p>
                                <div className="deliverySlots-options-sec">









                                    <div className="deliverySlots-options-sec-item">

                                        <Checkbox
                                            icon={<CircleUnchecked style={{ fontSize: "17px" }} />}
                                            checkedIcon={< RadioButtonCheckedIcon style={{ fontSize: "17px" }} />}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />

                                        <p className="item-delivery-detail"> Tomorrow, 12 August - <span className="item-delivery-type">Standard Delivery</span></p>

                                    </div>

                                    <div className=" item-delivery-detail-timing">
                                        <p className="item-instruction"> PICK YOUR SLOT FOR DELIVERY</p>
                                        {/* <div className="item-timing">

                                            <Checkbox

                                                checked={checked}
                                                onChange={handleChange}
                                                icon={<CircleUnchecked style={{ fontSize: "12px", position: 'relative', bottom: '5px' }} />}
                                                checkedIcon={< RadioButtonCheckedIcon style={{ fontSize: "12px", position: 'relative', bottom: '5px' }} />}
                                                color="primary"
                                                className="adduser-checkbox-icon checkbox-listItem"
                                            />
                                            <p className="timing"> 10 to 2 pm</p>
                                        </div>
                                        <div className="item-timing">
                                            <Checkbox


                                                icon={<CircleUnchecked style={{ fontSize: "12px", position: 'relative', bottom: '5px' }} />}
                                                checkedIcon={< RadioButtonCheckedIcon style={{ fontSize: "12px", position: 'relative', bottom: '5px' }} />}
                                                color="primary"
                                                className="adduser-checkbox-icon checkbox-listItem"
                                            />
                                            <p className="timing"> 2 to 4 pm</p>
                                        </div>
                                        <div className="item-timing">
                                            <Checkbox

                                                icon={<CircleUnchecked style={{ fontSize: "12px", position: 'relative', bottom: '5px' }} />}
                                                checkedIcon={< RadioButtonCheckedIcon style={{ fontSize: "12px", position: 'relative', bottom: '5px' }} />}
                                                color="primary"
                                                className="adduser-checkbox-icon checkbox-listItem"
                                            />
                                            <p className="timing"> 4 to 8 pm</p>
                                        </div> */}

                                        <RadioGroup style={{ fontSize: "12px" }} name="deliverySlot" value={value} onChange={handleChange1}>
                                            <FormControlLabel value="10-to-2pm"  control={<Radio color="primary" size="small" />} label="10 to 2 pm" />
                                            <FormControlLabel value="2-to-4pm" control={<Radio color="primary" size="small" />} label="2 to 4 pm" />
                                            <FormControlLabel value="4-to-8pm" control={<Radio color="primary" size="small" />} label="4 to 8 pm" />

                                        </RadioGroup>



                                    </div>
































                                    <div className="deliverySlots-options-sec-item">
                                        <Checkbox
                                            icon={<CircleUnchecked style={{ fontSize: "17px" }} />}
                                            checkedIcon={< RadioButtonCheckedIcon style={{ fontSize: "17px" }} />}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />

                                        <p className="item-delivery-detail"> Friday, 13 August - <span className="item-delivery-type">Standard Delivery</span></p>

                                    </div>


                                    <div className="deliverySlots-options-sec-item">
                                        <Checkbox
                                            icon={<CircleUnchecked style={{ fontSize: "17px" }} />}
                                            checkedIcon={< RadioButtonCheckedIcon style={{ fontSize: "17px" }} />}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />

                                        <p className="item-delivery-detail"> Saturday, 14 August - <span className="item-delivery-type">Standard Delivery</span></p>

                                    </div>

                                    <div className="deliverySlots-options-sec-item">
                                        <Checkbox
                                            icon={<CircleUnchecked style={{ fontSize: "17px" }} />}
                                            checkedIcon={< RadioButtonCheckedIcon style={{ fontSize: "17px" }} />}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />

                                        <p className="item-delivery-detail"> Sunday, 15 August - <span className="item-delivery-type">Standard Delivery</span></p>

                                    </div>

                                    <div className="deliverySlots-options-sec-item">
                                        <Checkbox
                                            icon={<CircleUnchecked style={{ fontSize: "17px" }} />}
                                            checkedIcon={< RadioButtonCheckedIcon style={{ fontSize: "17px" }} />}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />

                                        <p className="item-delivery-detail"> Monday, 16 August - <span className="item-delivery-type">Standard Delivery</span></p>

                                    </div>

                                    <div className="deliverySlots-options-sec-item">
                                        <Checkbox
                                            icon={<CircleUnchecked style={{ fontSize: "17px" }} />}
                                            checkedIcon={< RadioButtonCheckedIcon style={{ fontSize: "17px" }} />}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />

                                        <p className="item-delivery-detail"> Tuesday, 17 August - <span className="item-delivery-type">Standard Delivery</span></p>

                                    </div>

                                    <div className="deliverySlots-options-sec-item">
                                        <Checkbox
                                            icon={<CircleUnchecked style={{ fontSize: "17px" }} />}
                                            checkedIcon={< RadioButtonCheckedIcon style={{ fontSize: "17px" }} />}
                                            color="primary"
                                            className="adduser-checkbox-icon checkbox-listItem"
                                        />

                                        <p className="item-delivery-detail"> Wednesday, 18 August - <span className="item-delivery-type">Standard Delivery</span></p>

                                    </div>

                                </div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>

            </div>
            <ItemView isOpen={open} setIsOpen={setOpen} />
        </div>
    )
}

export default DeliveryDetails