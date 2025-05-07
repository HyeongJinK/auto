 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 require('dotenv').config();
 
 const app = express();
 const port = process.env.PORT || 3000;
 
 app.use(cors());
 app.use(bodyParser.json());
 
 // 라우트 설정 (추후 구현)
 app.get('/', (req, res) => {
   res.send('n8n 클론 프로젝트');
 });
 
 app.listen(port, () => {
   console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
 });