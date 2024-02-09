import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

interface CounterState {
  value: number,
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` выведет тип состояния из аргумента `initialState`
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    // TODO: ничего не понял, но очень интересно
    // Использование типа PayloadAction для объявления содержимого `action.payload`
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

// Сгенерированные action creators
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

// TODO: все непонятно
// Весь остальной код может использовать тип `RootState`
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;