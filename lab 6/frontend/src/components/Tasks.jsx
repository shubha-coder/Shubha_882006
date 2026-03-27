import { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Trash2, Check, Bell } from 'lucide-react';

const API_URL = 'http://localhost:5000/api/tasks';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [notificationPermission, setNotificationPermission] = useState(
    'Notification' in window ? Notification.permission : 'default'
  );

  const requestNotificationPermission = async () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
      return;
    }
    const permission = await Notification.requestPermission();
    setNotificationPermission(permission);
  };

  const notifyUser = (message) => {
    if (notificationPermission === 'granted') {
      new Notification("Task App", {
        body: message
      });
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    try {
      const res = await axios.post(API_URL, { text: newTaskText });
      setTasks([...tasks, res.data]);
      setNewTaskText('');
      notifyUser(`Task added: ${res.data.text}`);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTask = async (id) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`);
      setTasks(tasks.map(t => t.id === id ? res.data : t));
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="tasks-container">
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        {notificationPermission !== 'granted' && (
          <button 
            onClick={requestNotificationPermission}
            className="btn-add"
            style={{ backgroundColor: '#6366f1' }}
          >
            <Bell size={16} style={{ marginRight: '0.5rem' }}/> Enable Notifications
          </button>
        )}
      </div>
      <form onSubmit={addTask} className="task-form">
        <input 
          type="text" 
          className="task-input"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit" className="btn-add">
          <Plus size={20} /> Add
        </button>
      </form>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-content" onClick={() => toggleTask(task.id)}>
              <div className="checkbox">
                {task.completed && <Check size={16} />}
              </div>
              <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                {task.text}
              </span>
            </div>
            <button 
              className="btn-delete"
              onClick={() => deleteTask(task.id)}
              aria-label="Delete task"
            >
              <Trash2 size={20} />
            </button>
          </li>
        ))}
        {tasks.length === 0 && (
          <div style={{ textAlign: 'center', color: '#666', marginTop: '2rem' }}>
            No tasks yet. Add one above!
          </div>
        )}
      </ul>
    </div>
  );
}
