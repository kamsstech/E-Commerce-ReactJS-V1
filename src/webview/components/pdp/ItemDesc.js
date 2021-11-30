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

	let generalInfo = pdpPageItemsResult.payload;
	// console.log(generalInfo,"*************** generalInfo")

	return (
		<div>
			{generalInfo &&
				<div >

					<h2 className="product-about-title mt-0">General Info</h2>
					<h5 className="product-adout-desc">Description:</h5>
					<p className="product-effects">A drug that lowers  tension and stress without side effects.</p>
					<ul className="product-desc">
						

						{generalInfo.map((item, index) => (
								item.j_molecules.map((data,index1)=>(
									<li key={index}> {data.c_description}</li>
								))
						))}
					</ul>

					<div className="pdp-quick-links">
						<h5 className="product-adout-desc-sub m-0 " onClick={executeScrollUsage}>Quick Links:</h5>

						<Button variant="contained" className="pdp-quick quick-links ml-10" >
							Usage
						</Button>
						<Button variant="contained" className="pdp-quick quick-links" onClick={executeScrollSideEffect}>
							Side Effect
						</Button>
						<Button variant="contained" className="pdp-quick quick-links" onClick={executeScroll} >
							Contra-indications
						</Button>
					</div>
					<div className="solid-line"></div>
					<div className="about-subsec b-0">

						<h4 className="subsec-title" ref={myRefUsage} >Usage:</h4>
						{generalInfo.map((item, index) => (
							item.j_molecules.map((data,index1)=>(
								<p className="subsec-desc" key={index} > {data.c_usage}</p>
							))
							

						))}
					 
						{generalInfo.map((item, index) => (

							<p className="subsec-desc">
							<br></br>
							<span>Note :</span> {   
								item.j_molecules.map((data,index1)=>(
									<span  key={index} > {data.c_note}</span>
								))
							}
							
						</p>

						))}
					</div>
					<div className="about-subsec b-0">

						<h4 className="subsec-title" ref={myRefSideEffect}>Side Effect:</h4>
						{generalInfo.map((item, index) => (
							
							item.j_molecules.map((data,index1)=>(
								<p className="subsec-desc" key={index} > {data.c_side_effect}</p>
							))

						))}
					</div>

					<div className="about-subsec b-0" >

						<h4 className="subsec-title" ref={myRef}>Contra-indications:</h4>
						{generalInfo.map((item, index) => (

							item.j_molecules.map((data,index1)=>(
								<p className="subsec-desc" key={index} > {data.c_contra_indications}</p>
							))
						 
						))}
					</div>
				</div>
			}
		</div>
	);
};

export default ItemDesc;
