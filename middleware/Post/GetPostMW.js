/**
 * This Middleware is responsible for getting a single post from the db. 
 * For that it needs the post id.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};