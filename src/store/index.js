import { configureStore } from '@reduxjs/toolkit';
import cashReducer from './cashReducer';
import customerReducer from './customerReducer';
import counterSlice from './counterSlice';
import createSagaMiddleware from 'redux-saga';
import { counterWatcher } from '../saga/countSaga';

const sagaMiddleware = createSagaMiddleware();

/* В отличии от createStore, ему не нужен combineReducer,
 * если нет более 1ой вложенности. Плюс он автоматом 
 * подхватывает некоторые middleware. 
 */
const store = configureStore({
  reducer: {
    cash: cashReducer,
    customers: customerReducer,
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Принимает watcher
sagaMiddleware.run(counterWatcher);

export default store;