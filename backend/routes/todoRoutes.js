
const express = require('express');
const todoController = require('../controllers/todoController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

//require auth for all todo routes
router.use(requireAuth);

router.get('/', todoController.getTodos);
router.get('/:id', todoController.getTodo);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);
router.delete('/all/completed', todoController.deleteCompletedTodos);

module.exports = router;