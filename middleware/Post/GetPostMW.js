const requireOption = require('../requireOption');
/**
 * This Middleware is responsible for getting a single post from the db. 
 * For that it needs the post id.
 */
module.exports = function (objectrepository) {
    const PostModel = requireOption(objectrepository, 'PostModel');
    return function (req, res, next) {
        PostModel.findOne({_id:req.params.postid}).populate('_author').exec((err,post)=>{
            if(err || !post){
                console.log(err);
                return next(err);
            }
            res.locals.post = post;
        return next();
        });
    };
};