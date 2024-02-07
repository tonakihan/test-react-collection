import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cashReducer from './cashReducer';
import customerReducer from './customerReducer';
import counterSlice from './counterSlice';
import createSagaMiddleware from 'redux-saga';
import { counterWatcher } from '../saga/countSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  counter: counterSlice,
})

// В отличии от createStore, ему нафиг не нужен combineReducer
// Также он автоматом подхватывает middleware 
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// Принимает watcher
sagaMiddleware.run(counterWatcher);

export default store;