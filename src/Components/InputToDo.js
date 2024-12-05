import React, { useState } from "react";
import DisplayToDo from "./DIsplayToDo";
import DateAndTime from "./DateAndTime";

function InputToDo() {
  const [toDoValue, setToDoValue] = useState(""); // Single todo input
  const [toDoList, setToDoList] = useState([]); // List of todos

  const handleChange = (e) => {
    setToDoValue(e.target.value); // Update the single todo value
  };

  const handleClick = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    if (toDoValue.trim() === "") {
      alert("Please enter a valid todo");
      return;
    } if(!toDoList.includes(toDoValue)){
      setToDoList([...toDoList, toDoValue]); // Update the todo list
      setToDoValue(""); // Clear the input field after adding
    }else{
      alert("ToDo with the same name is already created !!!");
    }
    
  };
  return (
    <div className="main">
       <h1>ToDo App</h1>
       <DateAndTime/>
      <div className="form-container">
     
      <form>
        <input
          type="text"
          placeholder="Enter your today's todo"
          value={toDoValue} // Controlled input value
          onChange={handleChange} // Update state on typing
        />
        <button type="submit" onClick={handleClick}>
          Add ToDo
        </button>
      </form>
    </div>
    <div className="list">
    <DisplayToDo toDoList={toDoList} setToDoList={setToDoList}/>
    </div>
    </div>
    
  );
}

export default InputToDo;
