import React, { useEffect, useState } from "react";
import DisplayToDo from "./DIsplayToDo";
import DateAndTime from "./DateAndTime";
import "../index.css";

function InputToDo() {
  let localStorageStringValue = localStorage.getItem("todovalues");
  let localStorageParsedValue = JSON.parse(localStorageStringValue);

  const [toDoValue, setToDoValue] = useState("");
  const [toDoList, setToDoList] = useState(localStorageParsedValue);

  const handleChange = (e) => setToDoValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toDoValue.trim() === "") {
      alert("Please enter a valid todo");
      return;
    }
    if (!toDoList.some((item) => item.todo === toDoValue)) {
      setToDoList([...toDoList, { todo: toDoValue, isChecked: false }]);
      setToDoValue("");
    } else {
      alert("ToDo with the same name is already created !!!");
    }
  };
  useEffect(() => {
    console.log(toDoList);
    const setLocalStorage = localStorage.setItem("todovalues", JSON.stringify(toDoList));
  }, [toDoList])

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mt-4 mb-2 sm:text-3xl md:text-4xl">ToDo App</h1>
      <DateAndTime />
      <div className="w-screen flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 w-9/10 md:flex-row md:justify-center md:w-6/10"
        >
          <input
            type="text"
            placeholder="Enter your today's todo"
            value={toDoValue}
            onChange={handleChange}
            className="border-[2px] border-gray-500 rounded-xl pb-3 pt-2 pl-3 w-9/10"
          />
          <button
            type="submit"
            className="bg-blue-500 text-l text-white rounded-xl p-2 w-1/3"
          >
            Add ToDo
          </button>
        </form>
      </div>
      <div className="w-9/10 md:w-6/10">
        <DisplayToDo toDoList={toDoList} setToDoList={setToDoList} />
      </div>
    </div>
  );
}

export default InputToDo;
