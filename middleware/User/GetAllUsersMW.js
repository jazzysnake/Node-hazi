/**
 * This Middleware is responsible for getting all users from the db. 
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.users=[{
            _id:'sldkafjlj',
            username:'fadfsdfrel="stylesheet"',
            email:'adfadfs@dfafd.hu',
            bio:'adlskfjlaksdfkljasldkfjalksjdfklasdfkl'
        },
    {
        _id:'sldkafjlj',
        username:'fadfsdfrel="stylesheet"',
        email:'adfadfs@dfafd.hu',
            bio:'adlskfjlaksdfkljasldkfjalksjdfklasdfkl'}]
        next();
    };
};