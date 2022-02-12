/**
 * This Middleware is responsible for deleting a post from the db. 
 * After that it redirects to /.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};