import React, {useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import moment from 'moment'

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

import Products from "./Products";

import ProductImg1 from "../../../assets/images/mahaveer.jpg";
import ProductImg2 from "../../../assets/images/seller3.jpg";
import ProductImg3 from "../../../assets/images/seller5.jpg";
import PaymentStatus from "../../../assets/images/payment-status.svg";
import Calendar from "../../../assets/images/calendar-darkgrey.svg"
import RetrivalFilter from "./RetrivalFilter";

import FreqOrder from "./FreqOrder";
//images
import box_to_ListView_Icon from "../../../assets/images/Group_860.svg";
import list_to_boxView_icon from "../../../assets/images/list_to_boxView_icon.svg";

import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import CustomRangeInputs from "./DateRangePicker";
import { DateRange } from "@shinabr2/react-material-daterange-picker";
import { format } from 'date-fns'
import { Constants } from "../../../common/constant/localstorage";
//import { StringifyOptions } from "node:querystring";
//import { StringifyOptions } from "node:querystring";

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	


	
	const classes = useStyles();
	
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
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
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: 500,
		// display: 'flex',
	 //    justifyContent: 'center',
	 //    flexWrap: 'wrap',
	 //    '& > *': {
	 //      margin: theme.spacing(0.5),
	 //    },
	},
}));

