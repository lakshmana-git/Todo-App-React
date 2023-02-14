import { useRef, useState } from "react"
import './TaskItem.css';

const TaskItem = ({task,DeleteTask})=>{
    const [ischecked,setChecked]=useState(false)
    const [text,setText]=useState(task.text)
    console.log(text)
    const inputRel = useRef("")
   
    const Handler = ()=>{
        setChecked(!ischecked)
        ischecked?ChangeTextRemove():ChangeTextLineAdd()
        
    }
    const ChangeTextLineAdd=()=>{
        setText(inputRel.current.style.textDecoration = "line-through")
       
        
    }
    
    const ChangeTextRemove=()=>{
        setText(inputRel.current.style.textDecoration = "none")
         
    }
    return (
   
      <li className="task-items">
      
        <input type="checkbox"
             className="task-item-checkbox"
             checked={ischecked}
             name={task.name}
             onChange={Handler}
             id={task.id}
        />
     
        <label htmlFor={task.id}
          className="task-item-context"
          ref={inputRel}
        >{task.name}</label>
      
        <button className="task-item-button" onClick={()=>DeleteTask(task.id)}>Delete</button>
  
      </li>
     
    
      
     
  
 
    )
}

export default TaskItem 