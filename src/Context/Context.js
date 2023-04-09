
import React, { useReducer, useContext, createContext } from "react";
import { WeatherReducer } from "./Reducer";


const weatherAPPContext = createContext();

const WeatherAPPProvider = ({children}) => {

    const [state, dispatch] = useReducer(WeatherReducer, {
        city: {
            "city": "Delhi", 
            "lat": "28.6600", 
            "lng": "77.2300", 
            "country": "India", 
            "iso2": "IN", 
            "admin_name": "Delhi", 
            "capital": "admin", 
            "population": "29617000", 
            "population_proper": "16753235"
          },
        current: "",
        daily: "",
    })

    return (
        <>
            <weatherAPPContext.Provider value={{state, dispatch}} >
                {children}
            </weatherAPPContext.Provider>
        </>
    )
}

export default WeatherAPPProvider;

export const UseWeatherAPPContext = () => {
    return useContext(weatherAPPContext);
}