import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

/**
* @author
* @function LottiAnimations
**/

const LottiAnimations = (props) => {
    const {Illustration, height, width} =props;
  return(
    <>
    
    <Player
  autoplay={true}
  loop={true}
  src={Illustration}
  style={{ height: '650px', width: '850px' }}
>
  {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
</Player>
    
    </>
   )

 }

export default LottiAnimations