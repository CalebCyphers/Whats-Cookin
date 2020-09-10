class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }
  getIdsOfPantryIngredients() {
    return this.contents.map(ing => {
      return ing.ingredient
    })
  }
  findRecipeIngredientsInPantry(recipe) {
    let currentPantryIds = this.getIdsOfPantryIngredients()
    return recipe.ingredients.filter(ingredient => {
      return currentPantryIds.includes(ingredient.id)
    })
  }
  doesUserHaveRequiredIngredients(recipe) {
    return this.findRecipeIngredientsInPantry(recipe).length === recipe.ingredients.length
  }
  findWhichIngredientsAreShort(recipe) {
    let notEnough = this.findRecipeIngredientsInPantry(recipe).filter(ing => {
      let ingredientStock = this.findIngredientInPantry(ing).amount
      return ingredientStock < ing.quantity.amount
    })
    return notEnough
  }
  findAmountMissing(recipe) {
    let missingIngredients = this.findWhichIngredientsAreShort(recipe)
   return missingIngredients.reduce((finalArray, ingredient) => {
      finalArray.push({ name: ingredient.name, facts: { id: ingredient.id, amountMissing: ingredient.quantity.amount - this.findIngredientInPantry(ingredient).amount}})
      return finalArray
    },[])
  }
  identifyAmountOfIngredientsMissing(recipe) {
    let ingredientsMissing = this.findAmountMissing(recipe)
     return  ingredientsMissing.reduce((string, ingredient )=>{
      string += ` ${ingredient.facts.amountMissing} ${ingredient.name}\n`
      return string
    },"You are missing")
  }
  findIngredientInPantry(ingredient) {
    return this.contents.find(pantryIngredient => {
      return pantryIngredient.ingredient === ingredient.id
    })
  }
}
export default Pantry;