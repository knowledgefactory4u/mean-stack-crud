import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import user from './routes/user.routes';
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const fs = require('fs');
//if (process.env.NODE_ENV !== 'production') {
  //require('dotenv').config();
//}

const app = express();
app.use(fileUpload({
  createParentPath: true
}));

app.use(morgan('common', {
  stream: fs.createWriteStream('./'+new Date().toISOString().substr(0,10)+'.log', {flags: 'a'})
}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/',user)
app.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('App listening on port 8000!');
});  