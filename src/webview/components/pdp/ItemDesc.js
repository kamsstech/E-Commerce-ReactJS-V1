import React, { useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import { PdpPageItemsEntity } from "../../../common/model";


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const ItemDesc = (props) => {

	const myRef = useRef(null)
	const executeScroll = () => scrollToRef(myRef);
	const myRefSideEffect = useRef(null)
	const executeScrollSideEffect = () => scrollToRef(myRefSideEffect);
	const myRefUsage = useRef(null)
	const executeScrollUsage = () => scrollToRef(myRefUsage);


	const { pdpPageItemsResult } = props;

	let generalInfo = pdpPageItemsResult.payload.data;
	// console.log(generalInfo,"*************** generalInfo")

	return (
		<div>
			{generalInfo &&
				<div >

					<h2 className="product-about-title mt-0">General Info</h2>

					<div className="pdp-quick-links">
						<h5 className="product-adout-desc-sub m-0 " onClick={executeScrollUsage}>Quick Links:</h5>

						<Button variant="contained" className="pdp-quick quick-links ml-10" >
							Description
						</Button>
						<Button variant="contained" className="pdp-quick quick-links" onClick={executeScrollSideEffect}>
							Specification
						</Button>
						
					</div>
					<div className="solid-line"></div>
					<div className="about-subsec b-0">

						<h4 className="subsec-title" ref={myRefUsage} >Description:</h4>
						{generalInfo.map((item, index) => (
							<p className="subsec-desc" key={index} > {item.c_item_description}</p>
						))}
					 
						
					</div>
					<div className="about-subsec b-0">

						<h4 className="subsec-title" ref={myRefSideEffect}>Specification:</h4>
						{generalInfo.map((item, index) => (
							<p className="subsec-desc" key={index} > {item.c_item_specification}</p>
						))}
					</div>

				</div>
			}
		</div>
	);
};

export default ItemDesc;
