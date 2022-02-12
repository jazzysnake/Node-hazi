/**
 * This Middleware is responsible for saving a user to the db. 
 * Using POST params it determines if this is an update or a 
 * new user. If it is a new user it creates a new db entry.
 * Upon success it redirects to /user/:id.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (
            typeof req.body.username==='undefined' ||
            typeof req.body._id==='undefined'    ||
            typeof req.body.email==='undefined'||
            typeof req.body.bio==='undefined'
            ) {
            return next();
        }
        // TODO check if res.locals has user, if not create new, else save to db
        return res.redirect('/user');
    };
};