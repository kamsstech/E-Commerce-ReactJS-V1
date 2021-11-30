import React, { useState, useRef, useEffect,useCallback } from 'react';
import Swiper from 'react-id-swiper';
import { makeStyles } from "@material-ui/core/styles";
import BannerImg1 from "../../../assets/images/banner.png";
import BannerImg2 from "../../../assets/images/banner-2.png";
import BannerImg3 from "../../../assets/images/banner3.png";
import BannerImg4 from "../../../assets/images/banner4.png";

import CircularProgressBar from './CircularProgress';
import './css/banner.css';
var currentSlide = 0;
// var seconds = 0;


const Homepagebanner = (props) => {
const {bannerResponse}=props;

 const [autoPlay, setAutoPlay] = useState({
  delay: 2500,
  disableOnInteraction: false
});

const [play, setPlay] = useState(true);
 /* For determinate progress bar
 const [startTimer, setStartTimer] = useState(false);
*/
// const [progress, setProgress] = useState(0);
// useEffect(()=>{
//   let newProgress = progress + 1;
//   console.log(newProgress)
//   setProgress(newProgress);
// },[progress])
 const [activeSlideKey, setActiveSlideKey] = useState('0');

  // for determinate progress bar
    // const [seconds, setSeconds] = useState(0);
    // const [isActive, setIsActive] = useState(true);
  


  const handlePause = () => {
  //  console.log('pause',swiper)
    // localStorage.setItem('currentSlide',currentSlide)

    setAutoPlay(false)
    setPlay(false);
    localStorage.setItem('currentSlide',currentSlide)
    // console.log('in pause cslide',currentSlide)

    setActiveSlideKey(""+currentSlide);
    // setSeconds(0);
    // seconds = 0;
    // setIsActive(false);
  };

  const handlePlay = () => {
    setPlay(true);
    
    setAutoPlay({
      delay: 2500,
      disableOnInteraction: false
    });

    currentSlide = parseInt(localStorage.getItem('currentSlide'));
    if(currentSlide){
      currentSlide -=1;
    }
    // console.log('in play',currentSlide)

    // setIsActive(!isActive);
    // return false;
  }


  // For determinate progress bar 
    // useEffect(() => {
    //   let interval = null;
    //   if (isActive) {
    //     interval = setInterval(() => {
    //       // setSeconds(seconds => seconds + 10);
    //       seconds += 10;
    //       console.log('set seconds inside interval',seconds);
    //     }, 250);
    //   } else if (!isActive && seconds !== 0) {
    //     console.log('clear interval',seconds);

    //     clearInterval(interval);
    //   }
    //   return () => clearInterval(interval);
    // }, [isActive, seconds]);
  

  const params = {
    direction: 'vertical',
    autoplay: autoPlay,
    speed : 1000,
    loop:true,
    // loopedSlides:4,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    renderNextButton: () => <CircularProgressBar  thickness={2.5} disableShrink={false}  size={48} play={play} handlePause={handlePause} handlePlay={handlePlay}/>,
    navigation: {
      nextEl: '.swiper-button-next',
    },
    rebuildOnUpdate: true,
    on: {
      realIndexChange:()=>{
        if(currentSlide == 3){
          currentSlide = 0;
        }else{
          currentSlide += 1;
        }
        // setProgress(0);
      }
    },
    // effect:"cube",
    // fadeEffect: {
    //   crossFade: true
    // },
    // coverflowEffect: {
    //   rotate: 30,
    //   slideShadows: false,
    // },
    // flipEffect: {
    //   rotate: 30,
    //   slideShadows: false,
    // },
    // cubeEffect: {
    //   slideShadows: false,
    // },
  }

  return(
    <div className="home-banner-sec">
      <Swiper {...params} activeSlideKey={activeSlideKey}>
        <div className="single-img" key='0'>
          <img src={BannerImg1} className="main-slider-img" alt="site_img" />
        </div>
        <div className="single-img" key='1'>
          <img src={BannerImg2} className="main-slider-img" alt="site_img" />
        </div>
        <div className="single-img" key='2'>
          <img src={BannerImg3} className="main-slider-img" alt="site_img" />
        </div> 
        <div className="single-img" key='3'>
          <img src={BannerImg4} className="main-slider-img" alt="site_img" />
        </div>
        
      </Swiper>
    </div>
  )
}
 
export default Homepagebanner;