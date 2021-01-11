const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();
require('nunjucks').configure(path.join(__dirname, 'template'), {
    autoescape: true, // xss
    express: app
});

app.use( express.static( path.join(__dirname, 'public') ) );

// middleware
app.use( (request, response, next) => {
    console.log(`Request Catch: ${request.url}`);

    next();
});

app.use( routes );

const port = 3200;
const server = app.listen(port, 'localhost', _ => {
    console.log(`Personal Node Server is listening on http://localhost:${port}`);
    console.log(`Shutdown Node Server width CTRL + C`);
});
