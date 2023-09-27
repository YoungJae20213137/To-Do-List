const express = require('express');
const router = express.Router();

// 할 일 목록 조회 API
router.get('/api/tasks', (req, res) => {
  // ...
});

// 할 일 추가 API
router.post('/api/tasks', (req, res) => {
  // ...
});

// 할 일 삭제 API
router.delete('/api/tasks/:id', (req, res) => {
  // ...
});
  

module.exports = router;
