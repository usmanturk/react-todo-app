import DeleteIcon from "../assets/deleteicon.png"
import TickIcon  from "../assets/tickicon.png"
import "./todo.css"

export const TodoItem = ({ title, deleteTodo, ticktodo }) => {
  
  return (
    <div className="todo-item" id="todo-1">
      <p className="todo-task-title">{title}</p>
      <div className="todoicons">
      <img className="todo-icon" src={TickIcon} onClick={ticktodo} />
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
      </div>
    </div>
  )
}