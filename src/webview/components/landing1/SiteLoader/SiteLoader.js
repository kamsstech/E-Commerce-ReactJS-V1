import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import LogoAnimation from "../../../../assets/animation/Live-order-Illustration.json";
import "./SiteLoader.css";

function SiteLoader(props) {
	const [load, setLoad] = useState(false);
	// const [load, setLoad] = useState(false);
	const [screenWidth, setScreenWidth] = useState(null);
	const [screenHeight, setScreenHeight] = useState(null);
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: LogoAnimation,
		// rendererSettings: {
		//   preserveAspectRatio: "xMidYMid slice",
		// },
	};
	useEffect(() => {
		setScreenWidth(window.screen.width * 0.3);
		setScreenHeight(window.screen.height * 0.3);
	}, [window.screen.width, window.screen.height]);

	useEffect(() => {
		const body = document.getElementsByTagName("body")[0];

		body.style.overflow = "hidden";
		// setTimeout(() => {
		// }, 5000);
		if (props.showLoader === true) {
			setLoad(true);
			body.style.setProperty("overflow", "auto", "important");
		}
		// console.log("OK");
		console.log(props.showLoader)
		// console.log(props);
	}, [props.showLoader]);


	// function finishLoading() {
	//   const body = document.getElementsByTagName("body")[0];

	//   setLoad(true);
	//   setTimeout(() => {
	//     body.style.setProperty("overflow", "auto", "important");
	//   }, 1000);
	// }

	return (
		<>
			<div className={`loaded ${load === true && "finish"}`}>
				<Lottie
					options={defaultOptions}
					// speed={1.5}
					// width="192"
					// height={screenHeight}
					style={{
						width: "100%",
					}}
				/>
			</div>
			
		</>
	);
}

export default SiteLoader;