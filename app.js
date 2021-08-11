const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
app.use(bodyParser.json({ strict: false }));

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');


app.use('/index', indexRouter);
app.use('/user', userRouter);
module.exports.handler = serverless(app);