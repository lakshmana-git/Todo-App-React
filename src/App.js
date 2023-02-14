
import './App.css';
import {useState} from 'react';
import { CustomForm } from './CustomForm';
import  TasksList from './TasksList';


function App() {

  const [tasks,setTasks]  = useState([])
  //Tasks(array) created to store and render each task
  

  const AddTask=(task)=>{
    //AddTask function helps us to add a Task in customForm component
    //AddTask function is given to CustomForm componet as prop
    setTasks([...tasks,task])
   


  }
  const DeleteTask=(id)=>{
    //This funciton helps to delete element(render rest of elements)
    //DeletTask is given to TaskItem by props drilling
    //FROM App==>customForm==>TasksList==>TaskItem(used here)
    setTasks(prevTasks=>(prevTasks.filter(t=>t.id!==id)))
  
  }
  
  return (
  
    <div className="main">
 
    <div className="todo-card">
      
      <header className='todo-header'>
        <h1>To-Do List</h1>
      </header>
      
      <CustomForm AddTask={AddTask}/>
    
      <TasksList tasks={tasks} DeleteTask={DeleteTask}/>
    </div>
    </div>
    

  )
    
}

export default App;
