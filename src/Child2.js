import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer.js';

const Child2 = () => {
    
    let [state, dispatch] = useReducer(CounterReducer, 1);
    console.log(state)
    return (
        <div>
            <h2>This is 2nd Child Using <q>CounterReducer</q></h2>
            <h3>Value of Reducer State is {state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}

export default Child2