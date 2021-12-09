import React, { useState, useRef, useEffect, useCallback } from "react";
// import AnimatedProgressProvider from "./animatedProgressProvider.jsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Play from "../../../assets/images/play.svg";
import Pause from "../../../assets/images/pause.svg";

// var time = 2;
const useStyles = makeStyles({
	playPauseButton: {
		position: "relative",
		zIndex: 10,
		bottom: 267,
		display: "flex",
		left: -22,
		opacity: 0.9,
		background: "transparent",
		cursor: "pointer",
		"& .MuiCircularProgress-root": {
			position: "absolute",
			top: 0,
			right: 14,
		},
		"& .icons.MuiFab-sizeSmall": {
			position: "absolute",
			top: 0,
			right: 14,
			backgroundColor: "transparent",
			marginTop : "-45px"
		},
	},
});

const CircularProgressBar = (props) => {
	const {
		size,
		thickness,
		handlePause,
		handlePlay,
		play,
		progressb,
		isBarVisible,
	} = props;
	const [progressSlide,setProgressSlide] = useState(0)

	const classes = useStyles();

	setTimeout(() => {
		if(progressSlide === 100){
			setProgressSlide(0)
		}
		else{
			let temp = 100
			 setProgressSlide(temp)
		 
		}
	}, 2000);

//   var interval = setInterval(function() {

//    let width = progressSlide + 10;

//     if (width >= 100) {
//         clearInterval(interval);
//     }
// }, 2000);


	return (
		<>
			{!play ?(
				<div
					className={classes.playPauseButton}
					onClick={!play ? handlePlay : handlePause}
				>
					{/* <img
						src={!play ? Play : Pause}
						className={!play ? "play" : "pause"}
					/> */}
					<Fab
						className="icons"
						aria-label="delete"
						size="small"
						variant="circular"
					>
						<img src={Play}
						className="play" />
					</Fab>

					{/* {!play
						? null
						: 
								<CircularProgress
									className="sliderProgress"
									variant="static"
									size={size}
									thickness={thickness}
									value={progressb}
								/>
							} */}

					{/* <CircularProgress
						className="sliderProgress"
						variant="static"
						size={size}
						thickness={thickness}
						value={progressb}
					/> */}
				</div>
			)  :
					(
				<div className={classes.playPauseButton} onClick={handlePause}>
					{/* <Fab className="icons" aria-label="delete" size="small">
						<img src={Pause} className="pause" />
					</Fab>
						<CircularProgress
							className="sliderProgress"
							variant="static"
							size={size}
							thickness={thickness}
							value={progressb}
						/> */}
							<span  style={{position: 'absolute', top: '10px', right: '34px',marginTop:"-36px"}}>
						<img src={Pause} className="pause" />
					</span>
						<CircularProgress className="sliderProgress" variant="determinate" value={progressSlide}  style={{marginTop:"-40px"}}/>
			 
				</div>
			)
			}
		</>
	);
};
export default CircularProgressBar;
