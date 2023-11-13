import React from 'react'
import { increment, decrement, incrementByAmount } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const [incrementAmount, setIncrementAmount] = React.useState(1)
    const dispatch = useDispatch()

    return (
        <div>
            <span>{count}</span>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
            <div>
                <input type="text" value={'' + incrementAmount} onChange={e => setIncrementAmount(parseInt(e.target.value))} />
                <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>Add Amount</button>
            </div>
        </div>
    )
}

export default Counter