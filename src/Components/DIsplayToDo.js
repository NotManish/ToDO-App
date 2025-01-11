function DisplayToDo(props) {
  const handleComplete = (index) => {
    const updatedList = props.toDoList.map((item, idx) =>
      idx === index ? { ...item, isChecked: !item.isChecked } : item
    );
    props.setToDoList(updatedList);
  };

  const deleteItem = (index) => {
    const filteredList = props.toDoList.filter((_, indx) => indx !== index);
    props.setToDoList(filteredList);
  };

  return (
    props.toDoList.map((element, index) => (
      <div key={index} className="bg-blue-50 rounded-md mt-5 flex justify-between p-3">
        <p>
          {index + 1}){" "}
          <span className={element.isChecked ? "line-through-red" : ""}>
            {element.todo.charAt(0).toUpperCase() + element.todo.slice(1)}
          </span>
        </p>
        <div className="flex gap-3">
          {element.isChecked && <p>Completed</p>}
          <input
            type="checkbox"
            checked={element.isChecked}
            onChange={() => handleComplete(index)}
            className="scale-125"
          />
          <span>
            <i
              className="fa-solid fa-trash-can"
              onClick={() => deleteItem(index)}
            ></i>
          </span>
        </div>
      </div>
    ))
  );
}

export default DisplayToDo;
