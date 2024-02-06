import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Customer() {
  const dispath = useDispatch();
  const customer = useSelector(state => state.customers.customer);
  
  function add() {
    dispath({type: 'ADD_CUSTOMER', payload: 1});
  }
  function del() {
    dispath({type: 'PUT_CUSTOMER', payload: 1});
  }
  
  return(
    <div>
      <h1>Customers: {customer}. Немного не works</h1>
      <button onClick={() => add()}>Add</button>
      <button onClick={() => del()}>Del</button>
    </div>
  )
}

export default Customer;