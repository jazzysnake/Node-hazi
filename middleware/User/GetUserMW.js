const requireOption = require('../requireOption');
/**
 * This Middleware is responsible for getting a single user from the db. 
 * For that it needs the post id.
 */
module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository,'UserModel');
    return function (req, res, next) {
        UserModel.findOne({_id:req.params.userid,},
            (err,user)=>{
                if (err || !user) {
                   return next();
                }
                res.locals.user = user;
                return next();
            }
        );
    };
};