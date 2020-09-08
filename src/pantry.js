class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
    this.filtered
    this.goodAmount;
    this.notEnough = []
  }

  determineIfUserHasEnoughIngredients(recipe) {
    let AllIngredientInPantryIds = this.contents.map(ing =>{
      return ing.ingredient 
    })

     this.filtered = recipe.ingredients.filter(ingredient => {
      return AllIngredientInPantryIds.includes(ingredient.id)
    })

     this.goodAmount =  this.filtered.filter(ing =>{
      if (AllIngredientInPantryIds.indexOf(ing.id) > -1) {
        if (!this.contents[AllIngredientInPantryIds.indexOf(ing.id)].amount >= ing.quantity.amount) {
          this.notEnough.push(ing)
        }
        return this.contents[AllIngredientInPantryIds.indexOf(ing.id)].amount >= ing.quantity.amount
      }
    })
    return this.goodAmount.length === this.filtered.length
  }

  findAmountMissing(recipe) {
//invoke determineIfUser... ()recipe
    //if returns false => 
    //find which ingredients are not satisfied by pantry
  if (!this.determineIfUserHasEnoughIngredients(recipe)) { 
    return this.notEnough.length
    }
  }
}

export default Pantry;



















// let pantryIngredientIds = this.contents.map(item => item)
// for (var i = 0; i < 10; i++) {
//   for (let j = 0 ; j < 10; j++) {

//   }
//   console.log(`${i},${j}`)
// }
//   if (!pantryIngredientIds.includes(recipe.ingredients[i].id)) {
//     return false;
//   }
// }
// return true;
// })

// input - an array of required ingredients and a required quantity.amount
// input - an array of ingredients that are stocked in the pantry (this.contents)
// output - a boolean reflecting wether or not the pantry contents have the required ingredients

// let pantryIngredientIds = this.contents.map(item => item)
// recipe.ingredients.filter((ingredient, i) => {
//   pantryIngredientIds.forEach() {

//   }
//   if (pantryIngredientIds.ingredient === ingredient.id) {
//     return ingredient.quantity.amount >= pantryIngredientIds[i].amount
//   }

    // let reMappedRecipeIngredients = recipe.ingredients.map(recipeIngredient => {
//   console.log(recipeIngredient);
//   return {
//     ingredient: recipeIngredient.id,
//     amount: recipeIngredient.quantity.amount
//   }
// })

// reMappedRecipeIngredients.forEach(item => {
//   this.contents.includes
// })

