import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Download from "../../../assets/images/download.svg";
import Wizard from "./Wizard";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import ProductImg1 from "../../../assets/images/rajsons_logo.jpg";
import ExcelIcon from "../../../assets/images/excel.svg";
import PdfIcon from "../../../assets/images/pdf.svg";
import { format } from 'date-fns'



const Products = (props) => {
	const { product ,handleView } = props;
	// console.log(product, "&&&& allOrdersResult")
	const [open, setOpen] = useState(false);
	const anchorRef = React.useRef(null);
  
	const [orderChange, setOrderchange] = useState({
		step:1,
		progress:10
	})

	// console.log(orderChange.step, "OOOOOOOOOOOOOOOOO orderChange step")
	// console.log(orderChange.progress, "OOOOOOOOOOOOOOOOO orderChange progress")


	function getStepContent(step) {
		switch (step) {
			case "OP":
				return (
					setOrderchange({
						step:1,
						progress:20
					})	
				)
			case "PO":
				return (
					setOrderchange({
						step:2,
						progress:40
					}))
			case "OO":
				return (
					setOrderchange({
						step:3,
						progress:60
					})	
				);
			case "PP":
				return (
					setOrderchange({
						step:4,
						progress:80
					})	
				);
			case "UU":
				return (
					setOrderchange({
						step:5,
						progress:100
					})	
				);
			default:
				return (
					setOrderchange({
						step:0,
						progress:0
					})	
				);;
		}
	}
	


	const handleToggle = () => {
	  setOpen(prevOpen => !prevOpen);
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

	useEffect(() => {
		getStepContent(product.c_order_status)
	}, [product.c_order_status])
	return (
	<>
		<div className="mob-cart-items-wrapper web-cart-items-wrapper">
			<div className="cart-items-list b-0">
				<div className="cart-items-list-productimg relative column">
					{
						product.c_seller_logo_image === "" ? 
						// null
						<img src={ProductImg1} alt="ProductImg" /> 
						:
						<img src={product.c_seller_logo_image} alt="ProductImg" /> 
						
					}
					
					<Link to={`/order-history/details/${product.c_order_id}`}>
						<Button
							variant="contained"
							color="primary"
							className="view-details-btn m-0"
							onClick={()=>handleView(product.c_order_id)}
						>
							View Details
						</Button>
					</Link>
				</div>
				<div className="cart-items-list-productdetails">
					<div className="cart-item-list-left">
						<h4 className="order-history-title">{product.c_seller_name} <span>(Order Id: {product.c_order_id})</span></h4>
						
						<h4 className="order-history-date">Ordered Date : {product.c_ordered_date} </h4>
						<h4 className="order-history-amount"><span>{product.c_no_of_items_ordered} Items</span> <span>| Outstanding Amount: </span> 
							{product.c_order_status === "OP" ? <span>{product.c_outstanding_amount}</span> : <> <span className="paid">Paid</span></>}
						</h4>
					</div>
					<div className="cart-item-list-right p-0">
						<div className="width-25">
							<h4 className="cart-orders-list-title">₹ {product.c_total_order_amount}</h4>
						</div>
						<div className="width-75">
							<h4 className="cart-orders-list-title text-right">
								Ships to Maruthi Medicals <span>(Jayanagar)</span> 
								{ product.j_download_link &&
								 <img src={Download} alt="Download" onClick={handleToggle} className="handCursur invoice-download" /> 
								 }
							</h4>
							<div className="invoice-collapse-div">
								<Popper
									open={open}
									anchorEl={anchorRef.current}
									role={undefined}
									transition
									disablePortal
									className="download-dropdown"
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
										<MenuList className="download-options" >
											<MenuItem>
												<div>
													<img src={ExcelIcon} alt="ExcelIcon" />
												</div>
												Excel
											</MenuItem>
											<MenuItem>
												<div>
													<img src={PdfIcon} alt="PdfIcon" />
												</div>
												PDF
											</MenuItem>
											<MenuItem>
												<div>
													<img src={PdfIcon} alt="PdfIcon" />
												</div>
												CSV
											</MenuItem>
										</MenuList>
										</ClickAwayListener>
									</Paper>
									</Grow>
								)}
								</Popper>
							</div>
						</div>
					</div>
					<div className="order-history-widard-sec">
						<div className="left-wizard-sec">
							<Wizard 
							// step="1"
							// progress="40"
							step={orderChange.step}
							progress={`${orderChange.progress}`}
							/>
						</div>
						<div className="right-wizard-sec">

						{product.c_order_status === "OP" &&
							<Button
								variant="contained"
								color="primary"
								className="home-title-sectionbtn m-0"
							>
								PAY OUTSTANDING
							</Button>
						}
						{product.c_order_status === "reorder" &&
							<Button
								variant="contained"
								color="primary"
								className="reorder-btn m-0"
							>
								RE-ORDER
							</Button>
						}
						
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
	)
}

export default Products;