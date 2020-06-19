import React, {useContext} from 'react'
import counterContext from './CounterContext.js'

const Child = (props) => {

    let counterValue = useContext(counterContext)
    
    return (
        <div>
            <h2>This is A Child Using <q>CounterContext</q></h2>
            <h4>Counter Value is: {counterValue[0]}</h4>
            
            <button onClick={()=> {counterValue[1](++counterValue[0])}}>
                Increment
            </button>
        
        </div>
    )
}

export default Child;