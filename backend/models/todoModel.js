const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength:  3,
    maxlength:  100,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  user_id: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema);