import { useEffect, useRef, useState } from "react";
import useScroll from "../hooks/useScroll";
import useRequest from "../hooks/useRequest";
import axios from "axios";

function List() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [data, loading, error] = useRequest(fetchTodos, [page]);
  const targetRef = useRef();

  //Эта часть подгружает контент в конце страницы
  useScroll(targetRef, () => {
    setPage(prev => prev + 1);
  })

  //Добовляем данные
  useEffect(() => setTodos(prev => prev.concat(data)), [data]);

  function fetchTodos() {
    return axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10&_page=' + page);
  }

  return (
    <div>
        {error ? <h1>Ну тип ошибочка. {error}</h1> : <></>}
        {loading ? <h1>Грузим данные...</h1> : <></>}
        {todos.map(todo => 
          <div style={{padding: "20px", border: '2px solid black'}}>
            {todo.id}. {todo.title}
          </div>
        )}  
      <div ref={targetRef} style={{height: "20px"}}></div>
    </div>
  );
}

export default List;