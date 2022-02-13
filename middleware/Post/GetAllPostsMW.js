const requireOption = require('../requireOption');
/**
 * This Middleware is responsible for getting all posts from the db. 
 */
module.exports = function (objectrepository) {
    const PostModel = requireOption(objectrepository,'PostModel');
    return function (req, res, next) {
        PostModel.find({},(err,posts)=>{
            if (err) {
                return next();
            }
            res.locals.posts = posts;
            return next();
        })
    };
};