import React from 'react'
import './IPL_Players.css'
import Team_Input from './Team_Input';

export default function 
() {
  return (
    <>
        <div className="outline">
          <div className='inner-outline'>
            <div className='break'>
                <div className='head'>
                    <p>Team A</p>
                </div>
                <Team_Input/>
            </div>
            <div className='break'>
                <div className='head'>
                    <p>Team B</p>
                </div>
                <Team_Input/>
            </div>
            <div className='break'>
                <div className='head'>
                    <p>Team C</p>
                </div>
                <Team_Input/>
            </div>
            <div className='break'>
                <div className='head'>
                    <p>Team D</p>
                </div>
                <Team_Input/>
            </div>
            <div className='break'>
                <div className='head'>
                    <p>Team E</p>
                </div>
                <Team_Input/>
            </div>
            <div className='break'>
                <div className='head'>
                    <p>Team F</p>
                </div>
                <Team_Input/>
            </div>
            <div className='break'>
                <div className='head'>
                    <p>Team G</p>
                </div>
                <Team_Input/>
            </div>
            <div className='break'>
                <div className='head'>
                    <p>Team H</p>
                </div>
                <Team_Input/>
            </div>
            <div className='break'>
                <div className='head'>
                    <p>Team I</p>
                </div>
                <Team_Input/>
            </div>
            <div className='break'>
                <div className='head'>
                    <p>Team J</p>
                </div>
                <Team_Input/>
            </div>
          </div>
        </div>
    </>
  );
}
