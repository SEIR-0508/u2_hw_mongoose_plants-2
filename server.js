const express = require('express');
const routes = require('./routes');
const db = require('./db');

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const logger = require('morgan');
app.use(logger('dev'))

// app.use() middleware here ^ ///////////////////

app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))