const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('static'));
// Load routes
require('./route/route')(app);

app.listen(3000, function() {
    console.log('server started on port:3000');
});