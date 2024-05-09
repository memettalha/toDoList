import { useState } from "react"
import { Form } from "react-bootstrap"



export function Todo(){
    const [todoInput, setInput] = useState("");

    const [todos, setTodos] = useState([])

   function addTodo(){
    const item = {
      id:Math.floor(Math.random()*1000),
      value:todoInput, 
    }
    setTodos(oldItems =>[...oldItems,item])
    setInput("");
   }
   function deleteItem(id){
    const newArray = todos.filter(todo => todo.id !== id);  
    setTodos(newArray)
   }
    return(
        <div>
        <h1>TO-DO LİST</h1>
        <Form.Label htmlFor="inputText">Hedef</Form.Label>
        <Form.Control
          type="text"
          id="inputText"
          aria-describedby="passwordHelpBlock"
          value={todoInput}
          onChange = {e => setInput(e.target.value)}
        />
        <button onClick={() =>addTodo() }>EKLE</button>
        <ul>
          {todos.map(item =>{
            return(
              <li key={item.id}>{item.value} <button onClick={() =>deleteItem(item.id)}>X</button></li>
            )
          })}
        </ul>
        </div>

    )
}