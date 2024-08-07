import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './Redux/store'
import { decrement, increment, reset } from './Redux/counterSlice'
import "./App.css"

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state: RootState) => state.counter.value)
  return (
    <div className='counter_app'>
        <h1>Counter App</h1>
        <div className='counter_button'>
            <button className='increment'onClick={() => dispatch(increment())}>Increment</button>
            <span>{count}</span>
            <button className='decrement' onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
        <div><button className='reset_button' onClick={() => dispatch(reset())}>Reset</button></div>
    </div>
  )
}

export default Counter