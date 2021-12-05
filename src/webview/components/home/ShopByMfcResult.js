/*
	*********************
	Last Edit 
	*********************
	Made By : Dhanasekaran
	Date    : 02/11/2021
	Purpose : Reduce Slider
*/
import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Fade from '@material-ui/core/Fade';
import { Link,useHistory } from "react-router-dom";
import cipla from "../../../assets/images/cipla-logo.png";
import BgGreyImg from "../../../assets/images/bg-grey.svg";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

import Slider from "react-slick";
const ShopByManufacturer = (props) => {
	const {handleOpenOrderNowModal,shopByMfcRes, shopByManfacturer} = props;
	useEffect(()=>{
		shopByManfacturer()
	},[])
		const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
				<span {...props}>{children}</span>
		);
		const settings = {
				infinite: true,
				speed: 1000,
				slidesToShow: 6,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 4800,
		};

	return (
		<div>
			<div className="home-title-section">
				<div>
					<h4>Our Brands</h4>
				</div>
				<div>
					
				</div>
			</div>
			<div className="fast-moving-sec">
				<Slider {...settings} className="preferred-seller-slider">
					{Array.isArray(shopByMfcRes?.j_list) && shopByMfcRes?.j_list.length > 0 && (shopByMfcRes?.j_list).map((item, index) => (
						<div key={index} >
							<div className="preferred-seller-width autoInitital">
								<Link to={`/plp/mfg?index=0&q=${item.c_manufacture_code}&n=${item.c_manufacture_name}`}>
									{
										item.ac_thumbnail_images.length>0 ? 
										<div className="mfc_tile heightFixed">
											<Tooltip title={item.c_manufacture_name} TransitionComponent={Zoom}>
												<img src={`${item.c_thumbnail_images[0].c_thumbnail_image}`} alt="homeSliderImg" />
											</Tooltip>
										</div> :
										<div>
											<div className="mfc_tile">
												<div className="boxFill">
													<Tooltip title={item.c_manufacture_name} TransitionComponent={Zoom}>
														<h1>{(item.c_manufacture_name.match(/\b\w/g) || []).shift() || ''}{(item.c_manufacture_name.match(/\b\w/g) || [])[1] || ''}</h1>
													</Tooltip>
												</div>
											</div> 
										</div>

									}
								</Link>
								<h6>
									<div className="homeOverLayInitail">
									{item.c_manufacture_name}
									</div>
								</h6>
							</div>
						</div>
						))}
				</Slider>
			</div>
		</div>
	);
};
export default ShopByManufacturer;