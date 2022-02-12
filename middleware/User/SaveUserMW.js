/**
 * This Middleware is responsible for saving a user to the db. 
 * Using POST params it determines if this is an update or a 
 * new user. If it is a new user it creates a new db entry.
 * Upon success it redirects to /user/:id.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};  