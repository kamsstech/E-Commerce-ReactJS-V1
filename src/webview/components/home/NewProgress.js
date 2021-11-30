import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import React, { useState } from 'react';
import ChangingProgressProvider from "./ChangingProgressProvider.js";

import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import { easeQuadInOut } from "d3-ease";

import { makeStyles } from "@material-ui/core/styles";
import Play from "../../../assets/images/play.svg";
import Pause from "../../../assets/images/pause.svg";
import "react-circular-progressbar/dist/styles.css";

// interface Props {
//     progressb: number;
//     size: number;
//     thickness: number;
//     disableShrink: boolean;
//     handlePause(): void;
//     handlePlay(): void;
//     play: boolean
// }
// var time = 2;
const useStyles = makeStyles({
    playPauseButton: {
      position: "relative",
      zIndex:10,
      bottom:267,
      display: "flex",
      left:-22,
      opacity:0.9,
      background:"transparent",
      cursor: "pointer",
      "& .MuiCircularProgress-root": {
        position: "absolute",
        top: 0,
        right: 14
      },
      "& .icons.MuiFab-sizeSmall": {
        position: "absolute",
        top: 0,
        right: 14,
        backgroundColor: "transparent"
      }
    }
});

const NewProgressBar = (props) => {
   
    const { size, thickness, disableShrink, handlePause, handlePlay, play, progressb} = props;
    const classes = useStyles();
    const [progress, setProgress] = useState(0);

    return (
    <>{!play ? 
    <div className={classes.playPauseButton} onClick={handlePlay}>
        <Fab className="icons" aria-label="delete" size="small">
        <img src={Play} className="play"/>
        </Fab>
    </div>
    : 
    <div className={classes.playPauseButton} onClick={handlePause}>
        {/* <Fab className="icons" aria-label="delete" size="small">
        <img src={Pause} className="pause"/>
        </Fab>
        <CircularProgress className="sliderProgress" variant="determinate" size={size} thickness={thickness} disableShrink={false} value={progressb}/> */}
        <ChangingProgressProvider  values={[0, 20, 40, 60, 80, 100]}>
        {percentage => (
                <CircularProgressbar strokeWidth={6}
                styles={
                    buildStyles({  // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,
                
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        // strokeLinecap: 'butt',
                    
                        // Text size
                        // textSize: '16px',
                    
                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,
                    
                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',
                    
                        // Colors
                        // pathColor: `rgba(62, 152, 199, ${props.progress / 100})`,
                        // textColor: '#f88',
                        // trailColor: '#d6d6d6',
                        // backgroundColor: '#3e98c7',
                })}/>
          
        )}
        </ChangingProgressProvider>
    </div>
    }</>
    )
};
export default NewProgressBar;