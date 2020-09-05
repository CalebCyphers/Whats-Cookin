class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }

  determineIfUserHasEnoughIngredients(recipe) {
    let pantryIngredientIds = this.contents.map(item => item.ingredient)
    for (var i = 0; i < recipe.ingredients.length; i++) {
      if (!pantryIngredientIds.includes(recipe.ingredients[i].id)) {
        return false;
      }
    }
    return true;
  }
}
export default Pantry;
