import React from 'react';
import Spotlight from 'react-spotlight';

/**
* @author
* @function Test1
**/

export const Test1 = (props) => {
  return(





    <div>
        <Spotlight
  x={50}
  y={50}
  color="#9a9a9a"
  radius={100}
  responsive
  usePercentage
  animSpeed={1000}
  borderColor="#ddd"
  borderWidth={5}>


  <div style={{
    position: 'absolute',
    left: '20%',
    top: '-50px',
    transform: 'translate(-50%, -100%)',
    whiteSpace: 'nowrap'
  }}>



    <h1>This Mobile number Not a Register Mobile no</h1>




  </div>
</Spotlight>
    </div>
    
    
   )

 }