/**
 * This Middleware is responsible for saving a user to the db. 
 * Using POST params it determines if this is an update or a 
 * new user. If it is a new user it creates a new db entry.
 * Upon success it redirects to /user/:id.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('save called')
        if (
            typeof req.body.username==='undefined' ||
            typeof req.body._id==='undefined'    ||
            typeof req.body.email==='undefined'||
            typeof req.body.bio==='undefined'
            ) {
                console.log('save called undef')
            return next();
        }
        console.log('save called redir')
        //TODO save to db
        return res.redirect('/user');
    };
};