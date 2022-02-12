const express = require('express');
const app = express();

app.use(express.static('static'));

// Load routes
require('./route/route')(app);

app.listen(3000, function() {
    console.log('server started on port:3000');
});