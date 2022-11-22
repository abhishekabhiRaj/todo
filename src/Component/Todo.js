import React, {useState} from "react";
import "./Todo.css";

function Todo() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);
  const add = () => {
    setTodo([...todo, {
      id: todo.length,
      value: input,
    }], console.log(todo));
    setInput('');
  }

  const deleteItem = (key) => {
    todo.pop(key);
    document.getElementById(key).style.display = 'none';
  }
  return (
    <>
      <div className="container">
        <section className="todo-container">
          <div className="todo-list">
            <section className="list bg-heading">
              <span>Todo List</span>
              <span></span>
            </section>
            {
              todo.map((value, key)=>{
                return(
                  <section className="list" key={key} id={key}>
                    <span> {value.value} </span>
                    <span onClick={()=> deleteItem(key)} className="closeIcon" >X</span>
                  </section>
                );
              })
            }
          </div>
          <div className="post-btn">
            <input placeholder="Write list..."
             value={input}
             onChange={(e)=>setInput(e.target.value)}
             />
            <button onClick={add}>Add</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Todo;