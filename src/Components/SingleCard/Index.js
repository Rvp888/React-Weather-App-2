
import React from "react";
import dayjs from 'dayjs';




const SingleCardComponents = ( {item, className, onClick} ) => {

    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    const weekdayindex = dayjs.unix(item.dt).day();
        

    return (
        <>
            <li key={item.moonrise} className={className} onClick={onClick}>
                <img alt="rohit" className="day-icon" src={`http://openweathermap.org/img/wn/${item.weather[0]}@2x.png`} />
            </li>
        </>
    )
}


export default SingleCardComponents;