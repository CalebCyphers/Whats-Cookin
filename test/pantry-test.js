import {expect} from 'chai';
import Pantry from '../src/pantry.js';
import User from '../src/user.js';

describe('Pantry', () => {
  let testUserData
  let testIngredientsData
  let testRecipeData

  beforeEach(() => {
    testPantry = new Pantry()
    testUser = new User
    testUserData = {
      "id": 2,
      "name": "Dingus Dangus",
      "pantry": [
        {
          "ingredient": 11,
          "amount": 5
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
      }
    ]
  
  });

  

  

  it('should be a function', () => {
    expect(Pantry).to.be.a("function")
  });
});

