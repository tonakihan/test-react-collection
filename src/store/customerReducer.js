const defaultState = {
  customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return ({...state, customers: [...state.customers, ...action.payload]})
    case ADD_CUSTOMER:
      return ({...state, customers: [...state.customers, action.payload]})
    case REMOVE_CUSTOMER:
      return ({...state, customers: state.customers.filter(customer => customer.name !== action.payload)})
    default: 
      return state;
  }
}

function addCustomerAction(payload) {
  return({type: ADD_CUSTOMER, payload})
} 
function addManyCustomersAction(payload) {
  return({type: ADD_MANY_CUSTOMERS, payload})
} 
function delCustomerAction(payload) {
  return({type: REMOVE_CUSTOMER, payload})
} 

export {addCustomerAction, addManyCustomersAction, delCustomerAction};
export default customerReducer;