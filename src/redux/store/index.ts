import {configureStore} from '@reduxjs/toolkit';
import testReducer from './testSlice';
import textReducer from './testSlice';

const store = configureStore({
  reducer: {
    testSlice: testReducer,
    textSlice: textReducer,
  },
});

export default store;