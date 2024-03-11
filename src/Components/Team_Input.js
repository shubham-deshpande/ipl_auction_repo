import React, { useState, useEffect } from 'react';

export default function TeamInput({ teamName }) {
    const initialUserState = {
        cost1: 0.0, cost2: 0.0, cost3: 0.0, cost4: 0.0, cost5: 0.0, cost6: 0.0
    };

    const initialCostState = {
        cost7: 20.0
    };

    const [user, setUser] = useState(initialUserState);
    const [cost, setCost] = useState(initialCostState);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem(`user_${teamName}`));
        const savedCost = JSON.parse(localStorage.getItem(`cost_${teamName}`));
        if (savedUser) {
            setUser(savedUser);
        }
        if (savedCost) {
            setCost(savedCost);
        }
    }, [teamName]);

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUser(prevState => {
            const updatedUser = {...prevState, [name]: parseFloat(value)};
            const remainingCost = 20.0 - (updatedUser.cost1 + updatedUser.cost2 + updatedUser.cost3 + updatedUser.cost4 + updatedUser.cost5 + updatedUser.cost6);
            setCost({...cost, cost7: remainingCost});
            localStorage.setItem(`user_${teamName}`, JSON.stringify(updatedUser));
            localStorage.setItem(`cost_${teamName}`, JSON.stringify({...cost, cost7: remainingCost}));
            return updatedUser;
        });
    };

    return (
        <>
            <div className='textbox'>
                <input type='text' className='name_input' placeholder='Purchased By' />
                <input type='number' className='input' name='cost6' placeholder='Cost' value={user.cost6} onChange={handleInputs} />
            </div>
            <div className='textbox'>
                <input type='text' className='name_input' placeholder='Player Name' />
                <input type='number' className='input' name='cost1' placeholder='Cost' value={user.cost1} onChange={handleInputs} />
            </div>
            <div className='textbox'>
                <input type='text' className='name_input' placeholder='Player Name' />
                <input type='number' className='input' name='cost2' placeholder='Cost' value={user.cost2} onChange={handleInputs} />
            </div>
            <div className='textbox'>
                <input type='text' className='name_input' placeholder='Player Name' />
                <input type='number' className='input' name='cost3' placeholder='Cost' value={user.cost3} onChange={handleInputs} />
            </div>
            <div className='textbox'>
                <input type='text' className='name_input' placeholder='Player Name' />
                <input type='number' className='input' name='cost4' placeholder='Cost' value={user.cost4} onChange={handleInputs} />
            </div>
            <div className='textbox'>
                <input type='text' className='name_input' placeholder='Player Name' />
                <input type='number' className='input' name='cost5' placeholder='Cost' value={user.cost5} onChange={handleInputs} />
            </div>
            <div className='textbox'>
                <p className='purse_text'>Remaining Purse : </p>
                <input type='number' className='input' placeholder='Cost' name='cost7' value={cost.cost7} readOnly />
            </div>
        </>
    );
}
