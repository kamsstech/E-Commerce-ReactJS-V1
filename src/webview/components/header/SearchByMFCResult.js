import * as React from "react";
import { Link } from "react-router-dom";
import delete_icon from "../../../assets/images/icons/delete.svg";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const SearchByMFCResult = (props) => {
	const { searchKey, searchByMfcResult, click, deleteSearch, setSearchList } = props;
	console.log(searchByMfcResult,"<<<<<<<<<<<<searchByMfcResult")

	const localStoreFunction = (itemname) => {
		// console.log(itemname,"^^^^^^^^^^^^^^^^^^^^^^^^^ itemname")
		if(itemname){
			return (
				// setSearchKey("")
				setSearchList(false)
			)
		}
		// setSearchKey("")
		// localStorage.setItem('prd', itemname);
		// localStorage.setItem('prd', itemname);
		// sessionStorage.setItem('prd', itemname);
		// localStorage['prd'] = itemname;

	};
	return (
		<>
			{
			click && searchKey === "" &&
				<>
					<div className="recent-search-div">
						<p className="recent-search-title">RECENT SEARCHES</p>
						<p className="recent-search-title">Clear all
							<Button className="span-delete">
								<img src={delete_icon} alt="delete icon" onClick={deleteSearch}/>
							</Button>
						</p>
					</div>
					
					{searchByMfcResult.payload.length > 0 ?  searchByMfcResult.payload !== undefined && searchByMfcResult.payload.map(item => (
						<div className="web-search-result-list" key={item.c_manufacture_code}>
							<Link to={`/plp/mfg?index=0&q=${item.c_manufacture_code}&n=${item.c_manufacture_name}`} key={item.c_manufacture_code}>
								<Grid container onClick={() => localStoreFunction(item.c_manufacture_code)}>
									<Grid item xs={8}>
										<div className="web-search-sec">
											<h4 className="web-search-proname mb-8" >{item.c_manufacture_name}</h4>
										</div>
									</Grid>
									<Grid item xs={4} align="right">
										<div className="web-search">
											<h5 className="web-search-scheme">Ongoing Schemes: {item.c_schemes }33</h5>
										</div>
									</Grid>
								</Grid>
							</Link>
						</div>
					))
					:
					null
					}
				</>
			}
	{
		searchKey.length >=2 &&
<>
{searchByMfcResult.payload.length > 0 ? searchByMfcResult.payload !== undefined && searchByMfcResult.payload.map(item => (
	<div className="web-search-result-list" key={item.c_manufacture_code}>
		{/* <Link to="/home"> */}
		<Link to={`/plp/mfg?index=0&q=${item.c_manufacture_code}&n=${item.c_manufacture_name}`}>
			<Grid container>
			{item.c_sponsored !== "N" ?	
    			<Grid item xs={12}>
					<p className="sponsor-text">Sponsored</p>
				</Grid>
				: null }
				<Grid item xs={8}>
					<div className="web-search-sec">
						<h4 className="web-search-proname mb-8">{item.c_manufacture_name}</h4>
					</div>
				</Grid>
				<Grid item xs={4} align="right">
					<div className="web-search">
						{/* <h5 className="web-search-scheme">Ongoing Schemes: {item.n_offers}</h5> */}
					</div>
				</Grid>
			</Grid>
		</Link>
	</div>
))
:
<h4 className="text-center">{searchByMfcResult.error !=="" && searchByMfcResult.error}</h4>
}
</>
}
</>
);
};


export default SearchByMFCResult;