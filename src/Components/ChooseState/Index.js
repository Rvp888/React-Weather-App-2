import React from "react";
import cities from "../../Data/in.json";
import { UseWeatherAPPContext } from "../../Context/Context";
import axios from "axios";

export default function ChooseStateComponents() {
  const {
    state: { city },
    dispatch,
  } = UseWeatherAPPContext();
  console.log("UseWeatherAPPContext", UseWeatherAPPContext(), city);

  const handleChange = (e) => {
    const selectedCity = cities.filter((city) => {
      return city.city === e.target.value;
    })[0];
    // console.log(selectedCity);
    dispatch({
      type: "SET_CITY",
      payload: selectedCity,
    });
  };
  // api call
  const APIKEY = "e26d108e0fc2c12c4e9fe8769055daf2";
  let lat = city && city.lat ? city.lat : "";
  let long = city && city.lng ? city.lng : "";
  let exclude = "hourly,minutely";
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=
  ${exclude}&units=metric&lang=tr&appid=${APIKEY}`;


  return (
    <>
      <div className="stateWrap">
        <select
          className="stateMenu"
          defaultValue={city}
          onChange={handleChange}
        >
          {cities &&
            cities.length > 0 &&
            cities.map((city) => {
              return (
                <option key={`${city.population}${city.lat}`} value={city.city}>
                  {city.city} - {city.admin_name}
                </option>
              );
            })}
        </select>
      </div>
    </>
  );
}
