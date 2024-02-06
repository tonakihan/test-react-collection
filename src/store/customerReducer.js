const defaultState = {
  customers: []
}

const customerReducer = (state = defaultState, action) => {
  function remove(val) {
    const index = state.customers.indexOf(val);
    const res = state.customers.splice(index, 1);
    return res;
  }

  switch (action.type) {
    case 'ADD_CUSTOMER':
      return {...state, customers: [...state.customers, action.payload]}
    case 'PUT_CUSTOMER':
      return {...state, customers: remove(action.payload)}
    default: 
      return state;
  }
}

export default customerReducer;