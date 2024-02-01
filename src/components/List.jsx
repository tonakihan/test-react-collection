import { useRef, useState } from "react";
import useScroll from "../hooks/useScroll";

function List() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  const childRef = useRef();

  useScroll(childRef, () => {
    fetchTodos(page);
  }, [todos])

  function fetchTodos(page = 1) {
    if (page < 1) {
      setPage(1);
      return;
    }
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10&_page=' + page)
      .then(response => response.json())
      .then(json => {
        setTodos(prev => [...prev, ...json]);
        setPage(prev => prev + 1);
      });
  }

  return (
    <div>
      {todos.map(todo => 
        <div style={{padding: "20px", border: '2px solid black'}}>
          {todo.id}. {todo.title}
        </div>
      )}
      <div ref={childRef} style={{height: "20px"}}></div>
    </div>
  )
}

export default List;