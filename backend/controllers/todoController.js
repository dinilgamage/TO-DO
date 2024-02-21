const Todo = require('../models/todoModel');
const mongoose = require('mongoose');

//get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get a single to-do
exports.getTodo = async (req, res) => {
  const id = req.params.id;

  //prevent internal errors from invalid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.status(200).json(todo);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//create a new to-do
exports.createTodo = async (req, res) => {
  const title = req.body.title;

  try {
    const todo = await Todo.create({ title });
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//update a to-do
exports.updateTodo = async (req, res) => {
  const id = req.params.id;

  //prevent internal errors from invalid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  try {
    const todo = await Todo.findOneAndUpdate({_id: id}, {
      ...req.body
    })

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }

    res.status(200).json({ message: 'Todo updated', todo });

  } catch {
    res.status(400).json({ message: err.message });
  }
};

//delete a to-do
exports.deleteTodo = async (req, res) => {
  const id = req.params.id;
  
  //prevent internal errors from invalid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Todo not found' });
  }
    
  try {
    const todo = await Todo.findByIdAndDelete({_id: id});

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.status(200).json({ message: 'Todo deleted', todo });
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};