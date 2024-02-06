import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/counterSlice'

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div>
      <h1>Counter (with Slice)</h1>
      <button
        aria-label="Увеличить значение"
        onClick={() => dispatch(increment())}
      >
        Увеличить
      </button>
      <span> {count} </span>
      <button
        aria-label="Уменьшить значение"
        onClick={() => dispatch(decrement())}
      >
        Уменьшить
      </button>
    </div>
  )
}

export default Counter;