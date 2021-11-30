import React from "react";
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Distributor from "../../../assets/images/distributor-darkgrey.svg"
import PaymentStatus from "../../../assets/images/payment-status.svg"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import RefreshIcon from "../../../assets/images/refresh.svg";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		height: 244,
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
}));


const RetrivalFilter = (props) => {
	const {open,allOrdersResult, handleOpenRetrival,handleRetrivalOptions,ApplyFilters,Refresh} = props;

	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	// console.log(allOrdersResult.payload, "<<<< allOrdersResult")
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	

	const paymentStatus = [
		{
			data:"Outstanding",
			value:"N",
		},{
			data:"Settled",
			value:"Y",
		}
	]

	return(
		<>
		{open &&
			<ClickAwayListener onClickAway={handleOpenRetrival}>
			<div className="retrival-filter-menu">

				<form onSubmit={(e)=>ApplyFilters(e)} >
				

				<div>
				<div className={classes.root}>
					<Tabs
						orientation="vertical"
						variant="scrollable"
						value={value}
						onChange={handleChange}
						aria-label="Vertical tabs example"
						className={classes.tabs}
					>
						<Tab label={<><img src={Distributor} alt="Distributor"  />Sellers</>} {...a11yProps(0)} />
						<Tab label={<><img src={PaymentStatus} alt="PaymentStatus" />Payment Status</>} {...a11yProps(1)} />
					</Tabs>
					<TabPanel value={value} index={0}>
						<div className="retrive-right-sec">
							<div className="retrive-right-sec-title">
								<h5>Retrieve By Sellers</h5>
								<img src={RefreshIcon} onClick={Refresh} alt="RefreshIcon" className="handCursur refresh-icon" />
							</div>
							{/* {allOrdersResult.payload && allOrdersResult.payload.length > 0 && allOrdersResult.payload.map((item, index) => ( */}
								{Array.isArray(allOrdersResult.payload) && allOrdersResult.payload.length > 0 &&    (allOrdersResult.payload).map((item,index) => (
									
								<div>
									<FormControlLabel
										key={index}
										control={
											<Checkbox
												name="Distributor"
												value={item.c_seller_code}
												icon={<CheckBoxOutlineBlankIcon name="Distributor" fontSize="small" />}
												checkedIcon={<CheckBoxIcon name="Distributor" fontSize="small" />}
												// checked={index===0 ? true:false}
												color="primary"
												className="adduser-checkbox-icon"
												onClick ={(e) =>{handleRetrivalOptions(e)}}
											/>
										}
										label={item.c_seller_name}
										className="adduser-checkbox"
									/>
								</div>
							))}
						</div>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<div className="retrive-right-sec">
							<div className="retrive-right-sec-title">
								<h5>Retrieve By Payment Status</h5>
								<img src={RefreshIcon} onClick={Refresh} alt="RefreshIcon" className="handCursur refresh-icon"  />
							</div>
							{paymentStatus.map((item, index) => (
								<div>
									<FormControlLabel
										key={index}
										
										control={
											<Checkbox
												name="Payments"
												id="Payments"
												icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
												checkedIcon={<CheckBoxIcon  fontSize="small" />}
											 	// checked={index===0 ? true:false}
												color="primary"
												value={item.value}
												className="adduser-checkbox-icon"
												onClick ={(e) =>{handleRetrivalOptions(e)}}
											/>
										}
										label={item.data}
										className="adduser-checkbox"
									/>
							</div>
							))}
						</div>
					</TabPanel>
					
				</div>
				<button type="submit"  className="apply-status"> Apply Filters</button>	
					
					</div>				
					</form>

				
			</div>
			</ClickAwayListener>
		}
		</>
	)
}

export default RetrivalFilter;