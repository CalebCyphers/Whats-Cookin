import { expect } from 'chai';
import Recipe from '../src/recipe.js';
let recipeData =
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
     "instructions" : [
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
      {
        "number": 4,
        "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt."
      },
      {
        "number": 5,
        "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown."
      },
      {
        "number": 6,
        "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce."
      }
    ],
    "tags": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]
  }
  let ingredientsData = [
    {
      "name": "all purpose flour",
      "id": 20081,
       "estimatedCostInCents": 742
    },
    {
      "name": "baking soda",
      "id": 18372,
      "estimatedCostInCents": 742
    },
    {
      "name": "egg",
      "id": 1123,
      "estimatedCostInCents": 742
    }
];
let recipe;
describe('Recipe', () => {
  beforeEach(() => {

    recipe = new Recipe(recipeData, ingredientsData);
  });

  describe('Recipe Data', () => {

    it('Should hold its own ingredient data', () => {
      expect(recipe.ingredients).to.equal(recipeData.ingredients);
    })

    it('Should hold its own instruction data', () => {
      expect(recipe.instructions).to.equal(recipeData.instructions);
    })
  })

  it('Should be able to calculate the cost of its ingredients', () => {
    expect(recipe.calculateCost()).to.equal(22.26);
  });
  it('Should be able to return recipe instructions ', () => {
    expect(recipe.returnInstructions()).to.deep.equal(
      [
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
        {
          "number": 4,
          "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt."
        },
        {
          "number": 5,
          "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown."
        },
        {
          "number": 6,
          "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce."
        }
      ]
    )
  })
  it('Should return if the recipe contains an ingredient correctly', () => {
    expect(recipe.containsIngredient("baking soda")).to.equal(true)
  })
  it('Should be able to filter the recipe by tags', () => {
    expect(recipe.filterByTag('a')).to.deep.equal([ 'antipasti', 'starter', 'snack', 'appetizer', 'antipasto' ])
  })
  it('Should be able to search the recipe by ingredient', ()=>{
    expect(recipe.searchByIngredient("baking soda")).to.equal("baking soda")
  })
  
});
