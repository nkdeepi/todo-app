import React, { useState } from "react";
import "./todo.css";
import { BiTrash } from "react-icons/bi";
import Table from 'react-bootstrap/Table';

const Todoform = () => {
  const [input, setInput] = useState("");
  const [todolist, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };
  const addTodo = (e) => {
    // setInput(e.target.value)
    const newList = [...todolist, input];

    setTodoList(newList);
    // console.log("newlist",todolist)
    // console.log("newlist",newList)
    // console.log("newlist",...todolist)
  };
  const deleteTodo = (id) => {
    console.log("id", id);
    const deletedList = todolist.filter((data, index) => index != id);
    setTodoList(deletedList);
  };

  return (
    <div className="todoFormContainer">
      <h2>ToDo List</h2>
      <div className="inputSection">
        <form onSubmit={handleSubmit}>
          <input
            className="inputadd"
            type="text"
            placeholder="Add a todo Here...."
            name="text"
            value={input}
            onChange={handleInputChange}
          ></input>
          <button className="ButtonAdd" onClick={addTodo}>
            Add ToDo
          </button>
        </form>
      </div>

      {todolist.map((data, index) => (
        <div className="tableContainer">
          <Table className="table" striped bordered hover size="sm">
    
      <tbody>
        <tr>
          <td>{data}</td>
          <td><BiTrash className="deleteIcon" onClick={() => deleteTodo(index)} /></td>
          
        </tr>
      
        
      </tbody>
    </Table>

          {/* <h1 className="listItem" key={index}>
            {data}{" "}
            <BiTrash className="deleteIcon" onClick={() => deleteTodo(index)} />
          </h1> */}
        </div>
      ))}
    </div>
  );
};

export default Todoform;
