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
  },

  grabUsers() {
    fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData',)
    .then(response => {
      return response.json()
    })
    .then(data => {
        let currentUser = data.wcUsersData.find(user => user.id === (Math.floor(Math.random() * 49) + 1))
    })
    .catch(err => {
        console.log(err);
        alert('Sorry, the user information failed to load. Try again later.');
    })
  }
};