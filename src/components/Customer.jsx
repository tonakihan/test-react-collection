import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, delCustomerAction } from "../store/customerReducer";
import { fetchCustomers } from "../asyncAction/customers";

function Customer() {
  const userInput = useRef();
  const dispath = useDispatch();
  const customers = useSelector(state => state.customers.customers);
  
  function add(name) {
    const customer = {
      name,
      id: Date.now(),
    }
    dispath(addCustomerAction(customer));
  }
  function del(name) {
    dispath(delCustomerAction(name));
  }
  
  return(
    <div>
      {customers.length > 0 
        ? <div>
            <h1>Customers</h1>
            {customers.map(customer => (
              <div>{customer.name}</div>
            ))}
          </div>
        : <h1> Нету ни одного элемента</h1>
      }
      <input ref={userInput} placeholder="Тут нужно имя"></input>
      <button onClick={() => add(userInput.current.value)}>Add</button>
      <button onClick={() => del(userInput.current.value)}>Del</button>
      <button onClick={() => dispath(fetchCustomers())}>Get from server</button>
    </div>
  )
}

export default Customer;