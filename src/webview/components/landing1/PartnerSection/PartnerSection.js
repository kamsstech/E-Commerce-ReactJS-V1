import React, { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./PartnerSection.css";
import GSKImg from "../../../../assets/images/GSKImg.png";
import AbbottImg from "../../../../assets/images/AbottImg.png";
import AlkemImg from "../../../../assets/images/AlkemImg.png";
import PractoImg from "../../../../assets/images/practo.png";
import BlueMedix from "../../../../assets/images/BlueMatrix.png";
import DrBLal from "../../../../assets/images/DrBLal.png";
import Medlife from "../../../../assets/images/medlife.png";
import Tasmed from "../../../../assets/images/tesmed.png";

import AbottImg1 from "../../../../assets/images/AbottImg1.png";
import AlkemImg1 from "../../../../assets/images/AlkemImg1.jpg";
import hll_lifecare from "../../../../assets/images/hll_lifecare.png";
import lamback from "../../../../assets/images/lamback.png";
import mahaveer from "../../../../assets/images/mahaveer1.png";
import rajsons from "../../../../assets/images/rajsons1.png";
import wellness1 from "../../../../assets/images/wellness1.jpg";
import lamback1 from "../../../../assets/images/lamback.png";



class PartnerSection extends Component {
	componentDidMount() {
		Aos.init({
			duration: 1000,
		});
	}
	render() {
		return (
			<div className="PartnerSection text-center py-5 mt-4">
				<h2 className="h2 mb-4 mr-t-0" data-aos="fade-up" data-aos-once="true">
					Join the Online Revolution
				</h2>
				<div className="DataCountsContainer mb-5 d-flex justify-content-center flex-column flex-md-row">
					<div
						className="mobile-break-section d-flex justify-content-center mb-4 mb-md-0 "
						data-aos="fade-up"
						data-aos-delay="500"
						data-aos-once="true"
					>
						<div className="DataCount">
							<h4 className="mr-t-0 h4 mb-2">10K+</h4>
							<h6 className="mr-t-0 h6-small">Trusted Customers</h6>
						</div>
						<div className="DataCount">
							<h4 className="mr-t-0 h4 mb-2">4Lakh+</h4>
							<h6 className="mr-t-0 h6-small">Products</h6>
						</div>
						<div className="DataCount">
							<h4 className="mr-t-0 h4 mb-2">1K+</h4>
							<h6 className="mr-t-0 h6-small">Sellers</h6>
						</div>
						<div className="DataCount">
							<h4 className="mr-t-0 h4 mb-2">4Lakh+</h4>
							<h6 className="mr-t-0 h6-small">Buyers</h6>
						</div>
					</div>
					<div
						className="mobile-break-section d-flex justify-content-center mr-0"
						data-aos="fade-up"
						data-aos-delay="500"
						data-aos-once="true"
					>
					</div>
				</div>
				<div className="PartnerLogoRow d-lg-flex justify-content-center">
					<div
						className="PartnerLogoContainer mr-lg-4"
						data-aos="fade-right"
						data-aos-delay="1000"
						data-aos-once="true"
					>
						<div className="PartnerLogoBox GSKImg mb-4 mr-4 mr-lg-0">
							<img src={AbottImg1} alt="AbottImg1" />
						</div>
						<div className="PartnerLogoBox PractoImg mb-4">
							<img src={AlkemImg1} alt="AlkemImg1" />
						</div>
					</div>
					<div
						className="PartnerLogoContainer mr-lg-4 mt-lg-5"
						data-aos="fade-right"
						data-aos-delay="750"
						data-aos-once="true"
					>
						<div className="PartnerLogoBox AbbottImg mb-4 mr-4 mr-lg-0">
							<img src={hll_lifecare} alt="hll_lifecare" />
						</div>
						<div className="PartnerLogoBox BlueMedixImg mb-4">
							<img src={lamback} alt="lamback" />
						</div>
					</div>
					<div
						className="PartnerLogoContainer mr-lg-4"
						data-aos="fade-left"
						data-aos-delay="750"
						data-aos-once="true"
					>
						<div className="PartnerLogoBox DrBLalImg mb-4 mr-4 mr-lg-0">
							<img src={mahaveer} alt="mahaveer" />
						</div>
						<div className="PartnerLogoBox TasMedImg mb-4">
							<img src={rajsons} alt="rajsons" />
						</div>
					</div>
					<div
						className="PartnerLogoContainer mr-lg-4 mt-lg-5"
						data-aos="fade-left"
						data-aos-delay="1000"
						data-aos-once="true"
					>
						<div className="PartnerLogoBox AlkemImg mb-4 mr-4 mr-lg-0">
							<img src={wellness1} alt="wellness1" />
						</div>
						<div className="PartnerLogoBox MedlifeImg mb-4">
							<img src={lamback1} alt="lamback1" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PartnerSection;
