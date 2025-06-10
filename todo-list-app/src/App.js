import React, { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Walk the dog' },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;

    const task = {
      id: Date.now(), 
      text: newTask,
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>📝 Todo List</h1>

      {/* Input field */}
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Enter new task"
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>Add</button>
      </div>

      {/* Task list */}
      <ul style={styles.list}>
        {tasks.map(task => (
          <li key={task.id} style={styles.item}>
            {task.text}
            <button onClick={() => removeTask(task.id)} style={styles.removeButton}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
const styles = {
  container: {
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: '40px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '200px',
    marginRight: '10px',
  },
  addButton: {
    padding: '10px 20px',
    fontSize: '16px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginTop: '20px',
  },
  item: {
    background: '#f2f2f2',
    margin: '10px auto',
    padding: '10px 20px',
    borderRadius: '5px',
    width: '300px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  removeButton: {
    background: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '25px',
    height: '25px',
    cursor: 'pointer',
  },
};

export default App;
