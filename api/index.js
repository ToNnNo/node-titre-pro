const express = require('express');
const path = require('path');
const body = require('body-parser');
//const cors = require('cors');

const routes = require('./routes');

const app = express();

/*const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET, POST, DELETE'
}

app.use( cors(corsOptions) );*/

// middleware
app.use( body.json() ); // content-type: application/json
app.use( body.urlencoded({ extended: false })); // content-type: application/x-www-form-urlencoded

app.use( (request, response, next) => {
    console.log(`Request Catch :: URL = ${request.url}; VERB = ${request.method}`);

    next();
});

app.use( routes );

const port = 3000;
const server = app.listen(port, 'localhost', _ => {
    console.log(`Personal Node Server is listening on http://localhost:${port}`);
    console.log(`Shutdown Node Server width CTRL + C`);
});
