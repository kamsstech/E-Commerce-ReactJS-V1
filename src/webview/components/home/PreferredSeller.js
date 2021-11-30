import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Fade from '@material-ui/core/Fade';
import Alert from '@material-ui/lab/Alert';
import {
	Tooltip,
	Zoom,
} from "@material-ui/core";
import Slider from "react-slick";
import { Link,useHistory } from "react-router-dom";
// import Medlife from "../../../assets/images/medlife.png";
import Seller from "../../../assets/images/seller1.jpg";
const PreferredSeller = (props) => {
	const {handleOpenOrderNowModal,preferedSellerResult,PreferedSellerCall} = props;
 
	
	const settings = {
		dots: false,
		arrows: false,
		infinite: false,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000
	};
	
 
	return (
		<div>
			<div className="home-title-section">
				<div>
					<h4>Preferred Sellers Inspired By Your Purchase</h4>
					<h5>Pick your favourite sellers &amp; order</h5>
				</div>
				<div>
					{/* <Button
						variant="contained"
						color="primary"
						className="home-title-sectionbtn-green animate-shimmmer"
						onClick={handleOpenOrderNowModal}
					>
						Order Now
					</Button>  */}
					{/*<Link to={`/plp/preferred?index=0`}>*/}
				 {/* <Link to={`/`}>
						<Button
							variant="contained"
							color="primary"
							className="home-title-sectionbtn"
						>
							View All
						</Button>
					</Link>
*/}
					 
				</div>
			</div>

			<div className="prefered-seller-sec">
				{
					preferedSellerResult.payload?.j_list.length==0 ?
					<div className="alert">
						<Alert icon={false} severity="info">
							<p> <b>Currently no sellers available...!</b> <br/> Please refer sellers we will add them here.</p>
						</Alert>
					</div>
					: 
					<Slider {...settings} className="preferred-seller-slider">
						{Array.isArray(preferedSellerResult.payload?.j_list) && preferedSellerResult.payload?.j_list.length > 0 && 
						(preferedSellerResult.payload?.j_list).map((item) =>(
						<div key={item.c_seller_code}>

							<div className="preferred-seller-width autoInitital">
								<Link to={`/plp/seller?index=0&q=${item.c_seller_code}&n=${item.c_seller_name}`}>
									{
										item.ac_thumbnail_images.length>0 ? 
										<div className="mfc_tile heightFixed">
											<Tooltip title={item.c_seller_name} TransitionComponent={Zoom}>
												<img src={`${item.c_thumbnail_images[0].c_thumbnail_image}`} alt="homeSliderImg" />
											</Tooltip>
										</div> :
										<div>
											<div className="mfc_tile">
												<div className="boxFill">
													<Tooltip title={item.c_seller_name} TransitionComponent={Zoom}>
														<h1>{(item.c_seller_name.match(/\b\w/g) || []).shift() || ''}{(item.c_seller_name.match(/\b\w/g) || [])[1] || ''}</h1>		
													</Tooltip>
												</div>
											</div> 
										</div>

									}
								</Link>
								<h6>
									<div className="homeOverLayInitail">
									{item.c_seller_name}
									</div>
								</h6>
							</div>

							{/*<div className="preferred-seller-tile">
								<Link to={`/plp/seller?index=0&q=${item.c_seller_code}&n=${item.c_seller_name}`}>
								<Tooltip
												title={item.c_seller_name}
												TransitionComponent={Zoom}
											>
								{
										item.c_seller_image === "" ?
										<h4>{item.c_seller_name}</h4>
										 : 
										 <img
													src={item.c_seller_image}
													alt={item.c_seller_name}
													title={item.c_seller_name}
													onError={(e) => {
														 e.target.src = Seller
													}}
											/>
								}  
								
								</Tooltip>
								</Link>
							</div>*/}
						</div>
						))}  
				 	</Slider>
				}
			</div>
		</div>
	);
};

export default PreferredSeller;
