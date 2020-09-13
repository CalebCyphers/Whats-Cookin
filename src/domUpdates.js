let domUpdates = {
  randomNumber :  Math.floor(Math.random() * 49) + 1,

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
      alert('Sorry, the recipes failed to load. Try again later.')})
  },

  grabUsers() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData',)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(domUpdates.randomNumber)
      greetUser(data.wcUsersData[domUpdates.randomNumber -1])
       return data.wcUsersData;
        })
    .catch(err => {
        console.log(err);
        alert('Sorry, the user information failed to load. Try again later.');
    })
  },

    grabIngredients() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
    .then(response => {
        return response.json()
    }).then(ingredientData => {
        return ingredientData.ingredientsData;
        })
    .catch(err => {
        console.log(err);
        alert('Sorry, the ingredients failed to load. Try again later.');    
  })
 },
mergeFetchTimelines() {
   Promise.all([domUpdates.grabUsers(), domUpdates.grabIngredients()])
   .then(values => {
     let usersData = values[0]
     let ingredientsData = values[1]
     let currentUser =domUpdates.createUser(usersData)
     let pantry = domUpdates.createPantry(currentUser,ingredientsData)
        displayPantry(pantry)
   })
    .catch(err => {
        console.log(err);
        alert('Sorry, the information failed to load. Try again later.');
    })
  },
  createUser(usersData) {
    let currentUser = usersData.find(user => {
        let parsedID = parseInt(user.id);
        console.log(domUpdates.randomNumber)
        return parsedID === domUpdates.randomNumber})
        return currentUser
  },
  createPantry(currentUser,ingredientsData){
  currentUser.pantry.forEach(pantryItem => {
  let currentIngredient = ingredientsData.find(ingredient => {
      return pantryItem.ingredient === ingredient.id;
  })
  pantryItem.name = currentIngredient.name;
  pantryItem.estimatedCostInCents = currentIngredient.estimatedCostInCents;
  return new Pantry(currentUser.pantry)
  })
  }
}

