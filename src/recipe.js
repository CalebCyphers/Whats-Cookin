class Recipe {
  constructor(recipe, ingredientsData) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData;
  }

  calculateCost() {
    let costCounter = 0;
    this.ingredients.forEach(ingredient => {
      this.ingredientsData.find(specificIngredient => {
        if (specificIngredient.id === ingredient.id) {
          costCounter += (Number(specificIngredient.estimatedCostInCents) *
          Number(ingredient.quantity.amount))
        }
      })
    });
    return costCounter;
  }
  returnInstructions() {
    return this.instructions
  }
  filterByTag(letter) {
    return this.tags.includes(letter.toLowerCase())
  }
  SearchByIngredient('ingredient') {
    return this.ingredients.filter(ingredient => {
      return ingredient.name.includes(ingredient.toLowerCase())
    })
  }
}

export default Recipe;
