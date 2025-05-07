 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const path = require('path');
 require('dotenv').config();
 
 const app = express();
 const port = process.env.PORT || 3000;
 
 app.use(cors());
 app.use(bodyParser.json());

// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, 'public')));
 
 // 라우트 설정 (추후 구현)
 app.get('/', (req, res) => {
  // index.html 파일을 제공하도록 변경
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
 });
 
 app.listen(port, () => {
   console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
 });