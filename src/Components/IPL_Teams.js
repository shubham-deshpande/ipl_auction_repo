import React, { useEffect, useState } from 'react';
import './IPL_Teams.css';
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

export default function IPLTeams() {
    const initialTeamInputs = {
        MI: '', CSK: '', RCB: '', LSG: '', GT: '', DC: '', KKR: '', RR: '', PBKS: '', SRH: ''
    };

    const [teamInputs, setTeamInputs] = useState(initialTeamInputs);
    const [previousState, setPreviousState] = useState(null);

    useEffect(() => {
        const savedInputs = JSON.parse(localStorage.getItem('teamInputs'));
        if (savedInputs) {
            setTeamInputs(savedInputs);
        }
    }, []);

    const handleInputChange = (team, value) => {
        const updatedInputs = { ...teamInputs, [team]: value };
        setTeamInputs(updatedInputs);
        localStorage.setItem('teamInputs', JSON.stringify(updatedInputs));
    };

    const handleReset = () => {
        setPreviousState(teamInputs);
        setTeamInputs(initialTeamInputs);
        localStorage.removeItem('teamInputs');
    };

    const handleRollback = () => {
        if (previousState) {
            setTeamInputs(previousState);
            localStorage.setItem('teamInputs', JSON.stringify(previousState));
            setPreviousState(null);
        }
    };

    return (
        <>
            <div className="outer">
                <div className='inner'>
                    <div className='brk'>
                        <div className='txt'>
                            <img src={MI} className='img' alt='MI'></img>
                            <input
                                type='text'
                                className='inp'
                                value={teamInputs['MI']}
                                onChange={(e) => handleInputChange('MI', e.target.value)}
                            ></input>
                        </div>
                        <div className='txt'>
                            <img src={CSK} className='img' alt='CSK'></img>
                            <input
                                type='text'
                                className='inp'
                                value={teamInputs['CSK']}
                                onChange={(e) => handleInputChange('CSK', e.target.value)}
                            ></input>
                        </div>
                        <div className='txt'>
                            <img src={RCB} className='img' alt='RCB'></img>
                            <input
                                type='text'
                                className='inp'
                                value={teamInputs['RCB']}
                                onChange={(e) => handleInputChange('RCB', e.target.value)}
                            ></input>
                        </div>
                        <div className='txt'>
                            <img src={LSG} className='img' alt='LSG'></img>
                            <input
                                type='text'
                                className='inp'
                                value={teamInputs['LSG']}
                                onChange={(e) => handleInputChange('LSG', e.target.value)}
                            ></input>
                        </div>
                        <div className='txt'>
                            <img src={GT} className='img' alt='GT'></img>
                            <input
                                type='text'
                                className='inp'
                                value={teamInputs['GT']}
                                onChange={(e) => handleInputChange('GT', e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className='brk'>
                        <div className='txt'>
                            <img src={DC} className='img' alt='DC'></img>
                            <input
                                type='text'
                                className='inp'
                                value={teamInputs['DC']}
                                onChange={(e) => handleInputChange('DC', e.target.value)}
                            ></input>
                        </div>
                        <div className='txt'>
                            <img src={KKR} className='img' alt='KKR'></img>
                            <input
                                type='text'
                                className='inp'
                                value={teamInputs['KKR']}
                                onChange={(e) => handleInputChange('KKR', e.target.value)}
                            ></input>
                        </div>
                        <div className='txt'>
                            <img src={RR} className='img' alt='RR'></img>
                            <input
                                type='text'
                                className='inp'
                                value={teamInputs['RR']}
                                onChange={(e) => handleInputChange('RR', e.target.value)}
                            ></input>
                        </div>
                        <div className='txt'>
                            <img src={PBKS} className='img' alt='PBKS'></img>
                            <input
                                type='text'
                                className='inp'
                                value={teamInputs['PBKS']}
                                onChange={(e) => handleInputChange('PBKS', e.target.value)}
                            ></input>
                        </div>
                        <div className='txt'>
                            <img src={SRH} className='img' alt='SRH'></img>
                            <input
                                type='text'
                                className='inp'
                                value={teamInputs['SRH']}
                                onChange={(e) => handleInputChange('SRH', e.target.value)}
                            ></input>
                        </div>
                    </div>
                </div>
                <button className = 'button' onClick={handleReset}>Reset Values</button>
            <button className = 'button' onClick={handleRollback}>Rollback</button>
            </div>
        </>
    );
}
