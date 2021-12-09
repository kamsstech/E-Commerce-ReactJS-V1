import React, { Component } from "react";
import Slider from "react-slick";
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';
import Grow from "@material-ui/core/Grow";

import Item from "../../../assets/images/item.jpg";
import shortbook_icon from "../../../assets/images/shortbook_pdpIcon.svg";
import wishlist_icon from "../../../assets/images/wishlist_pdpIcon.svg";
import shortbook_colorIcon from "../../../assets/images/shortbook_colorIcon.svg";
import wishlist_colorIcon from "../../../assets/images/wishlist_colorIcon.svg";

import oral_sus from "../../../assets/images/oral_sus.svg";
import capsules from "../../../assets/images/capsules.svg";
import dressicon from "../../../assets/images/dressicon.png";
import tablet from "../../../assets/images/tablet.svg";
import drops from "../../../assets/images/drops.svg";
import { getToken } from "../../../common/components/getToken/getToken";
import { Tooltip } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";

function GrowTransition(props) {
	return <Grow {...props} />;
}
export default class AsNavFor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nav1: null,
			nav2: null,
			iconColor: false,
			wishlistColor: false,
			showProductDetails: false,
			state1: {
				open: false,
				Transition: Fade,
				message: "",

			}
		};

	}

	componentDidMount() {

		this.setState({
			nav1: this.slider1,
			nav2: this.slider2
		});
		// var token = getToken();
		// if(token){
		//   this.setState({showProductDetails:true})
		// }else{
		//   this.setState({showProductDetails:false})
		// }

	}
	handleCloseButton = () => {
		this.setState({
			state1: {
				...this.state.state1,
				open: false
			}
		});
	};
	handleShortBookAdded = (Transition, name, code) => {
		const body = {
			c_item_code: code,
		};
		this.props.AddShortbookItems(body);

		this.setState(Transition => ({

			state1: {
				open: true,
				Transition,
				message: ` ${name.toLowerCase()} successfully added to Shortbook`,
			}
		}));

	}
	handleShortBookRemoved = (Transition, name, code) => {
		const body = {
			c_item_code: code,
		};
		this.props.RemoveShortbookItems(body);
		this.setState(Transition => ({
			state1: {
				open: true,
				Transition,
				message: ` ${name.toLowerCase()} removed from Shortbook`,
			}
		}));
	}
	handleWatchListAdded = (Transition, name, code) => {
		const body = {
			c_item_code: code,
		};
		this.props.AddWatchlistItems(body);
		this.setState(Transition => ({
			state1: {
				open: true,
				Transition,
				message: `${name.toLowerCase()} successfully added to Watchlist`
			}
		}))
	}
	handleWatchListRemoved = (Transition, name, code) => {
		const body = {
			c_item_code: code,
		};
		this.props.RemoveWatchlistItems(body);

		this.setState(Transition => ({
			state1: {
				open: true,
				Transition,
				message: `${name.toLowerCase()} removed from Watchlist`
			}
		}))
	}
	render() {
		const imageUrls = this.props.imageUrls;
		const thumbNailsUrls = this.props.thumbNailsUrls;
		const payload = this.props.payload;

		console.log(thumbNailsUrls, "thumbNailsUrls")


		let image =
			<Slider
				asNavFor={this.state.nav2}
				ref={slider => (this.slider1 = slider)}
			>

				{imageUrls && imageUrls.map((item, index) => {


					return (
						<div key={index}>
							<div className="image-single">
								{
									item.product1.length ?
									(item.product1) && item.product1.map((item1, index1) =>(
										<img src={'http://35.224.80.84/apiaction/'+item1.c_item_image} alt="item" className="img-item" />
									)) :
									<img src={dressicon} alt="injectable" className="singleImg"/>
								}
								
								{this.props.showProductDetails == true ?

									<div className="shortbook_icon-sec" onClick={(prevState) => {
										this.setState(prevState => ({
											iconColor: !prevState.iconColor
										}))
									}}>

										{this.state.iconColor ?
											<Tooltip title="Shortbook" TransitionComponent={Zoom}>
												 <img src={shortbook_colorIcon} alt="shortbook_color_icon"
												onClick={() => {
													setTimeout(() => {
														this.handleShortBookRemoved(GrowTransition, item.c_item_name, item.c_item_code)
													}, 500)
												}} />
											</Tooltip>
												:
												<Tooltip title="Shortbook" TransitionComponent={Zoom}>
													<img src={shortbook_icon}
												alt="shortbook_icon"
												onClick={() => {
													setTimeout(() => {
														this.handleShortBookAdded(GrowTransition, item.c_item_name, item.c_item_code)
													}, 500)
												}} />
											</Tooltip>
											}
									</div>
									: null}

								{this.props.showProductDetails == true ?
									<div className="wishlist_icon-sec" onClick={(prevState) => {
										this.setState(prevState => ({
											wishlistColor: !prevState.wishlistColor
										}))
									}} >
										{this.state.wishlistColor ?
										<Tooltip title="Watchlist" TransitionComponent={Zoom}>
											<img src={wishlist_colorIcon} alt="shortbook_icon"
												onClick={() => {
													setTimeout(() => {
														this.handleWatchListRemoved(GrowTransition, item.c_item_name, item.c_item_code)
													}, 500)
												}} />
											 </Tooltip>

											 :
											 <Tooltip title="Watchlist" TransitionComponent={Zoom}>
												 <img src={wishlist_icon}
												alt="wishlist_icon"
												onClick={() => {
													setTimeout(() => {
														this.handleWatchListAdded(GrowTransition, item.c_item_name, item.c_item_code)
													}, 500)
												}} />
											 </Tooltip>
											}
									</div>
									: null}
							</div>
						</div>
					)


				})
				}
			</Slider>



		let thumbNail =
			<Slider
				asNavFor={this.state.nav1}
				ref={slider => (this.slider2 = slider)}
				slidesToShow={4}
				swipeToSlide={true}
				focusOnSelect={true}
				className="thumb-slider"
			>
				{thumbNailsUrls && thumbNailsUrls.map((item, index) => {

					return (
						<div key={index}>
							<div className="image-thumb">

								{
									item.product1.length ?
									(item.product1) && item.product1.map((item1, index1) =>(
										<img src={'http://35.224.80.84/apiaction/'+item1.c_item_image} alt="item" className="img-item" />
									)) :
									<img src={dressicon} alt="injectable"  />
								}

								
							</div>
						</div>
					)
				})}
			</Slider>
		return (
			<div className="sticky">
				{image}
				{thumbNail}
				<Snackbar
					open={this.state.state1.open}
					onClose={this.handleCloseButton}
					TransitionComponent={this.state.state1.GrowTransition}
					message={this.state.state1.message}
					key={this.state.state1.Transition.name}
					autoHideDuration={5000}
					action={
						<React.Fragment>
							<Checkbox
								icon={<CheckBoxIcon />}
								color="primary"
								disabled
								className="msg-checkbox checkbox-listItem"
							/>

						</React.Fragment>
					}
				/>
			</div>
		);
	}
}