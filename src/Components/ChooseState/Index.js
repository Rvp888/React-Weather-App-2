
import React from 'react';
import cities from "../../Data/in.json";
import { UseWeatherAPPContext } from '../../Context/Context';



export default function ChooseStateComponents() {

    const {state:{city},dispatch} = UseWeatherAPPContext();
    console.log('UseWeatherAPPContext',UseWeatherAPPContext(),city);

    const handleChange = (e) => {
        const selectedCity = cities.filter((city)=>{
           return  city.city === e.target.value
        })[0]
        console.log(selectedCity);
    }

  return (
    <>
      <div className='stateWrap'>
        <select className='stateMenu' defaultValue={city} onChange={handleChange} >
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
