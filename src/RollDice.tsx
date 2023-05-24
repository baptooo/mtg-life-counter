import { useState, useEffect } from 'react';
import './RollDice.css';
import { getRoll } from './use-roll';

const ROLLS = 100;

export const RollDice = ({ value = 0, revert = false, greater = false }) => {
    const [rolls, setRolls] = useState(ROLLS);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        setRolls(ROLLS)
        setDisplayValue(0)
    }, [value])

    useEffect(() => {
        if (rolls === 0) {
            setDisplayValue(value);
            return;
        }

        requestAnimationFrame(() => {
            setRolls(rolls - 1);
            setDisplayValue(getRoll())
        })
    }, [rolls, value])
    
    return (
        <div className={`roll-dice ${revert ? 'revert' : ''} ${rolls > 0 ? 'rolling' : ''}`}>
            <p className={`number ${greater ? 'greater' : 'smaller'}`}>{displayValue}</p>
        </div>
    )
}