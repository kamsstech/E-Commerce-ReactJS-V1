import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import BannerImg1 from "../../../assets/images/banner.png";
import BannerImg2 from "../../../assets/images/banner-2.png";
import BannerImg3 from "../../../assets/images/banner3.png";
import BannerImg4 from "../../../assets/images/banner4.png";
// import {Controller } from 'swiper/js/swiper.esm';
import NewProgressBar from './NewProgress.js';
import CircularProgressBar from './CircularProgress';
import './css/Banner.css';


const BannerX = (props) => {

    const [updateSwiper,setUpdateSwiper] = useState(null);
    const [playing, setPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const [seconds, setSeconds] = useState(50);
    const [barVisible, setBarVisible] = useState(false);

    const handlePause = () => {
        setProgress(0);
        setPlaying(false);
        setSeconds(0);
    };

    const handlePlay = () => {
        setPlaying(true);
        setProgress(0);
        setSeconds(50);
    }

    useEffect(() => {

       

        if (playing) {
            
            const timer = setTimeout(() => {
                if (progress === 0) {
                    setBarVisible(true)
                }
                if (progress >= 100) {
                   
                    // if (swiper.realIndex === 2) {
                    //     swiper.realIndex = 1;
                    // }
                    // newProgress = 0;
                    // updateSwiper(1)
                   
                    setProgress(-18);
                    // console.log(swiper.realIndex,"swiper.realIndex")
                    setBarVisible(true)
                    setUpdateSwiper(Swiper.slideNext())
                //    Swiper.slideNext();
                    // swiper.slideNext();
                } else {
                    console.log(progress,"<<progress")
                    setProgress(prevProgress => prevProgress + 1);
                }

                setSeconds(0);

            }, seconds);

            return () => {
                clearInterval(timer);
                setSeconds(50);
            };
        }
    }, [seconds, playing]);




    const params = {
        Swiper,
        direction: 'vertical',
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        loop: true,
        // modules: [Controller],
        modules: [],

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        
    }

    return (
        <div className="home-banner-sec">
            <Swiper {...params} getSwiper={updateSwiper}>
                <div className="single-img" key='0'>
                    {/* {Array.isArray(props.bannerimages.payload) && props.bannerimages.payload.length > 0 && props.bannerimages.payload[0].map((item) => (
                        <div>
                            <img src={item.key === '1' ? item.value : null} className="main-slider-img" alt="site_img" />
                        </div>
                    ))} */}
                    <img src={BannerImg1} className="main-slider-img" alt="site_img" />
                </div>
                <div className="single-img" key='1'>
                    {/* {Array.isArray(props.bannerimages.payload) && props.bannerimages.payload.length > 0 && <img src={props.bannerimages.payload[0][1].value} className="main-slider-img" alt="site_img" />} */}

                    <img src={BannerImg2} className="main-slider-img" alt="site_img" />


                </div>
                <div className="single-img" key='2'>
                    {/* {Array.isArray(props.bannerimages.payload) && props.bannerimages.payload.length > 0 && <img src={props.bannerimages.payload[0][2].value} className="main-slider-img" alt="site_img" />} */}

                    <img src={BannerImg3} className="main-slider-img" alt="site_img" />


                </div>
                <div className="single-img" key='3'>
                    {/* {Array.isArray(props.bannerimages.payload) && props.bannerimages.payload.length > 0 && <img src={props.bannerimages.payload[0][3].value.replace('h', "")} className="main-slider-img" alt="site_img" />} */}

                    <img src={BannerImg4} className="main-slider-img" alt="site_img" />

                </div>
            </Swiper>

            <CircularProgressBar thickness={2.5} size={48} play={playing} handlePause={handlePause} handlePlay={handlePlay} progressb={progress} isBarVisible={barVisible} />

            {/* <NewProgressBar  thickness={2.5} disableShrink={false}  size={48} play={playing} handlePause={handlePause} handlePlay={handlePlay} progressb={progress}/> */}
        </div>
    )
}

export default BannerX;