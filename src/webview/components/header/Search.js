import React, { useState, useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import SearchWhite from "../../../assets/images/search-white.svg";
import Scan from "../../../assets/images/scan.svg";
import List from "../../../assets/images/list.svg";
import SearchByProductResult from "./SearchByProductResult";
import SearchBySellerResult from "./SearchBySellerResult";
import SearchByMoleculesResult from "./SearchByMoleculesResult";
import SearchByMFCResult from "./SearchByMFCResult";
import SearchByList from "./SearchByList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { search } from "../../../common/action";
import DeviceNotConnected from "../home/DeviceNotConnected";
import { Constants } from "../../../common/constant/localstorage";
import { useHistory } from "react-router-dom";
import ScanProduct from "../home/ScanPopup";
import ScanNow from "../home/ScanNow";



const useStyles = makeStyles((theme) =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
		dropdownStyle: {
			borderRadius: "6px",
			backgroundColor: "#fff",
			width: "10em",
			marginTop: "3.1em",
		},
	})
);
const Search = (props) => {
	let history = useHistory();
	const classes = useStyles();
	const {
		SearchByProduct,
		searchByProductResult,
		SearchBySeller,
		searchBySellerResult,
		SearchByMolecule,
		searchByMoleculeResult,
		SearchByMfc,
		searchByMfcResult,
		br_code,
		GetPdpPageItems,
		GetPdpPageSellerDetails,
		pdpPageItemsResult,
		pdpPageSellerDetailsResult,
		AddToCartAction,
		addToCartResult,
		CartCount
	} = props;
	

	const [searchby, setSearchby] = useState("products");
	const [searchKey, setSearchKey] = useState("");
	const [toggleList, setToggleList] = useState(false);
	const [searchList, setSearchList] = useState(false);
	const [scan, setScan] = useState(false);

	const [click, setClick] = useState(false);
	const [openSearchModal, setSearchOpenModal] = useState(false);

	const handleSearchby = (event) => {
		// setClick(true);
		// setSearchKey("");
		setSearchby(event.target.value);
	};

	const handleSearch = (event) => {
		
		if (event.target.value === " ") {
			event.preventDefault();
		}else{
			setSearchKey(event.target.value);
			
		}
		// setClick(false)

		// console.log(event.target.value,"TYPING word")
	};

	// console.log(click,"<<< Click ACtion")
	
	useEffect(() => {
		// setClick(true);
		
		if (searchKey.length >= 3) {
			setSearchList(true)
			if (searchby === "products") {
				// const search_type= "1";
				const body = {
					n_page: 0,
					n_limit: 15,
					c_search_term: searchKey,
				};
				SearchByProduct(body);
			} else if (searchby === "seller") {
				// const search_type= "1";

				const body = {
					n_page: 0,
					n_limit: 15,
					c_search_term: searchKey,
				};

				SearchBySeller(body);
			} else if (searchby === "molecules") {
				// const search_type= "1";
				const body = {
					n_page: 0,
					n_limit: 15,
					c_search_term: searchKey,
				};
				SearchByMolecule(body);
			} else if (searchby === "manufacturer") {
				// const search_type= "1";
				const body = {
					n_page: 0,
					n_limit: 15,
					c_search_term: searchKey,
				};
				SearchByMfc(body);
			}
		}
		// setSearchKey('')
	}, [searchKey, searchby]);
const toggleClick=()=>{
	// setSearchKey("")
	setToggleList(!toggleList)
}
const toggleScanClick=()=>{
	// setSearchKey("");
	setScan(!scan)
}

	useEffect(() => {
		if (searchKey.length < 1) {
			if (searchby === "products") {
				const search_type = "2";
				// SearchByProduct(searchKey,search_type);
			} else if (searchby === "seller") {
				const search_type = "2";
				SearchBySeller(searchKey, search_type);
			} else if (searchby === "molecules") {
				const search_type = "2";
				SearchByMolecule(searchKey, search_type);
			} else if (searchby === "manufacturer") {
				const search_type = "2";
				SearchByMfc(searchKey, search_type);
			}
		}
		// setSearchKey('')
	}, [searchby, click, searchKey === ""]);


	const closeModal = () => {
		setScan(!scan);
	};

	const clickChange = (e) => {
		// console.log(e.target.value,"Enter value")
		if (e.target.value === "") {
			setClick(true);
		}
	};
	const deleteSearch = () => {
		// console.log("cleared all");
		setClick(false);
	};
	const handleEnter =(e)=>{
		e.preventDefault();
		let listInArr = [];
		let splitInput = searchKey.split(",");
		if (splitInput != "") {
			for (let j = 0; j < splitInput.length; j++) {
				if (splitInput[j] != "") {
					listInArr.push(splitInput[j].trim());
				}
			}
		}
		let joinInput = "";
		if (listInArr != "") {
			joinInput = listInArr.join(",");
			localStorage.setItem(Constants.LIST_SEARCH_KEY, joinInput);
			let zeroIndex = listInArr[0];
			if (searchby === "products") {
				history.push(`/plp/search?index=0&q=${zeroIndex}&t=1`);
			} else if (searchby === "seller") {
				history.push(`/plp/seller?index=0&n=${zeroIndex}&t=2`);
			} else if (searchby === "molecules") {
				history.push(`/plp/search?index=0&q=${zeroIndex}&t=3`);
			} else if (searchby === "manufacturer") {
				history.push(`/plp/mfg?index=0&n=${zeroIndex}&t=4`);
			}
		}
		setSearchKey('')
	}



	const handleSearchSubmit = (e) => {
		e.preventDefault();
		let listInArr = [];
		let splitInput = searchKey.split(",");
		if (splitInput != "") {
			for (let j = 0; j < splitInput.length; j++) {
				if (splitInput[j] != "") {
					listInArr.push(splitInput[j].trim());
				}
			}
		}
		let joinInput = "";
		if (listInArr != "") {
			joinInput = listInArr.join(",");
			localStorage.setItem(Constants.LIST_SEARCH_KEY, joinInput);
			let zeroIndex = listInArr[0];
			if (searchby === "products") {
				history.push(`/plp/search?index=0&q=${zeroIndex}&t=1`);
			} else if (searchby === "seller") {
				history.push(`/plp/seller?index=0&n=${zeroIndex}&t=2`);
			} else if (searchby === "molecules") {
				history.push(`/plp/search?index=0&q=${zeroIndex}&t=3`);
			} else if (searchby === "manufacturer") {
				history.push(`/plp/mfg?index=0&n=${zeroIndex}&t=4`);
			}
		}
		setSearchKey('')
	};

	const searchOnClick=()=>{
		// setSearchList(!searchList)
		setSearchList(true)
		// setClick(true);
		
	}

	// console.log(searchList," SEARCH List")





	return (
		<div className="relative">
			<FormControl variant="outlined" className="web-header-search">
				<OutlinedInput
					id="search"
					placeholder={`Search ${searchby} here`}
					onKeyPress={(e) => e.key === 'Enter' && handleEnter(e)}
					// onClick={(e) => clickChange(e)}
					// onClick={(e) => handleSearchSubmit(e)}
					
					// setSearchKey("")
							// setSearchList(false)
							// setSearchKey("")
					onBlur={() => {
						setTimeout(() => {
							
							setSearchKey(searchKey);
							
						}, 500);
					 }}
					 onClick={searchOnClick}
					autoComplete="off"
					value={searchKey}
					onChange={(e) => handleSearch(e)}
					endAdornment={
						<InputAdornment position="end">
							{/* <img src={List} alt="list" onClick={()=>setToggleList(!toggleList)} className="mr-16 cursor" />
							<img src={Scan} alt="scan"  onClick={()=>setScan(!scan)} className="scan-img cursor" /> */}
							<div className="muiSearch">
								<div className="muiSearchWithList">
									<img
										src={List}
										alt="list"
										onClick={toggleClick}
										className="mr-16 cursor"
									/>
								</div>
								{/* <div className="muiSearchWithList">
									<img
										src={Scan}
										alt="scan"
										onClick={toggleScanClick }
										className="scan-img cursor"
									/>
								</div> */}
							</div>

							<FormControl variant="outlined">
								<Select
									id="demo-simple-select-outlined"
									value={searchby}
									onChange={handleSearchby}
									
									className="web-header-searchselect"
									MenuProps={{
										classes: { paper: classes.dropdownStyle },
									}}
								>
									<MenuItem value="products">Products</MenuItem>
								</Select>
							</FormControl>
							<Button
								variant="contained"
								color="secondary"
								className="web-header-searchbtn"
								onClick={(e) => handleSearchSubmit(e)}
							>
								<img src={SearchWhite} alt="SearchWhite" />
								{/* Search */}
							</Button>
						</InputAdornment>
					}
					aria-describedby="outlined-weight-helper-text"
					inputProps={{
						"aria-label": "weight",
					}}
					labelWidth={0}
				/>
			</FormControl>

			{toggleList && (
				<ClickAwayListener onClickAway={() => setToggleList(false)}>
					<div className="web-search-result">
						<div className="thin-scroll height-30em">
							<SearchByList handleClose={() => setToggleList(false)} />
						</div>
					</div>
				</ClickAwayListener>
			)}


			{(searchKey.length >= 3 ) &&  (
				<>
					{searchby === "products" && searchList &&
					props.searchByProductResult !== undefined ?  (
						<ClickAwayListener onClickAway={() => setSearchList(false)}>
							<div className="web-search-result">
							<div className="thin-scroll height-30em">
								<SearchByProductResult
									br_code = {br_code}
									pdpPageItemsResult = { pdpPageItemsResult }
									pdpPageSellerDetailsResult = { pdpPageSellerDetailsResult }
									AddToCartAction = { AddToCartAction }
									addToCartResult = { addToCartResult }
									CartCount={CartCount}
									GetPdpPageItems={GetPdpPageItems}
									GetPdpPageSellerDetails={GetPdpPageSellerDetails}
									click={click}
									deleteSearch={deleteSearch}
									searchKey={searchKey}
									setSearchKey={setSearchKey}
									searchByProductResult={searchByProductResult}
									setSearchList={setSearchList}
								/>
							</div>
						</div>

						
						</ClickAwayListener>
						
					) : 
					(null)
					}
					{searchby === "seller" &&  searchList && props.searchBySellerResult !== undefined ? (
						 <ClickAwayListener onClickAway={() => setSearchList(false)}>
							 <div className="web-search-result">
							<div className="thin-scroll height-30em">
								<SearchBySellerResult
									GetPdpPageItems={GetPdpPageItems}
									GetPdpPageSellerDetails={GetPdpPageSellerDetails}
									click={click}
									deleteSearch={deleteSearch}
									searchKey={searchKey}
									searchBySellerResult={searchBySellerResult}
									setSearchList={setSearchList}
								/>
							</div>
						</div>
						 </ClickAwayListener>
						
					) : null}
					{searchby === "molecules" && searchList && (
						 <ClickAwayListener onClickAway={() => setSearchList(false)}>
							 <div className="web-search-result">
							<div className="thin-scroll height-30em">
								<SearchByMoleculesResult
									GetPdpPageItems={GetPdpPageItems}
									GetPdpPageSellerDetails={GetPdpPageSellerDetails}
									click={click}
									deleteSearch={deleteSearch}
									searchKey={searchKey}
									searchByMoleculeResult={searchByMoleculeResult}
									setSearchList={setSearchList}
								/>
							</div>
						</div>
						 </ClickAwayListener>
						
					)}
					{searchby === "manufacturer" && searchList && (
						 <ClickAwayListener onClickAway={() => setSearchList(false)}>
							 <div className="web-search-result">
							<div className="thin-scroll height-30em">
								<SearchByMFCResult
									GetPdpPageItems={GetPdpPageItems}
									GetPdpPageSellerDetails={GetPdpPageSellerDetails}
									click={click}
									deleteSearch={deleteSearch}
									searchKey={searchKey}
									searchByMfcResult={searchByMfcResult}
									setSearchList={setSearchList}
								/>
							</div>
						</div>
						 </ClickAwayListener>
						
					)}
				</>
			)}
			{/* <DeviceNotConnected openModal={scan} closeModal={closeModal} /> */}
			{/* <ScanProduct openModal={scan} closeModal={closeModal} /> */}
			{/* <ScanNow openModal={scan} closeModal={closeModal} /> */}
		</div>
	);
};

export default Search;
