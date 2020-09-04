const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/Pantry');

describe('Pantry', () => {
  let testPantry
  beforeEach(() => {
    let pantryData = ['cumin', 'chicken', 'carrots']
    testPantry = new Pantry(pantryData)
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a("function")
  });
});

