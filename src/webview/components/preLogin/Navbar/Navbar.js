import * as React from "react";
import { Component, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Navbar.css";
import Grid from "@material-ui/core/Grid";
import { MenuItems } from "./MenuItems";
// import logo from "../../../../assets/images/Logo1.svg";
import logo from "../../../../assets/images/LOGO_B_2.svg";

// import ScheduleADemo from "../ScheduleADemo/ScheduleADemo";

class Navbar extends Component {
	state = {
		scroll: false,
	};
 
	componentDidMount() {

		Aos.init({
			duration: 1000,
		});

		window.addEventListener("scroll", () => {
			if (window.scrollY > 50) {
				this.setState({
					scroll: true,
				});
			} else if (window.scrollY < 50) {
				this.setState({
					scroll: false,
				});
			}
		});

	}

	render() {
 
// 	const [open, setOpen] = useState(false);
// 	const [heading, setHeading] = useState("");
// 	const [productValue, setProductValue] = useState("");
		
//     const handleClose = () => {
//       setOpen(false);
//     };


		return (
			<Grid container>
				<Grid item xs={12}>
					<div
						data-aos-delay="250"
						data-aos="slide-down"
						className={`NavbarContainer ${
							this.state.scroll === true ? "navbar-fixed" : ""
						}`}
					>
						<nav className="NavbarItems MainContainer">
							<Link to="/">
								<img src={logo} alt="Live Order" className="logo" />
							</Link>
							<div className="linksContainer d-flex mr-3">
								<ul className="mb-0 d-none d-lg-flex">
									{MenuItems.map((item, index) => {
										return (
											<li key={index}>
												<a
													href={item.url}
													className={
														window.location.pathname === `/${item.url}`
															? `navbar-highlight ${item.cName}`
															: item.cName
													}
												>
													{item.title}
												</a>
											</li>
										);
									})}
								</ul>
								<div className="NavBtnContainer d-flex">
									<button
										type="button"
										className="handCursur btn btn-outline-primary schedule-btn"
										onClick={() => {
											this.props.OpenDemoForm("LiveOrder", "LO");
										}}
										// onClick={() => this.props.schedulerModalHandler(true)}
									>
										<span className="d-none d-lg-inline-block">
											Schedule A&nbsp;
										</span>
										Demo
									</button>
									<Link to="/login">
										<button type="button" className="handCursur btn login-btn">
											Login
										</button>
									</Link>
								</div>
							</div>
						</nav>
						<nav className="NavbarItems MainContainer mobile-nav d-block d-lg-none">
							<ul className="mb-0 pl-0">
								{MenuItems.map((item, index) => {
									return (
										<li key={index}>
											<Link
												to={item.url}
												className={
													window.location.pathname === `/${item.url}`
														? `navbar-highlight ${item.cName}`
														: item.cName
												}
											>
												{item.title}
											</Link>
										</li>
									);
								})}
							</ul>
						</nav>

						{/* <ScheduleDemoForm
							open={open}
							handleClose={handleClose}
					demoFor={heading}
							productValue={productValue}
							submitDemoRequestAction={submitDemoRequestAction}
							demoRequestResult={demoRequestResult}
						/> */}







						{/* <ScheduleADemo
							scheduleDemoHandler={this.scheduleDemoHandler}
							scheduleDataHandler={this.scheduleDataHandler}
							isOpen={this.state.showSchedulerModal}
						/> */}
					</div>
					</Grid>
			</Grid>
		);
	}
}

export default Navbar;
