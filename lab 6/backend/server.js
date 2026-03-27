const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory state
let count = 0;
let tasks = [];

// --- COUNTER API ---
app.get('/api/counter', (req, res) => {
  res.json({ count });
});

app.post('/api/counter/increment', (req, res) => {
  count++;
  res.json({ count });
});

app.post('/api/counter/decrement', (req, res) => {
  count--;
  res.json({ count });
});

// --- TASKS API ---
app.get('/api/tasks', (req, res) => {
  res.json({ tasks });
});

app.post('/api/tasks', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });
  const newTask = {
    id: Date.now().toString(),
    text,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  
  task.completed = !task.completed;
  res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = tasks.length;
  tasks = tasks.filter(t => t.id !== id);
  
  if (tasks.length === initialLength) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  res.json({ message: 'Task deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
