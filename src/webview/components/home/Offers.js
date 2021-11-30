import * as React from "react";
import Button from "@material-ui/core/Button";
import offerOne from "../../../assets/images/offer-1@2x.png";
import offerTwo from "../../../assets/images/offer-2@2x.png";
import offerThree from "../../../assets/images/offer-3@2x.png";
import Offers1 from "../../../assets/images/offers1.jpg";
import { useEffect } from "react";
import Slider from "react-slick";
import { Link, useHistory } from "react-router-dom";


const Offers = (props) => {
	const {offersResult,GetOffers} = props;

	const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
		<span {...props}>{children}</span>
);

const settings = {
		infinite: true,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: false,
		// onAfterChange: afterChange,
		autoplaySpeed: 3000,
		// nextArrow: (<SlickButtonFix><div className="arrowsNext" ><SampleNextArrow /></div></SlickButtonFix>),
		// prevArrow: (<SlickButtonFix><div className="arrowsPrev"><SamplePrevArrow /></div></SlickButtonFix>)
}; 
	
 useEffect(() =>{
	GetOffers()
 },[])
 
	return (
		<div>
			{
				Array.isArray(offersResult.payload?.j_list) && offersResult.payload?.j_list.length > 0 ? 
				<div>
					<div className="home-title-section">
						<div>
							<h4>Limited Period Offers By Distributors</h4>
							<h5>Pick best offer &amp; order</h5>
						</div>
						<div>
							{/* <Button
								variant="contained"
								color="primary"
								className="home-title-sectionbtn"
							>
								View All
							</Button> */}
						</div>
					</div>

					<div className="fast-moving-sec">
						<Slider {...settings} className="preferred-seller-slider">
							{(offersResult.payload?.j_list).map((item, index) => (
								<div key={item.c_offer_code} >
									<div className="preferred-seller-width" key={item.c_offer_code} >
										<div className="offer-tile">
											<Link to={`/`} key={item.c_offer_code}>
													<img 
													src={`${item.c_offer_image}`}
													onError={(e) => {
														e.target.src = Offers1
												 }}
													alt="homeSliderImg" />
											</Link>
										</div>
									</div>
								</div>
								))}
						</Slider>
					</div>
				</div>
				: ""
			}

		</div>
	);
};

export default Offers;
