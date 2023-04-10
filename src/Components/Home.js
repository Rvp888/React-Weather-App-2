
import React from 'react';
import ChooseStateComponents from './ChooseState/Index';
import WeekInfoCardComponents from './WeekInfoCard/Index';
import HUMIDITYComponents from './HUMIDITY/Index';


export default function HomeComponents() {
  return (
    <>
      <div className='homeWrap'>
        <div className='weatherSection'>
            Left HomeComponents
            <div className='rightSide'>
                <ChooseStateComponents />
                <WeekInfoCardComponents /> 
                <HUMIDITYComponents />
            </div>
        </div>
      </div>
    </>
  )
}
