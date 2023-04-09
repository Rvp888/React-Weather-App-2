
import React from 'react';
import cities from "../../Data/in.json";
import { UseWeatherAPPContext } from '../../Context/Context';



export default function ChooseStateComponents() {
    console.log('UseWeatherAPPContext',UseWeatherAPPContext());

    const {state:{city},dispatch} = UseWeatherAPPContext();

  return (
    <>
      <div className='stateWrap'>
        <select className='stateMenu'>
            {
                cities && cities.length > 0  && cities.map((city) => {
                    return (
                        <option key={`${city.population}${city.lat}`} value={city.city}>
                            {city.city} - {city.admin_name}
                        </option>
                    )
                })
            }
        </select>
      </div>
    </>
  )
}
