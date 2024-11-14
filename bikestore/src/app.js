import express from 'express';
import { connPool } from './config/server.js';

const app = express();

app.set('port', process.env.PORT || 3000);

connPool;

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});