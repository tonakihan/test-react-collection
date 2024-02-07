import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/counterSlice'


//TODO: Хрен его знает как прикрутить whatcher сюда
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div style={{marginTop: '10px', border: "1px solid black"}}>
      <h1>Counter (with Slice)</h1>
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
        <h1>Async</h1>
        <button
          aria-label="Увеличить значение"
          onClick={() => dispatch(null)}
        >
          Увеличить
        </button>
        <span> {count} </span>
        <button
          aria-label="Уменьшить значение"
          onClick={() => dispatch(null)}
        >
          Уменьшить
        </button>
      </div>
    </div>
  )
}

export default Counter;