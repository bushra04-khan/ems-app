import React from 'react'
import Header from '../other/header'
import TaskListNumbers from '../other/TaskListNumbers';
import Tasklist from '../TaskList/Tasklist';

const Employeedashboard = (data) => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header  data={data}/>
        <TaskListNumbers data={data}/>
        <Tasklist data={data}/>
    </div>
  )
}

export default Employeedashboard;
