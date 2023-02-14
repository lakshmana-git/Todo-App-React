import './TaskList.css';
import TaskItem from "./TaskItem"
const TasksList=({tasks,DeleteTask})=>{
   
   
    return(
   
       <ul className="tasks-container">
          {
            tasks.map((task)=>(
            <TaskItem key={task.id} task={task} DeleteTask={DeleteTask}/>
            ))
            
          }
         
       </ul>
      
    )
      
}

export default TasksList