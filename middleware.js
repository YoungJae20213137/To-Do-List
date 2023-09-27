const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// CORS 설정
app.use(cors());

// JSON 요청 본문 파싱 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
