/**
 * This Middleware is responsible for saving a single post to the db. 
 * For that it uses POST params, and if res.local.post exitsts, it updates, otherwise it
 * creates a new db entry. It redirects to /post/:id upon success.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};