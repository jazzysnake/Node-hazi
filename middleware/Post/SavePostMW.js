const requireOption = require('../requireOption');
/**
 * This Middleware is responsible for saving a single post to the db. 
 * For that it uses POST params, and if res.local.post exitsts, it updates, otherwise it
 * creates a new db entry. It redirects to /post/:id upon success.
 */
module.exports = function (objectrepository) {
    const PostModel = requireOption(objectrepository,'PostModel');
    // const UserModel = requireOption(objectrepository,'UserModel');
    return function (req, res, next) {
        if (res.locals.users.length===0) {
            return next('add users first');
        }
        if (
            typeof req.body.title==='undefined'    ||
            typeof req.body.drinktype==='undefined'||
            typeof req.body.roast==='undefined'||
            typeof req.body.rating==='undefined'||
            typeof req.body.desc==='undefined'
            ) {
            return next();
        }
        if(typeof res.locals.post === 'undefined'){
            res.locals.post = new PostModel(); 
        }
        res.locals.post.title = req.body.title;
        res.locals.post.desc = req.body.desc;
        res.locals.post.drinktype = req.body.drinktype;
        res.locals.post.roast = req.body.roast;
        res.locals.post.rating = req.body.rating;
        res.locals.post._author = req.body.userid;
    
        res.locals.post.save(err=>{
            if(err){
                return next(err);
            }
        return res.redirect('/');
        });
    }
};