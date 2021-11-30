import React,{useState}  from 'react'
import { Table, TableRow, TableCell, Divider, MenuItem, Button, TableBody, TableHead } from '@material-ui/core';
// import Pagination from '@material-ui/lab/Pagination';
import { usePagination } from '@material-ui/lab/Pagination';

import "./css/onePharama.css";
import Container from "@material-ui/core/Container";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';

import Select from '@material-ui/core/Select';


import Calendar from "../../../assets/images/calendar-darkgrey.svg"
import searchimg from "../../../assets/images/search.svg";
import downloadedImg from "../../../assets/images/icons/downloaded-csv.svg";
import downloadImg from "../../../assets/images/icons/download-csv.svg";
import RetrivalFilter from "./RetrivalFilter";


import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import CustomRangeInputs from "./DateRangePicker";
import { DateRange } from "@shinabr2/react-material-daterange-picker";
import { format } from 'date-fns'

const OnePharama =(props)=>{
    const { items } = usePagination({
        count: 5,
    });

    const [filterBy, setFilterBy] = React.useState(1);
    const handleChangenew = (event) => {
        const {
            target: { value },
        } = event;
        setFilterBy(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const [buttonRange, setButtonRange] = useState("dd/mm/yy To dd/mm/yy");
    const [inputs, setInputs] = useState({
        d_from_date:"",
        d_to_date:"",
        ac_seller_code:[],
        c_payment_status:"",
        ac_brand_code:[],
        ac_mgf_code:[],
    });

    const [openDateRange, setOpenDateRange] = useState(false)

    const handleOpenDateRange = () => {
        setOpenDateRange(!openDateRange);
    };

    const handleRange = (dateRange) => {
        
        let startDate = format(dateRange.startDate, 'MM/dd/yy');
        let endDate = format(dateRange.endDate, 'MM/dd/yy');

        setButtonRange(`${startDate} To ${endDate}`);
        setOpenDateRange(!openDateRange);
        let data ={
            d_from_date:startDate,
            d_to_date:endDate,
            ac_seller_code:[],
            c_payment_status:"",
            ac_brand_code:[],
            ac_mgf_code:[],
        }
        setInputs({...inputs, d_from_date: startDate,d_to_date:endDate})

    }

    const [openRetrival, setOpenRetrival] = useState(false)

    const handleOpenRetrival = () => {
        setOpenRetrival(!openRetrival);
    };
    const handleRetrivalOptions = (e) =>{
         let {name,value} = e.target
         if(e.target.name =="Payments"){
             setInputs({...inputs, c_payment_status: value})
         }
    }
    const ApplyFilters = () =>{
        setOpenRetrival(false);
    }
	return(
	<>
    {/*mr-t-16*/}
    <div className="onePharama dSNull">
        <Container fixed className="headSection">
            <Grid item xs={12}>
                <h1>CSV Invoice </h1>
                <p>Download order invoice in CSV Format</p>
            </Grid>
        </Container>
        <Container fixed>
            <div className="allorders-top-sec pd-b-12 mr-t-16">
                <Grid container>
                    <Grid item xs={6}>
                        <Box className="flexRow" display="flex" flexDirection="row">
                            <Box>
                                <Button disabled className="mr-r-8" color="primary">Show</Button>
                                <Select
                                    menuPlacement="auto"
                                    menuPosition="fixed"
                                    className="width72 filterBy"
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    value={filterBy}
                                    variant="outlined"
                                    onChange={handleChangenew}
                                    >
                                    <MenuItem value="1">05</MenuItem>
                                    <MenuItem value="2">10</MenuItem>
                                    <MenuItem value="3">20</MenuItem>
                                    <MenuItem value="4">50</MenuItem>
                                    <MenuItem value="5">100</MenuItem>
                                </Select>
                                <Button disabled className="mr-l-8" color="primary">entries</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="relative text-right">
                            <Button className="retrival-button mt-0 mr-r-12 datecolour width212" color="primary" onClick={handleOpenDateRange} >
                                <img src={Calendar} alt="Calendar" className="opacity08 mr-10" /> {buttonRange}
                            </Button>
                            <CustomRangeInputs 
                                openDateRange={openDateRange}
                                handleOpenDateRange={handleOpenDateRange}
                                handleRange={handleRange}
                            />

                            <TextField
                                margin="normal"
                                variant="outlined"
                                placeholder="Search seller name/invoice no."
                                className="serachSellerInput mr-t-0 width256 searchbox"
                                InputProps={
                                    {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                              <img src={searchimg} alt="searchimg" />
                                            </InputAdornment>
                                        ),
                                    }
                                }
                           />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>
        <Container fixed>
            <hr className="MuiDivider-root blue-divider"></hr>
            <div>
                <Table>
                    <TableHead>
                        <TableRow className="head noBorder">
                            <TableCell>Sr No.</TableCell>
                            <TableCell>Seller Name</TableCell>
                            <TableCell>Invoice Number</TableCell>
                            <TableCell>Invoiced Date</TableCell>
                            <TableCell>Item Count</TableCell>
                            <TableCell>Total Invoice Amt.</TableCell>
                            <TableCell className="text-center">Download CSV</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className="tBody">01</TableCell>
                            <TableCell className="tBody">Mahaveer Medi-Sales</TableCell>
                            <TableCell className="tBody">19000730064</TableCell>
                            <TableCell className="tBody">01/Sep/2021</TableCell>
                            <TableCell className="tBody">32</TableCell>
                            <TableCell className="tBody">₹ 11,445.00</TableCell>
                            <TableCell className="tBody text-center">
                                <div className="setPriority cursor">
                                    <img className="opacity0_5" src={downloadImg} />
                                </div> 
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tBody">02</TableCell>
                            <TableCell className="tBody">Raj-Sons Pharma</TableCell>
                            <TableCell className="tBody">200007300166</TableCell>
                            <TableCell className="tBody">01/Sep/2021</TableCell>
                            <TableCell className="tBody">23</TableCell>
                            <TableCell className="tBody">₹ 1,16,673.00</TableCell>
                            <TableCell className="tBody text-center">
                                <div className="setPriority cursor">
                                    <img src={downloadedImg} />
                                </div> 
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tBody">03</TableCell>
                            <TableCell className="tBody">RCM Pharma</TableCell>
                            <TableCell className="tBody">200007300168</TableCell>
                            <TableCell className="tBody">01/Sep/2021</TableCell>
                            <TableCell className="tBody">15</TableCell>
                            <TableCell className="tBody">₹ 11,445.00</TableCell>
                            <TableCell className="tBody text-center">
                                <div className="setPriority cursor">
                                    <img src={downloadedImg} />
                                </div> 
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tBody">04</TableCell>
                            <TableCell className="tBody">Ganesh Pharma</TableCell>
                            <TableCell className="tBody">200007300169</TableCell>
                            <TableCell className="tBody">01/Sep/2021</TableCell>
                            <TableCell className="tBody">35</TableCell>
                            <TableCell className="tBody">₹ 10,989.00</TableCell>
                            <TableCell className="tBody text-center">
                                <div className="setPriority cursor">
                                    <img src={downloadedImg} />
                                </div> 
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tBody">05</TableCell>
                            <TableCell className="tBody">Maruti &amp; Company</TableCell>
                            <TableCell className="tBody">200007300171</TableCell>
                            <TableCell className="tBody">01/Sep/2021</TableCell>
                            <TableCell className="tBody">23</TableCell>
                            <TableCell className="tBody">₹ 17,905.00</TableCell>
                            <TableCell className="tBody text-center">
                                <div className="setPriority cursor">
                                    <img src={downloadedImg} />
                                </div> 
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </Container>
        <Container fixed className="paginate">
            <Grid container className="mr-t-24">
                <Grid item xs={8}>
                    <p>Showing 1 to 5 of 13 entries</p>
                </Grid>
                <Grid item xs={4}>
                    <nav className="text-right">
                        <ul className="pagination">
                            {
                                items.map(({ page, type, selected, ...item }, index) => {
                                    let children = null;
                                    if (type === 'start-ellipsis' || type === 'end-ellipsis') 
                                    {
                                        children = '…';
                                    } 
                                    else if (type === 'page') 
                                    {
                                       children = (
                                           <button type="button" className={`${selected ? 'current' : ''}`}  {...item}>
                                                {page}
                                            </button>
                                        );
                                    } 
                                    else 
                                    {
                                        children = (
                                            <button type="button" {...item}>
                                                {type}
                                            </button>
                                        );
                                    }
                                    return <li key={index}>{children}</li>;
                                })
                            }
                      </ul>
                    </nav>
                </Grid>
            </Grid>
        </Container>
    </div>
	</>
	)
}

export default OnePharama

// style={{ fontWeight: selected ? 'bold' : undefined }}