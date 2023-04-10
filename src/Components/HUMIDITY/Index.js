
import React from "react";
import { UseWeatherAPPContext } from "../../Context/Context";


const HUMIDITYComponents = () => {

    let { state: { current, city } } = UseWeatherAPPContext();
    console.log(current, city);

    return (
        <div className="humidityWrap">
            hello
        </div>
    )
}


export default HUMIDITYComponents;