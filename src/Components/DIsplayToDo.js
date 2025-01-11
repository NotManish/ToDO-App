function DisplayToDo(props){
 
  let deleteItem=(index)=>{
    let filteredList= props.toDoList.filter((element,indx)=>{
      return indx!==index;
    })
    props.setToDoList(filteredList);
  }
  
    return (
         props.toDoList.map((element,index)=>{
          
           return (
            <ul>
                <li>
                {index+1}) {element.charAt(0).toUpperCase()+element.slice(1)}
                 <input type="checkbox"></input>
                  <span>
                    <i className="fa-solid fa-trash-can" onClick={()=>{deleteItem(index);}}></i>
                    </span>
                 </li>
            </ul>
           )
         })
    )
}
export default DisplayToDo;