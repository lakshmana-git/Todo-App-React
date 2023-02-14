import React from 'react';
import { useState } from 'react';
import './App.css'

export const CustomForm =({AddTask})=>{
    const [task,setTask]=useState("")
    
    const handleFormSumbit=(e)=>{
        e.preventDefault();
        setTask("")
        AddTask({
            name:task,
            id:Date.now(),
        })
    }
   
    
    return(
        <>
        <form onSubmit={handleFormSumbit} className="form-container">
           <input type="text"
             className="form-input"
             id="todo"
            value={task}
             onInput={(e)=>setTask(e.target.value)}
             required
             autoFocus
             maxLength={100}
             placeholder="Enter Task"
           />
           <button type="submit" className='form-button'>Add Task</button>
        </form>
       
    </>
    )
}

export default CustomForm;