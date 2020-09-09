import {expect} from 'chai';
import Pantry from '../src/pantry.js';
import User from '../src/user.js';

describe('Pantry', () => {
  let testUserData
  let testIngredientsData
  let testRecipeData
  let testUser
  let testPantry


  beforeEach(() => {
    testUserData = {
      "id": 2,
      "name": "Dingus Dangus",
      "pantry": [
        {
          "ingredient": 11,
          "amount": 1
        },
        {
          "ingredient": 12,
          "amount": 3
        },
        {
          "ingredient": 13,
          "amount": 5
        }
      ]
    }

    testIngredientsData = [
      {
        "id": 11,
        "name": "all purpose flour",
        "estimatedCostInCents": 142
      },
      {
        "id": 12,
        "name": "baking soda",
        "estimatedCostInCents": 582
      },
      {
        "id": 13,
        "name": "eggs",
        "estimatedCostInCents": 472
      },
      {
        "id": 18372,
        "name": "bicarbonate of soda",
        "estimatedCostInCents": 582
      },
    ]

    testRecipeData = [
      {
        "name": "Loaded Chocolate Chip Pudding Cookie Cups",
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "name": "all purpose flour",
            "id": 11,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          {
            "name": "baking soda",
            "id": 12,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          },
          {
            "name": "eggs",
            "id": 13,
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
          },
        ],
        "tags": [
          "snack",
          "appetizer",
          "hor d'oeuvre"
        ]
      }
    ]

    testUser = new User(testUserData.id, testUserData.name, testUserData.pantry)
    testPantry = new Pantry(testUser.pantry)
  });


  it('should be a function', () => {
    expect(Pantry).to.be.a("function")
  });

  it('should contain an array of the user\'s ingredients', () => {
    let result = testPantry.contents[1].ingredient
    expect(result).to.deep.equal(testUser.pantry[1].ingredient)
  });

  it('should be able to tell if the user has the ingredients required to cook a given recipe', () => {
    let result = testPantry.findWhichIngredientsAreShort(testRecipeData[0])
    expect(result.length).to.equal(1);
  });

  it.skip('should determine the amount of ingredients still needed to cook a given meal', () => {
    let result = testPantry.findAmountMissing(testRecipeData[0]);
    expect(result).to.equal('You are missing 0.5 of all purpose flour, oh no!');
  });

  it.skip('should determine how much it will cost to buy the necessary ingredients needed to cook a given meal', () => {
    let result = testPantry.calculateCostForIngredients(testRecipeData[0]);
    expect(result).to.equal(71);
  });

  it.skip('should add the necessary ingredients to my pantry', () => {
    let result = testPantry.addNecessaryIngredients(testRecipeData[0]);
    const pantryItem = {
      "ingredient": 11,
      "amount": 1
    }

    expect(result).to.deep.equal(pantryItem);
  });

  // it('should remove the ingredients used for a given meal from my pantry, once that meal has been cooked', () => {
  //   let result = testPantry.removeUsedIngredients(testRecipeData[0]);
  //   expect(result).to.deep.equal()
  // })
});

