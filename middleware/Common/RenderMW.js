/**
 * This Middleware is responsible for rendering the html. 
 */
module.exports = function (objectrepository,viewName) {
    return function (req, res, next) {
        next();
    };
};