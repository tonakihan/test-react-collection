import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cashReducer from './cashReducer';
import customerReducer from './customerReducer'
import counterSlice from './counterSlice';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  counter: counterSlice,
})

// В отличии от createStore, ему нафиг не нужен combineReducer
const store = configureStore({
  reducer: rootReducer, 
});

export default store;