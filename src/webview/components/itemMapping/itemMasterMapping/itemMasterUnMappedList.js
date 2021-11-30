import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import {
	Table,
	TableRow,
	TableCell,
	Divider,
	Button,
	TableBody,
	TableHead,
	Checkbox
} from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import searchImg from "../../../../assets/images/icons/search-icon-grey.svg";
import CircularProgress from "@material-ui/core/CircularProgress";

const ItemMasterUnMappedList = (props) => {
	const {
		c2code,
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
		isCheck,
		setIsCheck,
		isCheckAll,
		setIsCheckAll,
		arrayJson,
		setarrayJson,
		setCheckCount,
		checkCount,
		page,
		setPage,
		loadStatus,
		setloadStatus,
		pageNumber,
		setPageNumber,
		totalList,
		setTotalList,
		totalLimit,
		setLimitTotal,
		totalOffset,
		settotalOffset,
		limit,
		notFound,
		setNotFound,
		SearchByProduct,
		searchByProductResult,
	} = props;

	// const exJson={
	//     "data":[{
	//         "c_item_code":"215005",
	//         "c_item_name":"Dolo 650",
	//         "c_packing_size":"10'S",
	//         "c_csquare_item_code":"0001231",
	//         "c_csquare_item_name":"Dolo 650mg Tablet",
	//         "c_csquare_packing_size":"10'S",
	//         },
	//         {
	//         "c_item_code":"215006",
	//         "c_item_name":"ADIZA 10mG",
	//         "c_packing_size":"10'S",
	//         "c_csquare_item_code":"0001431",
	//         "c_csquare_item_name":"ADIZA 10MG TAblet",
	//         "c_csquare_packing_size":"10'S",
	//         }],
	//     "n_next_offset":21,
	//     "n_limit":20,
	//     "n_total":2000
	//   }
	// const c2code=localStorage.getItem(Constants.C2_CODE);
	const [toggles, setToggles] = useState(false);
	const [openInput, setOpenInput] = useState(false);
	const [searchValArray, setSearchValArray] = useState([]);
	const [selectItemcode, setSelectItemCode] = useState("");
	const [searchKey, setSearchKey] = useState("");
	const [resultCount, setresultCount] = useState(0);
	const body1 = { c_c2code: c2code };
	const body2 = { c_c2code: c2code, c_list_type: 1, n_page: 0, n_limit: limit };
	const loader = useRef(null);

	useEffect(() => {
		const body = {
			c_c2code: c2code,
			c_list_type: 1,
			n_page: 0,
			n_limit: limit
		};
		GetItemMasterMap(body);
	}, []);

	const handleLoadMore = (e,nextPage) => { 
		const body = {
			c_c2code: c2code,
			c_list_type: 1,
			n_page: nextPage,
			n_limit: limit
		};
		GetItemMasterMap(body);
	}
	

	useEffect(() => {
		setloadStatus(false);
		if (page === 0) {
			setarrayJson([]);
		}
		if (itemMasterMapResult.statuscode === 0) {
			if(itemMasterMapResult.payload.data.length > 0)
			{
				setarrayJson([...arrayJson, ...itemMasterMapResult.payload?.data]);
				setTotalList(itemMasterMapResult.payload.page.n_total);
				setPage(itemMasterMapResult.payload.page.n_next_page);
				setLimitTotal(arrayJson.length);
				setresultCount(itemMasterMapResult.payload.data.length)
				setloadStatus(true);
				setNotFound(false);
			}
		}
		if(itemMasterMapResult.statuscode === 5) {
			setloadStatus(false);
			setNotFound(true);
		}
		
	}, [itemMasterMapResult]);
	// if (itemMasterMapResult.payload.n_total) {
	// 	setTotalList(itemMasterMapResult.payload.n_total);
	// }

	const handleOwnItemClick = (e, itemcodes) => {
		blockItemMasterMapResult.statuscode = "";
		confirmItemMasterMapResult.statuscode = "";
		const body = { c_c2code: c2code, j_item_codes: [itemcodes] };

		MoveOwnItemMasterMap(body);
	};
	const handleBlockClick = (e, itemcodes) => {
		ownItemMasterMapResult.statuscode = "";
		confirmItemMasterMapResult.statuscode = "";
		const body = { c_c2code: c2code, c_item_code: itemcodes };
		MoveBlockItemMasterMap(body);
	};
	const handleConfirmClick = (e, itemcodes, c2itemcode) => {
		ownItemMasterMapResult.statuscode = "";
		blockItemMasterMapResult.statuscode = "";
		const body = {
			c_c2code: c2code,
			c_item_code: itemcodes,
			c_csquare_item_code: c2itemcode
		};
		MoveConfirmItemMasterMap(body);
	};
	const handleSelectAll = (e) => {
		setIsCheckAll(!isCheckAll);
		setIsCheck(arrayJson.map((li) => li.c_item_code));
		if (isCheckAll) {
			setIsCheck([]);
		}
		if (itemMasterMapCountResult.payload.c_unmapped_count) {
			if (!isCheckAll) {
				setCheckCount(itemMasterMapCountResult.payload.c_unmapped_count);
			} else {
				setCheckCount(0);
			}
		}
	};
	const handleClick = (e) => {
		if (isCheckAll === false) {
			const { id, checked } = e.target;
			setIsCheck([...isCheck, id]);

			if (!checked) {
				setIsCheck(isCheck.filter((item) => item !== id));
				setCheckCount(isCheck.length - 1);
			} else {
				setCheckCount(isCheck.length + 1);
			}

			if (isCheck.length == 0) {
				setIsCheckAll(false);
			}

		}
	};
	useEffect(() => {
		if (
			ownItemMasterMapResult.statuscode === 0 ||
			blockItemMasterMapResult.statuscode === 0 ||
			confirmItemMasterMapResult.statuscode === 0
		) {
			itemMasterMapResult.payload.data=[]
			setarrayJson([]);
			setPage(0);
			GetItemMasterMapCount(body1);
			GetItemMasterMap(body2);
			ownItemMasterMapResult.statuscode = "";
			blockItemMasterMapResult.statuscode = "";
			confirmItemMasterMapResult.statuscode = "";
		}
	}, [
		ownItemMasterMapResult,
		blockItemMasterMapResult,
		confirmItemMasterMapResult
	]);
	const handleOpenClick = (e,itemCode) => { 
		setOpenInput(!openInput)
		setSelectItemCode(itemCode);
		setSearchValArray([])
		setSearchKey("")
	}
	const handleSearch = (event) => {
		let searchVal=event.target.value
		setSearchKey(searchVal);

		if (searchVal === " ") {
			event.preventDefault();
		}else{
			if(searchVal.length > 3)
			{
				const body = {
					n_page: 0,
					n_limit: 10,
					c_search_term: searchVal,
				};
				SearchByProduct(body);
			}
			else
			{
				setToggles(false);
			}
		}
		
	};
	useEffect(() => {
		if(searchByProductResult.statuscode === 0)
		{
			setSearchValArray(searchByProductResult.payload);
			setToggles(true);
		}
		else if(searchByProductResult.statuscode === 5)
		{
			setToggles(false);
			setSearchValArray([])
		}
		else if(searchByProductResult.statuscode === 100)
		{
			setToggles(false);
			setSearchValArray([])
		}
	}, [searchByProductResult]);
// console.log(isCheck)
	return (
		<>
			<Grid container className="itemMappingContainer">
				<Grid item xs={6}>
					<div className="itemMappingHead buyerItem mr-b-4">
						<h1>Buyer Item Master</h1>
					</div>
				</Grid>
				<Grid item xs={6}>
					<div className="itemMappingHead csquareItem mr-b-4">
						<h1>C-Square Item Master</h1>
					</div>
				</Grid>

				<Table className="itemMapList itemMapListVTop">
					<TableHead>
						<TableRow className="head noBorder">
							<TableCell width="5%">Sr No.</TableCell>
							<TableCell width="15%">Item Code</TableCell>
							<TableCell width="20%">
								<Checkbox
									className="itemMapCheckbox"
									color="primary"
									onClick={handleSelectAll}
									checked={isCheckAll}
								/>{" "}
								Product Name{" "}
							</TableCell>
							<TableCell width="10%">Packaging</TableCell>
							<TableCell width="30%">C-Square Product Name</TableCell>
							{/*<TableCell width="20%">Packaging</TableCell>*/}
						</TableRow>
					</TableHead>
					<TableBody>
						{Array.isArray(arrayJson) &&
							arrayJson.length > 0 &&
							arrayJson.map((item, index) => (
								<TableRow>
									<TableCell className="tBody">
										{index + 1 > 9 ? index + 1 : "0" + (index + 1)}
									</TableCell>
									<TableCell className="tBody">{item.c_item_code}</TableCell>
									<TableCell className="tBody">
										<div className="itemNameAttribute">
											<div className="itemName mr-b-12">
												<Checkbox
													className="itemMapCheckbox"
													color="primary"
													id={item.c_item_code}
													onClick={handleClick}
													checked={
														isCheckAll || isCheck.includes(item.c_item_code)
													}
												/>
												{item.c_item_name}
											</div>
											<div className="itemButton">
												<Button
													className="ownItemBtn mr-r-8"
													color="primary"
													onClick={(e) =>
														handleOwnItemClick(e, item.c_item_code)
													}
												>
													OwnItem
												</Button>
												<Button
													className="ownBlockBtn"
													color="primary"
													onClick={(e) => handleBlockClick(e, item.c_item_code)}
												>
													Block
												</Button>
											</div>
										</div>
									</TableCell>
									<TableCell className="tBody">{item.c_packing_size}</TableCell>
									<TableCell className="tBody">
										<div className="itemNameAttribute">
											<div className="itemName mr-b-12">
												{item.c_csquare_item_name}
											</div>
											<div className="itemCSQButton relative itemMappingSearch" 
												onClick={(e) => handleOpenClick(e, item.c_item_code)}
												>
												<Input
													className={`ownSearchBtn customQButton ${
														openInput && selectItemcode == item.c_item_code  ? "active Mui-focused" : ""
													}`}
													onChange={(e) => handleSearch(e)}
													value={selectItemcode === item.c_item_code ?(searchKey):""}
													color="primary"
													startAdornment={
														<InputAdornment position="start">
															<img src={searchImg} alt />
														</InputAdornment>
													}
												/>
												{searchValArray.length > 0 && toggles && selectItemcode == item.c_item_code  && (
													<div>
														<ClickAwayListener
															onClickAway={() => setToggles(false)}
														>
															<div className="itemMapSearchList thin-scroll">
																<div className="search-results">
																	{searchValArray.map((searchitem, searchindex) => (
																	<div className="itemMapSearchListItem">
																		<p className="productName">
																			{searchitem.c_item_name}
																		</p>
																		<p className="productPackSize">
																			Pack Size: {searchitem.c_pack_name}
																		</p>
																		<Button
																			className="confirmIMBtn mr-r-8"
																			color="primary"
																			onClick={(e) => handleConfirmClick(e,item.c_item_code,searchitem.c_item_code)}
																		>
																			Confirm
																		</Button>
																	</div>
																	))}
																</div>
															</div>
														</ClickAwayListener>
													</div>
												)}
											</div>
										</div>
									</TableCell>
									{/*<TableCell className="tBody">{item.c_csquare_packing_size}</TableCell>*/}
								</TableRow>
							))}
					</TableBody>
				</Table>
			</Grid>
			<div className="loading" xs={12}>
					{
						loadStatus === false && notFound === false ? (
							<CircularProgress className="mr-l-12" size={32} thickness={4} />
						 ):""
					}
					{
						loadStatus === true && notFound === false && resultCount >= 10 ? (
						<Button
								variant="contained"
								color="primary"
								className="home-title-sectionbtn"
								onClick={(e) => handleLoadMore(e, page)}
							>
								Load More
						 </Button>):""
					 }
					</div>
		</>
	);
};

export default ItemMasterUnMappedList;
