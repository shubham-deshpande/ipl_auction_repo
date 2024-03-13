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
                    <div className='break-mi'>
                        <div className='head-mi'>
                            <img src={MI} className='img-logo' alt='MI' />
                            <p className='team_name_mi'>Mumbai Indians</p>
                        </div>
                        <TeamInput teamName='MI' />
                    </div>
                    <div className='break-csk'>
                        <div className='head-csk'>
                            <img src={CSK} className='img-logo' alt='CSK' />
                            <p className='team_name_csk'>Chennai Super Kings</p>
                        </div>
                        <TeamInput teamName='CSK' />
                    </div>
                    <div className='break-rcb'>
                        <div className='head-rcb'>
                            <img src={RCB} className='img-logo' alt='RCB' />
                            <p className='team_name_rcb'>Royal Challengers Bangalore</p>
                        </div>
                        <TeamInput teamName='RCB' />
                    </div>
                    <div className='break-lsg'>
                        <div className='head-lsg'>
                            <img src={LSG} className='img-logo' alt='LSG' />
                            <p className='team_name_lsg'>Lucknow Super Giants</p>
                        </div>
                        <TeamInput teamName='LSG' />
                    </div>
                    <div className='break-gt'>
                        <div className='head-gt'>
                            <img src={GT} className='img-logo' alt='GT' />
                            <p className='team_name_gt'>Gujarat Titans</p>
                        </div>
                        <TeamInput teamName='GT' />
                    </div>
                    <div className='break-dc'>
                        <div className='head-dc'>
                            <img src={DC} className='img-logo' alt='DC' />
                            <p className='team_name_dc'>Delhi Capitals</p>
                        </div>
                        <TeamInput teamName='DC' />
                    </div>
                    <div className='break-kkr'>
                        <div className='head-kkr'>
                            <img src={KKR} className='img-logo' alt='KKR' />
                            <p className='team_name_kkr'>Kolkata Knight Riders</p>
                        </div>
                        <TeamInput teamName='KKR' />
                    </div>
                    <div className='break-rr'>
                        <div className='head-rr'>
                            <img src={RR} className='img-logo' alt='RR' />
                            <p className='team_name_rr'>Rajasthan Royals</p>
                        </div>
                        <TeamInput teamName='RR' />
                    </div>
                    <div className='break-pbks'>
                        <div className='head-pbks'>
                            <img src={PBKS} className='img-logo' alt='PBKS' />
                            <p className='team_name_pbks'>Punjab Kings</p>
                        </div>
                        <TeamInput teamName='PBKS' />
                    </div>
                    <div className='break-srh'>
                        <div className='head-srh'>
                            <img src={SRH} className='img-logo' alt='SRH' />
                            <p className='team_name_srh'>Sunrisers Hyderabad</p>
                        </div>
                        <TeamInput teamName='SRH' />
                    </div>
                </div>
            </div>
        </>
    );
}
