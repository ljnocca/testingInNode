const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('server',()=>{
  describe('#get/', ()=>{
    it('should return hello world response', (done)=> {
      request(app)
        .get('/')
        .expect(404)
        .expect((res)=>{
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    })
  });

  describe('#getUsers', ()=>{
    it('should be an array of users', (done)=> {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res)=>{
          expect(res.body).toInclude({
            name: 'Laurent',
            age: 31
          });
        })
        .end(done);
    })
  });
});
