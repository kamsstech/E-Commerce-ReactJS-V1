import React, { useState, useRef, useEffect,useCallback } from 'react';
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

const CircularProgressBar = (props) => {
   
    const { size, thickness, handlePause, handlePlay, play, progressb, isBarVisible} = props;
    const classes = useStyles();

    return (
    // <>{!play ? 
    <div className={classes.playPauseButton} onClick={!play ?handlePlay:handlePause}>
        <Fab className="icons" aria-label="delete" size="small">
        <img src={!play ? Play : Pause} className={!play? "play":"pause"}/>
        
        </Fab>
        
        {!play ? null : isBarVisible && <CircularProgress className="sliderProgress" variant="static" size={size} thickness={thickness} value={progressb}/>}
    </div>
    // : 
    // <div className={classes.playPauseButton} onClick={handlePause}>
    //     <Fab className="icons" aria-label="delete" size="small">
    //     <img src={Pause} className="pause"/>
    //     </Fab>
    //     {isBarVisible && <CircularProgress className="sliderProgress" variant="static" size={size} thickness={thickness} value={progressb}/>
    //     }
    // </div>
    // }</>
    )
};
export default CircularProgressBar;