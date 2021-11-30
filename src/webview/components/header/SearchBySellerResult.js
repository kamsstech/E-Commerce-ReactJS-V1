import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import shortbook_icon from "../../../assets/images/shortbook_pdpIcon.svg";
import shortbook_colorIcon from "../../../assets/images/shortbook_colorIcon.svg";
import delete_icon from "../../../assets/images/icons/delete.svg";
const SearchBySellerResult = (props) => {
	const { searchKey, searchBySellerResult, click, deleteSearch,setSearchList } = props;

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
			{/* {
				click && searchKey === "" && <>
					<div className="recent-search-div">
						<p className="recent-search-title">RECENT SEARCHES</p>
						<p className="recent-search-title">Clear all
							<Button className="span-delete">
								<img src={delete_icon} alt="delete icon" onClick={deleteSearch} />
							</Button>
						</p>
					</div>
					{
						searchBySellerResult !== undefined && searchBySellerResult.map(item => (
							<div className="web-search-result-list" key={item.c_seller_code}>
								<Link to={`/pdp/${item.c_seller_code}/${item.c_seller_name}`}>


									<Grid container>
										<Grid item xs={8}>
											<div className="web-search-sec">
												<h4 className="web-search-proname mb-8">{item.c_seller_name}</h4>
											</div>
											<div className="web-search-sec">
												<h5 className="web-search-manufature">{item.c_seller_city}</h5>
											</div>
										</Grid>
										<Grid item xs={4} align="right">
											<div className="web-search">
												<h5 className="web-search-scheme">Ongoing Schemes: {item.n_schemes}</h5>
											</div>
										</Grid>
									</Grid>
								</Link>
							</div>
						))
					}
				</>
			} */}
			{
				searchKey.length >= 2 && <>
					{ searchBySellerResult.payload.length >0 ?  searchBySellerResult.payload !== undefined && searchBySellerResult.payload.map(item => (
						<div className="web-search-result-list" key={item.c_seller_code}>
							<Link to={`/plp/seller?index=0&q=${item.c_seller_code}&n=${item.c_seller_name}`} >
								<Grid container>
									{item.c_sponsored !== "N" ?
										<Grid item xs={12}>
											<p className="sponsor-text">Sponsored</p>
										</Grid>
										: null}
									<Grid item xs={8}>
										<div className="web-search-sec">
										<h4 className="web-search-proname"><span style={{fontWeight:"900"}}
										onClick={() => localStoreFunction(item.c_seller_code)}
										>{searchKey}</span>{item.c_seller_name.slice(searchKey.length).toLowerCase()}</h4>
											
										</div>
										<div className="web-search-sec">
											<h5 className="web-search-manufature">{item.c_seller_city}</h5>
										</div>
									</Grid>
									<Grid item xs={4} align="right">
										<div className="web-search">
											{/* <h5 className="web-search-scheme">Ongoing Schemes: {item.n_schemes}</h5> */}
										</div>
									</Grid>
								</Grid>
							</Link>
						</div>
					))
						:
						searchBySellerResult.error && <h4 className="text-center">{searchBySellerResult.error !=="" && searchBySellerResult.error}</h4>
				}
				</>
			}
		</>
	);
};

export default SearchBySellerResult;
