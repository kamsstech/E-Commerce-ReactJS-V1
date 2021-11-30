import React, { useState, useEffect } from "react";
// import './css/orderToSellerShopMapped.css';
import {
	OutlinedInput,
	MenuItem,
	Checkbox,
	ListItemText,
	Table,
	TableRow,
	TableCell,
	Divider,
	Button,
	TableBody,
	TableHead
} from "@material-ui/core";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";

import InputAdornment from "@material-ui/core/InputAdornment";
import PaymentStatus from "../../../../assets/images/payment-status.svg";
import searchimg from "../../../../assets/images/search.svg";

import ItemMasterUnMappedList from "./itemMasterUnMappedList";
import ItemMasterMappedList from "./itemMasterMappedList";
import ItemMasterOwnItemsList from "./itemMasterOwnItemsList";
import ItemMasterBlockedList from "./itemMasterBlockedList";
import { Constants } from "../../../../common/constant/localstorage";

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`
	};
}
const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: 500
	},
	customWidth: {
		"& div": {
			width: "212px"
		}
	}
}));

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

const ItemMasterMapping = (props) => {
	const {
		GetItemMasterMapCount,
		itemMasterMapCountResult,
		GetItemMasterMap,
		itemMasterMapResult,
		MoveOwnItemMasterMap,
		ownItemMasterMapResult,
		MoveBlockItemMasterMap,
		blockItemMasterMapResult,
		MoveConfirmItemMasterMap,
		confirmItemMasterMapResult,
		MoveOwnAllItemMasterMap,
		ownAllItemMasterMapResult,
		DeleteItemMasterMap,
		deleteItemMasterMapResult,
		SearchByProduct,
		searchByProductResult,
	} = props;
	const [filterBy, setFilterBy] = React.useState(1);
	const [checkCount, setCheckCount] = useState(0);
	const [listValue, setListValue] = useState(1);
	const [arrayJson, setarrayJson] = useState([]);
	const [page, setPage] = useState(0);
	const [loadStatus, setloadStatus] = useState(false);
	const [pageNumber, setPageNumber] = useState(0);
	const [totalList, setTotalList] = useState(0);
	const [totalLimit, setLimitTotal] = useState(10);
	const [totalOffset, settotalOffset] = useState(0);
	const [notFound, setNotFound] = useState(false);

	const limit = 10;
	const handleChange = (event, newValue) => {
		setPage(0);
		setValue(newValue);
		setListValue(newValue + 1);
		itemMasterMapResult.payload.data=[]
	};

	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = useState(0);
	const [isCheck, setIsCheck] = useState([]);
	const [isCheckAll, setIsCheckAll] = useState(false);
	const c2code = localStorage.getItem(Constants.C2_CODE);
	const body1 = { c_c2code: c2code };

	const body2 = { c_c2code: c2code, c_list_type: 1, n_page: 0, n_limit: limit };
	const handleOwnAllClick = (e, checkall, checklist) => {
		if (checkall == true) {
			if (checklist.length > 0) {
				ownItemMasterMapResult.statuscode = "";
				MoveOwnAllItemMasterMap(body1);
			}
		} else if (checkall == false) {
			if (checklist.length > 0) {
				ownAllItemMasterMapResult.statuscode = "";
				const body = { c_c2code: c2code, j_item_codes: checklist };
				MoveOwnItemMasterMap(body);
			}
		}
	};

	useEffect(() => {
		setCheckCount(0);
		setIsCheck([])
		if (
			ownItemMasterMapResult.statuscode === 0 ||
			ownAllItemMasterMapResult.statuscode === 0
		) {
			setPage(0);
			itemMasterMapResult.payload.data=[]
			setarrayJson([]);
			GetItemMasterMapCount(body1);
			GetItemMasterMap(body2);
			ownItemMasterMapResult.statuscode = "";
			ownAllItemMasterMapResult.statuscode = "";
		}
	}, [ownItemMasterMapResult, ownAllItemMasterMapResult]);
	return (
		<div>
			<div className="order-history-tab-sec itemMasterMapping">
				<div className="flexDisplay order-to-seller">
					<div className="search-ots-sec">
						<div className="odersellerListhead">Item Master Mapping</div>
						<div className="flex-row">
							<div className="relative">
								<div className="itemSelected">
									{checkCount > 0 ? (
										<p>
											Item Selected: <span>{checkCount}</span>
										</p>
									) : (
										""
									)}
								</div>
								<Button
									variant="contained"
									className="allSelectedBtn"
									color="primary"
									onClick={(e) => handleOwnAllClick(e, isCheckAll, isCheck)}
									disabled={checkCount > 0 ? "" : "disabled"}
								>
									All Selected OwnItems
								</Button>
							</div>
						</div>
					</div>
				</div>

				<Container fixed>
					<AppBar position="static" color="default">
						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor="primary"
							textColor="primary"
							aria-label="full width tabs example"
							className="order-history-tab custom-ors-tab"
						>
							<Tab label="UnMapped List" {...a11yProps(0)} />
							<Tab label="Mapped List" {...a11yProps(1)} />
							<Tab label="OwnItems List" {...a11yProps(2)} />
							<Tab label="Blocked List" {...a11yProps(3)} />
						</Tabs>
					</AppBar>
				</Container>

				<TabPanel value={value} index={0} dir={theme.direction}>
					<Container fixed>
						<ItemMasterUnMappedList
							c2code={c2code}
							page={page}
							setPage={setPage}
							loadStatus={loadStatus}
							setloadStatus={setloadStatus}
							pageNumber={pageNumber}
							setPageNumber={setPageNumber}
							totalList={totalList}
							setTotalList={setTotalList}
							totalLimit={totalLimit}
							setLimitTotal={setLimitTotal}
							totalOffset={totalOffset}
							settotalOffset={settotalOffset}
							limit={limit}
							isCheck={isCheck}
							setIsCheck={setIsCheck}
							isCheckAll={isCheckAll}
							setIsCheckAll={setIsCheckAll}
							arrayJson={arrayJson}
							setarrayJson={setarrayJson}
							checkCount={checkCount}
							setCheckCount={setCheckCount}
							notFound={notFound}
							setNotFound={setNotFound}
							GetItemMasterMapCount={GetItemMasterMapCount}
							itemMasterMapCountResult={itemMasterMapCountResult}
							GetItemMasterMap={GetItemMasterMap}
							itemMasterMapResult={itemMasterMapResult}
							MoveOwnItemMasterMap={MoveOwnItemMasterMap}
							ownItemMasterMapResult={ownItemMasterMapResult}
							MoveBlockItemMasterMap={MoveBlockItemMasterMap}
							blockItemMasterMapResult={blockItemMasterMapResult}
							MoveConfirmItemMasterMap={MoveConfirmItemMasterMap}
							confirmItemMasterMapResult={confirmItemMasterMapResult}
							SearchByProduct={SearchByProduct}
							searchByProductResult={searchByProductResult}
						/>
					</Container>
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<Container fixed>
						<ItemMasterMappedList
							c2code={c2code}
							arrayJson={arrayJson}
							setarrayJson={setarrayJson}
							page={page}
							setPage={setPage}
							loadStatus={loadStatus}
							setloadStatus={setloadStatus}
							pageNumber={pageNumber}
							setPageNumber={setPageNumber}
							totalList={totalList}
							setTotalList={setTotalList}
							totalLimit={totalLimit}
							setLimitTotal={setLimitTotal}
							totalOffset={totalOffset}
							settotalOffset={settotalOffset}
							limit={limit}
							notFound={notFound}
							setNotFound={setNotFound}
							GetItemMasterMapCount={GetItemMasterMapCount}
							itemMasterMapCountResult={itemMasterMapCountResult}
							GetItemMasterMap={GetItemMasterMap}
							itemMasterMapResult={itemMasterMapResult}
							DeleteItemMasterMap={DeleteItemMasterMap}
							deleteItemMasterMapResult={deleteItemMasterMapResult}
						/>
					</Container>
				</TabPanel>
				<TabPanel value={value} index={2} dir={theme.direction}>
					<Container fixed>
						<ItemMasterOwnItemsList
							c2code={c2code}
							arrayJson={arrayJson}
							setarrayJson={setarrayJson}
							page={page}
							setPage={setPage}
							loadStatus={loadStatus}
							setloadStatus={setloadStatus}
							pageNumber={pageNumber}
							setPageNumber={setPageNumber}
							totalList={totalList}
							setTotalList={setTotalList}
							totalLimit={totalLimit}
							setLimitTotal={setLimitTotal}
							totalOffset={totalOffset}
							settotalOffset={settotalOffset}
							limit={limit}
							notFound={notFound}
							setNotFound={setNotFound}
							GetItemMasterMapCount={GetItemMasterMapCount}
							itemMasterMapCountResult={itemMasterMapCountResult}
							GetItemMasterMap={GetItemMasterMap}
							itemMasterMapResult={itemMasterMapResult}
							MoveBlockItemMasterMap={MoveBlockItemMasterMap}
							blockItemMasterMapResult={blockItemMasterMapResult}
							MoveConfirmItemMasterMap={MoveConfirmItemMasterMap}
							confirmItemMasterMapResult={confirmItemMasterMapResult}
							SearchByProduct={SearchByProduct}
							searchByProductResult={searchByProductResult}
						/>
					</Container>
				</TabPanel>
				<TabPanel value={value} index={3} dir={theme.direction}>
					<Container fixed>
						<ItemMasterBlockedList
							c2code={c2code}
							arrayJson={arrayJson}
							setarrayJson={setarrayJson}
							page={page}
							setPage={setPage}
							loadStatus={loadStatus}
							setloadStatus={setloadStatus}
							pageNumber={pageNumber}
							setPageNumber={setPageNumber}
							totalList={totalList}
							setTotalList={setTotalList}
							totalLimit={totalLimit}
							setLimitTotal={setLimitTotal}
							totalOffset={totalOffset}
							settotalOffset={settotalOffset}
							limit={limit}
							notFound={notFound}
							setNotFound={setNotFound}
							GetItemMasterMapCount={GetItemMasterMapCount}
							itemMasterMapCountResult={itemMasterMapCountResult}
							GetItemMasterMap={GetItemMasterMap}
							itemMasterMapResult={itemMasterMapResult}
							DeleteItemMasterMap={DeleteItemMasterMap}
							deleteItemMasterMapResult={deleteItemMasterMapResult}
						/>
					</Container>
				</TabPanel>
			</div>
		</div>
	);
};

export default ItemMasterMapping;
