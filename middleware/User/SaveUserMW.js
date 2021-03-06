const requireOption = require('../requireOption');
/**
 * This Middleware is responsible for saving a user to the db. 
 * Using POST params it determines if this is an update or a 
 * new user. If it is a new user it creates a new db entry.
 * Upon success it redirects to /user/:id.
 */
module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository,'UserModel');
    return function (req, res, next) {
        if (
            typeof req.body.username==='undefined' ||
            typeof req.body._id==='undefined'    ||
            typeof req.body.email==='undefined'||
            typeof req.body.bio==='undefined'
            ) {
            return next();
        }
        if(typeof res.locals.user === 'undefined'){
            res.locals.user = new UserModel(); 
        }
        res.locals.user.username = req.body.username;
        res.locals.user.email = req.body.email;
        res.locals.user.bio = req.body.bio;
        res.locals.user.save(err=>{
            if(err){
                return next(err);
            }
        return res.redirect('/user');
        })
    };
};