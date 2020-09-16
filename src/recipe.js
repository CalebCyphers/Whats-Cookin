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
    return parseFloat((costCounter / 100))
  }
  returnInstructions() {
    return this.instructions
  }
  filterByTag(letter) {
    var tags =  this.tags.filter(tag =>{
      return tag.split('').includes(letter.toLowerCase())
    })
    return tags
  }
  containsIngredient(inputIngredient) { 
    let filterdArray = this.ingredients.filter(ingredient => {
      return ingredient.name.includes(inputIngredient.toLowerCase())
    })
    if (filterdArray.length > 0) {
      return true
    }
  }
  searchByIngredient(inputIngredient) {
    var ing =  this.ingredients.find(ingredient => {
      return ingredient.name.includes(inputIngredient.toLowerCase())
    })
    if (ing.name === undefined) {
      return false
    }
    return ing.name
    
  }
}

export default Recipe;
