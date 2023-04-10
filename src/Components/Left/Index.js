
import React from "react";

import dayjs from "dayjs";

import { UseWeatherAPPContext } from "../../Context/Context";


const LeftComponents = () => {

    const { state: { city, current } } = UseWeatherAPPContext();

    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    if(!current) return <div>Loading...</div>

    const weekdayindex = dayjs.unix(current.dt).day();


    return (
        <>
            <div className="leftWrap">
                <div className="dateWrap">
                    <h2>{WEEKDAYS[weekdayindex]}</h2>
                </div>
            </div>
        </>
    )
}

export default LeftComponents;