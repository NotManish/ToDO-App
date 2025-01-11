import { useState } from "react";


function DisplayToDo(props) {

  const [checked, setCheck] = useState(false);
  let handleComplete = () => {
    setCheck(!checked);
  }

  let deleteItem = (index) => {
    let filteredList = props.toDoList.filter((element, indx) => {
      return indx !== index;
    })
    props.setToDoList(filteredList);
  }

  return (
    props.toDoList.map((element, index) => {

      return (
        <ul>
          <li>
            {index + 1})
            {checked ? <p style={{ textDecoration: "line-through" }}>{element.charAt(0).toUpperCase() + element.slice(1)}</p> :
              <p>{element.charAt(0).toUpperCase() + element.slice(1)}</p>}
            <input type="checkbox" onClick={handleComplete}></input>
            <span>
              <i className="fa-solid fa-trash-can" onClick={() => { deleteItem(index); }}></i>
            </span>
          </li>
        </ul>
      )
    })
  )
}
export default DisplayToDo;