import {createReducer, createAction} from '@reduxjs/toolkit'

const defaultState = {
  cash: 0
}

const ADD_CASH = createAction('ADD_CASH');
const GET_CASH = createAction('GET_CASH');

/* Главное отличие createReducer - данные являются mutable,
 * это значит, что их можно напрямую менять. Тоже самое есть в
 * createSlice.
 */ 
const cashReducer = createReducer(defaultState, (builder) => {
  builder
    .addCase(ADD_CASH, (state, action) => {
      state.cash += action.payload;
    })
    .addCase(GET_CASH, (state, action) => {
      state.cash -= action.payload;
    })
    .addDefaultCase((state, action) => {});
});

export {ADD_CASH, GET_CASH};
export default cashReducer;