/**
 * This Middleware is responsible for deleting a user from the db.
 * For that it needs the user id. After deleting, it redirects to /user.
 */
module.exports = function (objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.post=== 'undefined') {
            return next();
        }

        res.locals.post.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};