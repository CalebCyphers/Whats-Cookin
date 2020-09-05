import { expect } from 'chai';

import User from '../src/user.js';
import recipeData from '../src/data/recipes.js'

let user1;

describe('User', () => {
  beforeEach(() => {
    user1 = new User(1, 'Boba', [
      {
        'ingredient': 1077,
        'amount': 1
      },
      {
        'ingredient': 14412,
        'amount': 1
      },
      {
        'ingredient': 1009054,
        'amount': 3
      }]
    );
  });

  it('Should have a property of favoriteRecipes with a default value', () => {
    expect(user1.favoriteRecipes).to.eql([]);
  });

  it('Should be able to add recipes to favoriteRecipes', () =>{
    user1.addToFavorites(recipeData[0]);
    user1.addToFavorites(recipeData[2]);

    expect(user1.favoriteRecipes.includes(recipeData[0])).to.eql(true);
    expect(user1.favoriteRecipes.includes(recipeData[2])).to.eql(true);
    expect(user1.favoriteRecipes).to.deep.eql([recipeData[0], recipeData[2]]);
  });

  it('Should be able to remove recipes from favoriteRecipes', () =>{
    user1.removeFromFavorites(recipeData);
    user1.addToFavorites(recipeData[1]);

    expect(user1.favoriteRecipes).to.deep.eql([recipeData[1]]);

    user1.removeFromFavorites(recipeData[1]);

    expect(user1.favoriteRecipes).to.eql([]);
  });

  it('Should be able to filter through favoriteRecipes by tag', () => {
    user1.addToFavorites(recipeData[0]);
    user1.addToFavorites(recipeData[1]);
  
    expect(user1.filterFavorites('antipasti')).to.eql([recipeData[0]]);
  });

  it('Should be able to search favoriteRecipes by name or ingredient', () => {
    user1.addToFavorites(recipeData[0]);
    user1.addToFavorites(recipeData[1]);

    expect(user1.findFavorites('Loaded Chocolate Chip Pudding Cookie Cups')).to.eql([recipeData[0]]);
    expect(user1.findFavorites('egg')).to.eql([recipeData[0]]);
  });

  it('Should be able to check ingredients in User/s pantry for a given recipe', () => {
    const recipe = {
      name: 'Best Breakfast Ever',
      ingredients: [
        {
          'ingredient': 1077,
          'amount': 1
        },
        {
          'ingredient': 14412,
          'amount': 1
        },
        {
          'ingredient': 1009054,
          'amount': 3
        }
      ]};

    expect(user1.checkPantry(recipe)).to.eql('You have all the ingredients in your pantry!');
  });

  it('Should inform User if they lack required ingredients for a given recipe', () => {
    const recipe = recipeData[0];
    const pantryIngredients = user1.pantry.map(pantryItem => {
      return pantryItem.ingredient;
    })
    const missingIngredients = recipe.ingredients.filter(item => {
      return !(pantryIngredients.includes(item.id));
    })

    expect(user1.checkPantry(recipe)).to.eql(missingIngredients);
  });

  it('Should start the User off with zero recipes to cook', () => {
    expect(user1.recipesToCook).to.deep.eql([]);
    expect(user1.recipesToCook.length).to.eql(0);
  });

  it('Should be able to add recipes to recipesToCook', () => {
    user1.addToRecipesToCook(recipeData[1]);
    user1.addToRecipesToCook(recipeData[3]);

    expect(user1.recipesToCook).to.deep.eql([recipeData[1], recipeData[3]]);
  });
});
