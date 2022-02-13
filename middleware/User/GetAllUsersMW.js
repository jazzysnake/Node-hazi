const requireOption = require('../requireOption');
/**
 * This Middleware is responsible for getting all users from the db. 
 */
module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository,'UserModel');
    return function (req, res, next) {
        UserModel.find({},(err,users)=>{
            if (err) {
                return next();
            }
            res.locals.users = users;
            return next();
        })
    };
};