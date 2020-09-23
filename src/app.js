'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const azRouter = express.Router();
app.disable('x-powered-by');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(azRouter)
azRouter.post('/calculateTotal', routes.calculateTotal);

module.exports = app;