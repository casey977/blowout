const http = require('http');
const express = require('express');
const helmet = require('helmet');

const app = express();
const server = http.createServer(app);

app.use(helmet);