/**
 * This Middleware is responsible for deleting a post from the db. 
 * After that it redirects to /.
 */
module.exports = function (objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.post=== 'undefined') {
            return next();
        }
        // TODO remove from db
        res.locals.post.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};