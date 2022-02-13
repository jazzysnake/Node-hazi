const expect = require('chai').expect;
const getPostMW = require('../../../../middleware/Post/GetPostMW');

describe('getPostMiddleWare ', function () {
    it('shall set res.locals.post with a post object', function (done) {
        const req = {
            params:{
                postid:'mockpostid'
            }
        };
        const res = {
            locals:{}
        };
        const populated = {
            exec: function(p3){p3(null,'mockPost');}
        };
        const found = {
            populate:function(p2){
                expect(p2).to.eql('_author');
                return populated;
            }
        }
        const mw = getPostMW({
            PostModel:{
                findOne:function(p1){
                    expect(p1).to.be.eql({_id:'mockpostid'});
                    return found;
                }
            },
        });

        mw(req,res,(err)=>{
            expect(err).to.be.eql(undefined);
            expect(res.locals.post).to.be.eql('mockPost');
            done();
        });
    });
    it('shall call next with an error when there is a db problem', function (done) {
        const req = {
            params:{
                postid:'mockpostid'
            }
        };
        const res = {
            locals:{}
        };
        const populated = {
            exec: function(p3){p3('db problem',null);}
        };
        const found = {
            populate:function(p2){
                expect(p2).to.eql('_author');
                return populated;
            }
        }
        const mw = getPostMW({
            PostModel:{
                findOne:function(p1){
                    expect(p1).to.be.eql({_id:'mockpostid'});
                    return found;
                }
            },
        });

        mw(req,res,(err)=>{
            expect(err).to.be.eql('db problem');
            done();
        });
    });
    it('shall call next when there was no post found in the db', function (done) {
        const req = {
            params:{
                postid:'mockpostid'
            }
        };
        const res = {
            locals:{}
        };
        const populated = {
            exec: function(p3){p3(undefined,null);}
        };
        const found = {
            populate:function(p2){
                expect(p2).to.eql('_author');
                return populated;
            }
        }
        const mw = getPostMW({
            PostModel:{
                findOne:function(p1){
                    expect(p1).to.be.eql({_id:'mockpostid'});
                    return found;
                }
            },
        });

        mw(req,res,(err)=>{
            expect(err).to.be.eql(undefined);
            expect(res.locals.post).to.be.eql(undefined);
            done();
        });
    });
});