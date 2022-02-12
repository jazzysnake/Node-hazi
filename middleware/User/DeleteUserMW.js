/**
 * This Middleware is responsible for deleting a user from the db.
 * For that it needs the user id. After deleting, it redirects to /user.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};