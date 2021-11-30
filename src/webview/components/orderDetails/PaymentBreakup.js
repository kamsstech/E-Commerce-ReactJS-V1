import React, { Ref, useState } from 'react';
import { Button } from '@material-ui/core';
import Download from '../../../../src/assets/images/download.svg';
import Printer from '../../../../src/assets/images/printer.svg';
import {useReactToPrint} from "react-to-print";
import Grid from "@material-ui/core/Grid";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import ExcelIcon from "../../../assets/images/excel.svg";
import PdfIcon from "../../../assets/images/pdf.svg";





const PaymentBreakup = (props) => {
	const {componentRef,OrderDetailResult} = props;
	const [open, setOpen] = useState(false);
	const anchorRef = React.useRef(null);

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	  });
	  
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
	return (
		<div className="payment-breakup-sec">
			{/*<Grid container>
				<Grid item xs={3}>
					<h1>Section - 1</h1>
				</Grid>
				<Grid item xs={2}>
					<h1>Section - 2</h1>
				</Grid>
				<Grid item xs={7}>
					<h1>Section - 3</h1>
				</Grid>
			</Grid>*/}
			<div className="layout">
				<div>
					<p>Sub Total Amount</p>
					<p className="prices">₹ {OrderDetailResult.payload.c_subtotal_amount}</p> 
				</div>
				<div>
					<p>Cash Discount</p>
					<p className="prices">₹ {OrderDetailResult.payload.c_cash_discount}</p> 
				</div>
				<div>
					<p>Total GST Amount</p>
					<p className="prices">₹ {OrderDetailResult.payload.c_total_gst_amount}</p> 
				</div>
				<div className="sum-total">
					<p>Total Amount</p>
					<p className="total-amt">₹ {(OrderDetailResult.payload.c_subtotal_amount)+(OrderDetailResult.payload.c_cash_discount)+(OrderDetailResult.payload.c_total_gst_amount)}</p>
				</div>
				<div className="action">
					<div className="download" onClick={handleToggle}>
						<img src={Download} alt="download" className="invoice-download" />
						<div className="invoice-download-collapse-div"> 
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
					<div className="print" onClick={handlePrint}>
						<img src={Printer} alt="printer"/>
					</div>
					
					<Button variant="contained" color="primary" className="pay-outstanding-btn">Pay outstanding</Button>
					
				</div>
			</div>
		</div>

	)
}
export default PaymentBreakup;