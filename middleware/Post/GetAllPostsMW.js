/**
 * This Middleware is responsible for getting all posts from the db. 
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};