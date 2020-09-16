const chai = require('chai');
import {expect} from 'chai';
const spies = require('chai-spies');

chai.use(spies);

describe('domUpdates spies', () => {
  beforeEach(() => {
    global.domUpdates = {};
    chai.spy.on(domUpdates, ['displayAllRecipes', 'greetUser', 'displayFavorites', 'showRecipePopup'], () => { });
  });

  afterEach(() => {
    chai.spy.restore(domUpdates)
  });
  
  it('should display all recipes on load', () => {
    let recipes = [];
    let currentUser = 'Taylor';

    domUpdates.displayAllRecipes(recipes, currentUser);

    expect(domUpdates.displayAllRecipes).to.have.been.called(1);
    expect(domUpdates.displayAllRecipes).to.have.been.called.with(recipes);
    expect(domUpdates.displayAllRecipes).to.have.been.called.with(currentUser);
  });
  
  it('should greet a new user on load', () => {
    let user = 'Caleb';

    domUpdates.greetUser(user);

    expect(domUpdates.greetUser).to.have.been.called(1);
    expect(domUpdates.greetUser).to.have.been.called.with(user);
  });
  
  it('should display favorites when favorites is clicked on menu', () => {
    let favorites = [];

    domUpdates.displayFavorites(favorites);

    expect(domUpdates.displayFavorites).to.have.been.called(1);
    expect(domUpdates.displayFavorites).to.have.been.called.with(favorites);
  });

  it('should show recipe popup when recipe image is clicked', () => {
    domUpdates.showRecipePopup()
    expect(domUpdates.showRecipePopup).to.have.been.called(1);
  });
});



