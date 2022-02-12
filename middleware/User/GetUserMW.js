/**
 * This Middleware is responsible for getting a single user from the db. 
 * For that it needs the post id.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.user={
            _id:123,
            username:'fadfsdfrel="stylesheet"',
            email:'adfadfs@dfafd.hu',
            bio:'adlskfjlaksdfkljasldkfjalksjdfklasdfkl'
        }
        next();
    };
};