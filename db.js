const mongoose = require('mongoose');

// MongoDB와 연결
mongoose.connect('mongodb://localhost/todo-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 할 일 모델 정의
const Task = mongoose.model('Task', {
  title: String,
  completed: Boolean,
});

module.exports = Task;
