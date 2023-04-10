
import React, { useContext } from "react";
import { UseWeatherAPPContext } from "../../Context/Context";


const WeekInfoCardComponents = () => {

    const {state: {daily}, dispatch} = UseWeatherAPPContext();
    console.log("daily", daily);


    return (
        <>
            <div className="cardWrap">
                <ul className="cardList">
                    <li>here data show</li>
                </ul>
            </div>
        </>
    )
}


export default WeekInfoCardComponents;