import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { decrement, increment } from '../store/counterSlice';

export function Counter() {
  // Аргумент `state` уже корректно типизирован как `RootState`
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment())}>Добавить</button>
      <button onClick={() => dispatch(decrement())}>Уменьшить</button>
    </div>
  )
}