
import React, { useReducer, useContext, createContext } from "react";
import { WeatherReducer } from "./Reducer";


const weatherAPPContext = createContext();

const WeatherAPPProvider = ({children}) => {

    const [state, dispatch] = useReducer(WeatherReducer, {
        city: "",
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

export default weatherAPPContext;