const OrderHistoryPage = (props) => {

	const cMobile = localStorage.getItem(Constants.MOBILE_NO)

	  const handleDelete = () => {
	    console.info('You clicked the delete icon.');
	  };

	  const handleClick = () => {
	    console.info('You clicked the Chip.');
	  };

	const {
		orderHistoryIndexResult,
		getAllOrders,
		allOrdersResult,
		getDistributors,
		distributorResult,
		freqorderResponse,
		getmanufacturerResponse,
		FreqorderAction,
		Getmanufactureraction,
		brandsResponse,
		BrandsAction,
		SellersAction,
		sellersResponse
	 } = props;

	 let newDate = new Date()


	 



// console.log(`Now: ${now.format('ll')}`);

// now.add('3', 'days');
// console.log(`Adding three days: ${now.format('ll')}`);

// now.subtract('2', 'years');
// console.log(`Subtracting 2 years: ${now.format('ll')}`);








const indexPayload = orderHistoryIndexResult;
// console.log("allOrdersResult>>>",allOrdersResult);

	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = useState(indexPayload.payload);
	const [dateRange, setDateRange] = useState([new Date(), new Date()]);
	const [clickableName, setClickableName] = useState("")
	const [today, setToday] = useState("")
	const [lastSix, setLastSix] = useState("")

	console.log(today,"<<< Today")
	console.log(lastSix,"<<< lastSix")

	
	


	// const [products, setProducts] = useState([
	// 	allOrdersResult
	// ])
	
	const handleChange = (event, newValue) => {
		// console.log(event,newValue,"newValue")
		setValue(newValue);
		localStorage.setItem("orderhistory" , newValue.toString())
	};
	const [freqitem, setfreqitem] = useState({
			d_from_date: "",
			d_to_date: "",
			ac_seller_code: [],
			c_payment_status: [],
			ac_brand_code: [],
			ac_mgf_code: []
	})
		
	useEffect(() => {
		
	}, [])
		
	useEffect(() => {
		 if(localStorage.getItem("orderhistory") != null){
			//  console.log(localStorage.getItem("orderhistory"),"newValue11")
			//  let a :number = localStorage.getItem("orderhistory")   
			let dataaaa  =   localStorage.getItem("orderhistory") 
			setValue(Number(dataaaa))
		 }else{
			setValue(0)
		 }
		//  props.FreqorderAction(freqitem)
	},[value])

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	const [openRetrival, setOpenRetrival] = useState(false)

	const handleOpenRetrival = () => {
		setOpenRetrival(!openRetrival);
	};

	const [openDateRange, setOpenDateRange] = useState(false)

	const handleOpenDateRange = () => {
		setOpenDateRange(!openDateRange);
	};

	const [buttonRange, setButtonRange] = useState("yy-MM-dd To yy-MM-dd");
	const [inputs, setInputs] = useState({
		c_from_date:"",
		c_to_date:"",
		j_seller_code:[],
		c_payment_status:[],
		n_page:0,
		n_limit:5,
	});
	const handleRange = (dateRange) => {
		
		let startDate = format(dateRange.startDate, 'yyyy-MM-dd');
		let endDate = format(dateRange.endDate, 'yyyy-MM-dd');
		console.log(startDate, "<<< start date")
		console.log(endDate, "<<< end date")
		setButtonRange(`${startDate} To ${endDate}`);
		setOpenDateRange(!openDateRange);
		let data ={
			c_from_date:startDate,
			c_to_date:endDate,
			n_page:0,
			n_limit:15,
			c_mobile_no:cMobile
		}
		// console.log(data,"on handle date change")
		setInputs({...inputs, d_from_date: startDate,d_to_date:endDate})
		getAllOrders(data)   

	}
 

	useEffect(() =>{
		
		let now = moment();
		let tD = now.format("YYYY-MM-DD")
		now.subtract('6', 'months');
		let sM= now.format("YYYY-MM-DD")
		setToday(tD);
		setLastSix(sM);


		const body ={
			c_from_date:sM,
			c_to_date:tD,
			n_page:0,
			n_limit:15,	
			c_mobile_no:cMobile
		}
		getAllOrders(body)
	},[])

	const Refresh =()=>{
		const body ={
			n_page:0,
			n_limit:15,	
			c_mobile_no:cMobile
		}
		getAllOrders(body);
		setOpenRetrival(false);
	}
	const ApplyFilters = (e) =>{
		console.log(e.target.name,"&&&&&&&&&&&&&&&&&&&&&&&&&&&& applyfilters Name")
		console.log(inputs.j_seller_code,"&&&&&& applyfilters Seller code")


		 if(clickableName === "Payments"){
			const body ={
				j_payment_status:[inputs.c_payment_status],
				n_page:0,
				n_limit:15,	
				c_mobile_no:cMobile
			}
			getAllOrders(body)
		}else if(clickableName === "Distributor"){
			const body ={
				c_seller_code:inputs.j_seller_code,
				n_page:0,
				n_limit:15,	
				c_mobile_no:cMobile
			}
			getAllOrders(body)
		}
		
		setOpenRetrival(false);
	}
	const handleRetrivalOptions = (e) =>{
		
		 let {name,value} = e.target
		 setClickableName(name)
		 console.log(name,"JJJJJJJJJJJJJ click name ")
		 if(name =="Payments"){
			// let temp ={};
			// temp.push(value)
			 setInputs({...inputs, c_payment_status: value})

		 }else if(name =="Distributor"){
			const temp =[...inputs.j_seller_code];
			temp.push(value)
			console.log(temp,"JJJJJJJJJJJJJ handleRetrivalOptions ")
			setInputs({...inputs, j_seller_code: temp})
		 }
		//  else{
		//   setInputs({...inputs, : value})
		//  }
	}
	const handleView=(orderId) =>{
		console.log(orderId,"<< eeeeeeeeeeee")
	}

	return(
		<div className="order-history-tab-wrapper">
			<div className="order-history-tab-sec">
				<Container fixed>
					<AppBar position="static" color="default">
						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor="primary"
							textColor="primary"
							aria-label="full width tabs example"
							className="order-history-tab"
						>
							<Tab label="All Orders" {...a11yProps(0)}  key="allorders"/>
							{/* <Tab label="Frequently Ordered/ Smart Order " {...a11yProps(1)}  key="Frequently" /> */}
						</Tabs>
					</AppBar>
				</Container>

				{/* <SwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={value}
					onChangeIndex={handleChangeIndex}
				> */}
					<TabPanel value={value} index={0} dir={theme.direction}>
						<Container fixed>
							<div className="allorders-top-sec">
								<div className="">
									<h3 className="allorders-title">Last 6 Months Orders</h3>
								</div>
								<div className="relative">
									<Button className="retrival-button mt-0 mr-10 toCatp width212" color="primary" aria-controls="fade-menu" aria-haspopup="true" onClick={handleOpenRetrival}>
										<img src={PaymentStatus} alt="PaymentStatus" className="opacity08 mr-10" /> Retrieval Filter/option  
									</Button>
									<RetrivalFilter 
										open={openRetrival}
										handleOpenRetrival={handleOpenRetrival}
										handleRetrivalOptions = {handleRetrivalOptions}
										allOrdersResult={allOrdersResult}
										ApplyFilters ={ApplyFilters}
										Refresh={Refresh}
									/>
									{/* <Button className="retrival-button mt-0 mr-10" color="primary">
										<img src={Calendar} alt="Calendar" className="mr-10" />
										<DateRangePicker
											onChange={setDateRange}
											value={dateRange}
											className="date-range-button"
										/>
									</Button> */}
									<Button className="retrival-button mt-0 datecolour width212" color="primary" onClick={handleOpenDateRange} >
										<img src={Calendar} alt="Calendar" className="opacity08 mr-10" /> {buttonRange}
									</Button>
									<CustomRangeInputs 
										openDateRange={openDateRange}
										handleOpenDateRange={handleOpenDateRange}
										handleRange={handleRange}
									/>
								</div>
							</div>
							<div className="order-history-filter">
						      {/* <Chip
						        label="Mahaveer Medi-Sales"
						        onClick={handleClick}
						        onDelete={handleDelete}
						        deleteIcon={<CloseIcon />}
						        variant="outlined"
						      />
						       <Chip
						        label="Vardhman Pharma Pvt. Ltd."
						        onClick={handleClick}
						        onDelete={handleDelete}
						        deleteIcon={<CloseIcon />}
						        variant="outlined"
						      /> */}
							  
						      {/* <Chip
						        label="Outstanding"
						        onClick={handleClick}
						        onDelete={handleDelete}
						        deleteIcon={<CloseIcon />}
						        variant="outlined"
						      />
						       <Chip
						       className="clear"
						        label="Clear All"
						        onClick={handleClick}
						      /> */}
							</div>
						</Container>
						{/* {products.map(product => (
							<div key={product.progress} className="order-history-tab-wrapper pb-0">
								<div className="order-history-tab-sec">
									<Container fixed>
										<Products product={product} />
									</Container>
								</div>
							</div>
						))} */}

					{/*Dynamic array commented by dhana in the use of design on 16/09/2021*/}
						{/*Array.isArray(allOrdersResult.payload) && allOrdersResult.payload.length > 0 &&    (allOrdersResult.payload).map(product => (*/}
						 {Array.isArray(allOrdersResult.payload) && allOrdersResult.payload.length > 0 &&    (allOrdersResult.payload).map((data,index) => (
							<div key={index} className="order-history-tab-wrapper pb-0">
								<div className="order-history-tab-sec">
									<Container fixed>
										<Products product={data} handleView={handleView} />
									</Container>
								</div>
							</div>
						))} 

						
					
					</TabPanel>
					<TabPanel  value={value} index={1} dir={theme.direction}>
						<div className="order-history-tab-wrapper pb-0">
							<div className="order-history-tab-sec">
							<FreqOrder freqorderResponse={freqorderResponse}/>
							</div>
						</div>
					</TabPanel>
				{/* </SwipeableViews> */}
		
			</div>
		</div>
	)
}

export default OrderHistoryPage