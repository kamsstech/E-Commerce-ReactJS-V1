import React,{useState,useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import "./HeroSection.css";
import SearchIconSVG from "../../../../assets/images/search_icon.svg";
/**
* @author
* @function HeroSection
**/

const HeroSection = (props) => {
	const {SearchByNAProduct,searchByNAProductResult} = props;
	console.log(searchByNAProductResult,"<<< searchByNAProductResult")
	const [inputSearch, setInputSearch] = useState("")
	const handleSearchChange =(e)=>{
		setInputSearch(e.target.value)
	}
	useEffect(() => {
		if(inputSearch.length >=2){
			const body={
				"c_search_term":inputSearch,
				"n_page":10,
				"n_limit":4
			}
			SearchByNAProduct(body)
		}else{
			const body={
				"c_search_term":"",
				"n_page":10,
				"n_limit":4
			}
			SearchByNAProduct(body)
		}
	}, [inputSearch])
	// console.log(inputSearch,"Search Value")
  return(
	<div className="HeroSection text-center">
				<div className="HeroBg">
					<div className="text-center HeroCopy">
						<h1
							className="h1 HeroTitle mb-4"
							data-aos="fade-up"
							data-aos-once="true"
							data-aos-delay="1500"
						>
							Always say <span>“YES”</span> to your Customers
						</h1>
						<h5
							className="h5 HeroSubTitle"
							data-aos="fade-up"
							data-aos-once="true"
							data-aos-delay="1750"
						>
							“KAMSS Tech Admin” Pharma Eco-System Makes{" "}
							<br className="d-none d-md-block" />
							your Business Future-Ready
						</h5>
						<div
							className="search-container d-flex align-items-center"
							data-aos="fade-up"
							data-aos-once="true"
							data-aos-delay="2000"
						>
							<form className="w-100" autoComplete="off">
								<div className="d-flex justify-content-between">
									<div className="d-flex justify-content-center align-items-center w-100">
										<img
											src={SearchIconSVG}
											alt="search icon"
											height="15.4px"
											width="15.2px"
										/>
										<input
											type="text"
											placeholder="Search for products, Molecules , Sellers"
											value={inputSearch}
											name="search"
											onChange={handleSearchChange}
										/>
									</div>
									<button
										type="submit"
										className="btn btn-primary search-btn text-white"
									>
										Search
									</button>
								</div>
							</form>
							<div className="search-results" >
							{
								Array.isArray(searchByNAProductResult.payload) && searchByNAProductResult.payload.length > 0 && searchByNAProductResult.payload.map((item,index)=>(
								 
									<div className="search-result-card">
										<div className="details-div">
											<p className="heading">{item.c_item_name}</p>
											<p className="sub-heading">{item.c_item_mfg_name}</p>
										</div>
										<div className="inventory">
											<p className="pack-size">Pack Size: {item.c_pack_name}</p>
											<p className="price">&#8377; {item.n_max_mrp}</p>
										</div>
									</div>
))
}
									
								</div> 
								

							
						</div>
					</div>
				</div>
			</div>
   )

 }
 export default HeroSection;