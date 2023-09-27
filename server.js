const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// middleware.js 파일에서 미들웨어 설정을 불러옵니다.
const middleware = require('./middleware');
app.use(middleware);

// routes.js 파일에서 라우팅을 불러옵니다.
const routes = require('./routes');
app.use('/', routes);

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

app.get('/', (req, res) => {
    res.send('안녕하세요, Express 서버입니다!');
  });

app.use('/static', express.static('\To-Do-List'));
