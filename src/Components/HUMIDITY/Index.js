
import React from "react";
import { UseWeatherAPPContext } from "../../Context/Context";


const HUMIDITYComponents = () => {

    let { state: { current, city } } = UseWeatherAPPContext();
    // console.log(current, city);
    const uvLevel = (uvLevel) => {
        if(uvLevel <= 2) return "Low";
        if(uvLevel <= 5) return "Medium";
        if(uvLevel <= 7) return "High";
        if(uvLevel > 7) return "Very High";
    }

    return (
        <>
            {
                current ? <div className="humidityWrap">
                    <div className="humidityData">
                        <div className="title">UV Index</div>
                        <div className="value">{current.humidity} %</div>
                    </div>
                </div> : ""
            }
        </>
        
    )
}


export default HUMIDITYComponents;