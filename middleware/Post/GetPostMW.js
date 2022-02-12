/**
 * This Middleware is responsible for getting a single post from the db. 
 * For that it needs the post id.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.post={
            user:{
                _id:'dlafj',
                username:'akldsfjsfj'
            },
            _id:'123',
            title:'alsdfjkdflsfkl',
            drinktype:'adfadfs@dfafd.hu',
            desc:'adlskfjlaksdfkljasldkfjalksjdfklasdfkl',
            roast:'jadsldfakjfasdjfkal',
            rating:1,   
        },
        next();
    };
};