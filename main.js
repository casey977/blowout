require('dotenv').config();

const http = require('http');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const cookie_parser = require('cookie-parser');
const app = express();
const server = http.createServer(app);

// Uncomment for console reports...
/* console.log = function() {};
console.error = function() {}; */

app.use(helmet);
app.use(express.json());
app.use(cookie_parser());

server.listen(
    process.env.APP_PORT,
    () => {console.log(`Server is running on port ${process.env.APP_PORT}.`)}
);