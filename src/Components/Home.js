
import React from 'react';
import ChooseStateComponents from './ChooseState/Index';
import WeekInfoCardComponents from './WeekInfoCard/Index';


export default function HomeComponents() {
  return (
    <>
      <div className='homeWrap'>
        <div className='weatherSection'>
            Left HomeComponents
            <div className='rightSide'>
                <ChooseStateComponents />
                <WeekInfoCardComponents /> <br />
                3.Humidity
            </div>
        </div>
      </div>
    </>
  )
}
