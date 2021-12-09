import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Share from "../../../assets/images/share.svg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { blue, lightBlue } from "@material-ui/core/colors";
import ComingSoonPopup from "../header/ComingSoonPopup";

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
const ItemInfo = (props) => {

	const [openComingSoon, setOpenComingSoon] = useState(false);

	const handleCloseComingSoon =()=>{
	    setOpenComingSoon(false)
	  }
	// let test = 12.520;
	// console.log("Number",Number(test).toFixed(2));   
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const anchorRef = React.useRef<HTMLDivElement>(null);

	const handleToggle = () => {
		setOpen(prevOpen => !prevOpen);
	};

	 const handleCatToggle = () => {
		 setCatOpen(prevOpen => !prevOpen);
	 };

	const handleClose = (event) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target)
		) {
			return;
		}
		setOpen(false);
	};

	 const handleCatClose = (event) => {
		 if (
			 anchorRef.current &&
			 anchorRef.current.contains(event.target )
		 ) {
			 return;
		 }
		 setCatOpen(false);
	 };

	const { errorMsgItemDetails, GetPdpPageItems, pdpPageItemsResult } = props;
	const [value, setValue] = React.useState(0);
	const [tabValue, setTabValue] = React.useState("");
	const [catOpen, setCatOpen]=useState(false)

	const handleChange = (event, newValue) => {
		console.log(newValue);
		setValue(newValue);

	};

	let data = pdpPageItemsResult.payload.data;
	
	return (
		<>
		<div>
					
 {
			 data &&

				data.map((item,index)=>(
					<div key={index}>
					<div className="pdp-flexinfo-sec">
						<h4 className="pdp-title"> {item.c_item_name}</h4>
						<div className="relative">
							
							<div className="share-collapse-div">
								<Popper
									open={open}
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
													placement === "bottom"
														? "center top"
														: "center bottom"
											}}
										>
											<Paper>
												<ClickAwayListener onClickAway={handleClose}>
													<MenuList id="split-button-menu" >

														<MenuItem>
															<MailRoundedIcon style={{ fill: "#674cf0" }} />
																Mail
															</MenuItem>
														<MenuItem>
															<TwitterIcon style={{ fill: "#674cf0" }} />
																Twitter
															</MenuItem>
														<MenuItem>
															<div>
																<TelegramIcon style={{ fill: "#674cf0" }} />
															</div>
															Telegram
														</MenuItem>

													</MenuList>

												</ClickAwayListener>
											</Paper>
										</Grow>
									)}
								</Popper>
							</div>
							<p className="login-error-msg pdp-error-msg">{errorMsgItemDetails}</p>
						</div>


					</div>
					
					<p className="pdp-item-mfc">Brand <span>{item.brand[0].c_brand_name}</span> </p>
					<p className="pdp-item-mfc">Category <span>{item.category[0].c_category_name}</span></p>
					<p className="pdp-item-mfc">Model <span>{item.c_model_name}</span></p>
								 
					<h4 className="pdp-mrp">MRP &#8377; {item.product[0].n_item_price}</h4>
					<p className="pdp-item-mfc mr-b-6">Offer Price: &#8377; {item.product[0].n_item_offer_price}</p>
					{/*<p className="ppd-packaging">Packaging: 10`S</p>*/}
						{/* <p className="ppd-packaging">Selected Size: <span>{
						value == 0 ? item.j_related_items[0].c_pack_name : item.j_related_items[1].c_pack_name}</span></p> */}
					
					
					<Tabs
						value={value}
						indicatorColor="primary"
						textColor="primary"
						onChange={handleChange}
						className="pdp-select-size"
						aria-label="disabled tabs example"
					>
						{/* <Tab label={item.c_pack_name} /> */}
						{item.j_related_items && item.j_related_items.map((item, index) => (

							<Tab label={item.c_pack_name} key={index} onClick={() => GetPdpPageItems(item.c_item_code)} />
						))}

					</Tabs>

				</div>
				))

			 }
					 <p className="login-error-msg pdp-error-msg">{errorMsgItemDetails}</p>
		 </div>

		 <ComingSoonPopup 
          open={openComingSoon}
          handleClose={handleCloseComingSoon}
          />
		</>
		
	)
}

export default ItemInfo;