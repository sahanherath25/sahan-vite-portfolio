
import React from "react";
import WaterWave from 'react-water-wave';

const WaterWaveWrapper=({children,image})=>{
    return(
        <WaterWave imageUrl={image}>
            {children}
        </WaterWave>
    )
}

export default WaterWaveWrapper