import React, { useState, useEffect } from 'react';

export default function TeamInput({ teamName }) {
    const initialUserState = {
        cost1: 0.0, cost2: 0.0, cost3: 0.0, cost4: 0.0, cost5: 0.0, cost6: 0.0, cost7: 0.0, cost8: 0.0,
        name1: "", name2: "", name3: "", name4: "", name5: "", name6: "", name7: "", name8: ""
    };

    const initialCostState = {
        cost9: 20.0
    };

    const [user, setUser] = useState(initialUserState);
    const [cost, setCost] = useState(initialCostState);
    const [previousState, setPreviousState] = useState(null);

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

    const handleCostInputs = (e) => {
        const { name, value } = e.target;
        setUser(prevState => {
            const updatedUser = { ...prevState, [name]: parseFloat(value) };
            const remainingCost = 20.0 - (updatedUser.cost1 + updatedUser.cost2 + updatedUser.cost3 + updatedUser.cost4 + updatedUser.cost5 + updatedUser.cost6 + updatedUser.cost7 + updatedUser.cost8);
            setCost({ ...cost, cost9: remainingCost });
            localStorage.setItem(`user_${teamName}`, JSON.stringify(updatedUser));
            localStorage.setItem(`cost_${teamName}`, JSON.stringify({ ...cost, cost9: remainingCost }));
            return updatedUser;
        });
    };

    const handleNameInputs = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
        localStorage.setItem(`user_${teamName}`, JSON.stringify({ ...user, [name]: value }));
    };
    

    const handleReset = () => {
        setPreviousState({ user, cost });
        setUser(initialUserState);
        setCost(initialCostState);
        localStorage.removeItem(`user_${teamName}`);
        localStorage.removeItem(`cost_${teamName}`);
    };

    const handleRollback = () => {
        if (previousState) {
            setUser(previousState.user);
            setCost(previousState.cost);
            localStorage.setItem(`user_${teamName}`, JSON.stringify(previousState.user));
            localStorage.setItem(`cost_${teamName}`, JSON.stringify(previousState.cost));
            setPreviousState(null);
        }
    };

    return (
        <>
            <div className='textbox'>
                <input type='text' className='name_input' name='name1' placeholder='Purchased By' value={user.name1} onChange={handleNameInputs} />
                <input type='number' className='input' name='cost1' placeholder='Cost' value={user.cost1} onChange={handleCostInputs} />
            </div>
            <div className='textbox'>
                <input type='text' className='name_input' name='name2' placeholder='Player Name' value={user.name2} onChange={handleNameInputs} />
                <input type='number' className='input' name='cost2' placeholder='Cost' value={user.cost2} onChange={handleCostInputs} />
            </div>
            <div className='textbox'>
                <input type='text' className='name_input' name='name3' placeholder='Player Name' value={user.name3} onChange={handleNameInputs} />
                <input type='number' className='input' name='cost3' placeholder='Cost' value={user.cost3} onChange={handleCostInputs} />
            </div>
            <div className='textbox'>
                <input type='text' className='name_input' name='name4' placeholder='Player Name' value={user.name4} onChange={handleNameInputs} />
                <input type='number' className='input' name='cost4' placeholder='Cost' value={user.cost4} onChange={handleCostInputs} />
            </div>
            <div className='textbox'>
                <input type='text' className='name_input' name='name5' placeholder='Player Name' value={user.name5} onChange={handleNameInputs} />
                <input type='number' className='input' name='cost5' placeholder='Cost' value={user.cost5} onChange={handleCostInputs} />
            </div>
            <div className='textbox'>
                <input type='text' className='name_input' name='name6' placeholder='Player Name' value={user.name6} onChange={handleNameInputs} />
                <input type='number' className='input' name='cost6' placeholder='Cost' value={user.cost6} onChange={handleCostInputs} />
            </div>
            <div className='textbox'>
                <input type='text' className='name_input' name='name7' placeholder='Player Name' value={user.name7} onChange={handleNameInputs} />
                <input type='number' className='input' name='cost7' placeholder='Cost' value={user.cost7} onChange={handleCostInputs} />
            </div>
            <div className='textbox'>
                <input type='text' className='name_input' name='name8' placeholder='Player Name' value={user.name8} onChange={handleNameInputs} />
                <input type='number' className='input' name='cost8' placeholder='Cost' value={user.cost8} onChange={handleCostInputs} />
            </div>
            <div className='textbox'>
                <p className='purse_text'>Remaining Purse : </p>
                <input type='number' className='input' placeholder='Cost' name='cost9' value={cost.cost9} readOnly />
            </div>
            <button className='button' onClick={handleReset}>Reset Values</button>
            <button className='button' onClick={handleRollback}>Rollback</button>
        </>
    );
}
