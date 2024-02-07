import { addManyCustomersAction } from "../store/customerReducer";

function fetchCustomers() {
  return function (dispath) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispath(addManyCustomersAction(json)))
  }
}

export {fetchCustomers};