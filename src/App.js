import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus, faEdit, faTrash , faSearch} from '@fortawesome/free-solid-svg-icons';

import TaskItem from './components/taskItem/taskItem.js';
import NewTask from './components/createNewTask/newTask.js';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = { id: Date.now(), name: "New Task" };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className='todoRoot'>
      <div className='wrapper-header margin-bottom'>
        <h2>Tasks</h2>
      </div>
      <div className='wrapper-search margin-bottom'>
        <FontAwesomeIcon icon={faSearch} />
        <input className='search-input' placeholder='Pesquisar ...' />
      </div>
      <div className='menu margin-bottom'>
        <button className='add-item' onClick={addTask}>  <FontAwesomeIcon icon={faPlus} /> </button>
      </div>
      <div className='tasks margin-bottom'>
        {tasks.map(task => (
          <TaskItem key={task.id} name={task.name} />
        ))}
      </div>

          <NewTask/>

    </div>
  );
}

export default App;
