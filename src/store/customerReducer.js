const defaultState = {
  customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {...state, customers: [...state.customers, action.payload]}
    case REMOVE_CUSTOMER:
      return {...state, customers: state.customers.filter(customer => customer.name !== action.payload)}
    default: 
      return state;
  }
}

export function addCustomerAction(payload) {
  return({type: ADD_CUSTOMER, payload})
}
export function delCustomerAction(payload) {
  return({type: REMOVE_CUSTOMER, payload})
} 
export default customerReducer;