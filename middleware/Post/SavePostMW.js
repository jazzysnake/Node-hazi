
/**
 * This Middleware is responsible for saving a single post to the db. 
 * For that it uses POST params, and if res.local.post exitsts, it updates, otherwise it
 * creates a new db entry. It redirects to /post/:id upon success.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (
            typeof req.body.username==='undefined' ||
            typeof req.body.title==='undefined'    ||
            typeof req.body.drinkType==='undefined'||
            typeof req.body.roast==='undefined'||
            typeof req.body.rating==='undefined'||
            typeof req.body.desc==='undefined'
            ) {
            return next();
        }
        //TODO save to db
        return res.redirect('/');
    };
};