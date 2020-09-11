let domUpdates = {

    grabRecipes() {
    fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
    .then(response => response.json())
    .then(recipeObject => {
     recipeObject.recipeData.forEach(recipe =>{
       displayAllRecipes(recipe);
     })
    })
    .catch(err => {
        console.log(err);
        alert('Sorry, we could not load the recipes at this time.')})
  }
};