class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }

  determineIfUserHasEnoughIngredients(recipe) {
    let filtered = recipe.ingredients.filter(ingredient => {
      let ids = this.contents.map(ing =>{
        return ing.ingredient 
      })
 return ids.includes(ingredient.id)
    })
    let goodAmount =  filtered.filter((ing, i) =>{
      let ids = this.contents.map(ing =>{
        return ing.ingredient 
      })
    
if (ids.indexOf(ing.id) > -1) {
  return this.contents[ids.indexOf(ing.id)].amount >= ing.quantity.amount
}
    })
    return goodAmount.length === filtered.length
  }
// user pantry has amount
//recipe has amount
//each have an id
// need to check every id in the pantry to recipe ingredients id

//needed ingredients and amount from recipe vs ingredients in pantry
//recipe: ingredients: quantity: amount
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

