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
          "ingredient": 11165,
          "name": "cilantro",
          "estimatedCostInCents": 159
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
      }
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
      },
      {
        "name": "Best Pizza Ever",
        "id": 357864,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "name": "pizza dough",
            "id": 15,
            "quantity": {
              "amount": 4,
              "unit": "c"
            }
          },
          {
            "name": "all the cheese",
            "id": 16,
            "quantity": {
              "amount": 2.5,
              "unit": "tsp"
            }
          },
          {
            "name": "sauce",
            "id": 17,
            "quantity": {
              "amount": 3,
              "unit": "c"
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
    ];
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

  it.only('should be able to tell if the user has the ingredients required to cook a given recipe', () => {
    let result = testPantry.determineIfUserHasEnoughIngredients(testRecipeData[0])
    expect(result).to.equal(false)
  });
  
  it('should be able to tell if the user has the enough ingredients required to cook a given recipe', () => {
    let result = testPantry.figureIfHasSufficientAmount(testRecipeData[0])
    expect(result).to.equal('algo')
  });

  it('should determine the amount of ingredients still needed to cook a given meal', () => {
    let result = testPantry.findAmountMissing(testRecipeData[0]);
    expect(result).to.equal()
  });
});

