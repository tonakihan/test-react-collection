import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncDecrement, asyncIncrement, decrement, increment } from '../store/counterSlice'

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div style={{marginTop: '10px', border: "1px solid black"}}>
      <h1>Counter (with Slice)</h1>
      <h2>Прямой вызов - синхронный</h2>
      <div>
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
      <div>
        <h2>Async (с искуственной задержкой)</h2>
        <button
          aria-label="Увеличить значение"
          onClick={() => dispatch(asyncIncrement())}
        >
          Увеличить
        </button>
        <span> {count} </span>
        <button
          aria-label="Уменьшить значение"
          onClick={() => dispatch(asyncDecrement())}
        >
          Уменьшить
        </button>
      </div>
    </div>
  )
}

export default Counter;