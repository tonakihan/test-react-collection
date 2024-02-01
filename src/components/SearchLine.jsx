import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function SearchLine() {
  const [value, setValue] = useState('');
  const debouncedCB = useDebounce(search, 500);

  function search(query) {
    fetch('https://jsonplaceholder.typicode.com/todos?_query' + query)
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  }

  return(
    <div>
      <input type="text" onChange={(e) => {setValue(e.target.value); debouncedCB(value)}} value={value} placeholder="ООООо"/>
    </div>
  )
}

export default SearchLine