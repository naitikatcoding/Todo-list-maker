import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Task")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  expanded: { type: Boolean, default: false }
});

const Todo = mongoose.model('Todo', taskSchema);

app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Todo.find();
    const formatted = tasks.map(t => ({ 
      id: t._id, 
      text: t.text, 
      completed: t.completed, 
      expanded: t.expanded 
    }));
    res.json(formatted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/tasks', async (req, res) => {
  try {
    const newTodo = new Todo({ text: req.body.text });
    await newTodo.save();
    res.json({ 
      id: newTodo._id, 
      text: newTodo.text, 
      completed: newTodo.completed, 
      expanded: newTodo.expanded 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/tasks/:id', async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { returnDocument: 'after' }
    );
    
    res.json({
      id: updated._id,
      text: updated.text,
      completed: updated.completed,
      expanded: updated.expanded
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
