import React, {useState} from "react";
import Store from "../../../assets/images/store-purple.svg";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
const OrderingBranch = (props) => {
	const {handleChangeBranch,branchListResult} = props;
	const [toggle, setToggle] = useState(false);
	console.log(branchListResult,"<<<<branchListResult")
	
	return(
	<div className="deliver-to-add-wrapper">
		<div className="deliver-to-add-sec">
		<img src={Store} alt="Store" className="mr-10"/>
		<p>Ordering For Branch</p>
		<div className="width-512 relative">
			<div className="default-address-sec width-100">
			{
			branchListResult.payload !== "" && branchListResult.payload.map((item, index) => (
				
			<p className="sel-add bold"><span>{item.c_name}</span> 
			
			{/* {item.c_city_name}, {item.c_area_name},{item.c_pincode} */}
			</p>
			))
			}

			{ <p className="edit-link" onClick={() => {
				setToggle(!toggle);
				if(handleChangeBranch)handleChangeBranch();
			}}>Change</p> }
			</div>

			{toggle &&
			<ClickAwayListener onClickAway={() => setToggle(false)}>
			<div className="cart-change-address-list thin-scroll">
			{/* <div className="select-branch-title-sec">Select Branch for order</div> */}
			
			<ul className="cart-change-address">
			{
			branchListResult.payload !== "" && branchListResult.payload.map((item, index) => (
					<li className="active" key={index}>{item.c_name}, <span>{item.c_city_name},{item.c_area_name},{item.c_pincode}</span></li>
				))
			}
				
			</ul>
			</div>
			</ClickAwayListener>
			}
		</div>
		</div>
	</div>
	)
}

export default OrderingBranch