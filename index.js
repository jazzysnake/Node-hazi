// Tested db
// const UserModel = require('./model/user');
// const PostModel = require('./model/post');

// let user = new UserModel();
// user.username = 'jdklafjl';
// user.email = 'dkfasdjf';
// user.bio = 'dlkafksdjklfasjdfkklasjdfkaj';
// user.save((err)=>{console.log(err);

// let post = new PostModel();
// post._author = user;
// post.title = 'dflkakslfj';
// post.rating = 2;
// post.desc = 'kdlalfasdkfjkajsldfjkasjdflj';
// post.roast = 'lisghte';
// post.drinktype = 'lasdfjlajj';

// post.save((err)=>{console.log(err)});
// });

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