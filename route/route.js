const renderMw = require('../middleware/Common/RenderMW');
const savePostMw = require('../middleware/Post/SavePostMW');
const deletePostMw = require('../middleware/Post/DeletePostMW');
const getPostMw = require('../middleware/Post/GetPostMW');
const getAllPostsMw = require('../middleware/Post/GetAllPostsMW');

const saveUserMw = require('../middleware/User/SaveUserMW');
const deleteUserMw = require('../middleware/User/DeleteUserMW');
const getUserMw = require('../middleware/User/GetUserMW');
const getAllUsersMw = require('../middleware/User/GetAllUsersMW');
const RenderMW = require('../middleware/Common/RenderMW');

module.exports = function(app){
    const objectrepository = {};

    // Post routes
    // List all Posts
    app.get('/',
            getAllPostsMw(objectrepository),
            renderMw(objectrepository,'index'),
    );

    // Delete a Post
    app.get('/delete/post/:postid',
            getPostMw(objectrepository),
            deletePostMw(objectrepository),
    );

    // View a single Post
    app.get('/post/:postid',
            getPostMw(objectrepository),
            RenderMW(objectrepository,'post'),
    );
    
    // Add a new Post
    app.use('/add/post',
            savePostMw(objectrepository),
            RenderMW(objectrepository,'add-post'),
    );

    // User routes
    // List all Users
    app.get('/user',
            getAllUsersMw(objectrepository),
            renderMw(objectrepository, 'all-users'),
    );

    // Delete a User
    app.get('/delete/user/:userid',
            getUserMw(objectrepository),
            deleteUserMw(objectrepository),
    );

    // View a single User
    app.get('/user/:userid',
            getUserMw(objectrepository),
            RenderMW(objectrepository,'user'),
    );

    // Add a new User
    app.use('/add/user',
            saveUserMw(objectrepository),
            RenderMW(objectrepository,'add-edit-user'),
    );

    // Edit an existing User
    app.use('/edit/user/:userid',
            saveUserMw(objectrepository),
            RenderMW(objectrepository,'add-edit-user'),
    );
}