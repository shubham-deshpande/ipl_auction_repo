import React from 'react';
import TeamInput from './Team_Input';
import './IPL_Players.css';
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

export default function IPLPlayers() {
    return (
        <>
            <div className="outline">
                <div className='inner-outline'>
                    <div className='break'>
                        <div className='head'>
                            <img src={MI} className='img-logo' alt='MI' />
                            <p className='team_name'>Mumbai Indians</p>
                        </div>
                        <TeamInput teamName='MI' />
                    </div>
                    <div className='break'>
                        <div className='head'>
                            <img src={CSK} className='img-logo' alt='CSK' />
                            <p className='team_name'>Chennai Super Kings</p>
                        </div>
                        <TeamInput teamName='CSK' />
                    </div>
                    <div className='break'>
                        <div className='head'>
                            <img src={RCB} className='img-logo' alt='RCB' />
                            <p className='team_name_RCB'>Royal Challengers Bangalore</p>
                        </div>
                        <TeamInput teamName='RCB' />
                    </div>
                    <div className='break'>
                        <div className='head'>
                            <img src={LSG} className='img-logo' alt='LSG' />
                            <p className='team_name'>Lucknow Super Giants</p>
                        </div>
                        <TeamInput teamName='LSG' />
                    </div>
                    <div className='break'>
                        <div className='head'>
                            <img src={GT} className='img-logo' alt='GT' />
                            <p className='team_name'>Gujarat Titans</p>
                        </div>
                        <TeamInput teamName='GT' />
                    </div>
                    <div className='break'>
                        <div className='head'>
                            <img src={DC} className='img-logo' alt='DC' />
                            <p className='team_name'>Delhi Capitals</p>
                        </div>
                        <TeamInput teamName='DC' />
                    </div>
                    <div className='break'>
                        <div className='head'>
                            <img src={KKR} className='img-logo' alt='KKR' />
                            <p className='team_name'>Kolakata Knight Riders</p>
                        </div>
                        <TeamInput teamName='KKR' />
                    </div>
                    <div className='break'>
                        <div className='head'>
                            <img src={RR} className='img-logo' alt='RR' />
                            <p className='team_name'>Rajasthan Royals</p>
                        </div>
                        <TeamInput teamName='RR' />
                    </div>
                    <div className='break'>
                        <div className='head'>
                            <img src={PBKS} className='img-logo' alt='PBKS' />
                            <p className='team_name'>Punjab Kings</p>
                        </div>
                        <TeamInput teamName='PBKS' />
                    </div>
                    <div className='break'>
                        <div className='head'>
                            <img src={SRH} className='img-logo' alt='SRH' />
                            <p className='team_name'>Sunrisers Hyderabad</p>
                        </div>
                        <TeamInput teamName='SRH' />
                    </div>
                </div>
            </div>
        </>
    );
}
