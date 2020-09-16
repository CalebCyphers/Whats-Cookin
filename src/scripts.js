import './css/styles.scss';
import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import domUpdates from './domUpdates';

let myPantryButton = document.querySelector('.menu-my-pantry');
let myRecipesButton = document.querySelector('.menu-my-upcoming-recipes');
let myFavoritesButton = document.querySelector('.menu-favorites');
let navMenu = document.querySelector('.open-menu-selections');
let hamburgerIcon = document.querySelector('.hamburger-menu');
let closeIcon = document.querySelector('.x-menu');
let menuMyUpcomingRecipes = document.querySelector('.menu-my-upcoming-recipes-title');
let favButton = document.querySelector('.view-favorites');
let recipeCards = document.querySelector('.all-cards');
let recipeSearch = document.querySelector('.search-recipes-input');
let recipeDisplay = document.querySelector('.recipe-display');
let recipesData;
let ingredientsData;
let currentUser
let favorites;
let pantry;
let cookAbleRecipes;
let missingIng;

window.onload = function() {
  mergeFetchTimelines();
};

recipeSearch.addEventListener('keyup', ()=>{
  if(favButton.classList.contains('clicked')){
    domUpdates.displayAllRecipes(filterInputs(recipeSearch.value,ingredientsData,'favoriteRecipes'),currentUser)

  }
  else if(menuMyUpcomingRecipes.classList.contains('clicked')){
    domUpdates.displayAllRecipes(filterInputs(recipeSearch.value,ingredientsData,'recipesToCook'),currentUser)

  }
  else{
  domUpdates.displayAllRecipes(filterInputs(recipeSearch.value,ingredientsData),currentUser)
  }
});

favButton.addEventListener('click', ()=>{
  if(!favButton.classList.contains('clicked')) {
    domUpdates.displayFavorites(findFavorites(currentUser,recipesData,'favoriteRecipes'))
    favButton.classList.add('clicked')
  }
  else{
    favButton.classList.remove('clicked')
    domUpdates.displayAllRecipes(recipesData,currentUser)
  }
})

menuMyUpcomingRecipes.addEventListener('click',() =>{
      if(!menuMyUpcomingRecipes.classList.contains('clicked')) {
        domUpdates.displayUpcomingRecipes(currentUser,recipesData)
        menuMyUpcomingRecipes.classList.add('clicked')
      }
      else{
        menuMyUpcomingRecipes.classList.remove('clicked')
    domUpdates.displayAllRecipes(recipesData,currentUser)
      }
})

myPantryButton.addEventListener('click', () => {
  domUpdates.displayPantry(pantry)
})
recipeDisplay.addEventListener('click', domUpdates.hideRecipePopup);

recipeCards.addEventListener('click', () => {
if(event.target.classList.contains('star-icon')) {
  toggleFavorites(event)
}
if (event.target.classList.contains('plus-icon')) {
  addToUpcomingRecipes(currentUser, recipesData);
}
if (event.target.classList.contains('card-image')) {
  domUpdates.showRecipePopup();
  let chosenRecipe = event.target.closest('.single-recipe-card')
  findNames(createRecipe(chosenRecipe.id),ingredientsData)
  domUpdates.displayRecipeInfo(createRecipe(chosenRecipe.id),cookAbleRecipes,missingIng)
}
})


hamburgerIcon.addEventListener('click', ()=>{
  navMenu.classList.remove('hidden');
  hamburgerIcon.classList.add('hidden');
  closeIcon.classList.remove('hidden');
  myPantryButton.classList.remove('hidden');
  myFavoritesButton.classList.remove('hidden');
  myRecipesButton.classList.remove('hidden');
})

closeIcon.addEventListener('click', ()=>{
  navMenu.classList.add('hidden');
  hamburgerIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
  myPantryButton.classList.add('hidden');
  myFavoritesButton.classList.add('hidden');
  myRecipesButton.classList.add('hidden');
})

function toggleFavorites(event){
  if(event.target.src === "https://image.flaticon.com/icons/svg/149/149222.svg"){
    event.target.src =   "https://image.flaticon.com/icons/svg/148/148841.svg"
    addToFavorites(event)
  }else{   
    removeFromFavorites(event)
    event.target.src =  "https://image.flaticon.com/icons/svg/149/149222.svg" }
}

function addToFavorites(event){
let recipe = event.target.closest('.single-recipe-card')
currentUser.addToFavorites(recipe.id)
}

function removeFromFavorites(event) {
  favorites = currentUser.favoriteRecipes
  let recipe = event.target.closest('.single-recipe-card')
  if(favorites.includes(recipe.id)){
    currentUser.removeFromFavorites(recipe.id)
  }
}

