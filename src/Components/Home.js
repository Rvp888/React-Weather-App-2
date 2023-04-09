
import React from 'react';
import ChooseStateComponents from './ChooseState/Index';


export default function HomeComponents() {
  return (
    <>
      <div className='homeWrap'>
        <div className='weatherSection'>
            Left HomeComponents
            <div className='rightSide'>
                <ChooseStateComponents />
                2.Weekinfo <br/>
                3.Humidity
            </div>
        </div>
      </div>
    </>
  )
}
