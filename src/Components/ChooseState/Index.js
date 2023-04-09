
import React from 'react';
import cities from "../../Data/in.json";



export default function ChooseStateComponents() {
  return (
    <>
      <div className='stateWrap'>
        <select className='stateMenu'>
            {
                cities && cities.length > 0  && cities.map((city) => {
                    
                })
            }
        </select>
      </div>
    </>
  )
}
