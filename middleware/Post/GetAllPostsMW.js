/**
 * This Middleware is responsible for getting all posts from the db. 
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.posts=[{
            user:{username:'akldsfjsfj'},
            _id:'123',
            title:'alsdfjkdflsfkl',
            drinktype:'adfadfs@dfafd.hu',
            desc:'adlskfjlaksdfkljasldkfjalksjdfklasdfkl',
            roast:'jadsldfakjfasdjfkal',
            rating:1,   
        },
    {
            user:{username:'akldsfjsfj'},
            _id:'123',
            title:'alsdfjkdflsfkl',
            drinktype:'adfadfs@dfafd.hu',
            desc:'adlskfjlaksdfkljasldkfjalksjdfklasdfkl',
            roast:'jadsldfakjfasdjfkal',
            rating:1,   
        }]
        next();
    };
};