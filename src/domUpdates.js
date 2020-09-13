let domUpdates = {
  randomNumber :  Math.floor(Math.random() * 49) + 1,

  grabRecipes() {
    fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
    .then(response => response.json())
    .then(recipeObject => {
      recipeObject.recipeData.forEach(recipe =>{
        domUpdates.displayAllRecipes(recipe);
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
     let currentUser = createUser(usersData)
     let pantry = createPantry(currentUser,ingredientsData)
        domUpdates.displayPantry(pantry)
   })
    .catch(err => {
        console.log(err);
        alert('Sorry, the information failed to load. Try again later.');
    })
  },
   displayAllRecipes(recipe) {
    if (recipeCards === null) {
      return 
    }
    recipeCards.innerHTML += `<article class="single-recipe-card">
         <article class="all-card-icons">
           <img class="plus-icon card-icon" src="./images/plus-icon.png" alt="plus icon used to expand and show recipe details">
           <img class="heart-icon card-icon" src="./images/heart-icon.png" alt="empty heart icon used to favorite and unfavorite recipes">
         </article>
         <article class="card-image-section">
           <img class="card-image" src="${recipe.image}" alt="sample display of recipe">
         </article>
         <article class="recipe-name-area">
           <h2 class="recipe-name">${recipe.name}</h2>
         </article>
       </article>`
  },
  
   greetUser(user) {
    const userName = document.querySelector('.user-name');
    if(userName === null){
      return 
    }
    userName.innerText += ' ' + user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
  },
  
   displayPantry(pantry) {
    if(pantryArea === null){
      return 
    }
    pantryArea.innerHTML = ''
    pantry.forEach(ingInPantry => {
      pantryArea.innerHTML += `<article class="single-ingredient-card">
    <article class="ingredient-name-area">
      <h2 class="ingredient-name">${ingInPantry.name}</h2>
    </article>
    <article class="ingredient-quantity-section">
      <button>-</button>
      <p class = 'ingredient-quantity'>${ingInPantry.amount}</p>
      <button>+</button>
    </article>
  </article>`
    })
  }
  
}

