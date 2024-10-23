
import React, { useState, useEffect } from 'react'; 

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

 
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Updated tasks: ", tasks); 
  }, [tasks]);


  const addTask = () => {
    if (inputValue.trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    const newTasks = [...tasks, inputValue];
    setTasks(newTasks);
    setInputValue(""); 
    console.log("Task added: ", inputValue);
  };


  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div 
      style={{ height: "100vh" }}
      className='bg-img d-flex justify-content-center align-items-center'
    >
      <div>
        <h1 className='text-center'>Todo App</h1>
        <input className='py-2'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Enter a task"
        />
        <button className='border-success rounded-end-1 bg-success py-2 text-white' onClick={addTask}>Add +</button>

        <ul className='list-unstyled text-center'>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className='border-0 bg-danger rounded text-white p-2 m-3' onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
