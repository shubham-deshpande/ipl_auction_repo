import React from 'react'
import './IPL_Teams.css'
import DC from './DCoutline.png';
import LSG from './LSGoutline.png';
import MI from './MIoutline.png';
import CSK from './CSKoutline.png';
import RCB from './RCBoutline.png';
import GT from './GToutline.png';
import PBKS from './PBKSoutline.png';
import RR from './RRoutline.png';
import SRH from './SRHoutline.png';
import KKR from './KKRoutline.png';

export default function 
() {
  return (
    <>
        <div className="outer">
          <div className='inner'>
            <div className='brk'>
              <div className='txt'>
                <img src={MI} className='img'></img>
                <input type='text' className='inp'></input>
              </div>
              <div className='txt'>
              <img src={CSK} className='img'></img>
                <input type='text' className='inp'></input>
              </div>
              <div className='txt'>
              <img src={RCB} className='img'></img>
                <input type='text' className='inp'></input>
              </div>
              <div className='txt'>
              <img src={LSG} className='img'></img>
                <input type='text' className='inp'></input>
              </div>
              <div className='txt'>
              <img src={GT} className='img'></img>
                <input type='text' className='inp'></input>
              </div>
            </div>
            <div className='brk'>
              <div className='txt'>
                <img src={DC} className='img'></img>
                <input type='text' className='inp'></input>
              </div>
              <div className='txt'>
              <img src={KKR} className='img'></img>
                <input type='text' className='inp'></input>
              </div>
              <div className='txt'>
              <img src={RR} className='img'></img>
                <input type='text' className='inp'></input>
              </div>
              <div className='txt'>
              <img src={PBKS} className='img'></img>
                <input type='text' className='inp'></input>
              </div>
              <div className='txt'>
              <img src={SRH} className='img'></img>
                <input type='text' className='inp'></input>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
