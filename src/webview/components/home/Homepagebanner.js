import React, { useState, useRef, useEffect,useCallback } from 'react';
import Swiper from 'react-id-swiper';
import { makeStyles } from "@material-ui/core/styles";
// import DemmoBanner from "../../../assets/images/banner/pharmassist-01.png";
import DemmoBanner from "../../../assets/images/banner/demo_banner1.png";
import BannerImg1 from "../../../assets/images/banner.png";
import BannerImg2 from "../../../assets/images/banner-2.png";
import BannerImg3 from "../../../assets/images/banner3.png";
import BannerImg4 from "../../../assets/images/banner4.png";
import CircularProgressBar from './CircularProgress';
import './css/Banner.css';

var currentSlide = 0;
// var seconds = 0;


const Homepagebanner = (props) => {
	const [updateSwiper,setUpdateSwiper] = useState(null);
	const [playing, setPlaying] =  useState(true);
	const [progress, setProgress] =  useState(0);
	const [seconds, setSeconds] =  useState(50);
	const [barVisible, setBarVisible] =  useState(false);
const {bannerResponse}=props;
// console.log(bannerResponse, "<< bannerResponse");
const [arrayRes,setArrayRes] = useState([]);
 const [autoPlay, setAutoPlay] = useState({
	delay: 1500,
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
 const [pausedImg,setPausedImg] = useState()

	// for determinate progress bar
	// const [seconds, setSeconds] = useState(0);
	// const [isActive, setIsActive] = useState(true);
	
// console.log(arrayRes,"<<< arrayRes")

	const handlePause = () => {
	//  console.log('pause',swiper)
	// localStorage.setItem('currentSlide',currentSlide)

	setAutoPlay(false)
	setPlaying(false);
	localStorage.setItem('currentSlide',currentSlide)
	// console.log('in pause cslide',currentSlide)

	setActiveSlideKey(""+currentSlide);
	// setSeconds(0);
	// seconds = 0;
	// setIsActive(false);

let array = arrayRes[localStorage.getItem("slideInd")]
setPausedImg(array)
	};
//   const handlePause = () => {
//     setProgress(0);
//     setPlaying(false);
//     setSeconds(0);
// };

const handlePlay = () => {
	setPlaying(true);
	setProgress(0);
	setSeconds(50);
	setAutoPlay({
		delay: 1500,
		disableOnInteraction: false
	});

	currentSlide = parseInt(localStorage.getItem('currentSlide'));
	if(currentSlide){
		currentSlide -=1;
	}
}

useEffect(() => {
	localStorage.setItem("slideInd","0")
}, [])


useEffect(() => {

	 

	// if (playing) {
		
	// 	const timer = setTimeout(() => {
	// 		if (progress === 0) {
	// 			setBarVisible(true)
	// 		}
	// 		if (progress >= 100) {
				 
	// 			// if (swiper.realIndex === 2) {
	// 			//     swiper.realIndex = 1;
	// 			// }
	// 			// newProgress = 0;
	// 			// updateSwiper(1)
				 
	// 			setProgress(-18);
	// 			// console.log(swiper.realIndex,"swiper.realIndex")
	// 			setBarVisible(true)
	// 			setUpdateSwiper(Swiper.slideNext())
	// 		//    Swiper.slideNext();
	// 			// swiper.slideNext();
	// 		} else {
	// 			// console.log(progress,"<<progress")
	// 			setProgress(prevProgress => prevProgress + 1);
	// 		}

	// 		setSeconds(0);

	// 	}, seconds);

	// 	return () => {
	// 		clearInterval(timer);
	// 		setSeconds(50);
	// 	};
	// }
}, [seconds, playing]);



	const handlePlay1 = () => {
	setPlay(true);
	
	setAutoPlay({
		delay: 1500,
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
	speed : 2000,
	loop:true,
	// loopedSlides:4,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	// renderNextButton: () => <CircularProgressBar className="progressSlider"  thickness={2.5} disableShrink={false}  size={48} play={play} handlePause={handlePause} handlePlay={handlePlay}/>,
	// navigation: {
	//   nextEl: '.swiper-button-next',
	// },
	rebuildOnUpdate: true,
	on: {
		realIndexChange:()=>{
		if(currentSlide == arrayRes.length - 1){
			currentSlide = 0;
			localStorage.setItem("slideInd",currentSlide)
		}else{
			currentSlide += 1;
			localStorage.setItem("slideInd",currentSlide)
		}
		
		
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


	
	useEffect(() => {
	
		if(Array.isArray(bannerResponse.payload.data) &&  bannerResponse.payload.data.length > 0 ){
			console.log(bannerResponse.payload.data)
		setArrayRes(bannerResponse.payload.data)
		}
	
 }, [bannerResponse.payload.data])

useEffect(() => {
if(playing === true){
	let temp = localStorage.getItem("slideInd")
	setActiveSlideKey(temp)
}
}, [playing])
	
	return(
	<div className="home-banner-sec">
		<Swiper {...params} activeSlideKey={activeSlideKey} noSwiping={!playing}>
		{
			Array.isArray(arrayRes) && arrayRes.length > 0 && arrayRes.map((item, index) => (
			<div className="single-img" key={index}>
			<img 
			src={'http://35.224.80.84/apiaction/'+item.c_banner_image} 
			onError={(e) => {
				e.target.src = BannerImg1
				}} 
				className="main-slider-img" 
				alt="site_img" />
			</div>
		))
		 }
		</Swiper>
		
		<CircularProgressBar
			className="progressSlider" 
			thickness={2.5} 
			size={48} 
			play={playing} 
			handlePause={handlePause} 
			handlePlay={handlePlay} 
			progressb={progress} 
			isBarVisible={barVisible} 
		 />
	</div>
	)
}
 
export default Homepagebanner;