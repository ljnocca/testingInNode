const expect = require('expect');

const utils = require('./utils');

describe('Utils', ()=>{
  it('should add two numbers', ()=> {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
  });

  it('should asyncAdd 2 numbers', (done)=> {
    utils.asyncAdd(5,3, (sum)=> {
      expect(sum).toBe(8).toBeA('number');
      done();
    });
  });

  it('should square a number', ()=> {
    var res = utils.square(9);

    expect(res).toBe(81).toBeA('number');
  });

  it('should asyncSquare a number', (done)=> {
    utils.asyncSquare(3, (res)=> {
      expect(res).toBe(9).toBeA('number');
      done();
    });
  });
});



// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Laurent'}).toEqual({name: 'Laurent'})
//   // expect([2,3,4]).toInclude(4);
//   expect({
//     name:'Laurent',
//     age: 31,
//     location: 'Houston'
//   }).toInclude({
//     age: 31
//   })
// });

it('should set your first and last name', ()=>{
  var user = {
    location: 'Houston',
    age: 31
  };

  var res = utils.setName(user, 'Laurent Nocca');

  expect(res).toInclude({
    firstName: 'Laurent',
    lastName: 'Nocca'
  });
});
