var expect = require('chai').expect;
var deletePostMW = require('../../../../middleware/Post/DeletePostMW');

describe('DeletePostMW', function () {
        it('shall redirect to / after deletion', function (done) {
            const res = {
                locals:{
                    post:{
                        remove: function remove(cb) {
                            cb(undefined);
                        }
                    }
                },
                redirect:function redirect(route) {
                    expect(route).to.be.equal('/');
                    done();
                }
            };
            const mw = deletePostMW({
                PostModel:{},
            });

            mw({},res,(err)=>{
                expect(err).to.be.eql(undefined);
            });
        });
        it('shall call next with an error if there is a db error', function (done) {
            const res = {
                locals:{
                    post:{
                        remove: function remove(cb) {
                            cb('db error');
                        }
                    }
                },
                redirect:function redirect(route) {}
            };
            const mw = deletePostMW({
                PostModel:{},
            });

            mw({},res,(err)=>{
                expect(err).to.be.eql('db error');
                done();
            });
        });

        it('shall call next if res.locals.post is undefined', function (done) {
            const res = {
                locals:{},
                redirect:function redirect(route) {}
            };
            const mw = deletePostMW({
                PostModel:{},
            });

            mw({},res,(err)=>{
                expect(err).to.be.eql(undefined);
                done();
            });
        });
});