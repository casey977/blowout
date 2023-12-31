'use strict';

require('dotenv').config();

const http = require('http');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const cookie_parser = require('cookie-parser');
const {rateLimit} = require('express-rate-limit');

// Settings...

const req_limits = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 120,
    standardHeaders: false,
    legacyHeaders: false
});

// Setup...

const app = express();
const server = http.createServer(app); // Remember to change to HTTPS in the future.

// Uncomment for console reports...
/* console.log = function() {};
console.error = function() {}; */

// Routes/modules...

app.use(req_limits);
app.use(helmet);
app.use(express.json());
app.use(cookie_parser());

// Start the server...

server.listen(
    process.env.APP_PORT,
    () => {console.log(`Server is running on port ${process.env.APP_PORT}.`)}
);

// Start the websockets...

