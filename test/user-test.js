import { expect } from 'chai';

import User from '../src/user.js';

let recipeData;

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

    recipeData = [
      {
        "name": "Loaded Chocolate Chip Pudding Cookie Cups",
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "name": "all purpose flour",
            "id": 20081,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          {
            "name": "baking soda",
            "id": 18372,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          },
          {
            "name": "egg",
            "id": 1123,
            "quantity": {
              "amount": 1,
              "unit": "large"
            }
          }
        ],
        "instructions": [
          {
            "number": 1,
            "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
          },
          {
            "number": 2,
            "instruction": "Add egg and vanilla and mix until combined."
          },
          {
            "number": 3,
            "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees."
          }
        ],
        "tags": [
          "antipasti",
          "starter"
        ]
      },
      {
        "name": "Maple Dijon Apple Cider Grilled Pork Chops",
        "id": 678353,
        "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
        "ingredients": [
          {
            "name": "apple cider",
            "id": 1009016,
            "quantity": {
              "amount": 1.5,
              "unit": "cups"
            }
          },
          {
            "name": "apples",
            "id": 9003,
            "quantity": {
              "amount": 2,
              "unit": ""
            }
          },
          {
            "name": "garlic",
            "id": 11215,
            "quantity": {
              "amount": 1,
              "unit": "clove"
            }
          }
        ],
        "instructions": [
          {
            "number": 1,
            "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!"
          }
        ],
        "tags": [
          "lunch",
          "main course",
          "main dish"
        ]
      }];
  });

  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('Should be an instance of User', () => {
    expect(user1).to.be.an.instanceOf(User);
  });

  it('Should have a unique id', () => {
    expect(user1.id).to.eql(1);
  });

  it('Should have a name', () => {
    expect(user1.name).to.eql('Boba');
  });

  it('Should have a pantry', () => {
    const pantry = [
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
      }];

    expect(user1.pantry).to.deep.eql(pantry);
  });

  it('Should have a property of favoriteRecipes with a default value of empty array', () => {
    expect(user1.favoriteRecipes).to.eql([]);
  });

  it('Should be able to add recipes to favoriteRecipes', () =>{
    user1.addToFavorites(recipeData[0]);
    user1.addToFavorites(recipeData[1]);

    expect(user1.favoriteRecipes.includes(recipeData[0])).to.eql(true);
    expect(user1.favoriteRecipes.includes(recipeData[1])).to.eql(true);
    expect(user1.favoriteRecipes).to.deep.eql([recipeData[0], recipeData[1]]);
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

    expect(user1.filterFavorites('antipasti')).to.deep.eql([recipeData[0]]);
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

  it('Should be able to filter recipes to cook by tag', () => {
    user1.addToRecipesToCook(recipeData[0]);
    user1.addToRecipesToCook(recipeData[1]);

    expect(user1.filterRecipesToCook('starter')).to.deep.eql([recipeData[0]]);
  });

  it('Should start the User off with zero recipes to cook', () => {
    expect(user1.recipesToCook).to.deep.eql([]);
    expect(user1.recipesToCook.length).to.eql(0);
  });

  it('Should be able to add recipes to recipesToCook', () => {
    user1.addToRecipesToCook(recipeData[1]);
    user1.addToRecipesToCook(recipeData[0]);

    expect(user1.recipesToCook).to.deep.eql([recipeData[1], recipeData[0]]);
  });
});
