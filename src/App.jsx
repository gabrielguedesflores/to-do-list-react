import React, { useState } from 'react'

import Tasks from "./components/Tasks"
import Addtask from './components/AddTask';

import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }
  ]);

  const handleTaskAddition = ( taskTitle ) => {
      const newTask = [... tasks, 
        {
          title: taskTitle,
          id: Math.random(10),
          completed: false
        },
      ];

      setTasks(newTask);
  }

  return  (
    <>
      <div className="container">
        <Addtask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={ tasks } />
      </div>
    </>
  );
};

export default App;
