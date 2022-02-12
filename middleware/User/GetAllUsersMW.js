/**
 * This Middleware is responsible for getting all users from the db. 
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};