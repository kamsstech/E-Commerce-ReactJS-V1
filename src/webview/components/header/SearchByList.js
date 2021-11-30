import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../assets/images/cross.svg";
// import history from "../../../history";
import { useHistory } from "react-router-dom";
import { Constants } from "../../../common/constant/localstorage";
const SearchByList = (props) => {
	let history = useHistory();
	const [inputValue, setInputValue] = useState("");
	const [openModal, setOpenModal]= useState(true);

	const closeModal=()=>{
		setOpenModal(false);
	}
	const handleEnter = async(event) => {
		setInputValue(event.target.value);
	}
	const handleChange = (event, index) => {
	  	setInputValue(event.target.value);
	}

	const handleReset = () => {
		setInputValue("");
		props.handleClose()
	}
	const handleSubmit=()=>{
		let normalEnterValue = inputValue.split(/[\n,]+/);

	  	normalEnterValue = normalEnterValue.filter(function (value, index, array) { 
		    return array.indexOf(value) === index;
		});
		let listInArr=[];
		for (let i = 0; i < normalEnterValue.length; i++) 
		{
			if(normalEnterValue[i] !='')
			{
				let finalSearchvalue = normalEnterValue[i].trim().replace(/ +(?= )/g,'');
				if(finalSearchvalue)
				{
					listInArr.push(finalSearchvalue);
				}
			}
		}
		let joinInput='';
		if(listInArr !='')
	    {
	        joinInput=listInArr.join(',');
	        localStorage.setItem(Constants.LIST_SEARCH_KEY, joinInput);
	        let zeroIndex=listInArr[0];
	        history.push(`/plp/search?index=0&q=${zeroIndex}`);
	    }
		props.handleClose()
	}
	return (
		<>   
			<div className="search-by-list-sec">
		{
			openModal && <div className="shop-faster-sec">
			<div className="shop-faster-left-sec">
				<p>Shop faster - type or paste your Medicines/Products List below</p>
			</div>
			<div className="shop-faster-right-sec cursor"
			// onClick={props.handleClose}
			onClick={closeModal}

			>
				<img src={CrossImg} alt="CrossImg" />
			</div>
		</div>
		}



				<form className="dthin-scroll">
					<textarea 
			          onChange={(e) => handleChange(e)}
			          name="searchTerm" 
			          className="list-search-term" 
			          value={inputValue}
			          placeholder="e.g. Dolo 650mg, Telpres ct 40/6.25, Dolo balm">
			          </textarea>
					{/*{inputArr.map((val, index) => (
						<input
							key={index}
							placeholder={index===0 ? "e.g. Dolo 650 mg, Telpres 40 mg, Dolo balm" : ""}
							className="search-by-list-text"
							onChange={(e) => handleChange(e, index)}
							onKeyDown={(e) => handleEnter(e)}
							value={val}
						/>
					))}*/}
				</form>
				{/* <div className="search-by-list-text">
					e.g. Dolo 650 mg, Telpres 40 mg, Dolo balm
				</div>
				<div className="search-by-list-text"></div>
				<div className="search-by-list-text"></div>
				<div className="search-by-list-text"></div>
				<div className="search-by-list-text"></div> */}
				<div className="mt-16">
					<Button
						variant="contained"
						className="feedback-clear-btn search-by-list-btn"
						component="span"
						onClick={handleReset}
					>
						Reset
					</Button>
					<Button
						variant="contained"
						color="primary"
						className="feedback-send-btn search-by-list-searchbtn"
						component="span"
						onClick={handleSubmit}
					>
						Search
					</Button>
				</div>
			</div>
			{/* <div className="web-search-result-list">
				<Link to="/home">
					<div>
						<p className="sponsor-text">Sponsored</p>
						<div className="web-search-sec mb-7">
							<h4 className="web-search-proname">Calpol 500 mg Tablet</h4>
							<h5 className="web-search-pack">Pack Size: 15 tablets</h5>
						</div>
						<div className="web-search-sec">
							<h5 className="web-search-pack">Micro Labs Pvt. Ltd.</h5>
							<h4 className="web-search-price">44.50</h4>
						</div>
					</div>
				</Link>
			</div> */}
			{/* {searchByProductResult !== undefined && searchByProductResult.map(item => (
				<div className="web-search-result-list" key={item.c_item_code}>
					<Link to={`/pdp/${item.c_item_code}/${item.c_item_name}`}>
						<div>
							<div className="web-search-sec mb-7">
								<h4 className="web-search-proname"><span>{searchKey}</span>{item.c_item_name.slice(searchKey.length, ).toLowerCase()}</h4>
								<h5 className="web-search-pack">Pack Size: {item.c_item_pack_size}</h5>
							</div>
							<div className="web-search-sec">
								<h5 className="web-search-pack">{item.c_item_mfac}</h5>
								<h4 className="web-search-price">{item.n_max_mrp.toFixed(2)}</h4>
							</div>
						</div>
					</Link>
				</div>
			))} */}
		</>
	);
};

export default SearchByList;