function createUser(usersData) {
  let currentUser = usersData.find(user => {
    let parsedID = parseInt(user.id);
    return parsedID === domUpdates.randomNumber
  })
  return new User(currentUser.id,currentUser.name,currentUser.pantry)
}

function createRecipe(id) {
  let currentRecipe = recipesData.find(recipe => {
    return recipe.id == id;
  })
  return new Recipe(currentRecipe, ingredientsData)

};

function addToUpcomingRecipes(currentUser) {
  let recipe = event.target.closest('.single-recipe-card')
  currentUser.addToRecipesToCook(recipe.id);
};

function createPantry(currentUser, ingredientsData) {
  currentUser.pantry.forEach(pantryItem => {
    let currentIngredient = ingredientsData.find(ingredient => {
      return pantryItem.ingredient === ingredient.id;
    })
    if(!currentIngredient.name ){
      return
    }
    refigurePantry(pantryItem,currentIngredient)
    
  })
  //what if we made a class here?
  return new Pantry(currentUser.pantry)
}

function grabRecipes() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
  .then(response => response.json())
  .then(recipeObject => {
    recipesData = recipeObject.recipeData
  })
  .catch(err => {
    console.log(err);
    alert('Sorry, the recipes failed to load. Try again later.')})
}

function grabUsers() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData',)
  .then(response => {
    return response.json()
  })
  .then(data => {
    domUpdates.greetUser(data.wcUsersData[domUpdates.randomNumber -1])
     return data.wcUsersData;
      })
  .catch(err => {
      console.log(err);
      alert('Sorry, the user information failed to load. Try again later.');
  })
}
  function grabIngredients() {
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
}
function mergeFetchTimelines() {
 Promise.all([grabUsers(), grabIngredients(), grabRecipes()])
 .then(values => {
   let usersData = values[0];
   ingredientsData = values[1];
    currentUser = createUser(usersData)
    domUpdates.displayAllRecipes(recipesData,currentUser);
    pantry = createPantry(currentUser,ingredientsData)
    missingIng = findWhichIngredientsAreMissing(recipesData)
    cookAbleRecipes = findRecipiesCanCook(missingIng)
 })
  .catch(err => {
      console.log(err);
      alert('Sorry, the information failed to load. Try again later.');
  }) 
}

function findFavorites(currentUser,recipesData,currentUserProperty) {
  let ids = currentUser[currentUserProperty]
  let favoriteRecipies = recipesData.filter(recipe =>{
    return ids.includes(String(recipe.id))
  })
  return favoriteRecipies
}

function findRecipiesCanCook(missingIng){

  return missingIng.filter(recipe =>{
     return recipe.NotEnough.length === 0
  })
}
function refigurePantry(pantryItem,currentIngredient){
  pantryItem.amount = Math.ceil(pantryItem.amount)
  pantryItem.name = currentIngredient.name;
  pantryItem.estimatedCostInCents = currentIngredient.estimatedCostInCents;
}

function findWhichIngredientsAreMissing(recipesData) {
  return recipesData.map(recipe =>{
  return {name :recipe.name, id:recipe.id,ingredients:recipe.ingredients, NotEnough:pantry.findWhichIngredientsAreShort(recipe)}
 })
}

function filterInputs(letters,ingredientsData,currentUserProperty){
  if(letters === ''){
    return recipesData
  }
  letters = letters.trim()
  let arrayToFilter;
  if(currentUserProperty === undefined){
     arrayToFilter = recipesData;
  }
  else{
   arrayToFilter = findFavorites(currentUser,recipesData,currentUserProperty);
  }
  return findLettersInRecipes(arrayToFilter,letters,ingredientsData)
}
function findLettersInRecipes (arrayToFilter,letters,ingredientsData){
  return arrayToFilter.filter(recipe => {
  
    let correctIngredient  = ingredientsData.find(ingredient =>{ 
      return recipe.ingredients.find(recIngredients => {
        return recIngredients.id === ingredient.id
      })
     })
    return correctIngredient.name.toUpperCase().includes(letters.toUpperCase()) || recipe.name.toUpperCase().includes(letters.toUpperCase()) || recipe.tags.join('').includes(letters)
})
}
function findNames(recipe,ingredientsData) {
  recipe.ingredients.forEach(ingredient =>{
    let correctIngredient= ingredientsData.find(ing =>{
        return ingredient.id === ing.id
      })    
     
      ingredient.name = correctIngredient.name

    })
    console.log(recipe)
  }
  




