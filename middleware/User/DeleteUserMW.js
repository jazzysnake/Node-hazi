const requireOption = require('../requireOption');
/**
 * This Middleware is responsible for deleting a user from the db.
 * For that it needs the user id. After deleting, it redirects to /user.
 */
module.exports = function (objectrepository) {
    const PostModel = requireOption(objectrepository, 'PostModel');
    return function(req, res, next) {
        if (typeof res.locals.user=== 'undefined') {
            return next();
        }

        // remove the posts that would be left dangling
        PostModel.find({_author:res.locals.user._id},(err,posts)=>{
            if (err) {
                return next(err);
            }
            posts.forEach(element => {
                element.remove(
                    err =>{
                        if (err) {
                            return next(err);
                        }
                    }
                )
            });
            res.locals.user.remove(err => {
            if (err) {
                return next(err);
            }
            return res.redirect('/user');
            });
        });
    };
};