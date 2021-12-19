import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { decrement, increment } from './counterSlice'

export default function Counter(){
// The `state` arg is correctly typed as `RootState` already
const count = useAppSelector((state) => state.counter.value)
const dispatch = useAppDispatch()
const plusHandler=()=>dispatch(increment())

const minusHandler =()=>dispatch(decrement())

return (
    <div className="counter-content">
        <h2 className="counterindicator">{count}</h2>
<button onClick={plusHandler}>
Increment
</button>
<button onClick={minusHandler}>
Decrement
</button>
    </div>
)
}